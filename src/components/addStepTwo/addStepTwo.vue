<template>
	<section id="addStepTwo">
		<div class="steps_box">
			<el-steps space="50%" align-center center :active="1" finish-status="success">
			  	<el-step title="编辑商品信息"></el-step>
			  	<el-step title="编辑商品属性"></el-step>
			  	<el-step title="编辑商品SKU"></el-step>
			</el-steps>
		</div>
		<section class="prop_main">
			<div class="prop_select">
				<el-form class="demo-form-inline">
				  	<el-form-item label="属性名称：" prop="props">
				    	<el-select v-model="propName" placeholder="属性名" @change="">
				      		<el-option label="颜色" value="1"></el-option>
				      		<el-option label="规格" value="2"></el-option>
				    	</el-select>
				  	</el-form-item>
				  	<el-form-item label="属性值：" prop="props" v-show="showProp">
				    	<label class="el-checkbox">
				    		<input type="checkbox" @change="CheckAll" :checked="checkAll?true:false">全选
			    		</label>
					  	<div style="margin: 15px 0;"></div>
					  	<div class="el-checkbox-group">
					  		<template v-for="item in propList">
					  			<template v-if="item.isChecked">
					  				<label class="el-checkbox">
							  			<input type="checkbox" :value="item.key" disabled checked>{{item.label}}
						  			</label>
					  			</template>
					  			<template v-else>
						  			<label class="el-checkbox">
							  			<input type="checkbox" :value="item.key" :checked="checkAll?true:false" @change="CheckedChange(item.key,item.label)">{{item.label}}
						  			</label>
					  			</template>
					  		</template>
			  			</div>
				  	</el-form-item>
				  	<el-form-item v-show="showProp">
					    <el-button type="primary" @click="addProps">添加</el-button>
				  	</el-form-item>
				</el-form>
			</div>
			<div class="prop_list">
				<el-table :data="propTableList" border v-loading.body="propListLoading" element-loading-text="拼命加载中">
			    	<el-table-column align="center" property="propName" label="属性名" width="150"></el-table-column>
			    	<el-table-column align="center" property="propValue" label="属性值">
			    		<template scope="scope">
			    			<template v-for="item in scope.row.propValue">
			    				<el-input v-model="item.desc" :placeholder="item.desc" class="table_input"></el-input>{{item.name}}
			    			</template>
			    		</template>
			    	</el-table-column>
			    	<el-table-column align="center" label="操作" width="150">
			    		<template scope="scope">
			    			<template v-if="scope.row.isAdd">
					        	<el-button @click.native.prevent="deleteRow(scope.$index, propTableList)" type="text" size="small">移除</el-button>
			    			</template>
					    </template>
			    	</el-table-column>
			  	</el-table>
			</div>
			<div class="right">
				<el-button type="success" icon="menu" @click="returnGoodsList">返回商品列表</el-button>
			  	<el-button type="primary" @click="preStep('stepOneForm')" :plain="true" icon="arrow-left">上一步</el-button>
			  	<el-button type="info" @click="nextStep('stepOneForm')">下一步<i class="el-icon-arrow-right el-icon--right"></i></el-button>
			</div>
		</section>
	</section>
</template>
<style lang="css" src="./addStepTwo.css">
</style>
<script type="text/javascript">
	let addPropName = new Set();
	import Vue from 'vue'
	import { Steps,Step,Form,FormItem,Input,Select,Option,Table,TableColumn,Button,Checkbox,CheckboxGroup } from 'element-ui'
	Vue.use(Steps)
	Vue.use(Step)
	Vue.use(Form)
	Vue.use(FormItem)
	Vue.use(Input)
	Vue.use(Select)
	Vue.use(Option)
	Vue.use(Table)
	Vue.use(TableColumn)
	Vue.use(Button)
	Vue.use(Checkbox)
	Vue.use(CheckboxGroup)
	export default {
		name:'addStepTwo',
		data(){
			return {
				propName:'',
	          	propTableList:[{propName:'颜色',propValue:[{name:'黑色',desc:'珍珠黑',id:'1'},{name:'白色',desc:'珍珠白',id:'2'}]},{propName:'规格',propValue:[{name:'黑色',desc:'珍珠黑'},{name:'白色',desc:'珍珠白'}]}],
	          	propListLoading:false,
	          	query:this.$route.query,//判断是新增还是更新
		        showProp:false,
	          	checkAll: false,
		        checkedBox: {propName:'',propValue:[]},
		        propList:[{label:'黑色',key:'1',isChecked:true},{label:'白色',key:'2',isChecked:true},{label:'灰色',key:'3',isChecked:false},{label:'红色',key:'4',isChecked:false}]
			}
		},
		computed:{
		},
		created(){
			var vm = this;
			if(window.sessionStorage){
				let St = window.sessionStorage;
				if(St.getItem('stepTwoForm')){
					let stepTwoForm=JSON.parse(St.getItem('stepTwoForm'));
					vm.propTableList = stepTwoForm.propTableList;
					vm.checkedBox = stepTwoForm.checkedBox;
					vm.propList = stepTwoForm.propList;
				}
			}else{
	        	vm.$message({
		          	showClose: true,
		          	message: '该浏览器版本过低，请使用谷歌浏览器',
		          	type: 'warm'
		        });
	        }
		},
		watch:{
			propName(val,old){
				let vm = this;
				if(val!=''){
					vm.showProp = true;
					vm.checkedBox = {propName:'',propValue:[]};
					//doAjax
				}
			}
		},
		methods:{
			addProps(){
				let vm = this;
				if(vm.checkedBox.propName==''||vm.checkedBox.propValue.length==0){
					vm.$message({
			          	showClose: true,
			          	message: '请至少选择一个商品规格',
			          	type: 'error'
			        });
			        return;
				}else{
					for(let i of addPropName){
						if(vm.checkedBox.propName==i){
							vm.$message({
					          	showClose: true,
					          	message: '同一个属性不能新增两次，请先删除',
					          	type: 'error'
					        });
					        return;
						}
					}
				}
				vm.propTableList.push(vm.checkedBox);
				addPropName.add(vm.checkedBox.propName);
				vm.$nextTick(function () {
					for(let item of vm.checkedBox.propValue){
						for(let dom of document.querySelectorAll('.el-checkbox-group input')){
							if(dom.value == item.id){
								dom.checked = true;
							}
						}
					}
					console.log(vm.checkedBox.propValue)
		      	})
				// vm.checkedBox = {propName:'',propValue:[]};
			},
			CheckAll(event) {
		        this.checkAll = !this.checkAll;
	      	},
	      	nextStep(goodsId) {
				var vm = this;
				var canStore = vm.storeDate();
				if(canStore){
					vm.$router.push('/addStepThree')
				}
	      	},
	      	preStep(goodsId){
	      		var vm = this;
				var canStore = vm.storeDate();
				if(canStore){
					vm.$router.push('/addStepOne')
				}
	      	},
	      	returnGoodsList(){
	      		this.$store.dispatch('clear_session',{sessionList:['stepOneForm','stepTwoForm','stepThreeForm']})
	      		this.jump('/goodsManage');
	      	},
	      	storeDate(){
	      		var vm = this;
	      		if(window.sessionStorage){
					let St = window.sessionStorage;
					let stepTwoForm={};
					stepTwoForm.propTableList = vm.propTableList;
					stepTwoForm.checkedBox = vm.checkedBox;
					stepTwoForm.propList = vm.propList;
					stepTwoForm = JSON.stringify(stepTwoForm);
					St.setItem('stepTwoForm',stepTwoForm);
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
	      	CheckedChange(key,label) {
	      		var vm = this;
		        let valueList = {};
		        let target = window.event.target;
		        if(target.checked){
			        vm.checkedBox.propName = vm.propName;
			        vm.checkedBox.isAdd = true;
			        valueList.name = label;
			        valueList.desc = label;
			        valueList.id = key;
			        console.log(vm.checkedBox)
			        vm.checkedBox.propValue.push(valueList)
		        }else{
		        	for(let i=0;i<vm.checkedBox.propValue.length;i++){
		        		if(vm.checkedBox.propValue[i].name==label){
		        			vm.checkedBox.propValue.splice(i,1);
		        			console.log('删除成功')
		        		}
		        	}
		        }
	      	},
	      	deleteRow(index, rows) {
	      		var vm = this;
		        var deleteRow = rows.splice(index, 1);
		        for(let i of addPropName){
		        	if(i==deleteRow[0].propName){
		        		addPropName.delete(i);
		        	}
		        }
		        vm.checkedBox = {propName:'',propValue:[]};
		    }
		},
		mounted(){
			
		}
	}
</script>