import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/Search'
import Result from '@/components/Result'
import People from '@/components/People'
import Publication from '@/components/Publication'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result
    },
    {
      path: '/People',
      name: 'People',
      component: People
    },
    {
      path: '/Publication',
      name: 'Publication',
      component: Publication
    }

  ]
})
