export default{
    // 'basicExtend1': () => require.ensure([], require => require('./basic/extend1.vue'), 'basic'),
    'basicButtonButton1': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button1'),
    'basicButtonButton2': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button2'),
    'basicButtonButton3': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button3'),
    'basicButtonButton4': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button4'),
    'basicButtonButton5': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button5'),
    'basicButtonButton6': () => import(/* webpackChunkName: "yo-component-basic" */ './basic/button/button6'),
}