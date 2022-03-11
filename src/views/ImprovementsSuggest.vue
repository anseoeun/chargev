<template>
  <div class="contents">
    <div class="breakdown-report-wrap">
      <h2 class="tit-type2">개선사항 건의</h2>
      <!-- 개선사항 건의 -->
      <div class="shadow-box">
        <h3 class="tit-type4"><span class="i-wrap"><Icon type="logo-s" /><span>개선사항 건의</span></span></h3>
        <!-- search-box -->
        <div class="search-box">
          <input  type="text" v-model="inquiryContent">
          <button class="btn-type1 st1">문의하기</button>
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
        inquiryContent: ''
    }
  },
}
</script>
