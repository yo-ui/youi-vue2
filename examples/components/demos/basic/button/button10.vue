<template>
  <div>
    <p>{{langKey('以按钮组的方式出现，常用于多项类似操作。')}}</p>
        <yo-button-group>
            <yo-button type="primary" icon="left">{{langKey('上一页')}}</yo-button>
            <yo-button type="primary" right-icon="right">{{langKey('下一页')}}</yo-button>
        </yo-button-group>
        &nbsp;
        <yo-button-group size="l">
            <yo-button type="primary" icon="add"></yo-button>
            <yo-button type="primary" icon="edit"></yo-button>
            <yo-button type="primary" icon="remove"></yo-button>
            <yo-button type="primary" icon="refresh"></yo-button>
        </yo-button-group>
        &nbsp;
        <yo-button-group size="xs">
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
</style>
