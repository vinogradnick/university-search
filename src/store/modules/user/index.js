import Secret from '@/api/SecretStorage' // Получение защищенного хранилища данных
import store from '@/store/index'
export default{
  namespaced: true, // Задание пространства имен

  /*  Задание состояния приложения */
  state: {
    selected_univers: [], // Выбранные университеты
    selected_subjects: [], // Выбранные предметы
    selected_educationPrograms: [], // Выбранные образовательные программы
    selected_professions: [], // Выбранные профессии
    user_location: 'all', // Местонахождение пользователя
    ege_value: 0, // Балл егэ пользователя
    /*  Предметы */
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
    ],
    welcome_dialog: false
  },
  // Функции вызывающие методы изменения состояний приложеня
  actions: {
    show_Welcome ({commit, state}) {
      commit('WELCOME_USER')
    },
    change_location: ({commit, state}) => {
      this.selected_subj()
    },
    //  Получение выбранных предметов
    selected_subj: ({commit, state}) => {
      commit('SELECT_SUBJECTS', state)// Выбор предметов
      commit('SELECT_UNIVERSITIES', state)// Выбор университетов
    }
  },
  // Функции изменяющие состояние приложения
  mutations: {
    // Выбор предметов
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
    WELCOME_USER: state => {
      state.welcome_dialog = !state.welcome_dialog
    },

    // Обновление  списка предметов
    REFRESH_SUBJECTS: function (state) {
      for (let i = 0; i < state.subjects.length; i++) { state.subjects[i].value = 0 }
    },
    // Получить список выбранных университетов
    SELECT_UNIVERSITIES: function (state, rootState) {
      // todo сделать выборку университетов для поиска
      if (state.user_location) { console.log(state.ege_value) }
      let universities = Secret._univers.filter(univer => {
        return Number(univer.average_ege) <= Number(state.ege_value)
      })
      console.log(universities)
      state.selected_univers = universities
    }

  },
  // Отправители => передают состояние приложения через промежуточную функцию
  getters: {
    subjectsList (state) {
      return state.subjects
    },
    get_mathematics: (state) => {
      return state.subjects[6]
    },
    get_russian: (state) => state.subjects[8],
    get_location: (state) => {
      if (state.user_location === 'all') {
        state.user_location = 'Россия'
        return state.user_location
      } else {
        return state.user_location
      }
    },
    get_welcomeDialog: (state) => {
      return state.welcome_dialog
    },
    selectedUniversities: (state) => state.selected_univers.length === 0 ? null : state.selected_univers,
    GET_EGE: (state) => state.ege_value !== 0 ? state.ege_value : 'Максимальный'
  }

}
