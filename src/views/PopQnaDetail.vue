<template>
    <BtmLayer :visible="visible" @close="$emit('close')" class="pop-payment-detail">
      <template slot="content">
        <div class="cont-scroll">
          <div class="qna-wrap">
            <div class="qna-detail">
              <!-- 문의 -->
              <div class="box question">
                <strong class="tit">충전기 고장신고</strong>
                <div class="row-wrap">
                  <div class="row">
                    <div class="cell label"> 충전기 </div>
                    <div class="cell txt">서울시 송파구<br />롯데월드타워 지하2층 #1</div>
                  </div>
                  <div class="row">
                    <div class="cell label"> 고장항목 </div>
                    <div class="cell txt">화면불량</div>
                  </div>
                  <div class="row">
                    <div class="cell label"> 사진 </div>
                    <div class="cell txt">
                      <ul class="photo-list">
                        <li v-for="(item, index) in photoList" :key="index"><img :src="item.src" alt="" ></li>
                      </ul>
                      <div class="photo">
                        <img :src=" require('@/assets/images/temp-noti.jpg')" alt="" >
                      </div>                      
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell label"> 상세내용 </div>
                    <div class="cell txt">화면이 안보입니다.</div>
                  </div>                  
                </div>
              </div>
              <div class="box question">
                <div class="photo">
                  <img :src=" require('@/assets/images/temp-noti.jpg')" alt="" >
                </div>
              </div>
              <!-- 답변 -->
              <div class="box answer">
                <strong class="tit">상담사 답변</strong>
                <div class="row-wrap">
                  <div class="row">
                    <div class="cell label">답변내용</div>
                    <div class="cell txt">
                      안녕하세요 김김김 고객님<br />상담사 박박박입니다.
                      <br />
                      문의 주신 내용에 대해 답변드립니다.<br />
                      <br />
                      해당 충전기 고장을 확인하여 수리예정입니다.<br />
                      <br />
                      고장 충전기 수리는 수리 업체의 일정에 맞춰 진행되며, 최대 2주 가량 소요될 수 있습니다.<br />
                      <br />
                      감사합니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </BtmLayer>
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  

  data(){
    return{
      photoList: [
        {
          src: require('@/assets/images/temp-card.jpg'),
        },
        {
          src: require('@/assets/images/temp-card2.png'),
        },
        {
          src: require('@/assets/images/temp-card3.png'),
        },
      ],
    }
  }
}
</script>
