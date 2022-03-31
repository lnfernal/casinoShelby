<template>
  <v-carousel
    :cycle="slider.cycle && slidesCount > 1"
    :hide-delimiters="!slider.pagination || slidesCount === 1"
    :show-arrows="slider.navigation && slidesCount > 1"
    :interval="slider.interval * 1000"
    hide-delimiter-background
    :height="slider.height"
  >
    <v-carousel-item
      v-for="(slide, i) in slider.slides"
      :key="i"
    >
      <v-parallax :src="slide.image.url" :height="slider.height">
        <v-row align="center" justify="center" class="darken-60">
          <v-col class="text-center col-sm-12 col-lg-5 col-md-5 offset-lg-5">
            <v-img :src="sliderLogoBg" class="imageBg" :alt="bg" />
            <h4 v-if="slide.title" class="display-1">
              {{ slide.title }}
            </h4>
            <h3 v-if="slide.subtitle" class="display-2">
              100 USD
            </h3>
            <h1 v-if="slide.subtitle" class="display-3">
              <!--{{ $t('Gift') }}-->
              OFFERTS
            </h1>
            <div v-if="slide.link.title" class="mt-5">
              <v-btn color="primary carouselButton" large :href="slide.link.url">
                <v-img :src="sliderLogoRegister" :alt="appName" />
                {{ slide.link.title }}
              </v-btn>
              <v-btn color="primary carouselButton" large :href="slide.link.url">
                <v-img :src="sliderLogoVideo" :alt="appName" />
                Démo Vidéo
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { config } from '~/plugins/config'

export default {
  computed: {
    slider () {
      return config('settings.content.home.slider')
    },
    slidesCount () {
      return this.slider ? this.slider.slides.length : 0
    },
    sliderLogoRegister(){
      return config('settings.content.slider.logoRegister')
    },
    sliderLogoVideo(){
      return config('settings.content.slider.logoVideo')
    },
    sliderLogoBg(){
      return config('settings.content.slider.logoBg')
    }
  }
}
</script>
<style lang="scss" scoped>
.darken-60 {
  background: rgba(0, 0, 0, 0.6);
}
</style>
