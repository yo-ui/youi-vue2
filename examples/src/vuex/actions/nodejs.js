import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
import {post,get} from '@/vuex/axios'
export default {
    //获取扩展数据接口
    async extendsData(context,options){
        const result = await get({
            url:fqCommon.substitute(URL.extendsDataUrl,{url:encodeURIComponent(options.url)}),
            params:{},
            store:context
        })
        let {data}=result
        return data
    },


    //获取币种介绍  外部api
    // async queryOutTokenIntroduce(context,options){
    //     let url=URL.queryOutTokenIntroduceUrl
    //     const result = await get({
    //         url:url,
    //         params:options,
    //         store:context
    //     })
    //     let {data}=result
    //     data=data.data
    //     return data
    // },
    // //获取币种讯息  外部api
    // async queryOutTokenInfo(context,options){
    //     let url=URL.apiUrl
    //     const result = await get({
    //         url:url,
    //         params:options,
    //         store:context
    //     })
    //     let {data}=result
    //     return data
    // },
    //交易中心  币种相关
    // coin/profile
    //币种介绍
    // exchangeCoinIntroduceUrl:apiConfig.apiHost+'/coin/introduce/{code}',
    //获取币种讯息  外部api
    async exchangeCoinIntroduce(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.exchangeCoinIntroduceUrl,{code:options.code,lang:options.lang}),
            params:{},
            store:context,
            outApi:true,
        })
        return data
    },
    //获取IP讯息  外部api
    async serviceIpInfo(context,options){

        const result = await get({
            url:URL.serviceIpUrl,
            params:{},
            store:context,
            outApi:true,
        })
        let {data}=result
        let {ip}=data||{}
        // fqCommon.log('serviceIpUrl=',result)
        data = await get({
            url:fqCommon.substitute(URL.serviceIpInfoUrl,{ip:ip}),
            params:{},
            store:context,
            outApi:true,
        })
        return data
    },
    /**
    币种信息 name	: bitcoin   币种
        currency:	cny  货币类型
    *  */
    // exchangeCoinProfileUrl:apiConfig.apiHost+'/coin/profile',
    async exchangeCoinProfile(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.exchangeCoinProfileUrl,{name:options.name,currency:options.currency}),
            params:{},
            store:context,
            outApi:true,
        })
        return data
    },
    // //币种新闻  code:'eos' 币种    lang:'zh' 语言代码   page: 0  当前页  size:10 页数
    // exchangeCoinNewsUrl:apiConfig.apiHost+'/coin/news/{code}/{lang}/{page}',
    async exchangeCoinNews(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.exchangeCoinNewsUrl,{code:options.code,lang:options.lang,page:options.page,size:options.size,name:options.name,id:options.id,fullCode:options.fullCode}),
            params:{},
            store:context,
            outApi:true,
        })
        return data
    },
    // //币种详情    name:bitcoin 币种名称
    // exchangeCoinHqzUrl:apiConfig.apiHost+'/coin/hqz/{name}',
    async exchangeCoinHqz(context,options){
        let result={}
        if(options.code){
            try{
                result = await get({
                    url:fqCommon.substitute(URL.exchangeCoinHqzUrl,{name:options.name}),
                    params:{},
                    store:context,
                    outApi:true,
                })
            }catch(e){
                fqCommon.error(e)
            }
            // fqCommon.error('0--------',options)
            let {data}=result
            if(!data||data.code!=0){
                // fqCommon.error('0--------',options)
                result=await context.dispatch('exchangeCoinMyToken',{code:options.code,id:options.id})
            }
        }else{
            try{
                result = await get({
                    url:fqCommon.substitute(URL.exchangeCoinHqzUrl,{name:options.name}),
                    params:{},
                    store:context,
                    outApi:true,
                })
            }catch(e){
                fqCommon.error(e)
            }
        }
        return result
    },
    // exchangeCoinHqzUrl:apiConfig.apiHost+'/coin/hqz/{name}',
    async exchangeMarketData(context,options){
        let result={}
        try{
            result = await get({
                url:URL.exchangeMarketDataUrl,
                params:{},
                store:context,
                outApi:true,
            })
        }catch(e){
            fqCommon.error(e)
        }
        return result
    },
    async shortUrlGenerate(context,options){
        let data = await get({
            url:URL.shortUrlGenerateUrl,
            params:options,
            store:context,
            outApi:true,
        })
        return data
    },
    // //币种详情    name:bitcoin 币种名称
    // exchangeCoinMyTokenUrl:apiConfig.apiHost+'/coin/hqz/{name}',
    async exchangeCoinMyToken(context,options){
        const data = await get({
            url:fqCommon.substitute(URL.exchangeCoinMyTokenUrl,{code:options.code,id:options.id}),
            params:{},
            store:context,
            outApi:true,
        })
        return data
    },
    // //  name: exnet 域名前缀    local: 'zh-cn' 语言代码  page: 1 当前页
    // queryNoticesListUrl:apiConfig.apiHost+'/zendesk/activities/{name}/{locale}/{articleId}/{pageNo}/{pageSize}',
    async queryNoticesList(context,options){
        let lang=context.state.lang
        let prefix='en-us'
        if(lang){
            prefix=Constants.LANGMAP[lang.toUpperCase()].help
        }
        const data = await get({
            url:fqCommon.substitute(URL.queryNoticesListUrl,{name:options.name,locale:prefix,articleId:options.articleId,pageNo:options.pageNo,pageSize:options.pageSize}),
            params:{},
            noholdFilter:true,//不需要维护的过滤
            store:context,
            outApi:true,
        })
        return data
    },

}