<!--demo页面-->
<template>
    <div class="yo-component-page">
        <yo-header code="component"></yo-header>
        <div ref="yo_container" class="flex-content">
            <div ref="yo_left" class="yo-left">
                <img src="https://file.iviewui.com/asd/asd-coding5.png" alt="">
                <h2 class="title" v-text="langKey('开发指南')"></h2>
                <ul class="list">
                    <router-link :to="{name:'componentGuide'}"><li :class="{'active':code=='componentGuide'}">{{langKey('入门')}}</li></router-link>
                    <router-link :to="{name:'componentGuide'}"><li :class="{'active':code=='componentGuide1'}">{{langKey('快速上手')}}</li></router-link>
                    <router-link :to="{name:'componentGuide'}"><li :class="{'active':code=='componentGuide2'}">{{langKey('国际化')}}</li></router-link>
                </ul>
                <h2 class="title" v-text="langKey('组件')"></h2>


                <h3 class="sub" v-text="langKey('基础组件')"></h3>
                <ul class="list">
                    <router-link :to="{name:'componentGrid'}"><li :class="{'active':code=='componentGrid'}">{{langKey('栅格')}}</li></router-link>
                    <router-link :to="{name:'componentLayout'}"><li :class="{'active':code=='componentLayout'}">{{langKey('布局')}}</li></router-link>
                    <router-link :to="{name:'componentButton'}"><li :class="{'active':code=='componentButton'}">{{langKey('按钮')}}</li></router-link>
                    <router-link :to="{name:'componentLink'}"><li :class="{'active':code=='componentLink'}">{{langKey('文字链接')}}</li></router-link>
                    <router-link :to="{name:'componentIcon'}"><li :class="{'active':code=='componentIcon'}">{{langKey('图标')}}</li></router-link>
                </ul>
                <h3 class="sub" v-text="langKey('表单组件')"></h3>
                <ul class="list">
                    <router-link :to="{name:'componentInput'}"><li :class="{'active':code=='componentInput'}">{{langKey('输入框')}}</li></router-link>
                </ul>
                <h3 class="sub" v-text="langKey('导航组件')"></h3>
                <ul class="list">
                    <router-link :to="{name:'componentBreadcrumb'}"><li :class="{'active':code=='componentBreadcrumb'}">{{langKey('面包屑')}}</li></router-link>
                </ul>
            </div>
            <div class="yo-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import yoCommon from '@/common/common'
    export default {
        name: 'yo-component-page',
        components: { //组件传入
            yoHeader:() => import(/* webpackChunkName: "yo-component-header" */ '@com/common/yo-header'),
        },
        data() {
            return {
                // code:'componentGuide',
            }
        },
        mounted() {
            this.initEvent()
        },
        computed: {
            code(){
                return this.$route.name||'componentGuide'
            }
        },
        beforeDestroy() {
            let that=this
            window.removeEventListener('scroll',that.scrollEvent)
        },
        methods: {
            initEvent(){
                let that=this
                window.addEventListener('scroll',that.scrollEvent)
            },
            scrollEvent(){
                let that=this
                let yo_container=that.$refs.yo_container
                let yo_left=that.$refs.yo_left
                if(window.scrollY>20){
                    yoCommon.addClass(yo_container,'fixed')
                    yo_container.style.paddingLeft=yo_left.offsetWidth+'px'
                }else{
                    yoCommon.removeClass(yo_container,'fixed')
                    yo_container.style.paddingLeft=0
                }
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../assets/less/pages/component.less";
</style>
