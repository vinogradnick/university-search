<template>
<v-layout>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex xs12>
          <h3 class="display-3">Название университета</h3>
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
		    <v-divider class="my-3"></v-divider>
         <h3 class="text-xs-center display-1">Образовательные программы</h3>
		 
		 <br>

<v-tabs fixed-tabs>
    <v-tab >
      Балакалавриат 
    </v-tab>
	<v-tab >
      Магистратура
    </v-tab>
	<v-tab >
      Специалитет
    </v-tab>


	<v-tab-item :key="1">
        <v-card flat>
          <v-card-text>
			  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
		  </v-card-text>
        </v-card>
      </v-tab-item>
	  <v-tab-item :key="2">
        <v-card flat>
          <v-card-text>2</v-card-text>
        </v-card>
      </v-tab-item>
	  <v-tab-item :key="3">
        <v-card flat>
          <v-card-text></v-card-text>
        </v-card>
      </v-tab-item>
  </v-tabs>

    
        </v-flex>
		
		
      </v-layout>
	  
    </v-container>
</v-layout>
 
  
  </template>
<script type="text/javascript">
export default {
	name:'UniversityDetail',
	data(){
	return{
		        tabs: null,
				 headers: [
          {
            text: 'Название образовательной программы',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: '	Количество мест', value: 'calories' },
          { text: 'Стоимость обучения', value: 'fat' },
          { text: 'Количество мест', value: 'carbs' },
          { text: 'Проходной бал (Бюджет)', value: 'protein' },
          { text: 'Проходной бал(Коммерция)', value: 'iron' }
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ],


	}
},
}	
</script>

<style type="text/css">
	
</style>