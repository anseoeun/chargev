<template>
    <div class="form-box-wrap">
        <h2 class="tit-type1 c-white">결제정보 추가</h2>
        <!-- 카메라인식
        <template v-if="paymentIniputStatus == 'camera'">
            <div class="camera-box"></div>
            <div class="btn-box">
                <button class="btn-type1 st2" @click="paymentIniputStatus = 'form';$emit('status', paymentIniputStatus)">직접입력</button>
            </div>
        </template> -->
        <!-- 직접입력 -->
        <!-- <template v-else-if="paymentIniputStatus == 'form'"> -->
        <template v-if="paymentIniputStatus != 'completion'">
            <div class="form-box">
                <div class="row">
                    <div class="input auto">
                        <Input type="number" v-model="form.cardnum" maxlength="16" placeholder="카드번호" />
                    </div>
                    <!-- <div class="right">
                        <button class="btn" @click="paymentIniputStatus = 'camera';$emit('status', paymentIniputStatus)">카메라 인식</button>
                    </div> -->
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="number" v-model="form.maxdate" maxlength="4" placeholder="유효기간" />
                    </div>
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="number" v-model="form.password" maxlength="2" placeholder="비밀번호 앞2자리" />
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2" @click="paymentIniputStatus = 'completion';$emit('status', paymentIniputStatus)">확인</button>
            </div>
        </template>
        <!-- 완료-->
        <template v-if="paymentIniputStatus == 'completion'">
            <template v-if="completeType==='type2'">
                <div class="card-wrap">
                    <div class="card3">
                        <div class="card-info">
                            <div class="card-name">{{ cardList[0].company }}카드</div>
                            <div class="card-num">
                                <span>{{ cardList[0].num[0] }}</span>
                                <span>{{ cardList[0].num[1] }}</span>
                                <span>{{ cardList[0].num[2] }}</span>
                                <span>{{ cardList[0].num[3] }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-box">
                    <button class="btn-type1 st2" @click="confirm">확인</button>
                </div>                
            </template>
            <template v-else>
                <div class="card-wrap">
                    <Carousel class="slide-list" :content="true" :options="cardSliderOpt">
                        <template slot="content">
                            <splide-slide v-for="(item, index) in cardList" :key="index">
                                <div class="card3" :class="{on: item.selected}">
                                    <div class="card-info">
                                        <div class="card-name">{{ item.company }}카드</div>
                                        <div class="card-num">
                                            <span>{{ item.num[0] }}</span>
                                            <span>{{ item.num[1] }}</span>
                                            <span>{{ item.num[2] }}</span>
                                            <span>{{ item.num[3] }}</span>
                                        </div>
                                    </div>
                                    <div class="btn-box-inner">
                                        <div class="btn btn-order">
                                            <button class="btn-left"><Icon type="arr-left" /></button>
                                            결제순서변경
                                            <button class="btn-right"><Icon type="arr-right" /></button>
                                        </div>
                                        <button class="btn">카드삭제 <Icon type="delete" /></button>
                                    </div>
                                </div>
                            </splide-slide>
                            <splide-slide>
                                <button class="card3">
                                    <div class="center">
                                        <Icon type="add-plus" />
                                        <p class="txt">카드추가</p>
                                    </div>
                                </button>
                            </splide-slide>
                            <splide-slide>
                                <button class="card4">
                                    <div class="center">
                                        <Icon type="payco" />
                                        <p class="txt">등록하기</p>
                                    </div>
                                </button>
                            </splide-slide>
                        </template>
                    </Carousel>
                </div>
                <div class="btn-box">
                    <button class="btn-type1 st2" @click="confirm">확인</button>
                </div>
            </template>
        </template>
    </div>
</template>

<script>

export default {
  props:{
      completeType: {
          type : String,
          default: ''
      }
  },
  data(){
    return{
      form:{
        cardnum: '',
        maxdate: '',
        password: '',
      },
      paymentIniputStatus: 'camera',
    //   carIniputStatus: 'basic',
      pinIniputStatus: '',

      cardSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
        destroy: false,
      },      
      // 신용카드
      cardList: [
          {
              date: '02/24',
              company: '삼성',
              num: ['****', '****', '****', '4151'],
              selected: true,
          }
      ],        
    }
  },
  methods: {
      confirm(){
          this.$emit('confirm', this.form);
      }
  }
}
</script>
