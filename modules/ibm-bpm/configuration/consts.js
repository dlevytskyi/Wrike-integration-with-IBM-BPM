const IBM_BPM_CONFIG = {
  hostname: 'bawtrialus.bpm.ibmcloud.com',
  apiBasePath: '/baw/dev/rest/bpm/wle/v1',
  user: 'mkmich',
  pass: '13251325qQ!'
};

const IBM_BPM_API_PATHS_AND_METHODS = {
  getUserDetails: {
    path: '/user',
    method: 'GET'
  }
};

module.exports = {
  IBM_BPM_CONFIG,
  IBM_BPM_API_PATHS_AND_METHODS
};
