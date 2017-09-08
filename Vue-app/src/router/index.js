import Vue from 'vue'
import Router from 'vue-router'
import recommended from 'components/recommended/recommended'
import singerDes from 'components/singer-des/singer-des'
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
      children: [
        { path: ":id",
          component: singerDes
        }
      ]
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
