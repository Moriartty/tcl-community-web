
import common from './common';
import operations from './operations';
import login from './login';
import systemConfig from './systemConfig';
import contentMgr from './contentMgr';

let zhCN = {};

export default Object.assign(
    zhCN,
    common,
    login,
    systemConfig,
    operations,
    contentMgr
);
