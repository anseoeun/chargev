<template>
  <div class="contents">
    <div class="charger-install-wrap">
      <div class="charger-install-header">
        <h2 class="tit-type3">설치 요청 날짜 선택</h2>
        <p class="text-type1">충전기 설치를 원하는 장소와 날짜를<br>선택 해주세요.</p>
      </div>

      <!-- 가입자정보 -->
      <div class="shadow-box">
        <h3 class="tit-type4">가입자정보</h3>
        <div class="grid-list">
            <div class="row">
                <div class="tit">이름</div>
                <div class="text">이상욱</div>
            </div>
            <div class="row">
                <div class="tit">전화번호</div>
                <div class="text">010-9467-3693</div>
            </div>
        </div>
      </div>

      <!-- 주소입력 -->
      <div class="shadow-box">
        <h3 class="tit-type4">주소입력 <div class="right"><button v-if="isAddress" class="c-gray" @click="addressModify">수정</button></div></h3>
        <div v-if="addressInfo || addressDetailInfo" class="grid-list">
            <div v-if="addressInfo" class="row">
                <div class="tit">주소</div>
                <div class="text">{{ address }}</div>
            </div>
            <div v-if="addressDetailInfo" class="row">
                <div class="tit">상세주소</div>
                <div class="text">{{ addressDetail }}</div>
            </div>
        </div>
        <!-- search-box -->
        <div v-if="!isAddress" class="search-box">
          <div v-if="addressForm" class="form-layer-wrap">
            <input type="text" placeholder="주소입력" v-model="address" @keyup="addressLayer = address.length > 0">
            <div v-if="addressLayer" class="form-layer">
              <div class="layer">
                <em>검색결과</em>
                <ul>
                  <li v-for="(item, index) in addressList" :key="index" @click="setAddress(item)"><button>{{ item }}</button></li>
                </ul>
              </div>
            </div>
          </div>
          <input v-if="addressDetailForm" type="text" placeholder="상세주소입력" v-model="addressDetail">
          <button class="btn-type1 st1" :disabled="!addressInfo" @click="setDetailAddress">확인</button>
        </div>
        <!-- // search-box -->
      </div>      

      <!-- 실사 방문 요청일 선택 -->
      <div v-if="applyDateShow" class="shadow-box">
        <h3 class="tit-type4">실사 방문 요청일 선택 <div class="right"><button v-if="isDate" class="c-gray" @click="dateModify">수정</button></div></h3>
        <div v-if="applyDateInfo" class="grid-list">
            <div class="row">
                <div class="tit">방문 요청일</div>
                <div class="text">{{ applyDate }}</div>
            </div>
            <div class="row">
                <div class="tit">방문 요청시간대</div>
                <div class="text">{{ applyTime }}</div>
            </div>
        </div>        
        <div v-if="applyDateSlect" class="select-date">
          <div class="row row-header">
              <div class="cell"><button disabled>이전</button></div>
              <div class="cell">시간대 선택</div>
              <div class="cell"><button>다음</button></div>
          </div>
          <div class="row">
              <div class="cell">설치<br>시간대</div>
              <div v-for="(item, name) in dateList" :key="name" class="cell tit" v-html="getDay(name)"></div>
          </div>
          <div class="row">
              <div class="cell">09:00<br>~13:00</div>
              <div v-for="(item, name) in dateList" :key="name" class="cell c-blue"><button :disabled="!item['09:00 ~ 13:00']" v-html="getTimeStatus(item['09:00 ~ 13:00'])" @click="setDateStatus(Object.keys(item)[0], name)"></button></div>
          </div>
          <div class="row">
              <div class="cell">14:00<br>~17:00</div>
              <div v-for="(item, name) in dateList" :key="name" class="cell c-blue"><button :disabled="!item['09:00 ~ 13:00']" v-html="getTimeStatus(item['14:00 ~ 17:00'])" @click="setDateStatus(Object.keys(item)[1], name)"></button></div>
          </div>
      </div>
      </div>      

      <!-- 옵션 선택 -->
      <div v-if="optionShow" class="shadow-box">
        <h3 class="tit-type4">옵션 선택 <div class="right"><button v-if="isOption" class="c-gray" @click="isOption = false">수정</button></div></h3>
        <div class="grid-list">
            <div class="row" v-for="(item , index) in optList" :key="index">
                <div class="tit">
                   <button  @click="checkIcon($event, 'optionChecked', index)">
                    <Icon type="check" :class="{on: optionChecked[index]}" />
                    {{ item.name }} 추가
                  </button>
                </div>
                <div class="text align-r">{{ item.price }}원</div>
            </div>
        </div>        
        <button class="btn-type1 st1" :disabled="optionChecked.length <= 0" v-if="!isOption" @click="isOption = true">확인</button>
      </div>      

      <template v-if="isOption">
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
                      <button  @click="checkIcon($event, 'ruleChecked')">
                        <Icon type="check" :class="{on: ruleChecked}" />
                        개인정보 제3자 제공 동의
                      </button>
                    </div>
                    <div class="text align-r"><Icon type="arr-right" /></div>
                </div>
            </div>        
            <router-link to="/" class="btn-type1 st1">충전기 설치 신청</router-link>
          </div>      
      </template>
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
      //주소입력
      isAddress: false,
      address: '',
      addressForm: true,
      addressDetailForm: false,
      addressDetail: '',
      addressInfo: false,
      addressDetailInfo: false,
      addressLayer: false,
      addressList: [
        '서울시 송파구 롯데타워 지하2층',
        '서울시 송파구 롯데타워 지하3층',
        '서울시 송파구 롯데타워 지하4층',
        '서울시 송파구 롯데타워 지하5층',
        '서울시 송파구 롯데타워 지하6층',
        '서울시 송파구 롯데타워 지하7층',
        '서울시 송파구 롯데타워 지하8층',
        '서울시 송파구 롯데타워 지하9층',
        '서울시 송파구 롯데타워 지하10층',
      ],

      //실사 방문 요청일 선택
      applyDateShow: false,
      isDate: false,
      applyDateInfo:false,
      applyDateSlect: true,
      year: '2022',
      dateList: {
          '2022.오늘<br>(목)' : {
            '09:00 ~ 13:00' : false,
            '14:00 ~ 17:00' : false
          },
          '2022.02.04<br>(금)' : {
            '09:00 ~ 13:00' : false,
            '14:00 ~ 17:00' : false
          },
          '2022.02.05<br>(토)' : {
            '09:00 ~ 13:00' : false,
            '14:00 ~ 17:00' : false
          },
          '2022.02.06<br>(일)' : {
            '09:00 ~ 13:00' : false,
            '14:00 ~ 17:00' : false
          },
          '2022.02.07<br>(월)' : {
            '09:00 ~ 13:00' : true,
            '14:00 ~ 17:00' : true
          },
          '2022.02.08<br>(화)' : {
            '09:00 ~ 13:00' : true,
            '14:00 ~ 17:00' : true
          },
          '2022.02.09<br>(수)' : {
            '09:00 ~ 13:00' : true,
            '14:00 ~ 17:00' : true
          },
      },
      applyDate: '',
      applyTime: '',

      //옵션 선택
      optionShow: false,
      isOption: false,
      optionChecked: [],
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
   
  },
  methods: {
    setAddress(val){
      this.addressLayer = false;
      this.address = val;
      this.addressForm = false;
      this.addressDetailForm = true;
      this.addressInfo = true;
    },
    setDetailAddress(){
      this.addressDetailForm = false;
      this.addressDetailInfo = true;
      this.isAddress = true;
      this.applyDateShow = true;
    },
    addressModify(){
      this.isAddress = false;
      this.addressForm = true;
      this.addressInfo = false;
      this.addressDetailInfo = false;
      this.addressDetail = '';
      this.applyDateShow = false;
    },
    getDay(day){
      return day.substring(5, 20)
    },
    getTimeStatus(status){  
      return status ? '접수<br>가능' : '접수<br>마감'
    },
    setDateStatus(item, name){
      this.applyDate = name.replace('<br>', '');
      this.applyTime = item;
      this.applyDateInfo = true;
      this.applyDateSlect = false;      
      this.isDate = true;
      this.optionShow = true;
    },
    dateModify(){
      this.applyDateInfo = false;
      this.applyDateSlect = true;   
    }
  }

}
</script>
