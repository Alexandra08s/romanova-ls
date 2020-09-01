<template>
  <validation-observer
    ref="skill-add"
    :class="['skill-add-line__wrapper', {'disabled': disabled}]"
    tag="div"
  >
    <ValidationProvider v-slot="{ errors }" rules="required">
      <app-input
        v-model="newSkill.title"
        placeholder="Новый навык"
        class="skill-add-line__name"
        :error-message="errors[0] ? 'Не введен навык' : ''"
      />
    </ValidationProvider>
    <ValidationProvider v-slot="{ errors }" rules="required|integer|between:0,100">
      <app-input
        v-model="newSkill.percent"
        class="skill-add-line__percent"
        :error-message="errors[0]"
        placeholder="100 %"
      />
    </ValidationProvider>
    <round-btn
      type="round"
      @click="addSkillHandler"
    />
  </validation-observer>
</template>

<script>
import appInput from '../input/input.vue'
import roundBtn from '../button/types/roundBtn/roundBtn.vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, between, integer } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Не введен процент'
})

extend('integer', {
  ...integer,
  message: 'Введите число'
})

extend('between', {
  ...between,
  message: 'Введите корректное значение'
})

export default {
  components: {
    appInput,
    roundBtn,
    ValidationProvider,
    ValidationObserver
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newSkill: {
        title: null,
        percent: null
      }
    }
  },
  methods: {
    async addSkillHandler() {
      await this.$refs['skill-add'].validate().then(isValid => {
        if (isValid) {
          this.$emit('create-skill', this.newSkill)
        }
      })
    }
  }
}
</script>

<style lang="pcss" src="./skill-add-line.pcss" scoped>
</style>
