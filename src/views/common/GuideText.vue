<template>
    <!-- 본인인증 -->
    <div v-if="status === 'selfAuth'" class="info-text">
      인증키 확인을 통해 로그인을 진행합니다.
      <br />전화번호가 변경되었을 경우
      <br />인증값 찾기 버튼을 눌러 진행해주세요        
    </div>
    <div v-else-if="status === 'selfAuth-authKey'" class="info-text">
      변경된 전화번호로 인증키를 확인합니다.
    </div>
    <div v-else-if="status === 'selfAuth-join'" class="info-text">
      회원가입을 위한 본인인증을 진행합니다.
    </div>
    <!-- 차량인증 -->
    <div v-else-if="status === 'carAuth'" class="info-text">
        전화번호와 성함이 일치하는 계정의
        <br />차량이 확인되었습니다.
        <br />인증하기를 눌러 차량을 인증해주세요.
        <br />인증이 완료된 차량만 등록이 가능합니다.  
    </div>
    <!-- 차량확인 -->
    <div v-else-if="status === 'carCheck'" class="info-text">
        전화번호와 성함이 일치하는 계정의
        <br />차량이 확인되었습니다.
        <br />인증하기를 눌러 차량을 인증해주세요.
        <br />인증이 완료된 차량만 등록이 가능합니다.  
    </div>   
     <!--결제확인  -->
    <div v-else-if="status === 'paymentCheck'" class="info-text">
        결제 정보를 확인해주세요.
        <br />결제정보 추가를 원하실 경우
        <br />카드추가 버튼을 눌러 추가가능합니다.
    </div>
    <!-- 상품확인 -->
    <div v-else-if="status === 'productCheck'" class="info-text">
        상품정보를 확인 해주세요.
    </div>
    <div v-else-if="status === 'productCheck2'" class="info-text">
        차대번호 대조를 통해
        <br />차량에 부여된 프로모션 상품이 조회되었습니다.
    </div>
    <div v-else-if="status === 'productCheck-noProduct'" class="info-text">
      일치하는 프로모션 상품이 없습니다.
      <br />프로모션 상품은 차대번호가 등록된 후 지급됩니다.
    </div>    
    <!-- PIN -->
    <div v-else-if="status === 'pinSetting'" class="info-text">
      PIN코드를 입력해주세요.
      <br />PIN코드는 충전시작,앱 로그인시 사용됩니다. 
    </div>
    <div v-else-if="status === 'pinSetting2'" class="info-text">
      로그인을 위해 PIN코드를 입력해주세요.
    </div>    
    <div v-else-if="status === 'pinCheck'" class="info-text">
      PIN코드를 확인해주세요.
    </div>    

    <!-- 차량등록메뉴 -->
    <div v-else-if="status === 'carSelectMenu'" class="info-text">
        리스 또는 렌트차량의 경우 “리스/렌트”,
        <br />그 밖의 차량은 “일반/법인”을 선택해주세요.
    </div>    
    <div v-else-if="status === 'carSelect-basic'" class="info-text">
      차량번호를 통해 차량정보를 추가합니다.
      <br />자동차등록증상의 소유자명을 정확하게 입력해주세요.
      <br />기존에 법인회원가입을 통해 등록된 법인차량이 있는 경우
      <br />공유키 사용(법인차량 등록) 버튼을 눌러주세요.
    </div>
    <div v-else-if="status === 'carSelect-rent'" class="info-text">
      차량번호를 통해 차량정보를 추가합니다.
      <br />법인, 리스/렌트 차량의 경우 자동차등록증상의
      <br />소유자명을 정확하게 입력해주세요.
    </div>
    <!-- 차량등록 -->    
    <div v-else-if="status === 'carRegist-shareKey'" class="info-text">
      차량번호를 통해 차량정보를 추가합니다.
      <br />법인, 리스/렌트 차량의 경우 자동차등록증상의
      <br />소유자명을 정확하게 입력해주세요.
    </div>    
    <div v-else-if="status === 'carRegist-complete'" class="info-text">
      차량조회가 완료되었습니다.
      <br />충전시 사용할 멤버십카드를 등록합니다.
    </div>
    <div v-else-if="status === 'carRegist-complete-coper'" class="info-text">
      법인차량조회가 완료되었습니다.
      <br />충전시 사용할 카드를 등록합니다.
    </div>

    <!-- 카드등록 -->
    <div v-else-if="status === 'cardRegist'" class="info-text">
        사전에 지급받은 멤버십카드가 있을 경우
        <br />멤버십카드번호를 입력해주세요.
    </div>
    <!-- 차량추가 -->
    <div v-else-if="status === 'carAdd-promo'" class="info-text">
      멤버십 카드 등록이 완료되었습니다.
      <br />
      <br />“차량추가” 버튼을 통해 추가차량 등록이 가능합니다.
      <br />“프로모션 상품 조회” 버튼을 눌러 진행해주세요.
    </div>
    <div v-else-if="status === 'carAdd-complete'" class="info-text">
      모바일카드가 발급되었습니다.
      <br />모바일카드는 차지비 충전기에서만 사용이 가능합니다.
      <br />
      <br />“차량등록 완료” 버튼을 눌러 진행해주세요.
      <br />
      <br />멤버십카드 발급을 원하시는 경우
      <br />“멤버십카드 발급하기” 버튼을 통해
      <br />유료로 발급 가능합니다.
    </div>   

     <!--결제정보추가  -->
      <div v-else-if="status === 'paymentAdd'" class="info-text">
        충전요금 결제를 위한 결제카드정보를 입력합니다.
        <br />신용카드번호 및 유효기간, 비밀번호 앞2자리를
        <br />입력해주세요.
      </div>
      <div v-else-if="status === 'paymentAdd-complete'" class="info-text">
        결제카드를 추가로 등록하길 원하시는 경우
        <br />카드 추가 버튼을 눌러 추가 가능합니다.
        <br />PAYCO 연동시 등록된 신용카드는 비활성화됩니다.
      </div>     

      <!-- 기타정보입력 -->
      <div v-else-if="status === 'etcInfo'" class="info-text">
          주소, 이메일을 입력해주세요.
      </div>
      <div v-else-if="status === 'etcInfo-addrCheck'" class="info-text">
          주소를 확인해주세요.
          <br />주소가 변경되었다면 새로운 주소를 입력바랍니다.
      </div>
      <div v-else-if="status === 'etcInfo-addrInput'" class="info-text">
          주소를 입력해주세요.
      </div>   

      <!-- 카드발급 -->
      <div v-else-if="status === 'cardIssue'" class="info-text">
        멤버십카드를 발급받기 위한 주소를 입력해주세요.
        <br />카드 발급 비용은 6,000원입니다.
      </div>
</template>

<script>

export default {
  props: {
    status: {
      type: String,
      default: ''
    }
  },
  data(){
    return{
      
    }
  },
}
</script>
