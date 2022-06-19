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
      <tr v-for="(value, name, index) in list" :key="value">
        <td v-if="name.includes('title-')" colspan="4" class="title">{{ value }}</td>
        <template v-else>
          <td>{{ index + titleNum }}</td>
          <td>{{ value }}</td>
          <td><router-link :to="'/'+name">{{ '/'+name }}</router-link></td>
          <td></td>
        </template>
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
      titleNum: 0,
      list: {
          'title-sample': '-샘플',        
          //샘플
          'sample/carousel': '샘플/슬라이드',
          'sample/component': '샘플/컴포넌트',
          'sample/form': '샘플/폼요소',
          'sample/tab': '샘플/탭',
          'sample/toggleslide': '샘플/토글슬라이드',
          'sample/card': '샘플/카드',
          'sample/list': '샘플/리스트',
          'sample/alert': '생체인식사용 팝업',


          'title-login': '-로그인',   
          // 스플래시
          'splash': '스플래시',
          // 로그인
          'loginMenu': '로그인메뉴',          
          'loginMenuCoper': '로그인메뉴(법인/개인)',
          'loginRuleList': '로그인약관',
          'selfAuth': '본인인증',
          'carAuth': '차량인증',
          'carCheck': '차량확인',
          'paymentCheck': '결제정보 확인',
          'productCheck': '상품확인',
          'etcInfoInput': '기타정보 입력',
          'cardIssue': '카드발급',
          'carRegist': '차량등록',
          'cardRegist': '카드등록',
          'PaymentRegist': '결제정보추가',
          'LoginPin': 'PIN입력',


          'title-page': '-페이지',
          // 메인
          'main': '메인',
          // 알림
          'alarm': '알림',
          // 충전소지도
          'chargemap': '충전소지도',
          // 충전
          'charge': '충전',
          // 충전중
          'charging': '충전중',
          // 신청
          'apply': '신청',       
          // 더보기
          'more': '더보기',       
      }
    }
  },
  methods: {
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
  .index .title {background-color:#eee !important;}
</style>
