<!--<template>
  <v-container class="mt-10">
    <SectionOne id="section-bonus"/>
    <v-row>
      <v-col class="text-center">
        <h3 class="display-1 font-weight-thin">
          {{ $t('Earn free credits and bonuses') }}
        </h3>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col v-if="signupBonus > 0" cols="12" md="6" lg="3" class="text-center">
        <v-hover v-slot:default="{ hover }">
          <v-card elevation="6" outlined shaped class="bonus-card" :class="{ hover }">
            <div class="mt-5">
              <v-avatar color="primary" size="60">
                <v-icon color="white" large>
                  mdi-account-plus
                </v-icon>
              </v-avatar>
            </div>
            <v-card-title class="d-block">
              {{ $t('Sign up bonus') }}
            </v-card-title>

            <v-card-text>
              <p>
                {{ $t('Sign up and get {0} free credits to play.', [signupBonus] ) }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-if="paymentsPackageEnabled && depositBonus > 0" cols="12" md="6" lg="3" class="text-center">
        <v-hover v-slot:default="{ hover }">
          <v-card elevation="6" outlined shaped class="bonus-card" :class="{ hover: hover }">
            <div class="mt-5">
              <v-avatar color="primary" size="60">
                <v-icon color="white" large>
                  mdi-cash-plus
                </v-icon>
              </v-avatar>
            </div>
            <v-card-title class="d-block">
              {{ $t('Deposit bonus') }}
            </v-card-title>

            <v-card-text>
              <p>
                {{ $t('Get {0}% on top when you deposit {1} credits or more.', [depositBonus, config('settings.bonuses.deposit.threshold')]) }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" lg="3" class="text-center">
        <v-hover v-slot:default="{ hover }">
          <v-card elevation="6" outlined shaped class="bonus-card" :class="{ hover: hover }">
            <div class="mt-5">
              <v-avatar color="primary" size="60">
                <v-icon color="white" large>
                  mdi-link
                </v-icon>
              </v-avatar>
            </div>
            <v-card-title class="d-block">
              {{ $t('Affiliate program') }}
            </v-card-title>

            <v-card-text>
              <p>
                {{ $t('Refer your friends to the casino and get bonuses when they play games.') }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-if="faucetEnabled" cols="12" md="6" lg="3" class="text-center">
        <v-hover v-slot:default="{ hover }">
          <v-card elevation="6" outlined shaped class="bonus-card" :class="{ hover: hover }">
            <div class="mt-5">
              <v-avatar color="primary" size="60">
                <v-icon color="white" large>
                  mdi-chip
                </v-icon>
              </v-avatar>
            </div>
            <v-card-title class="d-block">
              {{ $t('Faucet') }}
            </v-card-title>

            <v-card-text>
              <p>
                {{ $t('Top up your balance with extra free credits on a regular basis.') }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-if="chatRainEnabled" cols="12" md="6" lg="3" class="text-center">
        <v-hover v-slot:default="{ hover }">
          <v-card elevation="6" outlined shaped class="bonus-card" :class="{ hover: hover }">
            <div class="mt-5">
              <v-avatar color="primary" size="60">
                <v-icon color="white" large>
                  mdi-weather-pouring
                </v-icon>
              </v-avatar>
            </div>
            <v-card-title class="d-block">
              {{ $t('Chat rain') }}
            </v-card-title>

            <v-card-text>
              <p>
                {{ $t('Be active in chat and take a chance to get up to {0} credits in reward.', [config('settings.bonuses.rain.amounts')[0]]) }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
-->
<template>
  <v-container class="mt-10">
    <SectionOne id="section-bonus"/>
    <v-row>
      <v-col class="text-center">
        <h3 class="display-1 font-weight-thin">
          <!--{{$t('Earn free credits and bonuses')}}-->
          <h4 class="gold">GAGNER</h4>
          <h4>DE L'ARGENT & RECEVEZ <span class="goldWrapped">DES BONUS</span></h4>
        </h3>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col v-if="signupBonus > 0" cols="12" md="2" lg="2" class="text-center">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mycard" elevation="6" outlined shaped :class="{ hover }">
            <div class="mt-5">
              <v-avatar size="79">
                <v-img :src="welcomeLogo"/>
              </v-avatar>
            </div>
            <v-card-title class="d-block">
              BIENVENUE
            </v-card-title>

            <v-card-text>
              <p class="gold">
                <!--{{ $t('Sign up and get {0} free credits to play.', [signupBonus] ) }}-->
                Inscrivez-vous et obtenez 1000 USD gratuits pour jouer.
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col v-if="paymentsPackageEnabled && depositBonus > 0" cols="12" md="2" lg="2" class="text-center">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mycard" elevation="6" outlined shaped :class="{ hover }">
            <div class="mt-5">
              <v-avatar size="79">
                <v-img :src="depotLogo"/>
              </v-avatar>
            </div>
            <v-card-title class="d-block">
              DÉPOT
            </v-card-title>

            <v-card-text>
              <p class="gold">
                <!--{{ $t('Get {0}% on top when you deposit {1} credits or more.', [depositBonus, config('settings.bonuses.deposit.threshold')]) }}
              -->
                Obtenez 5% sur votre dépots quand vous déposez plus de 500 USD.
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="2" lg="2" class="text-center">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mycard" elevation="6" outlined shaped :class="{ hover }">
            <div class="mt-5">
              <v-avatar size="79">
                <v-img :src="affiliationLogo"/>
              </v-avatar>
            </div>
            <v-card-title class="d-block">
              AFFILIATION
            </v-card-title>
            <v-card-text>
              <p class="gold">
                <!--{{ $t('Refer your friends to the casino and get bonuses when they play games.') }}
              -->
                Invitez vos amis à rejoindre le casino et obtenez des bonus à leur inscription.
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col v-if="faucetEnabled" cols="12" md="2" lg="2" class="text-center">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mycard" elevation="6" outlined shaped :class="{ hover }">
            <div class="mt-5">
              <v-avatar size="79">
                <v-img :src="faucetLogo"/>
              </v-avatar>
            </div>
            <v-card-title class="d-block">
              FAUCET
            </v-card-title>

            <v-card-text>
              <p class="gold">
                <!--{{ $t('Top up your balance with extra free credits on a regular basis.') }}
                -->
                Rechargez régulièrement votre solde avec des crédits gratuits supplémentaires.
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-if="chatRainEnabled" cols="12" md="2" lg="2" class="text-center">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mycard" elevation="6" outlined shaped :class="{ hover }">
            <div class="mt-5">
              <v-avatar size="79">
                <v-img :src="chatrainLogo"/>
              </v-avatar>
            </div>
            <v-card-title class="d-block">
              CHAT-RAIN
            </v-card-title>

            <v-card-text>
              <p class="gold">
                <!--{{ $t('Be active in chat and take a chance to get up to {0} credits in reward.', [config('settings.bonuses.rain.amounts')[0]]) }}
              -->
                Soyez actif dans le chat et courez la chance de recevoir jusqu'à 100 USD en récompense.
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

    </v-row>
  </v-container>
</template>
<script>
import { config } from '~/plugins/config'

export default {
  computed: {
    signupBonus () {
      return parseInt(config('settings.bonuses.sign_up'), 10)
    },
    depositBonus () {
      return parseInt(config('settings.bonuses.deposit.pct'), 10)
    },
    faucetEnabled () {
      return config('settings.bonuses.faucet.amount') > 0
    },
    chatRainEnabled () {
      return !!config('settings.bonuses.rain.frequency')
    },
    paymentsPackageEnabled () {
      return this.$store.getters['package-manager/getById']('payments')
    },
    welcomeLogo() {
      return "/images/hand.png"
    },

    depotLogo(){
      return "/images/depot.png"
    },

    faucetLogo(){
      return "/images/faucet.png"
    },

    affiliationLogo(){
      return "/images/affiliation.png"
    },

    chatrainLogo(){
      return "/images/chatrain.png"
    }
  },

  methods: {
    config
  }
}
</script>
<style lang="scss" scoped>
.bonus-card {
  transition: all 0.5s;
  min-height: 220px;

  &.hover {
    border-color: var(--v-primary-base) !important;
  }
}

.mycard{
  background-color: inherit;
  border: none;
}

.gold{
  color: #dcae58;
}

.goldWrapped{
  color: #000019;
  background: #dcae58;
}

</style>
