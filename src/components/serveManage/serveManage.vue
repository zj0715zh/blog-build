<template>
  <section id="serveManage">
    <div class="after_sale">
      <el-form :inline="true" :model="serveForm" ref="serveForm" class="demo-form-inline">
        <el-form-item label="商户订单号:" prop="order">
          <el-input v-model="serveForm.order" placeholder="请输入订单号"></el-input>
        </el-form-item>
        <el-form-item label="收货人姓名:">
          <el-input v-model="serveForm.receiver" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="收货人手机:" prop="phone">
          <el-input v-model.number="serveForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="下单时间:" prop="date2">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="serveForm.date2"
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
        <el-table-column align="center" prop="information" label="商品信息" width="130"></el-table-column>
        <el-table-column align="center" prop="sum" label="订单金额" width="100"></el-table-column>
        <el-table-column align="center" prop="status" label="订单状态" width="100"></el-table-column>
        <el-table-column align="center" prop="downTime" label="下单时间" width="130">
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 2px">{{scope.row.downTime}}</span>
          </template>
          s
        </el-table-column>
        <el-table-column align="center" prop="startTime" label="发货时间" width="130">
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 2px">{{ scope.row.startTime }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="cancelTime" label="退货时间" width="130">
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 2px">{{ scope.row.cancelTime }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="reason" label="拒绝理由" width="110"></el-table-column>
        <el-table-column align="center" prop="moreAction" label="更多操作" width="100">
          <template scope="scope">
            <el-button size="small" @click="orderAudit(scope.$index, scope.row)" class="list_down">退货审核</el-button>
            <el-button size="small" @click="confirm(scope.$index, scope.row)" class="list_down">确认退货</el-button>
            <el-button size="small" @click="orderInfo(scope.$index, scope.row)" class="list_down pd10">退货信息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <el-dialog title="审核提示" size="tiny" :visible.sync="dialogFormVisible">
        <el-form :model="formPass" class="demo_formPass">
          <el-form-item label="拒绝理由" :label-width="formLabelWidth">
            <el-select v-model="formPass.reasons" placeholder="请选择拒绝理由" style="width: 260px">
              <el-option label="已过退货有效时间" value="1"></el-option>
              <el-option label="退回商品影响二次销售" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="其他拒绝理由" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="formPass.other" style="width: 260px"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog_footer tc">
          <el-button type="primary" @click="dialogFormVisible = false">通过</el-button>
          <el-button @click="dialogFormVisible = false">拒绝</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="dialogInfo">
      <el-dialog title="退货信息" size="tiny" :visible.sync="dialogVisible">
        <el-form :model="formInfo" class="demo_formPass">
          <el-form-item label="申请退货理由：" :label-width="formLabelWidth">
            <el-input value="质量问题" style="width: 260px"></el-input>
          </el-form-item>
          <el-form-item label="退货信息：" :label-width="formLabelWidth">
              <div class="inforlist">
                <p>物流单号：<span>4564546</span></p>
                <p>物流信息：<span>4555312</span></p>
              </div>
          </el-form-item>
        </el-form>
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
    name: "serveManage",
    data() {
      return {
        serveForm: {
          order: '',
          receiver: '',
          phone: '',
          date2: ''
        },
        formPass: {
          activity: '',
          reasons: ''

        },
        formInfo: {
          reason: '',
          other: ''
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
      getServeAjax(){
        this.tableLoading = true;
        this.$ajax.get('/data/serveManage/serveList.json').then((response)=> {
          this.tableData = response.data.tableData;
        this.tableLoading = false;
      })
      .catch((error)=> {
          console.log(error);
      })
      },
      orderAudit(){
        this.dialogFormVisible = true;

      },
      confirm() {

      },
      orderInfo(){
        this.dialogVisible = true;
      },
      handleCurrentChange(val) {
        this.getServeAjax();
        //this.tableLoading=true;
      }
    },
    created(){
      this.getServeAjax();
      this.$store.commit('set_BreadcrumbList', {BreadcrumbList: [{name: '售后管理', href: '/serveManage'}]})
    }
  }

</script>
<style scoped lang="css" src="./serveManage.css">
</style>
