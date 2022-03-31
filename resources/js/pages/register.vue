<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-img :src="settingsWelcomeUrl" :alt="appName" />
      <v-img :src="settingsWelcomeUrl2" :alt="appName" />
    </v-row>
    <v-row align="center" justify="center">
      <div class="incription_area position-relative">
        <img src="/images/main2.png" class="main_bg"/>
        <img src="/images/bg2.png" class="bg2"/>
        <div class="container text-center">
          <div class="content_wrap position-relative">
            <img src="/images/shape2.png"/>
            <h4 class="titleRegister">INSCRIPTION GRATUITE</h4>
            <h3 class="titleRegister text-white mt_30">100 USD</h3>
            <h1>OFFERTS</h1>
          </div>
        </div>
      </div>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary">
            <router-link :to="{ name: 'home' }">
              <v-avatar width="60" height="60" tile>
                <v-img :src="appLogoUrl" />
              </v-avatar>
            </router-link>
            <v-toolbar-title class="ml-2">
              {{ $t('Registration') }}
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <!-- <oavi-auth /> -->
            <v-form ref="form" v-model="formIsValid" @submit.prevent="register">
              <v-text-field
                  v-model="form.name"
                  :label="$t('Name')"
                  type="text"
                  name="name"
                  :rules="[validationRequired]"
                  :error="form.errors.has('name')"
                  :error-messages="form.errors.get('name')"
                  outlined
                  @keydown="clearFormErrors($event,'name')"
              />

              <v-text-field
                  v-model="form.email"
                  :label="$t('Email')"
                  type="email"
                  name="email"
                  :rules="[validationRequired, validationEmail]"
                  :error="form.errors.has('email')"
                  :error-messages="form.errors.get('email')"
                  outlined
                  @keydown="clearFormErrors($event,'email')"
              />

              <v-text-field
                  v-model="form.password"
                  :label="$t('Password')"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  name="password"
                  :rules="[validationRequired, v => validationMinLength(v,6)]"
                  :error="form.errors.has('password')"
                  :error-messages="form.errors.get('password')"
                  outlined
                  :counter="true"
                  @click:append="showPassword = !showPassword"
                  @keydown="clearFormErrors($event,'password')"
              />

              <v-text-field
                  v-model="form.password_confirmation"
                  :label="$t('Confirm password')"
                  :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword2 ? 'text' : 'password'"
                  name="password_confirmation"
                  :rules="[validationRequired, v => validationMatch(form.password,v)]"
                  :error="form.errors.has('password_confirmation')"
                  :error-messages="form.errors.get('password_confirmation')"
                  outlined
                  :counter="true"
                  @click:append="showPassword2 = !showPassword2"
                  @keydown="clearFormErrors($event,'password_confirmation')"
              />
              <!--
              <v-menu
                  ref="menu"
                  v-model="date"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="date"
                      label="Date de naissance"
                      prepend-icon="mdi-calendar"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date"
                    :active-picker.sync="date"
                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                ></v-date-picker>
              </v-menu>-->
              <!--<input type="date" v-model="date">-->
              <v-checkbox
                  v-model="agreementAccepted"
                  color="primary"
              >
                <template v-slot:label>
                  <i18n path="I accept {0} and {1}" tag="div">
                    <template v-slot:0>
                      <a href="/pages/terms-of-use" target="_blank" @click.stop>
                        {{ $t('Terms of use') }}
                      </a>
                    </template>
                    <template v-slot:1>
                      <a href="/pages/privacy-policy" target="_blank" @click.stop>
                        {{ $t('Privacy policy') }}
                      </a>
                    </template>
                  </i18n>
                </template>
              </v-checkbox>

              <vue-recaptcha
                  v-if="recaptchaPublicKey"
                  ref="recaptcha"
                  :sitekey="recaptchaPublicKey"
                  :loadRecaptchaScript="true"
                  :theme="this.$vuetify.theme.isDark ? 'dark' : 'light'"
                  class="mb-3"
                  @verify="token => form.recaptcha = token"
              />

              <v-row align="center">
                <v-col class="text-center text-md-left">
                  <v-btn type="submit" color="primary" :disabled="!formIsValid || form.busy || !agreementAccepted || (!!recaptchaPublicKey && !form.recaptcha)" :loading="form.busy">
                    <!--{{ $t('Register') }}-->
                    S'INSCRIRE
                  </v-btn>
                </v-col>
                <v-col class="text-center text-md-right">
                  <router-link :to="{ name: 'login' }">
                    {{ $t('Already signed up?') }}
                  </router-link>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { config } from '~/plugins/config'
import Form from 'vform'
import FormMixin from '~/mixins/Form'
import OAuth from '~/components/OAuth'
import VueRecaptcha from 'vue-recaptcha'

export default {
  middleware: 'guest',

  components: { OAuth, VueRecaptcha},

  mixins: [FormMixin],

  metaInfo () {
    return { title: this.$t('Registration') }
  },

  data () {
    return {
      agreementAccepted: false,
      showPassword: false,
      showPassword2: false,
      form: new Form({
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        recaptcha: null,
        date: null,
      })
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },

  computed: {
    appLogoUrl () {
      return config('app.logo')
    },
    settingsWelcomeUrl(){
      return config('settings.register.welcome.url1')
    },
    settingsWelcomeUrl2(){
      return config('settings.register.welcome.url2')
    },
    emailVerification () {
      return config('settings.email_verification')
    },
    recaptchaPublicKey () {
      return config('services.recaptcha.public_key')
    },
  },

  methods: {
    async register () {
      // Register the user
      const { data } = await this.form.post('/api/auth/register')
          .catch(() => {
            if (this.recaptchaPublicKey) {
              this.form.recaptcha = null
              this.$refs.recaptcha.reset()
            }
            return {}
          })

      // in case of any error data will be undefined
      if (data) {
        // Store the user
        this.$store.dispatch('auth/updateUser', data)

        this.$store.dispatch('message/success', {
          text: this.emailVerification
              ? [
                'We have sent a verification link to your email.',
                'Please click on that link to verify your email and continue using our website.'
              ].map(m => this.$t(m)).join(' ')
              : this.$t('You have successfully registered!')
        })

        // Redirect home
        this.$router.push({ name: 'home' })
      }
    },
    save (date) {
      this.$refs.menu.save(date)
    },
  }
}
</script>