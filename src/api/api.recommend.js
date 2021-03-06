/**
 * Created by hulei on 2017/8/31.
 */
import axios from 'axios'
import jsonp from 'public/js/jsonp'
import {commonParams,options} from './api.config'
// 轮播图
export function getSwipeList() {

  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  // 深拷备对象合并
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

// 推荐列表
export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 推荐列表
export function getDisc() {
  const url = '/api/getDisc'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
