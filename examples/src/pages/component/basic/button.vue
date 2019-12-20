<!--demo页面-->
<template>
    <div class="yo-component-button-page">
        <!-- <h1 :id="'Button'+langKey('按钮')"><a :href="'#'+'Button'+langKey('按钮')" class="yo-font yolianjie"></a>{{'Button'+langKey('按钮')}}</h1> -->
        <yo-anchor :text="'Button'+langKey('按钮')" size="18"></yo-anchor>

        <yo-anchor :text="langKey('基本用法')" size="18"></yo-anchor>
        <yo-example root="/components/demos/" demo="basic/button/button1" ext=".vue"></yo-example>        
        
        <yo-example root="/components/demos/" demo="basic/button/button2" ext=".vue"></yo-example>        
        

        
        <yo-example root="/components/demos/" demo="basic/button/button3" ext=".vue"></yo-example> 

        
        <yo-example root="/components/demos/" demo="basic/button/button4" ext=".vue"></yo-example> 

        
        <yo-example root="/components/demos/" demo="basic/button/button5" ext=".vue"></yo-example> 


        <yo-example root="/components/demos/" demo="basic/button/button6" ext=".vue"></yo-example> 

        
        <yo-example root="/components/demos/" demo="basic/button/button7" ext=".vue"></yo-example> 
        

        <yo-anchor :text="langKey('图标按钮')"></yo-anchor>
        <yo-example root="/components/demos/" demo="basic/button/button8" ext=".vue"></yo-example> 
        

        <yo-anchor :text="langKey('文字按钮')"></yo-anchor>
        <yo-example root="/components/demos/" demo="basic/button/button9" ext=".vue"></yo-example> 
        

        <yo-anchor :text="langKey('按钮组')"></yo-anchor>
        <yo-example root="/components/demos/" demo="basic/button/button10" ext=".vue"></yo-example> 
        
    </div>
</template>

<script>
    import yoCommon from '@/common/common'
    export default {
        name: 'yo-component-button-page',
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
// @import "../assets/less/pages/index.less";
</style>
