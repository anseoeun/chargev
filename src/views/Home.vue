<template>
  <div class="index">
    <h2>Publishing work sheet</h2>
    <table>
    <colgroup>
      <col style="width:60px" />
      <col style="width:35%" />
      <col style="width:35%" />
      <col style="width:auto" />
    </colgroup>

    <thead>
      <tr>
        <th></th>
        <th>페이지</th>
        <th>FileName/Link</th>
        <th>memo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, name, index) in list" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ value }}</td>
        <td><router-link :to="'/'+name">{{ '/'+name }}</router-link></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data(){
    return {
        list: {
          // 스플래시
          'splash': '스플래시',
          // 로그인
          'login': '로그인',
          'join': '회원가입',          
          'LoginMenu': '로그인메뉴',
          'loginMenuCoper': '로그인메뉴(법인)',
          'loginRuleList': '로그인약관',
          // 메인
          'main': '메인',
          // 알림
          'alarm': '알림',
        },      
        list2: {

            // 맞춤충전
            'customChargeSet': ['맞춤충전', '맞춤충전 설정'],
            // 마이차지비
            'myChargev': ['마이차지비', '마이차지비'],
            // 내정보
            'mypage': ['내정보', '내정보'],
            // 차량관리
            'carManage': ['차량관리', '차량관리'],
            // 결제관리
            'paymentManage': ['결제관리 ', '결제관리'], 
            // 충전포인트
            'chargePoint ': ['충전포인트 ', '충전포인트'], 
 
            // 고객지원
            'notice': ['고객지원', '공지사항'],
            'supportRules': ['고객지원', '약관'],
            'supportIndex': ['고객지원', '고객지원 메인'],
            'chargerUsingGuide': ['고객지원', '충전기 사용방법'],
            'chargerInstallApply': ['고객지원', '충전기 설치 신청'],
            'chargerSortGuide': ['고객지원', '충전기 종류 안내'],
            'chargerPhevGuide': ['고객지원', 'PHEV차량 충전안내'],
            'chargerPriceGuide': ['고객지원', '충전요금 안내'],
            'roamingServiceGuide': ['고객지원', '로밍서비스 안내'],
            'carPromotion': ['고객지원', '완성차 프로모션'],
            'carMemberCard': ['고객지원', '완성차 멤버십카드'],
            'noMemberCharge': ['고객지원', '비회원 충전'],

            'ruleService': ['고객지원', '서비스이용약관'],
            'event': ['고객지원', '이벤트'],
            'eventDetail': ['고객지원', '이벤트상세'],

            // 문의내역
            'qna': ['문의내역', '문의내역'],

            // 문의하기
            'qnaList': ['문의하기', '문의하기 목록'],
            'breakdownReport': ['문의하기', '충전기 고장신고'],
            'refund': ['문의하기', '환불문의'],
            'mobileCardGuide': ['문의하기', '모바일카드 이용'],
            'deliveryCheck': ['문의하기', '배송현황 확인'],
            'memberCardIssued': ['문의하기', '멤버십카드 발급'],
            'memberCardReIssued': ['문의하기', '멤버십카드 재발급'],
            'memberCardNoAuth': ['문의하기', '멤버십카드 인증불가'],
            'memberCardNoInquiry': ['문의하기', '멤버십카드 문의'],
            'improvementsSuggest': ['문의하기', '개선사항 건의'],
            // 'chargerInstallApplyForm': ['문의하기', '충전기 설치신청'],

            // 신청/설치관리
            'chargerInstallApplyIndex': ['신청/설치관리', '신청/설치관리 메인'],
            'memberCard': ['신청/설치관리', '멤버십카드 관리- 카드 없을때'],
            'memberCardList': ['신청/설치관리', '멤버십 카드 관리 - 카드있을때'],
            'memberCardApply': ['신청/설치관리', '멤버십 카드 신청'],
            'memberCardDelivery': ['신청/설치관리', '멤버십 카드 신청 - 배송현황'],
            'chargerInstallApplyList': ['신청/설치관리', '충전기 설치 신청'],
            'chargerInstallApplyPlace': ['신청/설치관리', '설치 장소 선택'],
            'chargerInstallApplyModel': ['신청/설치관리', '충전기 모델 선택'],
            'ChargerInstallApplyDate': ['신청/설치관리', '설치 요청 날짜 선택'],


            'calendar': ['캘린더', '캘린더'],
        },
    }
  }
}
</script>

<style scoped>
  h2{font-size:20px;color: #000;}
  .index{padding:20px;font-size:12px;background:#fff;color: #000;min-height:100vh;}
  .index table {width:100%; border-collapse:collapse; border:0px solid #666;margin-top:10px;}
  .index caption {text-align:left; font-size:200%; color:#999;}
  .index th {padding:6px; border:1px solid #fff; color:#fff; font-size:110%; background-color:#000;}
  .index td {height:16px; padding:4px; padding-left:10px; border:1px solid #666;}
  .index a,
  .index a:link, #mwork a:visited {color:#009; text-decoration:none;}
  .index a:hover, #mwork a:active {color:#00f; text-decoration:underline;}
  .index tr:hover td {background-color:#eee !important;}

  .classname{display:none;}
  .down{font-size:15px;margin-left:50px;}

  .modify{position:relative;color: #ff0000;}
  .modify .layer{display:none;position: absolute;top:0;right:0;padding:15px;color:#333;white-space:pre-line;width:500px;height:300px;overflow: hidden;overflow-y:auto;background:#fff;z-index:50;}
  .modify .layer xmp{white-space:pre-line;}
  .modify:hover .layer{display:block;}

  .title td{background:#eee;}

  .delete{text-decoration:line-through;}
  .delete td{ color:#aaa !important;}
  .notice{padding:5px 0;font-size: 13px;padding-left:20px;margin-top:15px;background:url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCwsSBQBIWRXaAAAA7klEQVQoz43STUpCYRjF8Z+vcmncqLKhO8iCaNoCrqCtogZFeLegOahJm+iS2jxaQRE0dqi4hgSpgfj9eUYP5/1zeHjek6mZKBKLnTsy0PWt5c1g/JiZgCUPCubVkWiOxgCy6ppLGAWv6rKQvYSaqnW6sOd9lFjegEFVmSDyOO8nkkX0SRRUHNumvKuceNGtr0Lj4HRrHhSDg0VvxY4chuntNyvo78T1g5+dwM+gvRPYDlLdrVhPmjNw52XWXXHHW78BqcbGvIZ03J4P+87WYM/u/Y37OHSjrLMEdVRcGzLbcCIVJSfy6PnSkk6/4x+rojPgRremOAAAAABJRU5ErkJggg==') no-repeat 0 7px;background-size:auto 15px;}
  .notice ~ .notice{margin-top:0;}

</style>
