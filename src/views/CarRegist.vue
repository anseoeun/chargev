<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <template v-if="status === 'basic'">
        <div class="min-fix">
          <h2 class="tit-type1">차량등록</h2>
          <div class="btn-box">
              <button class="btn-type1 st2" @click="status = 'regist-person'">일반/법인</button>
              <button class="btn-type1 st2" @click="status = 'regist-coper'">리스/렌트</button>
              <button class="btn-type1 st2" @click="registAfterPop = true">나중에 등록</button>
          </div>
        </div>
        <div class="info-text">
            리스 또는 렌트차량의 경우 “리스/렌트”,
            <br />그 밖의 차량은 “일반/법인”을 선택해주세요.
        </div>
      </template>

      <template v-else>
        <div class="min-fix">
          <CarInfoAdd
            @status="setStatus"
            />
        </div>
        <div v-if="status === 'regist-person'" class="info-text">
          차량번호를 통해 차량정보를 추가합니다.
          <br />자동차등록증상의 소유자명을 정확하게 입력해주세요.
          <br />기존에 법인회원가입을 통해 등록된 법인차량이 있는 경우
          <br />공유키 사용(법인차량 등록) 버튼을 눌러주세요.
        </div>
        <div v-if="status === 'regist-shareKey'" class="info-text">
          차량번호를 통해 차량정보를 추가합니다.
          <br />법인, 리스/렌트 차량의 경우 자동차등록증상의
          <br />소유자명을 정확하게 입력해주세요.
        </div>
        <div v-if="status === 'regist-coper'" class="info-text">
          차량번호를 통해 차량정보를 추가합니다.
          <br />법인, 리스/렌트 차량의 경우 자동차등록증상의
          <br />소유자명을 정확하게 입력해주세요.
        </div>
        <template v-if="status === 'completion'">
          <div class="info-text">
            차량조회가 완료되었습니다.
            <br />충전시 사용할 멤버십카드를 등록합니다.
          </div>
          <div class="info-text">
            법인차량조회가 완료되었습니다.
            <br />충전시 사용할 카드를 등록합니다.
          </div>
        </template>
      </template>

    </div>


    <!-- 팝업 -->
    <Alert :is-open="registAfterPop" @close="registAfterPop = false" :close="true" class="header-title-size2">      
        <template slot="header">차량등록</template>
        <template slot="body">
          차량을 등록하지 않아도 충전소조회는 가능합니다.
          <br />다만 즉시충전 및 충전이력 확인 등의 기능은
          <br />사용이 불가능합니다.
        </template>
    </Alert>

  </div>
</template>

<script>
import CarInfoAdd from '@/views/common/CarInfoAdd'
export default { 
  components:{
    CarInfoAdd
  },    
  data(){
    return{             
      status: 'basic',
      form: {
        carnum: '',
        name: '',
        coperNum: '',
        shareKey: '',
        coperName: '',
      },
      card: {
          company: 'bmw',
          carInfo: ['BMW', '530e', '02보6596'],
          num: ['9999', '9999', '9999', '9999'],
          selected: false,
      },
     registAfterPop: false,
    }
  },
  methods: {
    setStatus(status){
       this.status = status
    }
  }
}
</script>
