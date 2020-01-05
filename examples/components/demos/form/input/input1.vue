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
		<yo-input show-word-limit inner maxlength="100" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input show-word-limit outer maxlength="100" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input show-word-limit  :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input type="textarea" show-word-limit  :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
	</div>
</template>
<script>
export default {
	data() {
		return {
			yoInput:1,
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
