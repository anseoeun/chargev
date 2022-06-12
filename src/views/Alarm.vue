<template>
  <div class="contents page-wrap">
    <div class="alarm-wrap">
      <h2 class="tit-type1">알림</h2>
      
      <div class="tab-type1">
        <button @click="setAlarm('total')" :class="{on: alarmTit === '전체'}">전체</button>
        <button @click="setAlarm('charge')" :class="{on: alarmTit === '충전'}">충전</button>
        <button @click="setAlarm('notice')" :class="{on: alarmTit === '공지'}">공지</button>
        <button @click="setAlarm('etc')" :class="{on: alarmTit === '기타'}">기타</button>
      </div>
      
      <!-- 전체 알림 -->
      <div class="alarm-list">
        <ul>
          <li v-for="(item, index) in alarmList" :key="index">
            <Icon :type="`alarm-${item.status}`" />
            <button class="del"><Icon type="delete" /></button>
            <div class="desc">
              <div class="date">{{ item.date }}</div>
              <p class="text">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
   </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      alarmTit: '전체',
      alarmList: [],
      total: [
        {
          status: 'noti',
          date: '2021-01-01 01:02:03',
          text: '1대1문의 답변이 등록되었습니다.'
        },
        {
          status: 'noti',          
          date: '2021-01-01 01:02:03',
          text: '앱 업데이트 안내'
        },
        {
          status: 'warning',
          date: '2021-01-01 01:02:03',
          text: '미결제 건이 있습니다.'
        },
        {
          status: 'fail',
          date: '2021-01-01 01:02:03',
          text: '충전 시작을 실패하였습니다.'
        },
        {
          status: 'check',
          date: '2021-01-01 01:02:03',
          text: '충전이 종료되었습니다.'
        },
        {
          status: 'check',
          date: '2021-01-01 01:02:03',
          text: '충전이 시작되었습니다.'
        },
      ],
      charge: [
        {
          status: 'check',
          date: '2021-01-01 01:02:03',
          text: '충전이 종료되었습니다.'
        },
        {
          status: 'check',
          date: '2021-01-01 01:02:03',
          text: '충전이 시작되었습니다.'
        },
      ],
      notice: [
        {
          status: 'noti',
          date: '2021-01-01 01:02:03',
          text: '1대1문의 답변이 등록되었습니다.'
        },
        {
          status: 'noti',          
          date: '2021-01-01 01:02:03',
          text: '앱 업데이트 안내'
        },
      ],
      etc: [],

      options: {
        perPage: 1,
        perMove: 1,
        destroy: true
      },
      currentPage: 0,      
    }
  },
  mounted(){
   this.alarmList = this.total
  },
  methods: {
    setAlarm(val){
      switch (val){
        case 'total':
          this.alarmTit = '전체' 
          this.alarmList = this.total
          break;
        case 'important':
          this.alarmTit = "중요"
          this.alarmList = this.important
          break;
        case 'charge':
          this.alarmTit = "충전"
          this.alarmList = this.charge
          break;
        case 'notice':
          this.alarmTit = "공지"
          this.alarmList = this.notice
          break;
        case 'etc':
          this.alarmTit = "기타" 
          this.alarmList = this.etc
          break;
        default:
          break;
      }
    }
  }
}
</script>
