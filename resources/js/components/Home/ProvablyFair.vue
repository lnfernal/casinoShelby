<template>
  <v-div  height="200" class="row mt-10">
    <v-img
        src="/images/lock.png"
        height="130px"
        class="col-lg-5 offset-lg-1 game-banner align-center text-center toto"
        :class="{ hover }"
    >
    </v-img>
    <v-row align="center" justify="center" class="col-lg-5">
      <v-col class="text-center">
        <div class="d-inline-flex align-center mb-5">
          <v-icon size="50" color="primary" class="mr-5">
            mdi-check-decagram
          </v-icon>
          <h3 class="display-1">
            Probabilité équitable
          </h3>
        </div>
        <div class="title mb-5">
          <!--{{ $t('All our games are provably fair.') }}
          {{ $t('We do not cheat.') }}-->
          Le caractère aléatoire des jeux peut être vérifié par les joueurs en temps réel. En conclusion, la Maison ne peut pas tricher
        </div>
        <div class="text-center">
          <v-btn
            :to="{ name: 'page', params: { id: 'provably-fair' } }"
            outlined
            large
            dark
          >
            {{ $t('Learn more') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-div>
</template>

<style lang="scss" scoped>
.darken-50 {
  background: rgba(0, 0, 0, 0.5);
}
</style>
