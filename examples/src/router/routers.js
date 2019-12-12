
import { RouterURL,routerAuth} from '@/common/env'

const Index = () => import(/* webpackChunkName: "exnet-index" */ '@/pages/index')
const NotFound = () => import(/* webpackChunkName: "exnet-index" */ '@/pages/notFound')
const Routers = [

    {
    path:RouterURL['*'].path,
    name: RouterURL['*'].name,
    meta:{
        title:RouterURL['*'].title,
    },
    component: NotFound
},
{
    path: RouterURL['index'].path,
    name: RouterURL['index'].name,
    meta:{
        title:RouterURL['index'].title,
    },
    component: Index
},
]

export default Routers
