const WRIKE_TOKEN =
  'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjI5OTY5ODIsXCJpXCI6NjQzNjk0NyxcImNcIjo0NjEyOTIzLFwidVwiOjY0MjY0MDIsXCJyXCI6XCJVU1wiLFwic1wiOltcIldcIixcIkZcIixcIklcIixcIlVcIixcIktcIixcIkNcIixcIkFcIixcIkxcIl0sXCJ6XCI6W10sXCJ0XCI6MH0iLCJpYXQiOjE1NjQ4MzcyMjd9.t3-onBAJTPicQNFumsFz-a0mIt31MkHKBHJwZeFy9e4';

const IBM_BPM_COOKIE =
  'PD-ID=yRLXMhxcM8mVnr1pB9UZZ1AeSIBb2s3jWiYPhnOEogETWTv5g5OsfZs8zw8rywQY0SvE/qQ12JIUuW5s/CI4Du/AmUu16+uZJsvAd5qMMHYyMQwidABp+HV/xoE0OCeHi0dEfwGpIBp/UyEE3KEDiDi8G8pigKIry+tJ7LMVYqqzdOD7gSUM+R0pmBwmbQfvqsB4RMXkcp9agJsMB3fwEXMMVo9fq6EDmpgbWEyKZEE5EF1CLaEPWgYeD8ckFzcZFxlZ0x13aKQtIOuPJuEX3jxitbWS2ZSWK+15VNTT+pR4ZbhCA2pBZtAU8ALEP2NgWzOtWoNbSyPg/wuBZXJqvw==; PD-S-SESSION-ID=hYFcfR1dDb3hhaR35844PQ==:1_2_1_-Er3BIxuUq05bGPsnF9m2GItqepesGb0B1a9LMUb8MGO2rZX|; 50200000_clogin=l=70429561565445103944&v=1&e=1565446906573; OPTOUTMULTI=0:0%7Cc1:1%7Cc2:0%7Cc3:0; utag_main=v_id:016c48b2fdb0002035bf150054600107700c206f00838$_sn:15$_ss:0$_st:1565446906356$is_country_member_of_eu:true$dc_visit:14$ses_id:1565445102681%3Bexp-session$_pn:2%3Bexp-session$mm_sync:1%3Bexp-session$dc_event:3%3Bexp-session$dc_region:eu-central-1%3Bexp-session; notice_behavior=expressed|eu; notice_gdpr_prefs=0|1|2:; notice_preferences=2:; pageviewContext=f5402c2b-26d9-4ea2-b5fc-a11f19ec18a8; userContext=0|pl|1; CoreM_State=65~-1~-1~-1~-1~3~3~5~3~3~7~7~|~~|~~|~~|~||||||~|~~|~~|~~|~~|~~|~~|~~|~; CoreM_State_Content=6~|~~|~|; BMAID=af318862-8031-4d52-84ba-e76e774c3aa5; optimizelyEndUserId=oeu1564857180891r0.9458766506394406; _hjid=86c8fe9f-3c40-45eb-9daa-c3aadb934456; CoreID6=93866137225115645907885&ci=50200000|Digital Business Automation on Cloud Login_50200000|Cloud_BU_Marketing';
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
