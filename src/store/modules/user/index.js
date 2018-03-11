
const state = {

  selected_univers: [],
  selected_subjects: [],
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

}
const getters = {
  get_subjects (state) {
    return state.subjects
  },

  get_mathematics: (state) => {
    return state.subjects[6]
  },

  get_russian: () => {
    return state.subjects[8]
  },
  GET_UNIVERSTIY_BY_EGE_VALUE: function (state) {
    const list = state.universitylist.educationPrograms.filter(subj => subj.subject === state.selected_subjects)
    console.log(list)
    return list
  }

}

const actions = {

  selected_subj: ({commit, state}) => {
    commit('SELECT_SUBJECTS', state)
    commit('SELECTED_UNIVERSITIES', state.selected_subjects)
  }
}
const mutations = {

  SELECT_SUBJECTS: function (state) {
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
  SELECTED_UNIVERSITIES: (state, selected_subjects) => {
    state.selected_univers = state.universitylist.filter(univer => univer.educationPrograms.educationPrograms.subjects === selected_subjects)
    console.log(state.selected_univers)
  }

}

export default{
  state,
  getters,
  actions,
  mutations
}
