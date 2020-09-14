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
    <validation-observer
      v-else
      ref="edit-line"
      class="title"
      tag="div"
    >
      <div class="input">
        <ValidationProvider v-slot="{ errors }" rules="required">
          <app-input
            v-model="title"
            placeholder="Название новой группы"
            :value="value"
            :error-message="errors[0] ? 'Не введено название категории' : ''"
            autofocus="autofocus"
            no-side-paddings="no-side-paddings"
            @input="$emit('input', $event)"
            @keydown.native.enter="onApprove"
          ></app-input>
        </ValidationProvider>
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon symbol="tick" @click="handleCategory"></icon>
        </div>
        <div class="button-icon">
          <icon
            symbol="cross"
            :blocked="disabled"
            @click="closeEditing"
          ></icon>
        </div>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', required)

export default {
  components: {
    icon: () => import('components/icon'),
    appInput: () => import('components/input'),
    ValidationProvider,
    ValidationObserver
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
      originalTitle: this.value,
      disabled: false
    }
  },
  methods: {
    async handleCategory() {
      await this.$refs['edit-line'].validate().then(isValid => {
        if (isValid) {
          if (this.originalTitle === null) {
            this.$emit('create-category', this.title)
            this.$emit('change-edit-mode', this.editmode)
          } else {
            this.$emit('edit-category', this.title)
          }
          this.editmode = false
          this.disabled = false
        }
        else {
          this.disabled = true
        }
      })
    },
    closeEditing() {
      this.$refs['edit-line'].validate().then(isValid => {
        if (isValid) {
          this.editmode = false
          this.disabled = false
          this.$emit('delete-category', this.title)
        }
        else {
          this.disabled = true
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>
