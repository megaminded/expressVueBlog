import Vue from 'vue'
import Router from 'vue-router'
import AddPost from '@/components/forms/AddPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddPost',
      component: AddPost
    }
  ]
})
