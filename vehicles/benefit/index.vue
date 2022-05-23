<template>
	<div class="content purchase-benefit">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="구매 혜택" page-infotext="다양한 혜택을 통해 캐스퍼를 구매하세요." />

		<div class="benefit-list">
			<ul>
				<li class="active">
					<v-btn type="nlink" to="/vehicles/benefit">구매혜택 메인</v-btn>
				</li>
				<li>
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

		<section class="benefit-wrap main">
			<div class="title">
				<h1 class="t-black">
					최고의 혜택으로
					<br />
					<span class="t-blue">캐스퍼</span>
					를 구매하세요.
				</h1>
			</div>
			<div class="cont">
				<ul>
					<li class="cares">
						<i class="icon"></i>
						<strong class="ebold">
							CASPER
							<br />
							케어스
						</strong>
						<p>
							캐스퍼 구매고객을 위한
							<br />
							카라이프 안심 케어 서비스
						</p>
						<v-btn type="nlink" class="btn-more" to="/vehicles/benefit/Cares">자세히 보기</v-btn>
					</li>
					<li class="tax">
						<i class="icon"></i>
						<strong class="ebold">
							세제
							<br />
							혜택
						</strong>
						<p>
							면세 혜택부터 유지비 할인까지
							<br />
							가능한 엔트리 SUV
						</p>
						<v-btn type="nlink" class="btn-more" to="/vehicles/benefit/SmallCar">자세히 보기</v-btn>
					</li>
					<li class="bluemembers">
						<i class="icon"></i>
						<strong class="ebold">
							블루멤버스
							<br />
							혜택
						</strong>
						<p>
							다양한 혜택을 제공하는
							<br />
							현대자동차의 멤버십
						</p>
						<v-btn type="nlink" class="btn-more" to="/vehicles/benefit/BlueMembers">자세히 보기</v-btn>
					</li>
					<li class="tinted">
						<i class="icon"></i>
						<strong class="ebold">
							썬팅
							<br />
							무료 시공
						</strong>
						<p>
							구매 고객 대상
							<br />
							썬팅쿠폰 / 브랜드 키트 제공
						</p>
						<v-btn type="nlink" class="btn-more" to="/vehicles/benefit/Tinted">자세히 보기</v-btn>
					</li>
				</ul>
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
			title: '현대자동차 캐스퍼 CASPER - 구매 혜택',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대캐스퍼 구매, 캐스퍼 구매혜택, 캐스퍼 썬팅, 현대캐스퍼 이벤트' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content: '현대 캐스퍼 구매 혜택 페이지입니다. CASPER 케어스, 세제 혜택, 블루멤버스 혜택 및 무료 썬팅 시공 등 다양한 혜택을 확인하세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/benefit' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 구매 혜택' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '현대 캐스퍼 구매 혜택 페이지입니다. CASPER 케어스, 세제 혜택, 블루멤버스 혜택 및 무료 썬팅 시공 등 다양한 혜택을 확인하세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 구매 혜택' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '현대 캐스퍼 구매 혜택 페이지입니다. CASPER 케어스, 세제 혜택, 블루멤버스 혜택 및 무료 썬팅 시공 등 다양한 혜택을 확인하세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/benefit' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/benefit' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/benefit' }
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
						pageName: '차량:구매 혜택:목록',
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
