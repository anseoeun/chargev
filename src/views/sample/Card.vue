<template>
  <div class="contents" style="padding:2rem">
    <h2 class="guide-tit">카드타입 1</h2>
    <div class="card-wrap">
      <div v-for="(item, index) in cardList" :key="index" class="card">
            <div class="logo">
              <Icon type="chargev" />
            </div>
            <div class="grid-list">
                <div class="row">
                    <div class="tit">멤버십카드</div>
                    <div class="text card-num">
                      <span>{{ item.num[0] }}</span> -
                      <span>{{ item.num[1] }}</span> -
                      <span>{{ item.num[2] }}</span> -
                      <span>{{ item.num[3] }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="tit">연동차량</div>
                    <div class="text">{{ item.car }}</div>
                </div>
            </div>
            <div class="btn-box-inner">
                <button class="btn">멤버십카드 재발급</button>
            </div>
        </div>
    </div>

    <h2 class="guide-tit">카드타입 2</h2>
    <div class="card-wrap">
      <div v-for="(item, index) in cargePointList" :key="index" class="card2">
          <!-- <div class="bg" :style="`background-image:url(${item.src})`"></div> -->
          <Icon v-if="item.company === 'bmw'" type="logo-bmw" />
          <Icon v-if="item.company === 'chargev'" type="chargev4" />
          <div class="main-txt">
              <div v-if="Array.isArray(item.text)" class="space-text">
                  <span v-for="(txt, i) in item.text" :key="i">{{ txt }}</span>
              </div>
              <template v-else>{{ item.text }}</template>
          </div>
          <div class="date">{{ item.date }}</div>
          <div class="price">{{ item.price }}원</div>
      </div>
      <button class="card2">
          <div class="center">
              <Icon type="add-plus" />
              <p class="txt">충전포인트 추가</p>
          </div>
      </button>    
    </div>

    <h2 class="guide-tit">카드타입 3</h2>
    <div class="card-wrap">
        <div v-for="(item, index) in cardList2" :key="index" class="card3">
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
        <button class="card3">
            <div class="center">
                <Icon type="add-plus" />
                <p class="txt">카드추가</p>
            </div>
        </button>
    </div>

    <h2 class="guide-tit">카드타입 4</h2>
    <div class="card-wrap">
        <div class="card4">
          <div class="center">
              <Icon type="payco" />
              <p class="txt">등록하기</p>
          </div>
      </div>
    </div>

    <h2 class="guide-tit">카드타입 5</h2>
    <div class="card-wrap">
        <div v-for="(item, index) in carList3" :key="index" class="card5">
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
        <div class="card5">
            <div class="point-price">
              총<span>360,000</span>원
            </div>
            <div class="btn-box-inner">
                <button class="btn-type1 st2">상세확인</button>
            </div> 
        </div>
    </div>

    <h2 class="guide-tit">장소카드</h2>
    <div class="card-wrap">
        <div v-for="(item, index) in placeList" :key="index" class="place-card">
            <div class="img" :style="`background-image:url(${item.src})`"></div>
            <div class="desc">
            <strong class="tit">{{ item.type }}</strong>
            <!-- <div v-if="item.status == 'complate'" class="txt">신청이 완료되었습니다.</div> -->
            </div>
        </div>
        <button class="card">
            <div class="center">
                <Icon type="add-plus" />
                <p class="txt">충전기 추가 설치신청</p>
            </div>
        </button> 
        <button v-for="(item, index) in placeList2" :key="index" class="place-card">
            <span class="tag">{{ item.title }}</span>
            <div class="img" :style="`background-image:url(${item.src})`"></div>
            <div class="desc type2">
                <div class="price">{{ item.price }}</div>
                <div class="item">{{ item.item }}</div>
            </div>
        </button>               
    </div>


  </div>
</template>
<script>
export default {
    data(){
      return{
        cardList: [
            {
                num: ['0000', '0000', '0000', '0000'],
                car: '01가 5678',
                product: '상품상품',
                selected: true
            },
            {
                num: ['1010', '0101', '1234', '5678'],
                car: '01가 5678',
                product: '-'
            },
        ],

        cargePointList: [
            {
                src: require('@/assets/images/temp-place.jpg'),
                company: 'bmw',
                text: ['20년', 'BMW', 'Charging'],
                date: '2021. 07. 01 ~ 2022. 07. 01',
                price: '360,000',
            },
            {
                src: require('@/assets/images/temp-place.jpg'),
                company: 'chargev',
                text: '모바일충전권',
                date: '2021. 07. 01 ~ 2022. 07. 01',
                price: '100,000',
            }
        ],   
        
        cardList2: [
            {
                name: '결제카드 1',
                date: '02/24',
                company: '삼성',
                num: ['5361', '48**', '****', '4151'],
                selected: true,
            },
            {
                name: '결제카드 2',
                date: '02/24',
                company: '삼성',
                num: ['5361', '48**', '****', '4151'],
                selected: true,
            },
        ], 
        
        carList3: [
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

        applyList: [
            {
                type: '단독주택',
                src: require('@/assets/images/temp-place.jpg'),
                status: 'complate'
            }
        ],      
        
        placeList: [
            {
                type: '단독주택',
                src: require('@/assets/images/temp-place.jpg'),
                status: 'complate'
            }
        ],
        //충전기 선택
        placeList2: [
            {
                title: '모델A',
                price: '1,500,000',
                item: '설치비, VAT포함',
                src: require('@/assets/images/temp-place.jpg'),
            },
        ],        
      }
    },
};
</script>
<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
.guide-tit ~ .guide-tit{margin-top:3rem;}
</style>


