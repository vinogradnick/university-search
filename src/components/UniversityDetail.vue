<template>
  <v-layout v-if=university>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex xs12>
          <h4 class="display-2 text-xs-center" >
            {{university.name}}
          </h4>
          <br>
          <br>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"/>
          <v-divider class="my-3"/>
          <h3 class="text-xs-center display-1">Образовательные программы</h3>
          <br>
          <br>
          <v-card flat color="grey lighten-3">
            <v-container fluid grid-list-md>
              <v-data-iterator
                content-tag="v-layout"
                row
                wrap
                :items="university.educationPrograms"
                >
                <v-flex
                  slot="item"
                  slot-scope="props"
                  xs12
                  sm6
                  md4
                  lg3
                >
                  <v-card>
                    <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
                    <v-divider/>
                    <v-list dense>
                      <v-list-tile>
                        <v-list-tile-content>Описание</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ props.item.about }}</v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Количество программ обучения:</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ props.item.countPrograms }}</v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Количество университетов</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ props.item.countUniversities }}</v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Стоимость обучения</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ props.item.priceEducation}}</v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>Рейтинг</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{ props.item.rate}}</v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-data-iterator>
            </v-container>
          </v-card>
        </v-flex>

      </v-layout>

    </v-container>
  </v-layout>

</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'UniversityDetail',

  computed: {
    ...mapGetters({

      programsEducation: 'getEducationPrograms',
      professionList: 'getProfessionList'

    }),
    university: function () {
      // succses university_detail view for this unviersirty
      const routeParams = this.$route.params.id
      return this.$store.getters.currentUniversity(Number(routeParams))
    },
  },
  data: function () {
    return {
      tabs: null,
      items: [
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          title: 'Ali Connors',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: '6 hr',
          headline: 'Oui oui',
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?'
        },
        {
          action: '12 hr',
          headline: 'Birthday gift',
          title: 'Trevor Hansen',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
        },
        {
          action: '18hr',
          headline: 'Recipe to try',
          title: 'Britta Holt',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
        }
      ]

    }
  },
  methods: {
    ...mapActions({

    })
  }
}
</script>

<style type="text/css">

</style>
