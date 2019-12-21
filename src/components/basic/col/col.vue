/**
 *  author: eric
 *  create at: 2019-12-21 13:25:54
 */
<template>
    <div :class="colClasses" :style="colStyles">
        <slot></slot>
    </div>    
</template>
<script>
const prefixCls = 'yo-col';
export default {
	name: 'yoCol',
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
        span: [Number, String],
        flex: [Number, String],
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object]
    }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据      
    inject:{
        yoRow:{
            default:'',
        }
    },
    computed: {
        colClasses() {
            let width = this.span;
            let classList = [`${prefixCls}`];
            classList.push({
                [`${prefixCls}-${width}`]: width,
            });

            // let noOtherWidth = width==undefined&&this.flex == undefined;
            let lastSize = null;
            for (let size of [ 'xl', 'lg', 'md', 'sm', 'xs' ]) {
                if (this[size]) {
                lastSize = this[size];
                classList.push(`${prefixCls}-${size}-${this[size]}`);
                } else if (lastSize) {
                classList.push(`${prefixCls}-${size}-${lastSize}`);
                }
            }

            return classList;
        },
        colStyles() {
            let style = {};
            let styleType = 'padding';
            if (this.flex) {
                style.flex = this.flex;
            }
            if (this.rowType == 'flex') {
                styleType = 'margin';
            }

            if (this.rowGutter && this.rowGutter !== 0) {
                const leftTop = getHalf(this.rowGutter, true);
                const rightBottom = getHalf(this.rowGutter, false);
                style[`${styleType}Left`] = leftTop;
                style[`${styleType}Right`] = rightBottom;
                style[`${styleType}Top`] = leftTop;
                style[`${styleType}Bottom`] = rightBottom;
            }

            // if (utils.isNumber(this.rowGutterX) && this.rowGutterX !== 0) {
            //     style[`${styleType}Left`] = getHalf(this.rowGutterX, true);
            //     style[`${styleType}Right`] = getHalf(this.rowGutterX, false);
            // }

            // if (utils.isNumber(this.rowGutterY) && this.rowGutterY !== 0) {
            //     style[`${styleType}Top`] = getHalf(this.rowGutterY, true);
            //     style[`${styleType}Bottom`] = getHalf(this.rowGutterY, false);
            // }

            return style;
        },
        rowType(){
            return ((this.yoRow||{}).type||'')
        },
        rowGutter(){
            return ((this.yoRow||{}).gutter||'')
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
