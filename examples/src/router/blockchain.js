

import { RouterURL,routerAuth} from '@/common/env'
const Explorer = () => import(/* webpackChunkName: "exnet-explorer" */ '@/pages/web/Explorer')
const Blockchain = () => import(/* webpackChunkName: "exnet-blockchain-search" */ '@/pages/blockchain/BlockChain')
const BlockchainSearch = () => import(/* webpackChunkName: "exnet-blockchain-search" */ '@/pages/blockchain/Search')
const BlockchainToken = () => import(/* webpackChunkName: "exnet-blockchain-token" */ '@/pages/blockchain/Token')
const BlockchainAddressInfo = () => import(/* webpackChunkName: "exnet-blockchain-AddressInfo" */ '@/pages/blockchain/AddressInfo')
const BlockchainTxInfo = () => import(/* webpackChunkName: "exnet-blockchain-TxInfo" */ '@/pages/blockchain/TxInfo')
const BlockchainBlockInfo = () => import(/* webpackChunkName: "exnet-blockchain-BlockInfo" */ '@/pages/blockchain/BlockInfo')
const BlockchainBlockList = () => import(/* webpackChunkName: "exnet-blockchain-BlockList" */ '@/pages/blockchain/BlockList')
const BlockchainPendingList = () => import(/* webpackChunkName: "exnet-blockchain-PendingList" */ '@/pages/blockchain/PendingList')
const BlockchainTxList = () => import(/* webpackChunkName: "exnet-blockchain-TxList" */ '@/pages/blockchain/TxList')

const Routers = [
//区块链浏览器
{
    path:RouterURL['explorer'].path,
    name:RouterURL['explorer'].name,
    meta:{
        title:RouterURL['explorer'].title,
    },
    component: Explorer,
},
//区块链浏览器
{
    path:RouterURL['blockchain'].path,
    name:RouterURL['blockchain'].name,
    meta:{
        title:RouterURL['blockchain'].title,
    },
    component: Blockchain,
    children:[
        {
            path:RouterURL['blockchainSearch'].path,
            name:RouterURL['blockchainSearch'].name,
            meta:{
                title:RouterURL['blockchainSearch'].title,
            },
            component: BlockchainSearch,
        },
        {
            path:RouterURL['blockchainToken'].path,
            name:RouterURL['blockchainToken'].name,
            meta:{
                title:RouterURL['blockchainToken'].title,
            },
            component: BlockchainToken,
        },
        {
            path:RouterURL['blockchainAddressInfo'].path,
            name:RouterURL['blockchainAddressInfo'].name,
            meta:{
                title:RouterURL['blockchainAddressInfo'].title,
            },
            component: BlockchainAddressInfo,
        },
        {
            path:RouterURL['blockchainBlockInfo'].path,
            name:RouterURL['blockchainBlockInfo'].name,
            meta:{
                title:RouterURL['blockchainBlockInfo'].title,
            },
            component: BlockchainBlockInfo,
        },
        {
            path:RouterURL['blockchainTxInfo'].path,
            name:RouterURL['blockchainTxInfo'].name,
            meta:{
                title:RouterURL['blockchainTxInfo'].title,
            },
            component: BlockchainTxInfo,
        },
        {
            path:RouterURL['blockchainBlockList'].path,
            name:RouterURL['blockchainBlockList'].name,
            meta:{
                title:RouterURL['blockchainBlockList'].title,
            },
            component: BlockchainBlockList,
        },
        {
            path:RouterURL['blockchainPendingList'].path,
            name:RouterURL['blockchainPendingList'].name,
            meta:{
                title:RouterURL['blockchainPendingList'].title,
            },
            component: BlockchainPendingList,
        },
        {
            path:RouterURL['blockchainTxList'].path,
            name:RouterURL['blockchainTxList'].name,
            meta:{
                title:RouterURL['blockchainTxList'].title,
            },
            component: BlockchainTxList,
        },
    ]
},
]
export default Routers