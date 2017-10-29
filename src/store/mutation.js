
export function SET_USER (state, { user }) {
  Vue.set(state.users, user.id, user)
}

export function set_isLoading (state,{ isLoading }) {
  state.isLoading = isLoading;
}

export function set_isCollapse (state,{ isCollapse }) {
  if(isCollapse==true){
    state.isCollapse = isCollapse;
  }else{
    state.isCollapse = !state.isCollapse;
  }
}
export function set_BreadcrumbList (state,{ BreadcrumbList }) {
  if(BreadcrumbList){
    state.BreadcrumbList = BreadcrumbList;
  }else{
    state.BreadcrumbList = [];
  }
}
export function set_states (state,{ key,value }) {
  state.key = value;
}
export function set_goodsInfo (state,{ goodsInfo }) {
  state.goodsInfo = goodsInfo;
}
