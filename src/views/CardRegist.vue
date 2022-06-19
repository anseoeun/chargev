<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <template v-if="status === 'basic'">
        <div class="min-fix">
          <h2 class="tit-type1">카드등록</h2>
          <div class="form-box-wrap">
            <div class="form-box">
              <div class="row">
                  <div class="input auto">
                      <Input type="text" v-model="form.carnum" placeholder="차량번호" />
                  </div>
              </div>
              <div class="row">
                  <div class="input auto">
                      <Input type="text" v-model="form.name" placeholder="소유자명" />
                  </div>
              </div>
            </div>
            <div class="btn-box">
                <button class="btn-type1 st2" @click="status = 'regist'">멤버십카드 등록</button>
                <button class="btn-type1 st2" @click="status = 'nocard'">멤버십카드 없음</button>
            </div>
          </div>
        </div>
        <div class="info-text">
            사전에 지급받은 멤버십카드가 있을 경우
            <br />멤버십카드번호를 입력해주세요.
        </div>
      </template>


      <template v-if="status != 'basic'">
        <div class="min-fix">
          <div class="card-wrap">
            <h2 class="tit-type1">차량 추가</h2>
            <Carousel class="slide-list" :content="true" :options="carSliderOpt">
                <template slot="content">
                    <splide-slide v-for="(item, index) in carList" :key="index">
                        <div class="card5" :class="{on: item.selected}">
                            <div class="car-info-wrap">
                              <Icon v-if="item.company === 'bmw'" type="logo-bmw2" class="company-logo" />
                              <Icon v-if="item.company === 'benz'" type="logo-benz" :src="require('@/assets/images/logo/logo-me.png')" class="company-logo" />
                              <div class="car-info">
                                  <p class="space-txt"><span>{{ item.carInfo[0] }}</span><span>{{ item.carInfo[1] }}</span></p>
                                  <p>{{ item.carInfo[2] }}</p>
                              </div>
                            </div>
                            <div class="number">
                                <span>{{ item.num[0] }}</span> -
                                <span>{{ item.num[1] }}</span> -
                                <span>{{ item.num[2] }}</span> -
                                <span>{{ item.num[3] }}</span>
                            </div>
                            <div class="btn-box-inner">
                              <button class="btn-type1 st2" @click="$set(item, 'selected', !item.selected)">
                                  충전차량으로 설정 <Icon type="check" :class="{on: item.selected}" />
                              </button>
                            </div>
                        </div>
                    </splide-slide>
                    <splide-slide>
                      <button class="card3">
                          <div class="center">
                              <Icon type="add-plus" />
                              <p class="txt">차량 추가</p>
                          </div>
                      </button>
                    </splide-slide>
                </template>
            </Carousel>
          </div>
          <div v-if="status === 'regist'" class="btn-box">
            <button class="btn-type1 st2">프로모션 상품 조회</button>
          </div>
          <div v-if="status === 'nocard'" class="btn-box">
            <button class="btn-type1 st2">차량등록 완료</button>
            <button class="btn-type1 st2">멤버십카드 발급하기</button>
          </div>
        </div>
        <div v-if="status === 'regist'" class="info-text">
          멤버십 카드 등록이 완료되었습니다.
          <br />
          <br />“차량추가” 버튼을 통해 추가차량 등록이 가능합니다.
          <br />“프로모션 상품 조회” 버튼을 눌러 진행해주세요.
        </div>
        <div v-if="status === 'nocard'" class="info-text">
          모바일카드가 발급되었습니다.
          <br />모바일카드는 차지비 충전기에서만 사용이 가능합니다.
          <br />
          <br />“차량등록 완료” 버튼을 눌러 진행해주세요.
          <br />
          <br />멤버십카드 발급을 원하시는 경우
          <br />“멤버십카드 발급하기” 버튼을 통해
          <br />유료로 발급 가능합니다.
        </div>
      </template>
    </div>


  </div>
</template>

<script>
export default { 
  data(){
    return{             
      status: 'basic',
      form: {
        carnum: '',
        name: ''
      },
      carSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },            
      carList: [
          {
              company: 'bmw',
              carInfo: ['BMW', '530e', '02보6596'],
              num: ['9999', '9999', '9999', '9999'],
              selected: true,
          },
          {
              company: 'benz',
              carInfo: ['BMW', '530e', '02보6596'],
              num: ['9999', '9999', '9999', '9999'],
              selected: false,
          },
      ],

    }
  },
}
</script>
