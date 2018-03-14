<template>
  <v-flex xs12>
    <v-tabs right>
      <v-tab>
        Список&nbsp;&nbsp;<v-icon>list</v-icon>
      </v-tab>
      <v-tab>
      Карточки&nbsp;&nbsp;<v-icon>grid_on</v-icon>
      </v-tab>
      <br>
      <v-tab-item :key="1">
        <v-list two-line>
          <template v-for="profession in professionList">
            <v-list-tile
              avatar
              ripple
              @click="toggle(profession)"
              :key="profession.id"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ profession.name }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ profession.about }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>Стоимость обучения: {{ profession.priceEducation }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <router-link tag="a" v-bind:to="'profession/'+profession.id">
                <v-list-tile-action-text>{{profession.rate}}</v-list-tile-action-text>
                </router-link>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="profession.id + 1 < professionList.length" :key="profession.id"/>
          </template>
        </v-list>
      </v-tab-item>
      <v-tab-item :key="2">
        <v-card flat>
          <v-container fluid grid-list-md>
              <v-data-iterator
                content-tag="v-layout"
                row
                wrap
                :items="professionList"
                :rows-per-page-items="rowsPerPageItems"
                :pagination.sync="pagination"
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
  data: function () {
    return {}
  },
  methods: {...mapActions({
    orderList: 'professionlistOrder'
  })
  }
}
</script>
