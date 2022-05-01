<template>
  <div class="contents" style="padding:2rem">
    <h2 class="guide-tit">버튼 스타일</h2>
    <button class="btn-type1 st1" @click="$emit('close')">버튼 type1 st1</button>
    <button class="btn-type1 st2" @click="$emit('close')">버튼 type1 st2</button>
    
    <div class="guide-line"></div>
    <h2 class="guide-tit">타이틀 스타일</h2>
    <h2 class="tit-type1">타이틀 타입 1</h2>
    <h3 class="tit-type2">타이틀 타입 2</h3>

    <div class="guide-line"></div>    
    <h2 class="guide-tit">Alert 팝업</h2>    
    <button class="btn-type1 st2" @click="alertPop = true">Alert 팝업열기</button>

    <div class="guide-line"></div>    
    <h2 class="guide-tit">팝업</h2>    
    <button class="btn-type1 st2" @click="btmLayer.PopCarMembershipCard = true">슬라이드 팝업열기</button>
    <button class="btn-type1 st2" @click="btmLayer.PopAddr = true">슬라이드 없는 팝업열기</button>
    <button class="btn-type1 st2" @click="btmLayer.PopMapLegend = true">Dim 없는 팝업열기</button>
    <button class="btn-type1 st2" @click="btmLayer.PopChargeSearchList = true">닫기버튼 있는 팝업열기</button>

    <!-- 팝업 -->
    <Alert :is-open="alertPop" @close="alertPop = false">      
        <template slot="header">Alert 팝업</template>
        <template slot="body">
          Alert 팝업 내용 내용
        </template>
    </Alert>        

    <!-- 슬라이드 팝업열기 -->
    <PopCarMembershipCard :visible="btmLayer.PopCarMembershipCard" @close="btmLayer.PopCarMembershipCard = false" />  
    <!-- 슬라이드 없는 팝업열기 -->
    <PopAddr :visible="btmLayer.PopAddr" @close="btmLayer.PopAddr = false"/>    
    <!-- Dim 없는 팝업열기 -->
    <PopMapLegend :visible="btmLayer.PopMapLegend" @close="btmLayer.PopMapLegend = false"/>    
    <!-- 닫기버튼 있는 팝업열기 -->
    <PopChargeSearchList :visible="btmLayer.PopChargeSearchList" @close="btmLayer.PopChargeSearchList = false"/>
  </div>
</template>
<script>
import PopCarMembershipCard from '@/views/PopCarMembershipCard'
import PopAddr from '@/views/PopAddr'
import PopMapLegend from '@/views/PopMapLegend'
import PopChargeSearchList from '@/views/PopChargeSearchList'
export default {
    components:{
      PopCarMembershipCard,
      PopAddr,
      PopMapLegend,
      PopChargeSearchList
    },  
    data(){
      return{
        alertPop: false,
        btmLayer:{
          PopCarMembershipCard: false,
          PopAddr: false,
          PopMapLegend: false,
          PopChargeSearchList: false,
        }
      }
    }
};
</script>
<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
</style>


