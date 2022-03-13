<template>
  <div class="contents">
    <div class="my-chargv-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <!-- 가입자정보 -->
      <div class="shadow-box">
        <h3 class="tit-type4">가입자정보 <div class="right"><button class="c-gray">수정</button></div></h3>
        <div class="grid-list">
            <div class="row">
                <div class="tit">이름</div>
                <div class="txt">이상욱</div>
            </div>
            <div class="row">
                <div class="tit">생년월일</div>
                <div class="txt">1989.08.24</div>
            </div>
            <div class="row">
                <div class="tit">성별</div>
                <div class="txt">남성</div>
            </div> 
        </div>
        <!-- search-box -->
        <div class="search-box">
          <input  type="text" v-model="inpVal">
          <button class="btn-type1 st1">확인</button>
        </div>
        <!-- // search-box -->        
      </div>
      <!-- 전화번호 인증 -->
      <div class="shadow-box">
        <h3 class="tit-type4">전화번호 인증 <div class="right"><button class="c-gray">수정</button></div></h3>
        <div class="grid-list">
            <div class="row">
                <div class="tit">통신사</div>
                <div class="txt">SKT</div>
            </div>
            <div class="row">
                <div class="tit">번호</div>
                <div class="txt">010-9467-3693</div>
            </div>
        </div>
        <!-- search-box -->
        <div class="search-box">
          <input  type="text" v-model="inpVal2">
          <button class="btn-type1 st1">통신사 선택</button>
        </div>
        <!-- // search-box -->               
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data(){
    return{
      inpVal: '',
      inpVal2: ''
    }
  },
   mounted(){
   
  }
}
</script>
