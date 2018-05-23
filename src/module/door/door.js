import Vue from 'vue'
import App from './App'
import axios from 'axios'
import promise from 'es6-promise'
import 'common/css/reset.css'
import 'common/css/iconfont/iconfont.css'
Vue.prototype.$ajax = axios
new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})