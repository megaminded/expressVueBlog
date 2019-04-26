import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Blog from '@/components/pages/Blog'
import About from '@/components/pages/About'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    component: About

  }
  ],
  mode: 'history'
})
