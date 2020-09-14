export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    setUser: (state, user) => (state.user = user),
    clearUser: state => (state.user = {})
  },
  getters: {
    userIsLoggedIn: state => {
      const userObj = state.user
      const userObjIsEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object
      
      return !userObjIsEmpty
    }
  },
  actions: {
    logout() {
      localStorage.removeItem('token')
      location.reload()
    },
    login({ commit }, user) {
      commit('setUser', user)
    }
  }
}
