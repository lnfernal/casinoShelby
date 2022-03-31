<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 12 : 2">
      <router-link :to="{ name: 'game', params: slug ? { game: id, slug } : { game: id } }">
        <div class="hamid">
          <v-img
            :src="banner"
            height="130px"
            class="game-banner align-center text-center"
            :class="{ hover }"
          >
            <template v-slot>
              <v-btn
                fab
                color="primary"
                class="play-button"
                :class="{ hover }"
              >
                <v-icon color="grey lighten-5">
                  mdi-play
                </v-icon>
              </v-btn>
            </template>
            <template v-slot:placeholder>
              <v-skeleton-loader type="image" />
            </template>
          </v-img>
          <div class="text_box">
            <h4>{{ (name.split(" "))[0] }}</h4>
            <h2>{{ (name.split(" "))[1] }}</h2>
          </div>
        </div>
      </router-link>
      <!--
      <v-card-title>
        {{ name }}
      </v-card-title>

      <v-card-text>
        <v-btn color="primary" :to="{ name: 'game', params: slug ? { game: id, slug } : { game: id } }">
          {{ $t('Play') }}
        </v-btn>
      </v-card-text>
      -->
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    banner: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.game-banner {
  &.v-image {
    &::v-deep {
      .v-responsive__sizer {
        height: 100% !important;
        transition: all 0.5s;
        background: rgba(0, 0, 0, 0);
      }
    }

    &.hover {
      &::v-deep {
        .v-responsive__sizer {
          background: rgba(0, 0, 0, 0.55) !important;
        }
      }
    }

    .play-button {
      transition: all 0.5s;
      opacity: 0;

      &.hover {
        opacity: 1;
      }
    }
  }
}
</style>
