<template>
<div class="charge-place-wrap">
    <!-- 충전소 -->
    <h2 class="tit-type1">충전소</h2>
    <div class="charge-place">
      <p class="place-tit">서울시 송파구<br />롯데타워 지하2층</p>
      <p class="txt">서울시 송파구 올림픽로 300</p>
      <p class="txt">지하 2층 R5 구역</p>
      <p class="txt">00:00 ~ 24:00</p>
    </div>
    <Chart />

    <!-- 충전기 -->
    <h2 class="tit-type1">충전기</h2>
      <ChargeSearchList 
        :data="chargeList"
        :chargeType="['charge']"
        @charge="btmLayer.PopCharge = true"
      />    
</div>
</template>

<script>
import Chart from '@/views/common/Chart'
import ChargeSearchList from '@/views/common/ChargeSearchList'
export default {
  components:{
    Chart,
    ChargeSearchList
  },
  props: {
    chargeType:{
      type: Array,
      default: ()=>[]
    }
  },  
  data(){
    return {
      chargeList: [
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '279 (kWh/원) ',
          'speed': '완속',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '279 (kWh/원) ',
          'speed': '완속',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '279 (kWh/원) ',
          'speed': '완속',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '279 (kWh/원) ',
          'speed': '완속',
          tag: [
            '혼잡함', '할인중'
          ],
        },
      ]
    };
  },
  methods:{

  }
}
</script>
