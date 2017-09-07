import Vue from 'vue'
import Router from 'vue-router'
import recommended from 'components/recommended/recommended'
import singer from 'components/singer/singer'
import rankings from 'components/rankings/rankings'
import search from 'components/search/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommended'
    },
    {
      path: '/recommended',
      component: recommended
    },
    {
      path: '/singer',
      component: singer,
    },
    {
      path: '/rankings',
      component: rankings
    },
    {
      path: '/search',
      component: search
    },
  ]
})
