
import { RouterURL,routerAuth} from '@/common/env'

const Routers = [

    {
    path:RouterURL['*'].path,
    name: RouterURL['*'].name,
    meta:{
        title:RouterURL['*'].title,
    },
    component: () => import(/* webpackChunkName: "exnet-index" */ '@/pages/notFound')
},
{
    path: RouterURL['index'].path,
    name: RouterURL['index'].name,
    meta:{
        title:RouterURL['index'].title,
    },
    component: () => import(/* webpackChunkName: "exnet-index" */ '@/pages/index')
},
{
    path: RouterURL['component'].path,
    name: RouterURL['component'].name,
    meta:{
        title:RouterURL['component'].title,
    },
    component: () => import(/* webpackChunkName: "yo-component" */ '@/pages/component'),
    redirect:{
        name:RouterURL['componentGuide'].name,
    },
    children: [
        // 开发指南
        {
            path: RouterURL['componentGuide'].path,
            name: RouterURL['componentGuide'].name,
            meta: {
                title: RouterURL['componentGuide'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-guide" */ '@/pages/component/develop/guide'),
        },

        //组件-基础组件
        {
            path: RouterURL['componentButton'].path,
            name: RouterURL['componentButton'].name,
            meta: {
                title: RouterURL['componentButton'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-button" */ '@/pages/component/basic/button'),
        },
        //组件-图标组件
        {
            path: RouterURL['componentIcon'].path,
            name: RouterURL['componentIcon'].name,
            meta: {
                title: RouterURL['componentIcon'].title,
            },
            component: () => import(/* webpackChunkName: "yo-component-Icon" */ '@/pages/component/basic/icons'),
        },
    ]
},

]

export default Routers
