import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
import {post,get} from '@/vuex/axios'
export default {
    async queryCompanyIm(context,options){
        const result = await get({
            url:URL.queryCompanyImUrl,
            params:options,
            store:context,
        })
        let data=result.data
        context.commit('setCustomerOnlineType',false)
        if(data.status==1){
            data=data.data||{}
            if(data.onlineType==1){//1为客服在线  其它为不在线
                context.commit('setCustomerOnlineType',true)
            }
        }
        return result
    },
}