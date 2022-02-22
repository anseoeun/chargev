import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  //퍼블리싱 인덱스
  { path: '/', meta: { layout: 'None' }, component: () => import('@/views/Home.vue')  },
  //
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
  // 공지사항
	{ path: '/notice', component: () => import('@/views/Notice.vue')},
  // 문의내역
	{ path: '/qna', component: () => import('@/views/Qna.vue')},
  // 테스트
	{ path: '/test', component: () => import('@/views/Test.vue') },
  // 테스트
	{ path: '/chart', component: () => import('@/views/Chart.vue') },
  // 테스트
	{ path: '/calendar', component: () => import('@/views/Calendar.vue')},
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
