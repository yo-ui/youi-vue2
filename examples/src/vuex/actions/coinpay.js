import {URL} from '@/common/env'
// import fqCommon from '@/common/common'
import {post,get,del,put} from '@/vuex/axios'
export default {
    //获取场外交易订单
    async getOrders(context,options){
        let url=URL.getOrdersUrl
        const data= await get({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取买单广告
    async adGetList(context,options){
        let url=URL.adGetListUrl
        const data = await post({
            url:url,
            params:options,
            store:context,
            // needToken:true,
        })
        return data
    },
    //发送短信
    async sendSmsTradeSell(context,options){
        let url=URL.sendSmsTradeSellUrl
        const data = await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //发送邮件
    async sendEmailTradeSell(context,options){
        let url=URL.sendEmailTradeSellUrl
        const data = await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    /**
     *  确认订单 (购买-标记已付款) put     
        取消订单  patch
        创建订单（确认卖出）  post
        获取订单详情 get
    **/
    async otcOrder(context,{options,type}){
        let url=URL.otcOrderUrl
        let params={
            url:url,
            params:options,
            store:context,
            needToken:true,
        }
        let data=null
        if(type=='get'){
            data = await get(params)
        }else if(type=='post'){
            data = await post(params)
        }else if(type=='put'){
            data = await put(params)
        }else if(type=='delete'){
            data = await del(params)
        }else{
            data = await post(params)
        }
        return data
    },
    //查询交易初始化  获取支付方式
    async otcPayMethod(context,{options,type}){
        let url=URL.otcPayMethodUrl
        let params={
            url:url,
            params:options,
            store:context,
            needToken:true,
        }
        let data =null
        if(type=='post'){
            data = await post(params)
        }else if(type=='get'){
            data = await get(params)
        }else{
            data = await post(params)
        }
        return data
    },
    //确认释放货币
    async otcRelease(context,options){
        let url=URL.otcReleaseUrl
        const data = await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //提交申诉
    async otcAppeal(context,options){
        let url=URL.otcAppealUrl
        const data = await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
}