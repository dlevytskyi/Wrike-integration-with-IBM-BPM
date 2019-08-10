let https = require('https');
const IBM_BPM_CONFIG = require('../configuration/consts.js').IBM_BPM_CONFIG;
const IBM_BPM_API_PATHS_METHODS = require('../configuration/consts.js')
  .IBM_BPM_API_PATHS_AND_METHODS;

let getTaskList = function () {
  return new Promise(function (resolve, reject) {
    const path = encodeURI(
      IBM_BPM_API_PATHS_METHODS.getTaskList.path +
      '?condition=taskStatus|NotEquals|Closed' +
      '&organization=byTask&run=true' +
      '&shared=false' +
      '&filterByCurrentUser=false'
    );

    const method = IBM_BPM_API_PATHS_METHODS.getTaskList.method;
    const requestOptions = buildRequestOptions(path, method);

    let req = https.request(requestOptions, function (res) {
      let body = [];
      res
        .on('data', function (data) {
          body.push(data);
        })
        .on('end', function () {
          body = Buffer.concat(body);
          resolve(JSON.parse(body.toString()).data.data);
        })
        .on('error', error => {
          reject(error);
        });
    });
    req.end();
  });
}

function getUserDetails(userName) {
  const path = encodeURI(
    IBM_BPM_API_PATHS_METHODS.getUserDetails.path +
    '?userName=' +
    userName +
    '&includeInternalMemberships=true' +
    '&refreshUser=false' +
    '&includeEditableUserPreferences=false' +
    '&parts=all'
  );

  const method = IBM_BPM_API_PATHS_METHODS.getUserDetails.method;
  const requestOptions = buildRequestOptions(path, method);

  let req = https.request(requestOptions, function (res) {
    let body = [];
    res
      .on('data', function (data) {
        body.push(data);
      })
      .on('end', function () {
        body = Buffer.concat(body);
        let data = JSON.parse(body.toString()).data;
        //console.log('!!!!!!!!!!!!!!');
        //console.dir(data);
        return data;
      });
  });
  req.end();
}

//getUserDetails('mkmich');
//getTaskList();

function buildRequestOptions(path, method) {
  const requestOptions = {
    agent: false,
    hostname: IBM_BPM_CONFIG.hostname,
    path: IBM_BPM_CONFIG.apiBasePath + path,
    headers: { Cookie: IBM_BPM_CONFIG.cookie },
    method: method
  };
  return requestOptions;
}

module.exports = {
  getTaskList,
  getUserDetails
};
