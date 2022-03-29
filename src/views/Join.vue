<template>
  <div class="contents">
    <div class="login-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page parallel-slider">
        <template slot="content">
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
              <!-- 본인인증 -->
              <SelfAuth :agency="agency" @agencyOpen="btmLayer.agency = true" @complete="currentPage = 1" />
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
                  <div class="transparent-box">
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
                <!-- 완료 -->
                <template v-if="paymentIniputStatus == 'completion'">
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
                </template>
              </div>
            </div>

            <div v-if="paymentIniputStatus == 'camera'" class="info-text">
                테두리에 신용카드를 맞춰주시면<br />
                자동으로 신용카드정보가 입력됩니다.
            </div>
            <div v-else-if="paymentIniputStatus == 'form'" class="info-text">
                신욕카드번호 및 유효기간, 비밀번호 앞2자리를<br />입렵해주세요.
            </div>
          </splide-slide>
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <!-- 차량 추가 -->
            <div class="min-fix">
              <div class="transparent-box-wrap">
                <strong class="tit">차량 추가</strong>
                <div class="transparent-box parallel-box">
                    <template v-if="carIniputStatus != 'completion'">
                      <div class="form-box">
                        <div class="row">
                          <div class="input">
                              <input type="text" placeholder="차량번호">
                          </div>
                        </div>
                        <div class="row">
                          <div class="input">
                              <input type="text" placeholder="소유자명">
                          </div>
                        </div>
                        <template v-if="carIniputStatus === 'more'">
                          <div class="row">
                            <div class="input">
                                <input type="text">
                            </div>
                          </div>
                          <div class="row">
                            <div class="input">
                                <input type="text">
                            </div>
                          </div>
                          <div class="row">
                            <div class="input">
                                <input type="text">
                            </div>
                          </div>
                          <div class="row">
                              <div class="input auto">
                                  <input type="number" placeholder="멤버십 카드 번호 입력">
                              </div>
                              <div class="right"><button class="btn">간편인식</button></div>
                          </div>
                        </template>
                      </div>
                      <div class="btn-box">
                        <button v-if="carIniputStatus == 'basic'" class="btn-type1 st1" @click="carIniputStatus = 'more'">찾기</button>
                        <button v-else class="btn-type1 st1" @click="carIniputStatus = 'completion'">확인</button>
                      </div>
                    </template>

                    <template v-else>
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
                    </template>
                  </div>
              </div>
            </div>
             <div v-if="carIniputStatus === 'basic'" class="info-text">
              차량번호를 통해 차량정보를 추가합니다.
            </div>
             <div v-else-if="carIniputStatus === 'more'" class="info-text">
              정보 확인 후 등록을 진행해주세요.<br />
              멤버십카드가 없을 경우 모바일 카드번호가 부여됩니다.
            </div>
             <div v-else class="info-text">
              차량번호를 통해 차량정보를 추가합니다.
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
                        <div class="space-text"><span>BMW</span><span>Charging</span></div>
                        <div class="right"><b>상세정보</b></div>
                      </div>
                      <div class="row">
                        250,000원
                      </div>
                      <div class="row">
                        2021-07-01 ~ 2022-07-01 
                      </div>
                  </div>
                  <div class="btn-box">
                    <button class="btn-type1 st1" @click="currentPage = 4">확인</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="info-text">
              차량에 부여된 상품을 확인합니다.
            </div>
          </splide-slide>
          
          <splide-slide>
            <div class="logo-chargev"><Icon type="chargev" /></div>
            <div class="min-fix">
              <!-- pin설정 -->
              <PinSetting @pinset="pinIniputStatus = 'completion'" />
              </div>
              <div v-if="pinIniputStatus != 'completion'" class="info-text">
                PIN코드를 입력해주세요.
              </div>
              <div v-else class="info-text">
                PIN코드를 확인해주세요.
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
      carIniputStatus: 'basic',
      pinIniputStatus: '',
      btmLayer:{
        agency: false,
      },
      agency: {},
      options: {
        perPage: 1,
        perMove: 1,
        arrows: false,
      },    
      currentPage: 0,  
      paging: new Array(6),
    }
  },
  methods: {
    agencySelect(val){
      this.agency = val
      this.btmLayer.agency = false
    },
  }
}
</script>
