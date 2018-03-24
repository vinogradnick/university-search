/* eslint-disable no-trailing-spaces */
import Secret from '@/api/SecretStorage'
import axios from 'axios'

export default{
  namespaced: true,
  state: {
    universitylist: [],
    locations: []
  },
  mutations: {
    LOAD_UNIVERSITIES_FROM_DB: (state, data) => {
      state.locations = data.univers.map((univer) => univer.location)
      state.universitylist = data.univers
    },
    LOAD_UNIVERSITIES_FROM_SECRET: (state) => {
      console.log('Загрузка из базы секрет')
      state.universitylist = Secret._univers
    }
  },

  actions: {

    loadUniversities: ({state, commit}) => {
      axios.get('https://vinogradnick.github.io/db.json')
        .then(response => {
          commit('LOAD_UNIVERSITIES_FROM_DB', response.data)
        })
        .catch(error => {
          commit('LOAD_UNIVERSITIES_FROM_SECRET')
        })
    }

  },
  getters: {
    getFilteredUniversities: (state) => {
      const subjects = state.selected_subjects
      const univer_subj = state.universitylist
    },
    ALL_UNIVERSITIES: (state) => {
      return state.universitylist
    },
    CURRENT_UNIVERSITY: (state) => {
      return (id) => {
        return state.universitylist.find(univer => univer.id === id)
      }
    },
    GET_STATES: (state) => {
      return state.universitylist
    },
    GET_LOCATIONS: (state) => {
      return state.locations
    }
  }
}
