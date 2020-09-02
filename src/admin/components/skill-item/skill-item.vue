<template>
  <validation-observer
    v-if="currentSkill.editMode"
    ref="skill-item"
    class="skill__wrapper"
    tag="div"
  >
    <div class="skill__title">
      <ValidationProvider v-slot="{ errors }" rules="required">
        <app-input
          v-model.trim="currentSkill.title"
          no-side-paddings
          :error-message="errors[0] ? 'Не введен навык' : ''"
          data-vv-validate-on="change"
        />
      </ValidationProvider>
    </div>
    <p class="skill__percent">
      <ValidationProvider v-slot="{ errors }" rules="required">
        <app-input
          v-model="currentSkill.percent"
          type="number"
          min="0"
          max="100"
          maxlength="3"
          no-side-paddings
          :error-message="errors[0]"
          data-vv-validate-on="change"
          class="skill__percent-value"
          :class="{'skill__percent-value--edit': currentSkill.editMode}"
        />
      </ValidationProvider>
    </p>
    <div class="skill__btns">
      <icon
        symbol="tick"
        class="skill__btn"
        @click="editSkill"
      />
      <icon
        symbol="cross"
        class="skill__btn"
        :blocked="blocked"
        @click="cancelEditingHandler"
      />
    </div>
  </validation-observer>
  <div v-else class="skill__wrapper">
    <div class="skill__title">
      {{ skill.title }}
    </div>
    <div class="skill__percent">
      <span class="skill__percent-value">
        {{ skill.percent }}
      </span>
    </div>
    <div class="skill__btns">
      <icon
        symbol="pencil"
        class="skill__btn"
        grayscale
        @click="startEditingHandler"
      />
      <icon
        symbol="trash"
        class="skill__btn"
        grayscale
        @click="$emit('remove-skill', currentSkill)"
      />
    </div>
  </div>
</template>

<script>
import appInput from '../input/input.vue'
import icon from '../icon/icon.vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, between, integer } from 'vee-validate/dist/rules'
import { setInteractionMode } from 'vee-validate'

setInteractionMode('passive')
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
    icon,
    ValidationProvider,
    ValidationObserver
  },
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentSkill: {
        id: this.skill.id,
        title: this.skill.title,
        percent: this.skill.percent,
        category: this.skill.category,
        editMode: false,
      },
      savedSkill: {},
      blocked: false
    }
  },
  watch: {
    skill: {
      handler(skill) {
        this.currentSkill = skill
      }, 
      deep: true
    }
  },
  methods: {
    async editSkill() {
      await this.$refs['skill-item'].validate().then(isValid => {
        if (isValid) {
          this.currentSkill.editMode = false
          this.$emit('edit-skill', this.currentSkill)
        } else {
          this.blocked = true
        }
      })
    },
    startEditingHandler() {
      this.savedSkill = {...this.currentSkill}
      this.currentSkill.editMode = true
    },
    cancelEditingHandler() {
      this.currentSkill = {...this.savedSkill}
      this.currentSkill.editMode = false
    }
  }
}
</script>

<style lang="pcss" src="./skill-item.pcss" scoped>
</style>
