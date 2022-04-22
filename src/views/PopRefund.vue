<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-refund max">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
          <template slot="content">
              <splide-slide>
                <div class="refund-wrap">
                    <!-- 환불항목 -->
                    <h2 class="tit-type1">환불항목</h2>
                    <ul class="breakdown-list">
                        <li v-for="(item, index) in refundList" :key="index"><button v-html="item" @click="refundItem = item.replace('<br />', ' ');currentPage = 1"></button></li>
                    </ul>

                </div>
              </splide-slide>
              <splide-slide>
                <div class="refund-wrap">
                    <!-- 환불항목 -->
                    <h2 class="tit-type1">환불항목</h2>
                    <p class="refund-item-text">{{ refundItem }}</p>

                    <!-- 결제건 선택 -->
                    <h2 class="tit-type1">결제건 선택</h2>
                    <UsingHistory
                        @detailUsingHistory="bbb"
                    />

                </div>
              </splide-slide>
          </template>
        </Carousel>
      </template>
    </BtmLayer>
</template>

<script>
import UsingHistory from '@/views/common/UsingHistory'
export default {
  components:{
    UsingHistory
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  

  data(){
    return{
      // 고장        
      refundItem: '',
      refundList:[
          '결제 후<br />미충전',
          '선불상품',
          '기타'
      ],
      // 사진
      photoNum: 0,      

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0
    }
  },
  methods:{
    bbb(){
        console.log('bbb')
        this.$emit('detailUsingHistory')
    }
  }
}
</script>
