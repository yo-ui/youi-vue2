/**
 *  author: eric
 *  create at: 2019-12-30 23:48:26
 */
<template>
	<div class="demo">
		{{langKey('双向绑定')}}:{{yoInput}} <br>
		<p>{{langKey('基础用法')}}</p>
		<yo-input :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>

		<p>{{langKey('尺寸')}}</p>
		<yo-input size="l" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input size="m" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input size="s" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input size="xs" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>

		<p>{{langKey('可清空')}}</p>
		<yo-input :placeholder="langKey('请输入内容')" v-model="yoInput" clearable></yo-input>
		<p>{{langKey('显示字数统计')}}</p>
		<yo-input show-word-limit clearable maxlength="100" :placeholder="langKey('请输入内容')" v-model="yoInput1"></yo-input>
		<yo-input show-word-limit outer maxlength="100" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input show-word-limit  :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input type="textarea" show-word-limit  :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>

		<p>{{langKey('禁用状态')}}</p>
		<yo-input disabled :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input type="textarea" disabled :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<p>{{langKey('密码框')}}</p>
		<yo-input type="password" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input type="password" clearable show-password :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>

		<p>{{langKey('带icon的输入框')}}</p>
		{{langKey('属性方式')}}:
		<yo-input right-icon="calendar" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input icon="search" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<br>
		{{langKey('slot方式')}}:
		<yo-input :placeholder="langKey('请输入内容')" v-model="yoInput">
			<i class="yo-icon-calendar" slot="right"></i>
		</yo-input>
		<yo-input :placeholder="langKey('请输入内容')" v-model="yoInput">
			<i class="yo-icon-search" slot="left"></i>
		</yo-input>

		<p>{{langKey('复合型输入框')}}</p>
		<yo-input :placeholder="langKey('请输入内容')" v-model="yoInput">
			<span slot="prepend">Http://</span>
		</yo-input>
		<yo-input size="l" :placeholder="langKey('请输入内容')" v-model="yoInput">
			<span slot="append">.com</span>
		</yo-input>
		<yo-input :placeholder="langKey('请输入内容')" v-model="yoInput">
			<span slot="append" class="yo-icon-search"></span>
		</yo-input>
		<p>{{langKey('开启 search 属性，可以设置为搜索型输入框。')}}</p>
		<yo-input search :placeholder="langKey('请输入内容')" v-model="yoInput">
		</yo-input>
		<yo-input search size="l" enter-button :placeholder="langKey('请输入内容')" v-model="yoInput">
		</yo-input>
		<yo-input search enter-button="Search" :placeholder="langKey('请输入内容')" v-model="yoInput">
		</yo-input>

	</div>
</template>
<script>
export default {
	data() {
		return {
			yoInput:1,
			yoInput1:2,
		}
	},
	mounted() {
		this.$emit('loaded')
	},
}
</script>
<style lang="less" scoped>
	.demo{
		.yo-input{
			margin-right: 10px;
		}
	}
</style>
