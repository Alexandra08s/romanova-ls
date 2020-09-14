export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    setReviews: (state, reviews) => (state.data = reviews),
    addReviews: (state, review) => {
      state.data.unshift(review)
    },
    editReviews: (state, editedReviews) => {
      state.data = state.data.map(review => {
        if (review.id === editedReviews.id) {
          review = editedReviews
        }

        return review
      })
    },
    deleteReviews: (state, id) => {
      state.data = state.data.filter(review => review.id !== id)
    }
  },
  actions: {
    async add({commit}, newReviews) {
      const formData = new FormData()

      Object.keys(newReviews).forEach(item => {
        formData.append(item, newReviews[item])
      })
      try {
        let { data } = await this.$axios.post('/reviews', formData)
        commit('addReviews', data)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
    async fetch({commit}) {
      try {
        let userId = localStorage.getItem('userId')
        let { data } = await this.$axios.get(`/reviews/${userId}`)
        commit('setReviews', data)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
    async edit({commit}, editedReview) {
      try {
        const formData = new FormData()

        Object.keys(editedReview).forEach(item => {
          formData.append(item, editedReview[item])
        })
        let { data } = await this.$axios.post(`/reviews/${editedReview.id}`, formData)
        commit('editReviews', data.review)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
    async delete({commit}, id) {
      try {
        let { data } = await this.$axios.delete(`/reviews/${id}`)
        commit('deleteReviews', id)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
  }
}
