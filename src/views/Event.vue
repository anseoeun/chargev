<template>
  <div class="contents">
    <div class="event-wrap">
      <div class="event-header">
        <h2 class="tit-type1">이벤트</h2>
        <p class="date">2021년 11월 23일, 수요일</p>
      </div>
      <!-- 진행중 -->
      <h2 class="tit-type2">진행중</h2>
      <div class="x-scrolling-list">
        <ul class="event-list">
          <li v-for="(item, index) in eventList" :key="index">
            <div class="event" :style="`background-image:url(${item.bg})`">
              <button class="link-btn">
                <div class="title">{{ item.title }} </div>
                <div class="type">{{ item.type }} </div>
                <div class="period">
                  <div class="month">{{ item.month }}</div>
                  <div class="day">{{ item.day }}</div>
                </div>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <!-- 예정 -->
      <h2 class="tit-type2">예정</h2>
      <div class="x-scrolling-list">
        <ul class="event-list">
          <li v-for="(item, index) in eventList" :key="index">
            <div class="event" :style="`background-image:url(${item.bg})`">
              <div class="title">{{ item.title }} </div>
              <div class="type">{{ item.type }} </div>
              <div class="period">
                <div class="month">{{ item.month }}</div>
                <div class="day">{{ item.day }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 종료 -->
      <h2 class="tit-type2">종료</h2>
      <div class="x-scrolling-list">
        <ul class="event-list">
          <li v-for="(item, index) in eventList" :key="index">
            <div class="event" :style="`background-image:url(${item.bg})`">
              <div class="title">{{ item.title }} </div>
              <div class="type">{{ item.type }} </div>
              <div class="period">
                <div class="month">{{ item.month }}</div>
                <div class="day">{{ item.day }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- // event-wrap -->
  </div>
</template>

<script>
export default {
  name: 'Event',
  components: {

  },
  data(){
    return{
      eventList: [
        {
          bg: require('@/assets/images/temp-event.jpg'),
          month: '1월',
          day: '1~31',
          title: '삼성 iD EV 카드 프로모션',
          type: '충전요금 할인 카드',
        },
        {
          bg: require('@/assets/images/temp-event.jpg'),
          month: '1월',
          day: '1~31',
          title: '삼성 iD EV 카드 프로모션',
          type: '충전요금 할인 카드',
        },
      ]
    }
  },
   mounted(){
   
  }
}
</script>
