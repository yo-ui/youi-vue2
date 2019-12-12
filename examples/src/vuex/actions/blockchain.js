import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
import {post,get} from '@/vuex/axios'
export default {
    //获取币种最新区块信息
    async blockChainBlockList(context,options){
        let url=fqCommon.substitute(URL.blockChainBlockListUrl,{
            code:(options.code||'').toUpperCase(),
            ymd:options.ymd?'/'+options.ymd:'',
            pageNo:options.pageNo?'/'+options.pageNo:'',
            pageSize:options.pageSize?'/'+options.pageSize:'',
        })
        const data = await get({
            url:url,
            params:{},
            store:context,
        })
        return data
    },
    //获取币种最新交易信息
    async blockChainTxList(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.blockChainTxListUrl,{
                code:options.code,
                pageNo:options.pageNo?'/'+options.pageNo:'',
                pageSize:options.pageSize?'/'+options.pageSize:'',
                verbose:options.verbose?'/'+options.verbose:'',
            }),
            params:{},
            store:context,
        })
        return data
    },
    //获取币种待确认交易信息
    async blockChainPendingTxList(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.blockChainPendingTxListUrl,{
                code:options.code,
                pageNo:options.pageNo?'/'+options.pageNo:'',
                pageSize:options.pageSize?'/'+options.pageSize:'',
            }),
            params:{},
            store:context,
        })
        return data
    },
    //获取币种最新区块信息
    async blockChainLastestHeight(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.blockChainLastestHeightUrl,{
                code:options.code
            }),
            params:{},
            store:context,
        })
        return data
    },
    //搜索区块链信息
    async blockChainSearch(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.blockChainSearchUrl,{keywords:options.keywords}),
            params:{},
            store:context,
        })
        return data
    },
    //地址下的交易列表
    async blockChainAddressInfoTxList(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.blockChainAddressInfoTxListUrl,{
                code:options.code,
                address:options.address,
                pageNo:options.pageNo?'/'+options.pageNo:'',
                pageSize:options.pageSize?'/'+options.pageSize:'',
            }),
            params:{},
            store:context,
        })
        return data
    },
    //地址下的交易列表
    async blockChainAddressInfoTokenTxList(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.blockChainAddressInfoTokenTxListUrl,{
                code:options.code,
                address:options.address,
                pageNo:options.pageNo?'/'+options.pageNo:'',
                pageSize:options.pageSize?'/'+options.pageSize:'',
            }),
            params:{},
            store:context,
        })
        return data
    },
    //地址信息
    async blockChainAddressInfo(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.blockChainAddressInfoUrl,{
                code:options.code,
                address:options.address,
            }),
            params:{},
            store:context,
        })
        return data
    },
    //获取有浏览器的币种列表
    async blockChainTokenList(context,options){
        const data = await get({
            url:URL.blockChainTokenListUrl,
            params:{},
            store:context,
        })
        return data
    },
    //获取区块信息
    async blockChainBlockInfo(context,options){
        const data = await get({
            url:URL.blockChainBlockInfoUrl,
            params:{
                hash:options.hash,
                code:options.code,
                height:options.height,
            },
            store:context,
        })
        return data
    },
    //获取区块下交易
    async blockChainBlockInfoTxList(context,options){
        const data = await get({
            url:URL.blockChainBlockInfoTxListUrl,
            params:{
                hash:options.hash,
                code:options.code,
                height:options.height,
                pageNo:options.pageNo,
                pageSize:options.pageSize,
            },
            store:context,
        })
        return data
    },
}