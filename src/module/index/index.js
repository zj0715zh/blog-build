import Vue from 'vue'
import App from './App'
const FastClick = require('fastclick')
FastClick.attach(document.body)//取消click事件的延迟
var index,app;
index = {
	init(){
		app = new Vue({
			el: '#app',
			template: '<App/>',
			components: { App }
		});
	}
}
index.init();