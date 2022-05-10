<template>
  <div class="contents" style="padding:2rem">
    <h2 class="guide-tit">탭 스타일</h2>
    <div class="tab-type1 center">
        <button @click="currentTab = 'point';" :class="{on: currentTab === 'point'}">충전포인트</button>
        <button @click="currentTab = 'card';" :class="{on: currentTab === 'card'}">신용카드</button>
        <button @click="currentTab = 'payment'" :class="{on: currentTab === 'payment'}">간편결제</button>
    </div>    
    <div v-if="currentTab === 'point'">
       충전포인트 탭컨텐츠
    </div>
    <div v-if="currentTab === 'card'">
       신용카드 탭컨텐츠
    </div>
    <div v-if="currentTab === 'payment'">
       간편결제 탭컨텐츠
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


