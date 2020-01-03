/**
 *  author: eric
 *  create at: 2019-12-30 23:48:26
 */
<template>
	<div class="demo">
		双向绑定:{{yoInput}} <br>
		<yo-input size="l" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input size="m" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input size="s" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<yo-input size="xs" :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>

		<br>
		<yo-input clearable :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
		<br>
		<yo-input show-word-limit :placeholder="langKey('请输入内容')" v-model="yoInput"></yo-input>
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
	
</style>
