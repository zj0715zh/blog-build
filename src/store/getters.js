export const activeIds = (state)=>{
  const { activeType, lists, counts } = state
  return activeType ? lists[activeType].slice(0, counts[activeType]) : []
}


export const activeItems = (state, getters)=>{
  return getters.activeIds.map(id => state.items[id]).filter(_ => _)
}
