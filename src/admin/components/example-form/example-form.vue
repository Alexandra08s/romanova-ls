<template>
  <card>
    <p v-if="!isEditing" slot="title">
      Добавление работы
    </p>
    <p
      v-else
      slot="title"
      class="example-form__title"
    >
      Редактирование работы
    </p>
    <template slot="content">
      <validation-observer
        ref="example-form"
        class="example-form"
        tag="div"
      >
        <add-file
          class="example-form__add"
          :is-light="!!currentExample.preview"
          :style="{backgroundImage: `url('${currentExample.preview}')`}"
          :is-editing="isEditing"
          @add-file="addFile"
          @render-photo="renderPhoto"
        />
        <div class="example-form__wrapper">
          <label class="example-form__label" for="title">Название</label>
          <ValidationProvider v-slot="{ errors }" rules="required">
            <app-input
              id="title"
              v-model="currentExample.title"
              class="example-form__input"
              :error-message="errors[0] ? 'Не введено название' : ''"
            />
          </ValidationProvider>
          <label class="example-form__label" for="link">Ссылка</label>
          <ValidationProvider v-slot="{ errors }" rules="required">
            <app-input
              id="link"
              v-model="currentExample.link"
              class="example-form__input"
              :error-message="errors[0] ? 'Не введена ссылка' : ''"
            />
          </ValidationProvider>
          <label class="example-form__label" for="description">Описание</label>
          <app-input
            id="description"
            v-model="currentExample.description"
            field-type="textarea"
            class="example-form__input"
          />
          <label class="example-form__label">Добавление тэга</label>
          <tags-adder
            class="example-form__tags"
            :tags="currentExample.techs"
            @change="currentExample.techs = $event"
          />
          <div class="example-form__btns">
            <app-button
              title="Отмена"
              plain
              @click="$emit('cancel')"
            />
            <app-button
              title="Сохранить"
              :style="{paddingBottom: 0, paddingTop: 0}"
              class="example-form__btn"
              @click="submitHandler"
            />
          </div>
        </div>
      </validation-observer>
    </template>
  </card>
</template>

<script>
import card from '../card/card.vue'
import addFile from '../add-file/add-file.vue'
import tagsAdder from '../tags-adder/tags-adder.vue'
import appInput from '../input/input.vue'
import appButton from '../button/button.vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import config from '../../../../env.paths.json'

extend('required', required)

export default {
  components: {
    card,
    addFile,
    appInput,
    appButton,
    tagsAdder,
    ValidationProvider,
    ValidationObserver
  },
  props: {
    empty: {
      type: Boolean,
      default: false
    },
    example : {
      type: Object,
      default: () => ({
        id: null,
        title: '',
        link: '',
        description: '',
        techs: '',
        photo: {},
        preview: ''
      })
    },
    isEditing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentExample: {...this.example},
      disabled: true,
      isLight: false
    }
  },
  watch: {
    example: {
      handler(example) {
        this.currentExample = {...example}
      }, 
      deep: true,
      immediate: true,
    },
    isEditing: {
      handler(isEditing) {
        if (isEditing) {
          this.currentExample.preview = `${config.BASE_URL}/${this.example.photo}`
          this.isLight = true
        }
      },
      immediate: true
    }
  },
  methods: {
    addFile(file) {
      this.currentExample.photo = file
    },
    renderPhoto(preview) {
      this.currentExample.preview = preview
    },
    submitHandler() {
      this.$refs['example-form'].validate().then(isValid => {
        if (isValid) {
          let newExample = {...this.currentExample}
          delete newExample.preview
          this.isEditing ? this.$emit('edit-example', newExample) : this.$emit('add-example', newExample)
        }
      })
    }
  }
}
</script>

<style lang="pcss" src="./example-form.pcss" scoped>
</style>
