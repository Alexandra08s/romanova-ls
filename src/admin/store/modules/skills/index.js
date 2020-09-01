export default {
  namespaced: true,
  actions: {
    async create({commit}, skill) {
      try {
        let { data } = await this.$axios.post('skills', skill)
        commit('categories/addSkill', data, {root: true})
      } catch(error) {
        throw new Error('Ошибка добавления')
      }
    },
    async remove({commit}, removedSkill) {
      try {
        let { data } = await this.$axios.delete(`skills/${removedSkill.id}`)
        commit('categories/removeSkill', removedSkill, {root: true})
      } catch(error) {
        throw new Error('Ошибка удаления')
      }
    },
    async edit({commit}, editedSkill) {
      try {
        let { data } = await this.$axios.post(`skills/${editedSkill.id}`, editedSkill)
        commit('categories/editSkill', data.skill, {root: true})
      } catch(error) {
        throw new Error('Ошибка редактирования')
      }
    }
  }
}
