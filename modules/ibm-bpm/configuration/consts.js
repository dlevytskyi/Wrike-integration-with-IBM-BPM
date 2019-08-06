const IBM_BPM_CONFIG = {
  hostname: 'bawtrialus.bpm.ibmcloud.com',
  apiBasePath: '/baw/dev/rest/bpm/wle/v1',
  user: 'mkmich',
  pass: '13251325qQ!',
  cookie:
    'PD-ID=fu/Qo7S4afPbhkcqB2iULuLczDy/mX5yJFRWAVwdJR1G/uZyD8Nz633pe4VDggqqvrrDmzIclc3BDBpnjcZ/TXafxfHUD13z3xf7Ra51SQEb2BKQce23DWDW3bGojjyUhpw73Fc6hR0/pUb9aMnFvjjwGWrzD5nr0oLo7DXtjDeUcMZ3EorVnqlI2EpfJFoCOwW40af7JVG9lU0FSHSfMGKzIhgqX04i6St0wdME9txGWmXahbqO5M+E0AiC9McNPUHlvfobGQNCY3MeF7tABTehYP3X0d6f1zs7qQo5mNiELihZHokQGmILf4D6po1BDJeVFwoMBRMC74lGUlFaRQ==; PD-S-SESSION-ID=hYFcfR1dDb3hhaR35844PQ==:1_2_1_eHQRsirlj9Y7ApoTWWRPGYFzUDnu-EHtUqQDZb4nSDfs7vov|; 50200000_clogin=l=47591201565091444680&v=1&e=1565093247088; OPTOUTMULTI=0:0%7Cc1:1%7Cc2:0%7Cc3:0; utag_main=v_id:016c48b2fdb0002035bf150054600107700c206f00838$_sn:11$_ss:0$_st:1565093246468$is_country_member_of_eu:true$dc_visit:10$ses_id:1565091444521%3Bexp-session$_pn:1%3Bexp-session$mm_sync:1%3Bexp-session$dc_event:2%3Bexp-session$dc_region:eu-central-1%3Bexp-session; notice_behavior=expressed|eu; notice_preferences=2:; pageviewContext=8d9b4f6b-9d80-407e-ad7d-e7389cf9027e; userContext=0|pl|1; notice_gdpr_prefs=0|1|2:; optimizelyEndUserId=oeu1564857180891r0.9458766506394406; _hjid=86c8fe9f-3c40-45eb-9daa-c3aadb934456; CoreID6=93866137225115645907885&ci=50200000|Digital Business Automation on Cloud Login_50200000|Cloud_BU_Marketing; CoreM_State=84~-1~-1~-1~-1~3~3~5~3~3~7~7~|~~|~~|~~|~||||||~|~~|~~|~~|~~|~~|~~|~~|~; CoreM_State_Content=6~|~~|~|; BMAID=af318862-8031-4d52-84ba-e76e774c3aa5'
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
