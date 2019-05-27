import systemConfig from './systemConfig';
import contentMgr from './contentMgr';

export default {
    ...systemConfig,
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
