<template>
  <v-layout v-if=university>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex xs12>
          <h3 class="display-3 text-xs-center" >
            {{university.name}}
          </h3>
          <br>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"/>
          <div class="title mb-3"  >
            <v-layout row wrap >
              <v-flex xs4 align-center>
                <p class="headline">Стоимость обучения: 400 000 р</p>
              </v-flex>
              <v-flex xs4 align-center>
                <p class="headline">Образовательных программ: 150</p>
              </v-flex>
              <v-flex xs4 align-center>
                <p class="headline">Проходной бал: 290</p>
              </v-flex>
            </v-layout>
          </div>
          <v-divider class="my-3"/>
          <h3 class="text-xs-center display-1">Образовательные программы</h3>
          <v-list two-line>
            <template v-for="program in university.educationPrograms">
              <v-list-tile
                avatar
                ripple
                @click="toggle(program)"
                :key="program.id"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ program.name }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ program.about}}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ program.priceEducation }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>Код программы: {{ program.edu_code }}</v-list-tile-action-text>

                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
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
      educationPrograms: 'get_programs'

    }),
    university: function () {
      // succses university_detail view for this unviersirty
      const routeParams = this.$route.params.id
      return this.$store.getters.currentUniversity(Number(routeParams))
    }

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
