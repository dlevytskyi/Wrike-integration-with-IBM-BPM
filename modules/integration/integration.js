const WRIKE = require('../wrike/wrike-task-api.js');
const IBM_BPM = require('../ibm-bpm/bpm-task-api.js');
const IBM_BPM_PROCESSES = require('../configuration/consts.js').IBM_BPM_PROCESSES;
const CUSTOM_FIELDS_IDS = require('../configuration/consts.js').INTEGRATION_VARIABLES
  .CUSTOM_FIELDS_IDS;
const IBM_BPM_INTEGRATION_FOLDER_TITLE = require('../configuration/consts.js').INTEGRATION_VARIABLES
  .IBM_BPM_INTEGRATION_FOLDER_TITLE;
const WRIKE_BPM_INTEGRATION_TEAM = require('../configuration/consts.js').INTEGRATION_VARIABLES
  .WRIKE_BPM_INTEGRATION_TEAM;
const Logger = require('../logger/logger.js');
const logger = new Logger().getInstance();

function prepareFolderIdsForRequest(arr) {
  let folderIds = '';
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      folderIds += arr[i];
      break;
    }
    folderIds += arr[i] + ',';
  }
  return folderIds;
}

async function getMembers() {
  logger.info('GET MEMBERS');
  let members = null;
  let groups = await WRIKE.queryGroups();
  await groups.forEach(group => {
    if (group.title == WRIKE_BPM_INTEGRATION_TEAM) {
      members = group.memberIds;
    }
  });
  if (members == undefined || members.length < 1) throw 'No members in IBM BPM Integration group';
  return members;
}

async function prepareIntegrationFolder() {
  logger.info('PREPARE INTEGRATION FOLDER');
  let rootFolder;
  const members = await getMembers();
  const wrikeFolderTree = await WRIKE.getFoldersTree();
  for (let i = 0; i < wrikeFolderTree.length; i++) {
    if (wrikeFolderTree[i].title == 'Root') {
      rootFolder = wrikeFolderTree[i];
    }
  }

  let folderIdsForRequest = [];
  folderIdsForRequest = prepareFolderIdsForRequest(rootFolder.childIds);

  const rootChildFolders = await WRIKE.getFolder(folderIdsForRequest);
  let ibm_bpm_integration_folder = null;

  for (let i = 0; i < rootChildFolders.length; i++) {
    if (rootChildFolders[i].title == IBM_BPM_INTEGRATION_FOLDER_TITLE) {
      ibm_bpm_integration_folder = rootChildFolders[i];
      break;
    }
  }

  if (ibm_bpm_integration_folder == null) {
    const folderParameters = {
      title: IBM_BPM_INTEGRATION_FOLDER_TITLE,
      members: members
    };
    ibm_bpm_integration_folder = await WRIKE.createFolder(rootFolder.id, folderParameters);
  }

  return ibm_bpm_integration_folder;
}

async function createOrUpdateTasks(ibm_bpm_integration_folder) {
  logger.info('TASK ACTUALIZATION (CREATE OR UPDATE)');
  let integrationChildFolders = [];
  let taskList = [];
  let members = await getMembers();
  for (let i = 0; i < IBM_BPM_PROCESSES.length; i++) {
    let tasks = await IBM_BPM.getTaskList(IBM_BPM_PROCESSES[i]);
    taskList = [...taskList, ...tasks];
  }

  if (ibm_bpm_integration_folder.childIds && ibm_bpm_integration_folder.childIds.length > 0) {
    let folderIdsForRequest = [];
    folderIdsForRequest = prepareFolderIdsForRequest(ibm_bpm_integration_folder.childIds);
    let folders = await WRIKE.getFolder(folderIdsForRequest);

    folders.forEach(element => {
      integrationChildFolders.push(element);
    });
  }

  for (let i = 0; i < taskList.length; i++) {
    let task = taskList[i];
    let isFolderExists = false;
    let folderId = null;
    for (let j = 0; j < integrationChildFolders.length; j++) {
      if (integrationChildFolders[j] && integrationChildFolders[j].title == task.bpdName) {
        isFolderExists = true;
        folderId = integrationChildFolders[j].id;
        break;
      }
    }
    if (isFolderExists) {
      logger.info('PROCESS FOLDER EXIST');
      const wrikeTasks = await WRIKE.getTasksFromFolder(folderId);
      let updated = false;
      wrikeTasks.forEach(wrikeTask => {
        if (wrikeTask.customFields && wrikeTask.customFields.length > 0) {
          let taskId = null;
          wrikeTask.customFields.forEach(customField => {
            if (customField.id == CUSTOM_FIELDS_IDS.taskId) taskId = customField.value;
          });
          if (taskId && task.taskId == taskId) {
            const taskParameters = {
              title: task.taskSubject,
              importance: task.priority,
              status: task.taskStatus != 'Closed' ? 'Active' : 'Completed',
              members: members
            };
            WRIKE.modifyTask(wrikeTask.id, taskParameters);
            updated = true;
          }
        }
      });
      if (updated === false) {
        const taskParameters = {
          title: task.taskSubject,
          taskId: task.taskId,
          importance: task.priority,
          status: task.taskStatus != 'Closed' ? 'Active' : 'Completed',
          members: members
        };
        WRIKE.createTask(folderId, taskParameters);
      }
    } else {
      logger.info('CREATE PROCESS FOLDER');
      const folderParameters = {
        title: task.bpdName,
        members: members
      };
      let newProcessFolder = await WRIKE.createFolder(
        ibm_bpm_integration_folder.id,
        folderParameters
      );
      integrationChildFolders.push(newProcessFolder);
      const taskParameters = {
        title: task.taskSubject,
        taskId: task.taskId,
        importance: task.priority,
        status: task.taskStatus != 'Closed' ? 'Active' : 'Completed',
        members: members
      };
      WRIKE.createTask(newProcessFolder.id, taskParameters);
    }
  }
}

async function mainApp() {
  let integration_folder = await prepareIntegrationFolder();
  createOrUpdateTasks(integration_folder);
}

mainApp();
