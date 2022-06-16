<template>
  <div class="contents">
    <button v-if="user === 'member' || user === 'coper'" class="back"><Icon type="back" /></button>         
    <div class="login-menu-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
        <ul v-if="user === 'member'" class="menu-list v-center">
          <li><button class="btn-type1 st2">회원전환 미완료 고객</button></li>
          <li><button class="btn-type1 st2">회원전환 완료 고객</button></li>
        </ul>      
        <ul v-else-if="user === 'coper'" class="menu-list v-center">
          <li><button class="btn-type1 st2">개인회원가입</button></li>
          <li><button class="btn-type1 st2" @click="alertPop = true">법인회원가입</button></li>
        </ul>
        <ul v-else class="menu-list v-center">
          <li><button class="btn-type1 st2" @click="alertTelPop = true">로그인</button></li>
          <li><button class="btn-type1 st2">회원가입</button></li>
          <li><button class="btn-type1 st2">둘러보기</button></li>
        </ul>
    </div>

    <!-- 팝업 -->
    <Alert :is-open="alertPop" @close="alertPop = false">      
        <template slot="header">법인회원가입 안내</template>
        <template slot="body">
          법인회원은 차지비 홈페이지를 통해<br />
          가입이 가능합니다.<br />
          홈페이지 주소: www.chargev.co.kr
        </template>
    </Alert>   

    <!-- 팝업 -->
    <Alert :is-open="alertTelPop" @close="alertTelPop = false">      
        <template slot="header">전화번호 인증 안내</template>
        <template slot="body">
          차지비 신규앱 최초 로그인 시<br />
          전화번호 인증을 1회 진행합니다.<br />
          약관 동의 후 회원 정보를 확인해주세요.
        </template>
    </Alert>            
  </div>
</template>
<script>
export default {
    data(){
      return{
        //팝업
        alertPop: false,   
        alertTelPop: false,
      }
    },
    computed: {
      user(){
        return this.$root.$route.meta.user
      }
    }
};
</script>