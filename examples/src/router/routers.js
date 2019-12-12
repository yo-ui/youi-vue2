
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
    component: () => import(/* webpackChunkName: "exnet-component" */ '@/pages/component'),
    children: [
        {
            path: RouterURL['componentGuide'].path,
            name: RouterURL['componentGuide'].name,
            meta: {
                title: RouterURL['componentGuide'].title,
            },
            component: () => import(/* webpackChunkName: "exnet-component-guide" */ '@/pages/component/guide'),
        },
    ]
},

]

export default Routers
