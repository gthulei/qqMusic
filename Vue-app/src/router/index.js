import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 开启路由懒加载
const recommended = (resolve) => {
  import('components/recommended/recommended').then((module) => {
    resolve(module)
  })
}
const singerDes = (resolve) => {
  import('components/singer-des/singer-des').then((module) => {
    resolve(module)
  })
}
const singer = (resolve) => {
  import('components/singer/singer').then((module) => {
    resolve(module)
  })
}
const rankings = (resolve) => {
  import('components/rankings/rankings').then((module) => {
    resolve(module)
  })
}
const topList = (resolve) => {
  import('components/top-list/top-list').then((module) => {
    resolve(module)
  })
}
const search = (resolve) => {
  import('components/search/search').then((module) => {
    resolve(module)
  })
}
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
      component: rankings,
      children: [
        { path: ":id",
          component: topList
        }
      ]
    },
    {
      path: '/search',
      component: search
    },
  ]
})
