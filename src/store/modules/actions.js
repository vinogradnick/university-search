export const actions = {
  searching ({state, commit}) {
    console.log('change')
    commit('setData', {type: 'universitylist', data: null})
  },
  selected_subj: ({commit, state}) => {
    commit('selectSubjects', state)
    commit('selectUniversities', state)
  },
  loadFirebase: ({state, commit}) => {
    console.log('firebas is loading')
    commit('loadDatabase')
  }

}