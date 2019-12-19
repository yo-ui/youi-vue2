<!--demo页面-->
<template>
    <div class="yo-component-button-page">
        <!-- <h1 :id="'Button'+langKey('按钮')"><a :href="'#'+'Button'+langKey('按钮')" class="yo-font yolianjie"></a>{{'Button'+langKey('按钮')}}</h1> -->
        <yo-anchor :text="'Button'+langKey('按钮')" size="18"></yo-anchor>

        <yo-anchor :text="langKey('基本用法')" size="18"></yo-anchor>        
        <yo-example root="/components/demos/" demo="basic/button/button1" ext=".vue"></yo-example>        
        

        <p>{{langKey('带有跳转的按钮')}}</p>
        <yo-example root="/components/demos/" demo="basic/button/button2" ext=".vue"></yo-example>        
        

        <p>{{langKey('不同颜色的按钮')}}</p>
        <yo-example root="/components/demos/" demo="basic/button/button3" ext=".vue"></yo-example> 

        <p>{{langKey('按钮样式')}}</p>
        <yo-example root="/components/demos/" demo="basic/button/button4" ext=".vue"></yo-example> 

        <p>{{langKey('按钮大小')}}</p>
        <yo-example root="/components/demos/" demo="basic/button/button5" ext=".vue"></yo-example> 

        <p>{{langKey('长按钮')}}</p>
        <yo-button block>{{langKey('默认按钮')}}</yo-button>
        <p>{{langKey('不可用按钮')}}</p>
        <yo-button>{{langKey('不可用按钮')}}</yo-button>
        <yo-button disabled>{{langKey('不可用按钮')}}(disabled)</yo-button>

        <yo-anchor :text="langKey('图标按钮')"></yo-anchor>
        <p>{{langKey('带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。')}}</p>
        <yo-button icon="search">{{langKey('图标按钮')}}</yo-button>
        <yo-button icon="eye">{{langKey('图标按钮')}}</yo-button>
        <yo-button loading type="primary">{{langKey('loading图标按钮')}}</yo-button>
        <yo-button loading loading-name="loading1" type="primary">{{langKey('loading图标按钮')}}</yo-button>
        <yo-button icon="message">{{langKey('图标按钮')}}</yo-button>
        <yo-button icon="loading3">{{langKey('图标按钮')}}</yo-button>

        <yo-anchor :text="langKey('文字按钮')"></yo-anchor>
        <p>{{langKey('没有边框和背景色的按钮。')}}</p>
        <yo-button type="text">{{langKey('文字按钮')}}</yo-button>
        <yo-button type="text" disabled>Disabled {{langKey('文字按钮')}}</yo-button>

        <yo-anchor :text="langKey('按钮组')"></yo-anchor>
        <p>{{langKey('以按钮组的方式出现，常用于多项类似操作。')}}</p>
        <yo-button-group>
            <yo-button type="primary" icon="left">{{langKey('上一页')}}</yo-button>
            <yo-button type="primary" right-icon="right">{{langKey('下一页')}}</yo-button>
        </yo-button-group>
        &nbsp;
        <yo-button-group>
            <yo-button type="primary" icon="add"></yo-button>
            <yo-button type="primary" icon="edit"></yo-button>
            <yo-button type="primary" icon="remove"></yo-button>
            <yo-button type="primary" icon="refresh"></yo-button>
        </yo-button-group>
        &nbsp;
        <yo-button-group>
            <yo-button icon="add"></yo-button>
            <yo-button icon="edit"></yo-button>
            <yo-button icon="remove"></yo-button>
            <yo-button icon="refresh"></yo-button>
        </yo-button-group>
        <br>
        <br>
        <yo-button-group vertical>
            <yo-button type="primary" icon="add"></yo-button>
            <yo-button type="primary" icon="edit"></yo-button>
            <yo-button type="primary" icon="remove"></yo-button>
            <yo-button type="primary" icon="refresh"></yo-button>
        </yo-button-group>
        &nbsp;
        <yo-button-group vertical>
            <yo-button icon="add"></yo-button>
            <yo-button icon="edit"></yo-button>
            <yo-button icon="remove"></yo-button>
            <yo-button icon="refresh"></yo-button>
        </yo-button-group>
        <!-- <h3>{{langKey('基础用法')}}</h3> -->
        <yo-anchor :text="langKey('代码示例')"></yo-anchor>
        <yo-anchor :text="langKey('基础用法')"></yo-anchor>
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
