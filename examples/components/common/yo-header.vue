<!--组件 demo -->
<template>
    <header class="yo-header-com">
        <div class="logo">
        </div>
        <ul class="yo-nav">
            <router-link :to="{name:'index'}"><li :class="{'active':code=='index'}">{{langKey('首页')}}</li></router-link>
            <router-link :to="{name:'component'}"><li :class="{'active':code=='component'}">{{langKey('组件')}}</li></router-link>
            <router-link :to="{name:'themes'}"><li :class="{'active':code=='themes'}">{{langKey('主题')}}</li></router-link>
            <router-link :to="{name:'run'}"><li :class="{'active':code=='run'}">Run</li></router-link>
            <router-link :to="{name:'admin'}"><li :class="{'active':code=='admin'}">{{langKey('管理后台')}}</li></router-link>
        </ul>
    </header>
</template>

<script>
    import yoCommon from '@/common/common'
    export default {
        name: 'yo-header-component',
        data() {
            return {
                
                }
        },
        props:{
            code:{
                type:String,
                default:'index',
            }
        },
        components: { //组件传入
        },
        mounted() {
        },
        computed: {

        },
        methods: {

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../src/assets/less/components/common/yo-header.less";
</style>
