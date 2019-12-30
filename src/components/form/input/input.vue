/**
 *  author: eric
 *  create at: 2019-12-30 23:48:26
 */
<script>
export default {
	name: 'yoInput',
    template:`
        <div v-if="type=='text'" class="yo-input">
        <input ></input>
        </div>
        <textarea class="yo-textarea" v-if-else="type=='textarea'"></textarea>
    `,
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
            type:String,
            default:'text',//组件类型  text textarea  默认为text
        },
	}, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    computed: {

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
