export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    setCategories: (state, categories) => (state.data = categories),
    addCategory: (state, category) => {
      category.skills = []
      state.data.unshift(category)
    },
    editCategory: (state, editedCategory) => {
      state.data = state.data.map(category => {
        if (category.id === editedCategory.id) {
          category.title = editedCategory.title
        }

        return category
      })
    },
    deleteCategory: (state, id) => {
      state.data = state.data.filter(category => category.id !== id)
    },
    addSkill: (state, newSkill) => {
      state.data = state.data.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill)
        }

        return category
      })
    },
    removeSkill: (state, removedSkill) => {
      state.data = state.data.map(category => {
        if (category.id === removedSkill.category) {
          category.skills = category.skills.filter(skill => skill.id !== removedSkill.id)
        }

        return category
      })
    },
    editSkill: (state, editedSkill) => {
      editedSkill.editMode = false
      let editedSkillInCategory = category => {
        category.skills = category.skills.map (skill => {
          return skill.id === editedSkill.id ? editedSkill : skill
        })
      }
      let findCategory = category => {
        if (category.id === editedSkill.category) {
          editedSkillInCategory(category)
        }

        return category
      }
      state.data = state.data.map(findCategory)
    }
  },
  actions: {
    async create({commit}, title) {
      try {
        let { data } = await this.$axios.post('/categories', { title })
        commit('addCategory', data)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
    async fetch({commit}) {
      try {
        let userId = localStorage.getItem('userId')
        let { data } = await this.$axios.get(`/categories/${userId}`)
        commit('setCategories', data)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
    async edit({commit}, editedCategory) {
      try {
        let { data } = await this.$axios.post(`categories/${editedCategory.id}`, editedCategory.title)
        console.log(data)
        commit('editCategory', data)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
    async delete({commit}, id) {
      try {
        let { data } = await this.$axios.delete(`categories/${id}`)
        commit('deleteCategory', id)
      } catch (error) {
        throw new Error('Произошла ошибка')
      }
    },
  }
}
