import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
import {post,get} from '@/vuex/axios'
export default {
    //游戏众筹信息
    async crowdIndex(context,options){
        let url=URL.crowdIndexUrl
        const data= await post({
            url:url,
            params:options,
            store:context
        })
        return data
    },
    //游戏参与众筹
    async crowdPay(context,options){
        let url=URL.crowdPayUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //个人参与众筹记录
    async personalRecordList(context,options){
        let url=URL.personalRecordListUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //所有参与众筹记录
    async allRecordList(context,options){
        let url=URL.allRecordListUrl
        const data= await post({
            url:url,
            params:options,
            store:context
        })
        return data
    },
    //添加发表意见
    async addCrowdSuggest(context,options){
        let url=URL.addCrowdSuggestUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //所有意见列表
    async crowdSuggestList(context,options){
        let url=URL.crowdSuggestListUrl
        const data= await post({
            url:url,
            params:options,
            store:context
        })
        return data
    },
    //推广邀请列表
    async generalizeInvitationsList(context,options){
        let url=URL.generalizeInvitationsListUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //推广列表
    async generalizeDividendList(context,options){
        let url=URL.generalizeDividendListUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //推广分润列表
    async generalizeIndex(context,options){
        let url=URL.generalizeIndexUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //售卖列表
    async tokenSaleList(context,options){
        let url=URL.tokenSaleListUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
        })
        return data
    },
    //售卖详情
    async tokenSaleDetail(context,options){
        let url=fqCommon.substitute(URL.tokenSaleDetailUrl,{id:options.id})
        const data= await post({
            url:url,
            params:options,
            store:context,
        })
        return data
    },
    //售卖购买详情
    async tokenSaleInvestDetail(context,options){
        let url=fqCommon.substitute(URL.tokenSaleInvestDetailUrl,{projectId:options.projectId})
        const data= await post({
            url:url,
            params:{},
            store:context,
            needToken:true,
        })
        return data
    },
    //售卖购买
    async tokenSaleInvest(context,options){
        let url=URL.tokenSaleInvestUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //售卖发起详情
    async tokenSaleApplyDetail(context,options){
        let url=fqCommon.substitute(URL.tokenSaleApplyDetailUrl,{id:options.id})
        const data= await post({
            url:url,
            params:{},
            store:context,
            needToken:true,
        })
        return data
    },
    //售卖发起
    async tokenSaleApply(context,options){
        let url=URL.tokenSaleApplyUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //我投资的项目
    async tokenSaleInvestList(context,options){
        let url=URL.tokenSaleInvestListUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //我发起的项目
    async tokenSaleApplyList(context,options){
        let url=URL.tokenSaleApplyListUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //我的投资记录
    async tokenSaleRecordList(context,options){
        let url=URL.tokenSaleRecordListUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //删除我发起的项目
    async deleteTokenSaleApply(context,options){
        let url=fqCommon.substitute(URL.deleteTokenSaleApplyUrl,{projectId:options.projectId})
        const data= await post({
            url:url,
            params:{},
            store:context,
            needToken:true,
        })
        return data
    },

}