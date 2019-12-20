<template>
  <div>
    <p>{{langKey('没有边框和背景色的按钮。')}}</p>
        <yo-button type="text">{{langKey('文字按钮')}}</yo-button>
        <yo-button type="text" disabled>Disabled {{langKey('文字按钮')}}</yo-button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
	  this.$emit('loaded')
  },
};
</script>

<style lang="less" scoped>
  .yo-btn{
    margin-bottom: 10px;    
  }
</style>
