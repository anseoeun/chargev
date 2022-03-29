<template>
  <div class="contents">
    <div class="login-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page parallel-slider" @init="pageSliderInit" @onMove="pageSliderMove" @onMoved="pageSliderMoved">
        <template slot="content">
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
              <!-- 본인인증 -->
              <SelfAuth :agency="agency" @agencyOpen="btmLayer.agency = true" />
            </div>
          </splide-slide>            
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 결제정보 추가 -->
            <div class="min-fix">
              <div class="transparent-box-wrap">
                <strong class="tit">결제정보 추가</strong>
                <!-- 카메라인식 -->
                <template v-if="paymentIniputStatus == 'camera'">
                  <div class="camera-box"></div>
                  <div class="btn-wrap">
                      <button class="btn-type1 st2" @click="paymentIniputStatus = 'form'">직접입력</button>
                  </div>
                </template>
                <!-- 직접입력 -->
                <template v-else-if="paymentIniputStatus == 'form'">
                  <div class="transparent-box parallel-box">
                    <div class="form-box">
                      <div class="row">
                        <div class="input">
                            <input type="number" placeholder="카드번호">
                        </div>
                      </div>
                      <div class="row">
                        <div class="input">
                            <input type="number" placeholder="유효기간">
                        </div>
                      </div>
                      <div class="row">
                        <div class="input">
                            <input type="number" placeholder="비밀번호 앞2자리">
                        </div>
                      </div>
                    </div>
                    <div class="btn-box">
                      <button class="btn-type1 st1" @click="paymentIniputStatus = 'completion'">확인</button>
                    </div>
                  </div>
                  <div class="btn-wrap">
                      <button class="btn-type1 st2" @click="paymentIniputStatus = 'camera'">카메라 인식</button>
                  </div>
                </template>

                <template v-else-if="paymentIniputStatus == 'completion'">
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
                      <button class="btn-type1 st1">확인</button>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="info-text">
                테두리에 신용카드를 맞춰주시면<br />
                자동으로 신용카드정보가 입력됩니다.
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
                    <button class="btn-type1 st1">확인</button>
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
                    <button class="btn-type1 st1">확인</button>
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
              <!-- pin설정 -->
              <PinSetting />
            </div>
            <div class="info-text">
              보안을 위한 PIN을 설정합니다.
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
      paymentIniputStatus: 'camera',
      btmLayer:{
        agency: false,
      },
      agency: {},
      options: {
        // rewind: true, // 맨끝에서 처음으로 다시 돌아가기
        // width: 800,
        perPage: 1,
        perMove: 1,
        // pagination: false,
        arrows: false,
      },    
      currentPage: 0,  
      paging: new Array(6),
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
    agencySelect(val){
      this.agency = val
      this.btmLayer.agency = false
    },
  }
}
</script>
