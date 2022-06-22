import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 퍼블리싱 인덱스, 샘플
  { path: '/', meta: { layout: 'None' }, component: () => import('@/views/Home.vue')  },
  { path: '/sample/carousel', meta: { layout: 'None' }, component: () => import('@/views/sample/Carousel.vue')  },
  { path: '/sample/component', meta: { layout: 'None' }, component: () => import('@/views/sample/Component.vue')  },
  { path: '/sample/form', meta: { layout: 'None' }, component: () => import('@/views/sample/Form.vue')  },
  { path: '/sample/tab', meta: { layout: 'None' }, component: () => import('@/views/sample/Tab.vue')  },
  { path: '/sample/toggleslide', meta: { layout: 'None' }, component: () => import('@/views/sample/Toggleslide.vue')  },
  { path: '/sample/card', meta: { layout: 'None' }, component: () => import('@/views/sample/Card.vue')  },
  { path: '/sample/list', meta: { layout: 'None' }, component: () => import('@/views/sample/List.vue')  },

  // 로그인
	{ path: '/splash', component: () => import('@/views/Splash.vue')},
	{ path: '/loginMenu', meta: {back:false }, component: () => import('@/views/LoginMenu.vue')},
	{ path: '/loginMenuCoper', meta:{user:'coper'}, component: () => import('@/views/LoginMenu.vue')},
	{ path: '/loginRuleList', component: () => import('@/views/LoginRuleList.vue')},
	{ path: '/login', component: () => import('@/views/Login.vue')},
	{ path: '/join', component: () => import('@/views/Join.vue')},

  // 메인
  { path: '/main', meta: {layout: 'Default', menu:'home' }, component: () => import('@/views/Main.vue')},
  // 알림
	{ path: '/alarm', meta: {layout: 'Default', menu:'home' }, component: () => import('@/views/Alarm.vue')},
  // 충전소
	{ path: '/chargeStation', meta: {layout: 'Default', menu:'charge' }, component: () => import('@/views/ChargeStation.vue')},
  // 충전소지도
	{ path: '/chargemap', meta: {layout: 'Default', menu:'map', layoutClass:"layout-map" }, component: () => import('@/views/ChargeMap.vue')},
  // 충전소검색
	{ path: '/chargeSearch', meta: {layout: 'Default', menu:'home' }, component: () => import('@/views/ChargeSearch.vue')},
  // 충전
	{ path: '/charge', meta: {layout: 'Default', menu:'charge' }, component: () => import('@/views/Charge.vue')},
  // 충전중
	{ path: '/charging', meta: {layout: 'Default', menu:'charge' }, component: () => import('@/views/Charging.vue')},
  // 신청
	{ path: '/apply', meta: {layout: 'Default', menu:'apply' }, component: () => import('@/views/Apply.vue')},
  // 더보기
	{ path: '/more', meta: {layout: 'Default', menu:'more' }, component: () => import('@/views/More.vue')},
]

for(let i=0;i<routes.length;i++){
  if(routes[i].meta === undefined){
    routes[i].meta = {};
    routes[i].meta.layout = 'None';
  }else if(routes[i].meta.layout === undefined){
    routes[i].meta.layout = 'None';
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
