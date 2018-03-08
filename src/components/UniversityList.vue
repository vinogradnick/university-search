<template>
 <v-flex xs12>
        <v-card>

    <v-card-title>
        Список университетов
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Поиск университета"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
>
      <template slot="items" slot-scope="props" >
        <router-link  tag="tr" to='university/1'>
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

export default {
  name:'UniversityList',
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
          { text: 'Ссылка на сайт', value: 'link' },
        ],
        items: [
          {
              name :'Higher school of Economics',
              egeval:'290',
              price:'100 000',
              places:25,
              link: "link"
          },
           {
              name :'Московский государственный университет',
              egeval:'290',
              price:'240 000',
              places:215
          }
        ]
      }
    }
  }
</script>
