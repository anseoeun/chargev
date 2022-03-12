import Vue from 'vue'

Vue.mixin({
    data(){
      return {
        headerTitle:'',
        title:'',
        titleData: {
            // 알림
            'alarm': ['알림', '알림'],

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
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
              if(to){
                // console.log(this.titleData[to.path.split('/')[1]][0])
               let path = this.titleData[to.path.split('/')[1]];
                if(path && path.length > 0){
                    this.headerTitle = path[0]
                    this.title = path[1]
                }
              }
            }
        },
    },        
    mounted(){
   
    },
    methods: {
      checkIcon(e, arr, i){
        e.stopPropagation();
        e.preventDefault  ();
        const el = e.currentTarget.querySelector('i')
        console.log(this[arr]);
        if(el.classList.contains('on')){
          if(Array.isArray(this[arr])) this.$set(this[arr], i, false)
          else this[arr] = false
        }else{
          if(Array.isArray(this[arr]))  this.$set(this[arr], i, true)
          else this[arr] = true
        }
      }
    }
  })
