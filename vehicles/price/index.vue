<template>
	<div class="content vehicles price">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="가격" :page-infotext="`캐스퍼의 가격을 확인해 보세요.<br />(${date} 기준)`" />

		<div id="template" class="price-content">
			<v-tab class="tab-default line center-st sky" :data="tabList" :contents="true" :value="tabStatus">
				<template slot="middle">
					<p class="noti-txt">* 트림별 기본/선택품목을 클릭해보세요. </p>
				</template>
				<template slot="contents">
					<div data-id="tab1">
						<!-- content : html -->
						<div class="table-area">
							<table>
								<colgroup>
									<col width="208px" />
									<col width="680px" />
									<col width="auto" />
								</colgroup>
								<thead>
									<tr>
										<th scope="row">트림 / 가격</th>
										<th scope="row">기본품목</th>
										<th scope="row">선택 품목</th>
									</tr>
								</thead>
								<tbody>
									<tr data-trim="smart">
										<th scope="col">
											<p>스마트</p>
											<strong>13,850,000</strong>
											원
										</th>
										<td scope="col">
											<!-- Option List -->
											<ul data-opts="basic" class="table-list-contents">
												<li>
													<p class="name">파워트레인 / 성능</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">스마트스트림 가솔린 1.0 엔진</span>
														,
														<span class="spec_opts" tabindex="0" role="button">4단 자동변속기</span>
														,
														<span class="spec_opts" tabindex="0" role="button">풋파킹 브레이크</span>
													</p>
												</li>
												<li>
													<p class="name">지능형 안전기술</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">전방 충돌방지 보조(차량/보행자/자전거 탑승자)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">차로 이탈방지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">차로 유지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">하이빔 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전자 주의 경고</span>
														,
														<span class="spec_opts" tabindex="0" role="button">전방 차량 출발 알림</span>
													</p>
												</li>
												<li>
													<p class="name">안전</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">7에어백 시스템(앞좌석, 앞좌석 사이드, 앞좌석 센터사이드, 커튼)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">간접식 타이어 공기압 경보 장치</span>
														,
														<span class="spec_opts" tabindex="0" role="button">타이어 응급처치 키트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">세이프티 언락</span>
														,
														<span class="spec_opts" tabindex="0" role="button">유아용 시트 고정장치(2열 2개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후석 승객 알림</span>
													</p>
												</li>
												<li>
													<p class="name">외관</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">메탈페인트 라디에이터 그릴</span>
														,
														<span class="spec_opts" tabindex="0" role="button">15인치 스타일드 스틸 휠 & 타이어</span>
														,
														<span class="spec_opts" tabindex="0" role="button">LED 주간주행등</span>
														,
														<span class="spec_opts" tabindex="0" role="button">바디컬러 아웃사이드 미러(열선, 전동접이, 전동조절, 락폴딩)</span>
													</p>
												</li>
												<li>
													<p class="name">내장</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">운전석 선바이저 거울</span>
														,
														<span class="spec_opts" tabindex="0" role="button">룸램프</span>
														,
														<span class="spec_opts" tabindex="0" role="button">클러스터(4.2″컬러 LCD)</span>
													</p>
												</li>
												<li>
													<p class="name">시트</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">직물 시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전석 수동 높이 조절</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2열 벤치 폴딩</span>
													</p>
												</li>
												<li>
													<p class="name">편의</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">폴딩타입 도어 리모컨키</span>
														,
														<span class="spec_opts" tabindex="0" role="button">수동식 틸트 스티어링 휠</span>
														,
														<span class="spec_opts" tabindex="0" role="button">오토라이트 컨트롤</span>
														,
														<span class="spec_opts" tabindex="0" role="button">USB 충전기(1열 1개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">파워 아웃렛(1열 1개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후방 주차거리 경고</span>
														,
														<span class="spec_opts" tabindex="0" role="button">크루즈 컨트롤</span>
													</p>
												</li>
												<li>
													<p class="name">멀티미디어</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">일반 오디오 시스템(2스피커, USB, 블루투스 핸즈프리)</span>
													</p>
												</li>
											</ul>
										</td>
										<td>
											<!-- 선택 품목 Accordian Option -->
											<div class="table-acodian-list list-wrap listType">
												<div class="list-item active">
													<button class="list-title" data-target="smart-opts1" title="닫힘" @click="priceAccordion($event)">
														<span class="title">
															<label>선택 품목</label>
														</span>
													</button>
													<div data-id="smart-opts1" class="conts">
														<ul data-opts="select">
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">선루프</span>
																</p>
																<span class="item-price">400,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">캐스퍼 액티브Ⅰ</span>
																</p>
																<span class="item-price">950,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">에센셜 플러스</span>
																</p>
																<span class="item-price">1,520,000</span>
																원
															</li>
														</ul>
													</div>
												</div>
											</div>
										</td>
									</tr>

									<tr data-trim="modern">
										<th scope="col">
											<p>모던</p>
											<strong>15,900,000</strong>
											원
										</th>
										<td scope="col">
											<!-- Trim Filter -->
											<div class="table-between-default">
												<span class="default-name">스마트 트림의 기본품목도 함께 제공됩니다.</span>
												<div class="view-default">
													<label for="check-modern" class="chk">
														<input id="check-modern" type="checkbox" name="check-modern" @click="allCheckView($event)" />
														<span>모던 트림의 전체품목 보기</span>
													</label>
												</div>
											</div>
											<!-- Show/Hide 항목 -->
											<!-- 기본 -->
											<ul data-opts="basic" class="table-list-contents basic" style="display: block;">
												<li>
													<p class="name">외관</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">메탈페인트 스키드 플레이트</span>
													</p>
												</li>
												<li>
													<p class="name">내장</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">가죽 스티어링 휠(열선포함)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전석 시트 암레스트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">동승석 선바이저 거울</span>
														,
														<span class="spec_opts" tabindex="0" role="button">실내 무드램프(퍼플)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">인조가죽 적용 내장(도어 암레스트, 콘솔)</span>
													</p>
												</li>
												<li>
													<p class="name">시트</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">인조가죽 시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">앞좌석 열선시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전석 통풍시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2열 5:5 분할 폴딩</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2열 분리형 헤드레스트</span>
													</p>
												</li>
												<li>
													<p class="name">편의</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">버튼시동 & 스마트키</span>
														,
														<span class="spec_opts" tabindex="0" role="button">스마트키 원격시동</span>
														,
														<span class="spec_opts" tabindex="0" role="button">오토다운 파워 윈도우(운전석)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">리어 와이퍼 & 와셔</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2WD 험로주행모드(스노우/샌드/머드)</span>
													</p>
												</li>
												<li>
													<p class="name">인포테인먼트</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">일반 오디오 시스템(4스피커)</span>
													</p>
												</li>
											</ul>
											<!-- 전체품목 선택시 -->
											<ul data-opts="basic" class="table-list-contents" style="display: none;">
												<li>
													<p class="name">파워트레인 / 성능</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">스마트스트림 가솔린 1.0 엔진</span>
														,
														<span class="spec_opts" tabindex="0" role="button">4단 자동변속기</span>
														,
														<span class="spec_opts" tabindex="0" role="button">풋파킹 브레이크</span>
													</p>
												</li>
												<li>
													<p class="name">지능형 안전기술</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">전방 충돌방지 보조(차량/보행자/자전거 탑승자)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">차로 이탈방지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">차로 유지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">하이빔 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전자 주의 경고</span>
														,
														<span class="spec_opts" tabindex="0" role="button">전방 차량 출발 알림</span>
													</p>
												</li>
												<li>
													<p class="name">안전</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">7에어백 시스템(앞좌석, 앞좌석 사이드, 앞좌석 센터사이드, 커튼)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">간접식 타이어 공기압 경보 장치</span>
														,
														<span class="spec_opts" tabindex="0" role="button">타이어 응급처치 키트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">세이프티 언락</span>
														,
														<span class="spec_opts" tabindex="0" role="button">유아용 시트 고정장치(2열 2개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후석 승객 알림</span>
													</p>
												</li>
												<li>
													<p class="name">외관</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">메탈페인트 라디에이터 그릴</span>
														,
														<span class="spec_opts" tabindex="0" role="button">15인치 스타일드 스틸 휠 & 타이어</span>
														,
														<span class="spec_opts" tabindex="0" role="button">LED 주간주행등</span>
														,
														<span class="spec_opts" tabindex="0" role="button">바디컬러 아웃사이드 미러(열선, 전동접이, 전동조절, 락폴딩)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">메탈페인트 스키드 플레이트</span>
													</p>
												</li>
												<li>
													<p class="name">내장</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">운전석 선바이저 거울</span>
														,
														<span class="spec_opts" tabindex="0" role="button">룸램프</span>
														,
														<span class="spec_opts" tabindex="0" role="button">클러스터(4.2″컬러 LCD)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">가죽 스티어링 휠(열선포함)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전석 시트 암레스트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">동승석 선바이저 거울</span>
														,
														<span class="spec_opts" tabindex="0" role="button">실내 무드램프(퍼플)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">인조가죽 적용 내장(도어 암레스트, 콘솔)</span>
													</p>
												</li>
												<li>
													<p class="name">시트</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">운전석 수동 높이 조절</span>
														,
														<span class="spec_opts" tabindex="0" role="button">인조가죽 시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">앞좌석 열선시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전석 통풍시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2열 5:5 분할 폴딩</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2열 분리형 헤드레스트</span>
													</p>
												</li>
												<li>
													<p class="name">편의</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">수동식 틸트 스티어링 휠</span>
														,
														<span class="spec_opts" tabindex="0" role="button">오토라이트 컨트롤</span>
														,
														<span class="spec_opts" tabindex="0" role="button">USB 충전기(1열 1개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">파워 아웃렛(1열 1개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후방 주차거리 경고</span>
														,
														<span class="spec_opts" tabindex="0" role="button">크루즈 컨트롤</span>
														,
														<span class="spec_opts" tabindex="0" role="button">버튼시동 & 스마트키</span>
														,
														<span class="spec_opts" tabindex="0" role="button">스마트키 원격시동</span>
														,
														<span class="spec_opts" tabindex="0" role="button">오토다운 파워 윈도우(운전석)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">리어 와이퍼 & 와셔</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2WD 험로주행모드(스노우/샌드/머드)</span>
													</p>
												</li>
												<li>
													<p class="name">인포테인먼트</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">일반 오디오 시스템(4스피커)</span>
													</p>
												</li>
											</ul>
										</td>
										<td>
											<!-- 선택 품목 Accordian Option -->
											<div class="table-acodian-list list-wrap listType">
												<div class="list-item active">
													<button class="list-title" data-target="modern-opts1" title="닫힘" @click="priceAccordion($event)">
														<span class="title">
															<label>선택 품목</label>
														</span>
													</button>
													<div data-id="modern-opts1" class="conts">
														<ul data-opts="select">
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">선루프</span>
																</p>
																<span class="item-price">400,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">캐스퍼 액티브Ⅰ</span>
																</p>
																<span class="item-price">950,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">현대 스마트센스Ⅰ</span>
																</p>
																<span class="item-price">700,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">멀티미디어 내비 플러스</span>
																</p>
																<span class="item-price">1,430,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">디자인 플러스</span>
																</p>
																<span class="item-price">400,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">17인치 알로이 휠 패키지</span>
																</p>
																<span class="item-price">550,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">17인치 알로이 휠 & 타이어</span>
																	<br />
																	(캐스퍼 액티브Ⅰ선택 시 선택가능)
																</p>
																<span class="item-price">500,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">컴포트</span>
																</p>
																<span class="item-price">400,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	ㄴ
																	<span class="spec_opts" tabindex="0" role="button">스토리지</span>
																	<br />
																	(컴포트 선택 시 선택가능)
																</p>
																<span class="item-price">70,000</span>
																원
															</li>
														</ul>
													</div>
												</div>
											</div>
										</td>
									</tr>

									<tr data-trim="inspiration">
										<th scope="col">
											<p>인스퍼레이션</p>
											<strong>18,700,000</strong>
											원
										</th>
										<td scope="col">
											<!-- Trim Filter -->
											<div class="table-between-default">
												<span class="default-name">모던 트림의 기본품목도 함께 제공됩니다.</span>
												<div class="view-default">
													<label for="check-inspiration" class="chk">
														<input id="check-inspiration" type="checkbox" name="check-inspiration" @click="allCheckView($event)" />
														<span>인스퍼레이션 트림의 전체품목 보기</span>
													</label>
												</div>
											</div>
											<!-- Show/Hide 항목 -->
											<!-- 기본 -->
											<ul data-opts="basic" class="table-list-contents basic" style="display: block;">
												<li>
													<p class="name">지능형 안전기술</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">전방 충돌방지 보조(교차로 대향차)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후측방 충돌방지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후방 교차 충돌방지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">안전 하차 경고</span>
														,
														<span class="spec_opts" tabindex="0" role="button">스마트 크루즈 컨트롤(정차 및 재출발 기능 미포함)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로)</span>
													</p>
												</li>
												<li>
													<p class="name">외관</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">프로젝션 헤드램프</span>
														,
														<span class="spec_opts" tabindex="0" role="button">아웃사이드 미러(LED 방향지시등)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">LED 리어콤비램프</span>
														,
														<span class="spec_opts" tabindex="0" role="button">17인치 알로이 휠(전면가공) & 타이어</span>
														,
														<span class="spec_opts" tabindex="0" role="button">루프랙</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후륜 디스크 브레이크</span>
													</p>
												</li>
												<li>
													<p class="name">내장</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">메탈페인트 인사이드 도어핸들</span>
														,
														<span class="spec_opts" tabindex="0" role="button">하운드투스 인테리어(헤드라이닝)</span>
													</p>
												</li>
												<li>
													<p class="name">시트</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">1열 풀 폴딩 시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2열 슬라이딩 & 리클라이닝 시트</span>
													</p>
												</li>
												<li>
													<p class="name">편의</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">세이프티 파워 윈도우(운전석)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">풀오토 에어컨</span>
														,
														<span class="spec_opts" tabindex="0" role="button">마이크로 에어필터</span>
														,
														<span class="spec_opts" tabindex="0" role="button">하이패스 시스템</span>
														,
														<span class="spec_opts" tabindex="0" role="button">D&N 룸미러</span>
														,
														<span class="spec_opts" tabindex="0" role="button">USB 충전기(2열 1개)</span>
													</p>
												</li>
												<li>
													<p class="name">인포테인먼트</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">8인치 내비게이션(블루링크, 폰 프로젝션, 현대 카페이)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">6스피커</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후방 모니터(조향 연동)</span>
													</p>
												</li>
											</ul>
											<!-- 전체품목 선택시 -->
											<ul data-opts="basic" class="table-list-contents" style="display: none;">
												<li>
													<p class="name">파워트레인 / 성능</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">스마트스트림 가솔린 1.0 엔진</span>
														,
														<span class="spec_opts" tabindex="0" role="button">4단 자동변속기</span>
														,
														<span class="spec_opts" tabindex="0" role="button">풋파킹 브레이크</span>
													</p>
												</li>
												<li>
													<p class="name">지능형 안전기술</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">전방 충돌방지 보조(차량/보행자/자전거 탑승자)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">차로 이탈방지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">차로 유지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">하이빔 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전자 주의 경고</span>
														,
														<span class="spec_opts" tabindex="0" role="button">전방 차량 출발 알림</span>
														,
														<span class="spec_opts" tabindex="0" role="button">전방 충돌방지 보조(교차로 대향차)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후측방 충돌방지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후방 교차 충돌방지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">안전 하차 경고</span>
														,
														<span class="spec_opts" tabindex="0" role="button">스마트 크루즈 컨트롤(정차 및 재출발 기능 미포함)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로)</span>
													</p>
												</li>
												<li>
													<p class="name">안전</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">7에어백 시스템(앞좌석, 앞좌석 사이드, 앞좌석 센터사이드, 커튼)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">간접식 타이어 공기압 경보 장치</span>
														,
														<span class="spec_opts" tabindex="0" role="button">타이어 응급처치 키트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">세이프티 언락</span>
														,
														<span class="spec_opts" tabindex="0" role="button">유아용 시트 고정장치(2열 2개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후석 승객 알림</span>
													</p>
												</li>
												<li>
													<p class="name">외관</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">메탈페인트 라디에이터 그릴</span>
														,
														<span class="spec_opts" tabindex="0" role="button">LED 주간주행등</span>
														,
														<span class="spec_opts" tabindex="0" role="button">바디컬러 아웃사이드 미러(열선, 전동접이, 전동조절, 락폴딩)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">메탈페인트 스키드 플레이트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">프로젝션 헤드램프</span>
														,
														<span class="spec_opts" tabindex="0" role="button">아웃사이드 미러(LED 방향지시등)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">LED 리어콤비램프</span>
														,
														<span class="spec_opts" tabindex="0" role="button">17인치 알로이 휠(전면가공) & 타이어</span>
														,
														<span class="spec_opts" tabindex="0" role="button">루프랙</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후륜 디스크 브레이크</span>
													</p>
												</li>
												<li>
													<p class="name">내장</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">운전석 선바이저 거울</span>
														,
														<span class="spec_opts" tabindex="0" role="button">룸램프</span>
														,
														<span class="spec_opts" tabindex="0" role="button">클러스터(4.2″컬러 LCD)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">가죽 스티어링 휠(열선포함)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전석 시트 암레스트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">동승석 선바이저 거울</span>
														,
														<span class="spec_opts" tabindex="0" role="button">실내 무드램프(퍼플)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">인조가죽 적용 내장(도어 암레스트, 콘솔)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">메탈페인트 인사이드 도어핸들</span>
														,
														<span class="spec_opts" tabindex="0" role="button">하운드투스 인테리어(헤드라이닝)</span>
													</p>
												</li>
												<li>
													<p class="name">시트</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">운전석 수동 높이 조절</span>
														,
														<span class="spec_opts" tabindex="0" role="button">인조가죽 시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">앞좌석 열선시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전석 통풍시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2열 5:5 분할 폴딩</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2열 분리형 헤드레스트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">1열 풀 폴딩 시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2열 슬라이딩 & 리클라이닝 시트</span>
													</p>
												</li>
												<li>
													<p class="name">편의</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">수동식 틸트 스티어링 휠</span>
														,
														<span class="spec_opts" tabindex="0" role="button">오토라이트 컨트롤</span>
														,
														<span class="spec_opts" tabindex="0" role="button">USB 충전기(1열 1개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">파워 아웃렛(1열 1개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후방 주차거리 경고</span>
														,
														<span class="spec_opts" tabindex="0" role="button">크루즈 컨트롤</span>
														,
														<span class="spec_opts" tabindex="0" role="button">버튼시동 & 스마트키</span>
														,
														<span class="spec_opts" tabindex="0" role="button">스마트키 원격시동</span>
														,
														<span class="spec_opts" tabindex="0" role="button">리어 와이퍼 & 와셔</span>
														,
														<span class="spec_opts" tabindex="0" role="button">2WD 험로주행모드(스노우/샌드/머드)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">세이프티 파워 윈도우(운전석)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">풀오토 에어컨</span>
														,
														<span class="spec_opts" tabindex="0" role="button">마이크로 에어필터</span>
														,
														<span class="spec_opts" tabindex="0" role="button">하이패스 시스템</span>
														,
														<span class="spec_opts" tabindex="0" role="button">D&N 룸미러</span>
														,
														<span class="spec_opts" tabindex="0" role="button">USB 충전기(2열 1개)</span>
													</p>
												</li>
												<li>
													<p class="name">인포테인먼트</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">8인치 내비게이션(블루링크, 폰 프로젝션, 현대 카페이)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">6스피커</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후방 모니터(조향 연동)</span>
													</p>
												</li>
											</ul>
										</td>
										<td>
											<!-- 선택 품목 Accordian Option -->
											<div class="table-acodian-list list-wrap listType">
												<div class="list-item active">
													<button class="list-title" data-target="inspiration-opts1" title="닫힘" @click="priceAccordion($event)">
														<span class="title">
															<label>선택 품목</label>
														</span>
													</button>
													<div data-id="inspiration-opts1" class="conts">
														<ul data-opts="select">
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">선루프</span>
																</p>
																<span class="item-price">400,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">스토리지</span>
																</p>
																<span class="item-price">70,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">캐스퍼 액티브Ⅱ</span>
																</p>
																<span class="item-price">900,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	ㄴ
																	<span class="spec_opts" tabindex="0" role="button">액티브 플러스</span>
																	<br />
																	(캐스퍼 액티브Ⅱ 선택 시 선택가능)
																</p>
																<span class="item-price">500,000</span>
																원
															</li>
														</ul>
													</div>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- // content : html -->
					</div>
					<div data-id="tab2">
						<!-- content : html -->
						<div class="table-area">
							<table>
								<colgroup>
									<col width="208px" />
									<col width="680px" />
									<col width="auto" />
								</colgroup>
								<thead>
									<tr>
										<th scope="row">트림 / 가격</th>
										<th scope="row">기본품목</th>
										<th scope="row">선택 품목</th>
									</tr>
								</thead>
								<tbody>
									<tr data-trim="smart">
										<th scope="col">
											<p>스마트</p>
											<strong>13,750,000</strong>
											원
										</th>
										<td scope="col">
											<!-- Option List -->
											<ul data-opts="basic" class="table-list-contents">
												<li>
													<p class="name">파워트레인 / 성능</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">스마트스트림 가솔린 1.0 엔진</span>
														,
														<span class="spec_opts" tabindex="0" role="button">4단 자동변속기</span>
														,
														<span class="spec_opts" tabindex="0" role="button">풋파킹 브레이크</span>
													</p>
												</li>
												<li>
													<p class="name">지능형 안전기술</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">전방 충돌방지 보조(차량/보행자/자전거 탑승자)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">차로 이탈방지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">차로 유지 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">하이빔 보조</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전자 주의 경고</span>
														,
														<span class="spec_opts" tabindex="0" role="button">전방 차량 출발 알림</span>
													</p>
												</li>
												<li>
													<p class="name">안전</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">6에어백 시스템(앞좌석, 앞좌석 사이드, 커튼)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">간접식 타이어 공기압 경보 장치</span>
														,
														<span class="spec_opts" tabindex="0" role="button">타이어 응급처치 키트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">세이프티 언락</span>
													</p>
												</li>
												<li>
													<p class="name">외관</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">메탈페인트 라디에이터 그릴</span>
														,
														<span class="spec_opts" tabindex="0" role="button">15인치 스타일드 스틸 휠 & 타이어(VAN)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">LED 주간주행등</span>
														,
														<span class="spec_opts" tabindex="0" role="button">바디컬러 아웃사이드 미러(열선, 전동접이, 전동조절, 락폴딩)</span>
													</p>
												</li>
												<li>
													<p class="name">내장</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">운전석 선바이저 거울</span>
														,
														<span class="spec_opts" tabindex="0" role="button">룸램프</span>
														,
														<span class="spec_opts" tabindex="0" role="button">클러스터(4.2″컬러 LCD)</span>
													</p>
												</li>
												<li>
													<p class="name">시트</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">직물 시트</span>
														,
														<span class="spec_opts" tabindex="0" role="button">운전석 수동 높이 조절</span>
													</p>
												</li>
												<li>
													<p class="name">편의</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">폴딩타입 도어 리모컨키</span>
														,
														<span class="spec_opts" tabindex="0" role="button">수동식 틸트 스티어링 휠</span>
														,
														<span class="spec_opts" tabindex="0" role="button">오토라이트 컨트롤</span>
														,
														<span class="spec_opts" tabindex="0" role="button">USB 충전기(1열 1개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">파워 아웃렛(1열 1개)</span>
														,
														<span class="spec_opts" tabindex="0" role="button">후방 주차거리 경고</span>
														,
														<span class="spec_opts" tabindex="0" role="button">크루즈 컨트롤</span>
														,
														<span class="spec_opts" tabindex="0" role="button">격벽</span>
														,
														<span class="spec_opts" tabindex="0" role="button">보호봉</span>
													</p>
												</li>
												<li>
													<p class="name">멀티미디어</p>
													<p class="content">
														<span class="spec_opts" tabindex="0" role="button">일반 오디오 시스템(2스피커, USB, 블루투스 핸즈프리)</span>
													</p>
												</li>
											</ul>
										</td>
										<td>
											<!-- 선택 품목 Accordian Option -->
											<div class="table-acodian-list list-wrap listType">
												<div class="list-item active">
													<button class="list-title" data-target="smart-opts1" title="닫힘" @click="priceAccordion($event)">
														<span class="title">
															<label>선택 품목</label>
														</span>
													</button>
													<div data-id="smart-opts1" class="conts">
														<ul data-opts="select">
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">캐스퍼 액티브Ⅰ</span>
																</p>
																<span class="item-price">950,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">베이직 플러스</span>
																</p>
																<span class="item-price">330,000</span>
																원
															</li>
															<li>
																<p class="item-name">
																	<span class="spec_opts" tabindex="0" role="button">시트 패키지</span>
																</p>
																<span class="item-price">600,000</span>
																원
															</li>
														</ul>
													</div>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!-- // content : html -->
					</div>
				</template>
			</v-tab>
			<ul class="bullet-list">
				<li>블랙 직물시트 일부는 인조가죽이 포함되어있음</li>
				<li>하이패스 시스템에는 장애인 통행료 자동할인 기능 없음</li>
				<li>
					주행 보조 사양(전방 충돌방지 보조 등)은 위험도가 높은 특정 주행상황에서 운전자를 보조
					<br />
					-상세 작동 조건은 취급 설명서 참조
				</li>
				<li>내비게이션 기반 스마트 크루즈 컨트롤(안전구간, 곡선로)은 ‘멀티미디어 내비 플러스’와 ‘현대 스마트센스 I’ 동시 적용 시 포함</li>
				<li>내비게이션 지도 업데이트 서비스는 차량 구매후 8년까지 보장되며, 이후 당사 사정에 의해 만료될 수 있습니다.</li>
				<li>차체자세 제어기능 : ABS, EBD, BAS 기능 포함</li>
				<li>선택하신 바디타입(캐스퍼/캐스퍼 VAN)과 트림, 외/내장 색상 및 선택품목에 따라 이미지, 영상 및 설명이 실제 차량과 차이가 있을 수 있습니다.</li>
				<li>사양 및 가격은 성능 개선이나 관련 법규에 따라 사전 예고 없이 변경될 수 있습니다.</li>
			</ul>
			<div class="btn-wrap">
				<ul>
					<li>
						<v-btn class="btn md blue" @click="fileDownload('AX_CASPER_catalog.pdf')">
							<i class="icon-download-white"></i>
							카탈로그 다운로드
						</v-btn>
					</li>
					<li>
						<v-btn class="btn md blue" @click="fileDownload('AX_CASPER_price.pdf')">
							<i class="icon-download-white"></i>
							가격표 다운로드
						</v-btn>
					</li>
					<li>
						<v-btn class="btn md blue" @click="fileDownload('AX_CASPER_manual.pdf')">
							<i class="icon-download-white"></i>
							취급설명서 다운로드
						</v-btn>
					</li>
					<li><v-btn class="btn md blue link" @click="goManualDownloadPage">인포테인먼트 시스템 매뉴얼 다운로드</v-btn></li>
				</ul>
			</div>
		</div>

		<!-- popup -->
		<pop-sample
			:visible="popVisible"
			:is-popup-spec-for-price="popVisible"
			:spec-name="resultData.specName"
			:repn-car-code="resultData.repnCarCode"
			@close="popVisible = false"
		></pop-sample>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import PopSample from '~/components/page/vehicles/price/popup/Detail'
export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 가격',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대자동차 가격, 캐스퍼 SUV 차량 가격, 현대 캐스퍼 가격, 경형 SUV 가격' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content: '현대자동차 경형 SUV 캐스퍼의 가격을 웹사이트에서 확인해 보세요. 스마트, 모던, 인스퍼레이션 트림별 상세 가격 및 품목 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/price' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 가격' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '현대자동차 경형 SUV 캐스퍼의 가격을 웹사이트에서 확인해 보세요. 스마트, 모던, 인스퍼레이션 트림별 상세 가격 및 품목 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 가격' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '현대자동차 경형 SUV 캐스퍼의 가격을 웹사이트에서 확인해 보세요. 스마트, 모던, 인스퍼레이션 트림별 상세 가격 및 품목 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/price' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/price' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/price' }
			]
		}
	},
	components: {
		PopSample
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '소개', link: '/' },
				{ linkName: '가격', link: '/vehicles/price' }
			],
			tabStatus: 'tab1',
			tabList: [
				{ value: 'tab1', label: '캐스퍼' },
				{ value: 'tab2', label: '캐스퍼 VAN' }
			],
			date: '2022년 2월 3일',
			popVisible: false, //popup
			dataList: [],
			selectData: {},
			isSelectBox: false,
			isSelectOpen: false,
			currentSelected: null,
			currentUrl: '',
			$template: null,
			resultData: {
				carSpcCd: '',
				specName: '',
				repnCarCode: ''
			}
		}
	},
	computed: {
		...mapGetters({
			channel: 'channel'
		})
	},
	updated() {
		this.setCaption()
	},

	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:가격',
						siteSection: '차량',
						siteSubsection: '가격표'
					}
				}
			}

			window._spaData(obj)
		})

		this.$nextTick(() => {
			this.$template = document.getElementById('template')
			this.$template.addEventListener('click', this.onTemplateClick)
			//this.$template.addEventListener('keydown', this.onTemplateKeydown)
			this.makeDom()
			// this.initialize()
		})
	},

	methods: {
		makeDom() {
			if (this.$template.innerHTML === '') {
				return
			}
			this.makeSelectBox()
			if (!this.isSelectBox) {
				this.makeTab(this.dataList)
			}

			const specOptsList = document.querySelectorAll('.spec_opts')
			for (let i = 0; i < specOptsList.length; i++) {
				specOptsList[i].tabIndex = '0'
				specOptsList[i].setAttribute('role', 'button')
			}

			const accordionButtonList = document.querySelectorAll('.list-title')
			if (accordionButtonList.length > 0) {
				for (let i = 0; i < accordionButtonList.length; i++) {
					this.selectItemAccordion(accordionButtonList[i], 'init')
				}
			}
		},

		makeSelectBox() {
			const $select = this.$template.querySelector('#usage-select')
			if (!$select) return
			if (!this.isSelectBox) {
				$select.style.display = 'none'
				return
			}
			$select.innerHTML = ''
			const $selected = document.createElement('div')
			$selected.className = 'usage-selected'
			$selected.setAttribute('data-type', 'usage-selected')
			const $dropDown = document.createElement('div')
			$dropDown.className = 'usage-select-dropdown'
			const $dropDownList = document.createElement('ul')
			$dropDownList.className = 'usage-select-list'
			const currentSelected = this.currentSelected

			$selected.innerText = currentSelected
			Object.keys(this.selectData).forEach((key) => {
				const $li = document.createElement('li')
				$li.className = key === currentSelected ? 'usage-select-item selected' : 'usage-select-item'
				$li.setAttribute('data-type', 'usage-select-item')
				$li.innerText = key
				$dropDownList.appendChild($li)
			})
			$dropDown.appendChild($dropDownList)
			$select.appendChild($selected)
			$select.appendChild($dropDown)

			const currentTabList = this.selectData[currentSelected]
			if (currentTabList.length === 1 && currentTabList[0].carDetailUsage2 === null) {
				return
			}
			this.makeTab(currentTabList)
		},

		makeTab(dataList) {
			const $tab = this.$template.querySelector('#engine-list')
			if (!$tab) return
			$tab.innerHTML = ''
			const currentUrl = this.currentUrl

			dataList.forEach(({ carDetailUsage2, carDetailHtmlUrl }, index) => {
				const $li = document.createElement('li')
				const $button = document.createElement('button')
				$button.className = carDetailHtmlUrl === currentUrl ? 'active' : ''
				$button.innerText = carDetailUsage2
				$button.setAttribute('data-url', carDetailHtmlUrl)
				$button.setAttribute('data-type', 'engine-tab')
				$li.appendChild($button)
				$tab.appendChild($li)
			})
		},

		onTemplateClick(e) {
			// selectbox
			if (e.target.getAttribute('data-type') === 'usage-selected') {
				this.onToggleSelect()
				return
			}
			// selectbox item
			if (e.target.getAttribute('data-type') === 'usage-select-item') {
				this.onSelectClick(e)
				return
			}
			// 선택옵션 accordion
			if (e.target.nodeName === 'BUTTON' && e.target.className === 'list-title') {
				this.onSelectItemAccordion(e)
				return
			}
			// Spec Item Popup
			if (e.target.tagName === 'SPAN' && (e.target.className === 'spec_opts' || e.target.className === 'spec_opts strong')) {
				this.onClickSpecName(e.target.textContent)
			}

			if (this.isSelectOpen) {
				this.onToggleSelect()
			}
		},

		onTemplateKeydown(e) {
			if (e.key === 'Enter') {
				e.preventDefault()
				if (e.target.tagName === 'SPAN' && (e.target.className === 'spec_opts' || e.target.className === 'spec_opts strong')) {
					this.onClickSpecName(e.target.textContent)
				} else if (e.target.nodeName === 'BUTTON' && e.target.className === 'list-title') {
					this.onSelectItemAccordion(e)
				}
			}
		},

		onToggleSelect() {
			const $selectDropDown = this.$template.querySelector('.usage-select-dropdown')
			if (this.isSelectOpen) {
				$selectDropDown.classList.remove('open')
			} else {
				$selectDropDown.classList.add('open')
			}
			this.isSelectOpen = !this.isSelectOpen
		},

		onSelectClick(e) {
			if (e.target.nodeName !== 'LI') {
				return
			}
			this.currentSelected = e.target.innerText
			const currentTabList = this.selectData[this.currentSelected]
			const url = currentTabList[0].carDetailHtmlUrl
			this.currentUrl = url
			if (currentTabList.length > 1 || currentTabList[0].carDetailUsage2 !== null) {
				this.makeTab(currentTabList)
			}
			this.onToggleSelect()
		},
		onBasicItemAccordion(e) {
			const id = e.target.id.split('check-')[1]
			if (!id) {
				return
			}
			const $currentTR = this.$template.querySelector(`tr[data-trim=${id}]`)
			const $defaultContent = $currentTR.querySelector('.table-list-contents:not(.basic)')
			const $basicContent = $currentTR.querySelector('.table-list-contents.basic')
			if (e.target.checked) {
				$defaultContent.style.display = 'none'
				$basicContent.style.display = 'block'
			} else {
				$defaultContent.style.display = 'block'
				$basicContent.style.display = 'none'
			}
		},

		onSelectItemAccordion(e) {
			this.selectItemAccordion(e.target, 'click')
		},

		selectItemAccordion(button, state) {
			const $item = button.parentNode
			if ($item.classList.contains('active')) {
				button.setAttribute('title', '열림')
				if (state !== 'init') {
					$item.classList.remove('active')
					button.setAttribute('title', '담힘')
				}
			} else {
				button.setAttribute('title', '담힘')
				if (state !== 'init') {
					$item.classList.add('active')
					button.setAttribute('title', '열림')
				}
			}
		},

		async onClickSpecName(specName) {
			this.resultData.repnCarCode = 'AX01'
			this.resultData.specName = specName
			this.popVisible = true
		},

		priceAccordion(e) {
			let myListBox = e.target.closest('.list-item')
			if (myListBox.classList.contains('active')) {
				myListBox.classList.remove('active')
			} else {
				myListBox.classList.add('active')
			}
		},
		allCheckView(e) {
			let parent = e.target.closest('td')
			let box = parent.querySelectorAll('.table-list-contents')
			if (e.target.checked) {
				box.forEach((ebox) => {
					if (ebox.classList.contains('basic')) {
						ebox.style.display = 'none'
					} else {
						ebox.style.display = 'block'
					}
				})
			} else {
				box.forEach((ebox) => {
					if (ebox.classList.contains('basic')) {
						ebox.style.display = 'block'
					} else {
						ebox.style.display = 'none'
					}
				})
			}
		},
		fileDownload(fileNm) {
			const url = `${this.CONT_PATH}/wcontents/repn-car/catalog/AX01/${fileNm}`

			window.open(url)
		},
		goManualDownloadPage() {
			window.open('https://www.mobis-as.com/multi_prod_manual.do')
		}
	}
}
</script>
