<template>
 <v-flex xs12>
        <v-card>
          <v-btn  color="success" v-on:click="load">Success</v-btn>

    <v-card-title>
        Список университетов
      <v-spacer/>
      <v-text-field
        append-icon="search"
        label="Поиск университета"
        single-line
        hide-details
        v-model="search"
      />
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items=universities
      :search="search"
>
      <template slot="items" slot-scope="props" >
        <router-link  tag="tr" v-bind:to="'university/'+props.item.id">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.egeval }}</td>
        <td class="text-xs-right">{{ props.item.places }}</td>
        <td class="text-xs-right">{{ props.item.price}}</td>
        <td class="text-xs-right">{{ props.item.link }}</td>
        </router-link>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
         По вашему запросу "{{ search }}" нет результатов
      </v-alert>
    </v-data-table>
  </v-card>
      </v-flex>

</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'UniversityList',
  data () {
    return {
      search: ' ',
      headers: [
        {
          text: 'Название университета',
          align: 'left',
          sortable: true,
          value: 'name'
        },

        { text: 'Проходной бал', value: 'egeval' },
        { text: 'Количество мест', value: 'places' },
        { text: 'Стоимость обучения', value: 'price' },
        { text: 'Ссылка на сайт', value: 'link' }
      ],
      items: [

      ]
    }
  },
  methods: {
    init: function () {
      this.loadData()
    },
    loadData: function () {
      this.$http.get('@/db.json').then((response) => {
        if (response.body) {
          console.log(response.body);
          this.locat = response.body
        }
      }, (response) => {
        this.error = response
      })
    },
    ...mapActions({
      // todo make router to university detail view
      // todo make sity order -> univesitylist
      // todo make
      searching: 'searching',
      load: 'loadFirebase'

    })
  },
  computed: mapGetters({
    // Todo make comparion with two - three universities on page
    // todo make
    universities: 'all_univers'
  })
}
</script>
