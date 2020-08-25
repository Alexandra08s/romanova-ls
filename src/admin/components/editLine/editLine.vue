<template>
  <div class="edit-line-component" :class="{'blocked' : blocked}">
    <div v-if="editmode === false" class="title">
      <div class="text">
        {{ value }}
      </div>
      <div class="icon">
        <icon
          symbol="pencil"
          grayscale
          @click="editmode = true"
        ></icon>
      </div>
    </div>
    <form
      v-else
      class="title"
      @submit.prevent
    >
      <div class="input">
        <app-input
          v-model="title"
          placeholder="Название новой группы"
          :value="value"
          :error-message="errorMessage"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
        ></app-input>
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon symbol="tick" @click="editCategoryName"></icon>
        </div>
        <div class="button-icon">
          <icon
            symbol="cross"
            :blocked="!!errorMessage"
            @click="editmode = false"
          ></icon>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {
    icon: () => import('components/icon'),
    appInput: () => import('components/input')
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    blocked: Boolean,
    defaultEditMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editmode: this.defaultEditMode,
      title: this.value,
      errorMessage: ''
    }
  },
  methods: {
    editCategoryName() {
      if (this.title.trim() !== this.value.trim()) {
        this.editmode = false
      } else {
        if (this.title.trim() === '') {
          console.log(this.errorMessage)
          this.errorMessage = 'Не заполнено название группы'
          console.log(this.errorMessage)
        } else {
          this.$emit('edit-category-name', this.value)
          this.editmode = false
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>
