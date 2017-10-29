<template>
<section id="Breadcrumb">
	<el-breadcrumb separator=" 》">
	  <el-breadcrumb-item :to="{ path: '/' }"><i class="icon iconfont icon-tag"></i>首页</el-breadcrumb-item>
	  <template v-for="item in BreadcrumbList">
	  	<el-breadcrumb-item :to="{ path: item.href}">{{item.name}}</el-breadcrumb-item>
	  </template>
	</el-breadcrumb>
</section>
</template>
<script>
	import Vue from 'vue'
	import { Breadcrumb, BreadcrumbItem} from 'element-ui'
	Vue.use(Breadcrumb)
	Vue.use(BreadcrumbItem)
	export default {
		name:'Breadcrumb',
	    data() {
        	return {
	      		
	      	}
	    },
	    computed:{
	    	BreadcrumbList(){
	    		return this.$store.state.BreadcrumbList;
	    	}
	    },
    }
</script>
<style scoped lang="css" src="./Breadcrumb.css">
</style>