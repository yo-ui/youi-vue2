/* 
 *  author :eric 
 *  created at:2019-12-12
 *  按钮组件
*/
import Button from '../packages/button/index.js'
const components = [
  	Button
]

const install = function(Vue, opts = {}) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  	install(window.Vue)
}

export default {
	version: '1.0.0',
	install,
	Button,
}
