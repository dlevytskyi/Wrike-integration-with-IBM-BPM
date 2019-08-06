let https = require('https');
const WRIKE_CONFIG = require('../configuration/consts.js').WRIKE_CONFIG;
const API_PATHS_METHODS = require('../configuration/consts.js').WRIKE_API_PATHS_AND_METHODS;

function getFoldersTree() {
  const path = API_PATHS_METHODS.getFoldersTree.path;
  const method = API_PATHS_METHODS.getFoldersTree.method;
  const requestOptions = buildRequestOptions(path, method);
  let req = https.request(requestOptions, function(res) {
    let body = [];
    res
      .on('data', function(data) {
        body.push(data);
      })
      .on('end', function() {
        body = Buffer.concat(body);
        console.log(JSON.parse(body.toString()));
      });
  });
  req.end();
}

// getFoldersTree();
//IEAC3OXWI7777777
// createFolder('IEAC3OXWI7777777', 'AWESOME FOLDER');
function getFolder() {}

function createFolder(folderId, title) {
  const path = encodeURI(
    API_PATHS_METHODS.createFolder.path.replace('{folderId}', folderId) + '?title=' + title
  );
  const method = API_PATHS_METHODS.createFolder.method;
  const requestOptions = buildRequestOptions(path, method);
  let req = https.request(requestOptions, function(res) {
    let body = [];
    res
      .on('data', function(data) {
        body.push(data);
      })
      .on('end', function(data) {
        body = Buffer.concat(body);
      });
  });
  req.end();
}

createTask('IEAC3OXWI4LMISQ5', 'AWESOME TASK 2');

function createTask(folderId, title) {
  const path = encodeURI(
    API_PATHS_METHODS.createTask.path.replace('{folderId}', folderId) + '?title=' + title
  );
  const method = API_PATHS_METHODS.createTask.method;
  const requestOptions = buildRequestOptions(path, method);
  let req = https.request(requestOptions, function(res) {
    let body = [];
    res
      .on('data', function(data) {
        body.push(data);
      })
      .on('end', function(data) {
        body = Buffer.concat(body);
        console.log(JSON.parse(body.toString()));
      });
  });
  req.end();
}

function buildRequestOptions(path, method) {
  const requestOptions = {
    agent: false,
    hostname: WRIKE_CONFIG.hostname,
    port: WRIKE_CONFIG.port,
    path: WRIKE_CONFIG.apiBasePath + path,
    headers: { Authorization: 'bearer ' + WRIKE_CONFIG.token },
    method: method
  };
  return requestOptions;
}

module.exports = {
  createTask,
  createFolder,
  getFolder,
  getFoldersTree
};
