<template>
    <div class="charge-price-guide-wrap">
      <h2 class="tit-type1">충전 요금 안내</h2>
      <div class="guide-info">
        <div class="left">2022년 02월 기준</div>
        <div class="right">원/kWh, 부가세 포함</div>
      </div>
      <!-- 충전요금 -->
       <h3 class="tit-type2">충전요금</h3>
       <div class="price-info">
        <ul>
            <li>
                <div class="logo">
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-chargev.png')}`" alt="" class="logo-chargev"></div>
                </div>
                <div class="company">
                    <p>공동주택</p>
                    <p>공공주택 외</p>
                    <p>급속충전기</p>
                    <p>롯데월드타워 2층</p>
                    <p>롯데월드타워 3층</p>
                    <p>롯데월드타워 4층</p>
                    <p>위탁운영 충전기</p>
                </div>
                <div class="info">
                    <p>심야 199, 주간 259</p>
                    <p>심야 249, 주간 269</p>
                    <p>단일 279</p>
                    <p>완속 269, 급속 279</p>
                    <p>단일 269</p>
                    <p>단일 259</p>
                    <p>단일 289</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-jeju.png')}`" alt="" class="logo-jeju"></div>
                </div>
                <div class="company">
                    <p>제주도청</p>
                </div>
                <div class="info">
                    <p>290</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-me.png')}`" alt="" class="logo-me"></div>
                </div>
                <div class="company">
                    <p>환경부 급속</p>
                </div>
                <div class="info">
                    <p>50kW 292.9</p>
                    <p>그외 309.1</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-kepco.png')}`" alt="" class="logo-kepco"></div>
                </div>
                <div class="company">
                    <p>한국전력공사</p>
                </div>
                <div class="info">
                    <p>심야 289,</p>
                    <p>주간 309</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-lghellow.png')}`" alt="" class="logo-lghellow"></div>
                </div>
                <div class="company">
                    <p>LG헬로비전</p>
                </div>
                <div class="info">
                    <p>300</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-gs.png')}`" alt="" class="logo-gs"></div>
                </div>
                <div class="company">
                    <p>GS칼텍스</p>
                </div>
                <div class="info">
                    <p>309</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-sscharger.png')}`" alt="" class="logo-sscharger"></div>
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-chaevi.png')}`" alt="" class="logo-chaevi"></div>
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-samsung-evc.png')}`" alt="" class="logo-samsung-evc"></div>
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-evolt.png')}`" alt="" class="logo-evolt"></div>
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-evz.png')}`" alt="" class="logo-evz"></div>
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-klin.png')}`" alt="" class="logo-klin"></div>
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-tardis.png')}`" alt="" class="logo-tardis"></div>
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-kevit.png')}`" alt="" class="logo-kevit"></div>
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-kevcs.png')}`" alt="" class="logo-kevcs"></div>
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-cus.png')}`" alt="" class="logo-cus"></div>
                </div>
                <div class="company type2">
                  <p>에스트래픽</p>
                  <p>대영채비</p>
                  <p>삼성이브이씨</p>
                  <p>매니지온</p>
                  <p>차지인</p>
                  <p>클린일렉스</p>
                  <p>타디스테크놀로지</p>
                  <p>한국전기차인프라기술</p>
                  <p>한국전기차충전서비스</p>
                  <p>씨어스</p>
                </div>
                <div class="info">
                    <p>360</p>
                </div>
            </li>
            <li>
                <div class="logo">
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-ev.png')}`" alt="" class="logo-ev"></div>
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-gntel.png')}`" alt="" class="logo-gntel"></div>
                </div>
                <div class="company">
                    <p>파워큐브</p>
                    <p>지엔텔</p>
                </div>
                <div class="info">
                    <p>380</p>
                </div>
            </li>  
            <li>
                <div class="logo">
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-everon.png')}`" alt="" class="logo-everon"></div>
                </div>
                <div class="company">
                    <p>에버온</p>
                </div>
                <div class="info">
                    <p>400</p>
                </div>
            </li>  
            <li>
                <div class="logo">
                    <div class="img"><img :src="`${require('@/assets/images/logo/logo-joyev.png')}`" alt="제주전기자동차 서비스" class="logo-joyev"></div>
                </div>
                <div class="company">
                    <p>제주전기자동차<br />서비스</p>
                </div>
                <div class="info">
                    <p>420</p>
                </div>
            </li>  
        </ul>
      </div>

      <!-- 기타안내사항 -->
       <h3 class="tit-type2">기타안내사항</h3>
       <div class="guide-text">
         <p class="noti-text">심야 시간대 : 23:00 ~ 09:00 / <br />주간 시간대 : 09:00 ~ 23:00 </p>
         <p class="noti-text">차지비 충전요금은 충전시작시간을 기준으로 부과됩니다. <br />단, 충전요금 변경시 종료시간을 기준으로 최초 단가 변경이 적용됩니다.</p>
         <p class="noti-text">충전요금은 시장 변화에 따라 변동될 수 있습니다.</p>
         <p class="noti-text">로밍파트너사는 추가 또는 변동될 수 있습니다.</p>
         <p class="noti-text">로밍파트너사 충전기는 시설 상황에 따라 이용에 제한이 있을 수 있으니, 사전에 개방 및 차지비 충전카드 인증 여부를 확인 해주시기 바랍니다.</p>
         <p class="noti-text">차지비 위탁운영, 택시차고지 등 일부충전기는 별도의 요금이 적용될 수 있으니 이용에 참고해주시기 바랍니다.</p>
       </div>

      <!-- 충전요금 할인 -->
       <h3 class="tit-type2">충전요금 할인</h3>
       <div class="guide-text">
         아래의 제휴카드를 통해 충전요금 할인이 가능합니다. 자세한 혜택은 카드사 홈페이지를 통해 확인가능합니다.
       </div>

        <div class="card-list">
            <Carousel :data ="cardList" :options="cardOpt">
            <template slot-scope="props">
              <a href="/" class="card">
                <div class="card-name"><span>{{ props.item.cardname }}</span></div>
                <img :src="`${props.item.src}`" :alt="props.item.cardname">
              </a>
            </template>
            </Carousel>
          </div>
    </div>
</template>

<script>
export default {
  props:{
    data:{
      type : Array,
      default: ()=>[]
    }  
  },
  data(){
    return{
      cardOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },
      cardList: [
        {
          cardname: 'BC그린카드',
          src: require('@/assets/images/temp-card2.png'),
        },
        {
          cardname: '기아멤버스 전기차 신용카드',
          src: require('@/assets/images/temp-card3.png'),
        },
        {
          cardname: '신한EV카드',
          src: require('@/assets/images/temp-card2.png'),
        },
        {
          cardname: '신한EV카드',
          src: require('@/assets/images/temp-card3.png'),
        },
      ],
    }
  },
}
</script>
