<template>
	<div class="content vehicles test-driving-intro">
		<!-- 2021.05.13(ver1.4) 디자인수정으로 인한 전제적구조변경 -->
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="시승 신청" page-infotext="캐스퍼가 제공하는 편리한 시승 서비스를 이용해보세요." />

		<div class="test-driving-intro-wrap">
			<div class="intro-link">
				<div class="link-box">
					<strong class="tit">현대자동차 드라이빙라운지<br />/ CASPER STUDIO 시승</strong>
					<p class="txt">드라이빙라운지와 CASPER STUDIO에서<br />캐스퍼를 체험해보세요.</p>
					<div class="btn-wrap">
						<v-btn class="btn lg blue" type="button" @click="movePage()">시승 신청하기</v-btn>
						<div class="more">
							<v-btn class="btn-more t-blue" @click="movePage('mypage')">시승 신청 조회</v-btn>
						</div>
					</div>
					<p class="bullet">시승 신청은 만 21세 이상 운전면허 소지자면 누구나<br />이용 가능합니다.</p>
				</div>
				<!-- 쏘카 -->
				<div class="link-box">
					<strong class="tit"><i class="ssocar"></i><br />카셰어링 시승</strong>
					<p class="txt">내 주변 쏘카존에서 <b>캐스퍼</b>를 시승해보세요.<br /><b>(가솔린 1.0 엔진)</b></p>
					<div class="btn-wrap">
						<v-btn type="link" href="https://go.socar.kr/rY8VztDuOib" target="_blank" title="새창열기" class="btn lg blue">시승 신청하기</v-btn>
					</div>
					<p class="bullet">쏘카는 만 21세 이상, 운전면허 취득 1년 이상 시 이용<br />할 수 있습니다.</p>
				</div>
				<!-- 그린카 -->
				<div class="link-box">
					<strong class="tit"><i class="greencar"></i><br />카셰어링 시승</strong>
					<p class="txt">내 주변 그린존에서 <b>캐스퍼 액티브</b>를 시승해보세요.<br /><b>(카파 1.0 터보 엔진)</b></p>
					<div class="btn-wrap">
						<v-btn type="link" :href="BASE_PATH + '/vehicles/benefit/EventDetail?eventNumber=E000000014'" target="_blank" title="새창열기" class="btn lg blue"
							>시승 신청하기</v-btn
						>
					</div>
					<p class="bullet">그린카는 만 21세 이상, 운전면허 취득 1년 이상 시 이용<br />할 수 있습니다.</p>
				</div>
			</div>
		</div>
		<pop-notice :visible="popupVisible.isPopupNotice" :data="notiData" @close="popupVisible.isPopupNotice = false" />
	</div>
</template>

<script>
import PopNotice from '~/components/page/main/PopNotice'
import { mapGetters } from 'vuex'
export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 시승신청',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대캐스퍼 시승신청, 캐스퍼 시승, 드라이빙 라운지, 승차감 좋은 차' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content: '현대 캐스퍼가 제공하는 편리한 시승신청 서비스를 이용해보세요. 드라이빙 라운지에서, 혹은 쏘카 카셰어링으로 캐스퍼를 직접 체험해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/test-driving' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 시승신청' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '현대 캐스퍼가 제공하는 편리한 시승신청 서비스를 이용해보세요. 드라이빙 라운지에서, 혹은 쏘카 카셰어링으로 캐스퍼를 직접 체험해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 시승신청' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '현대 캐스퍼가 제공하는 편리한 시승신청 서비스를 이용해보세요. 드라이빙 라운지에서, 혹은 쏘카 카셰어링으로 캐스퍼를 직접 체험해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/test-driving' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/test-driving' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/test-driving' }
			]
		}
	},
	components: {
		PopNotice
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '체험', link: '/' },
				{ linkName: '시승 신청', link: '/' }
			],
			notiData: {
				src: require('~/assets/images/temp/temp-driving-experience.jpg'),
				alt: '',
				today: false,
				link: 'https://casper.hyundai.com/vehicles/benefit/EventDetail?eventNumber=E000000015', // or vlinlk
				target: '_blank'
			},
			popupVisible: {
				isPopupNotice: false
			}
		}
	},
	computed: {
		...mapGetters({
			isLogin: 'isLogin',
			userInfo: 'userInfo'
		})
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:시승 신청:메인',
						siteSection: '차량',
						siteSubsection: '시승 신청'
					}
				}
			}

			window._spaData(obj)
		})

		if (this.getPopupPostingYn()) this.popupVisible.isPopupNotice = true

		sessionStorage.removeItem('reservationData')
	},
	methods: {
		movePage(flag) {
			if (flag === 'socar') {
				window.open('https://www.socar.kr', '_blank')
			} else if (flag === 'mypage') {
				let link = '/mypage/test-driving'

				if (!this.isLogin) {
					let alert = {
						callback: () => {
							sessionStorage.setItem('login_redirect_url', link)

							this.$router.push('/login')
						},
						cancel: () => {}
					}
					this.$nuxt.$emit('loginCheck', alert)
					// location.href = `${process.env.CCSP_LOGIN_PATH}?response_type=code&client_id=${process.env.CCSP_CLIENT_ID}&redirect_uri=${process.env.CCSP_REDIRECT_URI}&state=login&scope=&lang=kr`
				} else {
					this.$router.push(link)
				}
			} else {
				let link = '/vehicles/test-driving'
				this.$router.push(link)
			}
		},
		getPopupPostingYn() {
			const xhr = new XMLHttpRequest()
			xhr.open('GET', location.href, false)
			xhr.setRequestHeader('Content-Type', 'text/html')
			xhr.send('')
			const st = xhr.getResponseHeader('Date') // 한국 시간 -9
			const today = new Date(st)
			const dDay = new Date('2022-05-01 23:00:00')

			return today <= dDay
		}
	}
}
</script>
