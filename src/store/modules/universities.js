const state = {
  subjects: [
    {
      name: 'biology',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'geography',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'english',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'informatics',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'history',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'literature',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'mathematics',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'social',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'russian',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'physics',
      value: 0,
      required: false,
      selected: false

    },
    {
      name: 'chemistry',
      value: 0,
      required: false,
      selected: false

    }

  ],
  universitylist: [
    {
      name: 'Higher school of Economics',
      egeval: '290',
      price: '100 000',
      places: 25,
      link: 'link'
    },
    {
      name: 'Московский государственный университет',
      egeval: '290',
      price: '240 000',
      places: 215,
      studyprograms: []
    }
  ],
  professions: [],

  selected_universitites: [

  ]
}

const mutations = {

  setData: (state, {type, data}) => {
    console.log(data)
    return state[type] = data
  }

}

const actions = {
  searching () {
    console.log('change')
    commit('setData', {type: 'universitylist', data: null})
  }

}

const getters = {
  getNesesary: function (state) {
    const subj = state.subjects
    return state.universitylist.map()
  },
  get_subjects () {
    return state.subjects
  },
  get_states () {
    return state.universitylist
  },
  get_mathematics () {
    return state.subjects[6]
  },
  all_univers () {
    return state.universitylist
  },
  get_russian(){
    return state.subjects[8]
  }

};

export default{
  state,
  mutations,
  getters,
  actions
}
