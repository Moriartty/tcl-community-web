import systemConfig from './systemConfig';
import logMgr from './logMgr';
import tBase from './tBase';
export default {
    ...systemConfig,
    ...logMgr,
    ...tBase,
    home: {
        name: 'menuName_home',
        icon: 'home',
        page: (cb) => { require.ensure([], require => { cb(require('pages/Home')); }, 'home'); }
    },
    profile: {
        name: 'menuName_profile',
        icon: 'user',
        page: (cb) => { require.ensure([], require => { cb(require('pages/Profile')); }, 'profile'); }
    }
};
