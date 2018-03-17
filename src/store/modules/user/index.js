import Secret from '../../../api/SecretStorage'

export default{
  namespaced: true,

  state: {
    selected_univers: [],
    selected_subjects: [],
    selected_educationPrograms: [],
    selected_professions: [],
    user_location: 'all',
    ege_value: 0,
    subjects: [
      {
        name: 'Биология',
        value: 0,
        required: false,
        selected: false
      },
      {
        name: 'География',
        value: 0,
        required: false,
        selected: false

      },
      {
        name: 'Иностранный язык',
        value: 0,
        required: false,
        selected: false

      },
      {
        name: 'Информатика',
        value: 0,
        required: false,
        selected: false

      },
      {
        name: 'История',
        value: 0,
        required: false,
        selected: false

      },
      {
        name: 'Литература',
        value: 0,
        required: false,
        selected: false

      },
      {
        name: 'Математика',
        value: 0,
        required: false,
        selected: true

      },
      {
        name: 'Обществознание',
        value: 0,
        required: false,
        selected: false

      },
      {
        name: 'Русский язык',
        value: 0,
        required: false,
        selected: true
      },
      {
        name: 'Физика',
        value: 0,
        required: false,
        selected: false
      },
      {
        name: 'Химия',
        value: 0,
        required: false,
        selected: false
      }
    ]
  },
  actions: {
    selected_subj: ({commit, state}) => {
      commit('selectSubjects', state)
      commit('selectUniversities', state)
    }
  },
  mutations: {
    // Выбор предметов
    selectSubjects: function (state) {
      let ege = 0
      state.selected_subjects = []
      for (let i = 0; i < state.subjects.length; i++) {
        if (state.subjects[i].selected === true) {
          state.selected_subjects.push(state.subjects[i])
          ege += Number(state.subjects[i].value)
        }
      }
      state.ege_value = ege
    },
    refreshSubjects: function (state) {
      for (let i = 0; i < state.subjects.length; i++) { state.subjects[i].value = 0 }
    },
    // Получить список выбранных университетов
    selectUniversities: function (state,rootState) {
      // todo сделать выборку университетов для поиска
      console.log(state.ege_value)
      let universities = Secret._univers.filter(univer => {
        return Number(univer.average_ege) <= Number(state.ege_value)
      })
      console.log(universities)
      state.selected_univers = universities
    }
  },
  getters: {
    get_subjects (state) {
      return state.subjects
    },

    get_mathematics: (state) => {
      return state.subjects[6]
    },
    get_russian: (state) => {
      return state.subjects[8]
    },
    selectedUniversities: (state) => state.selected_univers.length === 0 ? null : state.selected_univers
  }

}
