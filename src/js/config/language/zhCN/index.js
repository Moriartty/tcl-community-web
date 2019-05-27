
import common from './common';
import operations from './operations';
import login from './login';
import systemConfig from './systemConfig';
import logMgr from './logMgr';
import contentMgr from './contentMgr';

let zhCN = {};

export default Object.assign(
    zhCN,
    common,
    login,
    systemConfig,
    operations,
    logMgr,
    contentMgr
);
