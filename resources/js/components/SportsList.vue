<template>
  <div id="app">
    <div class="dates" v-for="group, groupName in groupsDate">
      <h3>{{groupName}}</h3>
      <div class="leagues" v-for="league, leagueName in groupsLeague(group)">
        <row>
          <span>{{leagueName}}</span>
          <img src="https://media.api-sports.io/football/leagues/140.png" style="width: 50px; vertical-align: middle;">
        </row>
        <div class="fixtures" v-for="fixture, fixtureName in groupsFixture(league)">
          <div class="fixture col-3">
            {{fixture[0][1]['teamA']}} <img :src="fixture[0][1]['logoTeam1']" style="width: 40px; vertical-align: middle;">
            -
            <img :src="fixture[0][1]['logoTeam2']" style="width: 40px; vertical-align: middle;"> {{fixture[0][1]['teamB']}}
          </div>
          <div class="bets col-5">
            <button class="bet" v-on:click="addToCart(fixture[0][1])">{{fixture[0][1]['teamA']}}: {{fixture[0][1]['odd']}}</button>
            <button class="bet" v-on:click="addToCart(fixture[1][1])">{{fixture[1][1]['id_bet_val']}}: {{fixture[1][1]['odd']}}</button>
            <button class="bet" v-on:click="addToCart(fixture[2][1])">{{fixture[0][1]['teamB']}}: {{fixture[2][1]['odd']}}</button>
          </div>
          <div class="bets" v-for="item in fixture" style="display: None">
            {{item[1]}}
          </div>
        </div>
      </div>
    </div>
    <div class="modal col-3" style="text-align: center;">
      <div v-for="element in cart" style="border: 1px solid #e8e9eb; background-color: #1d2636; padding: 10px;">
        <span>
          {{element['teamA']}} - {{element['teamB']}}
        </span>
        <br>
        <b>
          {{element['bet_category_name']}} : {{element['id_bet_val']}}
        </b>
        <b>
          {{element['odd']}}
        </b>
      </div>
      <div class="total">
        <input v-model="mise" placeholder="Saisis ta mise" style="width:310px; text-align:center; margin-top:10px; margin-bottom: 10px;"/>
        <span style="padding: 5px;">Cote total: {{ computeTotalBet }}</span>
        <br>
        <span style="padding: 5px;">Gain possible: {{computePossibleWin}}</span>
      </div>
      <button class="valide" v-on:click="confirmBet">Valider le pari</button>
    </div>
  </div>


</template>

<script>
import axios from 'axios';

export default {
  name: "SportsList",
  data() {
    return {
      datas: [],
      cart: [],
      mise: 0,
    }
  },
  computed:{
    groupsDate(){
      return this.groupBy(this.datas, 'game_date')
    },

    computeTotalBet(){
      let total = 1;
      if(this.cart.length === 0) return 0
      else{
        this.cart.forEach(item => {
          total = total*item.odd;
        });
        return total.toFixed(2);
      }
    },

    computePossibleWin(){
      return (this.mise * this.computeTotalBet).toFixed(2)
    }
  },

  methods: {
    getDates(){
      axios.get('api/sports/display')
          .then((response)=>{
            //this.dates = [...new Set(Object.values(response.data).map(item => item.game_date))];
            this.datas = Object.keys(response.data).map((key) => [Number(key), response.data[key]]);
          });
      },

    groupBy(array, key){
      const result = {}
      array.forEach(item => {
        if (!result[item[1][key]]){
          result[item[1][key]] = []
        }
        result[item[1][key]].push(item)
      })
      return result
    },

    groupsLeague(myArr){
      return this.groupBy(myArr, 'league')
    },

    groupsFixture(myArr){
      return this.groupBy(myArr, 'id_fixture')
    },

    userExists(data) {
      return this.cart.some(function(el) {
        return el.id_fixture === data.id_fixture
      });
    },

    addToCart(data){
      if(!this.userExists(data)){
        this.cart.push(data)
      }
      else{
        this.cart.splice(this.cart.findIndex(item => item.id_fixture === data.id_fixture), 1)
      }
    },
    confirmBet(){
      axios.post('api/sports/validate', {
        betAmount: this.mise,
        betOdd: this.computeTotalBet,
        isActive: 1,
        result: 1,
        betComponent: this.cart
      }).then(function (response) {
        console.log(response);
        window.location.reload();
      }).catch(function (error) {
            console.log(error);
      });
    }
  },

  async created() {
    this.getDates()
  }
}
</script>

<style scoped>
  .fixtures{
    display: flex;
  }

  .fixture{
    text-align: center;
  }

  .bet{
    margin: 15px;
    background: #fc0;
    color: black;
    border-radius: .4rem;
    padding: .4rem .7rem;
  }

  .dates{
    margin-bottom: 20px;
  }

  .valide{
    margin: 15px;
    background: #00aaeb;
    border-radius: .4rem;
    padding: .4rem .7rem;
  }
</style>