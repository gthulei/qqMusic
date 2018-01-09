/**
 * Created by hulei on 2017/9/11.
 * 存储
 */

import * as type from './mutation-types'

const mutations = {
  [type.SET_SINGER](state, singer) {
    state.singer = singer;
  },
  [type.SET_TOPLIST] (state, topList) {
    state.topList = topList;
  },
  [type.SET_HISTORY] (state, item) {
    state.history = item;
  }

}

export default mutations
