<template>
    <BtmLayer :visible="visible" @close="$emit('close')" class="pop-payment-detail">
      <template slot="content">
        <div class="cont-scroll">
          <div class="layer-hdader">
            <div class="back-tit">
              <button class="layer-back" @click="$emit('close')"><Icon type="arr-left" /></button>
              검색조건
            </div>
          </div>
          <!-- map-filter -->
          <div class="map-filter">
            <!-- 회원카드 -->
            <p class="tit-type1">회원카드</p>
            <div class="filter-box">
              <div class="cell">
                <div class="btn">
                  <button @click="arrAllCheck('cardStatusChecked', 1)">전체선택</button>
                </div>
              </div>
              <div class="cell">
                <ul class="chk-list">
                  <li v-for="(item, index) in cardStatus" :key="index">
                    <button  @click="checkIcon($event, 'cardStatusChecked', index)">
                      <Icon type="check-white" :class="{on: cardStatusChecked[index]}" />
                      <span class="txt">{{ item }}</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 단가 -->
            <p class="tit-type1">단가</p> 
            <div class="filter-box">
              <div class="cell">
                <div class="btn">
                  <div><button @click="price = 199">최저가</button></div>
                  <div><button @click="price = 420">전체선택</button></div>
                </div>
              </div>
              <div class="cell">
                <div class="price-slider">
                  <veeno 
                    :pipsy = "{ mode: 'range', density: 5000 }"
                    :tooltips="[{ to: (n) => n.toFixed(0) }]"
                    :handles="price" 
                    :range="{'min': 199, 'max': 420}"
                    :style="{'margin-bottom': '2rem'}"
                    :key="price"
                    />
                </div>
              </div>
            </div>
            <!-- 충전타입 -->
            <p class="tit-type1">충전타입</p>
            <div class="filter-box">
              <div class="cell">
                <div class="btn">
                  <button @click="arrAllCheck('chargeTypeChecked', 3)">전체선택</button>
                </div>
              </div>
              <div class="cell">
                <ul class="chk-list">
                  <li v-for="(item, index) in chargeType" :key="index">
                    <button  @click="checkIcon($event, 'chargeTypeChecked', index)">
                      <Icon type="check-white" :class="{on: chargeTypeChecked[index]}" />
                      <span class="txt">{{ item }}</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 설치위치 -->
            <p class="tit-type1">설치위치</p>
            <div class="filter-box">
              <div class="cell">
                <div class="btn">
                  <button @click="arrAllCheck('positionChecked', 1)">전체선택</button>
                </div>
              </div>
              <div class="cell">
                <ul class="chk-list">
                  <li v-for="(item, index) in position" :key="index">
                    <button  @click="checkIcon($event, 'positionChecked', index)">
                      <Icon type="check-white" :class="{on: positionChecked[index]}" />
                      <span class="txt">{{ item }}</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <!-- // map-filter -->
        </div>
      </template>
    </BtmLayer>
</template>

<script>
import veeno from 'veeno';
import 'nouislider/distribute/nouislider.min.css';
export default {
  components: {
    veeno
  },
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  

  data(){
    return{
      cardStatusChecked:[],
      cardStatus: [
        '사용가능',
        '사용불가능'
      ],
      chargeTypeChecked:[],
      chargeType: [
        '완속',
        'DC콤보',
        '차데모',
        'AC3상',
      ],
      positionChecked:[],
      position: [
        '실내',
        '실외'
      ],
      price: 300
    }
  }
}
</script>
