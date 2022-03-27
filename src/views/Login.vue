<template>
  <div class="contents">
    <div class="login-wrap">
      <Carousel :options="options" :content="true" class="slider-page parallel-slider" @init="pageSliderInit" @onMove="pageSliderMove" @onMoved="pageSliderMoved">
        <template slot="content">
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 로그인 -->
            <div class="transparent-box-wrap">
              <strong class="tit">로그인</strong>
              <div class="transparent-box parallel-box">
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
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 결제정보 확인 -->
            <div class="transparent-box-wrap">
              <strong class="tit">결제정보 확인</strong>
              <div class="transparent-box parallel-box">
                <div class="info-box">
                    <div class="row">
                      삼성카드
                      <div class="right"><b>상세정보</b></div>
                    </div>
                    <div class="row">
                      <div class="space-text"><span>5361</span><span>48**</span><span>****</span><span>4151</span></div>
                    </div>
                    <div class="row">
                      02/24
                    </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">확인</button>
                </div>
              </div>
            </div>
            
            <div class="info-text">
              결제 정보를 확인해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 차량정보 확인 -->
            <div class="transparent-box-wrap">
              <strong class="tit">차량정보 확인</strong>
              <div class="transparent-box parallel-box">
                <div class="info-box">
                    <div class="row">
                      <div class="space-text"><span>BMW</span><span>530e</span></div>
                      <div class="right"><b>상세정보</b></div>
                    </div>
                    <div class="row">
                      <div class="space-text"><span>M</span><span>1010</span><span>0101</span><span>1234</span><span>1234</span></div>
                    </div>
                    <div class="row">
                      <span class="space-text"><span>C</span><span>5361</span><span>48**</span><span>****</span><span>4151</span></span>
                    </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">확인</button>
                </div>
              </div>
            </div>
             <div class="info-text">
              차량정보를 확인 해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="transparent-box-wrap">
              <strong class="tit">상품 확인</strong>
              <div class="transparent-box parallel-box">
                <div class="info-box">
                    <div class="row">
                      삼성카드
                      <div class="right"><b>상세정보</b></div>
                    </div>
                    <div class="row">
                      <div class="space-text"><span>5361</span><span>48**</span><span>****</span><span>4151</span></div>
                    </div>
                    <div class="row">
                      02/24
                    </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">확인</button>
                </div>
              </div>
            </div>
            <div class="info-text">
              상품정보를 확인 해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="transparent-box-wrap">
              <strong class="tit">본인인증</strong>
              <div class="transparent-box parallel-box">
                <div class="form-box">
                  <div class="row">
                    <div class="input auto">
                        <input type="text" placeholder="통신사">
                    </div>
                    <div class="btn">
                      <button class="btn-type2 st1 inbl">선택</button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                        <input type="text" placeholder="전화번호">
                    </div>
                  </div>
                  <div class="row">
                    <div class="input">
                        <div class="inp-certify">
                          <input type="number" placeholder="인증번호">
                          <span class="time">2:59</span>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">인증번호 발송</button>
                </div>
              </div>
            </div>
            <div class="info-text">
              신규앱 최초 1회 로그인 시<br />
              인증키 생성을 위한 정보확인 및<br />
              전화번호 인증을 진행합니다.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="transparent-box-wrap">
              <strong class="tit">PIN 설정</strong>
              <div class="transparent-box">
                <div class="form-box">
                  <div class="row">
                    <div class="input">
                        <div class="inp-pin">
                          <div class="pin">
                              <input type="password" v-model="pin[0]" autocomplete="new-password" maxlength="1">
                              <input type="password" v-model="pin[1]" autocomplete="new-password" maxlength="1">
                              <input type="password" v-model="pin[2]" autocomplete="new-password" maxlength="1">
                              <input type="password" v-model="pin[3]" autocomplete="new-password" maxlength="1">
                          </div>
                          <input type="text" v-model="pin" @focus="initPinFocus">
                        </div>
                    </div>
                  </div>
                </div>
                <div class="box-btn">
                  <button class="btn-type1 st1">인증번호 발송</button>
                </div>
              </div>
            </div>
            <div class="info-text">
              보안을 위한 PIN을 설정합니다.
            </div>
          </splide-slide>
        </template>
      </Carousel>      


      <div class="grident-bottom">
        <div class="custom-dotting">
            <button v-for="(item, index) in paging" :key="index" :class="{on: currentPage === index}" @click="gotoPage(index)"></button>
        </div>
      </div>

        <!-- <button @click="btmLayer.agency = true">레이어 클릭</button> -->
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
        arrows: false,
      },      
      paging: new Array(6),
      pin: [],   
    }
  },
  methods: {
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
    },
    initPinFocus(){
      if(this.pin.length == 4){
        this.pin = []
      }
    }    
  }
}
</script>
