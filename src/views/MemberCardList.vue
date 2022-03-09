<template>
  <div class="contents">
    <div class="member-card-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <!-- 신청/설치 -->
      <div class="shadow-box">
        <h3 class="tit-type4">멤버십카드관리</h3>
        <div class="card-type">
          <div class="card noline"><img :src="`${require('@/assets/images/temp-card.jpg')}`" alt=""></div>
          <div class="info"><span class="name">멤버십카드</span><span class="num">1955-1231-1231-1231</span></div>
        </div>
        <router-link to="/" class="btn-type1 st1">멤버십카드 재발급</router-link>
        <router-link to="/" class="btn-type1 st1">배송현황 확인</router-link>
        <button class="btn-type1 st2">멤버십카드 발급 취소</button>
      </div>
    </div>
  </div>
</template>
