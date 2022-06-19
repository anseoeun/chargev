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
  { path: '/sample/alert', meta: { layout: 'None' }, component: () => import('@/views/sample/Alert.vue')  },

  // 로그인
	{ path: '/splash', component: () => import('@/views/Splash.vue')},
	{ path: '/loginMenu', meta: {back:false }, component: () => import('@/views/LoginMenu.vue')},
	{ path: '/loginMenuCoper', meta:{user:'coper'}, component: () => import('@/views/LoginMenu.vue')},
	{ path: '/loginRuleList', component: () => import('@/views/LoginRuleList.vue')},
	{ path: '/selfAuth', component: () => import('@/views/SelfAuth.vue')},
	{ path: '/carAuth', component: () => import('@/views/CarAuth.vue')},
	{ path: '/carCheck', component: () => import('@/views/CarCheck.vue')},
	{ path: '/paymentCheck', component: () => import('@/views/PaymentCheck.vue')},
	{ path: '/productCheck', component: () => import('@/views/ProductCheck.vue')},
	{ path: '/etcInfoInput', component: () => import('@/views/EtcInfoInput.vue')},
	{ path: '/cardIssue', component: () => import('@/views/CardIssue.vue')},
	{ path: '/carRegist', component: () => import('@/views/CarRegist.vue')},
	{ path: '/cardRegist', component: () => import('@/views/CardRegist.vue')},
	{ path: '/paymentRegist', component: () => import('@/views/PaymentRegist.vue')},
	{ path: '/LoginPin', component: () => import('@/views/LoginPin.vue')},
  // 메인
  { path: '/main', meta: {layout: 'Default', menu:'home' }, component: () => import('@/views/Main.vue')},
  // 알림
	{ path: '/alarm', meta: {layout: 'Default', menu:'charge' }, component: () => import('@/views/Alarm.vue')},
  // 충전소지도
	{ path: '/chargemap', meta: {layout: 'Default', menu:'map', layoutClass:"layout-map" }, component: () => import('@/views/ChargeMap.vue')},
  // 충전
	{ path: '/charge', meta: {layout: 'Default', menu:'charge' }, component: () => import('@/views/Charge.vue')},
  // 충전중
	{ path: '/charging', meta: {layout: 'Default', menu:'charge' }, component: () => import('@/views/Charging.vue')},
  // 신청
	{ path: '/apply', meta: {layout: 'Default', menu:'apply' }, component: () => import('@/views/Apply.vue')},
  // 더보기
	{ path: '/more', meta: {layout: 'Default', menu:'apply' }, component: () => import('@/views/More.vue')},
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
