<template>
   <v-app id="inspire">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                         {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              v-on=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                   <router-link  tag="p" :to='{path:item.route}'>
                {{ item.text }}
                   </router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Поиск университета </span>
      </v-toolbar-title>
      <v-select
          :items="states"
          v-model="a1"
          label="Найти университет"
          autocomplete
          flat
        solo-inverted
        prepend-icon="search"
        class="hidden-sm-and-down"
        ></v-select>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height grey lighten-3>
        <v-layout  >
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    <v-btn
      fab
      bottom
      right
      color="red"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>search</v-icon>
    </v-btn>
     <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-bottom-transition"
        :overlay="false"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Баллы</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click.native="dialog = false">Сохранить данные</v-btn>
            </v-toolbar-items>
            <v-menu bottom right offset-y>
              <v-btn slot="activator" dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile v-for="(item, i) in items" :key="i" @click="">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-card-text>

            <v-list three-line subheader>
                <v-form v-model="valid" ref="form" lazy-validation>
              <v-subheader>Основные предметы</v-subheader>
              <v-container grid-list-md >
 <v-layout row wrap>
                <v-flex xs6>
       <v-text-field
      label="Математика"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
      </v-flex>
      <v-flex xs6>
       <v-text-field
      label="Русский язык"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
      </v-flex>
              </v-layout>
              </v-container>
             
              
                </v-form>
            </v-list>
            
            <v-divider></v-divider>
            <v-list three-line subheader>
              <v-subheader>Профильные предметы</v-subheader>
              <v-list-tile avatar>
                <v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox>
        <v-text-field label="Биология" :disabled="!enabled"></v-text-field>
              </v-list-tile>
              <v-list-tile avatar>
                <v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox>
        <v-text-field label="История" :disabled="!enabled"></v-text-field>
              </v-list-tile>
              
            </v-list>
          </v-card-text>
          <div style="flex: 1 1 auto;"/>
        </v-card>
      </v-dialog>
    
  </v-app>
</template>

<script>
export default {
  name: 'App',
    data: () => ({
      dialog: false,
      drawer: null,
      enabled: false,
      a1: null,
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
      items: [
        { icon: 'home', text: 'Главная', route: '/'},
        { icon: 'school', text: 'Университеты', route: '/unviversitylist'},
        { icon: 'content_cut', text: 'Професси' , route:'/professionlist'},
        { icon: 'local_offer', text: 'Программы обучения', route:'/studyprogramlist' },
      ],
       valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
       })
}
</script>
