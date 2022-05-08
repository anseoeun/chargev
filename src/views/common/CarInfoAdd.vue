<template>
    <div class="form-box-wrap">
        <h2 class="tit-type1 c-white">{{ title }}</h2>
        <template v-if="carIniputStatus == 'basic' || carIniputStatus == 'more'">
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
                        <div v-if="simpleRecognition" class="right"><button class="btn">간편인식</button></div>
                    </div>
                </template>
            </div>
            <div class="btn-box">
                <button v-if="carIniputStatus == 'basic'" class="btn-type1 st2"  @click="carIniputStatus = 'more';title='신규등록';$emit('status', carIniputStatus)">찾기</button>
                <button v-else class="btn-type1 st2" @click="carIniputStatus = 'completion';$emit('status', carIniputStatus)">확인</button>
                <button v-if="corper" class="btn-type1 st2" @click="carIniputStatus = 'corperCarRegist';$emit('status', carIniputStatus)">법인차 등록</button>
            </div>
        </template>

        <template v-if="carIniputStatus == 'completion' && completeType != 'list'">
            <div class="card-wrap">
                <div class="card5" :class="{on: chargeSelected}">
                    <Icon type="logo-benz" :src="require('@/assets/images/logo/logo-me.png')" class="company-logo" />
                    <div class="car-info">
                        <p class="space-txt"><span>BENZ</span><span>EQC400</span></p>
                        <p>01가5678</p>
                    </div>
                    <div class="number">1010-0101-1234-1234</div>
                    <div class="btn-box-inner">
                        <button class="btn-type1 st2" @click="chargeSelected = !chargeSelected">
                            <template v-if="chargeSelected">충전차량<Icon type="check" class="on" /></template>
                            <template v-else>충전차량으로 설정</template>
                        </button>
                    </div> 
                </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2" @click="confirm">확인</button>
            </div>
        </template>

        <template v-if="carIniputStatus == 'completion' && completeType == 'list'">
            <div class="card-wrap">
                <Carousel class="slide-list" :content="true" :options="carSliderOpt">
                    <template slot="content">
                        <splide-slide v-for="(item, index) in carList" :key="index">
                            <div class="card5" :class="{on: item.selected}">
                                <Icon v-if="item.company === 'bmw'" type="logo-bmw2" class="company-logo" />
                                <Icon v-if="item.company === 'benz'" type="logo-benz" :src="require('@/assets/images/logo/logo-me.png')" class="company-logo" />
                                <div class="car-info">
                                    <p class="space-txt"><span>{{ item.carInfo[0] }}</span><span>{{ item.carInfo[1] }}</span></p>
                                    <p>{{ item.carInfo[2] }}</p>
                                </div>
                                <div class="number">{{ item.num }}</div>
                                <div class="btn-box-inner">
                                    <button class="btn-type1 st2" @click="$set(item, 'selected', !item.selected)">
                                        <template v-if="item.selected">충전차량<Icon type="check" class="on" /></template>
                                        <template v-else>충전차량으로 설정</template>
                                    </button>
                                </div> 
                            </div>
                        </splide-slide>
                        <splide-slide>
                            <button class="card5" @click="btmLayer.PopCarInfoAdd = true">
                                <div class="center">
                                    <Icon type="add-plus" />
                                    <p class="txt">차량추가</p>
                                </div>
                            </button>
                        </splide-slide>
                    </template>
                </Carousel>
                <div class="btn-box">
                    <button class="btn-type1 st2" @click="confirm">확인</button>
                </div>
            </div>
        </template>

        <template v-if="carIniputStatus == 'corperCarRegist'">
            <div class="form-box"> 
                <div class="row">
                    <div class="input">
                        <Input type="number" v-model="form.key" placeholder="공유키 8자리 입력" maxlength="8" />
                    </div>
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="number" v-model="form.tel" placeholder="전화번호" />
                    </div>
                </div>
                <div class="row inp-file">
                    <input type="file" @change="handleFileChange($event)" />
                    <div class="input">
                        <Input type="text" v-model="form.file" placeholder="사업자등록증" />
                    </div>
                    <div class="right">
                        <button class="btn">첨부하기</button>
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2" @click="carIniputStatus = 'corperCarRegist2';$emit('status', carIniputStatus)">등록하기</button>
            </div>
        </template>        

        <template v-if="carIniputStatus == 'corperCarRegist2'">
            <div class="form-box"> 
                <div class="row">
                    <div class="input">
                        <Input type="number" v-model="form.key" placeholder="공유키 8자리 입력" maxlength="8" />
                    </div>
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="number" v-model="form.tel" placeholder="기존 소유자 명 입력" />
                    </div>
                </div>
                <div class="row inp-file">
                    <input type="file" @change="handleFileChange($event)" />
                    <div class="input">
                        <Input type="text" v-model="form.file" placeholder="가족관계증명서" />
                    </div>
                    <div class="right">
                        <button class="btn">첨부하기</button>
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2" >등록하기</button>
            </div>
        </template>        
    </div>
</template>

<script>

export default {
 props:{
    title:{
        type: String,
        default: '차량 추가'
    },
    simpleRecognition:{
        type: Boolean,
        default: false
    },
    corper:{
        type: Boolean,
        default: false
    },
    completeType:{
        type: String,
        default: ''
    },
 },
  data(){
    return{
      form:{
        carnum: '',
        user: '',
        memcardnum: '',
        key: '',
        tel: '',
        file: ''
      },
      carIniputStatus: 'basic',
      chargeSelected: false,

      // 차량관리
      carSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },      
      carList: [
          {
              company: 'bmw',
              carInfo: ['BMW', '530e', '02보6596'],
              num: '9999-9999-9999-9999',
              selected: true,
          },
          {
              company: 'benz',
              carInfo: ['BMW', '530e', '02보6596'],
              num: '1010-0101-1234-1234',
              selected: false,
          },
      ],      
    }
  },
  methods: {
      confirm(){
          this.$emit('confirm', this.form);
      },
      handleFileChange(e){
          this.$set(this.form, 'file', e.target.value)
        //  this.form.file= e.target.value
      }
  }
}
</script>
