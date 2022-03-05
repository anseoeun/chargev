<template>
  <div class="contents">
    <div class="breakdown-report-wrap">
      <h2 class="tit-type1">충전기 고장신고</h2>
      <!-- 충전기 선택 -->
      <div class="shadow-box">
        <h3 class="tit-type2">충전기 선택 <div class="right"><button v-if="isCharger" class="c-gray" @click="modifyCharger">수정</button></div></h3>
        <!-- search-box -->
        <div v-if="!isCharger" class="search-box">
          <div class="form-layer-wrap">
            <input  type="text" placeholder="충전소명 입력" v-model="chargePlace">
            <div v-if="placeLayer" class="form-layer">
              <div v-if="chargePlace" class="layer">
                <em>검색결과</em>
                <ul>
                  <li v-for="(item, index) in chargeData.place" :key="index" @click="setPlace(item)"><button>{{ item }}</button></li>
                </ul>
              </div>
              <div v-if="statusLayer" class="layer">
                <em>검색결과</em>
                <ul>
                  <li v-for="(item, index) in chargeData.status" :key="index">
                    <button @click="setStstus(item)"><div class="row"><div class="cell">{{ item.id }}</div><div class="cell">{{ item.type }}</div></div></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button class="btn-type1 st1" @click="placeLayer = true">확인</button>
        </div>
        <!-- // search-box -->
        <div v-if="isCharger" class="grid-list">
            <div class="row">
                <div class="tit">충전소</div>
                <div class="text">{{ chargePlace }}</div>
            </div>
            <div class="row">
                <div class="tit">충전기 ID</div>
                <div class="text">{{ chargeId }}</div>
            </div>
            <div class="row">
                <div class="tit">충전기타입</div>
                <div class="text">{{ chargeType }}</div>
            </div>
        </div>
      </div>
      
      <!-- 고장항목 -->
      <div class="shadow-box">
        <h3 class="tit-type2">고장항목 <div class="right"><button class="c-gray" @click="brokenItem = ''">수정</button></div></h3>
        <div v-if="!brokenItem" class="box-list">
          <ul>
            <li v-for="(item, index) in brokenItemList" :key="index"><button v-html="item" @click="brokenItem = item"></button></li>
          </ul>
        </div>
        <div v-if="brokenItem" class="grid-list">
            <div class="row">
                <div class="tit">고장항목</div>
                <div class="text" v-html="brokenItem.replace('<br>', ' ')"></div>
            </div>
        </div>
      </div>
      
      <!-- 사진 -->
      <div class="shadow-box">
        <h3 class="tit-type2">사진</h3>
        <div class="photo-upload">
          <div v-show="photoNum" class="photo-list"></div>
          <div class="text-upload">
            <span class="txt">사진 업로드</span>
            <Icon type="arr-right" />
          </div>
          <div class="btn-upload">
            <button class="btn-type1 st1">확인</button>
            <input type="file" accept=".png, .jpg, .jpeg" @change="photoUpload">
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'BreakdownReport',
  components: {
    
  },
  data(){
    return{
      //충전기
      isCharger: false,
      chargePlace: '',
      chargeId: '',
      chargeType: '',
      placeLayer: false,
      statusLayer: false,
      chargeData: {
        place: [
          '서울시 송파구 롯데타워 지하2층',
          '서울시 송파구 롯데타워 지하3층',
          '서울시 송파구 롯데타워 지하4층',
          '서울시 송파구 롯데타워 지하5층',
          '서울시 송파구 롯데타워 지하6층',
          '서울시 송파구 롯데타워 지하7층',
          '서울시 송파구 롯데타워 지하8층',
          '서울시 송파구 롯데타워 지하9층',
          '서울시 송파구 롯데타워 지하10층',
        ],
        status :[
          {
            id:'20031010301',
            type: '완속'
          },
          {
            id:'20031010302',
            type: '급속'
          },
        ]
      },
      //고장항목
      brokenItem: '',
      brokenItemList: ['화면불량', '충전카드<br>인식불가', '반응없음', '커넥터<br>분리 불가', '전원 OFF', '충전중단', '충전시작<br>불가', '통신장애', '기타'],
      photoNum: 0,
    }
  },
  mounted(){

  },
  methods: {
    setPlace(val){
      this.statusLayer = true;
      this.chargePlace =  val;
    },
    setStstus(val){
      this.isCharger = true;
      this.placeLayer = false;
      this.statusLayer = false;

      this.chargeId = val.id;
      this.chargeType = val.type;
    },
    modifyCharger(){
      this.isCharger = false;
    },
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
    }
  }
}
</script>
