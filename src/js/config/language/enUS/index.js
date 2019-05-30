
import common from './common';
import operations from './operations';
import login from './login';
import systemConfig from './systemConfig';
import contentMgr from './contentMgr';
import tagsMgr from './tagsMgr';

let enUS = {};
export default Object.assign(
    enUS,
    common,
    login,
    systemConfig,
    operations,
    contentMgr,
    tagsMgr
);
