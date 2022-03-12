<template>
  <div class="contents">
    <div class="alarm-wrap">
      <h2 class="tit-type2">알림</h2>
      
      <div class="tab-type1">
        <button @click="setAlarm('total')" :class="{on: alarmTit === '전체'}">전체</button>
        <button @click="setAlarm('important')" :class="{on: alarmTit === '중요'}">중요</button>
        <button @click="setAlarm('charge')" :class="{on: alarmTit === '충전'}">충전</button>
        <button @click="setAlarm('notice')" :class="{on: alarmTit === '공지'}">공지</button>
        <button @click="setAlarm('etc')" :class="{on: alarmTit === '기타'}">기타</button>
      </div>
      
      <!-- 전체 알림 -->
      <div class="shadow-box">
        <h3 class="tit-type4">{{ alarmTit }} 알림</h3>
        <div class="alarm-list">
          <ul>
            <li v-for="(item, index) in alarmList" :key="index">
              <Icon type="alarm" />
              <div class="date">{{ item.date }}</div>
              <p class="text">{{ item.text }}</p>
              <button class="delete">
                <Icon type="delete" />
              </button>
            </li>
          </ul>
        </div>
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
          date: '2021-01-01 01:02:03',
          text: '1대1문의 답변이 등록되었습니다.'
        },
        {
          date: '2021-01-01 01:02:03',
          text: '월간 충전리포트 확인'
        },
        {
          date: '2021-01-01 01:02:03',
          text: '충전이 종료되었습니다.'
        },
        {
          date: '2021-01-01 01:02:03',
          text: '충전이 시작되었습니다.'
        },
        {
          date: '2021-01-01 01:02:03',
          text: '[중요알림] 앱 업데이트 안내'
        },
        {
          date: '2021-01-01 01:02:03',
          text: '[미결제 알림] 미결제 건이 있습니다.'
        },
      ],
      important: [
        {
          date: '2021-01-01 01:02:03',
          text: '[미결제 알림] 미결제 건이 있습니다.'
        }
      ],
      charge: [
        {
          date: '2021-01-01 01:02:03',
          text: '충전이 종료되었습니다.'
        },
        {
          date: '2021-01-01 01:02:03',
          text: '충전이 시작되었습니다.'
        },
      ],
      notice: [
        {
          date: '2021-01-01 01:02:03',
          text: '1대1문의 답변이 등록되었습니다.'
        },
        {
          date: '2021-01-01 01:02:03',
          text: '월간 충전리포트 확인'
        },
      ],
      etc: [],
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
