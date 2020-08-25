<template>
  <form
    v-if="editMode"
    class="skill__wrapper"
    @submit.prevent
  >
    <div class="skill__title">
      <app-input
        v-model.trim="currentSkill.title"
        no-side-paddings
        :error-message="errorTitleMessage"
      />
    </div>
    <p class="skill__percent">
      <app-input
        v-model="currentSkill.percent"
        type="number"
        min="0"
        max="100"
        maxlength="3"
        no-side-paddings
        :error-message="errorPercentMessage"
        class="skill__percent-value"
        :class="{'skill__percent-value--edit': editMode}"
      />
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
        @click="editMode = false"
      />
    </div>
  </form>
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
        @click="editMode = true"
      />
      <icon
        symbol="trash"
        class="skill__btn"
        grayscale
        @click="$emit('remove-skill', skill.id)"
      />
    </div>
  </div>
</template>

<script>
import appInput from '../input/input.vue'
import icon from '../icon/icon.vue'

export default {
  components: {
    appInput,
    icon
  },
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editMode: false,
      currentSkill: this.skill,
      errorPercentMessage: '',
      errorTitleMessage: '',
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
    editSkill() {
      this.errorTitleMessage = ''
      this.errorPercentMessage = ''
      this.blocked = false
      if (this.currentSkill.title === null) {
        this.errorTitleMessage = 'Не введен навык'
        this.blocked = true
      } 
      else if (this.currentSkill.title.trim() === '') {
        this.errorTitleMessage = 'Не введен навык'
        this.blocked = true
      }

      if (this.currentSkill.percent === null) {
        this.errorPercentMessage = 'Не введен процент'
        this.blocked = true
      }
      else if (this.currentSkill.percent.trim() === '') {
        this.errorPercentMessage = 'Не введен процент'
        this.blocked = true
      }

      if (this.errorTitleMessage == '' && this.errorPercentMessage == '') {
        this.editMode = false
        this.$emit('edit-skill', this.currentSkill)
      }
    }
  }
}
</script>

<style lang="pcss" src="./skill-item.pcss" scoped>
</style>
