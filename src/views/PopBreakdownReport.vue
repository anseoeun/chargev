<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-breakdown-report max">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
          <template slot="content">
              <splide-slide>
                <AddrSearch
                  searchType="addrList"
                  @selected="currentPage = 1"
                 />
              </splide-slide>
              <splide-slide>
                <div class="charger-wrap">
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
                    <!-- 고장항목 -->
                    <h2 class="tit-type1">고장항목</h2>
                    <ul class="breakdown-list">
                        <li v-for="(item, index) in breakdownList" :key="index"><button v-html="item" @click="breakdownItem = item.replace('<br />', ' ');currentPage = 2"></button></li>
                    </ul>

                </div>
              </splide-slide>
              <splide-slide>
                <div class="charger-wrap">
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
                    <!-- 고장항목 -->
                    <h2 class="tit-type1">고장항목</h2>
                    <p class="breakdown-item-text">{{ breakdownItem }}</p>

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
                                <button class="btn-type1 st2">문의사항 등록하기</button>
                            </div>
                        </div>
                    </template>
                </div>
              </splide-slide>
          </template>
        </Carousel>
      </template>
    </BtmLayer>
</template>

<script>
import AddrSearch from '@/views/common/AddrSearch'
export default {
  components:{
    AddrSearch
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  

  data(){
    return{
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
      // 사진
      photoNum: 0,      

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0
    }
  },
  mounted(){
      this.$refs.photolist.addEventListener('touchstart', (e)=>{e.stopPropagation()})
      this.$refs.photolist.addEventListener('touchmove', (e)=>{e.stopPropagation()})
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
