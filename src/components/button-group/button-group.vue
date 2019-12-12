/**
 *  author: eric
 *  create at: 2019-12-12 14:37:53
 *  按钮组
 */
<template>
    <div class="yo-button-group" :class="buttonGroupCls">
        <slot></slot>
    </div>
</template>
<script>

const prefix = 'yo-button-group'
const Props = {
    size: ['l', 's', 'xs']
};
export default {
	name: 'yoButton-group',
	//存放 数据
    data: function () {
        return {

        }
    },
    //存放 子组件
    // template: '',
    // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
    // props 中的数据，都是只读的，无法重新赋值
    props:{
        circle: Boolean,
        reverse:{
            type:Boolean,
            default:false
        },
        size: {
            type: String,
            validator(value) {
                return Props.size.indexOf(value) != -1
            }
        }
	}, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    computed: {
        buttonGroupCls() {
            return {
                [`${prefix}`]: true,
                [`${prefix}-circle`]: !!this.circle,
                [`${prefix}-${this.size}`]: !!this.size
            }
        }
    },
    //存放 方法
    methods: {
		init(){
            const reverse = this.reverse
            let slots = this.$slots.default || [];
            if (reverse) {
                slots = slots.reverse()
            }
            console.log('------------',slots)
		}
	},
    //存放 过滤器
    filters: {

	},
    //自定义 私有指令
    directives: {

    },
    /*  生命周期函数  */
    //创建期间
    beforeCreate() { 

	},
    created() { 

	},
    beforeMount() { 

	},
    mounted() { 
		this.init()
	},
    //运行期间
    beforeUpdate() {

	},
    updated() {

	},
    //销毁时期
    beforeDestroy() {

	},
    destroyed() {

	}
}
</script>
