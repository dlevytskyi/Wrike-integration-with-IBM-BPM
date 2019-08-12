const WRIKE_TOKEN =
  'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjI5OTY5ODIsXCJpXCI6NjQzNjk0NyxcImNcIjo0NjEyOTIzLFwidVwiOjY0MjY0MDIsXCJyXCI6XCJVU1wiLFwic1wiOltcIldcIixcIkZcIixcIklcIixcIlVcIixcIktcIixcIkNcIixcIkFcIixcIkxcIl0sXCJ6XCI6W10sXCJ0XCI6MH0iLCJpYXQiOjE1NjQ4MzcyMjd9.t3-onBAJTPicQNFumsFz-a0mIt31MkHKBHJwZeFy9e4';

const IBM_BPM_COOKIE =
  'ibm.bpm.timezoneOffset=-120; com.ibm.bpm.servlet.LaunchDashboardServlet.defaultAvatarKey=946681200000; PD-ID=e3+onvTxlbOnhNqZUDpHqXcQK/mUX6jqTpaKLZILz46fGtVg7T0dgnU4jCmRJCu1/fLAxQwVJ10vqputlYUNlqKx2H6BS+8BIVoHcn8k97nTP27O1NGYhR9ktjnev2jBO+Y29zXovOV5Zx9G6c2pIQvimZsjLqsp6+d20OQV2zu5fZE7yfATg8b1Z9GsVDnObVdWBkeoOqC6WH0JPt15rOKJ3G3BUkIS4twywAP5Z+FAsVqTjj/ywE1/ljADgHsMEbtt7OLhimb4cm131xCQXR8D+k0N6kOklLlmmsRBLYFsmMgQ1mPEINAVWemyjDJooydxalOXs+fNBEw9VEfi4g==; PD-S-SESSION-ID=hYFcfR1dDb3hhaR35844PQ==:1_2_1_XN7TCr5uoORI2+Ah+MVs-saNIvPA3DtV3AQkcIVg1xkS4Eft|; 50200000_clogin=l=70443361565556362842&v=1&e=1565558173011; OPTOUTMULTI=0:0%7Cc1:1%7Cc2:0%7Cc3:0; utag_main=v_id:016c48b2fdb0002035bf150054600107700c206f00838$_sn:19$_ss:0$_st:1565558172333$is_country_member_of_eu:true$dc_visit:18$ses_id:1565556362772%3Bexp-session$_pn:2%3Bexp-session$mm_sync:1%3Bexp-session$dc_event:2%3Bexp-session$dc_region:eu-central-1%3Bexp-session; notice_behavior=expressed|eu; notice_preferences=2:; pageviewContext=360f06e6-ebd5-4ef1-bd26-e1c7cda1d0e4; userContext=0|pl|1; lombardi.locale.name=en; _hjid=86c8fe9f-3c40-45eb-9daa-c3aadb934456; CoreID6=74434355152615654631483&ci=50200000|Digital Business Automation on Cloud Login_50200000|Cloud_BU_Marketing; optimizelyEndUserId=oeu1564857180891r0.9458766506394406; BAYEUX_BROWSER=d044-fc8conqtfxxhjz746psj1550; cmapi_cookie_privacy=permit_1_required; cmapi_gtm_bl=ga-ms-ua-ta-asp-bzi-sp-awct-cts-csm-img-flc-fls-mpm-mpr-m6d-tc-tdc; notice_gdpr_prefs=0|1|2:; CoreM_State=65~-1~-1~-1~-1~3~3~5~3~3~7~7~|~~|~~|~~|~||||||~|~~|~~|~~|~~|~~|~~|~~|~; CoreM_State_Content=6~|~~|~|; BMAID=af318862-8031-4d52-84ba-e76e774c3aa5'

const APP_CONFIG = {
  interval_min: 2
}

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
  },
  queryGroups: {
    path: '/groups/{groupId}',
    method: 'GET'
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

const IBM_BPM_PROCESSES = ['Credit Approval Process', 'Win Wrike Contest Process'];

const INTEGRATION_VARIABLES = {
  WRIKE_BPM_INTEGRATION_TEAM: 'BPM Integration team',
  IBM_BPM_INTEGRATION_FOLDER_TITLE: 'IBM BPM Integration',
  CUSTOM_FIELDS_IDS: {
    taskId: 'IEAC3OXWJUABBTIG'
  }
};

module.exports = {
  IBM_BPM_CONFIG,
  IBM_BPM_API_PATHS_AND_METHODS,
  IBM_BPM_PROCESSES,
  WRIKE_CONFIG,
  WRIKE_API_PATHS_AND_METHODS,
  INTEGRATION_VARIABLES,
  APP_CONFIG
};
