<template>
  <div class="contents">
    <div class="event-wrap">
      <div class="event-header">
        <p class="date">2021년 11월 23일, 수요일</p>
        <h2 class="tit-type1">이벤트</h2>
      </div>
      <div class="x-scrolling-list">
        <ul>
          <li v-for="(item, index) in eventIng" :key="index">
            <router-link to="/" class="gradient-box">
              <div class="period">
                <div class="month">{{ item.month }}</div>
                <div class="day">{{ item.day }}</div>
              </div>
              <div class="text">
                {{ item.title }}
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Event',
  components: {
    
  },
  data(){
    return{
      eventIng: [
        {
          month: '11월',
          day: '1~31',
          title: '[진행중] 이벤트',
        },
        {
          month: '11월',
          day: '1~31',
          title: '[진행중] 이벤트',
        },
      ]
    }
  },
   mounted(){
   
  }
}
</script>
