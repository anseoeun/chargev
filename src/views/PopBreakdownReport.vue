<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-breakdown-report max">
      <template slot="content">
        <div class="cont-scroll">
            <div v-if="status === 'basic'" class="form-box-wrap">
              <h2 class="tit-type1 c-white">유형선택</h2>
              <div class="btn-box">
                  <button class="btn-type1 st2" @click="status = 'homeCharger'">홈충전기</button>
                  <button class="btn-type1 st2" @click="status = 'publicCharger'">공용충전기</button>
              </div>
            </div>

            <div v-if="status === 'homeCharger'" class="form-box-wrap">
              <h2 class="tit-type1 c-white">기타 문의</h2>
              <div class="form-box">
                  <div class="row">
                      <div class="input">
                          <Input type="text" placeholder="내용 작성" />
                      </div>
                  </div>
              </div>
              <div class="btn-box">
                  <button class="btn-type1 st2" @click="$emit('inquiryRegistCompleted')">문의사항 등록하기</button>
              </div>
            </div>

            <template v-if="status === 'publicCharger'">

              <div class="charger-wrap">
                  <AddrSearch
                    v-if="step === 1"
                    searchType="addrList"
                    @selected="step = 2"
                  />

                  <template v-if="step === 2">
                    <!-- 충전기 선택 -->
                    <h2 class="tit-type1">충전기 선택</h2>
                    <ChargeList 
                      :data="chargeList"
                      type="breakdown"
                      @selected="step = 3"
                    />
                  </template>


                  <template v-if="step === 3 || step === 4">
                    <!-- 충전기 -->
                    <h2 class="tit-type1">충전기</h2>
                    <div class="charger-info">
                        <div class="row">
                            <div class="cell addr">서울시 송파구<br />롯데월드타워 지하2층 #1</div>
                            <div class="cell right company">차지비</div>
                        </div>
                        <div class="row">
                            <div class="cell number">20041010201</div>
                            <div class="cell right status">완속</div>
                        </div>
                    </div>
                  </template>

                  <template v-if="step === 3">
                    <!-- 고장항목 -->
                    <h2 class="tit-type1">고장항목</h2>
                    <ul class="grid-menu-list">
                        <li v-for="(item, index) in breakdownList" :key="index"><button v-html="item" @click="breakdownItem = item.replace('<br />', ' ');step = 4"></button></li>
                    </ul>
                  </template>

                  <template v-if="step === 4">
                    <!-- 고장항목 선택완료 -->
                    <h2 class="tit-type1">고장항목</h2>                    
                    <button class="btn-type1 st2" @click="step = 3">{{ breakdownItem }}</button>
                    <!-- 사진 업로드 -->
                    <h2 class="tit-type1">사진 업로드</h2>
                    <div class="photo-upload">
                        <div v-show="photoNum" class="photo-list" ref="photolist"></div>
                        <div class="btn-upload">
                            <button class="btn-type1 st2">사진 업로드</button>
                            <input type="file" accept=".png, .jpg, .jpeg" @change="photoUpload">
                        </div>
                    </div>
                    <template v-if="photoNum > 0">
                        <!-- 내용 -->
                        <h2 class="tit-type1">내용</h2>
                        <div class="form-box-wrap">
                            <div class="form-box">
                                <div class="row">
                                <div class="input">
                                    <Input type="text" placeholder="내용 입력" />
                                </div>
                                </div>
                            </div>
                            <div class="btn-box">
                                <button class="btn-type1 st2" @click="$emit('qnaRegistCompleted')">문의사항 등록하기</button>
                            </div>
                        </div>
                    </template>
                  </template>
              </div>
            </template>
        </div>
      </template>
    </BtmLayer>
</template>

<script>
import AddrSearch from '@/views/common/AddrSearch'
import ChargeList from '@/views/common/ChargeList'
export default {
  components:{
    AddrSearch,
    ChargeList
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  

  data(){
    return{
      status:'basic',
      step: 1,
      // 고장        
      breakdownItem: '',
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
      chargeList: [
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
      // 사진
      photoNum: 0,      
    }
  },
  mounted(){
      // this.$refs.photolist.addEventListener('touchstart', (e)=>{e.stopPropagation()})
      // this.$refs.photolist.addEventListener('touchmove', (e)=>{e.stopPropagation()})
  },
  methods:{
    photoUpload(e){

      function addPhotoFile(obj, callback){
          let src;
          if (obj.files && obj.files[0]) {
              var reader = new FileReader();
              reader.readAsDataURL(obj.files[0]);
              reader.onload = function (e) {
                  let size = obj.files[0].size
                  src = e.target.result
                  callback.call(this, src, size);
              }.bind(this)
          }
      }	
          
      addPhotoFile.call(this, e.currentTarget, function(src, size){
          if(size > 5000000){
              alert('이미지는 5MB이내 까지 첨부 가능합니다');
              return;
          }
          let li = document.createElement("li");
          let del = document.createElement("button");
          let img = document.createElement("img");

          del.textContent = '삭제'
          del.classList.add('delete');
          img.src = src;
          li.append(del, img);
          document.querySelector('.photo-list').append(li);

          del.addEventListener('click', () => {
            li.remove();
          })

          this.photoNum += 1;
      })
    },
  }
}
</script>
