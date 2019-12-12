/* 
 *  author :eric 
 *  created at:2019-12-12
 *  按钮组件
*/
import Button from './components/button'
import ButtonGroup from './components/button-group'
const components = [
	Button,
	ButtonGroup,
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
	ButtonGroup,
}
