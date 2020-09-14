<template>
  <div :class="['add-file__wrapper', {'hovered': hovered}]">
    <label
      class="add-file__label uploader"
      @dragover="handleDragOver"
      @dragleave="hovered = false"
      @drop="addFile"
    >
      <p :class="['add-file__title', {'light': light}]">
        Перетащите&nbsp;или&nbsp;загрузите для загрузки изображения
      </p>
      <p :class="['add-file__title', 'add-file__title--mob', {'light': light}]">
        Добавьте изображение
      </p>
      <app-button
        title="Загрузить"
        type-attr="file"
        class="add-file__btn"
        no-paddings
        @change="addFile"
      />
      <app-button
        v-if="isEditing"
        title="Изменить превью"
        type-attr="file"
        class="add-file__btn add-file__btn--mob"
        no-paddings
        plain
        @change="addFile"
      />
      <app-button
        v-else
        title="Загрузить файл"
        type-attr="file"
        class="add-file__btn add-file__btn--mob"
        no-paddings
        plain
        @change="addFile"
      />
    </label>
  </div>
</template>

<script>
import appButton from '../button/button.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    appButton
  },
  props: {
    isLight: {
      type: Boolean,
      default: false
    },
    isEditing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hovered: false,
      light: false
    }
  },
  watch: {
    isLight: {
      handler(isLight) {
        if (isLight) {
          this.light = true
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      showTooltip: 'tooltip/show'
    }),
    addFile(event) {
      event.preventDefault()
      const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0]
      this.$emit('add-file', file)
      this.renderPhoto(file)
      this.hovered = false
    },
    renderPhoto(file) {
      const reader = new FileReader()

      reader.readAsDataURL(file)
      reader.onloadend = () => {
        this.$emit('render-photo', reader.result)
        this.light = true
      }

      reader.onerror = () => {
        this.showTooltip({
          text: 'Изображение не было загружено',
          type: 'error'
        })
      }

      reader.onabort = () => {
        this.showTooltip({
          text: 'Невозможно прочитать файл',
          type: 'error'
        })
      }
    },
    handleDragOver(e) {
      e.preventDefault()
      this.hovered = true
    }
  }
}
</script>

<style lang="pcss" src="./add-file.pcss" scoped>
</style>
