<template>
  <v-container class="mt-10">
    <SectionOne id="section-game2"/>
    <v-row>
      <v-col class="text-center">
        <h3 class="display-1 font-weight-thin">
          <img src="images/1jeuxparsemaine.png">
        </h3>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <div class="col-lg-3 col-md-6 mt_30">
        <div class="box v2">
          <img src="images/img4.png" class="left" alt="">
          <div class="text_box">
            <h4>SLOT</h4>
            <h2>SHELBY</h2>
            <p><span>COMING SOON -</span> J7 H3</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mt_30">
        <div class="box v2">
          <img src="images/img6.png" alt="">
          <div class="text_box">
            <h4>SIC</h4>
            <h2>BO</h2>
            <p><span>COMING SOON -</span> J15 H3</p>
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Shuffle from 'shufflejs'
export default {
  name: "IncommingGame"
}
</script>

<style lang="scss" scoped>
.v2 span {
  color: #dcae58;
}
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