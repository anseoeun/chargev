<template>
  <div class="contents" style="padding:2rem">
    <h2 class="guide-tit">생체인식 사용</h2>
    <button class="btn-type1 st2" @click="alertPop = true">생체인식 사용 팝업열기</button>

    <!-- 팝업 -->
    <Alert :is-open="alertPop" @close="alertPop = false" :confirm="false">
        <template slot="header">Alert 팝업</template>
        <template slot="body">
          <span class="bold">생체인식을 사용하시겠습니까?</span>
        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="alertPop = false">사용</button>
          <button class="btn-type1 st3" @click="alertPop = false">사용안함</button>
        </template>
    </Alert>
  </div>
</template>
<script>
export default {
    data(){
      return{
        alertPop: false,
      }
    }
};
</script>
