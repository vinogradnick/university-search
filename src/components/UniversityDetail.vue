<template>
  <v-layout v-if=university>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex xs12>
          <h3 class="display-3" >
            {{university.name}}
          </h3>
          <br>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3" >
            <v-layout row wrap align-center>
              <v-flex xs4>
                <p class="headline">Стоимость обучения: 400 000 р</p>
              </v-flex>
              <v-flex xs4>
                <p class="headline">Образовательных программ: 150</p>
              </v-flex>
              <v-flex xs4>
                <p class="headline">Проходной бал: 290</p>
              </v-flex>
            </v-layout>
          </div>
          <v-divider class="my-3"/>
          <h3 class="text-xs-center display-1">Образовательные программы</h3>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-list-tile
                avatar
                ripple
                @click="toggle(index)"
                :key="item.title"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-icon
                    color="grey lighten-1"
                    v-if="selected.indexOf(index) < 0"
                  >star_border</v-icon>
                  <v-icon
                    color="yellow darken-2"
                    v-else
                  >star</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length" :key="index"/>
            </template>
          </v-list>
        </v-flex>

      </v-layout>

    </v-container>
  </v-layout>

</template>
<script type="text/javascript">
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'UniversityDetail',

  computed: {
    // ...mapGetters({
    //   educationPrograms: 'getEducationProgram'
    //
    // }),
    university: function () {
      // succses university_detail view for this unviersirty
      const routeParams = this.$route.params.id
      return this.$store.getters.currentUniversity(Number(routeParams))
    }

  },
  data: function () {
    return {
      tabs: null,
      selected: [2],
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
  }
}
</script>

<style type="text/css">

</style>
