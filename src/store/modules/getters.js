export const getters = {

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
  },
  get_subjects (state) {
    return state.subjects
  },

  get_mathematics: (state) => {
    return state.subjects[6]
  },
  getProfessionList: (state) => {
    return state.professions
  },
  getEducationPrograms: (state, id) => {
    // todo подумать над получением програм обучения хм...
    return state.universitylist[id].educationPrograms
  },
  get_russian: (state) => {
    return state.subjects[8]
  },
  GET_UNIVERSTIY_BY_EGE_VALUE: function (state) {
    const list = state.universitylist.educationPrograms.filter(subj => subj.subject === state.selected_subjects)
    console.log(list)
    return list
  },
  getFilteredUniversities: (state) => {
    const subjects = state.selected_subjects
    const univer_subj = state.universitylist.ed
  }
}
