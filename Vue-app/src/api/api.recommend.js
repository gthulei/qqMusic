/**
 * Created by hulei on 2017/8/31.
 */
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
