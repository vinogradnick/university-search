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
      id: 1,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0'

        }

      ]

    },
    {
      id: 2,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0'

        }

      ]

    },
    {
      id: 3,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0'

        }

      ]

    },
    {
      id: 4,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0'

        }

      ]

    },
    {
      id: 5,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0'

        }

      ]

    },
    {
      id: 6,
      name: 'Higher school of Economics',
      about: 'about university',
      priceEducation: '100 000',
      average_priceEducation: '1000',
      placeEducation: 25,
      average_ege: '75.5',
      website_link: 'link',

      educationPrograms: [
        {
          name: 'education program name',
          about: 'about education programs',
          priceEducation: 10000,
          edu_code: '0.0.0'

        }

      ]

    }
  ],
  professions: [],
  // selected university list
  selected_univers: []

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
  get_russian () {
    return state.subjects[8]
  },
  currentUniversity (state) {
    return (id) => {
      return state.universitylist.find(univer => univer.id === id)
    }
  },


}

export default{
  state,
  mutations,
  getters,
  actions
}
