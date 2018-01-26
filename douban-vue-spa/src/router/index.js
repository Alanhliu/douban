import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/Home'
import BookMovieMusic from '../page/book_movie_music/BookMovieMusic'
import Broadcast from '../page/broadcast/Broadcast'
import Group from '../page/group/Group'
import Mine from '../page/mine/Mine'
import Main from '../page/main/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'book-movie-muisc',
          name: 'BookMovieMusic',
          component: BookMovieMusic
        },
        {
          path: 'broadcast',
          name: 'Broadcast',
          component: Broadcast
        },
        {
          path: 'group',
          name: 'Group',
          component: Group
        },
        {
          path: 'mine',
          name: 'Mine',
          component: Mine
        }
      ]
    }
  ]
})
