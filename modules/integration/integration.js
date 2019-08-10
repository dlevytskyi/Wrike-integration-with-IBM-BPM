const WRIKE = require('../wrike/wrike-task-api.js');
const IBM_BPM = require('../ibm-bpm/bpm-task-api.js');

/* get folder tree
 * search fok IBM BPM Integration folder, if no than create othrwise create
 *
 *
 *
 *
 *
 */
const IBM_BPM_INTEGRATION_FOLDER_TITLE = 'IBM BPM Integration';
let getFoldersTree = WRIKE.getFoldersTree;
let getFolder = WRIKE.getFolder;
let createFolder = WRIKE.createFolder;

getFoldersTree.then(function getRootFolder(wrikeFolderTree) {
  let rootFolder;
  let ibm_bpm_integration_folder = null;
  for (let i = 0; i < wrikeFolderTree.length; i++) {
    if (wrikeFolderTree[i].title == 'Root') {
      rootFolder = wrikeFolderTree[i];
      break;
    }
  }

  let folderIds = '';
  for (let i = 0; i < rootFolder.childIds.length; i++) {
    if (i == rootFolder.childIds.length - 1) {
      folderIds += rootFolder.childIds[i];
      break;
    }
    folderIds += rootFolder.childIds[i] + ',';
  }

  getFolder(folderIds).then(function checkForIBMBPMFolder(folder) {
    for (let i = 0; i < folder.length; i++) {
      if (folder[i].title == IBM_BPM_INTEGRATION_FOLDER_TITLE) {
        ibm_bpm_integration_folder = folder[i];
      }
    }

    if (ibm_bpm_integration_folder == null) {
      createFolder(rootFolder.id, IBM_BPM_INTEGRATION_FOLDER_TITLE).then(function TMP(folder) {
        console.dir(folder);
      });
    } else {
      console.log('folder already created');
    }
  });
});
