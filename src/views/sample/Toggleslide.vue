<template>
  <div class="contents" style="padding:2rem">
      <!-- 인근 충전소 -->
      <button class="btn-toggle-slide on" @click="toggleSlide($event, '#slide-use')">
        <Icon type="arr-bottom" />
        <h2 class="tit-type1">토글 슬라이드 버튼</h2>
      </button>
      <div id="slide-use">
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
        토글 슬라이드 컨텐츠 <br />
      </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
        currentTab: 'point',
      }
    }
};
</script>
<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
.guide-tit ~ .guide-tit{margin-top:3rem;}
</style>


