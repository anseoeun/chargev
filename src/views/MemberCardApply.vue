<template>
  <div class="contents">
    <div class="member-card-wrap">
      <div class="member-card-header">
        <h2 class="tit-type3">멤버십 카드 신청</h2>
        <p class="text-type1">멤버십 카드를 수령할 주소를 <br>입력해주세요.</p>
      </div>

      <!-- 주소입력 -->
      <div class="shadow-box">
        <h3 class="tit-type4">주소입력 <div class="right"><button v-if="isAddress" class="c-gray" @click="addressModify">수정</button></div></h3>
        <div v-if="addressInfo || addressDetailInfo" class="grid-list">
            <div v-if="addressInfo" class="row">
                <div class="tit">주소</div>
                <div class="txt">{{ address }}</div>
            </div>
            <div v-if="addressDetailInfo" class="row">
                <div class="tit">상세주소</div>
                <div class="txt">{{ addressDetail }}</div>
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
    }        
  }

}
</script>