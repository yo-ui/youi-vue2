
import { RouterURL,routerAuth} from '@/common/env'

// 社区售卖
const BlockFuture = () => import(/* webpackChunkName: "exnet-blockfuture" */ '@/pages/blockfuture/BlockFuture')
const MyApply = () => import(/* webpackChunkName: "exnet-blockfuture-MyApply" */ '@/pages/blockfuture/MyApply')//
const MyInvest = () => import(/* webpackChunkName: "exnet-blockfuture-MyInvest" */ '@/pages/blockfuture/MyInvest')//
const TokenSale = () => import(/* webpackChunkName: "exnet-blockfuture-TokenSale" */ '@/pages/blockfuture/TokenSale')//
const TokenDetail = () => import(/* webpackChunkName: "exnet-blockfuture-TokenDetail" */ '@/pages/blockfuture/TokenDetail')//
const TokenInvest = () => import(/* webpackChunkName: "exnet-blockfuture-TokenInvest" */ '@/pages/blockfuture/TokenInvest')//
const TokenApply = () => import(/* webpackChunkName: "exnet-blockfuture-TokenApply" */ '@/pages/blockfuture/TokenApply')//
const TokenRecord = () => import(/* webpackChunkName: "exnet-blockfuture-TokenRecord" */ '@/pages/blockfuture/token-record')//


const Routers = [
//社区售卖
{
    path:RouterURL['tokenSale'].path,
    name:RouterURL['tokenSale'].name,
    meta:{
        title:RouterURL['tokenSale'].title,
    },
    component: TokenSale,
},
{
    path:RouterURL['tokenDetail'].path,
    // path:RouterURL['tokenDetail'].path '/tokenDetail/tokenDetail.html',
    name:RouterURL['tokenDetail'].name,
    meta:{
        title:RouterURL['tokenDetail'].title,
    },
    component: TokenDetail,
},
{
    path:RouterURL['tokenInvest'].path,
    // path:RouterURL['tokenInvest'].path '/tokenInvest/tokenInvest.html',
    name:RouterURL['tokenInvest'].name,
    meta:{
        title:RouterURL['tokenInvest'].title,
        requireAuth:routerAuth,//是否需要登录
    },
    component: TokenInvest,
},
{
    path:RouterURL['tokenApply'].path,
    // path:RouterURL['tokenInvest'].path '/tokenInvest/tokenInvest.html',
    name:RouterURL['tokenApply'].name,
    meta:{
        title:RouterURL['tokenApply'].title,
        requireAuth:routerAuth,//是否需要登录
    },
    component: TokenApply,
},
{
    path:RouterURL['tokenRecord'].path,
    // path:RouterURL['tokenInvest'].path '/tokenInvest/tokenInvest.html',
    name:RouterURL['tokenRecord'].name,
    meta:{
        title:RouterURL['tokenRecord'].title,
        requireAuth:routerAuth,//是否需要登录
    },
    component: TokenRecord,
},
{
    path:RouterURL['myInvest'].path,
    // path:RouterURL['myInvest'].path '/blockfuture/myInvest.html',
    name:RouterURL['myInvest'].name,
    meta:{
        title:RouterURL['myInvest'].title,
        requireAuth:routerAuth,//是否需要登录
    },
    component: MyInvest,
},
{
    path:RouterURL['myApply'].path,
    // path:RouterURL['myApply'].path '/blockfuture/myApply.html',
    name:RouterURL['myApply'].name,
    meta:{
        title:RouterURL['myApply'].title,
        requireAuth:routerAuth,//是否需要登录
    },
    component: MyApply,
},
{
    path:RouterURL['blockfuture'].path,
    name:RouterURL['blockfuture'].name,
    meta:{
        title:RouterURL['blockfuture'].title,
    },
    component: BlockFuture,
},
]

export default Routers
