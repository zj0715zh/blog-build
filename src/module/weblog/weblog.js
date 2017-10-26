import Vue from 'vue'
import axios from 'axios'
import promise from 'es6-promise'
import App from './App'
import router from 'src/router/weblog'
import store from 'src/store'
import * as filters from 'src/filters'
import 'common/css/reset.css'
import 'common/css/iconfont/iconfont.css'
const FastClick = require('fastclick')
Vue.prototype.$ajax = axios
promise.polyfill()
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

FastClick.attach(document.body)//取消click事件的延迟
var weblog,app;
weblog = {
	init(){
		app = new Vue({
			el: '#app',
			router,
			store,
			template: '<App/>',
			components: { App }
		});
	}
}
weblog.init();