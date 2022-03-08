import Vue from 'vue'

Vue.mixin({
    data(){
      return {
        title:'',
        titleData: {
            'notice': ['고객지원', '공지사항'],
            'support': ['고객지원', '고객지원'],
            'qna': ['문의내역', '문의내역'],
            'event': ['문의내역', '이벤트'],
            'eventDetail': ['문의내역', '이벤트상세'],
            'ruleService': ['문의내역', '서비스이용약관'],

            'breakdownReport': ['문의하기', '충전기 고장신고'],
            'refund': ['문의하기', '환불문의'],

            'chargerInstallApplyList': ['신청/설치관리', '충전기 설치 신청'],
            'chargerInstallApplyPlace': ['신청/설치관리', '설치 장소 선택'],
            'chargerInstallApplyModel': ['신청/설치관리', '충전기 모델 선택'],
            'ChargerInstallApplyDate': ['신청/설치관리', '설치 요청 날짜 선택'],

            'chargerInstallApplyForm': ['문의하기', '충전기 설치신청'],
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
                    this.title = path[0]
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
        if(el.classList.contains('on')){
          // el.classList.remove('on')
          this.$set(this[arr], i, false)
        }else{
          // el.classList.add('on')
          this.$set(this[arr], i, true)
        }
      }
    }
  })
