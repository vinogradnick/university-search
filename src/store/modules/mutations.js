import {Database} from '../../api/databaseWorker'

export const mutations = {
  setData: (state, {type, data}) => {
    console.log(data)
    return state[type] = data
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
    for (let i = 0; i < state.subjects.length; i++) state.subjects[i].value = 0
  },
  // Получить список выбранных университетов
  selectUniversities: function (state, rootState) {
    // todo сделать выборку университетов для поиска
    console.log(state.universitylist[0].educationPrograms)
    alert(state.universitylist.filter(univer => univer.educationPrograms.subjects === state.selected_subjects))
  },

  // Выбор образовательных программ согласно баллам
  selectEducationPrograms: function (state) {

  },
  // Сортировка программ обучения по городу
  orderUniversitiesbyLocation: (state) => { return state.universitylist.filter(univer => univer.location === user_location) },
  // Загрузка базы данных в состояние
  loadDatabase: (state) => {
    console.log(Database)
  }
}
