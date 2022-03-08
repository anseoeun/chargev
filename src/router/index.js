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
  // 고객지원
	{ path: '/support', component: () => import('@/views/Support.vue')},
  // 문의내역
	{ path: '/qna', component: () => import('@/views/Qna.vue')},
  // 이벤트
	{ path: '/event', component: () => import('@/views/Event.vue')},
  // 이벤트 상세
	{ path: '/eventDetail', component: () => import('@/views/EventDetail.vue')},
  // 서비스이용약관
	{ path: '/ruleService', component: () => import('@/views/RuleService.vue')},
  
  // 충전기 고장신고
	{ path: '/breakdownReport', component: () => import('@/views/BreakdownReport.vue')},
  // 환불문의
	{ path: '/refund', component: () => import('@/views/Refund.vue')},
  

  // 충전기 설치 신청
	{ path: '/chargerInstallApplyList', component: () => import('@/views/ChargerInstallApplyList.vue')},
  // 설치 장소 선택
	{ path: '/chargerInstallApplyPlace', component: () => import('@/views/ChargerInstallApplyPlace.vue')},
  // 충전기 모델 선택
	{ path: '/chargerInstallApplyModel', component: () => import('@/views/ChargerInstallApplyModel.vue')},
  // 설치 요청 날짜 선택
	{ path: '/chargerInstallApplyDate', component: () => import('@/views/ChargerInstallApplyDate.vue')},
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
    routes[i].meta.layout = 'Nofooter';
  }else if(routes[i].meta.layout === undefined){
    routes[i].meta.layout = 'Nofooter';
  }
}

console.log(routes)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
