import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  //퍼블리싱 인덱스
  { path: '/', meta: { layout: 'None' }, component: () => import('@/views/Home.vue')  },
  //
  // { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
  // 테스트
	{ path: '/test', component: () => import('@/views/Test.vue') },
  // 테스트
	{ path: '/chart', component: () => import('@/views/Chart.vue') },
  // 테스트
	{ path: '/calendar', component: () => import('@/views/Calendar.vue')},
  // 테스트
	{ path: '/slider', meta: { layout: 'Default' }, component: () => import('@/views/Slider.vue')},

  

  // ------------ 알림---------------- //
  // 알림
	{ path: '/alarm', component: () => import('@/views/Alarm.vue')},

  // ------------ 맞춤충전---------------- //
	{ path: '/customChargeSet', component: () => import('@/views/CustomChargeSet.vue')},
  // ------------ 마이차지비---------------- //
	{ path: '/myChargev', component: () => import('@/views/MyChargev.vue')},
  // ------------ 내정보---------------- //
	{ path: '/mypage', component: () => import('@/views/Mypage.vue')},
  // ------------ 차량관리---------------- //
	{ path: '/carManage', component: () => import('@/views/CarManage.vue')},
  // ------------ 결제관리---------------- //
	{ path: '/paymentManage', component: () => import('@/views/PaymentManage.vue')},
  // ------------ 충전포인트---------------- //
	{ path: '/chargePoint', component: () => import('@/views/ChargePoint.vue')},


  // ------------ 고객지원---------------- //
  // 공지사항
	{ path: '/notice', component: () => import('@/views/Notice.vue')},
  // 약관
	{ path: '/supportRules', component: () => import('@/views/SupportRules.vue')},
  // 고객지원 메인
	{ path: '/supportIndex', component: () => import('@/views/SupportIndex.vue')},
  // 충전기 사용방법
	{ path: '/chargerUsingGuide', component: () => import('@/views/ChargerUsingGuide.vue')},
  // 충전기 설치 신청
	{ path: '/chargerInstallApply', component: () => import('@/views/ChargerInstallApply.vue')},
  // 충전기 종류 안내
	{ path: '/chargerSortGuide', component: () => import('@/views/ChargerSortGuide.vue')},
  // PHEV차량 충전안내
	{ path: '/chargerPhevGuide', component: () => import('@/views/ChargerPhevGuide.vue')},
  // 충전요금 안내
	{ path: '/chargerPriceGuide', component: () => import('@/views/ChargerPriceGuide.vue')},  
  // 로밍서비스 안내
	{ path: '/roamingServiceGuide', component: () => import('@/views/RoamingServiceGuide.vue')},  
  // 완성차 프로모션
	{ path: '/carPromotion', component: () => import('@/views/CarPromotion.vue')},  
  // 완성차 멤버십카드
	{ path: '/carMemberCard', component: () => import('@/views/CarMemberCard.vue')},  
  // 비회원 충전
	{ path: '/noMemberCharge', component: () => import('@/views/NoMemberCharge.vue')},  
  // 서비스이용약관
	{ path: '/ruleService', component: () => import('@/views/RuleService.vue')},
  // 이벤트
	{ path: '/event', component: () => import('@/views/Event.vue')},
  // 이벤트 상세
	{ path: '/eventDetail', component: () => import('@/views/EventDetail.vue')},



  // ------------ 문의내역---------------- //
    // 문의내역
	{ path: '/qna', component: () => import('@/views/Qna.vue')},

  // ------------ 문의하기 ---------------- //
  // 문의하기 목록
	{ path: '/qnaList', component: () => import('@/views/QnaList.vue')},
  // 충전기 고장신고
	{ path: '/breakdownReport', component: () => import('@/views/BreakdownReport.vue')},
  // 환불문의
	{ path: '/refund', component: () => import('@/views/Refund.vue')},
  // 모바일카드 이용
	{ path: '/mobileCardGuide', component: () => import('@/views/MobileCardGuide.vue')},
  // 배송현황 확인
	{ path: '/deliveryCheck', component: () => import('@/views/DeliveryCheck.vue')},
  // 멤버십카드 발급
	{ path: '/memberCardIssued', component: () => import('@/views/MemberCardIssued.vue')},
  // 멤버십카드 재발급
	{ path: '/memberCardReIssued', component: () => import('@/views/MemberCardReIssued.vue')},
  // 멤버십카드 인증불가
	{ path: '/memberCardNoAuth', component: () => import('@/views/MemberCardNoAuth.vue')},
  // 멤버십카드 문의
	{ path: '/memberCardNoInquiry', component: () => import('@/views/MemberCardNoInquiry.vue')},
  // 개선사항 건의
	{ path: '/improvementsSuggest', component: () => import('@/views/ImprovementsSuggest.vue')},
    // 충전기 설치신청 폼
	// { path: '/chargerInstallApplyForm', component: () => import('@/views/ChargerInstallApplyForm.vue')},

  // ------------ 신청/설치관리---------------- //
  // 신청/설치관리 메인
  { path: '/chargerInstallApplyIndex', component: () => import('@/views/ChargerInstallApplyIndex.vue')},
  // 멤버십카드 관리- 카드 없을때
  { path: '/memberCard', component: () => import('@/views/MemberCard.vue')},
  // 멤버십카드 관리- 카드 없을때
  { path: '/memberCardList', component: () => import('@/views/MemberCardList.vue')},
  // 멤버십 카드 신청
  { path: '/memberCardApply', component: () => import('@/views/MemberCardApply.vue')},
  // 멤버십 카드 신청 - 배송현황
  { path: '/memberCardDelivery', component: () => import('@/views/MemberCardDelivery.vue')},
  // 충전기 설치 신청
	{ path: '/chargerInstallApplyList', component: () => import('@/views/ChargerInstallApplyList.vue')},
  // 설치 장소 선택
	{ path: '/chargerInstallApplyPlace', component: () => import('@/views/ChargerInstallApplyPlace.vue')},
  // 충전기 모델 선택
	{ path: '/chargerInstallApplyModel', component: () => import('@/views/ChargerInstallApplyModel.vue')},
  // 설치 요청 날짜 선택
	{ path: '/chargerInstallApplyDate', component: () => import('@/views/ChargerInstallApplyDate.vue')},



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
