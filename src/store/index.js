// vuex相关
import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import mutations from "./mutations"
import action from "./action"
import gettes from "./gettes"

//1. 使用vuex
Vue.use(Vuex);

//2. 对外输出vuex的store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
