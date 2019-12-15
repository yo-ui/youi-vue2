<!--demo页面-->
<template>
    <div class="yo-component-page">
        <yo-header code="component"></yo-header>
        <div class="flex-content">
            <div class="yo-left">
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
                    <router-link :to="{name:'componentButton'}"><li :class="{'active':code=='componentButton'}">{{langKey('按钮')}}</li></router-link>
                    <router-link :to="{name:'componentGuide'}"><li :class="{'active':code=='componentGuide5'}">{{langKey('首页')}}</li></router-link>
                </ul>
                <h3 class="sub" v-text="langKey('表单组件')"></h3>
                <ul class="list">
                    <router-link :to="{name:'componentGuide'}"><li :class="{'active':code=='componentGuide6'}">{{langKey('首页')}}</li></router-link>
                    <router-link :to="{name:'componentGuide'}"><li :class="{'active':code=='componentGuide7'}">{{langKey('首页')}}</li></router-link>
                    <router-link :to="{name:'componentGuide'}"><li :class="{'active':code=='componentGuide8'}">{{langKey('首页')}}</li></router-link>
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
            yoHeader:() => import(/* webpackChunkName: "exnet-component-header" */ '@com/common/yo-header'),
        },
        data() {
            return {
                // code:'componentGuide',
            }
        },
        mounted() {
        },
        computed: {
            code(){
                return this.$route.name||'componentGuide'
            }
        },
        methods: {

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../assets/less/pages/component.less";
</style>
