let https = require('https');
const WRIKE_CONFIG = require('../configuration/consts.js').WRIKE_CONFIG;
const API_PATHS_METHODS = require('../configuration/consts.js').WRIKE_API_PATHS_AND_METHODS;
const Logger = require('../logger/logger.js');
const logger = new Logger().getInstance();

let getFoldersTree = function() {
  return new Promise(function(resolve, reject) {
    logger.info('[WRIKE] GET FOLDER TREE');
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
          logger.error(`[WRIKE] GET FOLDER TREE ERRPR:${error}`);
          reject(error);
        });
    });
    req.end();
  });
};

let getFolder = function(folderId) {
  return new Promise(function(resolve, reject) {
    logger.info('[WRIKE] GET FOLDER');
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
          logger.error(`[WRIKE] GET FOLDER ERROR:${error}}`);
          reject(error);
        });
    });
    req.end();
  });
};

function createFolder(folderId, parameters) {
  return new Promise(function(resolve, reject) {
    logger.info('[WRIKE] CREATE FOLDER');
    let url = API_PATHS_METHODS.createFolder.path.replace('{folderId}', folderId);

    //BUILD URL
    if (parameters.title == undefined) throw 'createFolder: title is required';
    url += '?title=' + parameters.title;

    if (parameters.members != undefined) url += `&shareds=[${parameters.members}]`;

    const path = encodeURI(url);
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
          logger.error(`[WRIKE] CREATE FOLDER ERROR:${error}`);
          reject(error);
        });
    });
    req.end();
  });
}

let getTasksFromFolder = function(folderId) {
  logger.info('[WRIKE] GET TASKS FROM FOLDER');
  return new Promise(function(resolve, reject) {
    let url = API_PATHS_METHODS.getTasksFromFolder.path.replace('{folderId}', folderId);
    url += '?fields=["customFields"]';
    const path = encodeURI(url);
    const method = API_PATHS_METHODS.getTasksFromFolder.method;
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
          logger.error(`[WRIKE] GET TASKS FROM FOLDER ERROR:${error}`);
          reject(error);
        });
    });
    req.end();
  });
};

let createTask = function(folderId, parameters) {
  logger.info('[WRIKE] CREATE TASK');
  return new Promise(function(resolve, reject) {
    if (parameters == undefined) throw 'Function createTask: emptry parameters';

    let url = API_PATHS_METHODS.createTask.path.replace('{folderId}', folderId);

    //BUILD URL
    if (parameters.title == undefined) throw 'CreateTask: title is required';
    url += '?title=' + parameters.title;
    if (parameters.taskId == undefined) throw 'CrateTask: taskId is required';
    url += `&customFields=[{"id": "IEAC3OXWJUABBTIG", "value": ${parameters.taskId}}]`;
    if (parameters.status == undefined) throw 'CreateTask: status is required';
    url += `&status=${parameters.status}`;
    if (parameters.members == undefined) throw 'CreateTask: group members are required';
    url += `&shareds=[${parameters.members}]`;
    if (parameters.importance != undefined) url += `&importance=${parameters.importance}`;
    const path = encodeURI(url);
    const method = API_PATHS_METHODS.createTask.method;
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
          logger.error(`[WRIKE] CREATE TASK ERROR:${error}`);
          reject(error);
        });
    });
    req.end();
  });
};

let modifyTask = function(taskId, parameters) {
  logger.info('[WRIKE] MODIFY TASK');
  return new Promise(function(resolve, reject) {
    if (parameters == undefined) throw 'Function createTask: emptry parameters';

    let url = API_PATHS_METHODS.modifyTask.path.replace('{taskId}', taskId);

    //BUILD URL
    if (parameters.title != undefined) url += '?title=' + parameters.title;
    if (parameters.status != undefined) url += `&status=${parameters.status}`;
    if (parameters.importance != undefined) url += `&importance=${parameters.importance}`;
    if (parameters.members != undefined) url += `&shareds=${parameters.members}`;

    const path = encodeURI(url);
    const method = API_PATHS_METHODS.modifyTask.method;
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
          logger.error(`[WRIKE] MODIFY TASK ERROR:${error}`);
          reject(error);
        });
    });
    req.end();
  });
};

function createCustomField(parameters) {
  logger.info('[WRIKE] CREATE CUSTOM FIELD');
  return new Promise(function(resolve, reject) {
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
        .on('end', function() {
          body = Buffer.concat(body);
          resolve(JSON.parse(body.toString()).data);
        })
        .on('error', error => {
          logger.error(`[WRIKE] CREATE CUSTOM FIELD ERROR:${error}`);
          reject(error);
        });
    });
    req.end();
  });
}

let queryGroups = function(groupId) {
  return new Promise(function(resolve, reject) {
    logger.info('[WRIKE] QUERY GROUPS');
    let url =
      groupId != undefined
        ? API_PATHS_METHODS.queryGroups.path.replace('{groupId}', groupId)
        : API_PATHS_METHODS.queryGroups.path.replace('{groupId}', '');
    const path = encodeURI(url);
    const method = API_PATHS_METHODS.queryGroups.method;
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
          logger.info(`[WRIKE] QUERY GROUPS ERROR:${error}`);
          reject(error);
        });
    });
    req.end();
  });
};

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
  getTasksFromFolder,
  createTask,
  modifyTask,
  createFolder,
  getFolder,
  getFoldersTree,
  createCustomField,
  queryGroups
};
