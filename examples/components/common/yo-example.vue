
<template>
    <div class="yo-example-component">
        <div class="yo-example" v-if="demo&&iframe">
            <iframe class="yo-example-browser" v-if="iframe" :src="iframe" width="100%" frameborder="0" height="400"></iframe>
            <component v-if="demo" :is="com" :key="com"></component>
        </div>
        <div class="yo-example-code">
            <ul class="nav">
                <li>
                    <i class="yo-font-run"></i>
                </li>
                <li>
                    <i class="yo-font-full"></i>
                </li>
                <li>
                    <i class="yo-font-copy"></i>
                </li>
            </ul>
            <yo-code :class="{'expand':expand}" :src="demo"></yo-code>
            <footer >
                {{expand?langKey('隐藏代码'):langKey('展开代码')}}
                <i class="yo-font-down"></i>
            </footer>
        </div>
    </div>
</template>
<script>
import components from '../demos/'
export default {
    name:'yo-example-component',
    props:{
        iframe:String,
        demo:Object,
    },
    data(){
        let com=this.demo
        let coms=com.split('/')
        let names=[]
        coms.forEach((item,index)=>{
            if(index>0){
                item=item.slice(0,1).toUpperCase()+item.slice(1)
            }
            names.push(item)
        })
        com=names.join('')
        return {
            com,//动态展示的组件
            //是否展开
            expand:false,
        }
    }
}
</script>
<style lang="less">
    
</style>