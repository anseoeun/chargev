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
				<li>
					<v-btn type="nlink" to="/vehicles/benefit/BlueMembers">블루멤버스 혜택</v-btn>
				</li>
				<li class="active">
					<v-btn type="nlink" to="/vehicles/benefit/Tinted">썬팅 무료 시공</v-btn>
				</li>
				<li>
					<v-btn type="nlink" to="/vehicles/benefit/Event">이벤트 &amp; 프로모션</v-btn>
				</li>
			</ul>
		</div>

		<section class="benefit-wrap tinted">
			<div class="title">
				<h1>썬팅 무료 시공</h1>
				<p class="sub-text">캐스퍼 구매 시, 썬팅 시공 서비스를 무료로 제공합니다.</p>
			</div>
			<div class="cont">
				<ul>
					<li>
						<strong class="bold">품목</strong>
						<p>
							썬팅쿠폰 (차량 측, 후면 시공)
							<br />
							먼지떨이
						</p>
					</li>
					<li>
						<strong class="bold">썬팅 방법</strong>
						<p>
							지정 장착점에서 당사가 제공하는 6가지 브랜드의 썬팅 중
							<br />
							선호하는 썬팅을 선택하여 시공 받으실 수 있습니다.
						</p>
					</li>
					<li>
						<!-- 2021.08.23 텍스트 수정 -->
						<p class="bullet-star">
							차량 금액 결제 시, 썬팅 무료시공과 브랜드 KIT (트렁크 정리함 / 차량용 먼지떨이 / LED 안전봉 KIT / 목베개 / 전면 유리 커버 / 멀티 담요) 중 서비스
							선택이 가능합니다.
						</p>
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
			title: '현대자동차 캐스퍼 CASPER - 썬팅 무료 시공',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '캐스퍼 혜택, 캐스퍼 썬팅' },
				{ 'data-n-head': 'ssr', name: 'description', content: '캐스퍼 구매 고객만을 위한 캐스퍼 무료 썬팅 시공 서비스 혜택을 웹사이트에서 확인해보세요.' },
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/benefit/Tinted' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 썬팅 무료 시공' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '캐스퍼 구매 고객만을 위한 캐스퍼 무료 썬팅 시공 서비스 혜택을 웹사이트에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 썬팅 무료 시공' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '캐스퍼 구매 고객만을 위한 캐스퍼 무료 썬팅 시공 서비스 혜택을 웹사이트에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/benefit/Tinted' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/benefit/Tinted' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/benefit/Tinted' }
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
						pageName: '차량:구매 혜택:썬팅무료시공',
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
