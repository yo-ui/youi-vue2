<!--demo页面-->
<template>
    <div class="yo-component-button-page">
        <!-- <h1 :id="'Button'+langKey('按钮')"><a :href="'#'+'Button'+langKey('按钮')" class="yo-font yolianjie"></a>{{'Button'+langKey('按钮')}}</h1> -->
        <yo-anchor :text="'Button'+langKey('按钮')" size="18"></yo-anchor>
        <p>{{langKey('常用的操作按钮。')}}</p>
        <yo-button>Default</yo-button>
        <yo-button type="primary">Primary</yo-button>
        <yo-button type="dashed">Dashed</yo-button>
        <yo-button type="text">Text</yo-button>
        <yo-button type="info">Info</yo-button>
        <yo-button type="success">Success</yo-button>
        <yo-button type="warning">Warning</yo-button>
        <yo-button type="error">Error</yo-button>

        <p>{{langKey('带有跳转的按钮')}}</p>
        <yo-button to="http://www.baidu.com/">{{langKey('跳转到百度')}}</yo-button>
        <yo-button to="http://www.baidu.com/" type="text">{{langKey('跳转到百度')}}</yo-button>
        <yo-button to="http://www.baidu.com/" type="text" replace>{{langKey('不保存历史的跳转')}}</yo-button>
        <yo-button :to="{name:'componentGuide'}" replace>{{langKey('跳转到入门')}}</yo-button>

        <p>{{langKey('不同颜色的按钮')}}</p>
        <yo-button color="red" textColor="white">{{langKey('不同颜色的按钮')}}</yo-button>
        <yo-button textColor="red">{{langKey('跳转到百度')}}</yo-button>

        <p>{{langKey('按钮样式')}}</p>
        <yo-button round>{{langKey('圆角按钮')}}</yo-button>
        <yo-button square>{{langKey('方形按钮')}}</yo-button>

        <p>{{langKey('按钮大小')}}</p>
        <yo-button size="l">{{langKey('大型按钮')}}</yo-button>
        <yo-button>{{langKey('默认按钮')}}</yo-button>
        <yo-button size="m">{{langKey('中等按钮')}}</yo-button>
        <yo-button size="s">{{langKey('小型按钮')}}</yo-button>
        <yo-button size="xs">{{langKey('超小按钮')}}</yo-button>

        <p>{{langKey('长按钮')}}</p>
        <yo-button block>{{langKey('默认按钮')}}</yo-button>
        <p>{{langKey('不可用按钮')}}</p>
        <yo-button>{{langKey('不可用按钮')}}</yo-button>
        <yo-button disabled>{{langKey('不可用按钮')}}(disabled)</yo-button>
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
