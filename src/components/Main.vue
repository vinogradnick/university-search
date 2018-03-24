<template>
   <v-flex xs12>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm12 class="my-3">
            <div class="text-xs-center">
              <h1 large class="display-1 "  >Поиск университетов по результатам ЕГЭ</h1>
              <br>
              <br>
                  <v-btn  large color="info" @click.stop="welcome">Найти университет</v-btn>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">fast_forward</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Быстро</div>
                    </v-card-title>
                    <v-card-text>

                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Просто</div>
                    </v-card-title>
                    <v-card-text>

                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Удобно</div>
                    </v-card-title>
                    <v-card-text>

                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
            <a href="https://github.com/vinogradnick" class="white--text">Powered by Vinogradov Nikita</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
  </v-flex>

</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Main',
  computed: {
    ...mapGetters({

    })
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      welcome: 'user/show_Welcome'
    })
  }
}
</script>
