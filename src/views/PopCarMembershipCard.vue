<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-breakdown-report max">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
          <template slot="content">
              <splide-slide>
                <div class="qna-wrap">
                   <!-- 완성차 멤버십카드-->
                    <h2 class="tit-type1">완성차 멤버십카드</h2>
                    <div class="qna-text">
                        <p>차지비와 제휴한 완성차 업체는 차량에 차지비 서비스 이용이 가능한 전용카드가 적재되어 출고됩니다.</p>
                        <p>멤버십카드가 지급되는 완성차 업체는 아래와 같습니다.</p>
                    </div>
                   <!-- 완성차 멤버십카드 미적재 -->
                    <h2 class="tit-type1">완성차 멤버십카드 미적재</h2>
                    <div class="qna-text">
                        <p>완성차 전용 멤버십카드는 안내서와 함께 패키징이 되어있으며, 차량의 조수석, 글로브박스, 트렁크, 뒷 좌석에 있습니다.</p>
                        <p>차량내에 완성차 멤버십 카드가 없을 경우 고객센터를 통해 문의주시면 절차를 통해 발급을 진행해드리도록 하겠습니다.</p>
                    </div>
                    <div class="btn-box">
                        <button class="btn-type1 st2" @click="currentPage = 1">고객센터 문의하기</button>
                    </div>
                </div>
              </splide-slide>
              <splide-slide>
                <div class="qna-wrap">
                  <!-- 멤버십카드 문의 -->
                  <h2 class="tit-type1">멤버십카드 문의</h2> 
                  <div class="blur-text space-text"><span>BMW</span><span>530e</span></div>
                  <!-- 내용 작성 -->
                  <h2 class="tit-type1">내용 작성</h2> 
                  <div class="form-box-wrap"> 
                      <div class="form-box">
                          <div class="row">
                              <div class="input">
                                  <Input type="text" placeholder="내용 작성" />
                              </div>
                          </div>
                      </div>
                      <div class="btn-box">
                          <button class="btn-type1 st2" @click="$emit('qnaRegistCompleted')">문의사항 등록하기</button>
                      </div>
                  </div>
                </div>
              </splide-slide>
          </template>
        </Carousel>
      </template>
    </BtmLayer>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  
  data(){
    return {
      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0
    }
  }
}
</script>
