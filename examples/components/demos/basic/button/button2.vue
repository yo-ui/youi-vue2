<template>
  <div>
    <p>{{langKey('带有跳转的按钮')}}</p>
    <yo-button to="http://www.baidu.com/">{{langKey('跳转到百度')}}</yo-button>
        <yo-button to="http://www.baidu.com/" type="text">{{langKey('跳转到百度')}}</yo-button>
        <yo-button to="http://www.baidu.com/" type="text" replace>{{langKey('不保存历史的跳转')}}</yo-button>
        <yo-button :to="{name:'componentGuide'}" replace>{{langKey('跳转到入门')}}</yo-button>
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
