<template>
  <div class="contents">
    <div class="login-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page parallel-slider">
        <template slot="content">
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 로그인 -->
            <div class="min-fix">
              <div class="transparent-box-wrap">
                <strong class="tit">로그인</strong>
                <div class="transparent-box parallel-box">
                  <div class="form-box">
                    <div class="row">
                      <div class="input">
                        <Input type="text" v-model="form.id" placeholder="ID(Email)" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="input">
                        <Input type="password" v-model="form.pw" placeholder="비밀번호" />
                      </div>
                    </div>
                  </div>
                  <div class="btn-box">
                    <button class="btn-type1 st1" @click="currentPage = 1">로그인</button>
                  </div>
                </div>
              </div>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 결제정보 확인 -->
            <div class="min-fix">
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
                  <div class="btn-box">
                    <button class="btn-type1 st1" @click="currentPage = 2">확인</button>
                  </div>
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
            <div class="min-fix">
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
                  <div class="btn-box">
                    <button class="btn-type1 st1" @click="currentPage = 3">확인</button>
                  </div>
                </div>
              </div>
            </div>
             <div class="info-text">
              차량정보를 확인 해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
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
                  <div class="btn-box">
                    <button class="btn-type1 st1" @click="currentPage = 4">확인</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="info-text">
              상품정보를 확인 해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
               <!-- 본인인증 -->
              <SelfAuth :form="form" @agencyOpen="btmLayer.agency = true" @complete="currentPage = 5" />
            </div>
            <div class="info-text">
              신규앱 최초 1회 로그인 시<br />
              인증키 생성을 위한 정보확인 및<br />
              전화번호 인증을 진행합니다.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
              <!-- pin설정 -->
              <div class="info-text">
                <PinSetting :form="form" @pinSetting="pinSet = true" />
              </div>
              <div v-if="!pinSet" class="info-text">
                보안을 위한 PIN을 설정합니다.
              </div>
              <div v-else class="info-text">
                확인을 위해 한 번 더 입력해 주세요.
              </div>
            </div>
          </splide-slide>
        </template>
      </Carousel>
    </div>

    <!-- 팝업:통신사 선택 -->
    <AgencySelect :visible="btmLayer.agency" @close="agencySelect"/>

  </div>
</template>

<script>
import SelfAuth from '@/views/common/SelfAuth'
import PinSetting from '@/views/common/PinSetting'
import AgencySelect from '@/views/common/AgencySelect'
export default {
  components:{
    SelfAuth,
    PinSetting,
    AgencySelect
  },
  data(){
    return{
      form:{
        id: '',
        pw: '',
        agency: {},
        tel: '',
        auth: '',
        pin: '',
        pin2: '',
      },
      pinSet: false,

      options: {
        perPage: 1,
        perMove: 1,
        arrows: false,
      },
      currentPage: 0,
      paging: new Array(6),

      btmLayer:{
        agency: false,
      }, 
    }
  },
  methods: {
    agencySelect(val){
      val ? this.form.agency = val : ''
      this.btmLayer.agency = false
    },
  }
}
</script>
