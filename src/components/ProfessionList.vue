<template>
  <v-flex xs12>
    <v-tabs right>
      <v-tab>
        <v-icon>list</v-icon>
      </v-tab>
      <v-tab>
        <v-icon>grid_on</v-icon>
      </v-tab>
      <br>
      <v-tab-item :key="1">
        <v-list three-line>
         <!-- Список профессий шаблон-->

          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index" />
            <v-list-tile avatar v-else :key="item.title">
              <v-list-tile-avatar> <img :src="item.avatar"> </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title" />
                <v-list-tile-sub-title v-html="item.subtitle" /> </v-list-tile-content>
            </v-list-tile>
          </template>
          <!--     ____          -->
        </v-list>
      </v-tab-item>
      <v-tab-item :key="2">
        <v-card flat>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs4>
                <v-card>
                  <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px"> </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                      <div>Located two hours south of Sydney in the
                        <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs4>
                <v-card>
                  <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px"> </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                      <div>Located two hours south of Sydney in the
                        <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs4>
                <v-card>
                  <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px"> </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                      <div>Located two hours south of Sydney in the
                        <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-flex>
</template>
<script>
import {
  mapGetters, mapActions
}
  from 'vuex'
export default {
  name: 'ProfessionList',
  computed: {...mapGetters({
    professionList: 'getProfessionList'
  })
  },
  data () {
    return {
      items: [{
        header: 'Список профессий'
      }, {
        avatar: '/static/doc-images/lists/1.jpg',
        title: 'Архитектор',
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      }, {
        divider: true,
        inset: true
      }, {
        avatar: '/static/doc-images/lists/2.jpg',
        title: 'Юрист <span class="grey--text text--lighten-1">4</span>',
        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      }, {
        divider: true,
        inset: true
      }, {
        avatar: '/static/doc-images/lists/3.jpg',
        title: 'Экономист',
        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      }, {
        divider: true,
        inset: true
      }, {
        avatar: '/static/doc-images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
      }, {
        divider: true,
        inset: true
      }, {
        avatar: '/static/doc-images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      }]
    }
  },
  methods: {...mapActions({
    orderList: 'professionlistOrder'
  })
  }
}
</script>
