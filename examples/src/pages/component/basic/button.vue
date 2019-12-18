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
        <p>{{langKey('朴素简单按钮')}}</p>
        <yo-button plain>Default</yo-button>
        <yo-button plain type="primary">Primary</yo-button>
        <yo-button plain type="dashed">Dashed</yo-button>
        <yo-button plain type="text">Text</yo-button>
        <yo-button plain type="info">Info</yo-button>
        <yo-button plain type="success">Success</yo-button>
        <yo-button plain type="warning">Warning</yo-button>
        <yo-button plain type="error">Error</yo-button>
        <p>{{langKey('圆角按钮')}}</p>
        <yo-button round>Default</yo-button>
        <yo-button round type="primary">Primary</yo-button>
        <yo-button round type="dashed">Dashed</yo-button>
        <yo-button round type="text">Text</yo-button>
        <yo-button round type="info">Info</yo-button>
        <yo-button round type="success">Success</yo-button>
        <yo-button round type="warning">Warning</yo-button>
        <yo-button round type="error">Error</yo-button>
        <p>{{langKey('方形按钮')}}</p>
        <yo-button square>Default</yo-button>
        <yo-button square type="primary">Primary</yo-button>
        <yo-button square type="dashed">Dashed</yo-button>
        <yo-button square type="text">Text</yo-button>
        <yo-button square type="info">Info</yo-button>
        <yo-button square type="success">Success</yo-button>
        <yo-button square type="warning">Warning</yo-button>
        <yo-button square type="error">Error</yo-button>
        <p>{{langKey('圆形按钮')}}</p>
        <yo-button circle icon="search"></yo-button>
        <yo-button circle type="primary" icon="edit"></yo-button>
        <yo-button circle type="dashed" icon="remove"></yo-button>
        <yo-button circle type="info" icon="info"></yo-button>
        <yo-button circle type="success" icon="success"></yo-button>
        <yo-button circle type="warning" icon="warn"></yo-button>
        <yo-button circle type="error" icon="network-error"></yo-button>
        <p>{{langKey('透明按钮')}}</p>
        <section style="background:#eee;padding:10px;">
            <yo-button transparent>{{langKey('透明按钮')}}</yo-button>
        </section>
        <p>{{langKey('无边框按钮')}}</p>
        <yo-button no-border>{{langKey('无边框按钮')}}</yo-button>
        <yo-button no-border plain>{{langKey('无边框按钮')}}</yo-button>

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
        <yo-button circle>{{langKey('圆形按钮')}}</yo-button>
        <yo-button square>{{langKey('方形按钮')}}</yo-button>

        <p>{{langKey('按钮大小')}}</p>
        <yo-button size="l">{{langKey('大型按钮')}}</yo-button>
        <yo-button>{{langKey('默认按钮')}}</yo-button>
        <yo-button size="m">{{langKey('中等按钮')}}</yo-button>
        <yo-button size="s">{{langKey('小型按钮')}}</yo-button>
        <yo-button size="xs">{{langKey('超小按钮')}}</yo-button>
        <br>
        <br>
        <yo-button size="l" round>{{langKey('大型按钮')}}</yo-button>
        <yo-button round>{{langKey('默认按钮')}}</yo-button>
        <yo-button size="m" round>{{langKey('中等按钮')}}</yo-button>
        <yo-button size="s" round>{{langKey('小型按钮')}}</yo-button>
        <yo-button size="xs" round>{{langKey('超小按钮')}}</yo-button>

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
