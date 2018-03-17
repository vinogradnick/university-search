import {Database} from '../../api/databaseWorker'
import {localStorager} from '../../api/localstorageWorker'

export const mutations = {
  // TOdo  make fill database from firebase
  setData: (state, {type, data}) => {
    console.log(data)
    state[type] = data
  },
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
  selectUniversities: function (state, rootState) {
    // todo сделать выборку университетов для поиска
    console.log(state.ege_value)
    let universities = state.universitylist.filter(univer => {
      return Number(univer.average_ege) <= Number(state.ege_value)
    })
    console.log(universities)
    state.selected_univers = universities
  },

  // Выбор образовательных программ согласно баллам
  /* selectEducationPrograms: function (state) {

  },
  */
  // Сортировка программ обучения по городу
  // TODO   orderUniversitiesbyLocation: (state) => { return state.universitylist.filter(univer => univer.location === user_location) },
  // Загрузка базы данных в состояние
  loadDatabase: (state) => {
    // todo xm.... i need to more time for this
    let universities = Database.ref('universitylist/0').once('value')
    console.log(universities)
  },
  loadLocalStorage: (state) => {}
}
