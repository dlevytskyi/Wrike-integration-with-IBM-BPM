const WRIKE_TOKEN =
  'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjI5OTY5ODIsXCJpXCI6NjQzNjk0NyxcImNcIjo0NjEyOTIzLFwidVwiOjY0MjY0MDIsXCJyXCI6XCJVU1wiLFwic1wiOltcIldcIixcIkZcIixcIklcIixcIlVcIixcIktcIixcIkNcIixcIkFcIixcIkxcIl0sXCJ6XCI6W10sXCJ0XCI6MH0iLCJpYXQiOjE1NjQ4MzcyMjd9.t3-onBAJTPicQNFumsFz-a0mIt31MkHKBHJwZeFy9e4';

const IBM_BPM_COOKIE =
  'pageviewContext=faf55379-3173-4b92-9059-35d47f340577; userContext=0|pl|1; notice_preferences=2:; notice_gdpr_prefs=0|1|2:; DBDM_NP_MIG=1; OPTOUTMULTI=0:0%7Cc1:1%7Cc2:0%7Cc3:0; notice_behavior=expressed|eu; utag_main=v_id:016c80bf1c31003f158bc8ff77f403079015107100ac2$_sn:1$_ss:0$_st:1565529904891$ses_id:1565528103987%3Bexp-session$_pn:1%3Bexp-session$is_country_member_of_eu:true$mm_sync:1%3Bexp-session$dc_visit:1$dc_event:2%3Bexp-session$dc_region:eu-central-1%3Bexp-session; PD-S-SESSION-ID=hYFcfR1dDb3hhaR35844PQ==:1_2_1_A9kWxyaU2mC8uF8i7CRkoV0m66mm-cWVyXWCDK6IQ+YQakob|; PD-ID=RV0CLLV64dPwDWjF5px6gjaDKzOigSKPoQgFB0KEDjO/xa5hRhPXwZRYJ1sEhq/oAo5EDsgacgqo1Uh0FAGd7vyICmoQmaJeOV+p1lRJY5ZE2WLN1FROSpviZyx+1m9ZeKXWfV9LukZ02Cyp3QWxfpn6T2Je682f312vwCTkl8vfNtxFFz1Xo2+NM0a6ZTlPlqHCnebRrBudWrAEyLL5v7pjlCNEwQjcjHr94xnIwwcPpW3Ryyac9pxwHrI5he3HfAmeqQ0pXHj0wna9cClGzB0b13P2CRM0jqDVPECHlE3sOljf9AAp1veV4AoKGcnWOyYbAmOhba0ikItUFz1kug==';

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

module.exports = {
  IBM_BPM_CONFIG,
  IBM_BPM_API_PATHS_AND_METHODS,
  IBM_BPM_PROCESSES,
  WRIKE_CONFIG,
  WRIKE_API_PATHS_AND_METHODS
};
