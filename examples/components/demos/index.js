export default{
    // 'basicExtend1': () => require.ensure([], require => require('./basic/extend1.vue'), 'basic'),
    'basicButton1': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button1'),
    'basicButton2': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button2'),
    'basicButton3': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button3'),
    'basicButton4': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button4'),
    'basicButton5': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button5'),
    'basicButton6': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button6'),
}