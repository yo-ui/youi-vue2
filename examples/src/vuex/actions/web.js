import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
import {post,get} from '@/vuex/axios'
export default {
    loadTradeDataMap(context,data){
        let queryTradeBazaar=context.state.indexTradeList||[]
        queryTradeBazaar=JSON.parse(JSON.stringify(queryTradeBazaar))
        let queryPageToken=context.state.queryPageToken||[]
        queryPageToken=JSON.parse(JSON.stringify(queryPageToken))
        let ticker=context.state.indexTradeTicker
        let config=context.getters.getWebConfig||{}
        let reject_pair_bibi=config.reject_pair_bibi||''//需要过滤的交易对
        let reject_pair_bibis=reject_pair_bibi.split('|')||[]
        if(data){
            if(data.ticker&&data.ticker!="{}"){
                ticker=data.ticker
            }
        }
        if(ticker&&typeof(ticker)==='string'){
            ticker=JSON.parse(ticker)
        }
        ticker=ticker?JSON.parse(JSON.stringify(ticker)):{}
        for(let i in ticker){
            if(ticker.hasOwnProperty(i)){
                ticker[i].cp&&(ticker[i].cpp=ticker[i].cp.c0)
                if(reject_pair_bibis.findIndex(_item=>{//只放开USDT
                    return ticker[i].s0+'/'+ticker[i].s1==_item
                })>-1){
                    delete ticker[i]
                }
            }
        }
        let zeroCount=0
        let totalCount=0
        let zeroCountKeys=[]
        for(let i in ticker){
            totalCount++
            let obj=ticker[i]
            if(!(obj.q>0)){
                zeroCount++
                zeroCountKeys.push(i)
            }
        }
        //@TODO  测试交易对处理 start   FQCUBT  //如果未有开关则不显示
        let testTickerExchangeStatus=fqCommon.getItem(Constants.LOCALSTORAGEKEY.TESTTICKEREXCHAGNESTATUS)
        if(!(zeroCount>(totalCount*0.8))){//如果交易量为0的个数大于总数的80%不隐藏
            zeroCountKeys.forEach((item)=>{
                if(item=='FQCUBT'){
                    if(testTickerExchangeStatus!=1){
                        delete ticker[item]
                    }
                }else{
                    // delete ticker[item]
                    ticker[item].showStatus=false
                }
            })
        }
       
        // 测试交易对处理 end
        {
            let collectMap=context.getters.getCollectMap
            collectMap=JSON.parse(JSON.stringify(collectMap))
            let len=queryTradeBazaar.length//,tLen=queryPageToken.length
            let faverateList=[]
            let indexTradeDataMap={}
            for(let i =0 ;i<len;i++){
                let tradeList=[]
                let bazaar=queryTradeBazaar[i]
                for(let key in ticker){
                    if(ticker.hasOwnProperty(key)){
                        let map=ticker[key]
                        if(map.s1==bazaar.name&&map.status!=2){// status   0为正常   1、为维护中  2、下架
                            if(collectMap&&collectMap[map.pid]){
                                map.isCollect=true
                                faverateList.push(map)
                            }else{
                                map.isCollect=false
                            }
                            tradeList.push(map)
                        }
                    }
                }
                indexTradeDataMap[bazaar.id]=tradeList
            }
            indexTradeDataMap['faverite']=faverateList
            context.commit("setIndexTradeDataMap",indexTradeDataMap)//设置交易市场交易对数据
        }
        // fqCommon.log('ticker 在变化 ',ticker)
        (Object.keys(ticker).length>0)&&context.commit("setIndexTradeTicker",ticker)//设置交易对数据
    },
    //获取首页Banner
    async getIndexBanner(context,options){
        const result = await get({
            url:URL.queryPageBannerUrl,
            params:options,
            store:context
        });
        let {data}=result
        return data
    },
    //获取邮箱是否可用
    async valMailExist(context,options){
        const result = await post({
            url:URL.valMailExistUrl,
            params:options,
            store:context
        })
        let {data}=result
        return data
    },
    //加载解析初始化数据
    loadInitializeData(context,data){
        data=data?JSON.parse(JSON.stringify(data)):{}
        let ticker=data?data.ticker:{}
        if(ticker&&ticker!="{}"&&typeof(ticker)==='string'){
            ticker=JSON.parse(ticker)
        }
        data.ticker=ticker
        let queryPageToken=data?data.queryPageToken||[]:[]
        let queryTradeBazaar=data?data.queryTradeBazaar||[]:[]
        let config=data?(data.config||{}):{}
        let reject_pair_bibi=config.reject_pair_bibi||'',//需要过滤的交易对
        reject_matket_coin=config.reject_matket_coin||''//需要过滤的市场
        let reject_matket_coins=reject_matket_coin.split('|')||[]
        let reject_pair_bibis=reject_pair_bibi.split('|')||[]
        //@TODO  测试交易对处理 start   FQCUBT  //如果未有开关则不显示
        let testTickerExchangeStatus=fqCommon.getItem(Constants.LOCALSTORAGEKEY.TESTTICKEREXCHAGNESTATUS)
        if(testTickerExchangeStatus!=1){
            queryPageToken=queryPageToken.filter((item)=>{
                return item.code!='FQC'&&item.code!='UBT'
            })
            queryTradeBazaar=queryTradeBazaar.filter((item)=>{
                return item.name!='UBT'
            })
        }
        queryPageToken=queryPageToken.filter((item)=>{
            let bazaarList=item.bazaarList||[]
            item.bazaarList=bazaarList.filter(_item=>{
                return reject_matket_coins.findIndex((__item)=>{
                    return _item.bcode==__item
                })<0
            })
            return reject_pair_bibis.findIndex(_item=>{
                let s0=_item.split('/')[0]
                return s0==item.code
            })<0
        })
        queryTradeBazaar=queryTradeBazaar.filter((item)=>{
            return reject_matket_coins.findIndex((_item)=>{
                return item.name==_item
            })<0
        })
        // 测试交易对处理 end
        let tLen=queryPageToken.length
        let tokenInfoMap={}
        if(tLen>0){
            queryPageToken.forEach(item=>{
                tokenInfoMap[item.code]=item
            })
        }
        context.commit("setIndexRate",data?data.rate:{})
        context.commit("setCurrentCurrency",context.getters.getCurrentCurrency);
        context.commit("setCurrentRate")
        context.commit("setWebConfig",config)
        context.commit("setMachineValidType",config.verifyCvm)////1 aliyun  2 geetest
        context.commit("setQueryPageToken",queryPageToken)//设置货币信息
        context.commit("setTokenInfoMap",tokenInfoMap)//设置货币信息数据
        data&&data.data&&data.data.time&&context.commit("setDiffTime",data.data.time)
        context.commit("setTimezone")
        context.commit("setIndexTradeList",queryTradeBazaar)
        context.dispatch('loadTradeDataMap',data)
        context.commit('setInitializeLoadStatus',1)
    },
    //初始化配置信息
    async initialize(context,options){
        let initialize=context.getters.getInitialize
        if(initialize){
            try{
                context.dispatch('loadInitializeData',initialize)
            }catch(err){
                fqCommon.error('[initialize][loadInitializeData]',err)
            }
        }
        const result= await get({
            url:URL.initializeUrl,
            params:options,
            noholdFilter:true,//不需要维护的过滤
            store:context
        })
        let {data}=result
        data=data.data||{}
        if(data.ticker&&data.ticker!="{}"){
            context.commit('setInitialize',data||{})
        }
        context.dispatch('loadInitializeData',data)
        // let fq_index_exchange_component=document.querySelector('.fq-index-exchange-component')
        // if(fq_index_exchange_component){
        //     fq_index_exchange_component.__vue__.exchangeDataLoadStatus=false
        // }
        // let fq_exchange_exchange_component=document.querySelector('.fq-exchange-exchange')
        // if(fq_exchange_exchange_component){
        //     fq_exchange_exchange_component.__vue__.exchangeDataLoadStatus=false
        // }
        return data
    },
    //发送邮箱验证码
    async sendMailVerCode(context,options){
        let params={
            url:URL.sendMailVerCodeUrl,
            params:options,
            store:context,
        }
        if(options.needToken){
            params.needToken=true
        }
        const data = await post(params)
        return data
    },
    //获取ticker信息
    async queryTicker(context,options){
        const result = await get({
            url:URL.queryTickerUrl,
            params:options,
            store:context,
        })
        let {data}=result
        let ticker=data.data
        if(ticker&&ticker!="{}"){
            context.dispatch('loadTradeDataMap',{ticker})
        }
        return data
    },
    //获取交易对K线数据
    async queryKLine(context,options){
        const result = await post({
            url:URL.queryKLineUrl,
            params:options,
            retry:true,
            store:context
        })
        let {data}=result
        data=data.data||{}
        return data
    },
    //获取交易对深度图数据
    async queryDepth(context,options){
        const result = await post({
            url:URL.queryDepthUrl,
            params:options,
            retry:true,
            store:context
        })
        let {data}=result
        data=data.data||{}
        //排序处理
        let asks=data.asks||[],bids=data.bids||[]
        // ------start-------
        asks.sort(function(a,b){
            if(!a[0]){
                a[0]=0
            }
            if(!b[0]){
                b[0]=0
            }
            return parseFloat(b[0])-parseFloat(a[0])
        })

        bids.sort(function(a,b){
            if(!a[0]){
                a[0]=0
            }
            if(!b[0]){
                b[0]=0
            }
            return parseFloat(b[0])-parseFloat(a[0])
        })
        data.asks=asks.slice(0,100)
        data.bids=bids.slice(0,100)
        // fqCommon.log('asks=',asks,'bids=',bids)
        // context.commit("setExchangeDepth",data)
        return data
    },
    //获取交易对最新交易数据
    async queryPageTrade(context,options){
        // context.commit("setPageTradeData",[])
        const result = await post({
            url:URL.queryPageTradeUrl,
            params:options,
            store:context
        })
        // let {data}=result
        // data=data.data
        // context.commit("setPageTradeData",data)
        return result
    },
    //登录接口
    async login(context,options){
        const data = await post({
            url:URL.loginUrl,
            params:options,
            store:context
        })
        return data
    },
    //登录发送短信验证码接口
    async sendMobileVerCode(context,options){
        let params={
            url:URL.sendMobileVerCodeUrl,
            params:options,
            store:context,
        }
        if(options.needToken){
            params.needToken=true
        }
        const data = await post(params)
        return data
    },
    //注册发送短信验证码接口
    async sendAnonymousSms(context,options){
        let params={
            url:URL.sendAnonymousSmsUrl,
            params:options,
            store:context,
        }
        if(options.needToken){
            params.needToken=true
        }
        const data = await post(params)
        return data
    },
    //重置密码
    async resetPassword(context,options){
        const data = await post({
            url:URL.resetPasswordUrl,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //退出登录接口
    async logout(context,options){
        const result = await post({
            url:URL.logoutUrl,
            params:options,
            store:context,
            needToken:true,
        })
        let {data}=result
        if(data.err==0){//退出登录成功
            context.commit("setUserInfo",null)
            context.commit("setCollectMap",{})
            context.dispatch("loadTradeDataMap")
        }
        return data
    },
    //注册信息
    async registered(context,options){
        const data = await post({
            url:URL.registeredUrl,
            params:options,
            store:context
        })
        return data
    },
    //游客登录
    async visitorLogin(context,options){
        let url=URL.visitorLoginUrl
        const data= await post({
            url:url,
            params:options,
            store:context
        })
        return data
    },    
    //费率获取
    async servicefee(context,options){
        let url=URL.servicefeeUrl
        const data= await get({
            url:url,
            params:options,
            store:context
        })
        return data
    },    
}