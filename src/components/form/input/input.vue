/**
 *  author: eric
 *  create at: 2019-12-30 23:48:26
 */
<script>
const prefix='yo-input'
const Props = {
    // 'xxl','xl', 'lg', 'md', 'sm', 'xs'
  size: ['l','m', 's', 'xs']
}
const template=`<slot name="left"></slot>
        <i :class="'yo-icon-'+icon" v-if="icon"></i>
        <input 
        class="${prefix}-inner"
        @blur="onBlur" 
        @focus="onFocus"
        @keyup="onKeyup"
        @keydown="onKeydown"
        @keypress="onKeypress"
        @change="onChange" 
        @input="onInput" 
        @clear="onClear"
        @compositionstart="onCompositionStart"
        @compositionupdate="onCompositionUpdate"
        @compositionend="onCompositionEnd"
        :disabled="inputDisabled"
        :readonly="readonly"
        ref="input"
        v-bind="$attrs"/>
        <i :class="'yo-icon-'+rightIcon" v-if="rightIcon"></i>
        <i class="yo-icon-close" v-if="clearable&&this.value" @click="clear"></i>
        <slot name="right"></slot>`
export default {
	name: 'yoInput',
    template:`
        <div :class="yoClasses" :style="yoStyles">
            <template v-if="type!='textarea'">
                ${template}
            </template>
            <textarea v-else class="yo-textarea-inner" 
            @blur="onBlur" 
            @focus="onFocus"
            @keyup="onKeyup"
            :disabled="inputDisabled"
            :readonly="readonly"
            @keydown="onKeydown"
            @keypress="onKeypress"
            @change="onChange" 
            @input="onInput" 
            @clear="onClear"
            @compositionstart="onCompositionStart"
            @compositionupdate="onCompositionUpdate"
            @compositionend="onCompositionEnd"
            v-if-else="type=='textarea'"
            ref="textarea"
            v-bind="$attrs"
            ></textarea>
            <span class="${prefix}-word-count" v-if="showWordLimit">{{ textLen }}/{{ upperLimit }}</span>
        </div>
    `,
        // <div v-if="type=='textarea'" class="yo-textarea">        
        // </div>
	//存放 数据
    data: function () {
        return {
        }
    },
    inject:['yoForm','yoFormItem'],
    //存放 子组件
    // template: '',
    // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
    // props 中的数据，都是只读的，无法重新赋值
    props:{
        value: [String, Number],
        type:{
            type:String,
            default:'text',//组件类型  text textarea  默认为text
        },
        //字数统计是否显示在外面
        outer:{
            type:Boolean,
            default:false,
        },
        //字数统计是否显示在里面
        inner:{
            type:Boolean,
            default:true,
        },
        //是否显示清除图标按钮
        clearable:{
            type:Boolean,
            default:false,
        },
        icon: String,
        rightIcon: String,
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        showWordLimit: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            validator(value) {
                return Props.size.indexOf(value) != -1
            }
        },
	}, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    computed: {
        inputDisabled(){
            return this.disabled||(this.yoForm||{}).disabled
        },
        nativeInputValue() {
            // console.error(this.value)
            return this.value === null || this.value === undefined ? '' : String(this.value);
        },
        yoStyles(){
            let yoStyles= {
                'background-color':`${this.color}`,
                'border-color':`${this.color}`,
                'color':`${this.textColor}`,
            }
            // console.log(yoStyles)
            return this.type=='textarea'?{}:yoStyles
        },
        inputSize(){
            return this.size||(this.yoForm||{}).size||this.$YOUI.size
        },
        yoClasses() {
            return this.type=='textarea'?{
                [`yo-textarea`]:true,
            }:{
                [`${prefix}`]: true,
                [`${prefix}-circle`]: !!this.circle,
                [`${prefix}-round`]: !!this.round,
                [`${prefix}-square`]: !!this.square,
                [`${prefix}-disabled`]: !!this.disabled,
                [`${prefix}-${this.inputSize}`]: !!this.inputSize,
                [`${prefix}-transparent`]: !!this.transparent,
                [`${prefix}-no-border`]: !!this.noBorder,
            }
        },
        textLen(){
            return String(this.value||'').length
        },
        upperLimit(){
            let maxlength=this.$attrs.maxlength||this.maxlength
            if(!maxlength){
                maxlength=(this.type=='textarea'?300:20) //默认为300个字符限制                
                if(this.getInput()){
                    this.maxlength=maxlength
                    this.getInput().setAttribute('maxlength',maxlength)
                }
            }
            return maxlength
        },
    },
    //存放 方法
    methods: {
		init(){
            this.setNativeInputValue();
        },
        //使input 失去焦点
        blur(){},
        //使input 获取焦点
        focus(){},
        // 清空输入值
        clear() {
            this.$emit('input', '');
            this.$emit('change', '');
            this.$emit('clear');
        },
        //选中input中的文字
        select(){},
        onBlur(){},
        onFocus(){},
        onKeyup(){},
        onKeydown(){},
        onKeypress(){},
        onChange(){},
        onClear(){},        
        onCompositionStart() {
            this.isComposing = true;
        },
        onCompositionUpdate(event) {
            const text = event.target.value;
            const lastCharacter = text[text.length - 1] || '';
            // this.isComposing = !isKorean(lastCharacter);
            this.isComposing = false
        },
        onCompositionEnd(event) {
            if (this.isComposing) {
                this.isComposing = false;
                this.onInput(event);
            }
        },
        onInput(event) {
            // should not emit input during composition
            if (this.isComposing){
                return
            } 

            // should remove the following line when we don't support IE
            if (event.target.value === this.nativeInputValue){
                return
            } 

            this.$emit('input', event.target.value)
            // ensure native input value is controlled
            this.$nextTick(this.setNativeInputValue)
        },
        getInput(){
            return this.$refs.input || this.$refs.textarea;
        },
        setNativeInputValue() {
            const input = this.getInput();
            if (!input){
                return
            } 
            if (input.value === this.nativeInputValue){
                return
            }
            let value=this.nativeInputValue
            // console.error(value,this.value,'----')
            //增加未写v-model 的控件处理
            if(this.value!==undefined){
                input.value = this.nativeInputValue
            }
        },
	},
    //存放 过滤器
    filters: {

	},
    //自定义 私有指令
    directives: {

    },
    watch: {
        value(newVal,oldVal) {
            if(oldVal!=newVal){
                this.setNativeInputValue()
            }
        }
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
