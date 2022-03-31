<template>
  <v-app>
    <v-app-bar app :clipped-left="!navbarVisible">
      <!--<v-app-bar-nav-icon v-if="!navbarVisible" @click.stop="navigationDrawer = !navigationDrawer" />-->

      <v-toolbar-title class="d-flex align-center">
        <router-link :to="{ name: 'home' }">
          <v-avatar class="logoShelby" width="125" height="40" tile>
            <v-img :src="appLogoUrl" :alt="appName" />
          </v-avatar>
        </router-link>
        <div class="ml-3 d-none d-sm-block">
          <!--{{ appName }}-->
        </div>
      </v-toolbar-title>

      <v-spacer />

      <template v-if="!token && !authenticated">
        <v-btn :to="{ name: 'login' }" class="secondary"><!--{{ $t('Log in') }}--> Connexion</v-btn>
        <v-btn :to="{ name: 'register' }" class="primary ml-2"><!--{{ $t('Sign up') }}--> Inscription</v-btn>
      </template>
      <template v-else-if="authenticated">
        <v-menu v-model="accountMenu" offset-y left>
          <template v-slot:activator="{ on }">
            <v-btn
                icon
                rounded
                class="px-2 width-auto"
                v-on="on"
            >
              <v-icon class="mr-1">mdi-poker-chip</v-icon>
              <animated-number v-if="account" :number="account.balance" />
            </v-btn>
          </template>
          <v-list>
            <v-subheader class="text-uppercase">{{ $t('Account') }}</v-subheader>
            <v-list-item :to="{ name: 'user.account.transactions' }" link exact>
              <v-list-item-icon>
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('Transactions') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="paymentsPackageEnabled" :to="{ name: 'user.account.deposits.index' }" link exact>
              <v-list-item-icon>
                <v-icon>mdi-cash-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('Deposits') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="paymentsPackageEnabled" :to="{ name: 'user.account.withdrawals.index' }" link exact>
              <v-list-item-icon>
                <v-icon>mdi-cash-minus</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('Withdrawals') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="faucetEnabled" :to="{ name: 'user.account.faucet' }" link exact>
              <v-list-item-icon>
                <v-icon>mdi-chip</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('Faucet') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu v-model="settingsMenu" :close-on-content-click="false" offset-y left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-list>
              <v-subheader class="text-uppercase">
                {{ $t('Settings') }}
              </v-subheader>
              <v-list-item>
                <v-list-item-action>
                  <v-switch
                      :input-value="settings.sounds"
                      :value="settings.sounds"
                      color="primary"
                      @change="saveSettings('sounds', $event)"
                  />
                </v-list-item-action>
                <v-list-item-title>{{ $t('Sounds') }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-switch
                      :input-value="isMobile ? false : settings.gameFeed"
                      :value="settings.gameFeed"
                      :disabled="isMobile"
                      color="primary"
                      @change="saveSettings('gameFeed', $event)"
                  />
                </v-list-item-action>
                <v-list-item-title>{{ $t('Game feed') }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-menu v-model="userMenu" :close-on-content-click="false" offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-avatar size="40">
                <img :src="user.avatar_url" :alt="user.name">
              </v-avatar>
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img :src="user.avatar_url" :alt="user.name">
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ user.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action class="flex-row">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn icon :to="{ name: 'users.show', params: { id: user.id } }" @click="userMenu = false" v-on="on">
                        <v-icon>mdi-account</v-icon>
                      </v-btn>
                    </template>
                    <span>{{ $t('Profile') }}</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn icon :to="{ name: 'user.security' }" @click="userMenu = false" v-on="on">
                        <v-icon>mdi-shield-lock</v-icon>
                      </v-btn>
                    </template>
                    <span>{{ $t('Security') }}</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn icon :to="{ name: 'user.affiliate' }" @click="userMenu = false" v-on="on">
                        <v-icon>mdi-link</v-icon>
                      </v-btn>
                    </template>
                    <span>{{ $t('Affiliate program') }}</span>
                  </v-tooltip>
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer />
              <v-btn text @click="logout">
                <v-icon>mdi-logout</v-icon>
                {{ $t('Log out') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

        <v-btn v-if="chatEnabled" icon @click="chatDrawer = !chatDrawer">
          <v-badge :content="unreadChatMessagesCount" :value="unreadChatMessagesCount" overlap>
            <v-icon>{{ chatDrawer ? 'mdi-message' : 'mdi-message-outline' }}</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <preloader :active="loading" />
    </v-app-bar>
    <v-main>
      <animated-background />
      <message />
      <router-view />
    </v-main>

    <primary-footer />
  </v-app>
</template>

<script>
import { config } from '~/plugins/config'
//ici
import { mapState, mapGetters } from 'vuex'
import Message from '~/components/Message'
import AnimatedBackground from '~/components/AnimatedBackground'
import PrimaryFooter from '~/components/PrimaryFooter'
//ici
import MainMenu from '~/components/Admin/MainMenu'
import DeviceMixin from '~/mixins/Device'

export default {
  name: 'AuthLayout',
  //ici: mainmenu
  components: { MainMenu, Message, AnimatedBackground, PrimaryFooter },
  mixins: [DeviceMixin],
  //ici
  data () {
    return {
      navigationDrawer: this.navbarVisible,
      chatDrawer: false,
      accountMenu: false,
      settingsMenu: false,
      userMenu: false,
      unreadChatMessagesCount: 0
    }
  },

  computed: {
    appName () {
      return config('app.name')
    },
    navbarVisible () {
      return config('settings.interface.navbar.visible') && !this.isMobile
    },
    appLogoUrl () {
      return config('app.logo')
    },
  }


}
</script>
