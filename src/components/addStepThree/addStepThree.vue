<template>
	<section id="addStepThree">
		<div class="steps_box">
			<el-steps space="50%" align-center center :active="2" finish-status="success">
			  	<el-step title="编辑商品信息"></el-step>
			  	<el-step title="编辑商品属性"></el-step>
			  	<el-step title="编辑商品SKU"></el-step>
			</el-steps>
		</div>
		<div class="table_list">
			<el-table :data="SkuTableData" border style="width: 100%" v-loading.body="goodsListLoading" element-loading-text="拼命加载中">
			    <el-table-column align="center" prop="id" label="SKU名称" width="180"></el-table-column>
			    <el-table-column align="center" prop="goodsName" label="库存数量" width="180">
			    	<template scope="scope">
			    		<el-input v-model="scope.row.goodsName" class="table_input"></el-input>
			    	</template>
			    </el-table-column>
			    <el-table-column align="center" prop="brandName" label="保留数量" width="180">
			    	<template scope="scope">
			    		<el-input v-model="scope.row.brandName" class="table_input"></el-input>
			    	</template>
			    </el-table-column>
			    <el-table-column align="center" prop="goodsType" label="价格(人民币)" width="180">
			    	<template scope="scope">
			    		<el-input v-model="scope.row.goodsType" class="table_input"></el-input>
			    	</template>
			    </el-table-column>
			    <el-table-column align="center" prop="seller" label="是否是默认商品" width="180">
			    	<template scope="scope">
		    			<el-checkbox v-model="isDefaultSku"></el-checkbox>
			    	</template>
			    </el-table-column>
			    <el-table-column align="center" prop="saleStart" label="重量(KG)" width="180">
			    	<template scope="scope">
			    		<el-input v-model="scope.row.saleStart" class="table_input"></el-input>
			    	</template>
			    </el-table-column>
			    <el-table-column align="center" prop="saleEnd" label="外部参考码" width="200">
			    	<template scope="scope">
			    		<el-input v-model="scope.row.saleEnd" class="table_input"></el-input>
			    	</template>
			    </el-table-column>
			    <el-table-column align="center" label="图片">
			      <template scope="scope">
			        <el-button size="small" @click="EditeImg(scope.$index, scope.row)">编辑</el-button>
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
		<div class="lastStep">
			<el-button type="success" icon="menu" @click="returnGoodsList">返回商品列表</el-button>
		  	<el-button type="primary" @click="preStep('stepOneForm')" :plain="true" icon="arrow-left">上一步</el-button>
		  	<el-button type="info" @click="addGoods('stepOneForm')">完成</el-button>
		</div>
		<div class="dialog">
			<el-dialog title="图片列表" :visible.sync="showImgTable" :beforeClose="handleBeforeClose" >
				<div class="">
					
				</div>
				<el-upload
				  	class="upload-demo"
				  	ref="upload"
				  	action="https://jsonplaceholder.typicode.com/posts/"
				  	:on-preview="handlePreview"
				  	:on-remove="handleRemove"
				  	:file-list="uploadImgList"
				  	:auto-upload="false">
				  	<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
				  	<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
				  	<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			  	<el-table :data="imgTableDate" border v-loading.body="imgListLoading" element-loading-text="拼命加载中">
			    	<el-table-column property="date" label="日期" width="150"></el-table-column>
			    	<el-table-column property="name" label="姓名" width="200"></el-table-column>
			    	<el-table-column property="address" label="地址"></el-table-column>
			  	</el-table>
			  	<div class="ImgPagination">
				  	<el-pagination 
				  		@current-change="ImgCurrentChange"
			      		:current-page.sync="currentPage"
				  		layout="total,prev, pager, next" 
				  		:total="1000">
				  	</el-pagination>
				</div>
			</el-dialog>
		</div>
	</section>
</template>
<style lang="css" src="./addStepThree.css">
</style>
<script type="text/javascript">
	import Vue from 'vue'
	import { Steps,Step,Input,Table,TableColumn,Pagination,Dialog,Button,Checkbox,Upload,Progress } from 'element-ui'
	Vue.use(Steps)
	Vue.use(Step)
	Vue.use(Input)
	Vue.use(Table)
	Vue.use(TableColumn)
	Vue.use(Pagination)
	Vue.use(Dialog)
	Vue.use(Button)
	Vue.use(Checkbox)
	Vue.use(Upload)
	// Vue.use(Progress)
	export default {
		name:'addStepThree',
		data(){
			return {
				goodsListLoading:true,
				SkuTableData:[],
				imgTableDate:[],
				uploadImgList:[{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
				showImgTable:false,
				imgListLoading:false,
				currentPage:1,
				isDefaultSku:true
			}
		},
		computed:{
		},
		created(){
			this.getGoodsList();
			this.$store.commit('set_BreadcrumbList',{BreadcrumbList:[{name:'商品管理',href:'/goodsManage'}]})
	      	this.$store.commit('set_isCollapse',{isCollapse:true})
		},
		methods:{
			getGoodsList(option){
	    		this.goodsListLoading = true;
	    		this.$ajax.get('/data/goodsManage/goodsList.json')
				.then((response)=>{
					this.SkuTableData = response.data.tableData;
					this.goodsListLoading = false;
				})
				.catch(error=>{
					console.log(error)
					this.goodsListLoading = false;
				})
	    	},
	    	preStep(goodsId){
	      		var vm = this;
				var canStore = vm.storeDate();
				if(canStore){
					vm.$router.push('/addStepTwo')
				}
	      	},
	    	addGoods(){
	    		//调取添加商品的接口
	    	},
	    	storeDate(){
	      		var vm = this;
	      		if(window.sessionStorage){
					let St = window.sessionStorage;
					let stepThreeForm={};
					stepThreeForm.propTableList = vm.propTableList;
					stepThreeForm.checkedBox = vm.checkedBox;
					stepThreeForm.propList = vm.propList;
					St.setItem('stepThreeForm',stepThreeForm);
					return true;
				}else{
		        	vm.$message({
			          	showClose: true,
			          	message: '该浏览器版本过低，请使用谷歌浏览器',
			          	type: 'warm'
			        });
			        return false;
		        }
	      	},
	    	getImgList(id){
	    		this.imgListLoading = true;
	    		this.$ajax.get('/data/goodsManage/sKuList.json')
				.then((response)=>{
					this.imgTableDate = response.data.sKuData;
					this.imgListLoading = false;
				})
				.catch(error=>{
					console.log(error)
					this.imgListLoading = false;
				})
	    	},
	    	returnGoodsList(){
	      		this.$store.dispatch('clear_session',{sessionList:['stepOneForm','stepTwoForm','stepThreeForm']})
	      		this.jump('/goodsManage');
	      	},
	    	handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		        this.getGoodsList();
	      	},
	      	ImgCurrentChange(val){
	      		console.log(`当前页: ${val}`);
		        this.getImgList();
	      	},
	      	handleBeforeClose(done){
	      		this.showImgTable = false;
	      	},
	      	EditeImg(index,rows){
	      		this.showImgTable = true;
	        	setTimeout(()=>{
	        		this.getImgList();
	        	},200)
	      	},
	      	submitUpload() {
		        this.$refs.upload.submit();
	      	},
	      	handleRemove(file, fileList) {
		        console.log(file, fileList);
	      	},
	      	handlePreview(file) {
		        console.log(file);
	      	}
		},
		mounted(){
			
		}
	}
</script>