let https = require('https');
const WRIKE_CONFIG = require('../configuration/consts.js').WRIKE_CONFIG;
const API_PATHS_METHODS = require('../configuration/consts.js').WRIKE_API_PATHS_AND_METHODS;

let getFoldersTree = function() {
  return new Promise(function(resolve, reject) {
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
          resolve(JSON.parse(body.toString()).data);
        })
        .on('error', error => {
          reject(error);
        });
    });
    req.end();
  });
};

//IEAC3OXWI7777777
// createFolder('IEAC3OXWI7777777', 'AWESOME FOLDER');

let getFolder = function(folderId) {
  return new Promise(function(resolve, reject) {
    const path = API_PATHS_METHODS.getFolder.path.replace('{folderId}', folderId);
    const method = API_PATHS_METHODS.getFolder.method;
    const requestOptions = buildRequestOptions(path, method);
    let req = https.request(requestOptions, function(res) {
      let body = [];
      res
        .on('data', function(data) {
          body.push(data);
        })
        .on('end', function() {
          body = Buffer.concat(body);
          resolve(JSON.parse(body.toString()).data);
        })
        .on('error', error => {
          reject(error);
        });
    });
    req.end();
  });
};

function createFolder(folderId, title) {
  return new Promise(function(resolve, reject) {
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
        .on('end', function() {
          body = Buffer.concat(body);
          resolve(JSON.parse(body.toString()).data[0]);
        })
        .on('error', error => {
          reject(error);
        });
    });
    req.end();
  });
}

//createTask('IEAC3OXWI4LMISQ5', 'AWESOME TASK 2');

let getTasksFromFolder = function (folderId) {
  return new Promise(function (resolve, reject) {
    const path = API_PATHS_METHODS.getTasksFromFolder.path.replace('{folderId}', folderId);
    const method = API_PATHS_METHODS.getTasksFromFolder.method;
    const requestOptions = buildRequestOptions(path, method);
    let req = https.request(requestOptions, function (res) {
      let body = [];
      res
        .on('data', function (data) {
          body.push(data);
        })
        .on('end', function () {
          body = Buffer.concat(body);
          resolve(JSON.parse(body.toString()).data);
        })
        .on('error', error => {
          reject(error);
        });
    });
    req.end();
  });
}

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

//unittest;
const params = {
  title: 'TEST_TITLE3',
  taskId: '123123123',
  status: 'Active',
  importance: 'High'
};
createTask('IEAC3OXWI7777777', params);
getFoldersTree().then(tasks => console.log(tasks));

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

function createCustomField(parameters) {
  let url = API_PATHS_METHODS.createCustomField.path;

  //BUILD URL
  if (parameters.title == undefined) throw 'CreateCustomField: title is required parameter';
  url += `?title=${parameters.title}`;

  if (parameters.type == undefined) throw 'CreateCustomField: type is required parameter';
  url += `&type=${parameters.type}`;

  const path = encodeURI(url);
  const method = API_PATHS_METHODS.createCustomField.method;
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

module.exports = {
  getTasksFromFolder,
  createTask,
  createFolder,
  getFolder,
  getFoldersTree,
  createCustomField
};
