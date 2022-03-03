import Vue from 'vue'

Vue.mixin({
    data(){
      return {
        title:'',
        titleData: {
            'notice': '고객지원',
            'support': '고객지원',
            'qna': '문의내역',
            'event': '고객지원',
            'eventDetail': '고객지원',
            'ruleService': '고객지원',
            'chargerInstallApplyList': '충전기 설치신청',
            'chargerInstallApplyPlace': '충전기 설치신청',
            'chargerInstallApplyForm': '충전기 설치신청',
            'calendar': '캘린더'
        },
      }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                if(to) this.title = this.titleData[to.path.split('/')[1]]
                console.log(this.title)
            }
        },
    },        
    mounted(){
        
    },
    methods: {
       
    }
  })
