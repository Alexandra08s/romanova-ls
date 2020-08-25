<template>
  <form :class="['skill-add-line__wrapper', {'disabled': disabled}]" @submit.prevent>
    <app-input
      v-model="newSkill.title"
      placeholder="Новый навык"
      class="skill-add-line__name"
      :error-message="errorTitleMessage"
    />
    <app-input
      v-model="newSkill.percent"
      class="skill-add-line__percent"
      :error-message="errorPercentMessage"
      placeholder="100 %"
    />
    <round-btn
      type="round"
      @click="addSkill"
    />
  </form>
</template>

<script>
import appInput from '../input/input.vue'
import roundBtn from '../button/types/roundBtn/roundBtn.vue'

export default {
  components: {
    appInput,
    roundBtn
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
        id: null,
        title: null,
        percent: null
      },
      errorPercentMessage: '',
      errorTitleMessage: ''
    }
  },
  methods: {
    addSkill() {
      this.errorTitleMessage = ''
      this.errorPercentMessage = ''
      if (this.newSkill.title === null) {
        this.errorTitleMessage = 'Не введен навык'
      } 
      else if (this.newSkill.title.trim() === '') {
        this.errorTitleMessage = 'Не введен навык'
      }

      if (this.newSkill.percent === null) {
        this.errorPercentMessage = 'Не введен процент'
      }
      else if (this.newSkill.percent.trim() === '') {
        this.errorPercentMessage = 'Не введен процент'
      }

      if (this.errorTitleMessage == '' && this.errorPercentMessage == '') {
        this.$emit('add-skill', this.newSkill)
      }
    }
  }
}
</script>

<style lang="pcss" src="./skill-add-line.pcss" scoped>
</style>
