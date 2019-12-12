import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
import {post,get} from '@/vuex/axios'
export default {
    //区块链未来游戏红包
    async redPacketQuota(context,options){
        let url=URL.redPacketQuotaUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //区块链未来游戏红包信息
    async redPacketQuotaInfo(context,options){
        let url=fqCommon.substitute(URL.redPacketQuotaInfoUrl,{id:options.id})
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //抽奖相关接口
    //获取奖品列表
    async luckdrawGetPrizeList(context,options){
        const data = await post({
            url:URL.luckdrawGetPrizeListUrl,
            params:options,
            store:context,
        })
        return data
    },
    //获取签到次数
    async luckdrawGetSignCount(context,options){
        let userInfo=context.getters.getUserInfo||{}
        if(!userInfo||!userInfo.userId){
            //用户信息不存在
            return {}
        }
        if(!options){
            options={}
        }
        options["token"]=userInfo.token
        const result = await post({
            url:URL.luckdrawGetSignCountUrl,
            params:options,
            store:context,
        })
        let data=result.data
        if(data.err==0){
            data=data.data||{}
            let lotteryCount=data.number||0
            let lotteryRecord=data.last_record
            context.commit('setLotteryRecord',lotteryRecord)
            context.commit('setLotteryCount',lotteryCount)
        }
        return result
    },
    //签到抽奖
    async luckdrawSignIn(context,options){
        let userInfo=context.getters.getUserInfo||{}
        if(!options){
            options={}
        }
        options["token"]=userInfo.token
        const data = await post({
            url:URL.luckdrawSignInUrl,
            params:options,
            store:context,
        })
        return data
    },
}