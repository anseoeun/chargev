<template>
  <div class="contents">
    <div class="breakdown-report-wrap">
      <h2 class="tit-type2">멤버십카드 문의</h2>
      <!-- 차량정보 -->
      <div class="shadow-box">
        <h3 class="tit-type4">차량정보</h3>
        <div class="grid-list">
            <div class="row">
                <div class="tit">제조사</div>
                <div class="txt">BMW</div>
            </div>
            <div class="row">
                <div class="tit">차종</div>
                <div class="txt">530i</div>
            </div>
        </div>
      </div>

      <!-- 내용 작성 -->
      <div class="shadow-box">
        <h3 class="tit-type4">내용 작성</h3>
        <!-- search-box -->
        <div class="search-box">
          <input  type="text" v-model="inquiryContent">
          <button class="btn-type1 st1" @click="alertPop = true">문의하기</button>
        </div>
        <!-- // search-box -->
      </div>
    </div>

    <Alert :is-open="alertPop" @close="alertPop = false">      
        <template slot="header">문의가 등록되었습니다.</template>
        <template slot="body">
            고객센터에서 확인 후 답변드리도록 하겠습니다. 
            <br>차지비 서비스 이용에 감사드립니다.
        </template>
    </Alert>    
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data(){
    return{
      inquiryContent:  '',

      //팝업
      alertPop: false,      
    }
  },
}
</script>
