<template>
  <div class="contents">
    <div class="charger-install-wrap">
        <div class="grid-list">
            <!-- 신청자정보 -->
            <div class="list-tit">신청자정보</div>
            <div class="row">
                <div class="tit">신청자명</div>
                <div class="text">김김김</div>
            </div>
            <div class="row">
                <div class="tit">신청자구분</div>
                <div class="text">법인</div>
            </div>
            <div class="row">
                <div class="tit">전화번호</div>
                <div class="text">010-0000-1234</div>
            </div>
            <div class="row">
                <div class="tit">유선전화</div>
                <div class="input">
                    <div class="inp-tel">
                        <input type="password" maxlength="3"> - 
                        <input type="password" maxlength="4"> - 
                        <input type="password" maxlength="4">
                    </div>
                </div>
            </div>

            <!-- 설치날짜 선택 -->
            <div class="list-tit">설치날짜 선택</div>
            <div class="select-date">
                <div class="row row-header">
                    <div class="cell"><button disabled>전주</button></div>
                    <div class="cell">설치 요청일 선택</div>
                    <div class="cell"><button>다음주</button></div>
                </div>
                <div class="row">
                    <div class="cell">설치<br>시간대</div>
                    <div class="cell">오늘<br>(목)</div>
                    <div class="cell">11.26<br>(금)</div>
                    <div class="cell">11.27<br>(토)</div>
                    <div class="cell">11.28<br>(일)</div>
                    <div class="cell">11.29<br>(월)</div>
                    <div class="cell">11.30<br>(화)</div>
                    <div class="cell">11.31<br>(수)</div>
                </div>
                <div class="row">
                    <div class="cell">09:00<br>~13:00</div>
                    <div class="cell"><button disabled>접수<br>마감</button></div>
                    <div class="cell"><button disabled>접수<br>마감</button></div>
                    <div class="cell"><button disabled>접수<br>마감</button></div>
                    <div class="cell"><button disabled>접수<br>마감</button></div>
                    <div class="cell"><button>접수<br>가능</button></div>
                    <div class="cell"><button>접수<br>가능</button></div>
                    <div class="cell"><button>접수<br>가능</button></div>
                </div>
                <div class="row">
                    <div class="cell">14:00<br>~17:00</div>
                    <div class="cell"><button disabled>접수<br>마감</button></div>
                    <div class="cell"><button disabled>접수<br>마감</button></div>
                    <div class="cell"><button disabled>접수<br>마감</button></div>
                    <div class="cell"><button disabled>접수<br>마감</button></div>
                    <div class="cell"><button>접수<br>가능</button></div>
                    <div class="cell"><button>접수<br>가능</button></div>
                    <div class="cell"><button>접수<br>가능</button></div>
                </div>
            </div>

            <!-- 설치정보 -->
            <div class="list-tit">설치정보</div>            
            <div class="row">
                <div class="tit">설치장소</div>
                <div class="text">단독주택</div>
            </div>
            <div class="row">
                <div class="tit">설치주소</div>
                <div class="input">
                    <div class="inp-addr">
                        <input type="text" placeholder="지역명">
                        <button>찾기</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="tit">상세주소</div>
                <div class="input">
                    <input type="text" placeholder="상세주소">
                </div>
            </div>
            <div class="row">
                <div class="tit">요구사항</div>
                <div class="input">
                    <input type="text">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChargerInstallApplyForm',
  components: {
    
  },
  data(){
    return{
        
    }
  },
   mounted(){
   
  },
  methods: {
      
  }
}
</script>
