<template>
  <section class="examples">
    <div class="container">
      <p class="page__title examples__title">
        Блок «Работы»
      </p>
      <example-form
        v-if="exampleForm"
        class="example-form__comp"
        :is-editing="isEditing"
        :example="editedExample"
        @cancel="cancel"
        @add-example="addExample"
        @edit-example="editExample"
      />
      <ul class="example__list">
        <li class="example__item">
          <square-btn 
            type="square"
            title="Добавить работу" 
            :disabled="exampleForm"
            @click="addFormHandler"
          />
        </li>
        <li
          v-for="example in examples"
          :key="example.id"
          class="example__item"
        >
          <example
            :example="example"
            @edit-example="editExampleHandler"
            @delete-example="deleteExample"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import squareBtn from '../../button/button.vue'
import example from '../../example/example.vue'
import exampleForm from '../../example-form/example-form.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Examples',
  components: {
    exampleForm,
    example,
    squareBtn
  },
  data() {
    return {
      exampleForm: false,
      isEditing: false,
      editedExample: {
        id: null,
        title: '',
        link: '',
        description: '',
        techs: '',
        photo: {},
        preview: ''
      }
    }
  },
  computed: {
    ...mapState('examples', {
      examples: state => state.data
    })
  },
  created() {
    this.fetchExamplesAction()
  },
  methods: {
    ...mapActions({
      addExampleAction: 'examples/add',
      fetchExamplesAction: 'examples/fetch',
      editExampleAction: 'examples/edit',
      deleteExampleAction: 'examples/delete',
      showTooltip: 'tooltip/show'
    }),
    async addExample(newExample){
      try {
        await this.addExampleAction(newExample)
        this.exampleForm = false
        this.showTooltip({
          text: 'Работа успешно создана',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: error.message,
          type: 'error'
        })
      }
    },
    editExampleHandler(example) {
      this.exampleForm = true
      this.isEditing = true
      this.editedExample = example
      this.editedExample.preview = null
    },
    async editExample(editedExample) {
      try {
        await this.editExampleAction(editedExample)
        this.exampleForm = false
        this.showTooltip({
          text: 'Работа успешно изменена',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: 'Не удалось изменить работу',
          type: 'error'
        })
      }
    },
    async deleteExample(id) {
      try {
        await this.deleteExampleAction(id)
        this.showTooltip({
          text: 'Работа успешно удалена',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: 'Не удалось удалить работу',
          type: 'error'
        })
      }
    },
    addFormHandler() {
      this.exampleForm = true
      this.editedExample = {
        id: null,
        title: '',
        link: '',
        description: '',
        techs: '',
        photo: {},
        preview: ''
      }
    },
    cancel() {
      this.exampleForm = false
      this.isEditing = false
    }
  }
}
</script>

<style lang="pcss" src="./examples-page.pcss" scoped>
</style>
