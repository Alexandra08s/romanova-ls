<template>
  <section class="login">
    <div class="container login__container">
      <div class="login__wrapper">
        <p class="login__title">
          Авторизация
        </p>
        <validation-observer
          ref="login-form"
          class="login__form"
          tag="form"
          @submit.prevent="login"
        >
          <div class="login__block login__block-name">
            <ValidationProvider v-slot="{ errors }" rules="required">
              <app-input
                v-model="user.name"
                type="text"
                placeholder="Login"
                class="login__input"
                icon="user"
                :error-message="errors[0] ? 'Введите имя пользователя' : ''"
              >
              </app-input>
            </ValidationProvider>
          </div>
          <div class="login__block login__block-password">
            <ValidationProvider v-slot="{ errors }" rules="required">
              <app-input
                v-model="user.password"
                type="password"
                placeholder="Password"
                class="login__input"
                icon="key"
                :error-message="errors[0] ? 'Введите пароль' : ''"
              >
              </app-input>
            </ValidationProvider>
          </div>
          <app-button
            class="login__btn"
            title="Отправить"
            type="submit"
            :disabled="isDisabled"
          />
        </validation-observer>
      </div>
    </div>
  </section>
</template>

<script>
import appButton from '../../button/types/defaultBtn/defaultBtn.vue'
import appInput from '../../input/input.vue'
import $axios from '../../../request.js'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    appButton,
    appInput,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      user: {
        name: '',
        password: ''
      },
      errorMessage: '',
      isDisabled: false
    }
  },
  methods: {
    ...mapActions({
      showTooltip: 'tooltip/show'
    }),
    async login() {
      this.$refs['login-form'].validate().then(async isValid => {
        if (isValid) {
          this.isDisabled = true

          try {
            const response = await $axios.post('login', this.user)
            console.log(response)
            const token = response.data.token

            localStorage.setItem('token', token)
            this.showTooltip({
              text: 'Вы успешно авторизованы',
              type: 'success'
            })
            try {
              $axios.get('/user', {token}).then(response => {
                localStorage.setItem('userId', response.data.user.id)
              })
            } catch(error) {
              console.log(error.response.data.error)
            }
            this.$router.replace('/')
          } catch(error) {
            this.showTooltip({
              text: error.response.data.error,
              type: 'error'
            })
           
          } finally {
            this.isDisabled = false
          }
        }
      })
    }
  }
}
</script>

<style lang="pcss" src="./login-page.pcss" scoped>
</style>
