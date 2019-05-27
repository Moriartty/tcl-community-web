export default {
    'logMgr/ub_analysis': {
        name: 'menuName_logMgr_ub_analysis',
        icon: 'bars',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/UB_Analysis')); }, 'ub_analysis'); }
    },
    'logMgr/logView': {
        name: 'menuName_logMgr_logView',
        icon: 'bars',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/LogView')); }, 'logView'); }
    },
    'logMgr/care_problem_report': {
        name: 'menuName_logMgr_care_problem_report',
        icon: 'bars',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Care_Problem_Report')); }, 'care_problem_report'); }
    },
    'logMgr/care_electron_card': {
        name: 'menuName_logMgr_care_electron_card',
        icon: 'bars',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Care_Electron_Card')); }, 'care_electron_card'); }
    },
    'logMgr/care_suggestion': {
        name: 'menuName_logMgr_care_suggestion',
        icon: 'bars',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Care_Suggestion')); }, 'care_suggestion'); }
    },
    'logMgr/care_survey_online': {
        name: 'menuName_logMgr_care_survey_online',
        icon: 'bars',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb) => { require.ensure([], require => { cb(require('pages/Care_Survey_Online')); }, 'care_survey_online'); }
    }

};
