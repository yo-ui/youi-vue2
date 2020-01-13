/**
 *  author: eric
 *  create at: 2020-01-13 16:04:37
 */
<template>
	<div class="demo">
		值:{{yoRadio}}
		<yo-radio v-model="yoRadio" :label="langKey('禁用')"></yo-radio>
		<yo-radio v-model="yoRadio" :label="langKey('选中且禁用')"></yo-radio>
	</div>
</template>
<script>
export default {
	data() {
		return {
			yoRadio:'选中且禁用'
		}
	},
	mounted() {
		this.$emit('loaded')
	},
}
</script>
<style lang="less" scoped>
	.demo{
		.yo-radio{
			margin-right: 10px;
		}
	}
</style>
