const WRIKE_TOKEN =
  'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjI5OTY5ODIsXCJpXCI6NjQzNjk0NyxcImNcIjo0NjEyOTIzLFwidVwiOjY0MjY0MDIsXCJyXCI6XCJVU1wiLFwic1wiOltcIldcIixcIkZcIixcIklcIixcIlVcIixcIktcIixcIkNcIixcIkFcIixcIkxcIl0sXCJ6XCI6W10sXCJ0XCI6MH0iLCJpYXQiOjE1NjQ4MzcyMjd9.t3-onBAJTPicQNFumsFz-a0mIt31MkHKBHJwZeFy9e4';

const IBM_BPM_COOKIE =
  'PD-ID=x05mkUB2R0z0p9buGj2jIFhDf1XDwizKtd1xKwvBqsggokFLVCMheHkypjzWC3rHPmSt9jaPcrCo9oC110O5miBSevc5+DWFbIw9L3Q+UozR6fEfB5qEenbCxgreRMpvnhzccTtkv7XQqw/NHRdw07XQAhmd0NV11HCmjVQjRWaPbyGO/77E9j1dyT395JyJBPc3WyiqjWls/5lxhZjLM1q754NVGa9wTPilq7HzaNUvy86S/dsfHhjTYVDudF0CdUYDZf/SS3ywhLR7mWIaCsdAnePHKCcExJ/frg9VyJv4F6spOxfH4SQ6qmm+lriDIJMkVPOZcpZ9zdKStKPsxg==; PD-S-SESSION-ID=hYFcfR1dDb3hhaR35844PQ==:1_2_1_t1rBwLQp-hF+oYuW6ZMHkQl1bA4pFEOvdR+mwg9GJp5t4fRf|; 50200000_clogin=l=13032851565463148320&v=1&e=1565464950887; OPTOUTMULTI=0:0%7Cc1:1%7Cc2:0%7Cc3:0; utag_main=v_id:016c48b2fdb0002035bf150054600107700c206f00838$_sn:16$_ss:0$_st:1565464950333$is_country_member_of_eu:true$dc_visit:15$ses_id:1565463148051%3Bexp-session$_pn:1%3Bexp-session$mm_sync:1%3Bexp-session$dc_event:2%3Bexp-session$dc_region:eu-central-1%3Bexp-session; CoreID6=74434355152615654631483&ci=50200000|Digital Business Automation on Cloud Login; notice_behavior=expressed|eu; notice_preferences=2:; pageviewContext=9577ca9a-92f9-4427-be45-3f5fbe1ec9b2; userContext=0|pl|1; notice_gdpr_prefs=0|1|2:; CoreM_State=65~-1~-1~-1~-1~3~3~5~3~3~7~7~|~~|~~|~~|~||||||~|~~|~~|~~|~~|~~|~~|~~|~; CoreM_State_Content=6~|~~|~|; BMAID=af318862-8031-4d52-84ba-e76e774c3aa5; optimizelyEndUserId=oeu1564857180891r0.9458766506394406';

const WRIKE_CONFIG = {
  hostname: 'www.wrike.com',
  port: 443,
  apiBasePath: '/api/v4',
  token: WRIKE_TOKEN
};

const WRIKE_API_PATHS_AND_METHODS = {
  getFoldersTree: {
    path: '/folders',
    method: 'GET'
  },
  getFolder: {
    path: '/folders/{folderId}',
    method: 'GET'
  },
  createFolder: {
    path: '/folders/{folderId}/folders',
    method: 'POST'
  },
  createTask: {
    path: '/folders/{folderId}/tasks',
    method: 'POST'
  }
};

//https://bawtrialus.bpm.ibmcloud.com/baw/dev/rest/bpm/wle/v1/user?userName=mkmich&includeInternalMemberships=true&refreshUser=false&includeEditableUserPreferences=false&parts=all

const IBM_BPM_CONFIG = {
  hostname: 'bawtrialus.bpm.ibmcloud.com',
  apiBasePath: '/baw/dev/rest/bpm/wle/v1',
  user: 'mkmich',
  // pass: '13251325qQ!',
  cookie: IBM_BPM_COOKIE
};

const IBM_BPM_API_PATHS_AND_METHODS = {
  getUserDetails: {
    path: '/user',
    method: 'GET'
  },
  getTaskList: {
    path: '/search/query',
    method: 'PUT'
  }
};

const IBM_BPM_PROCESSES = ['Standard HR Open New Position', 'Advanced HR Open New Position'];

module.exports = {
  IBM_BPM_CONFIG,
  IBM_BPM_API_PATHS_AND_METHODS,
  IBM_BPM_PROCESSES,
  WRIKE_CONFIG,
  WRIKE_API_PATHS_AND_METHODS
};
