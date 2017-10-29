import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: resolve => require(['components/index/index'], resolve)
    },
    {
      path: '/goodsManage',
      name: '商品管理',
      component: resolve => require(['components/goodsManage/goodsManage'], resolve)
    },
    {
      path: '/orderManage',
      name: '订单管理',
      component: resolve => require(['components/orderManage/orderManage'], resolve)
    },
    {
      path: '/serveManage',
      name: '售后管理',
      component: resolve => require(['components/serveManage/serveManage'], resolve)
    },
    {
      path: '/addStepOne',
      name: '编辑基本信息',
      component: resolve => require(['components/addStepOne/addStepOne'], resolve)
    },
    {
      path: '/addStepTwo',
      name: '编辑商品属性信息',
      component: resolve => require(['components/addStepTwo/addStepTwo'], resolve)
    },
    {
      path: '/addStepThree',
      name: '编辑商品sKu',
      component: resolve => require(['components/addStepThree/addStepThree'], resolve)
    }
  ]
})