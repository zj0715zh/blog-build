<template>
<section id="goodsManage">
	<div class="search">
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
		  <el-form-item label="商品名称">
		    <el-input v-model="formInline.user" placeholder="商品名称"></el-input>
		  </el-form-item>
		  <el-form-item label="一级分类">
		    <el-select v-model="formInline.one" placeholder="一级分类">
		      <el-option label="移动设备" value="shanghai"></el-option>
		      <el-option label="家用电器" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="二级分类">
		    <el-select v-model="formInline.two" placeholder="二级分类">
		      <el-option label="手机" value="shanghai"></el-option>
		      <el-option label="平板" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="品牌">
		    <el-select v-model="formInline.brand" placeholder="品牌">
		      <el-option label="苹果" value="shanghai"></el-option>
		      <el-option label="华为" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit" icon="search" style="margin-left: 68px;">查询</el-button>
		    <el-button type="success" icon="plus" @click="jump('/addStepOne?type=addNew')">新增商品</el-button>
		  </el-form-item>
		</el-form>
	</div>
	<div class="table_list">
		<el-table :data="tableData" border style="width: 100%" v-loading.body="goodsListLoading" element-loading-text="拼命加载中">
		    <el-table-column align="center" prop="id" label="id" width="100%"></el-table-column>
		    <el-table-column align="center" prop="goodsName" label="商品名称" width="100%"></el-table-column>
		    <el-table-column align="center" prop="brandName" label="品牌名称" width="120%"></el-table-column>
		    <el-table-column align="center" prop="goodsType" label="商品分类" width="100%"></el-table-column>
		    <el-table-column align="center" prop="seller" label="商家" width="100%"></el-table-column>
		    <el-table-column align="center" prop="saleStart" label="销售开始时间"></el-table-column>
		    <el-table-column align="center" prop="saleEnd" label="销售结束时间"></el-table-column>
		    <el-table-column align="center" prop="status" label="状态" width="100%"></el-table-column>
		    <el-table-column align="center" label="sKu列表" width="100%">
		      <template scope="scope">
		        <el-button
		          size="small"
		          @click="searchSkuList(scope.$index, scope.row)">查询</el-button>
		      </template>
		    </el-table-column>
		    <el-table-column align="center" label="操作" width="80">
		      <template scope="scope">
		        <el-button
		          size="small"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		      </template>
		    </el-table-column>
	  	</el-table>
	</div>
	<div class="pagination">
	  	<el-pagination 
	  		@current-change="handleCurrentChange"
      		:current-page.sync="currentPage"
	  		layout="total,prev, pager, next" 
	  		:total="1000">
	  	</el-pagination>
	</div>
	<div class="dialog">
		<el-dialog title="sKu列表" :visible.sync="dialogTableVisible" :beforeClose="handleBeforeClose" >
		  	<el-table :data="sKuData" border v-loading.body="sKuListLoading" element-loading-text="拼命加载中">
		    	<el-table-column property="date" label="日期" width="150"></el-table-column>
		    	<el-table-column property="name" label="姓名" width="200"></el-table-column>
		    	<el-table-column property="address" label="地址"></el-table-column>
		  	</el-table>
		</el-dialog>
	</div>
</section>
</template>
<script>
	import Vue from 'vue'
	import { mapGetters,mapState,mapActions,mapMutations } from 'vuex'
    import { Form,FormItem,Input,Select,Option,Button,Table,TableColumn,Pagination,Dialog} from 'element-ui'
    Vue.use(Form)
	Vue.use(FormItem)
	Vue.use(Input)
	Vue.use(Select)
	Vue.use(Option)
	Vue.use(Button)
	Vue.use(Table)
	Vue.use(TableColumn)
	Vue.use(Pagination)
	Vue.use(Dialog)
	export default {
		name:'goodsManage',
		data() {
	      return {
	        formInline: {
	          user: '',
	          one: '',
	          two:'',
	          brand:'',
	        },
	        tableData: [],
	        sKuData: [],
	        option:{},
	        currentPage:2,
	        dialogTableVisible:false,
	        goodsListLoading:true,
	        sKuListLoading:false
	      }
	    },
	    methods: {
	    	getGoodsList(option){
	    		this.goodsListLoading = true;
	    		this.$ajax.get('/data/goodsManage/goodsList.json')
				.then((response)=>{
					this.tableData = response.data.tableData;
					this.goodsListLoading = false;
				})
				.catch(error=>{
					console.log(error)
					this.goodsListLoading = false;
				})
	    	},
	    	getSkuList(id){
	    		this.sKuListLoading = true;
	    		this.$ajax.get('/data/goodsManage/sKuList.json')
				.then((response)=>{
					this.sKuData = response.data.sKuData;
					this.sKuListLoading = false;
				})
				.catch(error=>{
					console.log(error)
					this.sKuListLoading = false;
				})
	    	},
	    	handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		        this.getGoodsList();
	      	},
	      	handleBeforeClose(done){
	      		this.dialogTableVisible = false;
	      	},
	      	onSubmit() {
	        	console.log('submit!');
	      	},
	      	searchSkuList(index, row) {
	        	console.log(index, row);
	        	this.dialogTableVisible = true;
	        	setTimeout(()=>{
	        		this.getSkuList();
	        	},200)
	      	},
	      	handleEdit(index, row){
	      		this.$router.push('/addStepOne')
	      	},
	      	handleDelete(index, row) {
	        	console.log(index, row);
	      	}
	    },
		created(){
			this.getGoodsList();
			this.$store.commit('set_BreadcrumbList',{BreadcrumbList:[{name:'商品管理',href:'/goodsManage'}]})
	      	this.$store.commit('set_isCollapse',{isCollapse:true})
	    },
	    computed:{
	    	isCollapse(){
	    		return this.$store.state.isCollapse
	    	}
	    }
	}
</script>
<style scoped lang="css" src="./goodsManage.css">
</style>