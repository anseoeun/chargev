<template>
	<div class="content vehicles spec">
		<!-- 디자인 검수 후 개선 작업 : topBreadcrumb추가 -->
		<v-pageheader page-title="제원" page-infotext="캐스퍼의 제원을 확인해 보세요." :top-breadcrumb="topBreadcrumb" />

		<div class="spec-content">
			<client-only>
				<v-tab class="tab-default line center-st sky" :data="tabList" :contents="true" :value="tabStatus">
					<template slot="contents">
						<div data-id="tab1">
							<div class="video-area">
								<video id="specVideo">
									<source :src="`${CONT_PATH}/wcontents/video/spec/spec_guide.mp4`" type="video/mp4" />
								</video>
								<button v-if="stopped" type="button" class="btn-play" @click="goPlay()"><span class="offscreen">Play</span></button>
								<button v-else type="button" class="btn-pause" @click="goPause()"><span class="offscreen">Pause</span></button>
							</div>

							<section class="section dimension">
								<div class="title">
									<h1>Dimension</h1>
									<!-- 2021.09.16 텍스트 수정 -->
									<p class="sub-text t-gray">(단위: mm, 윤거 수치는 17인치 휠 기준, 윤거 수치의 ()는 15인치 휠 기준, 전고의 ()은 루프랙 장착 시 기준)</p>
								</div>
								<div class="cont">
									<div class="car-dimension">
										<v-img :src="require('~/assets/images/vehicles/img-car-spec.png')" alt="캐스퍼 치수" />
									</div>
									<ul class="dimension-list">
										<li class="width">
											<div>
												<span class="bold">전폭</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">사이드미러를 제외한 자동차의 좌우 폭의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<p>1,595mm</p>
											</div>
											<p class="deco">1,595mm</p>
										</li>
										<li class="length">
											<div>
												<span class="bold">전장</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">차의 중심선을 기준으로 앞부터 뒤까지의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<p>3,595mm</p>
											</div>
											<p class="deco">3,595mm</p>
										</li>
										<li class="height">
											<div>
												<span class="bold">전고</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">타이어의 접지면과 지붕의 가장 높은 부분 사이의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<!-- 2021.09.16 텍스트 수정 -->
												<p>1,575 (1,605)mm</p>
											</div>
											<!-- 2021.09.16 텍스트 수정 -->
											<p class="deco">
												1,575
												<br />
												(1,605)mm
											</p>
										</li>
										<li class="distance">
											<div>
												<!-- 2021.09.16 띄어쓰기 수정 -->
												<span class="bold">축간 거리</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">앞바퀴 중심과 뒷바퀴 중심간의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<p>2,400mm</p>
											</div>
											<p class="deco">2,400mm</p>
										</li>
										<li class="front-wheels">
											<div>
												<span class="bold">윤거(전)</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">앞바퀴간의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<!-- 2021.09.16 텍스트 수정 -->
												<p>1,398 (15")mm</p>
												<p>1,386 (17")mm</p>
											</div>
											<!-- 2021.09.16 텍스트 수정 -->
											<p class="deco">1,386 (1,398)mm</p>
										</li>
										<li class="rear-wheels">
											<div>
												<span class="bold">윤거(후)</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">뒷바퀴간의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<!-- 2021.09.16 텍스트 수정 -->
												<p>1,409 (15")mm</p>
												<p>1,398 (17")mm</p>
											</div>
											<!-- 2021.09.16 텍스트 수정 -->
											<p class="deco">1,398 (1,409)mm</p>
										</li>
									</ul>
								</div>
							</section>

							<section class="section spec">
								<h1 class="title">Specifications</h1>
								<div class="cont info-box">
									<div class="line-box">
										<div class="car-img">
											<v-img :src="require('~/assets/images/vehicles/img-spec1.jpg')" alt="스마트스트림 가솔린 1.0" />
										</div>
										<!-- 2021.09.16 텍스트 수정 -->
										<div class="info-text">
											<div class="name"><strong class="ebold">스마트스트림 가솔린 1.0</strong></div>
											<ul>
												<li>
													<span>배기량</span>
													998cc
												</li>
												<li>
													<span>최고출력</span>
													76PS/6,200rpm
												</li>
												<!-- 2021.09.23 텍스트 수정 -->
												<li>
													<span>최대토크</span>
													9.7kgf·m/3,750rpm
												</li>
												<li>
													<span>연료탱크용량</span>
													35ℓ
												</li>
											</ul>
										</div>
									</div>
									<div class="line-box">
										<div class="car-img">
											<v-img :src="require('~/assets/images/vehicles/img-spec2.jpg')" alt="카파 1.0 터보" />
										</div>
										<!-- 2021.09.16 텍스트 수정 -->
										<div class="info-text">
											<div class="name">
												<strong class="ebold">카파 1.0 터보</strong>
												<p>선택 품목 캐스퍼 액티브I, 캐스퍼 액티브II 추가 시</p>
											</div>
											<ul>
												<li>
													<span>배기량</span>
													998cc
												</li>
												<li>
													<span>최고출력</span>
													100PS/4,500~6,000rpm
												</li>
												<li>
													<span>최대토크</span>
													17.5kgf·m/1,500~4,000rpm
												</li>
												<li>
													<span>연료탱크용량</span>
													35ℓ
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>

							<section class="section grade bg-gray">
								<h1 class="title">정부 공인 표준연비 및 등급</h1>
								<div class="cont">
									<div class="table-area">
										<!-- 2021.09.16 수정 -->
										<table class="noline-in">
											<colgroup>
												<col width="" />
												<col width="" />
												<col width="" />
												<col width="" />
												<col width="" />
											</colgroup>
											<thead>
												<tr>
													<th scope="row">구분</th>
													<th scope="row" colspan="2">가솔린 1.0</th>
													<th scope="row" colspan="2">가솔린 1.0 터보</th>
												</tr>
												<tr>
													<th scope="row">타이어</th>
													<th scope="row">15” 타이어</th>
													<th scope="row">17” 타이어</th>
													<th scope="row">15” 타이어</th>
													<th scope="row">17” 타이어</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="col">
														복합연비
														<span>(km/ℓ)</span>
													</th>
													<td>14.3</td>
													<td>13.8</td>
													<td>12.8</td>
													<td>12.3</td>
												</tr>
												<tr>
													<th scope="col">
														도심연비
														<span>(km/ℓ)</span>
													</th>
													<td>13.4</td>
													<td>13.0</td>
													<td>11.3</td>
													<!-- 2021.09.23 텍스트 수정 -->
													<td>11.0</td>
												</tr>
												<tr>
													<th scope="col">
														고속도로연비
														<span>(km/ℓ)</span>
													</th>
													<td>15.5</td>
													<td>14.8</td>
													<td>15.2</td>
													<!-- 2021.09.23 텍스트 수정 -->
													<td>14.2</td>
												</tr>
												<tr>
													<th scope="col">
														CO2 배출량
														<span>(g/km)</span>
													</th>
													<td>115</td>
													<td>119</td>
													<td>130</td>
													<!-- 2021.09.23 텍스트 수정 -->
													<td>136</td>
												</tr>
												<tr>
													<th scope="col">
														배기량
														<span>(cc)</span>
													</th>
													<td>998</td>
													<td>998</td>
													<td>998</td>
													<td>998</td>
												</tr>
												<tr>
													<th scope="col">
														공차중량
														<span>(kg)</span>
													</th>
													<td>985</td>
													<td>1,020</td>
													<td>1,030</td>
													<td>1,060</td>
												</tr>
											</tbody>
										</table>
									</div>
									<!-- 2021.09.16 텍스트 수정 -->
									<ul class="bullet-list">
										<li>효율적 사용방법 : 정속주행을 합시다.</li>
										<li>연비는 표준모드에 의한 연비로서 도로상태, 운전방법, 차량적재, 정비상태 및 외기 온도에 따라 실주행 연비와 차이가 있습니다.</li>
										<li>쇼룸의 사진에는 선택사양이 적용된 경우가 있으므로 실제 구입차량과는 다른 점이 있을 수도 있습니다.</li>
										<li>쇼룸에 표시된 사양, 컬러 및 제원은 차의 외관 및 성능 개선을 위해 변경될 수 있습니다.</li>
										<li>
											상기 엔진성능은 NET수치임. “NET수치”란 국토교통부에서 97년부터 적용을 요구한 법규사항이며 배기가스의 저항을 감안한 신측정법으로 기존의
											GROSS 출력수치와 대비할 때 약간의 수치 저하가 발생할 수 있습니다.
										</li>
										<li>쇼룸의 차량 컬러는 이미지화된 것이므로, 실제 차량의 컬러와는 다소 차이가 있습니다.</li>

										<!-- 2021.09.23 텍스트 삭제, 추가 -->
										<!-- <li>현대자동차는 지점/대리점의 카마스터를 통해서만 판매하며, 전국 어느 곳에서나 같은 제품 같은 가격으로 바른 거래를 실천하고 있습니다.</li> -->
										<li>현대자동차는 전국 어느 곳에서나 같은 제품 같은 가격으로 바른 거래를 실천하고 있습니다.</li>
										<li>품질이나 성능이 부적합한 오일 및 연료를 사용할 경우에는 차량에 손상을 유발할 수 있습니다.</li>
										<li>쇼룸에 수록된 신기술 및 신사양에 대한 자세한 내용은 취급설명서 다운로드를 참조하시기 바랍니다.</li>
									</ul>
								</div>
							</section>

							<section class="section tire">
								<h1 class="title">타이어 효율 등급</h1>
								<!-- 2021.09.16 수정 -->
								<div class="cont info-box">
									<div class="line-box">
										<strong class="ebold">HANKOOK</strong>
										<ul>
											<li class="bold">185/65 R15</li>
											<li>
												회전 저항(RRC)
												<span>
													<strong class="bold">2</strong>
													등급
												</span>
											</li>
											<li>
												젖은 노면 제동력(G)
												<span>
													<strong class="bold">3</strong>
													등급
												</span>
											</li>
											<li>
												타이어 소음도 등급
												<span><strong class="bold">A</strong></span>
											</li>
										</ul>
										<ul>
											<li class="bold"><em>205/45 R17</em></li>
											<li>
												회전 저항(RRC)
												<span>
													<strong class="bold">2</strong>
													등급
												</span>
											</li>
											<li>
												젖은 노면 제동력(G)
												<span>
													<strong class="bold">3</strong>
													등급
												</span>
											</li>
											<li>
												타이어 소음도 등급
												<span><strong class="bold">AA</strong></span>
											</li>
										</ul>
									</div>
									<div class="line-box">
										<strong class="ebold">KUMHO</strong>
										<ul>
											<li class="bold"><em>185/65 R15</em></li>
											<li>
												회전 저항(RRC)
												<span>
													<strong class="bold">2</strong>
													등급
												</span>
											</li>
											<li>
												젖은 노면 제동력(G)
												<span>
													<strong class="bold">3</strong>
													등급
												</span>
											</li>
											<li>
												타이어 소음도 등급
												<span><strong class="bold">A</strong></span>
											</li>
										</ul>
									</div>
									<div class="line-box">
										<strong class="ebold">NEXEN</strong>
										<ul>
											<li class="bold"><em>205/45 R17</em></li>
											<li>
												회전 저항(RRC)
												<span>
													<strong class="bold">2</strong>
													등급
												</span>
											</li>
											<li>
												젖은 노면 제동력(G)
												<span>
													<strong class="bold">3</strong>
													등급
												</span>
											</li>
											<li>
												타이어 소음도 등급
												<span><strong class="bold">A</strong></span>
											</li>
										</ul>
									</div>
								</div>
								<!-- 2021.09.16 텍스트 수정 -->
								<ul class="bullet-list">
									<li>회전 저항(RRC) : 타이어에 걸리는 하중에 대한 회전저항의 비율 (1~5등급까지 있으며 1등급에 가까울수록 소비 효율이 높아집니다.)</li>
									<li>
										젖은 노면 제동력 (G) : 기준 타이어 대비 시험 대상 타이어의 젖은 노면 제동성능 비율 (1~5등급까지 있으며 1등급에 가까울수록 젖은 노면에서의
										제동력이 좋습니다.)
									</li>
									<li>타이어 소음도 등급: 타이어 소음 허용기준 대비 해당 타이어의 소음 정도 (AA,A등급이 있으며 AA등급이 A등급 대비 소음도가 좋습니다.)</li>
									<li>타이어 사이즈가 동일하더라도 효율등급이 다를 수 있습니다. 또한 일부 정보가 사전 통보 없이 변경될 수 있습니다.</li>
								</ul>
							</section>
						</div>
						<div data-id="tab2">
							<section class="section dimension">
								<div class="title">
									<h1>Dimension</h1>
									<p class="sub-text t-gray">&nbsp;</p>
								</div>
								<div class="cont">
									<div class="car-dimension van">
										<v-img :src="require('~/assets/images/vehicles/img-car-spec-van.png')" alt="캐스퍼 VAN 치수" />
									</div>
									<ul class="dimension-list">
										<li class="width">
											<div>
												<span class="bold">전폭</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">사이드미러를 제외한 자동차의 좌우 폭의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<p>1,595mm</p>
											</div>
											<p class="deco">1,595mm</p>
										</li>
										<li class="length">
											<div>
												<span class="bold">전장</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">차의 중심선을 기준으로 앞부터 뒤까지의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<p>3,595mm</p>
											</div>
											<p class="deco">3,595mm</p>
										</li>
										<li class="height">
											<div>
												<span class="bold">전고</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">타이어의 접지면과 지붕의 가장 높은 부분 사이의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<p>1,575mm</p>
											</div>
											<p class="deco">1,575mm</p>
										</li>
										<li class="distance">
											<div>
												<span class="bold">축간 거리</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">앞바퀴 중심과 뒷바퀴 중심간의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<p>2,400mm</p>
											</div>
											<p class="deco">2,400mm</p>
										</li>
										<li class="front-wheels">
											<div>
												<span class="bold">윤거(전)</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">앞바퀴간의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<p>1,398mm</p>
											</div>
											<p class="deco">1,398mm</p>
										</li>
										<li class="rear-wheels">
											<div>
												<span class="bold">윤거(후)</span>
												<v-popover trigger="hover" placement="bottom-start">
													<p class="tooltip-txt">뒷바퀴간의 거리</p>
													<v-btn slot="reference"><i class="icon-help"></i></v-btn>
												</v-popover>
												<p>1,409mm</p>
											</div>
											<p class="deco">1,409mm</p>
										</li>
									</ul>
								</div>
							</section>

							<section class="section spec">
								<h1 class="title">Specifications</h1>
								<div class="cont info-box">
									<div class="line-box">
										<div class="car-img">
											<v-img :src="require('~/assets/images/vehicles/img-spec1.jpg')" alt="스마트스트림 가솔린 1.0" />
										</div>
										<div class="info-text">
											<div class="name"><strong class="ebold">스마트스트림 가솔린 1.0</strong></div>
											<ul>
												<li>
													<span>배기량</span>
													998cc
												</li>
												<li>
													<span>최고출력</span>
													76PS/6,200rpm
												</li>
												<li>
													<span>최대토크</span>
													9.7kgf·m/3,750rpm
												</li>
												<li>
													<span>연료탱크용량</span>
													35ℓ
												</li>
											</ul>
										</div>
									</div>
									<div class="line-box">
										<div class="car-img">
											<v-img :src="require('~/assets/images/vehicles/img-spec2.jpg')" alt="카파 1.0 터보" />
										</div>
										<div class="info-text">
											<div class="name">
												<strong class="ebold">카파 1.0 터보</strong>
												<p>선택품목 캐스퍼 액티브I 추가 시</p>
											</div>
											<ul>
												<li>
													<span>배기량</span>
													998cc
												</li>
												<li>
													<span>최고출력</span>
													100PS/4,500~6,000rpm
												</li>
												<li>
													<span>최대토크</span>
													17.5kgf·m/1,500~4,000rpm
												</li>
												<li>
													<span>연료탱크용량</span>
													35ℓ
												</li>
											</ul>
										</div>
									</div>
								</div>
							</section>

							<section class="section grade bg-gray">
								<h1 class="title">정부 공인 표준연비 및 등급</h1>
								<div class="cont">
									<div class="table-area">
										<table class="noline-in">
											<colgroup>
												<col width="" />
												<col width="" />
												<col width="" />
											</colgroup>
											<thead>
												<tr>
													<th scope="row">구분</th>
													<th scope="row">가솔린 1.0</th>
													<th scope="row">가솔린 1.0 터보</th>
												</tr>
												<tr>
													<th scope="row">타이어</th>
													<th scope="row">15” 타이어</th>
													<th scope="row">15” 타이어</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="col">
														복합연비
														<span>(km/ℓ)</span>
													</th>
													<td>14.3</td>
													<td>12.8</td>
												</tr>
												<tr>
													<th scope="col">
														도심연비
														<span>(km/ℓ)</span>
													</th>
													<td>13.4</td>
													<td>11.3</td>
												</tr>
												<tr>
													<th scope="col">
														고속도로연비
														<span>(km/ℓ)</span>
													</th>
													<td>15.5</td>
													<td>15.2</td>
												</tr>
												<tr>
													<th scope="col">
														CO2 배출량
														<span>(g/km)</span>
													</th>
													<td>115</td>
													<td>130</td>
												</tr>
												<tr>
													<th scope="col">
														배기량
														<span>(cc)</span>
													</th>
													<td>998</td>
													<td>998</td>
												</tr>
												<tr>
													<th scope="col">
														공차중량
														<span>(kg)</span>
													</th>
													<td>985</td>
													<td>1,030</td>
												</tr>
											</tbody>
										</table>
									</div>
									<ul class="bullet-list">
										<li>효율적 사용방법 : 정속주행을 합시다.</li>
										<li>연비는 표준모드에 의한 연비로서 도로상태, 운전방법, 차량적재, 정비상태 및 외기 온도에 따라 실주행 연비와 차이가 있습니다.</li>
										<li>쇼룸의 사진에는 선택사양이 적용된 경우가 있으므로 실제 구입차량과는 다른 점이 있을 수도 있습니다.</li>
										<li>쇼룸에 표시된 사양, 컬러 및 제원은 차의 외관 및 성능 개선을 위해 변경될 수 있습니다.</li>
										<li>
											상기 엔진성능은 NET수치임. “NET수치”란 국토교통부에서 97년부터 적용을 요구한 법규사항이며 배기가스의 저항을 감안한 신측정법으로 기존의
											GROSS 출력수치와 대비할 때 약간의 수치 저하가 발생할 수 있습니다.
										</li>
										<li>쇼룸의 차량 컬러는 이미지화된 것이므로, 실제 차량의 컬러와는 다소 차이가 있습니다.</li>
										<li>현대자동차는 전국 어느 곳에서나 같은 제품 같은 가격으로 바른 거래를 실천하고 있습니다.</li>
										<li>품질이나 성능이 부적합한 오일 및 연료를 사용할 경우에는 차량에 손상을 유발할 수 있습니다.</li>
										<li>쇼룸에 수록된 신기술 및 신사양에 대한 자세한 내용은 취급설명서 다운로드를 참조하시기 바랍니다.</li>
									</ul>
								</div>
							</section>

							<section class="section tire">
								<h1 class="title">타이어 효율 등급</h1>
								<div class="cont info-box type2">
									<div class="line-box">
										<strong class="ebold">HANKOOK</strong>
										<ul>
											<li class="bold">185/65 R15</li>
											<li>
												회전 저항(RRC)
												<span>
													<strong class="bold">2</strong>
													등급
												</span>
											</li>
											<li>
												젖은 노면 제동력(G)
												<span>
													<strong class="bold">3</strong>
													등급
												</span>
											</li>
											<li>
												타이어 소음도 등급
												<span><strong class="bold">A</strong></span>
											</li>
										</ul>
									</div>
									<div class="line-box">
										<strong class="ebold">KUMHO</strong>
										<ul>
											<li class="bold"><em>185/65 R15</em></li>
											<li>
												회전 저항(RRC)
												<span>
													<strong class="bold">2</strong>
													등급
												</span>
											</li>
											<li>
												젖은 노면 제동력(G)
												<span>
													<strong class="bold">3</strong>
													등급
												</span>
											</li>
											<li>
												타이어 소음도 등급
												<span><strong class="bold">A</strong></span>
											</li>
										</ul>
									</div>
								</div>
								<ul class="bullet-list">
									<li>회전 저항(RRC) : 타이어에 걸리는 하중에 대한 회전저항의 비율 (1~5등급까지 있으며 1등급에 가까울수록 소비 효율이 높아집니다.)</li>
									<li>
										젖은 노면 제동력 (G) : 기준 타이어 대비 시험 대상 타이어의 젖은 노면 제동성능 비율 (1~5등급까지 있으며 1등급에 가까울수록 젖은 노면에서의
										제동력이 좋습니다.)
									</li>
									<li>타이어 소음도 등급: 타이어 소음 허용기준 대비 해당 타이어의 소음 정도 (AA,A등급이 있으며 AA등급이 A등급 대비 소음도가 좋습니다.)</li>
									<li>타이어 사이즈가 동일하더라도 효율등급이 다를 수 있습니다. 또한 일부 정보가 사전 통보 없이 변경될 수 있습니다.</li>
								</ul>
							</section>
						</div>
					</template>
				</v-tab>
			</client-only>
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
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 제원',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대캐스퍼 제원, 캐스퍼 제원, 현대차 캐스퍼 스펙, 경형 SUV 장점' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content: '현대 경형 SUV 캐스퍼의 차량 등급별 연비, 성능, 장점, 배기량 등 상세 제원 및 스펙을 온라인에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/spec' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 제원' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '현대 경형 SUV 캐스퍼의 차량 등급별 연비, 성능, 장점, 배기량 등 상세 제원 및 스펙을 온라인에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 제원' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '현대 경형 SUV 캐스퍼의 차량 등급별 연비, 성능, 장점, 배기량 등 상세 제원 및 스펙을 온라인에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/spec' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/spec' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/spec' }
			]
		}
	},
	components: {},
	data() {
		return {
			// 디자인 검수 후 개선 작업 : topBreadcrumb추가
			topBreadcrumb: [
				{ linkName: '소개', link: '/' },
				{ linkName: '제원', link: '/' }
			],
			tabStatus: 'tab1',
			tabList: [
				{ value: 'tab1', label: '캐스퍼' },
				{ value: 'tab2', label: '캐스퍼 VAN' }
			],
			stopped: true
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
						pageName: '차량:제원',
						siteSection: '차량',
						siteSubsection: '제원'
					}
				}
			}

			window._spaData(obj)
		})
	},
	methods: {
		goPlay() {
			let sv = document.getElementById('specVideo')
			sv.play()
			this.stopped = false
		},
		goPause() {
			let sv = document.getElementById('specVideo')
			sv.pause()
			this.stopped = true
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
