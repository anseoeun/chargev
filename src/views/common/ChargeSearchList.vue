<template>
    <div class="charge-list">
      <ul>
        <li v-for="(item, index) in chargeList" :key="index">
          <div class="row">
            <div class="cell" v-html="item.addr"></div>
            <div class="cell right">차지비</div>
          </div>
          <div class="row">
            <div class="cell t-s">{{ item.price }}</div>
            <div v-if="item.km" class="cell right">{{ item.km }}</div>
            <div v-if="item.speed" class="cell right">{{ item.speed }}</div>
          </div>
          <div class="tag">
            <span v-for="(item, i) in item.tag" :key="i">{{ item }}</span>
          </div>
          <div class="btn-box">
            <button v-if="chargeType.includes('select')" class="btn-type1 st2" @click="$emit('select')">선택</button>
            <button v-if="chargeType.includes('charge')" class="btn-type1 st2" @click="$emit('charge')">충전하기<Icon type="charge" /></button>
            <button v-if="chargeType.includes('reserve')" class="btn-type1 st2" @click="$emit('reserve')">예약하기</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props:{
    data:{
      type : Array,
      default: ()=>[]
    },
    chargeType:{
      type: Array,
      default: ()=>[]
    }    
  },
  data(){
    return{
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
      ],
    }
  },
}
</script>
