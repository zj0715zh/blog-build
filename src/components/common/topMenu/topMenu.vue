<template>
<section id="topMenu">
	<img src="http://www.ppdaicdn.com/invest/2016/index/images/slogan.png">
	<section class="user_info">
		<div class="user_name">
			<span>邹杰</span>
			<i class="icon iconfont icon-yonghu"></i>
		</div>
		<div class="login_out">
			<span @click="">注销</span>
			<i class="icon iconfont icon-zhuxiao2"></i>
		</div>
	</section>
</section>
</template>
<script>
	import Vue from 'vue'
	export default {
		name:'topMenu',
	    data() {
        	return {
	      		
	      	}
	    },
	    methods: {
	      	loginOut(){
	      		//do some ajax
	      	}
	    }
    }
</script>
<style scoped lang="css" src="./topMenu.css">
</style>