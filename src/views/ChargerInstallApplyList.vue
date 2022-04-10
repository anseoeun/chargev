<template>
  <div class="contents">
    <div class="charger-install-wrap">
      <div class="charger-install-header">
        <h2 class="tit-type3">충전기 고장신고</h2>
        <p class="text-type1">공용 및 비공용 충전기 설치 신청이 가능합니다.</p>
      </div>

      <!-- 충전기 설치신청 없을때 -->
      <div class="shadow-box">
        <h3 class="tit-type4">충전기 설치신청</h3>
        <p class="no-result">진행중인 설치건이 없습니다.</p>
        <button class="btn-type1 st1">충전기 설치 신청</button>
      </div>

      <!-- 충전기 설치신청 없을때 -->
      <div class="shadow-box">
        <h3 class="tit-type4">충전기 설치신청</h3>
        <div class="selected-place">
          <div class="place-card">
            <div class="img" :style="`background-image:url(${place.src})`"></div>
            <div class="desc">
              <strong class="tit">{{ place.type }}</strong>
              <div class="txt">신청이 완료되었습니다.<br />설치업체에서 날짜를 확인중입니다.</div>
            </div>
          </div>
        </div>
        <button class="btn-type1 st1">충전기 설치 신청</button>
      </div>

      <!-- 실사 방문 요청일 선택 -->
      <div class="shadow-box">
        <h3 class="tit-type4">실사 방문 요청일</h3>
        <div class="grid-list">
            <div class="row">
                <div class="tit">방문 요청일</div>
                <div class="txt">{{ applyDate }}</div>
            </div>
            <div class="row">
                <div class="tit">방문 요청시간대</div>
                <div class="txt">{{ applyTime }}</div>
            </div>
        </div>        
      </div>  

      <!-- 옵션 선택 -->
      <div class="shadow-box">
        <h3 class="tit-type4">옵션 선택</h3>
        <div class="grid-list">
            <div class="row" v-for="(item , index) in optList" :key="index">
                <div class="tit">
                   <Icon type="check" class="on" /> 
                   &nbsp;
                   {{ item.name }} 추가
                </div>
                <div class="text align-r">{{ item.price }}원</div>
            </div>
        </div>        
      </div>     

      <!-- 결제정보 -->
      <div class="shadow-box">
        <h3 class="tit-type4">결제정보</h3>
        <div class="grid-list">
            <div class="row" v-for="(item , index) in totalList" :key="index">
                <div class="tit">{{ item.name }}</div>
                <div class="text align-r">{{ item.price }}원</div>
            </div>
            <div class="row">
                <div class="tit">합계(VAT 포함)</div>
                <div class="text align-r"><b>1,870,000</b>원</div>
            </div>
        </div>        
        <ul class="dash-indent-list">
          <li>- 표준공사 30m기준으로 초과시 m당 초과 비용  이 발생할 수 있습니다.</li>
          <li>- 여유 전력이 부족할 경우 전력 증설로 인한 한국 전력 표준 시설부담금이 발생할 수 있습니다.</li>
          <li>- 완속충전기 취득세가 부과될 수 있습니다.</li>
        </ul>
      </div>      

      <!-- 개인정보 제3자 제공 동의 -->
      <div class="shadow-box">
        <h3 class="tit-type4">개인정보 제3자 제공 동의</h3>
        <div class="grid-list">
            <div class="row">
                <div class="tit">
                  <Icon type="check" class="on" />
                  &nbsp;
                  개인정보 제3자 제공 동의
                </div>
                <div class="right">
                  <router-link to="/">
                    <Icon type="arr-right" />
                  </router-link>
                </div>
            </div>
        </div>
      </div>

      <div class="btn-wrap">
        <button class="btn-type1 st2">충전기 설치 신청 취소</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChargerInstallApplyList',
  components: {
    
  },
  data(){
    return{
      place: {
        type: '단독주택',
        src: require('@/assets/images/temp-place.jpg'),
      },

      applyDate: '2022.02.09(수)',
      applyTime: '09:00 ~ 13:00',

      //옵션 선택
      optList: [
        {
          name : '스탠드',
          price: '200,000'
        },
        {
          name : '스탠드2',
          price: '200,000'
        }
      ],      


      //결제정보
      totalList: [
        {
          name : '충전기',
          price: '1,500,000'
        },
        {
          name : '스탠드 추가',
          price: '200,000'
        },
        {
          name : '부가세',
          price: '170,000'
        }
      ],

      //개인정보 제3자 제공 동의
      ruleChecked: false      
    }
  },
   mounted(){
   
  }
}
</script>
