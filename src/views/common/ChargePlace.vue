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
    <div class="charge-list">
      <ul>
        <li v-for="(item, index) in chargeList" :key="index">
          <div class="row">
            <div class="cell" v-html="item.addr"></div>
            <div class="cell right">차지비</div>
          </div>
          <div class="row">
            <div class="cell t-s">{{ item.price }}</div>
            <div class="cell right">{{ item.km }}</div>
          </div>
          <div class="tag">
            <span v-for="(item, i) in item.tag" :key="i">{{ item }}</span>
          </div>
          <div class="btn-box">
            <button v-if="chargeType.includes('select')" class="btn-type1 st2" @click="$emit('chargeSelect')">선택</button>
            <button v-if="chargeType.includes('charge')" class="btn-type1 st2">충전하기<Icon type="charge" /></button>
            <button v-if="chargeType.includes('reserve')" class="btn-type1 st2">예약하기</button>
          </div>
        </li>
      </ul>
    </div>    
</div>
</template>

<script>
import Chart from '@/views/common/Chart'
export default {
  components:{
    Chart
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
          'price': '269 ~ 279 (kWh/원) ',
          'km': '1km 이내',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '269 ~ 279 (kWh/원) ',
          'km': '1km 이내',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '269 ~ 279 (kWh/원) ',
          'km': '1km 이내',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '269 ~ 279 (kWh/원) ',
          'km': '1km 이내',
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
