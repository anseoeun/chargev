<template>
  <div class="contents">
    <div class="notice-wrap">
      <SlideList :data="notiList">
        <template slot="header" slot-scope="props">
          <span class="date">{{ props.item.date }}</span>
          <div class="title">{{ props.item.title }}</div>
        </template>
      </SlideList>
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
      notiList: [
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항 공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
        {
          date: '21/11/08',
          title: '공지사항',
          content : '내용내용내용내용내용내용내용<br />사진사진사진사진'
        },
      ]
    }
  },
   mounted(){
   
  }
}
</script>
