<!--首页组件-->
<template>
    <div class="yo-index-page">
        <header class="yo-header">
            <div class="logo">
            </div>
            <ul class="yo-nav">
                <li class="active">首页</li>
                <li>组件</li>
                <li>主题</li>
                <li>Run</li>
                <li>管理后台</li>
            </ul>
        </header>
        <section class="yo-slider">

        </section>
    </div>
</template>

<script>
    
    export default {
        name: 'yo-index-page',
        components: { //组件传入
        },
        data() {
            return {
            }
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
@import "../assets/less/pages/index.less";
</style>
