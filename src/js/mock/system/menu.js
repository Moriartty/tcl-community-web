module.exports = [
    {
        desc: '获取用户的菜单数据',
        type: 'GET',
        url: '/menu/user',
        params: '从cookie里面获取',
        result: {
            'code': '0',
            'data': [
                { id: 1, name: 'menuName_home', module: 'home' },
                {
                    id:7,
                    name:'menuName_tBase',
                    list:[
                        {
                            id:70,
                            name:'menuName_tBase_dev',
                            list:[
                                { id: 700, name: 'menuName_tBase_authentication', module: 'tBase/authentication', display: 1 },
                                { id: 701, name: 'menuName_tBase_database', module: 'tBase/database', display: 1 },
                                { id: 702, name: 'menuName_tBase_storage', module: 'tBase/storage', display: 1 },
                                { id: 703, name: 'menuName_tBase_hosting', module: 'tBase/hosting', display: 1 },
                                { id: 704, name: 'menuName_tBase_function', module: 'tBase/function', display: 1 },
                                { id: 705, name: 'menuName_tBase_mlKit', module: 'tBase/mlKit', display: 1 },
                            ]
                        },
                        {
                            id:71,
                            name:'menuName_tBase_quality',
                            list:[
                                { id: 710, name: 'menuName_tBase_carshlytics', module: 'tBase/carshlytics', display: 1 },
                                { id: 711, name: 'menuName_tBase_performance', module: 'tBase/performance', display: 1 },
                                { id: 712, name: 'menuName_tBase_testLab', module: 'tBase/testLab', display: 1 },
                            ]
                        },
                        {
                            id:72,
                            name:'menuName_tBase_analyse',
                            list:[
                                { id: 720, name: 'menuName_tBase_dashboard', module: 'tBase/dashboard', display: 1 },
                                { id: 721, name: 'menuName_tBase_events', module: 'tBase/events', display: 1 },
                                { id: 722, name: 'menuName_tBase_conversions', module: 'tBase/conversions', display: 1 },
                                { id: 723, name: 'menuName_tBase_audiences', module: 'tBase/audiences', display: 1 },
                                { id: 724, name: 'menuName_tBase_funnels', module: 'tBase/funnels', display: 1 },
                                { id: 725, name: 'menuName_tBase_userProperties', module: 'tBase/userProperties', display: 1 },
                                { id: 726, name: 'menuName_tBase_latestRelease', module: 'tBase/latestRelease', display: 1 },
                                { id: 727, name: 'menuName_tBase_retention', module: 'tBase/retention', display: 1 },
                                { id: 728, name: 'menuName_tBase_streamView', module: 'tBase/streamView', display: 1 },
                                { id: 729, name: 'menuName_tBase_debugView', module: 'tBase/debugView', display: 1 },
                            ]
                        }
                    ]
                },
                {
                    id: 8,
                    name: 'menuName_logMgr',
                    list: [
                        { id: 800, name: 'menuName_logMgr_ub_analysis', module: 'logMgr/ub_analysis', functions: ['SEARCH'] },
                        { id: 801, name: 'menuName_logMgr_care_survey_online', module: 'logMgr/care_survey_online', functions: ['SEARCH'] },
                        { id: 802, name: 'menuName_logMgr_care_problem_report', module: 'logMgr/care_problem_report', functions: ['SEARCH'] },
                        { id: 803, name: 'menuName_logMgr_care_suggestion', module: 'logMgr/care_suggestion', functions: ['SEARCH'] },
                        { id: 804, name: 'menuName_logMgr_care_electron_card', module: 'logMgr/care_electron_card', functions: ['SEARCH'] },
                        { id: 805, name: 'menuName_logMgr_logView', module: 'logMgr/logView', functions: ['SEARCH'] },
                        // { id: 806, name: 'menuName_logMgr_dashboard', module: 'logMgr/dashboard', functions: ['SEARCH'] },
                        { id: 806, name: 'menuName_logMgr_dashboard2', module: 'logMgr/dashboard2', functions: ['SEARCH'] },
                        { id: 807, name: 'menuName_logMgr_dashboard3', module: 'logMgr/dashboard3', functions: ['SEARCH'] },
                        { id: 808, name: 'menuName_logMgr_dashboard4', module: 'logMgr/dashboard4', functions: ['SEARCH'] }
                    ]
                },
                {
                    id: 9,
                    name: 'menuName_systemConfig',
                    list: [
                        { id: 900, name: 'menuName_systemConfig_role', module: 'systemConfig/role', functions: ['CREATE', 'UPDATE', 'DELETE'] },
                        { id: 901, name: 'menuName_systemConfig_menu', module: 'systemConfig/menu', functions: ['CREATE', 'UPDATE', 'EDIT', 'DELETE'] },
                        { id: 902, name: 'menuName_systemConfig_user', module: 'systemConfig/user', functions: ['CREATE', 'UPDATE', 'DELETE', 'ADD_STAFF', 'ADD_ORG', 'RESET', 'LEAVE'] },
                        { id: 903, name: 'menuName_systemConfig_autoTask', module: 'systemConfig/autoTask', functions: [] }
                    ]
                }
            ]
        }
    },
    {
        desc: '获取常用模块列表',
        type: 'GET',
        url: '/home/entry',
        params: {},
        result: {
            'code': '0',
            'data': [
                'systemConfig/role', 'systemConfig/menu', 'systemConfig/user'
            ]
        }
    },
    {
        desc: '获取所有菜单数据',
        type: 'GET',
        url: '/menu',
        params: '无',
        result: {
            'code': '0',
            'data': [
                { id: 1, name: 'menuName_home', module: 'home', display: 1 },
                {
                    id:7,
                    name:'menuName_tBase',
                    list:[
                        {
                            id:70,
                            name:'menuName_tBase_dev',
                            list:[
                                { id: 700, name: 'menuName_tBase_authentication', module: 'tBase/authentication', display: 1 },
                                { id: 701, name: 'menuName_tBase_database', module: 'tBase/database', display: 1 },
                                { id: 702, name: 'menuName_tBase_storage', module: 'tBase/storage', display: 1 },
                                { id: 703, name: 'menuName_tBase_hosting', module: 'tBase/hosting', display: 1 },
                                { id: 704, name: 'menuName_tBase_function', module: 'tBase/function', display: 1 },
                                { id: 705, name: 'menuName_tBase_mlKit', module: 'tBase/mlKit', display: 1 },
                            ]
                        },
                        {
                            id:71,
                            name:'menuName_tBase_quality',
                            list:[
                                { id: 710, name: 'menuName_tBase_carshlytics', module: 'tBase/carshlytics', display: 1 },
                                { id: 711, name: 'menuName_tBase_performance', module: 'tBase/performance', display: 1 },
                                { id: 712, name: 'menuName_tBase_testLab', module: 'tBase/testLab', display: 1 },
                            ]
                        },
                        {
                            id:72,
                            name:'menuName_tBase_analyse',
                            list:[
                                { id: 720, name: 'menuName_tBase_dashboard', module: 'tBase/dashboard', display: 1 },
                                { id: 721, name: 'menuName_tBase_events', module: 'tBase/events', display: 1 },
                                { id: 722, name: 'menuName_tBase_conversions', module: 'tBase/conversions', display: 1 },
                                { id: 723, name: 'menuName_tBase_audiences', module: 'tBase/audiences', display: 1 },
                                { id: 724, name: 'menuName_tBase_funnels', module: 'tBase/funnels', display: 1 },
                                { id: 725, name: 'menuName_tBase_userProperties', module: 'tBase/userProperties', display: 1 },
                                { id: 726, name: 'menuName_tBase_latestRelease', module: 'tBase/latestRelease', display: 1 },
                                { id: 727, name: 'menuName_tBase_retention', module: 'tBase/retention', display: 1 },
                                { id: 728, name: 'menuName_tBase_streamView', module: 'tBase/streamView', display: 1 },
                                { id: 729, name: 'menuName_tBase_debugView', module: 'tBase/debugView', display: 1 },
                            ]
                        }
                    ]
                },
                {
                    id: 8,
                    name: 'menuName_logMgr',
                    list: [
                        { id: 800, name: 'menuName_logMgr_logView', module: 'logMgr/logView', display: 1 },
                        { id: 801, name: 'menuName_logMgr_care_survey_online', module: 'logMgr/care_survey_online', display: 1 },
                        { id: 802, name: 'menuName_logMgr_care_problem_report', module: 'logMgr/care_problem_report', display: 1 },
                        { id: 803, name: 'menuName_logMgr_care_suggestion', module: 'logMgr/care_suggestion', display: 1 },
                        { id: 804, name: 'menuName_logMgr_care_electron_card', module: 'logMgr/care_electron_card', display: 1 },
                        { id: 805, name: 'menuName_logMgr_ub_analysis', module: 'logMgr/ub_analysis', display: 1 },
                        // { id: 806, name: 'menuName_logMgr_dashboard', module: 'logMgr/dashboard', display: 1 },
                        { id: 806, name: 'menuName_logMgr_dashboard2', module: 'logMgr/dashboard2', display: 1 },
                        { id: 807, name: 'menuName_logMgr_dashboard3', module: 'logMgr/dashboard3', display: 1 },
                        { id: 808, name: 'menuName_logMgr_dashboard4', module: 'logMgr/dashboard4', display: 1 }
                    ]
                },
                {
                    id: 9,
                    name: 'menuName_systemConfig',
                    list: [
                        { id: 900, name: 'menuName_systemConfig_role', module: 'systemConfig/role', display: 1 },
                        { id: 901, name: 'menuName_systemConfig_menu', module: 'systemConfig/menu', display: 1 },
                        { id: 902, name: 'menuName_systemConfig_user', module: 'systemConfig/user', display: 1 },
                        { id: 903, name: 'menuName_systemConfig_autoTask', module: 'systemConfig/autoTask', display: 1 }

                    ],
                    display: 1
                }
            ]
        }
    },
    {
        desc: '添加菜单',
        type: 'POST',
        url: '/menu/create',
        params: {
            parentId: '父级目录菜单ID',
            name: '菜单名称',
            module: '菜单模块名',
            display: '是否显示。1显示，0隐藏'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '更新菜单',
        type: 'POST',
        url: '/menu/update',
        params: {
            id: '菜单ID',
            parentId: '父级目录菜单ID',
            name: '菜单名称',
            module: '菜单模块名',
            display: '是否显示。1显示，0隐藏'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '删除菜单',
        type: 'POST',
        url: '/menu/delete',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '菜单排序－上移',
        type: 'POST',
        url: '/menu/up',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '菜单排序－下移',
        type: 'POST',
        url: '/menu/down',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    }
];
