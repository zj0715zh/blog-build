// import { fetchItems, fetchIdsByType, fetchUser, fetchWebLogs } from './fetch'
import * as fetchs from './fetch'

const LOAD_MORE_STEP = 10

export function FETCH_LIST_DATA ({ commit, dispatch, state }, { type }) {
  commit('SET_ACTIVE_TYPE', { type })
  return fetchIdsByType(type)
    .then(ids => commit('SET_LIST', { type, ids }))
    .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
}

export function ENSURE_ACTIVE_ITEMS ({ dispatch, getters }) {
  return dispatch('FETCH_ITEMS', {
    ids: getters.activeIds
  })
}

export function FETCH_ITEMS ({ commit, state }, { ids }) {
  const newIds = ids.filter(id => !state.items[id])
  return newIds.length
    ? fetchItems(newIds).then(items => commit('SET_ITEMS', { items }))
    : Promise.resolve()
}

export function fetch_goodsList ({ commit, state }, { type }) {
  return fetchs.getGoodsList().then(list=>console.log(list)).catch(response=>console.log('jjj'))
}

export function clear_session ({ commit, state }, { sessionList }) {
  let St = window.sessionStorage;
  for(let i=0;i<sessionList.length;i++){
    St.removeItem(sessionList[i]);
  }
}
