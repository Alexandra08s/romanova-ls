export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    setExamples: (state, examples) => (state.data = examples),
    addExample: (state, example) => {
      state.data.unshift(example)
    },
    editExample: (state, editedExample) => {
      state.data = state.data.map(example => {
        if (example.id === editedExample.id) {
          example = editedExample
        }

        return example
      })
    },
    deleteExample: (state, id) => {
      state.data = state.data.filter(example => example.id !== id)
    }
  },
  actions: {
    async add({commit}, newExample) {
      const formData = new FormData()

      Object.keys(newExample).forEach(item => {
        formData.append(item, newExample[item])
      })
      try {
        let { data } = await this.$axios.post('/works', formData)
        commit('addExample', data)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
    async fetch({commit}) {
      try {
        let userId = localStorage.getItem('userId')
        let { data } = await this.$axios.get(`/works/${userId}`)
        commit('setExamples', data)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
    async edit({commit}, editedExample) {
      try {
        const formData = new FormData()

        Object.keys(editedExample).forEach(item => {
          formData.append(item, editedExample[item])
        })
        let { data } = await this.$axios.post(`works/${editedExample.id}`, formData)
        commit('editExample', data.work)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
    async delete({commit}, id) {
      try {
        let { data } = await this.$axios.delete(`works/${id}`)
        commit('deleteExample', id)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
  }
}
