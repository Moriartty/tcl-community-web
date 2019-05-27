
import common from './common';
import operations from './operations';
import login from './login';
import systemConfig from './systemConfig';
import logMgr from './logMgr';
import contentMgr from './contentMgr';

let enUS = {};
export default Object.assign(
    enUS,
    common,
    login,
    systemConfig,
    operations,
    logMgr,
    contentMgr
);
