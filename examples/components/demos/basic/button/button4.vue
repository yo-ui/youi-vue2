<template>
  <div>
    <p>{{langKey('按钮样式')}}</p>
        <yo-button round>{{langKey('圆角按钮')}}</yo-button>
        <yo-button circle>{{langKey('圆形按钮')}}</yo-button>
        <yo-button square>{{langKey('方形按钮')}}</yo-button>
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
