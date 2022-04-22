<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-qna max">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
          <template slot="content">
              <!-- 충전기 사용방법 -->
              <splide-slide>
                <div v-if="gbn === 'cargerUseMethod' " class="qna-wrap">
                    <!-- 모바일카드를 통한 충전 -->
                    <h2 class="tit-type1">모바일카드를 통한 충전</h2>
                    <div class="qna-text">
                        내용
                    </div>
                    <!-- 멤버십카드를 통한 충전 -->
                    <h2 class="tit-type1">멤버십카드를 통한 충전</h2>
                    <div class="qna-text">
                        내용
                    </div>
                    <!-- 비회원 충전 -->
                    <h2 class="tit-type1">비회원 충전</h2>
                    <div class="qna-text">
                        내용
                    </div>
                </div>
                <!-- 충전기 설치신청 -->
                <div v-if="gbn === 'cargerInstallApply' " class="qna-wrap">
                    <h2 class="tit-type1">충전기 설치신청</h2>
                    <div class="qna-text align-c">
                        충전기 설치 신청은<br />
                        모바일 앱을 통해 신청이<br />
                        가능합니다.<br />
                        아래의 버튼을 눌러 주세요.
                    </div>
                    <div class="btn-box">
                        <router-link to="/" class="btn-type1 st2">충전기 설치 신청 하러가기</router-link>
                    </div>
                </div>
                <!-- 충전기 종류 안내 -->
                <div v-if="gbn === 'cargerSortGuide' " class="qna-wrap">
                    <!-- 속도별 구분 -->
                    <h2 class="tit-type1">속도별 구분</h2>
                    <div class="qna-text">
                        <p>급속: 시간당 50KW, 100kW 이상 충전이 가능한 충전기입니다.</p>
                        <p>완속: 시간당 3~7kW 충전이 가능한 충전기입니다.</p>
                    </div>
                    <!-- 개방여부별 구분 -->
                    <h2 class="tit-type1">개방여부별 구분</h2>
                    <div class="qna-text">
                        <p>개방형: 외부인에게 개방되어 모두 사용할 수 있도록 설치된 충전기입니다.</p>
                        <p>비개방형: 외부로 개방되지 않아 승인된 사용자만 사용할 수 있는 충전기(사옥, 아파트 등)입니다.</p>
                    </div>
                    <!-- 규격별 구분 -->
                    <h2 class="tit-type1">규격별 구분</h2>
                    <div class="qna-text">
                        <p>DC콤보(급속): 대한민국 표준으로 정해진 급속충전 규격으로 현재 출시 중인 대부분의 차량이 DC콤보 규격을 사용하고 있습니다.</p>
                        <p>DC차데모(급속): 일본의 급속충전 표준 규격으로 2018년 이전 현대차 (아이오닉), KIA (레이, 구형 쏘울), 닛산 리프 등에서 사용이 가능합니다.</p>
                        <p>※ 테슬라 고객은 차데모 어댑터를 이용하여 충전이 가능합니다. <span class="c-green">단, 어댑터 사용으로 인한 차량, 충전기 고장 등의 책임은 사용자에게 있습니다.</span></p>
                    </div>
                </div>
                <!-- PHEV차량 충전안내 -->
                <div v-if="gbn === 'phevGuide' " class="qna-wrap">
                    <!-- PHEV 완속 충전 -->
                    <h2 class="tit-type1">PHEV 완속 충전</h2>
                    <div class="qna-text">
                        <p>PHEV 차량은 완속 충전 방식으로 충전이 가능합니다.</p>
                        <p>PHEV는 평균 충전속도는 시간당 3.3kW로 평균 4시간이면 완충이 가능하기 때문에, 충전이 완료되면 다음 충전 이용 고객을 위해 반드시 차량을 이동하여 주시기 바랍니다.</p>
                    </div>
                    <!-- PHEV 급속 충전 -->
                    <h2 class="tit-type1">PHEV 급속 충전</h2>
                    <div class="qna-text">
                        <p>PHEV 차량은 급속 충전이 불가합니다.</p>
                        <p>변환 젠더 등을 이용해 급속충전기를 완속으로 이용할 경우 출력이 급격히 낮아지므로, 급속충전기 이용 및 운영 목적에 적합하지 않습니다.</p>
                        <p>또한 이로 인한 이용자 간의 분쟁, 충전기 운영 방해 및 영업 손실에 해당될 수 있으므로 성숙한 충전 문화 확립을 위해 PHEV 차량은 완속충전기를 이용해주시기 바랍니다.</p>
                    </div>
                </div>
                <div v-if="gbn === 'roamingGuide' " class="qna-wrap">
                    <!-- 로밍 안내 -->
                    <h2 class="tit-type1">로밍 안내</h2>
                    <div class="qna-text">
                        <p>차지비는 전기차 충전서비스 이용 고객들의 원할한 충전을 위하여 로밍서비스를 진행하고 있습니다.</p>
                        <p>로밍이 가능한 충전소 및 요금은 ‘충전요금 안내’페이지에서 확인이 가능하며, 아래의 케이스는 로밍이 불가능할 수 있습니다.</p>
                    </div>
                    <div class="btn-box">
                        <router-link to="/" class="btn-type1 st2">충전요금 안내 페이지로 이동</router-link>
                    </div>
                    <!-- 한국전력 공동주택 충전기 -->
                    <h2 class="tit-type1">한국전력 공동주택 충전기</h2>
                    <div class="qna-text">
                       한국전력 공동주택 충전기는 한국전력 정책상 한국전력 회원으로만 이용이 가능합니다. 따라서 차지비 회원으로 이용이 불가능하며, 한국전력 회원으로 가입 후 사용하여 주시기 바랍니다.
                    </div>
                    <!-- 자체운영 충전기 -->
                    <h2 class="tit-type1">자체운영 충전기</h2>
                    <div class="qna-text">
                       <p>아파트에 설치된 충전기 중 아파트 자체관리 및 관리비로 청구되는 충전기는 차지비 회원으로 사용이 불가능합니다.</p>
                       <p>이용 관련 문의는 관리사무소를 통해 진행해주시기 바랍니다. </p>
                    </div>
                </div>                
              </splide-slide>
          </template>
        </Carousel>
      </template>
    </BtmLayer>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
    gbn:{
      type: String,
      default: ''
    }
  },  

  data(){
    return{
      options: {
        perPage: 1,
        perMove: 1,
        destroy: true,
      },
      currentPage: 0
    }
  },
}
</script>
