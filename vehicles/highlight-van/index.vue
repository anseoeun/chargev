<template>
	<div
		class="view-landing"
		:style="{
			paddingTop: `${headerHeight}px`
		}"
	>
		<Section01 ref="refSection01" :headerHeight="headerHeight" :scrollTick="scrollTick" />

		<Section02
			ref="refSection02"
			:headerHeight="headerHeight"
			:scrollPosition="scrollPosition"
			:scrollTick="scrollTick"
			:beforeScrollTop="beforeScrollTop"
			@init-scroll-position="initScrollPosition"
		/>

		<Section03 ref="refSection03" :headerHeight="headerHeight" :scrollPosition="scrollPosition" :beforeScrollTop="beforeScrollTop" :scrollTick="100" />

		<Section04 ref="refSection04" :headerHeight="headerHeight" :scrollPosition="scrollPosition" @initVid3="initVid3" @initVid5="initVid5" :scrollTick="100" />

		<Section05 ref="refSection05" :headerHeight="headerHeight" :scrollPosition="scrollPosition" :scrollTick="scrollTick" />

		<Section05Next ref="refSection05Next" :headerHeight="headerHeight" :scrollPosition="scrollPosition" :scrollTick="33" />
		<Section06 :headerHeight="headerHeight" />

		<Section07 ref="refSection07" :headerHeight="headerHeight" :scrollTick="20" :scrollPosition="scrollPosition" />

		<Section08 ref="refSection08" :headerHeight="headerHeight" :scrollTick="scrollTick" :scrollPosition="scrollPosition" @initVid="initVid7" />

		<Section09 ref="refSection09" :headerHeight="headerHeight" :scrollPosition="scrollPosition" :scrollTick="scrollTick" />

		<Section10 :headerHeight="headerHeight" />
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
import Section01 from '~/components/page/vehicles/highlight/van/Section01.vue'
import Section02 from '~/components/page/vehicles/highlight/van/Section02.vue'
import Section03 from '~/components/page/vehicles/highlight/van/Section03.vue'
import Section04 from '~/components/page/vehicles/highlight/van/Section04.vue'
import Section05 from '~/components/page/vehicles/highlight/van/Section05.vue'
import Section05Next from '~/components/page/vehicles/highlight/van/Section05Next.vue'
import Section06 from '~/components/page/vehicles/highlight/van/Section06.vue'
import Section07 from '~/components/page/vehicles/highlight/van/Section07.vue'
import Section08 from '~/components/page/vehicles/highlight/van/Section08.vue'
import Section09 from '~/components/page/vehicles/highlight/van/Section09.vue'
import Section10 from '~/components/page/vehicles/highlight/van/Section10.vue'

export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 캐스퍼 VAN',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '캐스퍼 밴, 현대 경형 밴, 경형 상용차 추천' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content:
						'캐스퍼의 아이코닉한 디자인과 안전 및 편의사양에 공간 활용성을 극대화한 현대자동차 캐스퍼 VAN! 경형 상용차로 추천하는 캐스퍼 밴을 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/highlight-van' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 캐스퍼 VAN' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content:
						'캐스퍼의 아이코닉한 디자인과 안전 및 편의사양에 공간 활용성을 극대화한 현대자동차 캐스퍼 VAN! 경형 상용차로 추천하는 캐스퍼 밴을 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 캐스퍼 VAN' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content:
						'캐스퍼의 아이코닉한 디자인과 안전 및 편의사양에 공간 활용성을 극대화한 현대자동차 캐스퍼 VAN! 경형 상용차로 추천하는 캐스퍼 밴을 만나보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/highlight-van' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' }
				// { 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				// { 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/highlight-van' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/highlight-van' }
			]
		}
	},
	components: {
		Section01,
		Section02,
		Section03,
		Section04,
		Section05,
		Section05Next,
		Section06,
		Section07,
		Section08,
		Section09,
		Section10
	},
	data: function() {
		return {
			headerHeight: 0,
			beforeScrollTop: 0,
			scrollPosition: 'bottom', // top | bottom
			scrollTick: 100,
			slideWrapperOffsetTops: []
		}
	},
	async mounted() {
		await this.setSlideWrapperOffsetTops()
		await this.initScrollPosition()

		await window.addEventListener('scroll', this.onScroll, { passive: true })

		const floatingMenu = document.querySelector('.floating-menu')
		floatingMenu.style.display = 'none'
	},
	methods: {
		initVid7() {
			this.$refs.refSection07.init()
		},
		initVid5() {
			this.$refs.refSection05.init()
		},
		initVid3() {
			this.$refs.refSection03.init()
		},
		onScroll() {
			const el = document.documentElement || document.scrollingElement

			this.onOneSlideWrappersScroll(el.scrollTop)
			this.checkScrollPosition(el.scrollTop)
		},
		onOneSlideWrappersScroll(nowScrollTop) {
			if (this.$refs) {
				Object.values(this.$refs).forEach((ref) => {
					if (ref.onScroll) {
						ref.onScroll(nowScrollTop)
					}
				})
			}
		},
		setSlideWrapperOffsetTops() {
			this.slideWrapperOffsetTops = Object.values(this.$refs).map((ref) => ref.$el.offsetTop - 72)
		},
		initScrollPosition() {
			const el = document.documentElement || document.scrollingElement

			this.beforeScrollTop = el.scrollTop
		},
		checkScrollPosition(scrollTop) {
			if (scrollTop === this.beforeScrollTop) {
				return
			}

			if (scrollTop < this.beforeScrollTop) {
				this.scrollPosition = 'top'
				this.beforeScrollTop = scrollTop
				return
			}

			this.scrollPosition = 'bottom'
			this.beforeScrollTop = scrollTop
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

<style lang="scss" scoped>
.view-landing {
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
}
</style>

<style>
video {
	outline: none;
	border: none;
}
</style>
