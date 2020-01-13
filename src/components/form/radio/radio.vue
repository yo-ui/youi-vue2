/**
 *  author: eric
 *  create at: 2020-01-13 16:04:37
 */
<script>
const prefix='yo-radio'
const Props = {
    // 'xxl','xl', 'lg', 'md', 'sm', 'xs'
  size: ['l','m', 's', 'xs']
}
export default {
    name: 'yoRadio',
    template:`
        <template v-if="items&&items.length>0">
            <label v-for="(item,index) in items" class="${prefix}" :class="yoClasses" :style="yoStyles">
                <i class="yo-icon yo-icon-radio-off" :class="iconClasses"></i>
                <input ref="radio" type="radio" 
                    class="${prefix}-inner"
                    aria-hidden="true"
                    v-model="model"
                    :value="label"
                >
                <slot></slot>
                <template v-if="!$slots.default">
                    {{label}}
                </template>
            </label>
        </template>
        <label v-else class="${prefix}" :class="yoClasses" :style="yoStyles">
            <i class="yo-icon yo-icon-radio-off" :class="iconClasses"></i>
            <input ref="radio" type="radio"
                class="${prefix}-inner"
                aria-hidden="true"
                v-model="model"
                :value="label"
            >
            <slot></slot>
            <template v-if="!$slots.default">
                {{label}}
            </template>
        </label>
    `,
    inject:{
        yoRadioGroup:{
            default:'',
        },
        yoForm:{
            default:''
        },
        yoFormItem:{
            default:''
        }
    },
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
        type:{
            type:[Number],
            default:1,
        },
        items:{
            type:Array,
        },
        label:{
            type:String,
            default:'',
        },
        size:{
            type: String,
            validator(value) {
                return Props.size.indexOf(value) != -1
            }
        },
        border:{
            type:Boolean,
            default:false,
        }
	}, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    computed: {        
        radioSize(){
            return this.size||(this.yoRadioGroup||{}).size||this.$YOUI.size
        },
        model:{
            get() {
                return (this.yoRadioGroup||{}).value||this.value;
            },
            set(val) {
                if (this.yoRadioGroup) {
                    // this.dispatch('yoRadioGroup', 'input', [val]);
                    this.yoRadioGroup.$emit('input',val);
                } else {
                    this.$emit('input', val);
                }
                this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
            }
        },
        yoStyles(){
            let yoStyles= {
                // 'background-color':`${this.color}`,
                // 'border-color':`${this.color}`,
                // 'color':`${this.textColor}`,
            }
            return yoStyles
        },
        yoClasses() {
            return {
                // [`${prefix}-default`]: !this.type,
                [`${prefix}-${this.type}`]: !!this.type,
                // [`${prefix}-circle`]: !!this.circle,
                // [`${prefix}-round`]: !!this.btnRound,
                // [`${prefix}-square`]: !!this.square,
                // [`${prefix}-disabled`]: !!this.disabled,
                // [`${prefix}-icon-circle`]: !!this.iconCircle,
                // // [`${prefix}-text`]: !!this.text,
                // [`${prefix}-loading`]: !!this.loading,
                // [`${prefix}-block`]: !!this.block,
                // [`${prefix}-${this.btnSize}`]: !!this.btnSize,
                // [`${prefix}-plain`]: !!this.plain,
                // [`${prefix}-transparent`]: !!this.transparent,
                // [`${prefix}-no-border`]: this.noBorder === true
            }
        },
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
