const WRIKE_TOKEN =
  'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjI5OTY5ODIsXCJpXCI6NjQzNjk0NyxcImNcIjo0NjEyOTIzLFwidVwiOjY0MjY0MDIsXCJyXCI6XCJVU1wiLFwic1wiOltcIldcIixcIkZcIixcIklcIixcIlVcIixcIktcIixcIkNcIixcIkFcIixcIkxcIl0sXCJ6XCI6W10sXCJ0XCI6MH0iLCJpYXQiOjE1NjQ4MzcyMjd9.t3-onBAJTPicQNFumsFz-a0mIt31MkHKBHJwZeFy9e4';

const IBM_BPM_COOKIE =
  'userContext=0|pl|1; notice_preferences=2:; notice_gdpr_prefs=0|1|2:; DBDM_NP_MIG=1; notice_behavior=expressed|eu; BMAID=a51a6abc-ee52-4518-ae52-f603d1668775; CoreID6=72197140811815655329669&ci=50200000|Digital Business Automation on Cloud Login; CoreM_State=49~-1~-1~-1~-1~3~3~5~3~3~7~7~|~~|~~|~~|~||||||~|~~|~~|~~|~~|~~|~~|~~|~; CoreM_State_Content=6~|~~|~|; pageviewContext=92719425-bfdc-4bd7-8dde-deeb7181d57f; OPTOUTMULTI=0:0%7Cc1:1%7Cc2:0%7Cc3:0; utag_main=v_id:016c80bf1c31003f158bc8ff77f403079015107100ac2$_sn:3$_ss:0$_st:1565536895513$is_country_member_of_eu:true$dc_visit:3$ses_id:1565535093733%3Bexp-session$_pn:1%3Bexp-session$mm_sync:1%3Bexp-session$dc_event:1%3Bexp-session$dc_region:eu-central-1%3Bexp-session; 50200000_clogin=v=1&l=79448431565535093887&e=1565536901373; PD-S-SESSION-ID=hYFcfR1dDb3hhaR35844PQ==:1_2_1_k8BSgrgjh7dcbUC7MAxndhZHWU9Zx7wiW6DLgLi8UHUG1W6o|; PD-ID=ZQODoUs+oaV/ADGgSftGRMuVhAXQu1KeovlaZrKH7th1GquVGI0ZSbpxOyfFWHshRikZ9EUeK9i2Ho+UgV+95NTcy8yIR5lV3iOTeVL4DAUW5bNg7PNa3pQIZ3FdEjgXyhraYJt5p7c5YnKZC7asBveVEH8dWokit8w7Zscvu6NEtjmfxWLfEbeCAhe0URiNCh2QW4cJPCwL52wrWyDt+0/39HmCgrFU8lPdMwAdjocQtltF5sHPmJkD5Mk/7QPRSe/+S0RkMsQ45eCR2NuYiuRmcLFjWaNrgh0mvVHbqQN1+xt2kwU2bFq6+5x0Yyt+vkmirLQohXKNN3C/NdlLRg==';

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
  getTasksFromFolder: {
    path: '/folders/{folderId}/tasks',
    method: 'GET'
  },
  createTask: {
    path: '/folders/{folderId}/tasks',
    method: 'POST'
  },
  modifyTask: {
    path: '/tasks/{taskId}',
    method: 'PUT'
  },
  createCustomField: {
    path: '/customfields',
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
const CUSTOM_FIELDS_IDS = {
  taskId: 'IEAC3OXWJUABBTIG'
};

module.exports = {
  IBM_BPM_CONFIG,
  IBM_BPM_API_PATHS_AND_METHODS,
  IBM_BPM_PROCESSES,
  WRIKE_CONFIG,
  WRIKE_API_PATHS_AND_METHODS,
  CUSTOM_FIELDS_IDS
};
