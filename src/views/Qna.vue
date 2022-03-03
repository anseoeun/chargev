<template>
  <div class="contents">
    <div class="qna-wrap">
      <h2 class="tit-type1">문의 내역</h2>
      <div class="search">
        <input type="text" placeholder="문의 내역 검색">
      </div>
      <h3 class="tit-type2">가입자 정보</h3>
      <SlideList :data="notiList" class="noti-list">
        <template slot="header" slot-scope="props">
          <div class="info">
            <Icon type="arr-right" />
            <span class="date">{{ props.item.date }}</span>
            <span v-if="props.item.status === 'complete'" class="status complete"><Icon type="answer-complete" /><span>답변완료</span></span>
            <span v-if="props.item.status === 'wating'" class="status wating"><Icon type="answer-wating" /><span>답변대기중</span></span>
          </div>
          <div class="title">
              {{ props.item.title }}
          </div>
        </template>
        <template slot="content">
          <h4 class="tit-type2">가입자 정보</h4>
        </template>
      </SlideList>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Qna',
  components: {
    
  },
  data(){
    return{
      notiList: [
        {
          date: '2021-01-02-03',
          status:'complete',
          title: '개선사항 건의',
          content : '안녕하세요 <b>김김김</b> 고객님<br />상담사 <b>박박박입</b>니다.<br /><br />'+
                    '문의 주신 내용에 대해 답변드립니다.<br /><br />'+
                    '해당 충전기 고장을 확인하여 수리예정입니다.<br /><br />'+
                    '고장 충전기 수리는 수리 업체의 일정에 맞춰 진행되며,<br />'+
                    '최대 2주정도 소요될 수 있습니다.'+
                    '감사합니다.'
        },
        {
          date: '2021-01-02-03',
          status:'wating',
          title: '충전기 고장신고 고장신고고장신고고장신고고장신고고장신고고장신고고장신고고장신고고장신고고장신고고장신고',
          content : '안녕하세요 <b>김김김</b> 고객님<br />상담사 <b>박박박입</b>니다.<br /><br />'+
                    '문의 주신 내용에 대해 답변드립니다.<br /><br />'+
                    '해당 충전기 고장을 확인하여 수리예정입니다.<br /><br />'+
                    '고장 충전기 수리는 수리 업체의 일정에 맞춰 진행되며,<br />'+
                    '최대 2주정도 소요될 수 있습니다.'+
                    '감사합니다.'
        },
        
      ]
    }
  },
   mounted(){
   
  }
}
</script>
