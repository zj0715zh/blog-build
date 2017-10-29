import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutation'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    isCollapse: true,
    webloglist:[],
    userId:'',
    isLoading:false,
    goodsInfo:{
        typeOne: '',
        typeTwo:'',
        name: 'dadas',
        brand:'',
        saleStartDate:'',
        saleEndDate:'',
        goodsDesc:''
    },
    BreadcrumbList:[{name:'商品管理',href:'/weblog'},{name:'售后管理',href:'/logdetail/12'}]
  },
  mutations,	
  actions,
  getters,
  strict: debug,
})
