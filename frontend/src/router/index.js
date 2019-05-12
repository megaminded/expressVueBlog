import Vue from 'vue'
import Router from 'vue-router'
import ReadPost from '@/components/pages/ReadPost'
import Blog from "../components/pages/Blog";
import NewPost from "../components/forms/NewPost";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/post/:id',
      name: 'Post',
      component: ReadPost
    },
    {
      path: '/post/new/',
      name: 'NewPost',
      component: NewPost
    }
  ],
  mode: 'history'
})
