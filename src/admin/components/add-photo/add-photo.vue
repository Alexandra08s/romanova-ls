<template>
  <div>
    <div 
      :style="{backgroundImage: `url('${avatar}')`}" 
      :class="['add-photo__wrapper', {'hovered': hovered}, {'avatar': avatar}]"
    >
      <label
        class="add-photo__label uploader"
        @dragover="handleDragOver"
        @drop="addPhoto"
      >
      </label>
    </div>
    <app-button
      title="Добавить фото"
      type-attr="file"
      class="add-photo__btn"
      plain
      @change="addPhoto"
    />
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
    avatar: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hovered: false
    }
  },
  methods: {
    ...mapActions({
      showTooltip: 'tooltip/show'
    }),
    addPhoto(event) {
      event.preventDefault()
      const photo = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0]
      this.$emit('add-photo', photo)
      this.renderPhoto(photo)
    },
    renderPhoto(photo) {
      const reader = new FileReader()

      reader.readAsDataURL(photo)
      reader.onloadend = () => {
        this.$emit('render-photo', reader.result)
      }

      reader.onerror = () => {
        this.showTooltip({
          text: 'Фотография не была загружена',
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

<style lang="pcss" src="./add-photo.pcss" scoped>
</style>
