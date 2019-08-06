const IBM_BPM_CONFIG = {
  hostname: 'bawtrialus.bpm.ibmcloud.com',
  apiBasePath: '/baw/dev/rest/bpm/wle/v1',
  user: 'mkmich',
  pass: '13251325qQ!',
  cookie:
    'PD-ID=itI8A8K8OUxjUnU1UCYLKFqnCsqfSW+8ft4SqaQ7QAN2wDWB2UowhO7XrAZJx9J+9M4d1u5RD38eOoJdDWXHnKp05zdqAqZMGAMznyKYIY8kJ27WNDEF4FYMSDD2qsF1hJvuwNCJ38r18xcvU7J0k+SM2JGPCfVCgplfuXEIc1kafYQ7r9sdra5SwlohT+3XKyqJ34+D8iIvXQbzF4M2PtQRLKqWyDaTXiRE8eeeSjsLxKnwjEeLcZ87M9zwjxPI/k1BCU20Mh8CIGgUWOIWzjwyaafKAm2P4zsGnW9bBgUcmXCQiLMICA+N+7qDxdOHrTmCoNRGceqRwlyeIYaArg==; PD-S-SESSION-ID=hYFcfR1dDb3hhaR35844PQ==:1_2_1_RgOlCJU-jZNyAnbujiBil33l+aXVT9jN5fNSzQyySXML-fEN|; 50200000_clogin=l=28036931565120492572&v=1&e=1565122295285; OPTOUTMULTI=0:0%7Cc1:1%7Cc2:0%7Cc3:0; utag_main=v_id:016c48b2fdb0002035bf150054600107700c206f00838$_sn:12$_ss:0$_st:1565122294611$is_country_member_of_eu:true$dc_visit:11$ses_id:1565120492464%3Bexp-session$_pn:1%3Bexp-session$mm_sync:1%3Bexp-session$dc_event:2%3Bexp-session$dc_region:eu-central-1%3Bexp-session; notice_behavior=expressed|eu; notice_gdpr_prefs=0|1|2:; notice_preferences=2:; userContext=0|pl|1; pageviewContext=0cb5655e-c014-4601-b161-e766899a6929; optimizelyEndUserId=oeu1564857180891r0.9458766506394406; _hjid=86c8fe9f-3c40-45eb-9daa-c3aadb934456; CoreID6=93866137225115645907885&ci=50200000|Digital Business Automation on Cloud Login_50200000|Cloud_BU_Marketing; CoreM_State=84~-1~-1~-1~-1~3~3~5~3~3~7~7~|~~|~~|~~|~||||||~|~~|~~|~~|~~|~~|~~|~~|~; CoreM_State_Content=6~|~~|~|; BMAID=af318862-8031-4d52-84ba-e76e774c3aa5'
};

//https://bawtrialus.bpm.ibmcloud.com/baw/dev/rest/bpm/wle/v1/user?userName=mkmich&includeInternalMemberships=true&refreshUser=false&includeEditableUserPreferences=false&parts=all

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
  IBM_BPM_API_PATHS_AND_METHODS
};
