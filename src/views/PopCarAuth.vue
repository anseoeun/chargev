<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-car-auth max">
      <template slot="content">
        <div class="cont-scroll">
          <template v-if="!resultShow">
            <h2 class="tit-type1">차량인증</h2>
            <div class="form-box-wrap">
                <div class="form-box">
                    <div class="row">
                        <div class="input">
                            <Input type="text" v-model="form.carnum" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input">
                            <Input type="text" v-model="form.name" />
                        </div>
                    </div>
                </div>
                <div class="btn-box">
                    <button class="btn-type1 st2" @click="resultShow = true">검색하기</button>
                </div>
            </div>
          </template>

          <template v-if="resultShow">
              <!-- 검색결과 -->
              <div class="card-wrap">
                <h2 class="tit-type1">차량인증</h2>
                <div class="card5">
                  <div class="car-info-wrap">
                    <Icon type="logo-bmw2" class="company-logo" />
                    <div class="car-info">
                        <p class="space-txt"><span>{{ card.carInfo[0] }}</span><span>{{ card.carInfo[1] }}</span></p>
                        <p>{{ card.carInfo[2] }}</p>
                    </div>
                  </div>
                  <div class="number">
                      <span>{{card.num[0] }}</span> -
                      <span>{{card.num[1] }}</span> -
                      <span>{{card.num[2] }}</span> -
                      <span>{{card.num[3] }}</span>
                  </div>
                  <div class="btn-box-inner">
                      <button class="btn-type1 st2" @click="$set(card, 'selected', !card.selected)">
                          충전차량으로 설정 <Icon type="check" :class="{on: card.selected}" />
                      </button>
                  </div> 
                </div>
              </div>
              <div class="btn-box">
                <button class="btn-type1 st2" @click="$emit('regist')">등록</button>
              </div>
          </template>
        </div>
      </template>
    </BtmLayer>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  
  data(){
    return {
      resultShow: false,
      form: {
        carnum: '01가5678',
        name: '김김김'
      },
      card: {
              company: 'bmw',
              carInfo: ['BMW', '530e', '02보6596'],
              num: ['9999', '9999', '9999', '9999'],
              selected: false,
          },
    }
  }
}
</script>
