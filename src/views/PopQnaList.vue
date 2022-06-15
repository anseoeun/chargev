<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-qna max">
      <template slot="content">
        <div class="cont-scroll">
        <!-- 충전기 사용방법 -->
        <div v-if="gbnSet === 'service1' " class="qna-wrap">
            <!-- 모바일카드를 통한 충전 -->
            <h2 class="tit-type1">모바일카드를 통한 충전</h2>
            <div class="qna-text">
                <p>내용</p>
            </div>
            <!-- 멤버십카드를 통한 충전 -->
            <h2 class="tit-type1">멤버십카드를 통한 충전</h2>
            <div class="qna-text">
                <p>내용</p>
            </div>
            <!-- 비회원 충전 -->
            <h2 class="tit-type1">비회원 충전</h2>
            <div class="qna-text">
                <p>내용</p>
            </div>
        </div>
        <!-- 충전기 설치신청 -->
        <div v-if="gbnSet === 'service2' " class="qna-wrap">
            <h2 class="tit-type1">충전기 설치신청</h2>
            <div class="qna-text align-c">
                <p>
                  충전기 설치 신청은<br />
                  모바일 앱을 통해 신청이<br />
                  가능합니다.<br />
                  아래의 버튼을 눌러 주세요.
                </p>
            </div>
            <div class="btn-box">
                <router-link to="/" class="btn-type1 st2">충전기 설치 신청 하러가기</router-link>
            </div>
        </div>
        <!-- 충전기 종류 안내 -->
        <div v-if="gbnSet === 'service3' " class="qna-wrap">
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
                <p>AC3상(급속): 르노 삼성 SM3 ZE 차량에서 사용되는 급속충전 규격입니다.</p>
                <p>
                  AC단상 완속(5핀): 전세계적으로 통용되는 완속 충전 표준 규격으로 국내 대부분의 차량(PHEV 포함)이 호환되는 충전 규격입니다.
                  <br />C타입 충전기는 충전커넥터가 부착되어 있으며, B타입 충전기는 충전커넥터가 없어 별도구매 후 인터넷 부분에 연결하여 사용이 필요합니다.
                </p>
                <p>
                  ※ 테슬라 고객은 J1772 어댑터를 이용하여 충전이 가능합니다.
                  <br /><span class="c-green">단, 어댑터 사용으로 인한 차량, 충전기 고장 등의 책임은 사용자에게 있습니다.</span>
                </p>
            </div>
        </div>
        <!-- PHEV차량 충전안내 -->
        <div v-if="gbnSet === 'service4' " class="qna-wrap">
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
        <!-- 충전요금 안내 -->
        <div v-if="gbnSet === 'service7' " class="qna-wrap">
          <ChargePriceGuide />
        </div>
        <!-- 로밍서비스 안내 -->
        <div v-if="gbnSet === 'service8' " class="qna-wrap">
            <!-- 로밍 안내 -->
            <h2 class="tit-type1">로밍 안내</h2>
            <div class="qna-text">
                <p>차지비는 전기차 충전서비스 이용 고객들의 원할한 충전을 위하여 로밍서비스를 진행하고 있습니다.</p>
                <p>로밍이 가능한 충전소 및 요금은 ‘충전요금 안내’페이지에서 확인이 가능하며, 아래의 케이스는 로밍이 불가능할 수 있습니다.</p>
            </div>
            <div class="btn-box">
                <button @click="gbnSet = 'service7'" class="btn-type1 st2">충전요금 안내 페이지로 이동</button>
            </div>
            <!-- 한국전력 공동주택 충전기 -->
            <h2 class="tit-type1">한국전력 공동주택 충전기</h2>
            <div class="qna-text">
               <p>한국전력 공동주택 충전기는 한국전력 정책상 한국전력 회원으로만 이용이 가능합니다. 따라서 차지비 회원으로 이용이 불가능하며, 한국전력 회원으로 가입 후 사용하여 주시기 바랍니다.</p>
            </div>
            <!-- 자체운영 충전기 -->
            <h2 class="tit-type1">자체운영 충전기</h2>
            <div class="qna-text">
               <p>아파트에 설치된 충전기 중 아파트 자체관리 및 관리비로 청구되는 충전기는 차지비 회원으로 사용이 불가능합니다.</p>
               <p>이용 관련 문의는 관리사무소를 통해 진행해주시기 바랍니다. </p>
            </div>

            <h2 class="tit-type1">비로밍 사업자 충전기</h2>
            <div class="qna-text">
              <p>차지비와 로밍 협약이 되어있지 않은 충전사업자는 차지비 카드를 통한 이용이 불가능합니다. 로밍이 가능한 사업자를 확인하고 싶으신 경우에는 '충전요금 안내' 페이지에서 요금안내표를 확인바랍니다.</p>
            </div>
            <div class="btn-box">
                <button @click="gbnSet = 'service7'" class="btn-type1 st2">충전요금 안내 페이지로 이동</button>
            </div>
        </div>  


        <!-- 모바일카드 이용 -->
        <div v-if="gbnSet === 'card1' " class="qna-wrap">
            <!-- 모바일카드 안내 -->
            <h2 class="tit-type1">모바일카드 안내</h2>
            <div class="qna-text">
                <p>모바일카드는 최초가입시 발급되는 16자리 멤버십 번호가 부여된 카드로써 차지비 충전기에서 실물카드 없이 사용 가능합니다.</p>
            </div>
            <!-- 멤버십카드 신청 -->
            <h2 class="tit-type1">멤버십카드 신청</h2>
            <div class="qna-text">
                <p>실물 충전카드 발급을 원하실 경우 멤버십카드 신청에서 발급 신청 가능합니다.<br />(충전카드 발급비용 유료 6,000원)</p>
                <p>차지비 충전카드 발급을 원하실 경우 아래의 버튼을 눌러주세요.</p>
            </div>
            <div class="btn-box">
                <router-link to="/" class="btn-type1 st2">멤버십카드 신청 하러가기</router-link>
            </div>
        </div>  
        <!-- 멤버십카드 발급 -->
        <div v-if="gbnSet === 'card2' " class="qna-wrap">
            <h2 class="tit-type1">멤버십카드 발급</h2>
            <div class="qna-text">
                <p>차지비는 모바일카드를 통한 충전을 지원합니다. 타사업자 충전기 사용을 위해 멤버십카드가 필요하신 경우 별도로 발급이 가능합니다.<br />(유료, 6,000원)</p>
                <p>차지비 충전카드 발급을 원하실 경우 아래의 버튼을 눌러주세요.</p>
            </div>
            <div class="btn-box">
                <router-link to="/" class="btn-type1 st2">멤버십카드 신청 하러가기</router-link>
            </div>
        </div>  
        <!-- 배송현황 확인 -->
        <div v-if="gbnSet === 'card3' " class="qna-wrap">
            <h2 class="tit-type1">배송현황 확인</h2>
            <div class="qna-text">
                <p>아래의 버튼을 통해 배송현황을 확인하실 수 있습니다. 배송현황은 우체국 서버와의 통신을 통해 실시간으로 이루어지며, 우체국 서버에 등록이 되지 않은 경우 업데이트가 늦어질 수 있습니다.</p>
            </div>
            <div class="btn-box">
                <router-link to="/" class="btn-type1 st2">멤버십카드 발급기록 확인</router-link>
            </div>
        </div>  
        <!-- 멤버십카드 재발급 -->
        <div v-if="gbnSet === 'card4' " class="qna-wrap">
            <h2 class="tit-type1">멤버십카드 재발급</h2>
            <div class="qna-text">
                <p>차지비는 멤버십카드를 분실하신 경우에도 모바일 앱을 통해 충전이 가능합니다.</p>
                <p>멤버십카드를 분실하신 경우 아래의 버튼을 통해 멤버십카드 재발급을 진행해주세요.</p>
            </div>
            <div class="btn-box">
                <router-link to="/" class="btn-type1 st2">멤버십카드 재발급 하러가기</router-link>
            </div>
        </div>  
        <!-- 멤버십카드 인증불가 -->
        <div v-if="gbnSet === 'card5' " class="qna-wrap">
           <!-- 결제카드 문제로인한 미결제 -->
            <h2 class="tit-type1">결제카드 문제로인한 미결제</h2>
            <div class="qna-text">
                <p>등록된 신용카드들이 거래정지, 분실, 유효기간 만료 등의 이유료 사용불가되어 미결제 충전건이 발생된 경우 더이상 충전이 불가능해집니다.</p>
                <p>아래의 버튼을 통해 신용카드 정보를 변경해주세요.</p>
            </div>
            <div class="btn-box">
                <button @click="$emit('creditCardInfoChange')" class="btn-type1 st2">신용카드 정보 변경하기</button>
            </div>
           <!-- 충전기 통신장애 -->
            <h2 class="tit-type1">충전기 통신장애</h2>
            <div class="qna-text">
                <p>충전기 통신장애가 있을 경우 회원정보 인증이 불가능해집니다. 다른 충전기를 이용바랍니다.</p>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2" @click="$emit('chargerBreakdownApply')">충전기 고장신고하기</button>
            </div>
           <!-- 비제휴 로밍사 -->
            <h2 class="tit-type1">비제휴 로밍사</h2>
            <div class="qna-text">
                <p>제휴가 되지 않은 로밍사, 한국전력 공동주택 충전기는 이용이 불가능합니다. 제휴 로밍사를 확인부탁드립니다.</p>
            </div>
            <div class="btn-box">
                <button @click="gbnSet = 'service7'" class="btn-type1 st2">로밍사 확인하기</button>
            </div>
           <!-- 충전카드 불량 -->
            <h2 class="tit-type1">충전카드 불량</h2>
            <div class="qna-text">
                <p>여러 충전기에서 반복적으로 충전이 되지 않은 경우 충전카드의 문제일 수 있습니다. 충전카드는 반영구적으로 사용이 가능하나 자성 강력한 물체 옆에 두거나, 높은 온도에 오래 두었을 경우 문제가 생길 수 있습니다. 아래의 버튼을 통해 충전카드 재발급을 진행해주세요.</p>
            </div>
            <div class="btn-box">
                <router-link to="/" class="btn-type1 st2">멤버십카드 재발급 하러가기</router-link>
            </div>
        </div>  


        <!-- 완성차 프로모션 -->
        <div v-if="gbnSet === 'carpromo1' " class="qna-wrap">
           <!-- 완성차 프로모션-->
            <h2 class="tit-type1">완성차 프로모션</h2>
            <div class="qna-text">
                <p>차지비는 완성차 업체와 파트너십을 체결 후 충전이 가능한 충전 포인트를 지급해드리고 있습니다.</p>
                <p>차량 제조사별 충전포인트는 회원가입 후 대상자 확인 후에 지급되며, 차량 구매 등 대상자 확인 절차에 일정기간이 소요될 수 있습니다. 차량 제조사별 충전포인트는 회원가입이 완료된 시점으로부터 유효기간 동안 사용이 가능하며, 유효기간이 경과된 시점에는 자동 소멸됩니다.</p>
                <p>지급받은 포인트에 대한 금액 및 유효기간에 대한 내용은 내정보 -> 결제수단 관리에서 확인하실 수 있습니다.</p>
                <p>차지비와 제휴 후 프로모션이 지급된 완성차 업체는 아래와 같습니다.</p>
                <p>(아이콘)현대자동차,BMW, 벤츠, 재규어 랜드로버 , 닛산, 토요타, 르노삼성, GM, 볼보, 폴스타</p>
            </div>

           <!-- 부정사용 제한 -->
            <h2 class="tit-type1">부정사용 제한</h2>
            <div class="qna-text">
                <p>아래 각 호의 행위는 부정사용행위로 간주되며 이용약관 제 7조, 제26조에 의거하여 서비스 제재를 시행할 수 있습니다.</p>
                <p>
                  1) 혜택 및 서비스 대상 차량 외 다른 차량에프로모션 카드를 이용하여 충전하는 행위
                  <br />2) 금전의 대가 여부와 관계없이 혜택 및 서비스를 타인에게 양도, 대여하는 행위
                  <br />3) 사회통념상 상식적으로 발생할 수 없는 충전 행위
                  <br />4) 혜택 및 서비스에 대한 거래 행위가 적발되었을 경우 등 선
                </p>
                <p>부정사용 최초 적발 시 서비스 제재에 대해 사전 안내를 하고 있으며, 반복적인 부정 사용 행위가 반복될 경우, 서비스 이용 중지, 혜택 회수 등을 포함한 서비스 제재가 적용됩니다.</p>
            </div>
           <!-- 유효기간 만료 -->
            <h2 class="tit-type1">유효기간 만료</h2>
            <div class="qna-text">
                <p>차량 제조사별 지급된 충전포인트는 유효기간이 연장되지 않습니다.<br />유효기간은 만료 1년, 6개월, 3개월, 1개월, 15일 전 만료안내를 드리고 있으며, 반드시 유효기간 내에 사용해주시기 바랍니다.</p>
            </div>
            <div class="btn-box">
                <router-link to="/" class="btn-type1 st2">유효기간 확인 하러가기</router-link>
            </div>
        </div>    


        <!-- 비회원 충전 -->
        <div v-if="gbnSet === 'etc1' " class="qna-wrap">
            <h2 class="tit-type1">비회원 충전</h2>
            <div class="qna-text">
                <p>차집지는 모바일앱을 통한 비회원 결제를 지원하고 있습니다. 현장에서는 충전기 모델에 따라 후불교통카드, 삼성페이, IC카드 삽입 등으로 충전이 가능합니다.</p>
                <p>※ 차지비 회원가입 후 APP 통해 충전해보세요. 비회원 충전단가 보다 저렴한 요금으로 이용 가능합니다.</p>
                <p>비회원 충전방법은 충전기 사용방법을 통해 자세히 확인할 수 있습니다.</p>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2" @click="gbnSet = 'service1'">충전기 사용방법 확인하기</button>
            </div>
        </div>
        <!-- 기타 문의 -->
        <div v-if="gbnSet === 'etc2' " class="qna-wrap">
            <h2 class="tit-type1">기타 문의</h2>
            <div class="form-box-wrap">
              <div class="form-box">
                  <div class="row">
                      <div class="input">
                          <Input type="text" placeholder="내용 작성" />
                      </div>
                  </div>
              </div>
              <div class="btn-box">
                  <button class="btn-type1 st2" @click="$emit('qnaRegistCompleted')">문의사항 등록하기</button>
              </div>
          </div>
        </div>
        <!-- 회원 탈퇴 -->
        <div v-if="gbnSet === 'etc3' " class="qna-wrap">
            <h2 class="tit-type1">회원 탈퇴</h2>
            <div class="bold-text align-c">탈퇴 전 확인해주세요.</div>
            <div class="qna-text align-c">
                <p>회원 탈퇴 시 기존에 구매하신<br /><span class="c-green">선불금액은 모두 소멸처리</span>되며,<br />환불이 되지 않습니다.</p>
                <p>또한, 개인정보를 비롯하여<br /><span class="c-green">모든 데이터가 삭제</span>되며,<br />삭제된 데이터는 복구되지 않습니다.</p>
                <p>이후 재가입시 선불상품 재구매 또는 신용카드를 다시 등록하셔야 합니다.</p>
            </div>
            <div class="bold-text align-c">회원 탈퇴를 진행하시겠습니까?</div>
            <div class="btn-box">
                <button class="btn-type1 st2">회원 탈퇴하기</button>
            </div>
        </div>
        </div>
      </template>
    </BtmLayer>
</template>

<script>
import ChargePriceGuide from '@/views/common/ChargePriceGuide'
export default {
  components:{
    ChargePriceGuide
  },
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
  computed:{
    gbnSet:{
      get () {
        return this.gbn;
      },
      set (val) {
        this.$emit('update:gbn', val);
        return val;
      }
    }
  },
}
</script>
