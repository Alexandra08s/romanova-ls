export default {
  namespaced: true,
  state: {
    isShown: false,
    text: '',
    type: 'Success'
  },
  mutations: {
    setTooltip: (state, tooltip) => {
      state.isShown = tooltip.isShown
      state.text = tooltip.text
      state.type = tooltip.type
    }
  },
  actions: {
    show({commit, dispatch}, tooltip) {
      let timeout = null
      commit('setTooltip', {
        isShown: true,
        text: tooltip.text,
        type: tooltip.type
      })
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(()=> {
        dispatch('hide')
      }, 2000)

    },
    hide({commit}, state) {
      commit('setTooltip', {
        ...state,
        isShown: false,
      })
    }
  }
}
