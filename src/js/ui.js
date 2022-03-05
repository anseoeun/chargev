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

            'chargerInstallApplyList': ['문의하기', '충전기 설치신청'],
            'chargerInstallApplyPlace': ['문의하기', '충전기 설치신청'],
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
       
    }
  })
