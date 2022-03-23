<template>
  <div class="contents">
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>      
      <Slider :options="options" :content="true" class="slider-page" :key="componentKey" @init="pageSliderInit" @onMove="pageSliderMove" @onMoved="pageSliderMoved">
        <template slot="content">
          <splide-slide>
            <div class="transparent-box-wrap">
              <strong class="tit">로그인</strong>
              <div class="transparent-box">
                <div class="form-box">
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="ID(Email)">
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="비밀번호">
                    </div>
                  </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">로그인</button>
                </div>
              </div>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="transparent-box-wrap">
              <strong class="tit">로그인</strong>
              <div class="transparent-box">
                <div class="form-box">
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="ID(Email)">
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="비밀번호">
                    </div>
                  </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">로그인</button>
                </div>
              </div>
            </div>
            
            <div class="info-text">
              결제 정보를 확인해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="transparent-box-wrap">
              <strong class="tit">로그인</strong>
              <div class="transparent-box">
                <div class="form-box">
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="ID(Email)">
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="비밀번호">
                    </div>
                  </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">로그인</button>
                </div>
              </div>
            </div>
          </splide-slide>
          <!-- <splide-slide v-if="false"> -->
          <splide-slide>
          <div class="transparent-box-wrap">
              <strong class="tit">로그인</strong>
              <div class="transparent-box">
                <div class="form-box">
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="ID(Email)">
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="비밀번호">
                    </div>
                  </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">로그인</button>
                </div>
              </div>
            </div>
          </splide-slide>
        </template>
      </Slider>      


      <div class="grident-bottom">
        <div class="custom-dotting">
            <button v-for="(item, index) in paging" :key="index" :class="{on: currentPage === index}" @click="gotoPage(index)"></button>
        </div>
      </div>

        <!-- <button @click="btmLayer.agency = true">레이어 클릭</button>
        <button @click="update">슬라이더 추가</button> -->
    </div>

    <BtmLayer :visible="btmLayer.agency" @close="btmLayer.agency = false">
      <template slot="content">
          dfsf
      </template>
    </BtmLayer>
  </div>
</template>

<script>

export default {
  data(){
    return{
      btmLayer:{
        agency: false,
      },
      currentPage: 0,
      slider1: false,
       componentKey: 2,
      options: {
        // rewind: true, // 맨끝에서 처음으로 다시 돌아가기
        // width: 800,
        perPage: 1,
        perMove: 1,
        // pagination: false,
        // arrows: false,
      },      
      paging: new Array(6)
    }
  },
  mounted(){
   
  },
  methods: {
    update(){
      this.slider1 = true;
      this.componentKey += 1;   
      this.options.start = 1
      // this.$forceUpdate();
    },
    pageSliderInit(slider){
      this.currentPage = slider.index
    },
    pageSliderMove(slider){
      this.currentPage = slider.index
    },
    pageSliderMoved(slider){
      this.currentPage = slider.index
    },
    gotoPage(index){
      document.querySelector('.splide__pagination li:nth-child('+(index +  1)+') button').click()
    }
  }
}
</script>
