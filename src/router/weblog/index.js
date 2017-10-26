import Vue from 'vue'
import Router from 'vue-router'
import StoriesView from 'components/StoriesView/StoriesView'
import WeblogList from 'components/weblogList/weblogList'

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
    }
  ]
})