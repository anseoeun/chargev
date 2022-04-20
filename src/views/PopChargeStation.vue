<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-charge">
      <template slot="content">
        <div class="cont-scroll">
              <div class="charge-station">
                <div class="row">
                  <div class="cell">
                    <p class="place-tit">서울시 송파구<br />롯데타워 지하2층</p>
                  </div>
                  <div class="cell right">
                    <div class="company">차지비</div>
                    <div class="status">충전가능</div>
                  </div>
                </div>
              </div>
              <div class="grid-info-list">
                <div class="row">
                  <div class="cell label">완속</div>
                  <div class="cell">10/24</div>
                </div>
                <div class="row">
                  <div class="cell label">급속</div>
                  <div class="cell">1/2</div>
                </div>
              </div>
            <!-- 차트 -->
            <Chart />
            <router-link to="/" class="btn-type2 st2">자세히보기</router-link>
        </div>
      </template>
    </BtmLayer>
</template>

<script>
import Chart from '@/views/common/Chart'
export default {
  components:{
    Chart
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  

  data(){
    return{
      timeSetType: '',      
      options: {
        perPage: 1,
        perMove: 1,
        start: 0
      },
      currentPage: 2
    }
  },
  methods: {
    sliderMoved(slier, index){
      if(index == 1) this.timeSetType = 'charge'
    }
  }
}
</script>
