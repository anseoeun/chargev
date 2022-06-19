<template>
  <div class="contents" style="padding:2rem">
      <h2 class="guide-tit">충전소 리스트</h2>
      <div class="charge-list">
        <ul>
          <li v-for="(item, index) in chargeList" :key="index">
            <router-link to="/" class="link">
              <div class="row">
                <div class="cell">
                  <div class="addr" v-html="item.addr"></div>
                  <div class="addr2">
                    <div class="row">
                      <div class="cell label">주소</div>
                      <div class="cell" v-html="item.addr2"></div>
                    </div>
                  </div>
                  <div class="price">
                    <span class="c-green">{{ item.start }}</span> - <span class="c-green">{{ item.end }}</span> (kWh/원)
                  </div>
                </div>
                <div class="cell right">
                  <div class="company">차지비</div>
                  <div class="status t-s">{{ item.status }}</div>
                  <div>{{ item.km }}</div>
                </div>
              </div>
              <div class="tag">
                <span v-for="(item, i) in item.tag" :key="i">{{ item }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>

      <h2 class="guide-tit">충전기 리스트</h2>
      <div class="charge-list">
        <ul>
          <li v-for="(item, index) in chargeList2" :key="index">
            <div class="row">
              <div class="cell">
                  <div class="number">200130001</div>
                  <div class="price">
                    <span class="c-green">{{ item.km }}</span> (kWh/원)
                  </div>
                  <div class="tag">
                    <span v-for="(item, i) in item.tag" :key="i">{{ item }}</span>
                  </div>
              </div>
              <div class="cell right">
                  <div class="status">{{ item.status }}</div>
                  <div class="t-s">{{ item.speed }}</div>
                  <div class="t-s">{{ item.etc }}</div>
              </div>
              <div class="cell btn-menu">
                <button class="btn"><Icon type="charge" /><span>충전</span></button>
                <button class="btn"><Icon type="clock" /><span>예약</span></button>
              </div>
            </div>
          </li>
        </ul>
      </div>      

      <h2 class="guide-tit">내역 리스트</h2>
      <ul class="history-list">
        <li v-for="(item, index) in prePaymentList" :key="index">
          <button class="box" :class="{on: item.checked}" @click="item.checked = true;refundReasonShow = true">
            <div class="t-wrap">
              <div class="row">
                <div class="cell">
                  <p>{{ item.product }}</p>
                  <p><b class="price">{{ item.price }}</b>원</p>
                  <p class="regular">{{ item.date }}</p>
                </div>
              </div>
            </div>
          </button>
        </li>
      </ul>

      <h2 class="guide-tit">내역 리스트2</h2>
      <ul class="history-list2">
        <li v-for="(item, index) in issueList" :key="index">
          <div class="box" :class="{on:item.selected}">
            <div class="txt-status">
              <template v-if="item.status == 'complete'">수령완료</template>
              <template v-if="item.status == 'ing'">배송중</template>
              <template v-if="item.status == 'start'">발송완료</template>
            </div>
            <div class="grid-list">
              <div v-if="item.status=='complete'" class="row">
                <div class="tit">수령자</div>
                <div class="text">{{ item.recipient }}</div>
              </div>
              <div class="row">
                <template v-if="item.status=='complete' || item.status=='ing'">
                  <div class="tit">집배원</div>
                  <div class="text">{{ item.mailman }}</div>
                </template>
                <template v-if="item.status=='start'">
                  <div class="tit">발송처</div>
                  <div class="text">{{ item.mailman }}</div>
                </template>
              </div>
              <div class="row">
                <template v-if="item.status=='complete'">
                  <div class="tit">도착일</div>
                  <div class="text">{{ item.date }}</div>
                </template>
                <template v-if="item.status=='ing'">
                  <div class="tit">예상<br />도착일</div>
                  <div class="text">{{ item.date }}</div>
                </template>
                <template v-if="item.status=='start'">
                  <div class="tit">발송일</div>
                  <div class="text">{{ item.date }}</div>
                </template>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <h2 class="guide-tit">대시 리스트</h2>
      <div class="gray-box">
        <ul class="dash-indent-list">
            <li>- 표준공사 30m기준<br />(초과시 m당 초과 비용 발생)</li>
            <li>- 스탠드형 설치시 20만원 추가 부담금 발생</li>
            <li>- 한국전력 표준 시설부담금 별도(발생 시)</li>
            <li>- 완속충전기 취득세(지방세) 발생 가능</li>
        </ul>
      </div>

      <h2 class="guide-tit">문의 리스트</h2>
      <ul class="qna-menu-list">
          <li v-for="(item, index) in qnaServiceList" :key="index">
              <button @click="popQna('service'+(index + 1));">{{ item }}</button>
          </li>
      </ul>

      <h2 class="guide-tit">버튼형 리스트</h2>
      <ul class="grid-menu-list">
          <li v-for="(item, index) in breakdownList" :key="index"><button v-html="item" @click="breakdownItem = item.replace('<br />', ' ');currentPage = 2"></button></li>
      </ul>

      <h2 class="guide-tit">알람 리스트</h2>
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

      <h2 class="guide-tit">기타 리스트</h2>
      <div class="grid-list">
          <div class="row" v-for="(item , index) in paymentInfoList" :key="index">
              <div class="tit">{{ item.name }}</div>
              <div class="text right">{{ item.price }}원</div>
          </div>
          <div class="row">
              <div class="tit">합계(VAT 포함)</div>
              <div class="text right">1,870,000원</div>
          </div>
      </div>

  </div>
</template>
<script>
export default {
    data(){
      return{
        chargeList: [
          {
            'addr': '서울시 송파구<br />롯데타워 지하2층',
            'addr2': '서울시 송파구 올림픽로 300<br />지하 2층 R5 구역',
            'status': '충전가능',
            'start': '269',
            'end': '279',
            'km': '100km',
            tag: [
              '혼잡함', '할인중'
            ],
          },
          {
            'addr': '서울시 송파구<br />롯데타워 지하2층',
            'addr2': '서울시 송파구 올림픽로 300<br />지하 2층 R5 구역',
            'status': '충전가능',
            'start': '269',
            'end': '279',
            'km': '100km',
            tag: [
              '혼잡함', '할인중'
            ],
          },
        ],
        chargeList2: [
          {
            'number': '200130001',
            'km': '279',
            'status': '충전가능',
            'speed': '완속',
            'etc': 'DC콤보',
            tag: [
              '혼잡함', '할인중'
            ],
          },
          {
            'number': '200130001',
            'km': '279',
            'status': '충전가능',
            'speed': '완속',
            'etc': 'DC콤보',
            tag: [
              '혼잡함', '할인중'
            ],
          },
          {
            'number': '200130001',
            'km': '279',
            'status': '충전가능',
            'speed': '완속',
            'etc': 'DC콤보',
            tag: [
              '혼잡함', '할인중'
            ],
          },
        ],

        prePaymentList: [
          {
            product:'모바일 충전권',
            price:'9,010',
            date:'2021-10-01 ~ 2022-10-01',
            checked: false
          },
          {
            product:'모바일 충전권',
            price:'9,010',
            date:'2021-10-01 ~ 2022-10-01',
            checked: false
          }
        ],

        issueList: [  
          {
            status: 'complete',
            recipient: '김김김',
            mailman: '홍홍홍',
            date: '2022-05-03',
            selected: true,
          },
          {
            status: 'ing',
            recipient: '김김김',
            mailman: '홍홍홍',
            date: '2022-05-03',
          },
          {
            status: 'start',
            recipient: '김김김',
            mailman: '홍홍홍',
            date: '2022-05-03',
          },
        ],        

        qnaServiceList: [
            '충전기 사용방법',
            '충전기 설치신청',
            '충전기 종류 안내',
            'PHEV차량 충전안내',
            '충전기 고장신고',
            '환불문의',
            '충전요금 안내',
            '로밍서비스 안내',
        ],    

        breakdownList:[
            '화면불량',
            '충전카드<br />인식불가',
            '반응없음',
            '커넥터<br />분리 불가',
            '전원 OFF',
            '충전중단',
            '충전시작<br />불가',
            '통신장애',
            '기타',
        ],     

        alarmList: [
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
          
        paymentInfoList: [
          {
            name : '충전기',
            price: '1,500,000'
          },
          {
            name : '스탠드 추가',
            price: '200,000'
          },
          {
            name : '부가세',
            price: '170,000'
          }
        ],           
      }
    },
};
</script>
<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
.guide-tit ~ .guide-tit{margin-top:3rem;}
</style>


