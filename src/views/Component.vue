<template>
  <div class="test">
      <div class="black-box">
        <router-link to="/" class="box">
          <Icon type="arr-right" />
          <span class="payco">
            <Icon type="payco" />
          </span>
         </router-link>
      </div>
      <br>
      <div class="black-box">
        <router-link to="/" class="box">
          <div class="t-wrap">
            <div class="row">
              <div class="cell">BMW 530e 
                <div class="fr">
                    <button  @click="checkIcon($event, 'complteChecked')">
                      <Icon type="check" :class="{on: complteChecked}" />
                      &nbsp;
                      차량공유 등록 완료
                    </button>
                </div>
              </div>
            </div>
            <div class="row"><div class="cell">02보6596</div></div>
            <div class="row"><div class="cell">(삼성) 5361 48** **** 4151</div></div>
          </div>
         </router-link>
      </div>
      <br>
      <div class="black-box">
        <router-link to="/" class="box">
          <Icon type="arr-right" />
          <div class="check">
            <button @click="checkIcon">
              <Icon type="check" />
            </button>
          </div>
          <div class="t-wrap">
            <div class="row"><div class="cell">서울시 송파구 롯데타워지하4층 완속#1</div></div>
            <div class="row"><div class="cell"><b class="price">9,010원</b> 충전포인트 결제</div></div>
            <div class="row"><div class="cell">2021-11-02 15:05:02</div></div>
          </div>
         </router-link>
      </div>
      <br>
      <div class="black-box">
        <router-link to="/" class="box">
          <Icon type="arr-right" />
          <div class="t-wrap">
            <div class="row">
              <div class="cell tit"><b>차지비</b></div>
              <div class="cell">서울시 송파구 롯데타워지하4층 완속#1</div>
            </div>
            <div class="row">
              <div class="cell tit">
                <b class="c-red">잔액부족<br>미결제</b>
              </div>
              <div class="cell">
                <p><b class="price">9,010원</b> 충전포인트 결제</p>
                <p>2021-11-02 15:05:02</p>
              </div>
            </div>
          </div>
         </router-link>
      </div>
      <br>
      <div class="black-box">
        <router-link to="/" class="box">
          <Icon type="arr-right" />
           <div class="check w-sm">
            <button @click="checkIcon">
              <Icon type="check" />
            </button>
          </div>
          <div class="t-wrap">
            <div class="row">
              <div class="cell tit"><b>차지비</b></div>
              <div class="cell">서울시 송파구 롯데타워지하4층 완속#1</div>
            </div>
            <div class="row">
              <div class="cell tit">
                정상이용
              </div>
              <div class="cell">
                <p><b class="price">9,010원</b> 충전포인트 결제</p>
                <p>2021-11-02 15:05:02</p>
              </div>
            </div>
          </div>
         </router-link>
      </div>
      <br>
      <br>
      <!-- transparent-box-wrap -->
      <div class="transparent-box-wrap">
        <strong class="tit">로그인</strong>
        <div class="transparent-box">
          <div class="form-box">
            <div class="row">
              <div class="input">
                  <input type="text" placeholder="ID(Email)">
              </div>
            </div>
            <div class="row">
              <div class="input">
                  <input type="text" placeholder="비밀번호">
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn-type1 st1">로그인</button>
          </div>
        </div>
      </div>
      <br>
      <div class="transparent-box-wrap">
        <strong class="tit">본인인증</strong>
        <div class="transparent-box">
          <div class="form-box">
            <div class="row">
              <div class="input auto">
                  <input type="text" placeholder="통신사">
              </div>
              <div class="btn">
                <button class="btn-type2 st1 inbl">선택</button>
              </div>
            </div>
            <div class="row">
              <div class="input">
                  <input type="text" placeholder="전화번호">
              </div>
            </div>
            <div class="row">
              <div class="input">
                  <div class="inp-certify">
                    <input type="number" placeholder="인증번호">
                    <span class="time">2:59</span>
                  </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn-type1 st1">인증번호 발송</button>
          </div>
        </div>
      </div>
      <!-- PIN 설정 -->
      <div class="transparent-box-wrap">
        <strong class="tit">PIN 설정</strong>
        <div class="transparent-box">
          <div class="form-box">
            <div class="row">
              <div class="input"> 
                  <div class="inp-pin">
                    <div class="pin">
                        <input type="password" v-model="pin[0]" autocomplete="new-password" maxlength="1">
                        <input type="password" v-model="pin[1]" autocomplete="new-password" maxlength="1">
                        <input type="password" v-model="pin[2]" autocomplete="new-password" maxlength="1">
                        <input type="password" v-model="pin[3]" autocomplete="new-password" maxlength="1">
                    </div>
                    <input type="text" v-model="pin" @focus="initPinFocus">
                  </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button class="btn-type1 st1">인증번호 발송</button>
          </div>
        </div>
      </div>
      <!-- 차량정보 확인 -->
      <div class="transparent-box-wrap">
        <strong class="tit">차량정보 확인</strong>
        <div class="transparent-box">
          <div class="info-box">
              <div class="row">
                <div class="space-text"><span>BMW</span><span>530e</span></div>
                <div class="right"><b>상세정보</b></div>
              </div>
              <div class="row">
                <div class="space-text"><span>M</span><span>1010</span><span>0101</span><span>1234</span><span>1234</span></div>
              </div>
              <div class="row">
                <span class="space-text"><span>C</span><span>5361</span><span>48**</span><span>****</span><span>4151</span></span>
              </div>
          </div>
          <div class="btn-box">
            <button class="btn-type1 st1">확인</button>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="charge-status">
        <!-- 충전차량 -->
        <h2 class="tit-type1">충전차량</h2>
        <div class="desc">
          <p class="space-text"><span>BMW</span><span>530e</span></p>
          <p>02보6596</p>
        </div>
        <button class="btn-type1 st2">충전차량 설정</button>

        <!-- 충전포인트 -->
        <h2 class="tit-type1">충전포인트</h2>
        <div class="desc">
          <div class="point">360,000원</div>
        </div>
        <button class="btn-type1 st2">상세확인</button>
      </div>

      <!--  -->
      <h2 class="tit-type1">충전소검색</h2>      
      <div class="form-box-wrap">
        <div class="form-box">
          <div class="row">
            <div class="input">
                <input type="text" placeholder="충전소 명 또는 주소 입력">
            </div>
          </div>
        </div>
        <div class="btn-box">
          <button class="btn-type1 st2">검색</button>
        </div>
      </div>

      <!--  -->
      <h2 class="tit-type1">기존 이용 충전소</h2>
      <div class="charge-list">
        <ul>
          <li>
            <div class="row">
              <div class="celll">서울시 송파구<br />롯데월드타워 지하2층</div>
              <div class="cell right">차지비</div>
            </div>
            <div class="row">
              <div class="cell t-s">269 ~ 279 (kWh/원) </div>
              <div class="cell right">1km 이내</div>
            </div>
            <div class="tag">
              <span>혼잡함</span>
              <span>할인중</span>
            </div>
            <div class="btn-box">
              <button class="btn-type1 st2">충전하기<Icon type="charge" /></button>
            </div>
          </li>
        </ul>
      </div>

  </div>
</template>

<script>
export default {
  components: {
  
  },
  data() {
    return {
        pin: []
    }
  },
  mounted(){
  },
  methods: {
    initPinFocus(){
      if(this.pin.length == 4){
        this.pin = []
      }
    }
  }
}
</script>
