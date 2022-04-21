<template>
  <div class="contents">
    <div class="login-menu-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
        <ul v-if="user === 'coper'" class="menu-list v-center">
          <li><button class="btn-type1 st2">개인회원가입</button></li>
          <li><button class="btn-type1 st2" @click="alertPop = true">법인회원가입</button></li>
        </ul>
        <ul v-else class="menu-list v-center">
          <li><button class="btn-type1 st2">로그인</button></li>
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
  </div>
</template>
<script>
export default {
    data(){
      return{
        //팝업
        alertPop: false,   
      }
    },
    computed: {
      user(){
        return this.$root.$route.meta.user
      },
    }
};
</script>