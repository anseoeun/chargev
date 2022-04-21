<template>
  <div class="contents">
    <div class="home-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
        <template slot="content">
            <splide-slide>
                <div class="charge-status">
                  <!-- 충전차량 -->
                  <h2 class="tit-type1">충전차량</h2>
                  <div class="desc">
                    <div class="space-text"><span>BMW</span><span>530e</span></div>
                    02보6596
                  </div>
                  <button class="btn-type1 st2">충전차량 설정</button>

                  <!-- 충전포인트 -->
                  <h2 class="tit-type1">충전포인트</h2>
                  <div class="desc">
                    <div class="point">360,000원</div>
                  </div>
                  <button class="btn-type1 st2">상세확인</button>
                </div>
            </splide-slide>          
            <splide-slide>
              <h2 class="tit-type1">이용기록 </h2>
              <UsingHistory
                @detailUsingHistory="btmLayer.popPaymentDetail = true"
               />
            </splide-slide>
            <splide-slide>
              <div class="notice-wrap">
                <h2 class="tit-type1">공지사항 </h2>
                 <div class="noti-list">
                   <Carousel :data ="notiList" :options="notiOpt">
                    <template slot-scope="props">
                      <router-link to="/" class="noti">
                        <div class="img" :style="`background-image:url(${props.item.src})`"></div>
                        <div class="cate">{{ props.item.cate }}</div>
                        <div class="tit">{{ props.item.tit }}</div>
                        <div class="date">{{ props.item.date }}</div>
                      </router-link>
                    </template>
                    </Carousel>
                 </div>
                 
                 <h2 class="tit-type1">이벤트 </h2>
                 <div class="noti-list">
                   <Carousel :data ="notiList" :options="notiOpt">
                    <template slot-scope="props">
                      <router-link to="/" class="noti">
                        <div class="img" :style="`background-image:url(${props.item.src})`"></div>
                        <div class="cate">{{ props.item.cate }}</div>
                        <div class="tit">{{ props.item.tit }}</div>
                        <div class="date">{{ props.item.date }}</div>
                      </router-link>
                    </template>
                    </Carousel>
                 </div>
              </div>
            </splide-slide>
        </template>
      </Carousel>
    </div>

    <!-- 상세 결제내역 -->
    <PopPaymentDetail :visible="btmLayer.popPaymentDetail" @close="btmLayer.popPaymentDetail = false"/>

  </div>
</template>

<script>
import UsingHistory from '@/views/common/UsingHistory'
import PopPaymentDetail from '@/views/PopPaymentDetail'
export default {
  components:{
    UsingHistory,
    PopPaymentDetail
  },
  data(){
    return{
      notiOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },
      notiList: [
        {
          src: require('@/assets/images/temp-noti.jpg'),
          cate: '신규 서비스 안내',
          tit: '기프티쇼 쿠폰 출시 안내',
          date: '2022-02-25'
        },
        {
          src: require('@/assets/images/temp-noti.jpg'),
          cate: '신규 서비스 안내',
          tit: '기프티쇼 쿠폰 출시 안내',
          date: '2022-02-25'
        },
        {
          src: require('@/assets/images/temp-noti.jpg'),
          cate: '신규 서비스 안내',
          tit: '기프티쇼 쿠폰 출시 안내',
          date: '2022-02-25'
        },
      ],

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,
      paging: new Array(3),
      btmLayer:{
        popPaymentDetail: false,
      },
    }
  },
  methods: {
    agencySelect(val){
      val ? this.agency = val : ''
      this.btmLayer.agency = false
    },
  }
}
</script>
