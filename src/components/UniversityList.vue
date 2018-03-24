<template>
 <v-flex xs12 >
        <v-card align-center v-if="selectedUnivers !== null" class="elevation-20" >

    <v-card-title>
        Список найденых университетов
      <v-spacer/>
      <v-text-field
        append-icon="search"
        label="Поиск университета"
        single-line
        hide-details
        v-model="search"
      />
    </v-card-title>
      <v-data-table v-if="selectedUnivers !== null"
                    :headers="headers"
                    :items=selectedUnivers
                    :search="search"
                    rows-per-page-text="Количество на странице"
      >
      <template slot="items" slot-scope="props" >
        <router-link  tag="tr" v-bind:to="'university/'+props.item.id">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.average_ege }}</td>
        <td class="text-xs-right">{{ props.item.placeEducation }}</td>
        <td class="text-xs-right">{{ props.item.priceEducation}}</td>
        <td class="text-xs-right">{{ props.item.link }}</td>
        </router-link>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
         По вашему запросу "{{ search }}" нет результатов
      </v-alert>
    </v-data-table>
  </v-card>
   <v-card align-center v-else>

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
     <v-data-table v-if="selectedUnivers === null"
                   :headers="headers"
                   :items=universities
                   :search="search"
                   rows-per-page-text="Количество на странице"
     >
       <template slot="items" slot-scope="props" >
         <router-link  tag="tr" v-bind:to="'university/'+props.item.id">
           <td>{{ props.item.name }}</td>
           <td class="text-xs-right">{{ props.item.average_ege }}</td>
           <td class="text-xs-right">{{ props.item.placeEducation }}</td>
           <td class="text-xs-right">{{ props.item.priceEducation}}</td>
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
        { text: 'Проходной бал', value: 'average_ege' },
        { text: 'Количество мест', value: 'placeEducation' },
        { text: 'Стоимость обучения', value: 'priceEducation' },
        { text: 'Ссылка на сайт', value: 'link' }
      ]
    }
  },
  methods: {
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
    universities: 'university/ALL_UNIVERSITIES',
    selectedUnivers: 'user/selectedUniversities'
  })
}
</script>
