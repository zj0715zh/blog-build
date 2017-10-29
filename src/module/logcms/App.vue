<template>
	<div id="app">
		<loading v-show="isLoading"></loading>
		<top-menu></top-menu>
		<left-side ref="left_side"></left-side>
		<breadcrumb></breadcrumb>
		<div class="right_side">
        	<router-view></router-view>
		</div>
	</div>
</template>
<style lang="css" src="./cms.css">
</style>
<script type="text/javascript">
	import { mapGetters,mapState,mapActions,mapMutations } from 'vuex'
	import Loading from 'components/common/loading/loading'
	import TopMenu from 'components/common/topMenu/topMenu'
	import Breadcrumb from 'components/common/Breadcrumb/Breadcrumb'
	import LeftSide from 'components/common/leftSide/leftSide'
	export default {
		name:'weblog',
		data(){
			return {
				
			}
		},
		computed:{
			...mapState(['counts','isLoading'])
		},
		created(){
			// this.$store.dispatch('UPDATE_COUNTS').then(data=>{
		},
		methods:{
			// ...mapMutations(['SET_COUNTS_TOP','SET_COUNTS_ASK']),
			bindEvent(){
				var vm = this;
				var right_side = document.querySelector('.right_side');
				right_side.addEventListener('click',function(){
					vm.$store.commit('set_isCollapse',{isCollapse:true})
				})
			}
		},
		components:{
			TopMenu,
			LeftSide,
			Breadcrumb,
			Loading
		},
		mounted(){
			// this.SET_COUNTS_TOP({number:'zoujie'})
			// this.SET_COUNTS_ASK({number:'zouhe'})
			this.bindEvent();
		}
	}
</script>