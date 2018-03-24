<template>
  <v-container grid-list-xl text-xs-center v-if="university">

    <v-parallax src="https://i0.photo.2gis.com/images/branch/16/2251799829293480_cb73.jpg" height="300">
      <br><br><br><br>

    </v-parallax>
    <v-card dark color="purple">
      <v-card-text class="px-0">
       <p class="headline">
         {{university.name}}
       </p>
      </v-card-text>
    </v-card>
    <br>
    <v-card>
      <v-card-text class="px-0">
        <h4>{{university.about}}</h4>
        <br>
        <p>Контактная информация</p>
      </v-card-text>
    </v-card>
    <br>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs4>
            <p>Стоимость обучения</p>
          </v-flex>
          <v-flex xs4>
            <p>Количество мест</p>
          </v-flex>
          <v-flex xs4>
            <p>Образовательные программы</p>
          </v-flex>
        </v-layout>
      </v-container>

    </v-card>
    <br>
    <v-card>
      <v-container>
      <v-tabs fixed-tabs>
        <v-tab>
         Профессии
        </v-tab>
        <v-tab>
          Образовательные программы
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <br>
            <v-data-iterator
              content-tag="v-layout"
              row
              wrap
              :items="university.professions"
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
                  <v-list dense >
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
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <br>
            <v-list three-line>
              <template v-for="item in university.educationPrograms">
                <v-list-tile
                  avatar
                  ripple
                  @click="toggle(item)"
                  :key="item.name"
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                    <v-list-tile-sub-title><span class="text--primary">{{ item.about }}</span></v-list-tile-sub-title>
                    <v-list-tile-sub-title>Стоимость обучения:&nbsp;&nbsp;{{ item.priceEducation }} Бюджетные места:{{item.freeCountPlaces}} Коммерческие места:{{item.CountPlaces}} </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text>{{ item.edu_code }}</v-list-tile-action-text>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < items.length" :key="item"/>
              </template>
            </v-list>
          </v-card>
        </v-tab-item>
      </v-tabs>
      </v-container>
    </v-card>
  </v-container>

  <!--<v-layout v-if=university>-->
    <!--<v-container fill-height>-->
      <!--<v-layout align-center>-->
        <!--<v-flex xs12>-->
          <!--<h4 class="display-2 text-xs-center" >-->
            <!--{{university.name}}-->
          <!--</h4>-->
          <!--<br>-->
          <!--<br>-->
          <!--<span class="subheading">Описание университета</span>-->
          <!--<v-divider class="my-3"/>-->
          <!--<v-divider class="my-3"/>-->
          <!--<h3 class="text-xs-center display-1">Образовательные программы</h3>-->
          <!--<br>-->
          <!--<br>-->
          <!--<v-card flat color="grey lighten-3">-->
            <!--<v-container fluid grid-list-md>-->
              <!--<v-data-iterator-->
                <!--content-tag="v-layout"-->
                <!--row-->
                <!--wrap-->
                <!--:items="university.educationPrograms"-->
                <!--&gt;-->
                <!--<v-flex-->
                  <!--slot="item"-->
                  <!--slot-scope="props"-->
                  <!--xs12-->
                  <!--sm6-->
                  <!--md4-->
                  <!--lg3-->
                <!--&gt;-->
                  <!--<v-card>-->
                    <!--<v-card-title><h4>{{ props.item.name }}</h4></v-card-title>-->
                    <!--<v-divider/>-->
                    <!--<v-list dense>-->
                      <!--<v-list-tile>-->
                        <!--<v-list-tile-content>Описание</v-list-tile-content>-->
                        <!--<v-list-tile-content class="align-end">{{ props.item.about }}</v-list-tile-content>-->
                      <!--</v-list-tile>-->
                      <!--<v-list-tile>-->
                        <!--<v-list-tile-content>Количество программ обучения:</v-list-tile-content>-->
                        <!--<v-list-tile-content class="align-end">{{ props.item.countPrograms }}</v-list-tile-content>-->
                      <!--</v-list-tile>-->
                      <!--<v-list-tile>-->
                        <!--<v-list-tile-content>Количество университетов</v-list-tile-content>-->
                        <!--<v-list-tile-content class="align-end">{{ props.item.countUniversities }}</v-list-tile-content>-->
                      <!--</v-list-tile>-->
                      <!--<v-list-tile>-->
                        <!--<v-list-tile-content>Стоимость обучения</v-list-tile-content>-->
                        <!--<v-list-tile-content class="align-end">{{ props.item.priceEducation}}</v-list-tile-content>-->
                      <!--</v-list-tile>-->
                      <!--<v-list-tile>-->
                        <!--<v-list-tile-content>Рейтинг</v-list-tile-content>-->
                        <!--<v-list-tile-content class="align-end">{{ props.item.rate}}</v-list-tile-content>-->
                      <!--</v-list-tile>-->
                    <!--</v-list>-->
                  <!--</v-card>-->
                <!--</v-flex>-->
              <!--</v-data-iterator>-->
            <!--</v-container>-->
          <!--</v-card>-->
        <!--</v-flex>-->

      <!--</v-layout>-->

    <!--</v-container>-->
  <!--</v-layout>-->

</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import store from '@/store/index'
export default {
  name: 'UniversityDetail',

  computed: {
    ...mapGetters({
      programsEducation: 'getEducationPrograms',
      professionList: 'getProfessionList'
    }),
    university: function () { return store.state.university.universitylist.find(univer => univer.id === Number(this.$route.params.id)) }
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
