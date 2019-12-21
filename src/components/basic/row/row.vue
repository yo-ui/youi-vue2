/**
 *  author: eric
 *  create at: 2019-12-21 13:26:02
 */
<template>
    <div :class="rowClasses"
       :style="rowStyles">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = 'yo-row';

const Props = {
  type: ['flex'],
  align: ['top', 'middle', 'bottom'],
  justify: ['start', 'end', 'center', 'space-around', 'space-between'],
  direction: ['row', 'row-reverse', 'column', 'column-reverse']
};
export default {
	name: 'yoRow',
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
        type: {
            validator(value) {
                return Props.type.indexOf(value) != -1;
            }
        },
        align: {
            validator(value) {
                return Props.align.indexOf(value) != -1;
            }
        },
        justify: {
            validator(value) {
                return Props.justify.indexOf(value) != -1;
            }
        },
        direction: {
            validator(value) {
                return Props.direction.indexOf(value) != -1;
            }
        },
        gutter: {
            type: Number,
            default: 0
        },
    }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    //提供给子组件使用
    provide() {
        return {
            yoRow: this
        };
    },
    computed: {
        rowClasses() {
            return [{
                [`${prefixCls}`]: true,
                [`${prefixCls}-${this.type}`]: !!this.type,
                [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                [`${prefixCls}-${this.type}-${this.direction}`]: this.direction,
                [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify
            }]
        },
        rowStyles() {
            let style = {};
            // if (this.space !== 0) {
            //     const leftTop = getHalf(this.space, true);
            //     const rightBottom = getHalf(this.space, false);
            //     style.marginLeft = leftTop;
            //     style.marginRight = rightBottom;
            //     style.marginTop = leftTop;
            //     style.marginBottom = rightBottom;
            // }

            // if (this.spaceX !== 0) {
            //     style.marginLeft = getHalf(this.spaceX, true);
            //     style.marginRight = getHalf(this.spaceX, false);
            // }
            // if (this.spaceY !== 0) {
            //     style.marginTop = getHalf(this.spaceY, true);
            //     style.marginBottom = getHalf(this.spaceY, false);
            // }
            return style
        }
    },
    //存放 方法
    methods: {
		init(){

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
