const state = {

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
          edu_code: '0.0.0',
          subjects: [
            {
              name: 'mathematics',
              value: 170,
              selected: true

            }
          ]

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

  all_univers: (state) => {
    return state.universitylist
  },
  currentUniversity (state) {
    return (id) => {
      return state.universitylist.find(univer => univer.id === id)
    }
  },
  GET_STATES: (state) => {
    return state.universitylist
  }

}

export default{
  state,
  mutations,
  getters,
  actions
}
