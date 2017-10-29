//此JS文件专门用于接口请求
import axios from 'axios'
import promise from 'es6-promise'
promise.polyfill()

export function fetchWebLogs (type) {
  return axios.get('/weblog/fetchWebLogs?type='+type)
}

export function getGoodsList (type) {
  return axios.get('/data/goodsManage/goodsList.json')
}
