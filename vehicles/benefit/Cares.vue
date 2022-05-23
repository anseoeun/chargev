<template>
	<div class="content purchase-benefit">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="구매 혜택" page-infotext="다양한 혜택을 통해 캐스퍼를 구매하세요." />
		<div class="benefit-list">
			<ul>
				<li>
					<v-btn type="nlink" to="/vehicles/benefit">구매혜택 메인</v-btn>
				</li>
				<li class="active">
					<v-btn type="nlink" to="/vehicles/benefit/Cares">CASPER 케어스</v-btn>
				</li>
				<li>
					<v-btn type="nlink" to="/vehicles/benefit/SmallCar">세제 혜택</v-btn>
				</li>
				<li>
					<v-btn type="nlink" to="/vehicles/benefit/BlueMembers">블루멤버스 혜택</v-btn>
				</li>
				<li>
					<v-btn type="nlink" to="/vehicles/benefit/Tinted">썬팅 무료 시공</v-btn>
				</li>
				<li>
					<v-btn type="nlink" to="/vehicles/benefit/Event">이벤트 &amp; 프로모션</v-btn>
				</li>
			</ul>
		</div>
		<section class="benefit-wrap cares">
			<div class="title">
				<h1>CASPER 케어스</h1>
				<p class="sub-text">캐스퍼 구매 고객들을 위한 카라이프 안심케어 서비스입니다.</p>
			</div>
			<div class="cont">
				<div class="box">
					<strong class="sub-title">
						구매할 때 부담없이,
						<span class="t-blue">경제적 부담 케어</span>
					</strong>

					<div class="cares-cont">
						<span class="tag">혜택 1</span>
						<!-- 2021.08.23 띄어쓰기 수정 -->
						<strong class="ebold">CASPER 전용카드</strong>
						<!-- 2021.09.23 텍스트 수정 -->
						<p class="info-text">캐스퍼 구매 시, 2.0% 적립부터 이용 금액에 따른 블루멤버스 포인트 적립까지 다양한 혜택을 만나보세요.</p>

						<div class="card-info">
							<ul>
								<li>
									<!-- 2021.09.23 카드이미지 위치수정 -->
									<div class="card-img">
										<v-img :src="require('~/assets/images/purchase/benefit-card2.png')" alt="카드이미지"></v-img>
									</div>
									<div class="tit">
										<span>주유 특화 혜택을 위한</span>
										<!-- 2021.08.18 텍스트 수정 -->
										<!-- 2021.08.23 텍스트 수정 -->
										<strong class="bold">
											Hyundai Mobility 카드
											<br />
											(CASPER 경차카드)
										</strong>
										<!-- 2021.09.23 삭제 -->
										<!-- <span class="annual-fee">연회비<span>유류세 환급형 0원</span></span> -->
									</div>
									<ul class="info-box">
										<li>
											<strong class="bold">캐스퍼 구매 시,</strong>
											<span class="t-gray">(택1)</span>
											<ul class="info-list">
												<!-- 2021.09.23 적립 삭제 -->
												<li>
													블루멤버스 포인트
													<em>
														<strong class="bold">2.0</strong>
														%
													</em>
												</li>
												<li>
													캐시백
													<em>
														<strong class="bold">1.2</strong>
														%
													</em>
												</li>
												<!-- 2021.09.23 삭제 -->
												<!-- <li>무이자 할부<em><strong class="bold">6</strong>개월</em></li> -->
											</ul>
										</li>
										<li>
											<strong class="bold">카드 이용 시,</strong>

											<!-- 2021.09.23 텍스트 전체 수정 -->
											<ul class="info-list">
												<li class="line">
													<span>
														유류세
														<br />
														<span class="tiny">(환급형 이용시)</span>
													</span>
													<em>
														<strong class="bold">250</strong>
														원 / L 환급
													</em>
												</li>
												<li>
													주유 시
													<em>
														최대
														<strong class="bold">130</strong>
														P
													</em>
												</li>
												<li>
													그 외 가맹점 이용 시
													<em>
														<strong class="bold">0.5</strong>
														%
													</em>
												</li>
												<li>
													현대해상 다이렉트
													<br />
													자동차 보험 가입 시
													<em>
														<strong class="bold">3만</strong>
														P
													</em>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<!-- 2021.09.23 카드이미지 위치수정 -->
									<div class="card-img">
										<v-img :src="require('~/assets/images/purchase/benefit-card.png')" alt="카드이미지"></v-img>
									</div>
									<div class="tit">
										<span>모빌리티 라이프를 위한</span>
										<!-- 2021.08.18 텍스트 수정 -->
										<!-- 2021.08.23 텍스트 수정 -->
										<strong class="bold">
											Hyundai Mobility 카드
											<br />
											(CASPER)
										</strong>
										<!-- 2021.09.23 삭제 -->
										<!-- <span class="annual-fee">연회비<span>30,000 원</span></span> -->
									</div>
									<ul class="info-box">
										<li>
											<!-- 2021.08.18 클래스 추가 -->
											<strong class="bold">캐스퍼 구매 시,</strong>
											<span class="t-gray">(택1)</span>

											<!-- 2021.09.23 텍스트 전체 수정 -->
											<ul class="info-list">
												<li class="line">
													<span>
														블루멤버스 포인트
														<br />
														<span class="tiny">
															(기본 적립 1.5% +
															<br />
															추가 적립 0.5%)
														</span>
													</span>
													<em>
														<strong class="bold">2.0</strong>
														%
													</em>
												</li>
												<li>
													캐시백
													<em>
														<strong class="bold">1.2</strong>
														%
													</em>
												</li>
												<li class="bullet-star">
													이벤트
													<br />
													<span>(기간: 2022.04.01 ~ 2022.06.30)</span>
												</li>
											</ul>
										</li>
										<li>
											<strong class="bold">카드 이용 시,</strong>

											<!-- 2021.09.23 텍스트 전체 수정 -->
											<ul class="info-list">
												<li>
													차량유지관리 업종 이용 시
													<em>
														<strong class="bold">3</strong>
														%
													</em>
												</li>
												<li>
													Mobility 업종 이용 시
													<em>
														<strong class="bold">2</strong>
														%
													</em>
												</li>
												<li>
													그 외 가맹점 이용 시
													<em>
														<strong class="bold">1</strong>
														%
													</em>
												</li>
												<li>
													현대해상 다이렉트
													<br />
													자동차 보험 가입 시
													<em>
														<strong class="bold">3만</strong>
														P
													</em>
												</li>
												<li class="bullet-star">
													이벤트
													<br />
													<span>(기간: 2022.04.01 ~ 2022.06.30)</span>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li class="full t-center mt60">
									<v-btn
										class="btn blue md"
										title="새창열림"
										:href="BASE_PATH + '/vehicles/benefit/EventDetail?eventNumber=E000000001'"
										type="link"
										target="_blank"
										>CASPER 전용카드 자세히 보기</v-btn
									>
								</li>
								<li class="save-auto">
									<div class="tit">
										<strong class="bold">블루 세이브-오토</strong>
										<div class="btn-play">
											<v-btn @click="autoSaveVideoPop = true"><i class="ico-play"></i><span>블루세이브-오토 알아보기</span></v-btn>
										</div>
										<p>
											신차 구입 시 30만 블루멤버스 포인트를 선지급 받아 차량 구매 시 사용하고, 이후 최대 36개월간 전용카드 이용금액에 대해
											<br />
											1.5% 블루멤버스 포인트를 적립받아 상환하는 차량 구매 프로그램(선지급 포인트 서비스)
										</p>
									</div>

									<!-- 2021.09.23 텍스트 전체 수정 -->
									<ul class="icon-info-list">
										<li class="customer">
											<em>대상 고객</em>
											<p>
												CASPER 전용카드 기 소지한 고객 대상
												<br />
												차량 대금 결제 고객
											</p>
										</li>
										<li class="point">
											<em>적용 혜택</em>
											<p>
												30만 블루멤버스 포인트 선지급하여
												<br />
												차량가 할인
											</p>
										</li>
										<li class="repayment">
											<em>상환</em>
											<p>
												블루 세이브-오토 상환 기간은 최대 36개월이며
												<br />
												전용카드 이용 금액에 따라 조기 상환 가능
											</p>
											<!-- <ul class="bullet-dash-list">
												<li>
													블루 세이브-오토 이용 만기일까지 상환되지 않은
													<br />
													경우, 미상환 원금을 일시 청구
												</li>
												<li>
													블루 세이브-오토 이용 기간 내 적립되는 블루
													<br />
													세이브-오토 포인트로만 상환 가능
												</li>
											</ul>
											<p class="tiny">
												(블루 세이브-오토 미이용 기간에 적립 또는
												<br />
												비신용카드 적립된 블루멤버스 포인트로는 상환 불가)
											</p>  -->
										</li>
									</ul>
									<!-- repayment-example -->
									<div class="repayment-example">
										<b class="tit-txt">상환 예시</b>
										<div class="ex-box">
											<p>CASPER 전용카드 월 56만원 이용 시 36개월 내 상환</p>
											<strong>
												560,000
												<span class="sm">원</span>
												X 1.5
												<span class="sm">% 포인트 적립 = 월</span>
												8,400
												<span class="sm">원 상환</span>
											</strong>
										</div>
										<div class="dash-list-wrap">
											<ul class="bullet-dash-list">
												<li>블루 세이브-오토 이용 만기일까지 상환되지 않는 경우 미상환 원금을 일시에 청구</li>
												<li>블루 세이브-오토 이용 기간 내 적립되는 블루멤버스 포인트로만 상환 가능</li>
												<li>블루 세이브-오토 미이용 기간에 적립 또는 비신용카드로 적립된 블루멤버스 포인트로는 상환 불가</li>
											</ul>
										</div>
									</div>
									<!-- // repayment-example -->
								</li>
							</ul>
							<p class="bullet-star">
								* 블루 세이브-오토에 대한 자세한 사항은 현대카드 캐스퍼 상담 콜센터(02-3015-9299/평일 09시~18시)로 문의해 주시기 바랍니다.
							</p>
						</div>
						<v-btn class="btn blue md" type="link" :href="BASE_PATH + '/vehicles/benefit/EventDetail?eventNumber=E000000018'" target="_blank" title="새창열림"
							>블루 세이브-오토 자세히 보기</v-btn
						>

						<!-- 2021.09.23 유의사항 추가 -->
						<div class="notice-wrap">
							<v-btn class="btn-detail">유의사항</v-btn>
							<template>
								<div class="box">
									<!-- <strong class="bold">CASPER 전용카드</strong> -->
									<div>
										<ul class="bullet-list">
											<li>Hyundai Mobility카드 (CASPER) : 국내전용/국내외겸용(AMEX,VISA) 3만원</li>
											<li>Hyundai Mobility카드 (CASPER 경차카드) : 국내전용/국내외전용(AMEX,VISA) 3만원</li>
											<li>Hyundai Mobility카드 (CASPER 경차카드 유류세환급) : 연회비 없음</li>
										</ul>
										<ul class="bullet-dash-list">
											<li>모든 가맹점은 현대카드 가맹점 등록 및 업종 분류 기준</li>
											<li>카드 이용대금 연체 시 약정금리+연체가산금리 3%의 연체이자율이 적용됩니다.(회원별, 이용 상품별 차등 적용/법정 최고금리 20% 이내)</li>
											<li>단, 연체 발생시점에 약정금리가 없는 경우 아래와 같이 적용</li>
											<li>일시불 : 거래 발생시점 기준 최소 기간(2개월)의 유이자할부 약정금리+연체가산금리 3%</li>
											<li>무이자할부 : 거래 발생시점 기준 동일한 할부 계약 기간의 유이자할부 약정금리+연체가산금리 3%</li>
											<li><strong class="bold">상환 능력에 비해 신용카드 이용금액이 과도할 경우, 귀하의 개인신용평점이 하락할 수 있습니다.</strong></li>
											<li><strong class="bold">개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수 있습니다.</strong></li>
											<li><strong class="bold">일정 기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할 수 있습니다.</strong></li>
											<li>신용카드 발급이 부적정한 경우(연체금 보유, 개인신용평점 낮음 등) 카드 발급이 제한될 수 있습니다.</li>
											<li>카드 이용대금과 이에 수반되는 모든 수수료를 지정된 대금 결제일에 상환합니다.</li>
											<li>금융소비자는 금융소비자보호법 제19조 제1항에 따라 해당 상품 또는 서비스에 대하여 설명을 받을 권리가 있습니다.</li>
											<li>자세한 내용 및 이용 조건은 카드 신청 전 현대카드 홈페이지 및 상품설명서, 약관 참고</li>
											<li>현대카드 준법감시심의필 제220420-009호(2022.04.20~2023.04.19)</li>
											<li>여신금융협회 심의필 제 2022 - C1h - 00295호 (2022.01.03 ~ 2023.01.02)</li>
										</ul>
									</div>
								</div>
							</template>
						</div>
					</div>

					<div ref="caresBenefit2" class="cares-cont">
						<span class="tag">혜택 2</span>
						<strong class="ebold">CASPER 특화 할부</strong>
						<p class="info-text">할부기간부터 금리까지, 지금 상황에 맞게 할부 상품을 선택해보세요.</p>

						<div class="installment-info">
							<div class="type1">
								<strong class="bold">표준형</strong>
								<!-- 2021.09.23 텍스트 수정 -->
								<p>
									최장 120개월까지 매월 원금과 이자를
									<br />
									동일한 금액으로 나눠내는 상환 방식
								</p>
								<div class="graph-img">
									<v-img :src="require('~/assets/images/purchase/installment-type1.png')" alt="표준형 그래프"></v-img>
								</div>

								<!-- 2021.09.23 표준형, 모빌리티표준형 순서 변경 -->
								<ul class="info-box">
									<li>
										<div class="tit">
											<!-- 20201.08.23 텍스트 수정 -->
											<span>
												CASPER 전용카드 또는 지정된 현대카드로
												<br />
												차량가의 1%이상 선수금 결제 시,
											</span>
											<!-- 20201.08.23 텍스트 수정 -->
											<strong class="bold">모빌리티 표준형</strong>
										</div>
										<ul class="info-list">
											<li>
												기간
												<em class="t-black">
													<strong class="bold">3 ~ 120</strong>
													개월
												</em>
											</li>
											<!-- 20201.08.23 텍스트 수정 -->
											<li>
												선수율
												<em>
													<strong class="bold">1</strong>
													%
												</em>
											</li>
											<!-- 20201.08.23 텍스트 수정 -->
											<li>
												금리
												<em>
													<strong class="bold">2.0 ~ 4.6</strong>
													%
												</em>
											</li>
										</ul>
									</li>
									<li>
										<div class="tit">
											<span>
												수입이 일정한
												<br />
												고객을 위한
											</span>
											<!-- 20201.08.23 텍스트 수정 -->
											<strong class="bold">표준형</strong>
										</div>
										<ul class="info-list">
											<li>
												기간
												<em class="t-black">
													<strong class="bold">3 ~ 120</strong>
													개월
												</em>
											</li>

											<!-- 20201.09.27 텍스트 수정 -->
											<li>
												선수율
												<em class="t-black">제한 없음</em>
											</li>
											<!-- 20201.08.23 텍스트 수정 -->
											<li>
												금리
												<em>
													<strong class="bold">4.0 ~ 5.9</strong>
													%
												</em>
											</li>
										</ul>
									</li>
								</ul>

								<!-- 2021.09.23 추가 -->
								<div class="benefit">
									<em>추가혜택</em>
									<span>등록대행 수수료 면제 (45,900원)</span>
								</div>

								<ul class="bullet-star-list">
									<li>
										모빌리티 표준형은 할부원금을 제외한 잔여금 전액(선수금)을 CASPER 전용카드 또는 Blue/M포인트가 적립되는 현대카드로 결제해야 하며 선수금은
										차량가의 1%이상이어야 합니다.
									</li>
									<!-- 일시적으로 미노출 <li>블루멤버스 포인트로 할부금 상환이 가능하며, 자세한 내용은 현대캐피탈 고객센터(1588-2114)로 문의 바랍니다.</li> -->
									<li>최대 할부 기간은 신용도에 따라 달라질 수 있습니다.</li>
								</ul>
							</div>

							<div class="type2">
								<strong class="bold">유예형</strong>
								<!-- 20201.09.27 텍스트 수정 -->
								<p>
									차량가의 일부 금액의 상환을 유예하고
									<br />
									나머지 금액만 약정기간동안 나눠내는 상환 방식
									<br />
									(할부 계약 만기 시, 유예금에 대한 재할부 가능)
								</p>
								<div class="graph-img">
									<v-img :src="require('~/assets/images/purchase/installment-type2.png')" alt="유예형 그래프"></v-img>
								</div>

								<!-- 2021.09.23 유예형, 모빌리티유예형 순서 변경 -->
								<ul class="info-box">
									<li>
										<div class="tit">
											<!-- 20201.08.23 텍스트 수정 -->
											<span>
												CASPER 전용카드 또는 지정된 현대카드로
												<br />
												차량가의 1%이상 선수금 결제 시,
											</span>
											<!-- 20201.08.23 텍스트 수정 -->
											<strong class="bold">모빌리티 유예형</strong>
										</div>
										<!-- 2021.09.23 텍스트 전체 수정 -->
										<ul class="info-list">
											<li>
												기간
												<em class="t-black">
													<strong class="bold">12 / 24 / 36</strong>
													개월
												</em>
											</li>
											<!-- 2021.09.27 텍스트 수정 -->
											<li>
												선수율
												<em>
													<strong class="bold">1</strong>
													%
												</em>
											</li>
											<li>
												금리
												<em>
													<strong class="bold">3.8</strong>
													%
												</em>
											</li>
											<li class="full">
												최대 유예율
												<em>
													<span>
														12개월 최대
														<strong class="bold">77</strong>
														%
													</span>
													<span>
														24개월 최대
														<strong class="bold">70</strong>
														%
													</span>
													<span>
														36개월 최대
														<strong class="bold">64</strong>
														%
													</span>
												</em>
											</li>
										</ul>
									</li>
									<li>
										<div class="tit">
											<!-- 2021.09.23 텍스트 수정 -->
											<span>
												차량 교체주기가
												<br />
												짧은 고객을 위한
											</span>
											<strong class="bold">유예형</strong>
										</div>
										<!-- 2021.09.23 텍스트 전체 수정 -->
										<ul class="info-list">
											<li>
												기간
												<em class="t-black">
													<strong class="bold">12 / 24 / 36</strong>
													개월
												</em>
											</li>
											<li>
												선수율
												<em class="t-black">제한 없음</em>
											</li>
											<li>
												금리
												<em>
													<strong class="bold">4.9</strong>
													%
												</em>
											</li>
											<li class="full">
												최대 유예율
												<em>
													<span>
														12개월 최대
														<strong class="bold">77</strong>
														%
													</span>
													<span>
														24개월 최대
														<strong class="bold">70</strong>
														%
													</span>
													<span>
														36개월 최대
														<strong class="bold">64</strong>
														%
													</span>
												</em>
											</li>
										</ul>
									</li>
								</ul>

								<!-- 2021.09.23 텍스트 추가 -->
								<ul class="bullet-star-list">
									<li>
										모빌리티 유예형은 할부원금을 제외한 잔여금 전액(선수금)을 CASPER 전용 카드 또는 Blue/M포인트가 적립되는 현대카드로 결제해야 하며 선수금은
										차량가의 1%이상이어야 합니다.
									</li>
									<li>
										중고차 잔가 보장 서비스 가입 시, 할부 계약 만기 시점에 잔가 보장 금액으로 유예금 상환 가능 (예. 36개월 유예 할부 기준 유예율 64%를 중고차
										잔가 보장 금액(3년 이하, 64%) 으로 보장받아 상환 진행)
									</li>
									<!-- 일시적으로 미노출 <li>블루멤버스 포인트로 할부금 상환이 가능하며, 자세한 내용은 현대캐피탈 고객센터(1588-2114)로 문의 바랍니다.</li> -->
								</ul>
							</div>
						</div>
						<div class="monthly-payment-guide">
							<PaymentInfoNoti active-name="1" />
						</div>
					</div>

					<div class="cares-cont">
						<span class="tag">혜택 3</span>
						<!-- 20201.08.23 텍스트 수정 -->
						<strong class="ebold">중고차 잔가 케어</strong>
						<!-- 20201.08.23 텍스트 수정 -->
						<p class="info-text">
							캐스퍼 구매 후 최초 등록일로부터 3년 이내 중고차 처분을 하면서 현대자동차 신차를 동일 명의로 재구매 시,
							<br />
							합리적인 보장률로 중고차 잔가를 보장해드립니다.
						</p>
						<ul class="icon-info-list used-car">
							<li>
								<em>가입 대상</em>
								<p>
									사업자를 보유하지 않은
									<br />
									개인고객 대상
								</p>
								<p class="bullet-star">
									적용제외 : 개인사업자, 법인사업자,
									<br />
									리스 렌트, 조달, 임직원 등
								</p>
							</li>
							<li class="method">
								<em>가입 방법</em>
								<p>
									차량 출고 전 ‘나의 구매 내역’에서
									<br />
									‘서비스 가입 신청’을 통해
									<br />
									가입이 가능합니다.
								</p>
							</li>
							<li class="date">
								<em>보장 기간</em>
								<p>
									신차구매 등록일 기준
									<br />
									3년 이내 구매차를 중고차로 처분 &amp;
									<br />
									현대자동차 신차를 동일 명의로
									<br />
									재구매시 적용됩니다.
								</p>
							</li>
							<li class="guarantee">
								<em>기준 보장률</em>
								<div class="table-wrap">
									<table>
										<colgroup>
											<col width="25%" />
											<col width="25%" />
											<col width="25%" />
											<col width="25%" />
										</colgroup>
										<thead>
											<tr>
												<th scope="col">보상기간</th>
												<th scope="col">1년 이하</th>
												<th scope="col">2년 이하</th>
												<th scope="col">3년 이하</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">보장률</th>
												<td>77%</td>
												<td>70%</td>
												<td>64%</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!-- 20201.08.23 텍스트 수정 -->
								<p>실제 구입 가격에 기준 보장률을 곱한 금액을 중고차 대금으로 보장합니다. (단, 차량 상태에 따라 감가 발생 가능)</p>
								<p class="bullet-star">기준가격 : 세금계산서 상의 차량 가격 에서 탁송료 제외, 부가세 포함한 가격</p>
							</li>
						</ul>

						<div class="notice-wrap">
							<v-btn class="btn-detail" :class="{ active: isNotice1 }" @click="isNotice1 = !isNotice1">
								유의사항
								<i class="icon-open"></i>
							</v-btn>
							<template v-if="isNotice1">
								<div class="box">
									<!-- 20201.08.23 텍스트 수정 -->
									<strong class="bold">
										중고차
										<br />
										잔가 케어
									</strong>
									<ul class="bullet-list">
										<li>개인사업자, 법인사업자, 리스, 렌트, 조달, 임직원 등은 적용에서 제외됩니다.</li>
										<!-- 20201.08.23 텍스트 수정 -->
										<li>중고차 잔가 케어 서비스는 출고 이전 가입 가능하며, 출고 이후에는 추가 가입이 불가능합니다.</li>
										<!-- 20201.08.23 텍스트 수정 -->
										<li>
											중고차 잔가 케어가 안되는 경우는 다음과 같습니다.
											<ul class="bullet-dash-list">
												<li>약정 기간(3년) 내 중고차를 매각과 동시에 신차를 재구입하지 않은 경우</li>
												<li>주행거리가 연평균 25,000km 초과하였거나 주행 거리계를 조작한 경우</li>
												<li>자동차 소유권이 이전된 경우 또는 저당권 설정/가압류/가처분/체납처분 등의 사유로 소유권 이전에 장애가 있는 경우</li>
												<li>현대차(오토핸즈) 판단 하에 운행에 지장이 있을 정도로 파손 또는 수리한 이력이 있는 경우</li>
												<li>전손, 도난, 차량 개조, 차량의 침수 및 화재 이력이 있는 경우</li>
												<li>사고 차량으로 하이브리드 시스템/엔진/트랜스미션/루프/필러/휠하우스/대쉬패널을 교체 및 용접수리 이력이 있거나 교체가 필요한 경우</li>
												<li>도어/휀더/후드/트렁크리드 부분 중 전체 4개 부분(패널) 이상 교환된 이력이 있거나 교환이 필요한 경우</li>
												<li>개인명의로 구입하였더라도 중고차 매각 시점에 사업자를 보유한 경우</li>
												<li>용도변경 차량 및 부활차량</li>
												<li>중대한 하자 및 수리 사실 등을 은폐하거나 고지하지 않는 경우</li>
											</ul>
										</li>
										<li>
											서비스 가입 차량의 실제 구입 가격에 확정보장률에 교환이력,도장,판금,주행거리에 따른 감가율을 차감한 보장률을 곱한 금액을 중고차 대금으로
											보장합니다.
										</li>
										<!-- 20201.08.23 텍스트 추가 -->
										<li>중고차 잔가 케어 서비스 이용 절차는 캐스퍼 온라인 고객센터 (080-500-6000)에 문의해주세요.</li>
									</ul>
								</div>
							</template>
						</div>
					</div>
				</div>

				<div class="box">
					<strong class="sub-title">
						구매 후에도 안심하고,
						<span class="t-blue">안심 운전 케어</span>
					</strong>
					<div class="cares-cont drive">
						<span class="tag">혜택 1</span>
						<strong class="ebold">운전 연수 지원</strong>
						<!-- 2021.09.27 텍스트 수정 -->
						<p class="info-text">
							운전결심은 경찰청, 안실련, 현대자동차가 함께 제공하는 안심 운전연수 매칭 서비스 입니다.
							<br />
							캐스퍼 구매 후 운전 연수 받고 다양한 혜택을 만나보세요.
						</p>
						<ul class="drive-info">
							<li class="sale">
								<span>연수 결제 고객 대상</span>
								<strong class="bold">최대 5만원 할인 혜택</strong>
								<p>
									기본 3만원 할인
									<br />
									<i class="icon-plus"></i>
									캐스퍼 계약 고객 신세계 상품권 2만원 증정
									<br />
									<span class="t-gray">(2021.11.01~2022.06.30)</span>
								</p>
							</li>
							<li class="bodycare">
								<span>연수 완료 고객 대상</span>
								<strong class="bold">바디케어 서비스 무상 제공</strong>
								<p>
									서비스 가입일 이후 1년 또는 주행거리 2만 km 이내
									<br />
									외장 손상 복원 수리 지원
								</p>
							</li>
						</ul>
						<v-btn class="btn blue md" type="nlink" to="/vehicles/benefit/EventDetail?eventNumber=E000000005">자세히 보기</v-btn>
					</div>

					<div class="cares-cont">
						<span class="tag">혜택 2</span>
						<strong class="ebold">차량 사고 케어</strong>
						<p class="info-text">
							상대방 과실로 내 차가 크게 파손됐다면?
							<br />
							출고 후 1년 이내 차대차 사고 시 캐스퍼 신차로 교환해드립니다.
						</p>
						<ul class="icon-info-list accident">
							<li class="target">
								<em>가입 대상</em>
								<p>
									사업자를 보유하지 않은
									<br />
									개인고객 대상
								</p>
								<p class="bullet-star">
									적용제외 : 개인사업자, 법인사업자,
									<br />
									리스 렌트, 조달, 임직원 등
								</p>
							</li>
							<li class="method">
								<em>가입 방법</em>
								<p>
									차량 출고 전 ‘나의 구매 내역’에서
									<br />
									‘서비스 가입 신청’을 통해
									<br />
									가입이 가능합니다.
								</p>
							</li>
							<li class="process">
								<em>처리 절차 관련 문의</em>
								<!-- 2021.08.23 텍스트 수정 -->
								<p>
									자세한 처리 절차는
									<br />
									캐스퍼 온라인 고객센터
									<br />
									(080-500-6000)로
									<br />
									문의 바랍니다.
								</p>
							</li>
						</ul>

						<div class="notice-wrap">
							<v-btn class="btn-detail" :class="{ active: isNotice2 }" @click="isNotice2 = !isNotice2">
								유의사항
								<i class="icon-open"></i>
							</v-btn>
							<template v-if="isNotice2">
								<div class="box">
									<!-- 2021.08.23 띄어쓰기 수정 -->
									<strong class="bold">차량 사고 케어</strong>
									<ul class="bullet-list">
										<li>현대자동차 직영 서비스센터 및 일부 블루핸즈에서 견적 및 수리를 진행한 경우에만 적용 가능</li>
										<li>사고차량 신차 가격의 30% 이상 판단 기준은 현대자동차 직영 서비스센터에서 발행한 견적서만 인정</li>
										<li>차량 수리비는 현대자동차가 부담하지 않으며, 가해자 또는 계약자의 보험으로 처리</li>
										<li>차량 수리 기간 중 자동차 보험 약관에 따라 해당 보험사로부터 렌터카를 제공받을 수도 있으니 별도 확인 요망</li>
										<li>출고 시 개인 명의로 출고했더라도 반납 시 사업자등록이 있는 고객 적용 불가</li>
										<li>차량 교환 없이 최초 구입비용만 환불하는 것을 보장하지는 않음</li>
										<li>조달/법인 출고분 제외</li>
										<li>사양추가, 상품성 개선 등으로 반납차량(사고차량) 구입가격과 교환차량 구입가격 차액 고객 부담</li>
										<li>반납차량(사고차량)과 교환차량의 취/등록과 관련된 개별소비세 및 취득세 등 차량의 구입 및 취득, 등록에 필요한 제반 비용 고객 부담</li>
										<li>
											반납차량(사고차량)에 주유된 연료는 환급되지 않으며, 차량에 부착한 물품의 탈거/제거로 차량이 손상될 위험이 있는 경우, 해당 물품을 탈거하여
											반환하지 않음
										</li>
										<li>
											반납차량(사고차량) 중고차 처리하는 기간(최대 1개월)동안 반납차량의 명의가 고객의 명의로 유지되며, 그에 따라 단기 의무보험을 중고차 매매로
											인한 명의 이전 시까지 가입해야 함
										</li>
										<li>
											교환차량의 출고일은 선택하신 차종 및 사양, 칼라 등에 따라 달라질 수 있으며, 당사가 예상하지 못하는 사정으로 인해 출고가 지연될 수 있음
										</li>
										<li>교환차량의 판매조건은 해당 차량이 출고되는 날 속한 달(月)을 기준으로 적용</li>
										<li>정부 정책 변경 등으로 개별소비세 및 취득세 등 차량의 구입 및 취득, 등록에 필요한 제반 비용이 증가 또는 감소될 수 있음</li>
										<li>반납차량에 적용된 할부금은 교환 시에 중고차 매각을 위해 전액 상환해야 함 (단, 할부업체별로 중도상환 수수료 발생 가능)</li>
										<li>반납차량에 저당 등 담보권이 설정된 경우에는 담보권 해지해야 본 프로그램 이용 가능</li>
									</ul>
								</div>
							</template>
						</div>
					</div>

					<div class="cares-cont">
						<span class="tag">혜택 3</span>
						<strong class="ebold">품질 보증 케어</strong>
						<p class="info-text">
							라이프 스타일과 주행 패턴에 따라 차체/일반 및 냉난방 계통의 보증 수리 조건을 직접 선택할 수 있는
							<br />
							고객 선택형 품질 보증제도를 제공합니다.
						</p>

						<ul class="care-list">
							<li>
								<strong class="bold">서비스 내용</strong>
								<p class="bold">신차 계약 시, 차체/일반부품, 냉난방 장치에 대한 보증 수리 조건을 직접 선택할 수 있습니다.</p>
								<p class="bullet-star">엔진 및 동력 전달 주요 부품은 5년/10만 km</p>
								<ul class="service-list">
									<li>
										<em>
											평소 주행거리가 길다면
											<span class="bold">마일리지형</span>
										</em>
										<p>2년/8만 km</p>
									</li>
									<li>
										<em>
											균형 잡힌 기본 보증은
											<span class="bold">기본형</span>
										</em>
										<p>3년/6만 km</p>
									</li>
									<li>
										<em>
											주말에만 차를 이용한다면
											<span class="bold">기간연장형</span>
										</em>
										<p>4년/4만 km</p>
									</li>
								</ul>
							</li>
							<li>
								<strong class="bold">변경 방법</strong>
								<p class="bold">보증기간 이내라면 횟수에 상관없이 언제든 변경 가능합니다.</p>
								<!-- 2021.08.23 텍스트 수정 -->
								<p>서비스 거점 방문 / 캐스퍼 온라인 고객센터 (080-500-6000) / myHyundai 앱 / 현대자동차 홈페이지</p>
							</li>
						</ul>

						<v-btn
							class="btn blue md link"
							type="link"
							target="_blank"
							title="새창열림"
							href="https://www.hyundai.com/kr/ko/customer-service/car-management-service/warranty-period/normal-period"
						>
							보증수리 안내 보기
						</v-btn>

						<div class="notice-wrap">
							<v-btn class="btn-detail" :class="{ active: isNotice3 }" @click="isNotice3 = !isNotice3">
								유의사항
								<i class="icon-open"></i>
							</v-btn>
							<template v-if="isNotice3">
								<div class="box">
									<strong class="bold">품질 보증 케어</strong>
									<ul class="bullet-list">
										<li>보증기간 적용 : 보증기간은 신차 판매일부터 적용되며 기간 또는 주행거리 중 먼저 도래한 것을 보증기간 만료로 간주합니다.</li>
										<li>선택형 보증서비스는 ‘18년 1월 1일 이후 출고 차량부터 적용됩니다.</li>
										<!-- 2021.08.23 텍스트 수정 -->
										<li>
											선택형 보증기간은 서비스 거점을 직접 방문하거나 캐스퍼 온라인 고객센터 (080-500-6000), 현대자동차 홈페이지, myHyundai 어플에서 확인
											가능하며 해당 보증기간 內 상기 옵션 중 하나로 변경 가능합니다.
										</li>
										<li>H Genuine Accessories 부품은 차체 및 일반부품/냉난방 장치에 적용되는 선택형 보증기간이 적용되지 않습니다.</li>
										<li>세부 보증 기간 제조원 별도 보증서 참조 (차종별 품목별 상이)</li>
									</ul>
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="banner-wrap">
			<a :href="BASE_PATH + '/vehicles/benefit/EventDetail?eventNumber=E000000001'">
				<v-img
					:src="require('~/assets/images/purchase/banner-plcc-view.jpg')"
					alt="신용카드 혜택 블루멤버스 모빌리티 신용카드로 더 많은 혜택을 받으세요. 자세히 보기"
				></v-img>
			</a>
		</div>

		<video-pop :visible="autoSaveVideoPop" @close="autoSaveVideoPop = false" />
	</div>
</template>

<script>
import VideoPop from '~/pages/common/VideoPop'
import PaymentInfoNoti from '~/components/common/PaymentInfoNoti'
export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - CASPER 케어스',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '캐스퍼 구매혜택, 현대 캐스퍼 구매혜택, 캐스퍼 PLCC카드, 캐스퍼 할부' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content:
						'현대 캐스퍼 구매 혜택, CASPER 전용카드 (PLCC카드), 캐스퍼 할부, 운전 연수 지원 등 캐스퍼 구매 고객들을 위한 카라이프 안심케어 서비스를 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/benefit/Cares' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - CASPER 케어스' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content:
						'현대 캐스퍼 구매 혜택, CASPER 전용카드 (PLCC카드), 캐스퍼 할부, 운전 연수 지원 등 캐스퍼 구매 고객들을 위한 카라이프 안심케어 서비스를 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - CASPER 케어스' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content:
						'현대 캐스퍼 구매 혜택, CASPER 전용카드 (PLCC카드), 캐스퍼 할부, 운전 연수 지원 등 캐스퍼 구매 고객들을 위한 카라이프 안심케어 서비스를 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/benefit/Cares' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/benefit/Cares' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/benefit/Cares' }
			]
		}
	},
	components: {
		VideoPop,
		PaymentInfoNoti
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '구매', link: '/' },
				{ linkName: '구매혜택', link: '/' }
			],
			isNotice1: false,
			isNotice2: false,
			isNotice3: false,
			isNotice4: false,
			autoSaveVideoPop: false
		}
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:구매 혜택:Casper케어스',
						siteSection: '차량',
						siteSubsection: '구매 혜택'
					}
				}
			}

			window._spaData(obj)

			if (this.$route.query.position && this.$route.query.position === 'cb2') {
				this.$refs.caresBenefit2.scrollIntoView() // 스크롤 이동
			}
		})
	}
}
</script>
