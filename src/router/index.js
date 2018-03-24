import Vue from 'vue'
import Router from 'vue-router'
import UniversityList from '@/components/UniversityList'
import ProfessionList from '@/components/ProfessionList'
import StudyprogramList from '@/components/StudyprogramList'
import UniversityDetail from '@/components/UniversityDetail'
import AboutProgram from '@/components/AboutProgram'
import Main from '@/components/Main'
import ProfessionDetail from '@/components/ProfessionDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/unviversitylist',
      name: 'UniversityList',
      component: UniversityList
    },
    {
      path: '/professionlist',
      name: 'ProfessionList',
      component: ProfessionList
    },
    {
      path: '/profession/:id',
      name: 'ProfessionDetail',
      component: ProfessionDetail
    },
    {
      path: '/studyprogramlist',
      name: 'StudyprogramList',
      component: StudyprogramList
    },
    {
      path: '/university/:id',
      name: 'UniversityDetail',
      component: UniversityDetail
    },
    {
      path: '/aboutprogram',
      name: 'AboutProgram',
      component: AboutProgram
    }

  ]
})
