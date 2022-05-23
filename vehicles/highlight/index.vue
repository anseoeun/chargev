<template>
	<div class="highlight-page">
		<!-- intro -->
		<section class="intro">
			<video id="intro" autoplay muted style="width: 100%;">
				<source :src="`${CONT_PATH}/wcontents/video/highlight/PC/highlight_intro.mp4`" type="video/mp4" />
			</video>
			<!-- <button type="button" class="pause"><span class="offscreen">Pause</span></button>
      <button type="button" class="play"><span class="offscreen">Play</span></button> -->
		</section>
		<!-- suv -->
		<div class="highlight-title">
			<strong>
				강인하고
				<br />
				아이코닉한 SUV
			</strong>
		</div>
		<section class="strong-suv">
			<div class="info-box-styling">
				<strong>
					젊고 역동적인
					<br />
					감성의
					<br />
					SUV 디자인
				</strong>
				<p>
					당당하고 견고한 외관
					<br />
					디자인으로 캐스퍼만의 존재감을 드러냅니다.
				</p>
			</div>
			<img class="suv-img" :src="suv[0].src" :alt="suv[0].alt" />
			<div class="info-box-design">
				<strong>
					미래 지향적인
					<br />
					파라메트릭 패턴
				</strong>
				<p>
					파라메트릭 패턴이 적용된 라디에이터 그릴로 미래 지향적이고
					<br />
					개성있는 스타일을 연출합니다.
				</p>
			</div>
		</section>
		<!-- lighting -->
		<section class="lighting">
			<div class="info-box-lighting">
				<strong>
					독특한
					<br />
					라이팅 세레모니
				</strong>
				<!-- 2021.09.28 텍스트 수정 -->
				<p>
					분리형의 독특한 원형 헤드램프로
					<br />
					캐스퍼만의 유니크함을
					<br />
					느껴보세요.
				</p>
			</div>
			<img id="lightingImg" :src="lighting[0].src" :alt="lighting[0].alt" />
		</section>
		<!-- mirror -->
		<section class="mirror">
			<div class="info-box-mirror">
				<strong>
					아웃사이드 미러는
					<br />
					락폴딩으로 손쉽게
				</strong>
				<p>
					간편한 도어락 조작으로 아웃사이드
					<br />
					미러까지 손쉽게 접고 펼칠 수 있습니다.
					<br />
					차량 긁힘 걱정 없이 편리하게 사용해
					<br />
					보세요.
				</p>
			</div>
			<img id="mirrorImg" :src="mirror[0].src" :alt="mirror[0].alt" />
		</section>
		<!-- wheel -->
		<section class="wheel">
			<div class="info-box-in-start">
				<strong>
					역동성과
					<br />
					볼륨감을 더한
				</strong>
				<p>
					캐스퍼의 옆모습은 단단하고 강인한
					<br />
					분위기를 돋보이게 해줍니다.
				</p>
			</div>
			<div class="info-box-in-end" style="display: none;">
				<strong>
					도로 위의
					<br />
					당당함
				</strong>
				<p>
					4가지로 디자인된 휠로 더 다양하게,
					<br />
					위풍당당한 캐스퍼의 모습을 만나보세요.
				</p>
			</div>
			<div class="wheel-list" style="display: none;">
				<ul>
					<!-- 09-28 wheel 순서변경 -->
					<li>17인치 다크 그레이 알로이 휠</li>
					<li>17인치 전면 가공 알로이 휠</li>
					<li>17인치 알로이 휠</li>
					<li>15인치 스타일드 스틸 휠</li>
				</ul>
			</div>
			<img class="wheel-side" :src="wheel[0].src" :alt="wheel[0].alt" />
			<img class="wheel-a" :src="wheel[1].src" :alt="wheel[1].alt" />
			<img class="wheel-b" :src="wheel[2].src" :alt="wheel[2].alt" />
			<img class="wheel-c" :src="wheel[3].src" :alt="wheel[3].alt" />
			<img class="wheel-d" :src="wheel[4].src" :alt="wheel[4].alt" />
		</section>
		<!-- rear -->
		<section class="rear">
			<div class="info-box">
				<strong>
					눈길을 사로잡는
					<br />
					리어콤비램프
				</strong>
				<p>
					전면부와 같이 파라메트릭 패턴의 리어콤비램프로 야간에도
					<br />
					확실한 존재감을 보여줍니다.
				</p>
			</div>
			<img id="rearImg" :src="rear[0].src" :alt="rear[0].alt" />
		</section>
		<!-- output -->
		<section class="output">
			<div class="ps-casper">
				<!-- <em>6,200 <span>rpm</span></em> -->
				<strong>{{ casperPs }}</strong>
				<p>
					<span>최고출력</span>
					<span>ps/6,200rpm</span>
				</p>
			</div>
			<div class="ps-casper-active">
				<!-- <em>4,500 ~ 6,000 <span>rpm</span></em> -->
				<strong>{{ casperActivePs }}</strong>
				<p>
					<span>최고출력</span>
					<span>ps/4,500 ~ 6,000rpm</span>
				</p>
			</div>
			<img id="outputImg" :src="output[0].src" :alt="output[0].alt" />
			<div class="info-box-casper">
				<strong>CASPER</strong>
				<!-- 2021.09.28 ver.2 텍스트 수정 -->
				<p>
					스마트스트림 가솔린 1.0 엔진
					<br />
					최대 토크 9.7kgf·m/3,750rpm
					<br />
					복합 연비 14.3km/ℓ (15인치 휠 기준)
				</p>
			</div>
			<div class="info-box-casper-active">
				<strong>CASPER ACTIVE</strong>
				<!-- 2021.09.28 ver.2 텍스트 수정 -->
				<p>
					카파 1.0 터보 엔진
					<br />
					최대 토크 17.5kgf·m/1,500~4,000rpm
					<br />
					복합 연비 12.8km/ℓ (15인치 휠 기준)
				</p>
			</div>
		</section>
		<!-- color -->
		<div class="highlight-title">
			<strong>
				나를 표현하는
				<br />
				6 Colors
			</strong>
		</div>
		<section class="color">
			<div class="strong-group">
				<strong v-for="(item, index) in colorNames" :key="index" :class="colors[index]" style="display: none;">{{ item }}</strong>
			</div>
			<img class="color-intro" :src="color[0].src" :alt="color[0].alt" />
			<div class="color-group">
				<div v-for="(item, index) in colors" :key="index" :class="item" style="display: none;">
					<img :src="color[index + 1].src" :alt="color[index + 1].alt" />
				</div>
			</div>
			<ul class="cars-color-list" style="display: none;">
				<li v-for="(item, index) in colors" :key="index" :class="{ on: index === 3 }">
					<button type="button" :class="`btn-${item}`" @click="colorActions(index)">{{ item }}</button>
				</li>
			</ul>
		</section>
		<!-- interior light -->
		<div class="highlight-title">
			<strong>
				무엇이든 가능한
				<br />
				실내공간
			</strong>
		</div>
		<section class="interior-light">
			<img :src="interiorLight[0].src" :alt="interiorLight[0].alt" />
			<div class="info-box-light" style="display: none;">
				<strong>
					슬림하고 간결한
					<br />
					레이아웃
				</strong>
				<!-- 09-28 오타수정 -->
				<p>
					캐스퍼의 슬림하고 간결한 레이아웃의 운전 공간은
					<br />
					개방감을 한 층 높여줍니다.
				</p>
			</div>
		</section>
		<!-- interior dark -->
		<section class="interior-dark">
			<div class="info-box-dark" style="display: none;">
				<strong>밤에 더욱 빛나는</strong>
				<p>
					감성을 자극하는 은은한 실내 무드램프는 야간에 더욱 특별한
					<br />
					분위기를 더해줍니다.
				</p>
			</div>
			<img :src="interiorDark[0].src" :alt="interiorDark[0].alt" />
		</section>
		<!-- system -->
		<div class="system">
			<div class="info-box-device">
				<strong>
					동급 최대 규격,
					<br />
					첨단 인포테인먼트
					<br />
					시스템
				</strong>
				<p>
					8인치 내비게이션으로 더욱 편리한 운전
					<br />
					경험을 선사합니다.
				</p>
			</div>
			<img :src="navigation[0].src" :alt="navigation[0].alt" />
			<div class="carpay">
				<img :src="carpay[0].src" :alt="carpay[0].alt" />
				<div class="info-box-carpay-title">
					<strong>
						실물 카드가 없어도,
						<br />
						현대 카페이
					</strong>
				</div>
				<div class="info-box-carpay-content">
					<p>
						제휴 주유소와 주차장에서 자동으로
						<br />
						가격을 조회하고, 손쉽게 주유비와
						<br />
						주차요금을 결제할 수 있습니다.
					</p>
				</div>
				<div class="info-box-carpay-bluetooth">
					<strong>
						선곡 걱정 없이,
						<br />
						블루투스 멀티커넥션
					</strong>
					<p>
						블루투스 기기 2대를 동시에 연결할 수
						<br />
						있어 운전자와 동승자의 기기를 모두
						<br />
						등록하고 편리하게 음악 스트리밍 전환이
						<br />
						가능합니다.
					</p>
				</div>
			</div>
			<div class="interior-info-box">
				<strong>
					생동감 넘치는
					<br />
					인테리어 컬러
				</strong>
				<p>
					취향에 따라 다양한 시트와 포인트 컬러 조합을 선택하고
					<br />
					나만의 개성을 표현해보세요.
				</p>
			</div>
		</div>
		<!-- seat -->
		<section class="seat">
			<div class="seat-group">
				<!-- 09-29 -->
				<div
					v-for="(item, index) in seats"
					:key="index"
					:style="index === 0 ? 'display: block; width: 2560px; height: 1297px; margin-top: -648px; margin-left: -1280px;' : 'display: none;'"
				>
					<img :src="item.src" :alt="item.alt" />
				</div>
			</div>
			<ul class="space-list">
				<li v-for="(item, index) in seatList" :key="index" :class="{ on: index === 0 }">
					<button type="button" @click="seatActions(index)">
						{{ item.color }}
						<br />
						{{ item.txt }}
					</button>
				</li>
			</ul>
		</section>
		<!-- walk through -->
		<section class="walk-through">
			<div class="info-box">
				<strong>자유로운 공간 활용</strong>
				<p>
					운전석과 동승석 간 자유롭게 이동하고 전좌석 폴딩,
					<br />
					리클라이닝, 슬라이딩 기능을 상황에 맞게 사용할 수 있습니다.
				</p>
			</div>
			<div class="img-area">
				<img :src="walk[walkThisImg].src" :alt="walk[walkThisImg].alt" />
			</div>
			<ul class="walk-list">
				<li v-for="(item, index) in walkList" :key="index" :class="{ on: walkThisImg === index + 1 }">
					<button type="button" @click="walkThisImg = index + 1">{{ item }}</button>
				</li>
			</ul>
		</section>
		<!-- storage -->
		<section class="storage">
			<img id="storageImg" :src="storage[0].src" :alt="storage[0].alt" />
			<div class="info-box" style="opacity: 0;">
				<strong>
					넉넉한
					<br />
					수납 공간까지
				</strong>
				<p>
					전좌석 풀 폴딩 시트로 수납 공간을 더욱
					<br />
					넉넉하게 활용할 수 있습니다. 한계를
					<br />
					뛰어넘은 수납 공간을 경험해보세요.
				</p>
			</div>
		</section>
		<!-- movie -->
		<div class="highlight-title">
			<strong>
				원하는 곳 어디든
				<br />
				갈 수 있는
			</strong>
		</div>
		<div class="movie-info-box">
			<strong>
				2WD
				<br />
				험로주행모드
			</strong>
			<p>
				2WD 험로주행모드(스노우/샌드/머드)를 이용하면 눈길, 모래길 등 지형 조건에
				<br />
				최적화된 드라이빙을 즐길 수 있습니다.
			</p>
		</div>
		<section class="movie">
			<ul class="movie-tabs">
				<li v-for="(item, index) in movieList" :key="index" :class="{ on: index === 0 }">
					<button type="button" @click="movieActions(index)">{{ item }}</button>
				</li>
			</ul>
			<div class="movie-area">
				<ul class="movie-list">
					<li class="snow-area">
						<strong>Snow</strong>
						<video class="snow" style="width: 1200px;" muted>
							<source :src="`${CONT_PATH}/wcontents/video/highlight/PC/snow.mp4`" type="video/mp4" />
						</video>
						<button type="button" class="pause" style="display: initial;" @click="mStop('.snow', '.snow-area')"><span class="offscreen">Pause</span></button>
						<button type="button" class="play" style="display: none;" @click="mPlay('.snow', '.snow-area')"><span class="offscreen">Play</span></button>
					</li>
					<li class="mud-area">
						<strong>Mud</strong>
						<video class="mud" style="width: 1200px;" muted>
							<source :src="`${CONT_PATH}/wcontents/video/highlight/PC/mud.mp4`" type="video/mp4" />
						</video>
						<button type="button" class="pause" style="display: none;" @click="mStop('.mud', '.mud-area')"><span class="offscreen">Pause</span></button>
						<button type="button" class="play" style="display: initial;" @click="mPlay('.mud', '.mud-area')"><span class="offscreen">Play</span></button>
					</li>
					<li class="sand-area">
						<strong>Sand</strong>
						<video class="sand" style="width: 1200px;" muted>
							<source :src="`${CONT_PATH}/wcontents/video/highlight/PC/sand.mp4`" type="video/mp4" />
						</video>
						<button type="button" class="pause" style="display: none;" @click="mStop('.sand', '.sand-area')"><span class="offscreen">Pause</span></button>
						<button type="button" class="play" style="display: initial;" @click="mPlay('.sand', '.sand-area')"><span class="offscreen">Play</span></button>
					</li>
				</ul>
			</div>
		</section>
		<!-- drive -->
		<div class="driveing-area">
			<div class="highlight-title white">
				<strong>
					어떤 주행 상황에도
					<br />
					안전을 생각하는
				</strong>
			</div>
			<div class="movie-info-box white">
				<strong>안전 걱정 없이</strong>
				<p>
					운전자와 탑승자의 안전과 편의를 생각한
					<br />
					7에어백과 현대 스마트센스로 걱정 없이
					<br />
					드라이빙을 즐길 수 있어요.
				</p>
			</div>
		</div>
		<!-- airbag -->
		<section class="airbag">
			<div class="airbag-movie">
				<video class="air-bag" style="width: 1200px;" muted>
					<source :src="`${CONT_PATH}/wcontents/video/highlight/PC/airbag.mp4`" type="video/mp4" />
				</video>
				<button type="button" class="pause" style="display: none;" @click="mStop('.air-bag', '.airbag-movie')"><span class="offscreen">Pause</span></button>
				<button type="button" class="play" style="display: initial;" @click="mPlay('.air-bag', '.airbag-movie')"><span class="offscreen">Play</span></button>
			</div>
			<div class="btm-info-box">
				<!-- 2021.09.29 텍스트 수정 -->
				<p>동급 최초로 적용된 앞좌석 센터사이드 에어백은 운전석과 동승석 승객 간의 충돌로 인한 피해를 최소화합니다.</p>
			</div>
		</section>
		<!-- smart safe -->
		<section class="smart-safe">
			<div class="safe-navi">
				<ul>
					<li v-for="(item, index) in smartList" :key="index" :class="{ on: index === 0 }">
						<button type="button" @click="slideAction(index)" v-html="item"></button>
					</li>
				</ul>
				<button v-show="currentSafeIndex !== 0" type="button" class="safe-prev" @click="safePrev(currentSafeIndex)"><span class="offscreen">이전</span></button>
				<button v-show="currentSafeIndex !== 2" type="button" class="safe-next" @click="safeNext(currentSafeIndex)"><span class="offscreen">다음</span></button>
			</div>
			<div class="safe-movie">
				<ul>
					<li v-for="(item, index) in safeMovieList" :key="index" :class="item.liClassName">
						<video :class="item.className" style="width: 1200px;" muted>
							<source :src="`${CONT_PATH}${item.src}`" type="video/mp4" />
						</video>
						<button type="button" class="pause" style="display: none;" @click="mStop('.' + item.className, '.' + item.liClassName)">
							<span class="offscreen">Pause</span>
						</button>
						<button type="button" class="play" style="display: initial;" @click="mPlay('.' + item.className, '.' + item.liClassName)">
							<span class="offscreen">Play</span>
						</button>
					</li>
				</ul>
			</div>
			<p v-html="smartInfo[infoTxt]"></p>
		</section>
		<!-- gallery -->
		<div class="gallery">
			<strong>CASPER Gallery</strong>
			<div>
				<strong>Exterior</strong>
				<div class="gallery-group">
					<ul class="type1">
						<li class="big">
							<button type="button" @click="galleryAction(0)">
								<strong>프로젝션 헤드램프</strong>
								<div class="image"><img :src="gallery[0].src" :alt="gallery[0].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(1)">
								<strong>
									리어 스포일러
									<br />
									(액티브 플러스 적용)
								</strong>
								<div class="image"><img :src="gallery[1].src" :alt="gallery[1].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(2)">
								<strong>루프랙</strong>
								<div class="image"><img :src="gallery[2].src" :alt="gallery[3].alt"/></div>
							</button>
						</li>
					</ul>
					<ul class="type2">
						<li>
							<button type="button" @click="galleryAction(3)">
								<strong>
									라디에이터 그릴 &amp; 프론트 스키드 플레이트
									<br />
									(캐스퍼 액티브 적용)
								</strong>
								<div class="image"><img :src="gallery[3].src" :alt="gallery[3].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(4)">
								<strong>
									17인치 다크그레이 알로이 휠 &amp; 타이어
									<br />
									(액티브 플러스 적용)
								</strong>
								<div class="image"><img :src="gallery[4].src" :alt="gallery[4].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(5)">
								<strong>파라메트릭 패턴 LED 리어콤비램프</strong>
								<div class="image"><img :src="gallery[5].src" :alt="gallery[5].alt"/></div>
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<strong>Interior &amp; Space</strong>
				<div class="gallery-group">
					<ul class="type2">
						<li>
							<button type="button" @click="galleryAction(6)">
								<strong>운전석 통풍시트 / 앞좌석 열선시트</strong>
								<div class="image"><img :src="gallery[6].src" :alt="gallery[6].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(7)">
								<strong>운전석 시트 암레스트</strong>
								<div class="image"><img :src="gallery[7].src" :alt="gallery[7].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(8)">
								<strong>
									동승석 시트백 보드
									<br />
									(시트백 보드 트레이는 별도 구매 품목)
								</strong>
								<div class="image"><img :src="gallery[8].src" :alt="gallery[8].alt"/></div>
							</button>
						</li>
					</ul>
					<ul class="type1">
						<li>
							<button type="button" @click="galleryAction(9)">
								<strong>하운드투스 인테리어 (헤드라이닝)</strong>
								<div class="image"><img :src="gallery[9].src" :alt="gallery[9].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(10)">
								<strong>메탈페인트 인사이드 도어 핸들</strong>
								<div class="image"><img :src="gallery[10].src" :alt="gallery[10].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(11)">
								<strong>스티어링 휠</strong>
								<div class="image"><img :src="gallery[11].src" :alt="gallery[11].alt"/></div>
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<strong>Convenience</strong>
				<div class="gallery-group">
					<ul class="type1">
						<li>
							<button type="button" @click="galleryAction(12)">
								<strong>4.2인치 클러스터</strong>
								<div class="image"><img :src="gallery[12].src" :alt="gallery[12].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(13)">
								<strong>블루링크</strong>
								<div class="image"><img :src="gallery[13].src" :alt="gallery[13].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(14)">
								<strong>실내 무드램프 (퍼플) / USB 충전기 (1열 1개)</strong>
								<div class="image"><img :src="gallery[14].src" :alt="gallery[14].alt"/></div>
							</button>
						</li>
					</ul>
					<ul class="type2">
						<li>
							<button type="button" @click="galleryAction(15)">
								<strong>버튼 시동 &amp; 스마트 키</strong>
								<div class="image"><img :src="gallery[15].src" :alt="gallery[15].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(16)">
								<strong>
									8인치 내비게이션
									<br />
									(블루링크, 폰프로젝션, 현대 카페이)
								</strong>
								<div class="image"><img :src="gallery[16].src" :alt="gallery[16].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(17)">
								<strong>풀오토 에어컨</strong>
								<div class="image"><img :src="gallery[17].src" :alt="gallery[17].alt"/></div>
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<strong>H Genuine Accessories</strong>
				<div class="gallery-group">
					<ul class="type2">
						<li>
							<button type="button" @click="galleryAction(18)">
								<strong>
									공간활용의 기술
									<br />
									(루프 박스, 크로스 바)
								</strong>
								<div class="image"><img :src="gallery[18].src" :alt="gallery[18].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(19)">
								<strong>
									여행의 정석
									<br />
									(에어매트)
								</strong>
								<div class="image"><img :src="gallery[19].src" :alt="gallery[19].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(20)">
								<strong>
									공간활용의 기술
									<br />
									(루프 바스켓, 크로스 바)
								</strong>
								<div class="image"><img :src="gallery[20].src" :alt="gallery[20].alt"/></div>
							</button>
						</li>
					</ul>
					<ul class="type1">
						<li>
							<button type="button" @click="galleryAction(21)">
								<strong>
									여행의 정석
									<br />
									(루프 바스켓, 크로스 바, 캠핑 체어, 캠핑 트렁크)
								</strong>
								<div class="image"><img :src="gallery[21].src" :alt="gallery[21].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(22)">
								<strong>
									펫 프렌들리
									<br />
									(시트커버 쿠션 (1열))
								</strong>
								<div class="image"><img :src="gallery[22].src" :alt="gallery[22].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(23)">
								<strong>
									펫 프렌들리
									<br />
									(목줄, 리드줄(소형 중형))
								</strong>
								<div class="image"><img :src="gallery[23].src" :alt="gallery[23].alt"/></div>
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<strong>CASPER VAN Gallery</strong>
				<div class="gallery-group col">
					<ul class="type3">
						<li>
							<button type="button" @click="galleryAction(24)">
								<strong>
									VAN 스마트 : 아틀라스 화이트 외장
									<br />
									(캐스퍼 액티브Ⅰ옵션 미적용)
								</strong>
								<div class="image"><img :src="gallery[24].src" :alt="gallery[24].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(25)">
								<strong>
									VAN 스마트 : 아틀라스 화이트 외장
									<br />
									(캐스퍼 액티브Ⅰ옵션 미적용)
								</strong>
								<div class="image"><img :src="gallery[25].src" :alt="gallery[25].alt"/></div>
							</button>
						</li>
					</ul>
					<ul class="type3">
						<li>
							<button type="button" @click="galleryAction(26)">
								<strong>
									VAN 스마트 : 아틀라스 화이트 외장
									<br />
									(캐스퍼 액티브Ⅰ옵션 미적용)
								</strong>
								<div class="image"><img :src="gallery[26].src" :alt="gallery[26].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(27)">
								<strong>2열 윈도우 보호봉</strong>
								<div class="image"><img :src="gallery[27].src" :alt="gallery[27].alt"/></div>
							</button>
						</li>
						<li>
							<button type="button" @click="galleryAction(28)">
								<strong>테일게이트 윈도우 보호봉</strong>
								<div class="image"><img :src="gallery[28].src" :alt="gallery[28].alt"/></div>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="gallery-popup" style="display: none;">
			<div class="popup-cont">
				<div class="img-wrap">
					<img :src="gallery[gallIndex].src" :alt="gallery[gallIndex].alt" />
				</div>
				<button type="button" class="prev" @click="galleryPrev(gallIndex)"><span class="offscreen">이전</span></button>
				<button type="button" class="next" @click="galleryNext(gallIndex)"><span class="offscreen">다음</span></button>
				<button type="button" class="close" @click="galleryClose()"><span class="offscreen">닫기</span></button>
			</div>
		</div>
		<!-- notice & download -->
		<div class="btn-wrap">
			<ul style="text-align: center;">
				<li style="display: inline-block; vertical-align:top;">
					<v-btn class="btn md blue" style="width: 200px;" @click="fileDownload('AX_CASPER_catalog.pdf')">
						<i class="icon-download-white" style="margin-right: 5px;"></i>
						카탈로그 다운로드
					</v-btn>
				</li>
				<li style="display: inline-block; vertical-align:top; margin-left: 10px;">
					<v-btn class="btn md blue" style="width: 200px;" @click="fileDownload('AX_CASPER_price.pdf')">
						<i class="icon-download-white" style="margin-right: 5px;"></i>
						가격표 다운로드
					</v-btn>
				</li>
				<li style="display: inline-block; vertical-align:top; margin-left: 10px;">
					<v-btn class="btn md blue" style="width: 200px;" @click="fileDownload('AX_CASPER_manual.pdf')">
						<i class="icon-download-white" style="margin-right: 5px;"></i>
						취급설명서 다운로드
					</v-btn>
				</li>
				<li style="display: inline-block; vertical-align:top; margin-left: 10px;">
					<v-btn class="btn md blue link" style="width: 280px;" @click="goManualDownloadPage">인포테인먼트 시스템 매뉴얼 다운로드</v-btn>
				</li>
			</ul>
		</div>
		<div class="btm-noti" style="padding: 120px 0">
			<p class="bullet-star" style="text-align: center;">사이트 내 차량 이미지는 실제와 다를 수 있습니다.</p>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 캐스퍼',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대신차, 차박 가능한 SUV, 연비 좋은 SUV, 첫차 추천, 20대 자동차 추천' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content: '강인하고 아이코닉한 디자인의 현대자동차의 신차 CASPER! 20대 첫차로 추천하는 연비 좋고 차박 가능한 엔트리 SUV 캐스퍼를 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/highlight' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 캐스퍼' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '강인하고 아이코닉한 디자인의 현대자동차의 신차 CASPER! 20대 첫차로 추천하는 연비 좋고 차박 가능한 엔트리 SUV 캐스퍼를 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 캐스퍼' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '강인하고 아이코닉한 디자인의 현대자동차의 신차 CASPER! 20대 첫차로 추천하는 연비 좋고 차박 가능한 엔트리 SUV 캐스퍼를 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/highlight' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/highlight' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/highlight' }
			]
		}
	},
	data() {
		return {
			scrollLast: 0,
			time: 100,
			slowTime: 200,
			downGap: 0.2,
			upGap: 0.1,
			suvTxt: true,
			suvDown: true,
			suvUp: false,
			suv: [{ src: require('~/assets/images/highlight/exterior/casper.png'), alt: '' }],
			lightingTxt: true,
			lightingDown: true,
			lightingUp: false,
			lighting: [
				{ src: require('~/assets/images/highlight/exterior/lamp_01.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/lamp_02.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/lamp_03.png'), alt: '' }
			],
			mirrorTxt: true,
			mirrorDown: true,
			mirrorUp: false,
			mirror: [
				{ src: require('~/assets/images/highlight/exterior/mirror_01.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/mirror_02.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/mirror_03.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/mirror_04.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/mirror_05.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/mirror_06.jpg'), alt: '' }
			],
			wheelDown: true,
			wheelUp: false,
			wheelOffTop: 0,
			wheel: [
				{ src: require('~/assets/images/highlight/exterior/casper_side.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/wheel_01.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/wheel_02.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/wheel_03.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/wheel_04.png'), alt: '' }
			],
			rearDown: true,
			rearUp: false,
			rear: [
				{ src: require('~/assets/images/highlight/exterior/rear_01.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/rear_02.jpg'), alt: '' }
			],
			casperPs: 0,
			casperActivePs: 0,
			outputDown: true,
			output: [{ src: require('~/assets/images/highlight/exterior/output.png'), alt: '' }],
			colors: ['white', 'ivory', 'gray', 'khaki', 'orange', 'blue'],
			colorNames: ['아틀라스 화이트', '언블리치드 아이보리', '티탄 그레이 메탈릭', '톰보이 카키', '소울트로닉 오렌지 펄', '인텐스 블루 펄'],
			colorDown: true,
			colorOffTop: 0,
			color: [
				{ src: require('~/assets/images/highlight/exterior/color_intro.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/color_white.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/color_ivory.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/color_gray.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/color_khaki.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/color_orange.png'), alt: '' },
				{ src: require('~/assets/images/highlight/exterior/color_blue.png'), alt: '' }
			],
			lightDown: true,
			interiorLight: [{ src: require('~/assets/images/highlight/interior/interior_light.jpg'), alt: '' }],
			darkDown: true,
			interiorDark: [{ src: require('~/assets/images/highlight/interior/interior_dark.jpg'), alt: '' }],
			navigation: [{ src: require('~/assets/images/highlight/interior/navigation.jpg'), alt: '' }],
			carpay: [{ src: require('~/assets/images/highlight/interior/carpay.jpg'), alt: '' }],
			seatDown: true,
			seats: [
				{ src: require('~/assets/images/highlight/interior/seat_03.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/seat_02.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/seat_01.jpg'), alt: '' }
			],
			seatList: [
				{ color: '블랙', txt: '(인조가죽 시트)' },
				{ color: '라이트 그레이/블루', txt: '(인조가죽 시트/레몬 포인트)' },
				{ color: '다크 그레이/라이트 카키', txt: '(인조가죽 시트/오렌지 포인트)' }
			],
			walkDown: true,
			walkThisImg: 0,
			walk: [
				{ src: require('~/assets/images/highlight/interior/walk_01.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/walk_02.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/walk_03.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/walk_04.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/walk_05.jpg'), alt: '' }
			],
			walkList: ['기본', '1열 워크쓰루', '1열 풀 폴딩 시트', '동승석 풀 폴딩 시트 & 2열 5:5 분할 폴딩'],
			storageDown: true,
			storageUp: false,
			storageTxt: true,
			storage: [
				{ src: require('~/assets/images/highlight/interior/storage_01.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/storage_02.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/storage_03.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/storage_04.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/storage_05.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/storage_06.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/storage_07.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/storage_08.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/interior/storage_09.jpg'), alt: '' }
			],
			movieList: ['Snow', 'Mud', 'Sand'],
			movieDown: true,
			safeMovieList: [
				{ src: `/wcontents/video/highlight/PC/fca.mp4`, className: 'fca', liClassName: 'fca-box' },
				{ src: `/wcontents/video/highlight/PC/lka.mp4`, className: 'lka', liClassName: 'lka-box' },
				{ src: `/wcontents/video/highlight/PC/lfa.mp4`, className: 'lfa', liClassName: 'lfa-box' },
				{ src: `/wcontents/video/highlight/PC/hba.mp4`, className: 'hba', liClassName: 'hba-box' },
				{ src: `/wcontents/video/highlight/PC/daw.mp4`, className: 'daw', liClassName: 'daw-box' },
				{ src: `/wcontents/video/highlight/PC/daw2.mp4`, className: 'daw2', liClassName: 'daw2-box' },
				{ src: `/wcontents/video/highlight/PC/bca.mp4`, className: 'bca', liClassName: 'bca-box' },
				{ src: `/wcontents/video/highlight/PC/bca2.mp4`, className: 'bca2', liClassName: 'bca2-box' },
				{ src: `/wcontents/video/highlight/PC/sew.mp4`, className: 'sew', liClassName: 'sew-box' },
				{ src: `/wcontents/video/highlight/PC/scc.mp4`, className: 'scc', liClassName: 'scc-box' },
				{ src: `/wcontents/video/highlight/PC/nscc.mp4`, className: 'nscc', liClassName: 'nscc-box' }
			],
			currentSafeIndex: 0,
			// 2021.09.28 텍스트 수정
			smartList: [
				'전방 충돌방지 보조',
				'차로 이탈방지 보조',
				'차로 유지 보조',
				'하이빔 보조',
				'운전자 주의 경고',
				'전방 차량 출발 알림',
				'후측방 충돌방지 보조',
				'후방 교차 충돌방지 보조',
				// 2021.09.28 ver2 텍스트수정
				'안전 하차 경고',
				'스마트 크루즈 컨트롤<br />(정차 및 재출발 기능 미포함)',
				'내비게이션 기반 스마트 크루즈 컨트롤<br />(안전구간, 곡선로)'
			],
			infoTxt: 0,
			smartInfo: [
				'전방 카메라와 전방 레이더의 신호를 종합적으로 판단하여 전방 차량, 보행자, 자전거 탑승자 및 교차로 대향차와의 충돌 위험 상황이 감지될 경우 운전자에게 이를<br />경고하고, 필요 시 브레이크 작동을 도와줍니다.',
				'주행 시 방향지시등 스위치의 움직임 없이 차로 이탈을 감지하면 경고를 해주고, 차로를 이탈하지 않도록 자동으로 조향을 도와줍니다.',
				'주행 시 차로 중앙을 유지하며 주행하도록 도와줍니다. 차로 미인식 시 전방의 차량을 인식하여 일정시간 동안 조향을 도와줍니다.',
				'맞은편 차량 또는 앞차의 램프 등 주변 광원 및 조도를 인식하여 자동으로 하이빔을 조절해 줍니다.',
				'주행 중 운전자의 주의 운전 상태를 표시해주며, 운전자 주의 수준이 "나쁨"으로 떨어지면 경고를 해줍니다.',
				'정차 중, 전방 차량이 출발 하면 운전자에게 알려줍니다.',
				'차로 변경을 위하여 방향지시등 스위치를 움직였을 때, 후측방 차량과 충돌 위험이 감지되면 경고를 해주고, 경고 후에도 충돌 위험이 높아지면, 자동으로 차량을<br />제어하여 충돌 회피를 도와줍니다.',
				'후진 시 좌/우측에서 다가오는 차량과의 충돌 위험을 감지하면 경고를 해주고, 경고 후에도 충돌 위험이 높아지면 자동으로 제동을 도와줍니다.',
				'정차 후 탑승자가 차에서 내리려고 도어를 열 때, 후측방에서 접근하는 차량이 감지되면 경고를 해줍니다.',
				'주행 시 앞차와의 거리를 유지하며 운전자가 설정한 속도로 주행하도록 도와줍니다. 차간거리를 1~4 단계로 선택 할 수 있으며, 자동으로 차간거리 및 설정 속도를<br />유지하면서 주행하도록 도와줍니다.',
				'고속도로와 자동차 전용도로 주행 시 내비게이션과 연동으로 안전 구간 및 곡선로에서 자동으로 감속 후 설정속도로 복귀하여 주행 편의성을 제공합니다.'
			],
			gallIndex: 0,
			gallery: [
				{ src: require('~/assets/images/highlight/gallery/exterior_01.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/exterior_02.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/exterior_03.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/exterior_04.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/exterior_05.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/exterior_06.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/interior_01.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/interior_02.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/interior_03.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/interior_04.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/interior_05.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/interior_06.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/convinience_01.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/convinience_02.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/convinience_03.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/convinience_04.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/convinience_05.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/convinience_06.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/hga_01.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/hga_02.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/hga_03.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/hga_04.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/hga_05.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/hga_06.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/van_01.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/van_02.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/van_03.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/van_04.jpg'), alt: '' },
				{ src: require('~/assets/images/highlight/gallery/van_05.jpg'), alt: '' }
			]
		}
	},
	computed: {
		winWSize() {
			return window.innerWidth > 0 ? window.innerWidth : screen.width
		},
		winHSize() {
			return window.innerHeight > 0 ? window.innerHeight : screen.height
		}
	},
	beforeMount() {
		const agent = navigator.userAgent.toLowerCase()
		//const url = 'http://tcasper-pub.hyundai.com/highlight' // publishing url
		const url = `${process.env.CONT_PATH}` + `${process.env.BASE_PATH}` + this.$route.fullPath
		if ((navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1) || agent.indexOf('msie') != -1) {
			window.location.href = 'microsoft-edge:' + url
			setTimeout(() => {
				window.open('', '_self').close()
			}, 5000)
		}
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:하이라이트',
						siteSection: '차량',
						siteSubsection: '하이라이트'
					}
				}
			}

			window._spaData(obj)
		})
		// this.headerSize()
		// window.addEventListener('resize', this.headerSize)
		const floatingMenu = document.querySelector('.floating-menu')
		floatingMenu.style.display = 'none'
		// const goTopBtn = document.querySelector('.btn-scroll-top')
		// goTopBtn.addEventListener('click', () => {
		//   this.$el.scrollTo(0, 0)
		// })
		document.body.classList.add('highlight-body')

		// 09-29
		$('.wheel').removeAttr('style')
		$('.color').removeAttr('style')

		window.scrollTo(0, 0)
		this.wheelOffTop = $('.wheel').offset().top
		this.colorOffTop = $('.color').offset().top
		$('section').css('min-height', this.winHSize + 'px')
		$(window)
			.off('scroll')
			.on('scroll', this.parallax)
	},
	methods: {
		// headerSize() {
		//   const header = document.querySelector('header')
		//   const headerWrap = document.querySelector('.header-wrap')
		//   header.classList.add('highlight-header')
		//   header.style.width = (this.$el.offsetWidth - (this.$el.offsetWidth - this.$el.clientWidth)) + 'px'
		//   headerWrap.style.width = (this.$el.offsetWidth - (this.$el.offsetWidth - this.$el.clientWidth)) + 'px'
		// },
		parallax() {
			// const header = document.querySelector('header')
			// const $this = e.target

			// header
			// let st = $this.scrollTop
			// if (st > 0 && st <= 288) {
			//   header.style.top = (-1 * st/4 ) + 'px'
			// } else if (st > 288) {
			//   header.style.top = '-72px'
			// } else {
			//   header.style.top = '0px'
			// }

			let st = window.scrollY

			// section
			const suv = this.$el.querySelector('.strong-suv')
			let suvTop = suv.getBoundingClientRect().top
			const lighting = this.$el.querySelector('.lighting')
			const lightingImg = document.getElementById('lightingImg')
			let lightingTop = lighting.getBoundingClientRect().top
			const mirror = this.$el.querySelector('.mirror')
			const mirrorImg = document.getElementById('mirrorImg')
			let mirrorTop = mirror.getBoundingClientRect().top
			const wheel = this.$el.querySelector('.wheel')
			let wheelTop = wheel.getBoundingClientRect().top
			const rear = this.$el.querySelector('.rear')
			const rearImg = document.getElementById('rearImg')
			let rearTop = rear.getBoundingClientRect().top
			const output = this.$el.querySelector('.output')
			let outputTop = output.getBoundingClientRect().top
			const color = this.$el.querySelector('.color')
			let colorTop = color.getBoundingClientRect().top
			const inLight = this.$el.querySelector('.interior-light')
			let inLightTop = inLight.getBoundingClientRect().top
			const inDark = this.$el.querySelector('.interior-dark')
			let inDarkTop = inDark.getBoundingClientRect().top
			// const seat = this.$el.querySelector('.seat')
			// let seatTop = seat.getBoundingClientRect().top
			const walk = this.$el.querySelector('.walk-through')
			let walkTop = walk.getBoundingClientRect().top
			const storage = this.$el.querySelector('.storage')
			let storageTop = storage.getBoundingClientRect().top
			const storageImg = document.getElementById('storageImg')
			const movie = this.$el.querySelector('.movie')
			let movieTop = movie.getBoundingClientRect().top
			if (st > this.scrollLast) {
				// down
				// 1. strong suv down
				if (suvTop < this.winHSize * this.downGap && this.suvDown) {
					this.suvDown = false
					this.suvImgSize(() => {
						this.suvUp = true
					})
				}

				// 2. lignting down
				if (lightingTop < this.winHSize * this.downGap && this.lightingDown) {
					this.lightingDown = false
					this.imgNextChange(this.lighting, lightingImg, this.time, (i) => {
						if (this.lightingTxt) {
							this.textInteraction('.info-box-lighting', '20px', '0px')
							this.lightingTxt = false
						}
						this.lightingUp = true
					})
				}

				// 3. mirror down
				if (mirrorTop < this.winHSize * this.downGap && this.mirrorDown) {
					this.mirrorDown = false
					this.imgNextChange(this.mirror, mirrorImg, this.time, (i) => {
						if (this.mirrorTxt) {
							this.textInteraction('.info-box-mirror', '20px', '0px')
							this.mirrorTxt = false
						}
						this.mirrorUp = true
					})
				}

				// 4. wheel down
				if (wheelTop < this.winHSize * this.downGap && this.wheelDown) {
					this.wheelDown = false
					$('.wheel').css({ position: 'fixed', top: '0', left: '0', 'z-index': '20' })
					this.wheels(() => {
						setTimeout(() => {
							window.scrollTo(0, this.wheelOffTop)
							$('.wheel').removeAttr('style')
						}, 600)
						setTimeout(() => {
							this.wheelUp = true
						}, 1200)
					})
				}

				// 5. rear down
				if (rearTop < this.winHSize * this.downGap && this.rearDown) {
					this.rearDown = false
					this.imgNextChange(this.rear, rearImg, this.time, (i) => {
						this.rearUp = true
					})
				}

				// 6. output down
				if (outputTop < this.winHSize * this.downGap && this.outputDown) {
					this.outputDown = false
					const counters = setInterval(() => {
						if (this.casperPs < 76) {
							this.casperPs++
						}
						if (this.casperActivePs < 100) {
							this.casperActivePs++
						} else {
							clearInterval(counters)
							this.outputCount = false
						}
					}, 10)
				}

				// 7. color down
				if (colorTop < this.winHSize * this.downGap && this.colorDown) {
					this.colorDown = false
					$('.color').css({ position: 'fixed', top: '0', left: '0', 'z-index': '20' })
					this.colorIntro(() => {
						setTimeout(() => {
							window.scrollTo(0, this.colorOffTop)
							$('.color').removeAttr('style')
						}, 600)
					})
				}

				// 8. interior light down
				if (inLightTop < this.winHSize * this.downGap && this.lightDown) {
					this.lightDown = false
					$('.info-box-light').fadeIn('slow')
				}

				// 9. interior dark down
				if (inDarkTop < this.winHSize * this.downGap && this.darkDown) {
					this.darkDown = false
					$('.info-box-dark').fadeIn('slow')
				}

				// 10. seat down
				// if ((seatTop <= 0) && this.seatDown) {
				//   this.seatDown = false
				//   this.seatActions(0)
				// }

				// 11. walk down
				if (walkTop < this.winHSize * this.downGap && this.walkDown) {
					this.walkDown = false
					this.walkActions()
				}

				// 12. storage down
				if (storageTop < this.winHSize * this.downGap && this.storageDown) {
					this.storageDown = false
					this.imgNextChange(this.storage, storageImg, this.slowTime, (i) => {
						if (this.storageTxt) {
							this.textInteraction('.storage .info-box', '-89px', '-109px')
							this.storageTxt = false
						}
						this.storageUp = true
					})
				}

				// 13. movie down
				if (movieTop < this.winHSize * this.downGap && this.movieDown) {
					this.movieDown = false
					this.movieActions(0)
				}
			} else {
				// up
				// 1. strong suv up
				if (suvTop > -1 * (this.winHSize * this.upGap) && this.suvUp) {
					this.suvUp = false
					this.suvReImgSize(() => {
						this.suvDown = true
					})
				}

				// 2. lighting up
				if (lightingTop > -1 * (this.winHSize * this.upGap) && this.lightingUp) {
					this.lightingUp = false
					this.imgPrevChange(this.lighting, lightingImg, this.time, (i) => {
						this.lightingDown = true
					})
				}

				// 3. mirror up
				if (mirrorTop > -1 * (this.winHSize * this.upGap) && this.mirrorUp) {
					this.mirrorUp = false
					this.imgPrevChange(this.mirror, mirrorImg, this.time, (i) => {
						this.mirrorDown = true
					})
				}

				// 4. wheel up
				if (wheelTop > -1 * (this.winHSize * this.upGap) && this.wheelUp) {
					this.wheelUp = false
					this.wheelsRe(() => {
						this.wheelDown = true
					})
				}

				// 5. rear up
				if (rearTop > -1 * (this.winHSize * this.upGap) && this.rearUp) {
					this.rearUp = false
					this.imgPrevChange(this.rear, rearImg, this.time, (i) => {
						this.rearDown = true
					})
				}

				// 6. output up - 없음
				// 7. color up - 없음
				// 8. interior light up - 없음
				// 9. interior dark up - 없음
				// 10. seat up - 없음
				// 11. walk up - 없음

				// 12. storage up
				if (storageTop > -1 * (this.winHSize * this.upGap) && this.storageUp) {
					this.storageUp = false
					this.imgPrevChange(this.storage, storageImg, this.time, (i) => {
						this.storageDown = true
					})
				}

				// 13. movie up - 없음
			}
			this.scrollLast = st <= 0 ? 0 : st
		},
		textInteraction(className, start, end) {
			$(className)
				.stop()
				.animate({ 'margin-top': start, opacity: '0' }, 0)
				.animate({ 'margin-top': end, opacity: '1' }, 600)
		},
		suvImgSize(callback) {
			$('.suv-img')
				.stop()
				.animate({ top: '50%', 'margin-top': '-278px', width: '600px', 'margin-left': '0px' }, 0)
				.animate({ top: '0%', 'margin-top': '-272px', width: '900px', 'margin-left': '-450px' }, 600, () => {
					callback && callback()
				})
			$('.info-box-styling')
				.stop()
				.animate({ top: '50%' }, 0)
				.animate({ top: '-50%' }, 600)
			$('.info-box-design')
				.stop()
				.animate({ bottom: '-128px' }, 0)
				.animate({ bottom: '128px' }, 600)
		},
		suvReImgSize(callback) {
			$('.suv-img')
				.stop()
				.animate({ top: '0%', 'margin-top': '-272px', width: '900px', 'margin-left': '-450px' }, 0)
				.animate({ top: '50%', 'margin-top': '-278px', width: '600px', 'margin-left': '0px' }, 600, () => {
					callback && callback()
				})
			$('.info-box-styling')
				.stop()
				.animate({ top: '-50%' }, 0)
				.animate({ top: '50%' }, 600)
			$('.info-box-design')
				.stop()
				.animate({ bottom: '128px' }, 0)
				.animate({ bottom: '-128px' }, 600)
		},
		wheels(callback) {
			$('.info-box-in-start').fadeOut('fast')
			$('.wheel-side')
				.stop()
				.animate({ width: '960px', 'margin-top': '-106px', 'margin-right': '-192px' }, 0)
				.animate({ width: '1596px', 'margin-top': '-106px', 'margin-right': '-192px' }, 300)
				.animate({ width: '1596px', 'margin-top': '-320px', 'margin-right': '-1872px' }, 300, () => {
					$('.wheel-a')
						.stop()
						.animate({ 'margin-right': '-682px', opacity: '0' }, 0)
						.animate({ 'margin-right': '-301px', opacity: '1' }, 200)
					$('.wheel-b')
						.stop()
						.animate({ 'margin-right': '-682px', opacity: '0' }, 0)
						.animate({ 'margin-right': '-301px', opacity: '1' }, 200)
						.animate({ 'margin-right': '0px', opacity: '1' }, 200)
					$('.wheel-c')
						.stop()
						.animate({ 'margin-right': '-682px', opacity: '0' }, 0)
						.animate({ 'margin-right': '-301px', opacity: '1' }, 200)
						.animate({ 'margin-right': '0px', opacity: '1' }, 200)
						.animate({ 'margin-right': '301px', opacity: '1' }, 200)
					$('.wheel-d')
						.stop()
						.animate({ 'margin-right': '-682px', opacity: '0' }, 0)
						.animate({ 'margin-right': '-301px', opacity: '1' }, 200)
						.animate({ 'margin-right': '0px', opacity: '1' }, 200)
						.animate({ 'margin-right': '301px', opacity: '1' }, 200)
						.animate({ 'margin-right': '602px', opacity: '1' }, 200, () => {
							$('.info-box-in-end').fadeIn('fast')
							$('.wheel-list').fadeIn('slow')
							callback && callback()
						})
				})
		},
		wheelsRe(callback) {
			$('.wheel-list').fadeOut('fast')
			$('.info-box-in-end').fadeOut('fast')
			$('.wheel-d')
				.stop()
				.animate({ 'margin-right': '602px', opacity: '1' }, 0)
				.animate({ 'margin-right': '301px', opacity: '1' }, 200)
				.animate({ 'margin-right': '0px', opacity: '1' }, 200)
				.animate({ 'margin-right': '-301px', opacity: '1' }, 200)
				.animate({ 'margin-right': '-682px', opacity: '0' }, 200)
			$('.wheel-c')
				.stop()
				.animate({ 'margin-right': '301px', opacity: '1' }, 0)
				.animate({ 'margin-right': '0px', opacity: '1' }, 200)
				.animate({ 'margin-right': '-301px', opacity: '1' }, 200)
				.animate({ 'margin-right': '-682px', opacity: '0' }, 200)
			$('.wheel-b')
				.stop()
				.animate({ 'margin-right': '0px', opacity: '1' }, 0)
				.animate({ 'margin-right': '-301px', opacity: '1' }, 200)
				.animate({ 'margin-right': '-682px', opacity: '0' }, 200)
			$('.wheel-a')
				.stop()
				.animate({ 'margin-right': '-301px', opacity: '1' }, 0)
				.animate({ 'margin-right': '-682px', opacity: '0' }, 200, () => {
					$('.wheel-side')
						.stop()
						.animate({ width: '1596px', 'margin-top': '-320px', 'margin-right': '-1872px' }, 0)
						.delay(600)
						.animate({ width: '1596px', 'margin-top': '-106px', 'margin-right': '-192px' }, 300)
						.animate({ width: '960px', 'margin-top': '-106px', 'margin-right': '-192px' }, 300, () => {
							$('.info-box-in-start').fadeIn('slow')
							callback && callback()
						})
				})
		},
		colorIntro(callback) {
			let rotate = 0
			$('.color-intro')
				.stop()
				.animate({ width: '9200px', 'margin-top': '-4200px', 'margin-left': '-4230px' }, 0)
				.animate({ width: '920px', 'margin-top': '-429px', 'margin-left': '-423px' }, 2000, () => {
					setTimeout(() => {
						this.colorActions(3)
						$('.cars-color-list').fadeIn('slow')
						callback && callback()
					}, 200)
				})
			const introRotate = setInterval(() => {
				if (rotate < 500) {
					rotate++
					$('.color-intro').css({ transform: 'rotate(' + rotate + 'deg)' })
				} else {
					clearInterval(introRotate)
				}
			}, 2)
		},
		colorActions(i) {
			let old = $('.cars-color-list > li.on').index()
			$('.color-group > div').css('z-index', '2')
			$('.color-group > div')
				.eq(old)
				.css('z-index', '3')
			$('.strong-group > strong').hide()
			$('.cars-color-list > li').removeClass('on')
			$('.cars-color-list > li')
				.eq(i)
				.addClass('on')
			$('.color-group > div')
				.eq(i)
				.css('z-index', '4')
				.show()
				.stop()
				.animate({ width: '0px', height: '0px', 'margin-top': '0px', 'margin-left': '0px' }, 0)
				.animate({ width: '3120px', height: '1297px', 'margin-top': '-648px', 'margin-left': '-1560px' }, 600, () => {
					// 09-29
					$('.strong-group > strong')
						.eq(i)
						.fadeIn('fast')
				})
		},
		seatActions(i) {
			let old = $('.space-list > li.on').index()
			$('.seat-group > div').css('z-index', '2')
			$('.seat-group > div')
				.eq(old)
				.css('z-index', '3')
			$('.space-list > li').removeClass('on')
			$('.space-list > li')
				.eq(i)
				.addClass('on')
			$('.seat-group > div')
				.eq(i)
				.css('z-index', '4')
				.show()
				.stop()
				.animate({ width: '0px', height: '0px', 'margin-top': '0px', 'margin-left': '0px' }, 0)
				.animate({ width: '2560px', height: '1297px', 'margin-top': '-648px', 'margin-left': '-1280px' }, 600) // 09-29
		},
		walkActions() {
			$('.walk-through .img-area')
				.stop()
				.animate({ left: '200%' }, 0)
				.animate({ left: '50%' }, 1000, () => {
					setTimeout(() => {
						this.walkThisImg = 1
					}, 200)
				})
		},
		movieActions(i) {
			switch (i) {
				case 0:
					this.movieSlide(0)
					$('.movie-tabs > li').removeClass('on')
					$('.movie-tabs > li')
						.eq(0)
						.addClass('on')
					this.mPlay('.snow', '.snow-area')
					this.mStop('.mud', '.mud-area')
					this.mStop('.sand', '.sand-area')
					this.movieEnd('.snow', () => {
						this.movieActions(1)
					})
					break
				case 1:
					this.movieSlide(1)
					$('.movie-tabs > li').removeClass('on')
					$('.movie-tabs > li')
						.eq(1)
						.addClass('on')
					this.mPlay('.mud', '.mud-area')
					this.mStop('.snow', '.snow-area')
					this.mStop('.sand', '.sand-area')
					this.movieEnd('.mud', () => {
						this.movieActions(2)
					})
					break
				case 2:
					this.movieSlide(2)
					$('.movie-tabs > li').removeClass('on')
					$('.movie-tabs > li')
						.eq(2)
						.addClass('on')
					this.mPlay('.sand', '.sand-area')
					this.mStop('.snow', '.snow-area')
					this.mStop('.mud', '.mud-area')
					this.movieEnd('.sand', () => {
						this.movieActions(0)
					})
					break
				default:
					break
			}
		},
		mPlay(movie, area) {
			$(movie)
				.get(0)
				.play()
			$(area)
				.find('.play')
				.hide()
			$(area)
				.find('.pause')
				.show()
			this.movieEnd(movie, () => {
				this.mStop(movie, area)
			})
		},
		mStop(movie, area) {
			$(movie)
				.get(0)
				.pause()
			$(area)
				.find('.pause')
				.hide()
			$(area)
				.find('.play')
				.show()
		},
		movieEnd(movie, callback) {
			$(movie).get(0).onended = (e) => {
				if ($(movie).get(0).currentTime == $(movie).get(0).duration) {
					callback && callback()
				}
			}
		},
		movieSlide(i) {
			let myMargin = i === 0 ? '-600px' : i === 1 ? '-1850px' : '-3100px'
			$('.movie-area')
				.stop()
				.animate({ 'margin-left': myMargin }, 200)
		},
		safePrev(i) {
			switch (i) {
				case 1:
					$('.safe-navi > ul')
						.stop()
						.animate({ left: '0px' }, 200)
					this.currentSafeIndex = 0
					break
				case 2:
					$('.safe-navi > ul')
						.stop()
						.animate({ left: '-1200px' }, 200)
					this.currentSafeIndex = 1
					break
				default:
					break
			}
		},
		safeNext(i) {
			console.log(i)
			switch (i) {
				case 0:
					$('.safe-navi > ul')
						.stop()
						.animate({ left: '-1200px' }, 200)
					this.currentSafeIndex = 1
					break
				case 1:
					$('.safe-navi > ul')
						.stop()
						.animate({ left: '-2400px' }, 200)
					this.currentSafeIndex = 2
					break
				default:
					break
			}
		},
		slideAction(i) {
			$('.safe-navi > ul > li').removeClass('on')
			$('.safe-navi > ul > li')
				.eq(i)
				.addClass('on')
			$('.safe-movie > ul')
				.stop()
				.animate({ left: -1200 * i + 'px' }, 200)
			this.infoTxt = i
		},
		imgNextChange(data, img, time = this.time, nextCall) {
			let idx = 0
			const imgNextCall = setInterval(() => {
				if (idx < data.length) {
					img.setAttribute('src', data[idx].src)
					idx++
				} else {
					clearInterval(imgNextCall)
					nextCall && nextCall(idx)
				}
			}, time)
		},
		imgPrevChange(data, img, time = this.time, prevCall) {
			let idx = data.length - 1
			const imgPrevCall = setInterval(() => {
				if (idx >= 0) {
					img.setAttribute('src', data[idx].src)
					idx--
				} else {
					clearInterval(imgPrevCall)
					prevCall && prevCall(idx)
				}
			}, time)
		},
		galleryAction(i) {
			const pop = $('.gallery-popup')
			this.gallIndex = i
			pop.show()
		},
		galleryPrev(i) {
			if (i > 0) {
				this.gallIndex = i - 1
			}
		},
		galleryNext(i) {
			if (i < 23) {
				this.gallIndex = i + 1
			}
		},
		galleryClose() {
			const pop = $('.gallery-popup')
			pop.hide()
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

<!-- 2021.10.01 스타일 정리 -->
<style lang="scss">
@import '~/assets/style/page/highlight.scss';
</style>
