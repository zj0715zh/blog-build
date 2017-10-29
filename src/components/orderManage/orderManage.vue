<template>
  <section id="orderManage">
    <div class="after_sale">
      <el-form :inline="true" :model="orderForm" class="demo-form-inline">
        <el-form-item label="商户订单号:" prop="order">
          <el-input v-model="orderForm.order" placeholder="请输入订单号"></el-input>
        </el-form-item>
        <el-form-item label="收货人姓名:">
          <el-input v-model="orderForm.receiver" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="收货人手机:" prop="phone">
          <el-input v-model.number="orderForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="下单时间:" prop="date2">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="orderForm.date2"
                          style="width: 100%;"></el-time-picker>
        </el-form-item>
        <el-button type="primary" @:click="onSearch()" style="margin-left: 28px;" icon="search">查询</el-button>
      </el-form>
    </div>
    <div class="table_list">
      <el-table :data="tableData" border style="width: 100%" v-loading.body="tableLoading" element-loading-text="拼命加载中">
        <el-table-column align="center" prop="ppdOrder" label="PPD订单号" width="110"></el-table-column>
        <el-table-column align="center" prop="userOrder" label="商户订单号" width="115"></el-table-column>
        <el-table-column align="center" prop="username" label="用户名"></el-table-column>
        <el-table-column align="center" prop="address" label="配送地址" width="100"></el-table-column>
        <el-table-column align="center" prop="ppdReceiver" label="收货人"></el-table-column>
        <el-table-column align="center" prop="telephone" label="收货人电话" width="115"></el-table-column>
        <el-table-column align="center" prop="information" label="商品信息" width="100"></el-table-column>
        <el-table-column align="center" prop="sum" label="订单金额" width="100"></el-table-column>
        <el-table-column align="center" prop="status" label="订单状态" width="100"></el-table-column>
        <el-table-column align="center" prop="downTime" label="下单时间" width="130">
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 2px">{{scope.row.downTime}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="startTime" label="发货时间" width="130">
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 2px">{{ scope.row.startTime }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="supplier" label="供应商" width="100"></el-table-column>
        <el-table-column align="center" prop="other" label="备注" width="110"></el-table-column>
        <el-table-column align="center" prop="moreAction" label="更多操作" width="100">
          <template scope="scope">
            <el-button size="small" @click="orderSend(scope.$index, scope.row)" class="list_down">发货</el-button>
            <el-button size="small" @click="orderOther(scope.$index, scope.row)" class="list_down pd10">备注</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <el-dialog title="确认收货人信息" size="tiny" :visible.sync="dialogVisible">
        <el-form :model="formInfor" :rules="rules" ref="formInfor" class="demo_formPass">
          <el-form-item label="电商名称"  prop="name"  :label-width="formLabelWidth" required>
            <el-input type="input" v-model="formInfor.name" placeholder="电商名称" style="width: 260px"></el-input>
          </el-form-item>
          <el-form-item label="订单号" prop="order" :label-width="formLabelWidth" required>
            <el-input type="input" v-model="formInfor.order" placeholder="订单号" style="width: 260px"></el-input>
          </el-form-item>
          <el-form-item label="快递公司" :label-width="formLabelWidth">
            <el-input type="input" v-model="formInfor.company" placeholder="快递公司" style="width: 260px"></el-input>
          </el-form-item>
          <el-form-item label="快递单号" :label-width="formLabelWidth">
            <el-input type="input" v-model="formInfor.number" placeholder="快递单号" style="width: 260px"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog_footer tc">
          <el-button type="primary" @click="submitForm('formInfor')">确认</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="dialog">
      <el-dialog title="备注提示" size="tiny" :visible.sync="dialogFormVisible">
        <el-form :model="formWarn"  ref="formWarn" class="demo_formPass">
          <el-form-item label="备注"  prop="other"  :label-width="formLabelWidth">
            <el-input type="textarea" v-model="formWarn.other" style="width: 260px"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog_footer tc">
          <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="pagination">
      <el-pagination @current-change="handleCurrentChange"
                     :current-page.sync="currentPage"
                     layout="total,prev, pager, next"
                     :total="100">
      </el-pagination>
    </div>
  </section>
</template>
<script>
  import Vue from 'vue'
  import { Form,FormItem,Input,Button,Select,Option,TimePicker,Table,TableColumn,Pagination,Icon,Dialog} from 'element-ui'
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Input);
  Vue.use(Button);
  Vue.use(Select);
  Vue.use(Option);
  Vue.use(Table);
  Vue.use(TimePicker);
  Vue.use(TableColumn);
  Vue.use(Pagination);
  Vue.use(Icon);
  Vue.use(Dialog);
  export default {
    name: "orderManage",
    data() {
      return {
        orderForm: {
          order: '',
          receiver: '',
          phone: '',
          date2: ''
        },
        formInfor: {
          name: '',
          order: '',
          company: '',
          number: ''
        },
        formWarn:{
          other:''
        },
        rules: {
          name: [
            { required: true, message: '请输入电商名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          order:[
            { required: true, message: '请输入订单号', trigger: 'blur' },
            {type: 'number', message: '订单号为数字值',trigger: 'blur'}
          ]
        },
        tableData: [],
        tableLoading: true,
        dialogFormVisible: false,
        dialogVisible: false,
        formLabelWidth: '120px',
        currentPage: 1
      };
    },
    methods: {
      getOrderAjax(){
        this.tableLoading = true;
        this.$ajax.get('/data/orderManage/orderList.json').then((response)=> {
          this.tableData = response.data.tableData;
        this.tableLoading = false;
      })
      .catch((error)=> {
          console.log(error);
      })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
        return false;
      }
      });
      },
      orderSend(){
        this.dialogVisible = true;
      },
      orderOther(){
        this.dialogFormVisible=true;
      },
      handleCurrentChange(){
        this.getOrderAjax();
      }
    },
    created(){
      this.getOrderAjax();
      this.$store.commit('set_BreadcrumbList', {BreadcrumbList: [{name: '订单管理', href: '/orderManage'}]})
    }
  }

</script>
<style scoped lang="css" src="./orderManage.css">
</style>
