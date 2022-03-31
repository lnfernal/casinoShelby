<!--<template>
  <v-container class="mt-10">
    <v-row>
      <v-col class="text-center">
        <h3 class="display-1 font-weight-thin">
          {{ $t('Recent games') }}
        </h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-list v-if="recentGames === null">
          <v-skeleton-loader v-for="(v,i) in Array(10).fill(0)" :key="i" type="list-item-avatar-three-line" />
        </v-list>
        <p v-else-if="recentGames.length === 0" class="text-center">
          {{ $t('No games found') }}
        </p>
        <v-timeline v-else dense>
          <v-timeline-item
            v-for="game in recentGames"
            :key="game.id"
            right
            large
          >
            <template v-slot:icon>
              <user-avatar :user="game.account.user" :size="50" />
            </template>
            <v-card :elevation="5" class="recent-game-card" :class="{ win: game.win >= game.bet, loss: game.win < game.bet }">
              <v-card-title class="text-h6">
                {{ game.title }}
              </v-card-title>
              <v-card-text class="text-subtitle-1 py-0">
                <template v-if="game.win > 0">
                  {{ $t('{0} bet {1} and won {2} credits', [game.account.user.name, game.bet, game.win > 999 ? decimal(game.win) : game.win]) }}
                </template>
                <template v-else>
                  {{ $t('{0} bet {1} credits and lost', [game.account.user.name, game.bet]) }}
                </template>
              </v-card-text>
              <v-card-actions class="justify-space-between">
                <span class="text--secondary ml-2">
                  <v-icon class="text--secondary mr-1">
                    mdi-clock-outline
                  </v-icon>
                  {{ game.updated_ago }}
                </span>
                <v-btn small :to="{ name: 'history.games.show', params: { id: game.id } }" :color="game.win >= game.bet ? 'success' : 'error'" class="white--text">
                  {{ $t('View') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>-->
<template>
  <v-container class="mt-10">
    <v-row>
      <div class="col-lg-3 offset-lg-1 text-center order-lg-2 mt_30">
        <img src="/images/big_win.png" class="img-fluid" alt="">
      </div>
      <div class="col-lg-6 order-lg-1 mt_30">
        <v-row v-if="game">
          <v-col class="d-flex align-center justify-center">
            <div class="d-flex flex-column">
              <span class="text-h5 font-weight-thin">{{ game.account.user.name }}</span>
              <span class="text2">GAGNE {{ decimal(game.win) }} USD</span>
              <span class="text3">{{game.updated_ago}} a {{game.title}}</span>
              <h4 class="underline">DERNIERS GAGNANTS</h4>
            </div>
          </v-col>
        </v-row>
        <v-row v-if="!game">
          <v-col>
            <div class="display-1 font-weight-thin">
              {{ $t('No one won big yet') }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-list v-if="recentGames === null">
            <v-skeleton-loader v-for="(v,i) in Array(10).fill(0)" :key="i" type="list-item-avatar-three-line" />
          </v-list>
          <p v-else-if="recentGames.length === 0" class="text-center">
            {{ $t('No games found') }}
          </p>
          <carousel
          v-if="recentGames && recentGames.length"
          :autoplay="true"
          :loop="true"
          :center="true"
          :nav="false"
          :dots="false"
          mySlider
          class="mySlider">
            <template slot="prev">
              <button class="prev">
                <img src="/images/left.svg">
              </button>
            </template>
            <div v-for="game in recentGames" class="item">
              <template>
                <h5>{{ game.account.user.name }} GAGNE</h5>
                <h4>{{ game.win }} USD</h4>
                <p>{{game.updated_ago}} à {{game.title}}</p>
              </template>
            </div>
            <template slot="next">
              <button class="next">
                <img src="/images/right.svg">
              </button>
            </template>
          </carousel>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import { decimal } from '~/plugins/format'
import { config } from '~/plugins/config'
import UserAvatar from '~/components/UserAvatar'
import {mapState} from "vuex";
import carousel from 'vue-owl-carousel';


export default {
  components: { UserAvatar, carousel },

  computed: {
    ...mapState('game', { game: 'biggestWin' })
  },

  data () {
    return {
      recentGames: null
    }
  },

  created () {
    this.pullRecentGames()
  },

  methods: {
    config,
    decimal,
    async pullRecentGames () {
      const { data } = await axios.get('/api/pub/games/recent')

      this.recentGames = data.filter(c => c.win > 0)
    }
  }
}

</script>
<style lang="scss" scoped>
.recent-game-card {
  border-width: 1px;
  border-style: solid;

  &.win {
    border-color: var(--v-success-base);
  }
  &.loss {
    border-color: var(--v-error-base);
  }
}

.owl-carousel{
  width: 100%;
  margin-top: 4.5rem;
  padding-left: 4.5rem;
}
.owl-carousel h5{
  font-size: 1rem;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 800;
}
.owl-carousel h4{
  font-size: 1.4rem;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 800;
  color: #D4A755;
}
.mySlider button{
  border: none;
  background-color: transparent;
  padding: 0;
  position: absolute;
  //top: 50%;
  //-webkit-transform: translateY(-50%);
  //-ms-transform: translateY(-50%);
  transform: translateY(45%);
  transition: 0.3s;
}
.mySlider button:hover{
  opacity: 0.5;
}
.owl-carousel .owl-nav button img{
  width: 2.8rem;
}
.owl-carousel .owl-nav button.owl-prev{
  left: 0rem;
}
.owl-carousel .owl-nav button.owl-next{
  right: -2rem;
}

.mySlider{
  width: 100%;
  display: -webkit-box;
}

.img-fluid{
  height: 350px;
}

span.text-h5.font-weight-thin{
  text-transform: uppercase;
  font-weight: 300!important;
}

.text2{
  color: #dcae58!important;
  font-weight: 800;
  font-size: 1.2rem!important;
}

.d-flex.align-center.justify-center.col{
  text-align: center;
}

.underline{
  font-weight: 800;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 1.1;
  position: relative;
  margin-top: 1rem;
  display: inline-block;
  padding-bottom: 0.7rem;
  margin-bottom: 15px;
}
.underline::before{
  position: absolute;
  content: '';
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 80%;
  background-color: #fff;
  height: 0.1rem;
}

.owl-item{
  margin-right: 15px;
}
</style>
