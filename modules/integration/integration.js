const WRIKE = require('../wrike/wrike-task-api.js');
const IBM_BPM = require('../ibm-bpm/bpm-task-api.js');
const IBM_BPM_PROCESSES = require('../configuration/consts.js').IBM_BPM_PROCESSES;

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
const getFoldersTree = WRIKE.getFoldersTree;
const getFolder = WRIKE.getFolder;
const createFolder = WRIKE.createFolder;
const getTaskList = IBM_BPM.getTaskList;



async function mainApp() {
  let rootFolder;
  const wrikeFolderTree = await getFoldersTree();
  for (let i = 0; i < wrikeFolderTree.length; i++) {
    if (wrikeFolderTree[i].title == 'Root') {
      rootFolder = wrikeFolderTree[i];
    }
  }

  let folderIdsForRequest = [];
  folderIdsForRequest = prepareFolderIdsForRequest(rootFolder.childIds);

  const rootChildFolders = await getFolder(folderIdsForRequest);
  let integrationChildFolders = [];
  let ibm_bpm_integration_folder = null;

  for (let i = 0; i < rootChildFolders.length; i++) {
    if (rootChildFolders[i].title == IBM_BPM_INTEGRATION_FOLDER_TITLE) {
      ibm_bpm_integration_folder = rootChildFolders[i];
      break;
    }
  }

  if (ibm_bpm_integration_folder == null) {
    ibm_bpm_integration_folder = await createFolder(rootFolder.id, IBM_BPM_INTEGRATION_FOLDER_TITLE);
  }

  const taskList = await getTaskList();

  if (ibm_bpm_integration_folder.childIds && ibm_bpm_integration_folder.childIds.length > 0) {
    let folderIdsForRequest = [];
    folderIdsForRequest = prepareFolderIdsForRequest(ibm_bpm_integration_folder.childIds);
    let folders = await getFolder(folderIdsForRequest);
    folders.forEach(element => {
      integrationChildFolders.push(element);
    });
  }


  for (let i = 0; i < taskList.length; i++) {
    let task = taskList[i];
    let isProcessHandled = IBM_BPM_PROCESSES.includes(task.bpdName);
    if (isProcessHandled) {
      let isFolderExists = false;
      for (let j = 0; j < integrationChildFolders.length; j++) {
        if (integrationChildFolders[j] && integrationChildFolders[j].title == task.bpdName) {
          isFolderExists = true;
          break;
        }
      }

      if (isFolderExists) {
        // add or update task
      } else {
        let newProcessFolder = await createFolder(ibm_bpm_integration_folder.id, task.bpdName);
        integrationChildFolders.push(newProcessFolder);
        // add or update task
      }
    }
  }

  console.log(integrationChildFolders);
}

mainApp();

