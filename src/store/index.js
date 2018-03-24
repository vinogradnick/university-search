import Vuex from 'vuex'
import Vue from 'vue'
// Модули  приложения имеющие свои данные, функции
import user from './modules/user/index'
import university from './modules/university/index'
import profession from './modules/profession/index'
import studyprogram from './modules/studyprogram/index'

// Логирование данных для отладки и тестирования состояний
import createLogger from 'vuex/dist/logger'

// Включение библиотеки в общий проект
Vue.use(Vuex)

// Реализации модульного хранилища приложения
export default new Vuex.Store({
  // Модули хранилища
  modules: {
    user: user, // Пользователь
    university: university, // Университеты
    studyprogram: studyprogram, // Программы обучения
    profession: profession// Профессии
  },
  plugins: [createLogger()], // Дополнительные плагины для работы
  strict: false // Строгий режим !!!Острожно! Разрешает изменять состояние через функции в компоненте приложения
})
