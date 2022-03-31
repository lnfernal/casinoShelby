<template>
  <main class="overflow-hidden">
    <!-- contenu area -->
    <div class="contenu_area">
      <div class="container">
        <div class="text-center">
          <h2 class="title">VOUS AVEZ UNE QUESTION ?</h2>
          <p class="sub_title">N’hésitez pas à nous contacter</p>
        </div>
        <div class="contenu_box contact mx-auto">
          <div class="row">
            <div class="col-lg-5">
              <p class="mt_20"><strong>Notre équipe support est à votre entière disposition tous les jours de la semaine de 9h à 21h afin de répondre à l'ensemble de vos demandes.</strong></p>
              <div class="social_box mt_30 justify-content-center">
                <a href="#"><img src="/images/t2.svg" alt=""></a>
                <a href="#"><img src="/images/r2.svg" alt=""></a>
                <a href="#"><img src="/images/tele2.svg" alt=""></a>
              </div>
            </div>
            <div class="col-lg-7">
              <form action="/api/sendemail/send" method="post">
                <div class="row">
                  <div class="col-sm-6 mt_20">
                    <label for="name">Nom</label>
                    <input type="text" name="name" id="name">
                  </div>
                  <div class="col-sm-6 mt_20">
                    <label for="lname">Prénom</label>
                    <input type="text" name="lname" id="lname">
                  </div>
                  <div class="col-sm-6 mt_20">
                    <label for="email">Adresse email</label>
                    <input type="email" name="email" id="email">
                  </div>
                  <div class="col-sm-6 mt_20">
                    <label for="phn">Téléphone</label>
                    <input type="tel" name="phn" id="phn">
                  </div>
                  <div class="col-12 mt_20">
                    <label for="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                  </div>
                  <div class="col-12 text-right mt_15">
                    <button type="submit" class="sub_btn">VALIDER</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- faq area -->
    <div class="faq_area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="row align-items-center">
              <div class="col-lg-5 col-md-3 text-center mt_20">
                <h2 class="title v2">FAQ</h2>
              </div>
              <div class="col-lg-7 col-md-9 mt_20">
                <div class="accordion" id="faq">
                  <div class="question">
                    <button class="text-left" type="button" data-toggle="collapse" data-target="#one" aria-expanded="false">
                      Comment puis-je m'inscrire sur Shelby Casino ?
                    </button>
                    <div id="one" class="collapse" data-parent="#faq">
                      <p>L'inscription est entièrement gratuite et est accessible à toutes les personnes majeures en cliquant ici. (https://www.shelbycasino.com/register)</p>
                    </div>
                  </div>
                  <div class="question">
                    <button class="text-left" type="button" data-toggle="collapse" data-target="#two" aria-expanded="false">
                      Puis-je réaliser un dépot avec mes TSY?
                    </button>
                    <div id="two" class="collapse" data-parent="#faq">
                      <p>Actuellement, nous acceptons uniquement les cryptomonnaies BNB et BUSD (réseau BEP20)</p>
                    </div>
                  </div>
                  <div class="question">
                    <button class="text-left" type="button" data-toggle="collapse" data-target="#three" aria-expanded="false">
                      Je souhaite réaliser une demande de partenariat
                    </button>
                    <div id="three" class="collapse" data-parent="#faq">
                      <p>Vous pouvez contacter l'équipe en charge des partenariats par email à l'adresse partners@shelby.casino</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import { config } from '~/plugins/config'
import Form from 'vform'
import FormMixin from '~/mixins/Form'
import OAuth from '~/components/OAuth'
import { mapState } from 'vuex'
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: "contact.vue",
  //middleware: 'guest',

  components: { OAuth, VueRecaptcha },

  mixins: [FormMixin],

}
</script>

<style scoped>

</style>