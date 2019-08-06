const WRIKE_TOKEN =
  'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjI5OTY5ODIsXCJpXCI6NjQzNjk0NyxcImNcIjo0NjEyOTIzLFwidVwiOjY0MjY0MDIsXCJyXCI6XCJVU1wiLFwic1wiOltcIldcIixcIkZcIixcIklcIixcIlVcIixcIktcIixcIkNcIixcIkFcIixcIkxcIl0sXCJ6XCI6W10sXCJ0XCI6MH0iLCJpYXQiOjE1NjQ4MzcyMjd9.t3-onBAJTPicQNFumsFz-a0mIt31MkHKBHJwZeFy9e4';

const IBM_BPM_COOKIE =
  ' PD-ID=7U/hJKgxdhtbqEs3jHGlw8n+x590R2e2ly+0PfYxb17Lradakme4HAKk2/0IZ/23PVmT3eJx/GM/cC/+Yvg/dJnwjFIK1z/AWEz7WT8fllPiErJQfEktHY9yixuvPk/NOGEjpWHhAdhLj7fPf/3lxV7WprvcAuKdupPS1EvH4lqqJeBRpAcKAWfcqh0ZjX35W7bzB9ivjRoUv8ZwcSp1tWfKlV3N4b7tMy94DvdMwH1sV/iT4cnf7oUSrLZvtrnVO6AWLebBIOuZGTn4JUm6WbpKB6u9hvPPiGdIgbJJmIe/LqKLJkuu5C0i0MGO20jH/wGUq5j84u56nXyPDB1DNQ==; PD-S-SESSION-ID=hYFcfR1dDb3hhaR35844PQ==:1_2_1_LErrwnwBgsaCUc7BwdUPvyjxCcwrhfby30Zu4k7Wxg05BD0U|; 50200000_clogin=l=63776981565123209860&v=1&e=1565125012584; OPTOUTMULTI=0:0%7Cc1:1%7Cc2:0%7Cc3:0; utag_main=v_id:016c48b2fdb0002035bf150054600107700c206f00838$_sn:13$_ss:0$_st:1565125011967$is_country_member_of_eu:true$dc_visit:12$ses_id:1565123209700%3Bexp-session$_pn:1%3Bexp-session$mm_sync:1%3Bexp-session$dc_event:1%3Bexp-session$dc_region:eu-central-1%3Bexp-session; notice_behavior=expressed|eu; notice_preferences=2:; pageviewContext=31e0be0a-b4a8-419b-b90e-763e986f8ce7; userContext=0|pl|1; notice_gdpr_prefs=0|1|2:; optimizelyEndUserId=oeu1564857180891r0.9458766506394406; _hjid=86c8fe9f-3c40-45eb-9daa-c3aadb934456; CoreID6=93866137225115645907885&ci=50200000|Digital Business Automation on Cloud Login_50200000|Cloud_BU_Marketing; CoreM_State=84~-1~-1~-1~-1~3~3~5~3~3~7~7~|~~|~~|~~|~||||||~|~~|~~|~~|~~|~~|~~|~~|~; CoreM_State_Content=6~|~~|~|; BMAID=af318862-8031-4d52-84ba-e76e774c3aa5';

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
  // user: 'mkmich',
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

module.exports = {
  IBM_BPM_CONFIG,
  IBM_BPM_API_PATHS_AND_METHODS,
  WRIKE_CONFIG,
  WRIKE_API_PATHS_AND_METHODS
};
