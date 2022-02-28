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
  // 이벤트
	{ path: '/event', component: () => import('@/views/Event.vue')},
  // 충전기 설치신청 목록
	{ path: '/chargerInstallApplyList', component: () => import('@/views/ChargerInstallApplyList.vue')},
  // 충전기 설치신청 장소
	{ path: '/chargerInstallApplyPlace', component: () => import('@/views/ChargerInstallApplyPlace.vue')},
  // 충전기 설치신청 폼
	{ path: '/chargerInstallApplyForm', component: () => import('@/views/ChargerInstallApplyForm.vue')},

  
  // 테스트
	{ path: '/test', component: () => import('@/views/Test.vue') },
  // 테스트
	{ path: '/chart', component: () => import('@/views/Chart.vue') },
  // 테스트
	{ path: '/calendar', component: () => import('@/views/Calendar.vue')},
]

for(let i=0;i<routes.length;i++){
  if(routes[i].meta === undefined){
    routes[i].meta = {};
    routes[i].meta.layout = 'Default';
  }else if(routes[i].meta.layout === undefined){
    routes[i].meta.layout = 'Default';
  }
}

console.log(routes)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
