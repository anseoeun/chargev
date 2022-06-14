<template>
    <div class="addr-wrap">
        <h2 class="tit-type1">주소</h2>
        <div class="form-box-wrap">
            <div class="form-box">
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.addr" placeholder="주소 입력" />
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2" @click="resultShow = true">검색</button>
            </div>
        </div>

        <template v-if="resultShow">
            <!-- 검색결과 -->
            <h2 class="tit-type1">검색결과</h2>
            <ul class="addr-list" ref="addrlist">
                <li v-for="(item, index) in addrList" :key="index">
                    <button @click="setAddr($event, searchType)">{{ item }}</button>
                </li>
            </ul>
        </template>

        <template v-if="addrDetailShow">
            <!-- 상세주소 -->
            <h2 class="tit-type1">상세주소</h2>
            <div class="form-box-wrap">
                <div class="form-box">
                    <div class="row">
                        <div class="input">
                            <Input type="text" v-model="form.addrdetail" placeholder="상세주소 입력" />
                        </div>
                    </div>
                </div>
                <div class="btn-box">
                    <button class="btn-type1 st2" @click="$emit('confirm')">확인</button>
                </div>
            </div>
        </template>

        <template v-if="addrListShow">
            <!-- 충전소 선택 -->
            <h2 class="tit-type1">충전소 선택</h2>
            <ChargeSearchList
            :data="chargeList"
            @selected="$emit('selected')"
            />            
        </template>
    </div>
</template>

<script>
import ChargeSearchList from '@/views/common/ChargeSearchList'
export default {
  components:{
    ChargeSearchList
  },      
  props:{
      searchType: {
          type: String,
          default: 'addrDetail'
      }
  },
  data(){
    return{
      form: {
        addr: '',
        addrdetail: ''
      },
      resultShow: false,
      addrDetailShow: false,
      addrListShow: false,
      addrList: [
          '서울시 송파구 올림픽로 300',
          '강원도 평창군 올림픽로 300 강원도 평창군 올림픽로 300',
          '서울시 송파구 올림픽로 300',
      ],
       chargeList: [
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'addr2': '서울시 송파구 올림픽로 300<br />지하 2층 R5 구역',
          'status': '충전가능',
          'start': '269',
          'end': '279',
          'km': '100km',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'addr2': '서울시 송파구 올림픽로 300<br />지하 2층 R5 구역',
          'status': '충전가능',
          'start': '269',
          'end': '279',
          'km': '100km',
          tag: [
            '혼잡함', '할인중'
          ],
        },
      ],

      options: {
        perPage: 1,
        perMove: 1,
        destroy: true,
      },
      currentPage: 0
    }
  },
  methods: {
    setAddr(e, type){
      this.$refs.addrlist.querySelectorAll('li button').forEach((el) => {
          el.classList.add('off')
      });
      e.target.classList.remove('off');
      if(type === 'addrDetail') this.addrDetailShow = true
      else if(type === 'addrList') this.addrListShow = true
    }
  }
}
</script>
