/**
 * 页面路由名称
 */
export default {
    // "个人中心",
    '*': {name:'*',path:'*',title:'404 Not Found'},
    'index': {name:'index',path:'/',title:'首页'},
    'component': {name:'component',path:'/component',title:'组件页'},
    'componentGuide': {name:'componentGuide',path:'',title:'组件入门页'},

    'login': {name:'login',path:'/signin',title:'登录'},
    'reg': {name:'reg',path:'/signup',title:'注册'},
    'contact': {name:'contact',path:'/contact',title:'联系我们'},
}
