<template>
  <div class="contents">
    <div class="notice-wrap">
      <div class="noti-list">
        <ul>
            <li v-for="(item, index) in supportList" :key="index">
                <router-link :to="item.link" class="btn">
                    <Icon type="arr-right-red" />
                    <span class="date">{{ item.date }}</span>
                    <div class="title">{{ item.title }}</div>
                </router-link>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  components: {
    
  },
  data(){
    return{
      supportList: [
        {
          link: '/notice',
          date: '21/11/08',
          title: '서비스 이용약관',
        },
        {
          link: '/notice',
          date: '21/11/08',
          title: '개인정보처리방침',
        },
        {
          link: '/notice',
          date: '21/11/08',
          title: '위치기반서비스 이용약관',
        },
        {
          link: '/notice',
          date: '21/11/08',
          title: '휴대폰본인확인서비스',
        },
      ]
    }
  },
   mounted(){
   
  }
}
</script>
