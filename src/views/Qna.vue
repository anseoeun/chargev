<template>
  <div class="contents">
    <div class="qna-wrap">
      <SlideList :data="notiList">
        <template slot="header" slot-scope="props">
          <div class="info">
            <span class="date">{{ props.item.date }}</span>
            <span v-if="props.item.status === 'complete'" class="status complete"><i class="i-answer-complete"></i>답변완료</span>
            <span v-if="props.item.status === 'wating'" class="status wating"><i class="i-answer-wating"></i>답변대기중</span>
          </div>
          <div class="category">
              <span class="tag">문의내역 확인</span>
              <div class="cate">
                  {{ props.item.cate.cate1 }}
                  <i class="i-arr-cate"></i>
                  {{ props.item.cate.cate2 }}
              </div>
          </div>
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
          cate: {
              cate1: '충전기',
              cate2: '고장신고',
          },
          title: '공지사항',
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
          cate: {
              cate1: '충전기',
              cate2: '고장신고',
          },
          title: '공지사항',
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
