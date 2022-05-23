<template>
	<div class="content purchase-benefit">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="구매 혜택" page-infotext="다양한 혜택을 통해 캐스퍼를 구매하세요." />
		<div class="benefit-list">
			<ul>
				<li>
					<v-btn type="nlink" to="/vehicles/benefit">구매혜택 메인</v-btn>
				</li>
				<li>
					<v-btn type="nlink" to="/vehicles/benefit/Cares">CASPER 케어스</v-btn>
				</li>
				<li>
					<v-btn type="nlink" to="/vehicles/benefit/SmallCar">세제 혜택</v-btn>
				</li>
				<li class="active">
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
		<section class="benefit-wrap bluemembers">
			<div class="title">
				<h1>블루멤버스 혜택</h1>
				<p class="sub-text">블루멤버스는 현대자동차 고객이 다양한 혜택을 통해 즐거운 자동차 생활을 즐길 수 있도록 해주는 현대자동차의 멤버십 서비스입니다.</p>
			</div>
			<div class="cont">
				<div class="box">
					<span class="tag">혜택 1</span>
					<strong class="ebold">포인트 적립 및 사용</strong>
					<p class="info-text">캐스퍼 구매 시, 직영서비스센터/블루핸즈 일반수리 시, 제휴 가맹점 이용 시 적립하고 사용하실 수 있습니다.</p>
					<p class="bullet-star">회원 유형 및 가맹점마다 적립/할인률 및 사용한도가 다르며 1포인트는 1원과 같이 계산됩니다.</p>
					<ul class="point-list">
						<li>
							<strong class="bold">
								캐스퍼 구매시,
								<br />
								포인트 적립
							</strong>
							<p class="sub-text">
								구매 회차에 따라
								<br />
								포인트를 적립 해 드립니다.
							</p>
							<div class="table-area">
								<table>
									<colgroup>
										<col width="160px" />
										<col width="65px" />
										<col width="auto" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">구분</th>
											<th scope="col">구매 회차</th>
											<th scope="col">적립 포인트</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row" rowspan="6">
												일반회원
												<br />
												(개인 및 개인사업자)
											</th>
											<td>1회</td>
											<td>0.7%</td>
										</tr>
										<tr>
											<td>2회</td>
											<td>1.1%</td>
										</tr>
										<tr>
											<td>3회</td>
											<td>1.5%</td>
										</tr>
										<tr>
											<td>4회</td>
											<td>2.0%</td>
										</tr>
										<tr>
											<td>5회</td>
											<td>2.5%</td>
										</tr>
										<tr>
											<td>6회 이상</td>
											<td>3.0%</td>
										</tr>
										<tr>
											<th scope="row">렌트/리스 이용 개인</th>
											<td colspan="2">구매 가격의 0.3%</td>
										</tr>
										<tr>
											<th scope="row">일반, 렌트/리스 이용 법인</th>
											<td colspan="2">구매 가격의 0.3%</td>
										</tr>
										<tr>
											<th scope="row">당사 지정 렌트/리스사 법인</th>
											<td colspan="2">출고시 0.2% (장기실운행자 회원가입 시, 0.1% 추가)</td>
										</tr>
									</tbody>
								</table>
								<p class="bullet-star">
									차량구매시 지급한 최종 가격 기준이며, 대당 최대 적립액은 200만포인트입니다.(원단위 소수점 절사)
								</p>
							</div>
						</li>
						<li>
							<strong class="bold">
								캐스퍼 구매시,
								<br />
								포인트 선 사용
							</strong>
							<p class="sub-text">
								블루멤버스포인트를 신차 구매 시
								<br />
								선 사용 가능합니다.
							</p>
							<div class="table-area">
								<table>
									<colgroup>
										<col width="120px" />
										<col width="auto" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">구매 횟수</th>
											<th scope="col">선 사용 가능포인트</th>
										</tr>
									</thead>
									<tbody>
										<!-- 2021.08.23 삭제 -->
										<!-- <tr>
                      <td>1회</td>
                      <td>2만</td>
                    </tr> -->
										<tr>
											<td>2회</td>
											<td>10만</td>
										</tr>
										<tr>
											<td>3회</td>
											<td>15만 / 10만</td>
										</tr>
										<tr>
											<td>4회</td>
											<td>20만 / 15만</td>
										</tr>
										<tr>
											<td>5회 이상</td>
											<td>25만 / 20만</td>
										</tr>
									</tbody>
								</table>
								<p class="bullet-star">적립예정 포인트가 선 포인트 사용 금액보다 작을 경우, 사용이 불가합니다.</p>
							</div>
							<strong class="bold">
								캐스퍼 특화 할부 이용시,
								<br />
								포인트 사용
							</strong>
							<p class="sub-text">
								블루멤버스 포인트로
								<br />
								현대캐피탈 할부금 및 대출 원금 상환이 가능합니다.
							</p>
							<ul class="normal-list">
								<li>
									<strong class="list-tit">대상</strong>
									<p class="txt">
										캐스퍼를 출고한 개인/개인사업자 고객 중
										<br />
										블루멤버스 포인트 보유 고객
									</p>
								</li>
								<li>
									<strong class="list-tit">상환 및 절차 문의</strong>
									<p class="txt">
										현대캐피탈 고객센터(1588-2114)를 통해
										<br />
										블루멤버스 포인트로 월별 할부금 혹은
										<br />
										대출 원금 상환 신청 가능
									</p>
									<p class="bullet-star">1건당 최소 1만포인트 사용 필수, 연간 100만 포인트 한도</p>
								</li>
							</ul>
						</li>
						<li>
							<strong class="bold">
								제휴처 포인트
								<br />
								적립 및 사용
							</strong>
							<p class="sub-text">
								주유부터 쇼핑까지 다양한 제휴처에서 적립받고
								<br />
								사용할 수 있습니다.
							</p>
							<ul class="bullet-list">
								<li>자동차</li>
								<li>주유 &amp; 충전</li>
								<li>중고차</li>
								<li>영화</li>
								<li>여행 &amp; 테마파크</li>
								<li>외식</li>
								<li>쇼핑 &amp; 생활</li>
								<li>육아</li>
								<li>보험</li>
								<li>골프</li>
							</ul>
							<v-btn
								class="btn blue"
								type="link"
								href="https://www.hyundai.com/kr/ko/customer-service/bluemembers-benefit/bluemembers-point/point-saveuse"
								target="_blank"
								title="새창열림"
							>
								제휴처 확인하기
							</v-btn>
						</li>
					</ul>
				</div>

				<div class="box">
					<span class="tag">혜택 2</span>
					<strong class="ebold">바디케어 서비스</strong>
					<p class="info-text">
						차량 구입 후에도 새차의 모습 그대로 유지하고자 하는 고객의 니즈를 담아, 신차 출고일로부터 최대 1년(또는 주행거리 2만km) 동안 단독사고로 인해
						발생하는
						<br />
						차량의 외장손상에 대해 판금, 도색, 교체 등을 보장해드리는 현대자동차만의 차별화 된 고객서비스입니다.
					</p>
					<ul class="service-list">
						<li>
							<strong class="bold">가입방법</strong>
							<ul>
								<li class="before">
									인수 확정 전
									<p>
										마이페이지 내
										<br />
										‘선택형 서비스 구매’에서 가입 가능합니다.
									</p>
								</li>
								<!-- 2021.08.18 오타 수정 : 카라이프몰 -->
								<li class="after">
									인수 확정 후
									<p>
										출고일 포함 30일 이내에
										<br />
										<v-btn type="link" href="https://shop.hyundai.com" target="_blank" class="t-blue" title="새창열림">현대 Shop↗</v-btn>
										에서 가입 가능합니다.
									</p>
								</li>
							</ul>
							<p class="bullet-star">현재 보유 포인트 부족 시, 적립 예정 포인트 및 양도받은 가족 포인트와 합산 구매가 가능합니다.</p>
						</li>
						<li>
							<strong class="bold">바디케어 보장 부위 · 서비스 유형 및 상품</strong>
							<div class="table-area">
								<table>
									<colgroup>
										<col width="101px" />
										<col width="99px" />
										<col width="186px" />
										<col width="101px" />
										<col width="103px" />
										<col width="126px" />
										<col width="145px" />
										<col width="152px" />
										<col width="auto" />
									</colgroup>
									<thead>
										<tr>
											<th scope="col">상품명</th>
											<th scope="col">가입비용</th>
											<th scope="col">보장부위</th>
											<th scope="col">손상 유형</th>
											<th scope="col">서비스 유형</th>
											<th scope="col">보상 한도(VAT 포함)</th>
											<th scope="col">보장 기간</th>
											<th scope="col">보장 횟수</th>
											<th scope="col">자기부담금</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row" rowspan="5">스탠다드</th>
											<td rowspan="5">11만 포인트</td>
											<td>후드, 트렁크리드, 테일게이트</td>
											<td rowspan="3">경미 / 기타손상</td>
											<td rowspan="3">수리 / 교체</td>
											<td rowspan="3">총 100만원</td>
											<td rowspan="11">출고일 이후 1년 또는 주행거리 2만 km 중 선 도래 시점</td>
											<td rowspan="3">
												최대 3회
												<br />
												(각 보장 부위별 1회)
											</td>
											<td rowspan="3">10만원</td>
										</tr>
										<tr>
											<td>프론트/리어 휀더, 도어</td>
										</tr>
										<tr>
											<td>프론트/리어 범퍼</td>
										</tr>
										<tr>
											<td>전면유리</td>
											<td rowspan="2">기타손상</td>
											<td rowspan="2">
												수리 / 교체
												<br />
												(선 수리 가능)
											</td>
											<td>총 30만원</td>
											<td>1회</td>
											<td rowspan="2">없음</td>
										</tr>
										<tr>
											<td>프론트/리어 타이어</td>
											<td>총 20만원</td>
											<td>1회, 1개</td>
										</tr>
										<tr>
											<th scope="row" rowspan="3">스마트 I</th>
											<td rowspan="3">9.5만 포인트</td>
											<td>후드, 트렁크리드, 테일게이트</td>
											<td rowspan="3">경미 / 기타손상</td>
											<td rowspan="3">수리 / 교체</td>
											<td rowspan="3">총 80만원</td>
											<td rowspan="3">
												최대 2회
												<br />
												(각 보장 부위별 1회)
											</td>
											<td rowspan="3">없음</td>
										</tr>
										<tr>
											<td>프론트/리어 휀더, 도어</td>
										</tr>
										<tr>
											<td>프론트/리어 범퍼</td>
										</tr>
										<tr>
											<th scope="row" rowspan="3">스마트 II</th>
											<td rowspan="3">7.8만 포인트</td>
											<td>후드, 트렁크리드, 테일게이트</td>
											<td rowspan="3">경미 / 기타손상</td>
											<td rowspan="3">수리 / 교체</td>
											<td rowspan="3">총 80만원</td>
											<td rowspan="3">
												최대 2회
												<br />
												(각 보장 부위별 1회)
											</td>
											<td rowspan="3">10만원</td>
										</tr>
										<tr>
											<td>프론트/리어 휀더, 도어</td>
										</tr>
										<tr>
											<td>프론트/리어 범퍼</td>
										</tr>
									</tbody>
								</table>
							</div>
						</li>
					</ul>
					<v-btn
						class="btn blue"
						type="link"
						target="_blank"
						title="새창열림"
						href="https://www.hyundai.com/kr/ko/customer-service/bluemembers-benefit/bluemembers-point/body-care"
					>
						자세히 보기
					</v-btn>
				</div>

				<div class="box">
					<span class="tag">혜택 3</span>
					<strong class="ebold">블루 기본 점검 혜택</strong>
					<p class="info-text">블루멤버스 회원이라면 포인트 차감없이 8년 8회 무상 차량 점검 서비스를 제공합니다.</p>
					<ul class="basic-list">
						<li>
							<strong class="bold">1~6년차</strong>
							엔진룸 / 하부 / 일반 점검 15종 및 에탄올 워셔액
						</li>
						<li>
							<strong class="bold">7~8년차</strong>
							엔진룸 / 하부 / 일반 점검 15종
						</li>
					</ul>
				</div>

				<div class="notice-wrap">
					<v-btn class="btn-detail" :class="{ active: isNotice }" @click="isNotice = !isNotice">
						유의사항
						<i class="icon-open"></i>
					</v-btn>
					<template v-if="isNotice">
						<div class="box">
							<strong class="bold">포인트 적립 및 사용</strong>
							<ul class="point-info">
								<li>
									<strong>신차 구입 포인트 적립</strong>
									<ul class="bullet-list">
										<li>
											상기 적립률은 고객이 차량 구매 시 지급한 최종 가격 기준이며, 대당 최대 적립액은 최대 200만 포인트입니다. (원단위 소수점 절사)
										</li>
										<li>신차구매시 적립된 포인트는 적립 D+3일 가용화 됩니다.</li>
										<li>
											패밀리 임직원(당사/계열사/협력사 등)은 차량구매조건에 따라 포인트 적립률이 달라질 수 있습니다.
										</li>
										<li>
											포인트는 주계약자의 당사 차량 구매 이력 기준으로 적립되며, 보유 이력이 사실과 다른 경우, 현대자동차 지점 및 대리점에 자동차 등록 원부를
											제출하여 주시기 바랍니다.
											<ul class="bullet-dash-list">
												<li>
													장애인 공동명의에 한하여 공동명의자의 과거 구매 이력이 인정됩니다. (단, 면세 건에 한함)
												</li>
												<li>
													차량 구매 계약 전 관련서류를 지점/대리점에 제출해 주신 건에 한하여 이력 확인 후 적립이 가능합니다.
												</li>
												<li>렌트/리스로 구매하신 이력은 구내 횟수에 포함되지 않습니다.</li>
											</ul>
										</li>
										<li>
											지급된 포인트는 5년간 사용할 수 있으며, 5년이 지난 시점에 먼저 지급/적립된 포인트부터 월단위로 자동 소멸됩니다.
										</li>
										<li>
											차량 구매 취소 시에는 적립된 블루멤버스 포인트도 함께 취소되며, 포인트 오적립 시 별도의 통지 없이 취소 될 수 있습니다.
											<br />
											단, 차량 출고(제작증 발급) 후 6개월 이내 블루멤버스 가입한 회원에 힌해 적립 되며, 법인 임직원은 신차 구매 시 포인트 적립 대상에서
											제외됩니다.
										</li>
										<li>차량 계약 조건에 따라 적립률이 달라질 수있습니다.</li>
										<li>개인택시 구매이력은 구매횟수별 포인트 지급 기준에서 제외됩니다.</li>
										<li>
											현대차 및 제네시스 브랜드 차종 구매 시 구매횟수는 합산 적용됩니다.
											<br />
											예시) 현대차 브랜드 3대 구매 후 제네시스 브랜드 차종 1대 구매 시 4회 적용
										</li>
									</ul>
								</li>
								<li>
									<strong>신차 구입 포인트 선사용</strong>
									<ul class="bullet-list">
										<li>적립 예정 포인트가 선 포인트 사용 금액보다 작을 경우, 사용이 불가합니다.</li>
										<li>운전학원/임직원/조달/관납 적용 제외됩니다.</li>
										<li>당사/그룹사/대리점/모비스전출직원/블루핸즈인원/1차 사내/상생협력 직원할인 출고건은 적용 제외됩니다.</li>
									</ul>
								</li>
								<li>
									<strong>블루멤버스 포인트 할부금 상환</strong>
									<ul class="bullet-list">
										<li>현대캐피탈 고객센터(1588-2114)를 통해 ARS 본인 인증 후 블루멤버스 포인트 할부금 상환을 신청할 수 있습니다.</li>
										<li>캐스퍼 구매 시에 이용한 현대캐피탈 할부 상품만 상환할 수 있습니다.</li>
										<li>연 100만 포인트 한도 내에 상환할 수 있습니다.</li>
										<li>월 납입금 내 상환이 가능하며, 월 납입금 차량 가격, 이용 기간, 선수율 및 유예율에 따라 다를 수 있습니다.</li>
										<li>포인트 사용 처리 시점은 신청 후 즉시이며 상환 취소는 당일 취소만 가능합니다.</li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="box">
							<strong class="bold">바디케어 서비스</strong>
							<ul class="bullet-list">
								<li>본 서비스의 취소는 신청일 포함 30일 이내만 가능합니다.</li>
								<li>보상에서 제외되는 부품이 있을 경우, 총 수리비와 보장금액이 달라질 수 있습니다.</li>
								<li>
									교체부품은 파손부품과 동일한 사양이어야 하며, 현대자동차 서비스거점(직영서비스 센터 및 블루핸즈)에서 수리하는 경우에 한하여 본 서비스가
									적용됩니다.
								</li>
								<!-- 2021.09.23 텍스트 수정 -->
								<li>
									프론트/리어 범퍼 등 1쌍으로 구성된 부품을 동시에 교체할 경우 낱개(1측) 부품별로 각 1회의 서비스 보장횟수가 적용됩니다.
									<br />
									(예시 : 프론트/리어 범퍼 교체 -> 서비스 2회 적용)
								</li>
								<li>차체하부의 손상범위(경미손상, 기타손상)은 자동차보험 보장 기준상 범퍼 손상의 기준 범위에 따릅니다.</li>
								<li>
									타이어 교체 및 보상
									<ul>
										<li>
											<span>①</span>
											도로상의 위험으로 타이어가 파손되어 정상운행이 불가능한 상태로 파손된 경우 교체비용을 보상합니다.
											<br />
											(일반적인 펑크가 아닌 타이어가 재생 불가능한 상태로 손상되거나 찢어진 경우만 보상이 되며, 손상된 타이어의 1본만 교체가 됩니다.)
											<br />
											<span class="t-black">[용어의 정의]</span>
											‘도로상 위험’ 이란 도로에 존재하는 포트홀, 암석, 나무 조각, 금속 파면, 플라스틱 및 합성 폐기물 등을 의미합니다.
										</li>
										<li>
											<span>②</span>
											휠 얼라이먼트나 단순 마모로 인한 교체 비용은 보상하지 않습니다.
										</li>
										<li>
											<span>③</span>
											타이어 교체시에는 차량 제작사가 신차 출고시에 장착하는 타이어 사양 기준으로 보상이 됩니다.
										</li>
										<li>
											<span>④</span>
											타이어 제조사의 재고부족으로 동일 타이어를 제공하지 못할 경우 동일한 사양의 다른 제품으로 제공될 수 있습니다.
										</li>
										<li>
											<span>⑤</span>
											알로이 휠의 경우, 타이어 교체 작업 중에 발생한 손상은 보상하지 않습니다.
										</li>
									</ul>
								</li>
								<li>수리 전 사고접수가 반드시 필요하며, 손상부위 복원 수리 및 교체 완료 후 사진 및 수리비 내역서 확인 후 수리비가 지급됩니다.</li>
								<li>본 서비스에 따른 수리비용 상당의 보험금은 고객님께서 하기 서비스비용청구 처리절차란에 기재된 절차와 요건을 모두 갖추어야 지급됩니다.</li>
								<li>손상 부위에 대해 심사승인 전 선 수리한 경우 보상에서 제외됩니다. (단 앞유리 및 타이어 사고접수 전 선수리 가능)</li>
								<li>본 서비스는 보장기간 1년 이내 수리한 경우에 한하며, 회사의 심사 승인일로부터 30일 이내에 수리를 완료해야 합니다.</li>
							</ul>
						</div>
						<div class="box">
							<strong class="bold">블루 기본 점검 혜택</strong>
							<ul class="bullet-list">
								<li>최종 블루기본점검 시행일 기준 한달(30일) 간 다음 년차 점검은 불가합니다.</li>
								<li>차량 점검 후 이상 발견 시 보증수리를 제외한 항목은 고객님이 원하시는 경우 유상수리됩니다.</li>
							</ul>
						</div>
					</template>
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
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 블루멤버스 혜택',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대 블루멤버스, 캐스퍼 블루멤버스' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content: '캐스퍼 구매 시 제공되는 포인트 적립, 바디케어 서비스, 무상 차량 점검 서비스 등 상세한 현대 블루멤버스 혜택을 온라인으로 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/benefit/BlueMembers' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 블루멤버스 혜택' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '캐스퍼 구매 시 제공되는 포인트 적립, 바디케어 서비스, 무상 차량 점검 서비스 등 상세한 현대 블루멤버스 혜택을 온라인으로 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 블루멤버스 혜택' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '캐스퍼 구매 시 제공되는 포인트 적립, 바디케어 서비스, 무상 차량 점검 서비스 등 상세한 현대 블루멤버스 혜택을 온라인으로 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/benefit/BlueMembers' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/benefit/BlueMembers' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/benefit/BlueMembers' }
			]
		}
	},
	components: {},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '구매', link: '/' },
				{ linkName: '구매혜택', link: '/' }
			],
			isNotice: false
		}
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:구매 혜택:블루 멤버스 혜택',
						siteSection: '차량',
						siteSubsection: '구매 혜택'
					}
				}
			}

			window._spaData(obj)
		})

		this.setCaption()
	}
}
</script>
