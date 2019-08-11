const WRIKE = require('../wrike/wrike-task-api.js');
const IBM_BPM = require('../ibm-bpm/bpm-task-api.js');
const IBM_BPM_PROCESSES = require('../configuration/consts.js').IBM_BPM_PROCESSES;
const CUSTOM_FIELDS_IDS = require('../configuration/consts.js').CUSTOM_FIELDS_IDS;

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

const IBM_BPM_INTEGRATION_FOLDER_TITLE = 'IBM BPM Integration';

async function prepareIntegrationFolder() {
  let rootFolder;
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
    ibm_bpm_integration_folder = await WRIKE.createFolder(
      rootFolder.id,
      IBM_BPM_INTEGRATION_FOLDER_TITLE
    );
  }

  return ibm_bpm_integration_folder;
}

async function createOrUpdateTasks(ibm_bpm_integration_folder) {
  let integrationChildFolders = [];
  let taskList = [];
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
    console.log('123123');
    if (isFolderExists) {
      const wrikeTasks = await WRIKE.getTasksFromFolder(folderId);
      let updated = false;
      wrikeTasks.forEach(wrikeTask => {
        if (wrikeTask.customFields && wrikeTask.customFields.length > 0) {
          let taskId = null;
          wrikeTask.customFields.forEach(customField => {
            if (customField.id == CUSTOM_FIELDS_IDS.taskId) taskId = customField.value;
          });
          if (taskId && task.taskId == taskId) {
            //modify task
            updated = true;
          }
        }
      });
      if (updated === false) {
        const parameters = {
          title: task.taskSubject,
          taskId: task.taskId,
          importance: task.priority,
          status: task.taskStatus != 'Closed' ? 'Active' : 'Completed'
        };
        WRIKE.createTask(folderId, parameters);
      }
    } else {
      let newProcessFolder = await WRIKE.createFolder(
        ibm_bpm_integration_folder.id,
        task.bpdName
      );
      integrationChildFolders.push(newProcessFolder);
      const parameters = {
        title: task.taskSubject,
        taskId: task.taskId,
        importance: task.priority,
        status: task.taskStatus != 'Closed' ? 'Active' : 'Completed'
      };
      console.log('createFolder');
      WRIKE.createTask(newProcessFolder.id, parameters);
      // add or update task
    }
  }
}

async function mainApp() {
  let integration_folder = await prepareIntegrationFolder();
  createOrUpdateTasks(integration_folder);
}

mainApp();
