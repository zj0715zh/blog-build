<template>
<section id="leftSide">
	<div class="Collapse">
	    <a href="javascript:;" class="btn_Collapse" @click="toggle">{{isCollapse?'展开':'收起'}}</a>
	</div>
	<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" theme="dark">
		<a href="javascript:;" @click="toggle" style="background: #121a2c;">
		  	<el-menu-item index="0">
			    <i class="icon iconfont icon-github"></i>
			    <span slot="title" style="font-size: 16px;color: #fff;">菜单管理</span>
		  	</el-menu-item>
	  	</a>
	  	<a href="#goodsManage">
		  	<el-menu-item index="1">
			    <i class="icon iconfont icon-aixin"></i>
			    <span slot="title">日志录入</span>
		  	</el-menu-item>
	  	</a>
	</el-menu>
</section>
</template>
<script>
	import Vue from 'vue'
	import { mapGetters,mapState,mapActions,mapMutations } from 'vuex'
    import { RadioGroup, RadioButton, Menu, Submenu, MenuItem, Tooltip, MenuItemGroup} from 'element-ui'
    Vue.use(RadioGroup)
	Vue.use(RadioButton)
	Vue.use(Menu)
	Vue.use(Submenu)
	Vue.use(MenuItem)
	Vue.use(Tooltip)
	Vue.use(MenuItemGroup)
	export default {
		name:'leftSide',
	    computed:{
	    	isCollapse(){
	    		return this.$store.state.isCollapse
	    	}
	    },
	    methods: {
    	  	toggle(){
    	  		this.$store.commit('set_isCollapse',{isCollapse:false})
    	  		// console.log(this.$store.state.isCollapse)
    	  	},
		    handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		    },
	      	handleClose(key, keyPath) {
		        console.log(key, keyPath);
	      	}
	    }
	}
</script>
<style scoped lang="css" src="./leftSide.css">
</style>