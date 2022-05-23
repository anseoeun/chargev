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
				<li class="active">
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

		<section class="benefit-wrap small-car">
			<div class="title">
				<h1>세제 혜택</h1>
				<p class="sub-text">구매부터 차량 유지까지 경차만의 알찬 혜택, 캐스퍼와 함께 하세요.</p>
			</div>
			<div class="cont">
				<ul>
					<li>
						<span class="tag">혜택 1</span>
						<strong class="ebold">
							차량 구매시
							<br />
							<span class="t-blue">개별소비세 면제</span>
						</strong>
						<ul class="bullet-list">
							<li>개별소비세 면제</li>
							<li>
								교육세 면제
								<br />
								<span class="t-gray">(개별소비세의 30%)</span>
							</li>
						</ul>
					</li>
					<li>
						<span class="tag">혜택 2</span>
						<strong class="ebold">취득세 최대<br /><span class="t-blue">75만원까지 감면</span></strong>
						<ul class="bullet-list">
							<li>취득세 75만원 이하인 경우, 면제</li>
							<li>취득세 75만원 초과할 경우, 75만원 공제</li>
						</ul>
					</li>
					<li>
						<span class="tag">혜택 3</span>
						<strong class="ebold">
							유류세 연간
							<br />
							<span class="t-blue">최대 30만원 환급</span>
						</strong>
						<ul class="bullet-list">
							<!-- 디자인 검수 후 개선 작업 2 : br추가 -->

							<!-- 2021.09.23 br 제거 -->
							<li>
								‘유류세 환급 대상자’ 가 전국 주유소 이용 시,
								<br />
								리터당 250원 유류세 환급
								<span class="t-gray">(연간 최대 30만원)</span>
							</li>
						</ul>
						<!-- 2021.09.23 텍스트 위치 이동 -->
						<p class="bullet-star">
							유류세 환급 대상자 : 경형 자동차 소유자
							<br />
							(경형 화물차 제외) 중 주민등록표 기준 세대당
							<br />
							경형 승용차 또는 경형 승합차 중 1대를 보유
							<br />
							하거나 각각 1대씩 보유한 경우
						</p>
					</li>
					<li>
						<span class="tag">혜택 4</span>
						<strong class="ebold">
							차량 등록 시
							<br />
							<span class="t-blue">공채 매입 면제</span>
						</strong>
						<ul class="bullet-list">
							<li>도시철도채권 매입 면제</li>
							<li>지역개발채권 매입 면제</li>
						</ul>
					</li>
					<li>
						<span class="tag">혜택 5</span>
						<strong class="ebold">
							<span class="t-blue">cc당 80원</span>
							<br />
							저렴한 자동차세
						</strong>
						<ul class="bullet-list">
							<!-- 2021.09.23 텍스트 수정 -->
							<li>
								비영업용 승용자동차의 표준세율 기준 cc당 80원
								<ul class="bullet-dash-list">
									<li>1000cc 이하: 80원/cc</li>
									<li>1600cc 이하: 140원/cc</li>
									<li>1600cc 초과: 200원/cc</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<span class="tag">혜택 6</span>
						<strong class="ebold">
							다양한
							<br />
							<span class="t-blue">차량 유지 혜택</span>
						</strong>
						<ul class="bullet-list">
							<!-- 2021.09.23 텍스트 수정 -->
							<!-- <li>자동차 책임보험료 10% 할인</li> -->
							<li>혼잡 통행료 50% 감면</li>
							<li>공영주차장, 고속도로 통행료 50% 감면</li>
							<li>환승주차장 80% 감면</li>
							<li>차량 10부제 면제</li>
						</ul>
					</li>
				</ul>
				<!-- 2021.09.23 위치이동 -->
				<p class="bullet-star">관련 법령 개정에 따라 기재된 혜택은 변경될 수 있습니다.</p>
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
			title: '현대자동차 캐스퍼 CASPER - 세제 혜택',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '캐스퍼 경차, 경차 혜택, 현대 경차혜택' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content: '취득세 할인, 유류세 환급, 차량 유지 혜택 등 캐스퍼의 다양한 경차 혜택을 웹사이트에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/benefit/SmallCar' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 세제 혜택' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '취득세 할인, 유류세 환급, 차량 유지 혜택 등 캐스퍼의 다양한 경차 혜택을 웹사이트에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 세제 혜택' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '취득세 할인, 유류세 환급, 차량 유지 혜택 등 캐스퍼의 다양한 경차 혜택을 웹사이트에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/benefit/SmallCar' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/benefit/SmallCar' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/benefit/SmallCar' }
			]
		}
	},
	components: {},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '구매', link: '/' },
				{ linkName: '구매혜택', link: '/' }
			]
		}
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:구매 혜택:세제혜택',
						siteSection: '차량',
						siteSubsection: '구매 혜택'
					}
				}
			}

			window._spaData(obj)
		})
	}
}
</script>
