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
                <div class="text">{{ chargePlace }}</div>
            </div>
            <div class="row">
                <div class="tit">전화번호</div>
                <div class="text">{{ chargeId }}</div>
            </div>
        </div>
      </div>

      <!-- 충전기 선택 -->
      <div class="shadow-box">
        <h3 class="tit-type4">주소입력 <div class="right"><button v-if="isCharger" class="c-gray" @click="isCharger = false;">수정</button></div></h3>
        <!-- search-box -->
        <div v-if="!isCharger" class="search-box">
          <div class="form-layer-wrap">
            <input  type="text" placeholder="충전소명 입력" v-model="chargePlace">
            <div v-if="placeLayer" class="form-layer">
              <div v-if="chargePlace" class="layer">
                <em>검색결과</em>
                <ul>
                  <li v-for="(item, index) in chargeData.place" :key="index" @click="setPlace(item)"><button>{{ item }}</button></li>
                </ul>
              </div>
            </div>
          </div>
          <button class="btn-type1 st1" @click="placeLayer = true">확인</button>
        </div>
        <!-- // search-box -->
        <div v-if="isCharger" class="grid-list">
            <div class="row">
                <div class="tit">주소</div>
                <div class="text">{{ chargePlace }}</div>
            </div>
            <div class="row">
                <div class="tit">상세주소</div>
                <div class="text">{{ chargeId }}</div>
            </div>
        </div>
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

    }
  },
   mounted(){
   
  }
}
</script>
