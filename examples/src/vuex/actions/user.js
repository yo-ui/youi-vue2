import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
import {post,get} from '@/vuex/axios'
export default {
    //获取用户消息  登录才获取  langKey: ZH_CN
    async queryUserMsg(context,options){
        const result = await post({
            url:URL.queryUserMsgUrl,
            params:options,
            store:context,
            needToken:true,
        })
        let {data}=result
        if(data.err==0){
            let msgList=data.data
            context.commit('setUserMsgList',msgList);
        }
        return result
    },
    //获取用户消息  登录才获取  langKey: ZH_CN
    async queryUserUreadMsg(context,options){
        const data = await post({
            url:URL.queryUserUreadMsgUrl,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取登录日志数据
    async queryUserLoginInfo(context,options){
        const result = await post({
            url:URL.queryUserLoginInfoUrl,
            params:options,
            store:context,
            needToken:true,
        })
        let {data}=result
        return data
    },
    //获取认证信息
    async certifiedAuditLogs(context,options){
        const result = await post({
            url:URL.certifiedAuditLogsUrl,
            params:options,
            store:context,
            needToken:true,
        })
        let {data}=result
        return data
    },
    //我的资金列表
    async assetsList(context,options){
        const result = await post({
            url:URL.assetsListUrl,
            params:options,
            store:context,
            needToken:true,
        })
        let {data}=result
        if(data.err==0){
            let dataTemp=data.data||{}
            // let totalAssets={
            //     btc: dataTemp.totalBtcVal,
            //     currency: dataTemp.totalUsdtVal
            // }
            let myAssetsList=dataTemp.listPersonAssets
            // context.commit('setTotalAssets',totalAssets)
            context.commit('setUserAssetsList',myAssetsList)
        }
        return data
    },
    //获取提现记录
    async confirmWithdraw(context,options){
        const data = await post({
            url:URL.confirmWithdrawUrl,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //收集信息
    async batchCollect(context,options){
        const data = await post({
            url:URL.batchCollectUrl,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //个人认证
    async personAuth(context,options){
        const data = await post({
            url:URL.personAuthUrl,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //机构认证
    async agencyAuth(context,options){
        const data = await post({
            url:URL.agencyAuthUrl,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },//查询用户收藏
    async queryPageCollect(context,options){
        let userInfo=context.getters.getUserInfo
        if(!userInfo||!userInfo.userId){
            //用户信息不存在
            return {}
        }
        let url=URL.queryPageCollectUrl
        const result = await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        let {data}=result
        if(data.code==200){
            let collectMap={}
            let collects=data.data
            let len=collects?collects.length:0
            for(let i=0;i<len;i++){
                collectMap[collects[i].businessId]='collect'
            }
            context.commit("setCollectMap",collectMap)
            context.dispatch("loadTradeDataMap")
        }
        return data
    },
    //用户收藏取消收藏处理
    async userCollect(context,item){
        let userInfo=context.getters.getUserInfo;
        let collectMap=context.getters.getCollectMap;
        !collectMap&&(collectMap={});
        if(userInfo&&userInfo.userId){//用户登录情况下直接收藏
            if(collectMap[item.pid]){//是否收藏
                //取消收藏
                let {data}=await context.dispatch('cancelCollect',{
                    pairId:item.pid,
                    type:Constants.COLLECTIONTYPE.TOKEN_PARI,
                })
                delete collectMap[item.pid]
            }else{
                // 收藏
                let {data}=await context.dispatch('collect',{
                    pairId:item.pid,
                    type:Constants.COLLECTIONTYPE.TOKEN_PARI,
                })
                collectMap[item.pid]='collect'
            }
        }else{//保存在本地
            if(collectMap[item.pid]){//是否收藏
                delete collectMap[item.pid]
            }else{
                collectMap[item.pid]='collect'
            }
        }
        context.commit("setCollectMap",collectMap)
        context.dispatch("loadTradeDataMap")
        return {}
    },
    //收藏处理
    async collect(context,options){
        let url=URL.collectUrl
        const result = await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        let {data}=result
        return data
    },
    //编辑用户信息
    async editUserInfo(context,options){
        let url=URL.editUserInfoUrl
        const result = await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        let {data}=result
        return data
    },
    //取消收藏处理
    async cancelCollect(context,options){
        let url=URL.cancelCollectUrl
        const result= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        let {data}=result
        return data
    },
    //认证信息状态
    async verifyStatusInfo(context,options){
        let url=URL.verifyStatusInfoUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取充值记录
    async specialDepositList(context,options){
        let url=URL.specialDepositListUrl
        const data= await get({
            url:url,
            params:{},
            store:context,
            needToken:true,
        })
        return data
    },
    //获取提现记录
    async specialWithdrawList(context,options){
        let url=URL.specialWithdrawListUrl
        const data= await get({
            url:url,
            params:{},
            store:context,
            needToken:true,
        })
        return data
    },
    //获取币种余额
    async getAccountAmount(context,options){
        let url=URL.getAccountAmountUrl
        const result= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        let {data}=result
        if(data.err==0){
            if(data.data){
                let userTokenAssets=context.getters.getUserTokenAssets;
                if(!userTokenAssets){
                    userTokenAssets={}
                }
                userTokenAssets[options.tokenId]=data.data.balance
                context.commit('setUserTokenAssets',userTokenAssets)
            }
        }
        return result
    },
    //获取24小时历史委托
    async queryPageHisOrder(context,options){
        let url=URL.queryPageHisOrderUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取当前委托
    async queryPageOrder(context,options){
        let url=URL.queryPageOrderUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //取消订单
    async undoOrder(context,options){
        let url=URL.undoOrderUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //创建买入订单
    async createBuyOrder(context,options){
        let url=URL.createBuyOrderUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        if(!$vm.websocketLinkStatus){//如果websocket 连接失败处理
            //重新加载当前委托数据 
            let fq_exchange_authorize_component=document.querySelector('.fq-exchange-authorize-component')
            if(fq_exchange_authorize_component){
                let __vue=fq_exchange_authorize_component.__vue__.$parent
                __vue&&__vue.queryPageOrder()
            }
        }
        return data
    },
    //创建卖出订单
    async createSaleOrder(context,options){
        let url=URL.createSaleOrderUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取用户等级信息
    async userLeverInfo(context,options){
        let url=URL.userLeverInfoUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取用户设置信息
    async personDefaultSetting(context,options){
        let url=URL.personDefaultSettingUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //保存用户设置信息
    async personSetting(context,options){
        let url=URL.personSettingUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //修改用户密码
    async editPwd(context,options){
        let url=URL.editPwdUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //开启创建谷歌验证
    async creGoogleAuth(context,options){
        let url=URL.creGoogleAuthUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //更改谷歌验证
    async googleAuth(context,options){
        let url=URL.googleAuthUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //绑定谷歌验证
    async editGoogleAuth(context,options){
        let url=URL.editGoogleAuthUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //绑定邮箱验证
    async visitorRegister(context,options){
        let url=URL.visitorRegisterUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //绑定手机号
    async bindPhone(context,options){
        let url=URL.bindPhoneUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //更换绑定手机号
    async editBindAuthPhone(context,options){
        let url=URL.editBindAuthPhoneUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //更换谷歌
    async resetGoogle(context,options){
        let url=URL.resetGoogleUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
        })
        return data
    },
    //更换绑定手机号
    async editBindPhone(context,options){
        let url=URL.editBindPhoneUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //将未读消息标记为已读
    async markMsg(context,options){
        let url=URL.markMsgUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //重置绑定手机号
    async resetBindInfo(context,options){
        let url=URL.resetBindInfoUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取充值地址
    async getRechargeAddress(context,options){
        let url=URL.getRechargeAddressUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取地址列表
    async queryPageAddress(context,options){
        let url=URL.queryPageAddressUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取当前提币可用数
    async computeWithdrawSum(context,options){
        let url=URL.computeWithdrawSumUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //添加地址
    async createAddress(context,options){
        let url=URL.createAddressUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //删除地址
    async removeAddress(context,options){
        let url=URL.removeAddressUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true
        })
        return data
    },
    //查询充值记录
    async queryPageRechargeRecord(context,options){
        let url=URL.queryPageRechargeRecordUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //查询提现记录
    async queryPageWithdrawRecord(context,options){
        let url=URL.queryPageWithdrawRecordUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //设置资金密码
    async setFundsPwdPro(context,options){
        let url=URL.setFundsPwdProUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //重置资金密码验证
    async editFundsPwdPro(context,options){
        let url=URL.editFundsPwdProUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //重置资金密码
    async editFundsPwd(context,options){
        let url=URL.editFundsPwdUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //资金备用手机号
    async verifiyFundMobileCode(context,options){
        let url=URL.verifiyFundMobileCodeUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //设置资金密码
    async setFundsPwd(context,options){
        let url=URL.setFundsPwdUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //主题设置
    async personThemeSetting(context,options){
        let url=URL.personThemeSettingUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //重置谷歌验证
    async resetGoogleAuth(context,options){
        let url=URL.resetGoogleAuthUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取当前历史成交
    async queryPageFinishOrder(context,options){
        let url=URL.queryPageFinishOrderUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取子账户
    async querySubaccountByUserId(context,options){
        let url=URL.querySubaccountByUserIdUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取通告信息
    async queryNoticeMsg(context,options){
        let url=URL.queryNoticeMsgUrl
        const data= await get({
            url:url,
            params:options,
            store:context,
            noholdFilter:true,
        })
        return data
    },
    //极验认证
    async geetestVerifyInit(context,options){
        let url=URL.geetestVerifyInitUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
        })
        return data
    },
    //获取提现短信验证码
    async sendSmsWithdraw(context,options){
        let url=URL.sendSmsWithdrawUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //重置手机号发送短信
    async sendResetMobileVerCode(context,options){
        let url=URL.sendResetMobileVerCodeUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //重置手机号
    async resetMobile(context,options){
        let url=URL.resetMobileUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //更换谷歌密钥
    async editGooglePreAuth(context,options){
        let url=URL.editGooglePreAuthUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //提现
    async applyWithdraw(context,options){
        let url=URL.applyWithdrawUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //子账户查询
    async accountQuery(context,options){
        let url=URL.accountQueryUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //找回密码
    async forgetPassWordSendMail(context,options){
        let url=URL.forgetPassWordSendMailUrl
        const data= await post({
            url:url,
            params:options,
            store:context
        })
        return data
    },
    //删除子账户
    async subaccountDel(context,options){
        let url=URL.subaccountDelUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //获取子账户权限
    async tranPairQueryByUid(context,options){
        let url=URL.tranPairQueryByUidUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //设置子账户权限
    async subaccountAuth(context,options){
        let url=URL.subaccountAuthUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //添加子账户
    async addSubaccount(context,options){
        let url=URL.addSubaccountUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    //取消提币
    async undoWithdraw(context,options){
        let url=URL.undoWithdrawUrl
        const data= await post({
            url:url,
            params:options,
            store:context,
            needToken:true,
        })
        return data
    },
    
}