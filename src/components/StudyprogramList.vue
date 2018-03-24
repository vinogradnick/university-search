<template>
  <v-layout row>
    <v-flex xs12  >
  <v-list three-line>
    <template v-for="item in programs">
      <v-list-tile
        avatar
        ripple
        @click=""
        :key="item.name"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          <v-list-tile-sub-title>Стоимость обучения:&nbsp;&nbsp;{{ item.priceEducation }} Бюджетные места:{{item.freeCountPlaces}} Коммерческие места:{{item.CountPlaces}} </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-list-tile-action-text>{{ item.edu_code }}</v-list-tile-action-text>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider/>
    </template>
  </v-list>
    </v-flex>
  </v-layout>
</template>
<script>
import {mapGetters} from 'vuex'
import Secret from '@/api/SecretStorage'
export default {
  name: 'StudyprogramList',
  computed: {
    ...mapGetters({
      programs: 'studyprogram/all_programs'
    })
  },
  data () {
    return {

    }
  }
}
</script>
