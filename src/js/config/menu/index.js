import systemConfig from './systemConfig';
import logMgr from './logMgr';
import contentMgr from './contentMgr';
export default {
    ...systemConfig,
    ...logMgr,
    ...contentMgr,
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
