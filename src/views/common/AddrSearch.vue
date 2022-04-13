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
                    <button @click="setAddr">{{ item }}</button>
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
    </div>
</template>

<script>

export default {
  data(){
    return{
      form: {
        addr: '',
        addrdetail: ''
      },
      resultShow: false,
      addrDetailShow: false,
      addrList: [
          '서울시 송파구 올림픽로 300',
          '강원도 평창군 올림픽로 300 강원도 평창군 올림픽로 300',
          '서울시 송파구 올림픽로 300',
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
    setAddr(e){
      this.$refs.addrlist.querySelectorAll('li button').forEach((el) => {
          el.classList.add('off')
      });
      e.target.classList.remove('off');
      this.addrDetailShow = true
    }
  }
}
</script>
