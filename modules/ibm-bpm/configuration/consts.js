const IBM_BPM_CONFIG = {
  hostname: 'bawtrialus.bpm.ibmcloud.com',
  apiBasePath: '/baw/dev/rest/bpm/wle/v1',
  user: 'mkmich',
  pass: '13251325qQ!',
  cookie:
    'userContext=0|pl|1; notice_preferences=2:; notice_gdpr_prefs=0|1|2:; DBDM_NP_MIG=1; notice_behavior=expressed|eu; BMAID=a3a836fa-646e-4e43-bc2a-06bc5d547a3e; CoreID6=68991083865115650825814&ci=50200000|Digital Business Automation on Cloud Login; CoreM_State=3~-1~-1~-1~-1~3~3~5~3~3~7~7~|~~|~~|~~|~||||||~|~~|~~|~~|~~|~~|~~|~~|~; CoreM_State_Content=6~|~~|~|; pageviewContext=8999f402-ac70-4460-afb9-d71e44caaee5; OPTOUTMULTI=0:0%7Cc1:1%7Cc2:0%7Cc3:0; utag_main=v_id:016c61ce139a0012ca9932b4411a0307900d907100838$_sn:2$_ss:0$_st:1565084544234$is_country_member_of_eu:true$dc_visit:2$ses_id:1565082580291%3Bexp-session$_pn:2%3Bexp-session$mm_sync:1%3Bexp-session$dc_event:3%3Bexp-session$dc_region:eu-central-1%3Bexp-session; 50200000_clogin=v=1&l=53617581565082581443&e=1565084550523; PD-S-SESSION-ID=hYFcfR1dDb3hhaR35844PQ==:1_2_1_YdB1AqIixGgCA20ckQgtdI7iPK9QaHnNiTYK6zkCWJcnhwGK|; PD-ID=P3Eucz9soexDRaZ4ol+AO+gKdi1VGOn4ftpI1oTTlvNmUvfAXi342fjQj91jqRoHtcgRRydT056cfHJyKDXmDkDEIBEmR7/VRSSBEjSyZwJqNxuw+apQzcUcBHFXfnAZ9oLwnRhxG6XGzMLr1BpyZ197JOZwVVtMldCAawtNLdXhdd3nVnL9UhQj1/2zn9jOGaFFGOt/OiISqlaIBR2OFjFSRH5Bg0ah/8IiZsBIWCHAK3XomiZcN393oN50vJyGfSBkRMRfdeFYbqxHetEnZscZGIoeodK/JMZ04y++7Bu0jZ7nhi8L8YGIbyvDzPHaD2WKAb2L7ffB727YV4qo/Q=='
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
