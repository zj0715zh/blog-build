import Vue from 'vue'
import axios from 'axios'
import promise from 'es6-promise'
import App from './App'
import {Loading,Message} from 'element-ui'
import router from 'src/router/index'
import store from 'src/store'
import * as filters from 'src/filters'
import mixins from 'src/mixins'
import 'common/css/reset.css'
import 'common/css/iconfont/iconfont.css'
Vue.prototype.$ajax = axios
promise.polyfill()
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.use(Loading.directive)
Vue.prototype.$message = Message
Vue.mixin(mixins)
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