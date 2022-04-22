<template>
    <div class="transparent-box-wrap">
        <strong class="tit">차량 추가</strong>
        <div class="transparent-box parallel-box">
            <template v-if="carIniputStatus != 'completion'">
                <div class="form-box">
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.carnum" placeholder="차량번호" />
                    </div>
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.user" placeholder="소유자명" />
                    </div>
                </div>
                <template v-if="carIniputStatus === 'more'">
                    <div class="row">
                        <div class="input">
                            <Input type="text" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input">
                            <Input type="text" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input">
                            <Input type="text" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input auto">
                            <Input type="number" v-model="form.memcardnum" maxlength="16" placeholder="멤버십 카드 번호 입력" />
                        </div>
                        <div class="right"><button class="btn">간편인식</button></div>
                    </div>
                </template>
                </div>
                <div class="btn-box">
                    <button v-if="carIniputStatus == 'basic'" class="btn-type1 st1"  @click="carIniputStatus = 'more';$emit('status', carIniputStatus)">찾기</button>
                    <button v-else class="btn-type1 st1" @click="carIniputStatus = 'completion';$emit('status', carIniputStatus)">확인</button>
                </div>
            </template>

            <template v-else>
                <div class="info-box">
                    <div class="row">
                        <div class="space-text"><span>BMW</span><span>530e</span></div>
                        <div class="right"><b>상세정보</b></div>
                    </div>
                    <div class="row">
                        02보6593
                    </div>
                    <div class="row">
                        <div class="space-text"><span>M</span><span>1010</span><span>0101</span><span>1234</span><span>1234</span></div>
                    </div>
                    <div class="row">
                        <span class="space-text"><span>C</span><span>5361</span><span>48**</span><span>****</span><span>4151</span></span>
                    </div>
                </div>
                <div class="btn-box">
                    <button class="btn-type1 st1" @click="confirm">확인</button>
                </div>
            </template>
        </div>
    </div>
</template>

<script>

export default {
  data(){
    return{
      form:{
        carnum: '',
        user: '',
        memcardnum: '',
      },
      carIniputStatus: 'basic',
    }
  },
  methods: {
      confirm(){
          this.$emit('confirm', this.form);
      }
  }
}
</script>
