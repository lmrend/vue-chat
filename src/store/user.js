
import {getToken,setToken,removeToken} from '@/utils/token'
 const state = {
    token:getToken(),
    userInfo: JSON.parse(window.localStorage.getItem('userInfo') || '{}')
  }

  const mutations = {
    LOGIN(state,data) {
        state.token = data.token
        state.userInfo = data.data
        let useData = JSON.stringify(data.data)
        window.localStorage.setItem('userInfo',useData)
    },
    LOGOUT(state) {
        state.token = '',
        state.userInfo = {}
        window.localStorage.setItem('userInfo',{})
        removeToken()
    }
  }
  const actions = {
    login({ commit },data) {
        commit('LOGIN',data)
        setToken(data.token)
    },
    logout({ commit }) {
        commit('LOGOUT')
    }
  }
  const getters = {
}
export default({
    state,
    mutations,
    actions,
    getters
})