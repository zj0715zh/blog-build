<template>
	<div id="app">
		
        <router-view></router-view>
	</div>
</template>
<style lang="css" src="./weblog.css">
</style>
<script type="text/javascript">
	// import TopNav from 'components/topNav/topNav'
	// import PullDown from 'components/pullDown/pullDown'
	import { mapGetters,mapState,mapActions,mapMutations } from 'vuex'
	export default {
		name:'weblog',
		data(){
			return {
				test:2
			}
		},
		computed:{
			...mapState(['counts'])
		},
		created(){
			// this.$store.commit('SET_COUNTS',{number:12233})
			// this.$store.dispatch('UPDATE_COUNTS').then(data=>{
			// 	this.test = data
			// })
		},
		methods:{
			// ...mapMutations(['SET_COUNTS_TOP','SET_COUNTS_ASK'])
		},
		// components:{
		// 	TopNav,
		// 	PullDown
		// },
		mounted(){
			// this.SET_COUNTS_TOP({number:'zoujie'})
			// this.SET_COUNTS_ASK({number:'zouhe'})
		}
	}
</script>