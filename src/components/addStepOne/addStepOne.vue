<template>
	<section id="addStepOne">
		<div class="steps_box">
			<el-steps space="50%" align-center center :active="0" finish-status="success">
			  	<el-step title="编辑商品信息"></el-step>
			  	<el-step title="编辑商品属性"></el-step>
			  	<el-step title="编辑商品SKU"></el-step>
			</el-steps>
		</div>
		<div class="edite_info">
			<el-form :inline="true" v-loading.body="InfoLoading" element-loading-text="拼命加载中" :model="stepOneForm" ref="stepOneForm" :rules="validateRules" class="demo-form-inline">
			  	<el-form-item label="一级分类" prop="typeOne">
			    	<el-select v-model="stepOneForm.typeOne" placeholder="一级分类">
			      		<el-option label="移动设备" value="shanghai"></el-option>
			      		<el-option label="家用电器" value="beijing"></el-option>
			    	</el-select>
			  	</el-form-item>
			  	<el-form-item label="二级分类" prop="typeTwo">
			    	<el-select v-model="stepOneForm.typeTwo" placeholder="二级分类">
			      		<el-option label="手机" value="phone"></el-option>
			      		<el-option label="平板" value="ipad"></el-option>
			    	</el-select>
			  	</el-form-item>
			  	<el-form-item label="商品品牌" prop="brand">
			    	<el-select v-model="stepOneForm.brand" placeholder="品牌">
			      		<el-option label="苹果" value="iphone"></el-option>
			      		<el-option label="华为" value="huawei"></el-option>
			    	</el-select>
			  	</el-form-item>
			  	<el-form-item label="商品名称" prop="name">
			    	<el-input v-model="stepOneForm.name" placeholder="商品名称"></el-input>
			  	</el-form-item>
			  	<el-form-item label="销售开始时间" prop="saleStartDate">
			    	<el-date-picker
				      v-model="stepOneForm.saleStartDate"
				      type="datetime"
				      placeholder="选择日期时间">
				    </el-date-picker>
			  	</el-form-item>
			  	<el-form-item label="销售结束时间" prop="saleEndDate">
			    	<el-date-picker
				      v-model="stepOneForm.saleEndDate"
				      type="datetime"
				      placeholder="选择日期时间">
				    </el-date-picker>
			  	</el-form-item>
			  	<el-form-item label="描述" prop="goodsDesc" class="goodsDescBox">
			    	<textarea name="goodsDesc" v-model="stepOneForm.goodsDesc" class="goodsDesc">KindEditor</textarea>
			  	</el-form-item>
			</el-form>
			<div class="right">
				<el-button type="success" icon="menu" @click="returnGoodsList">返回商品列表</el-button>
			  	<el-button type="primary" :plain="true" icon="arrow-left" disabled>上一步</el-button>
			  	<el-button type="info" @click="nextStep('stepOneForm')">下一步<i class="el-icon-arrow-right el-icon--right"></i></el-button>
			</div>
		</div>
	</section>
</template>
<style lang="css" src="./addStepOne.css">
</style>
<script type="text/javascript">
	var editor,St;
	import Vue from 'vue'
	import { Steps,Step,Form,FormItem,Input,Select,Option,Button,DatePicker } from 'element-ui'
	Vue.use(Steps)
	Vue.use(Step)
	Vue.use(Form)
	Vue.use(FormItem)
	Vue.use(Input)
	Vue.use(Select)
	Vue.use(Option)
	Vue.use(Button)
	Vue.use(DatePicker)
	export default {
		name:'addStepOne',
		data(){
			return {
				stepOneForm: {
		          	typeOne: '',
		          	typeTwo:'',
		          	name: '',
		          	brand:'',
		          	saleStartDate:'',
		          	saleEndDate:'',
		          	goodsDesc:''
		        },
		        validateRules: {
		          typeOne: [
		            { required: true, message: '请选择一级分类', trigger: 'change' }
		          ],
		          typeTwo: [
		            { required: true, message: '请选择二级分类', trigger: 'change' }
		          ],
		          brand: [
		            { required: true, message: '请选择商品品牌', trigger: 'change' }
		          ],
		          name: [
		            { required: true, message: '请输入商品名称', trigger: 'blur' }
		          ],
		          saleStartDate: [
		            { type:'date',required: true, message: '请选择开始日期', trigger: 'change' }
		          ],
		          saleEndDate: [
		            { type:'date',required: true, message: '请选择结束时间', trigger: 'change' }
		          ]
		        },
		        InfoLoading:false,
		        query:this.$route.query//判断是新增还是更新
			}
		},
		created(){
			var vm = this;
			var goodsId = vm.$route.query.goodsId;
			this.$store.commit('set_BreadcrumbList',{BreadcrumbList:[{name:'商品管理',href:'/goodsManage'},{name:'商品编辑',href:''}]})
			if(window.sessionStorage){
				St = window.sessionStorage;
				let sessionDate = St.getItem('stepOneForm');
				if(sessionDate){
					sessionDate = JSON.parse(sessionDate)
					sessionDate.saleEndDate = new Date(sessionDate.saleEndDate);
					sessionDate.saleStartDate = new Date(sessionDate.saleStartDate);
					vm.stepOneForm = sessionDate
				}
			}else{
	        	vm.$message({
		          	showClose: true,
		          	message: '该浏览器版本过低，请使用谷歌浏览器',
		          	type: 'warm'
		        });
	        }
		},
		methods:{
			nextStep(formName) {
				var vm = this;
		        if(window.sessionStorage){
			        this.$refs[formName].validate((valid) => {
			          	if (valid) {
							if(editor.isEmpty()){
				            	vm.$message({
						          	showClose: true,
						          	message: '请填写商品描述',
						          	type: 'error'
						        });
							}else{
								vm.stepOneForm.goodsDesc = editor.html();
								let sessionDate =JSON.stringify(vm.stepOneForm)
								St.setItem('stepOneForm',sessionDate)
								//doAjax
								vm.$router.push('/addStepTwo')
							}	            	
			          	} else {
			            	console.log('error submit!!');
			            	return false;
			          	}
			        });
		        }else{
		        	vm.$message({
			          	showClose: true,
			          	message: '该浏览器版本过低，请使用谷歌浏览器',
			          	type: 'warm'
			        });
		        }
	      	},
	      	returnGoodsList(){
	      		this.$store.dispatch('clear_session',{sessionList:['stepOneForm','stepTwoForm','stepThreeForm']})
	      		this.jump('/goodsManage');
	      	}
		},
		mounted(){
			editor = KindEditor.create('textarea[name="goodsDesc"]', {
				resizeType : 1,
				allowPreviewEmoticons : false,
				allowImageUpload : false,
				items : [
					'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
					'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
					'insertunorderedlist', '|', 'emoticons', 'image', 'link']
			});
		}
	}
</script>