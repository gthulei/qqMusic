/**
 * Created by hulei on 2017/9/11.
 */

import * as type from './mutation-types'

//保存搜索记录
export const saveSearch = function ({commit, state}, item) {
  let savedItems = [...state.history];
  if(savedItems.indexOf(item) >= 0)return
  savedItems.splice(0, 0, item);
  if (savedItems.length >= 10) {
    savedItems = [...savedItems.slice(0, 10)]
  }
  commit(type.SET_HISTORY, savedItems);
}

// 清空搜索记录
export const clearSearch = function ({commit}) {
  commit(type.SET_HISTORY, []);
}
// 删除记录
export const delSearch = function ({commit, state}, index) {
  let savedItems = [...state.history];
  savedItems.splice(index,1);
  commit(type.SET_HISTORY, savedItems);
}
