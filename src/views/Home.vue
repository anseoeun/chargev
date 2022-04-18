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
          //샘플
          'sample/carousel': '샘플/슬라이드',
          'sample/component': '샘플/컴포넌트',
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
          // 충전소지도
          'chargemap': '충전소지도',
          // 충전소
          'chargestation': '충전소',
          // 충전
          'charge': '충전',
          // 충전중
          'charging': '충전중',
          // 신청
          'apply': '신청',       
      }
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
</style>
