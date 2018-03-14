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
          <v-list-tile :key="item.text" v-on:click="">
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
      color="blue darken-2"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
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
        item-text="name"
        class="hidden-sm-and-down"
      />
      <v-spacer/>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
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
          <v-spacer/>
          <v-toolbar-items>
            <v-btn dark flat v-on:click="selected">Сохранить данные</v-btn>
          </v-toolbar-items>
          <v-menu bottom right offset-y>
            <v-btn slot="activator" dark icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="(item, i) in items" :key="i">
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
                      v-bind:label=mathematics.name
                      v-model.number=mathematics.value
                      :rules="rule_value"
                      max="100"
                      min="0"
                      required
                      type="number"
                    />
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      v-bind:label=russian.name
                      v-model.number=russian.value
                      :rules="rule_value"
                      max="100"
                      min="0"
                      required
                      type="number"
                    />
                  </v-flex>
                </v-layout>
              </v-container>

            </v-form>
          </v-list>

          <v-divider/>
          <v-list three-line subheader>
            <v-subheader>Профильные предметы</v-subheader>
            <div v-for="subject in subjects" v-bind:key=subject.name>
              <v-list-tile avatar>
                <v-checkbox v-model="subject.selected" hide-details class="shrink mr-2"/>
                <v-text-field v-bind:label=subject.name v-model.number=subject.value :disabled="!subject.selected"
                              type="number" max="100" min="0" />
              </v-list-tile>
            </div>
          </v-list>
        </v-card-text>
        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {

  name: 'App',
  computed: mapGetters({
    subjects: 'get_subjects',
    mathematics: 'get_mathematics',
    russian: 'get_russian',
    states: 'GET_STATES',
    univers: 'GET_UNIVERSTIY_BY_EGE_VALUE'
  }),
  data: () => {
    return {
      dialog: false,
      drawer: null,
      enabled: false,
      a1: null,

      items: [
        {icon: 'home', text: 'Главная', route: '/'},
        {icon: 'school', text: 'Университеты', route: '/unviversitylist'},
        {icon: 'content_cut', text: 'Професси', route: '/professionlist'},
        {icon: 'local_offer', text: 'Программы обучения', route: '/studyprogramlist'}
      ],
      valid: true,
      rule_value: [
        v => {
          return Number(v) <= 100 || 'must be number'
        }
      ]
    }
  },
  methods: {

    ...mapActions({
    // TODO save data_form => university_USER STATE
    // TOdo make filtration universtiy by ege values,
    // Todo make reset order university list
      selected: 'selected_subj'

    })

  }
}
</script>
