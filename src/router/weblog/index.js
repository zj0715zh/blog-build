import Vue from 'vue'
import Router from 'vue-router'
import StoriesView from 'components/StoriesView/StoriesView'
import WeblogList from 'components/weblogList/weblogList'
import MiniProgram from 'components/miniProgram/miniProgram'

Vue.use(Router)

function createStoriesView (id) {
  return {
    name: `${id}-stories-view`,
    render (createElement) {
      return createElement(StoriesView, { props: { id }})
    }
  }
}

export default new Router({
  routes: [
    {
      path: '/logdetial/:id',
      name: 'logdetial',
      component: StoriesView
    },
    {
      path: '/',
      name: 'loglist',
      component: WeblogList
    },
    {
      path: '/miniprogram',
      name: 'miniprogram',
      component: MiniProgram
    }
  ]
})