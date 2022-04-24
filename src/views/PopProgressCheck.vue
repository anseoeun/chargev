<template>
    <BtmLayer :visible="visible" @close="$emit('close')" class="pop-progress">
      <template slot="content">
        <div class="cont-scroll">
            <div class="progress-wrap">
              <!-- 신청완료 -->
              <p class="tit-type1">신청완료</p>
              <p class="text align-c">설치신청이 완료되어 설치사에서 요청하신 날짜에 방문이 가능한지 확인중입니다.</p>
              <div class="date-info">
                실사방문 요청일
                <div class="right">2022.04.18</div>
              </div>
              <!-- 상담 -->
              <p class="tit-type1">상담</p>
              <p class="text align-c">상담사가 연락을 드릴 예정입니다.</p>
              <div class="date-info">
                상담일
                <div class="right">(상담일)</div>
              </div>
              <!-- 결제완료 -->
              <p class="tit-type1">결제완료</p>
              <p class="text align-c">결제가 완료되어 공사 날짜 확인중입니다.</p>
              <div class="date-info">
                공사 예정일
                <div class="right">(공사예정일)</div>
              </div>
              <!-- 공사중 -->
              <p class="tit-type1">공사중</p>
              <p class="text align-c">공사 진행중입니다. 공사 완료일은 현장 상황에 따라 변경될 수 있습니다.</p>
              <div class="date-info">
                공사 완료일
                <div class="right">(공사완료일)</div>
              </div>
              <!-- 설치완료 -->
              <p class="tit-type1">설치완료</p>
              <p class="text align-c">설치가 완료되었습니다.</p>
              <div class="date-info">
                공사 완료일
                <div class="right">(공사완료일)</div>
              </div>
              <!-- 보류 -->
              <p class="tit-type1">보류</p>
              <p class="text align-c">신청자의 요청으로 공사 보류중입니다.</p>
              <!-- 보류 -->
              <p class="tit-type1">취소</p>
              <p class="text align-c">신청자의 요청으로 공사가 취소되었습니다.</p>
              
              <div class="btn-box">
                <button class="btn-type2 st2">설치신청 삭제</button>
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

}
</script>
