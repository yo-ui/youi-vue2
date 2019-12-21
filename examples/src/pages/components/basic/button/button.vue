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
        
        <h3>Button 参数</h3>
		<table class="table">
			<tr>
				<th>参数</th>
				<th>说明</th>
				<th>类型</th>
				<th>可选值</th>
				<th>默认值</th>
			</tr>
			<tr>
				<td>icon</td>
				<td>左侧引用icon</td>
				<td>String</td>
				<td>(图标页所有的icon name)</td>
				<td>-</td>
			</tr>
			<tr>
				<td>rightIcon</td>
				<td>右侧引用icon</td>
				<td>String</td>
				<td>(图标页所有的icon name)</td>
				<td>-</td>
			</tr>
			<tr>
				<td>loading</td>
				<td>是否加载中，将覆盖原有的图标</td>
				<td>Boolean</td>
				<td>-</td>
				<td>false</td>
			</tr>
			<tr>
				<td>block</td>
				<td>按钮是否占一行显示</td>
				<td>Boolean</td>
				<td>-</td>
				<td>false</td>
			</tr>
			<tr>
				<td>noBorder</td>
				<td>按钮是否显示边框</td>
				<td>Boolean</td>
				<td>-</td>
				<td>false</td>
			</tr>
			<tr>
				<td>disabled</td>
				<td>按钮是否可用</td>
				<td>Boolean</td>
				<td>-</td>
				<td>false</td>
			</tr>
			<tr>
				<td>size</td>
				<td>按钮是否可用</td>
				<td>String</td>
				<td>l/m/ s/ xs</td>
				<td>-</td>
			</tr>
			<tr>
				<td>native-type</td>
				<td>原生 type 属性</td>
				<td>String</td>
				<td>button / submit / reset</td>
				<td>-</td>
			</tr>
		</table>



		<h3>Button 事件</h3>
		<table class="table">
			<tr>
				<th>参数</th>
				<th>说明</th>
				<th>返回值</th>
			</tr>
			<tr>
				<td>click</td>
				<td>点击事件</td>
				<td>Event</td>
			</tr>
		</table>
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
