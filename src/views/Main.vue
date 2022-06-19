<template>
  <div class="contents">
    <div class="home-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
        <template slot="content">
            <splide-slide>
                <div class="card-wrap">
                  <h2 class="tit-type1">충전차량</h2>
                  <button class="card5">
                    <div class="center">
                          <p class="add-car-txt">차량을 등록해주세요</p>
                      </div>
                  </button>
                </div>
                <!-- 충전포인트 -->
                <div class="card-wrap">
                  <h2 class="tit-type1">충전포인트</h2>
                  
                </div>
            </splide-slide>
            <splide-slide>
                <!-- 충전차량 -->
                <div class="card-wrap">
                  <h2 class="tit-type1">충전차량</h2>
                    <Carousel class="slide-list" :content="true" :options="carSliderOpt">
                        <template slot="content">
                            <splide-slide v-for="(item, index) in carList" :key="index">
                                <div class="card5" :class="{on: item.selected}">
                                    <div class="car-info-wrap">
                                      <Icon v-if="item.company === 'bmw'" type="logo-bmw2" class="company-logo" />
                                      <Icon v-if="item.company === 'benz'" type="logo-benz" :src="require('@/assets/images/logo/logo-me.png')" class="company-logo" />
                                      <div class="car-info">
                                          <p class="space-txt"><span>{{ item.carInfo[0] }}</span><span>{{ item.carInfo[1] }}</span></p>
                                          <p>{{ item.carInfo[2] }}</p>
                                      </div>
                                    </div>
                                    <div class="number">
                                        <span>{{ item.num[0] }}</span> -
                                        <span>{{ item.num[1] }}</span> -
                                        <span>{{ item.num[2] }}</span> -
                                        <span>{{ item.num[3] }}</span>
                                    </div>
                                    <div class="btn-box-inner">
                                      <button class="btn-type1 st2" @click="$set(item, 'selected', !item.selected)">
                                          충전차량으로 설정 <Icon type="check" :class="{on: item.selected}" />
                                      </button>
                                    </div> 
                                </div>
                            </splide-slide>
                            <splide-slide>
                              <button class="card3">
                                  <div class="center">
                                      <Icon type="add-plus" />
                                      <p class="txt">차량 추가</p>
                                  </div>
                              </button>
                            </splide-slide>
                        </template>
                    </Carousel>
                </div>
                <!-- 충전포인트 -->
                <div class="card-wrap">
                  <h2 class="tit-type1">충전포인트</h2>
                  <div class="card5">
                      <div class="point-price">
                        총&nbsp;<span>360,000</span>원
                      </div>
                      <div class="btn-box-inner">
                          <button class="btn-type1 st2">상세확인</button>
                      </div> 
                  </div>
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
                      <button class="noti" @click="btmLayer.popNoticeDetail = true">
                        <div class="img" :style="`background-image:url(${props.item.src})`"></div>
                        <div class="cate">{{ props.item.cate }}</div>
                        <div class="tit">{{ props.item.tit }}</div>
                        <div class="date">{{ props.item.date }}</div>
                      </button>
                    </template>
                    </Carousel>
                 </div>
                 
                 <h2 class="tit-type1">이벤트 </h2>
                 <div class="noti-list">
                   <Carousel :data ="notiList" :options="notiOpt">
                    <template slot-scope="props">
                      <button class="noti" @click="btmLayer.popNoticeDetail = true">
                        <div class="img" :style="`background-image:url(${props.item.src})`"></div>
                        <div class="cate">{{ props.item.cate }}</div>
                        <div class="tit">{{ props.item.tit }}</div>
                        <div class="date">{{ props.item.date }}</div>
                      </button>
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
    <!-- 공지 상세내역 -->
    <PopNoticeDetail :visible="btmLayer.popNoticeDetail" @close="btmLayer.popNoticeDetail = false"/>

  </div>
</template>

<script>
import UsingHistory from '@/views/common/UsingHistory'
import PopPaymentDetail from '@/views/PopPaymentDetail'
import PopNoticeDetail from '@/views/PopNoticeDetail'
export default {
  components:{
    UsingHistory,
    PopPaymentDetail,
    PopNoticeDetail,
  },
  data(){
    return{
      // 충전차량
      carSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },      
      carList: [
          {
              company: 'bmw',
              carInfo: ['BMW', '530e', '02보6596'],
              num: ['9999', '9999', '9999', '9999'],
              selected: true,
          },
          {
              company: 'benz',
              carInfo: ['BMW', '530e', '02보6596'],
              num: ['9999', '9999', '9999', '9999'],
              selected: false,
          },
      ],

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
        popNoticeDetail: false,
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
