<template>
  <div>
     <yo-button color="red" textColor="white">{{langKey('不同颜色的按钮')}}</yo-button>
      <yo-button textColor="red">{{langKey('跳转到百度')}}</yo-button>
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
