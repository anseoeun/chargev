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
				<li>
					<v-btn type="nlink" to="/vehicles/benefit/Tinted">썬팅 무료 시공</v-btn>
				</li>
				<li class="active">
					<v-btn type="nlink" to="/vehicles/benefit/Event">이벤트 &amp; 프로모션</v-btn>
				</li>
			</ul>
		</div>

		<section class="benefit-wrap event">
			<div class="title">
				<h1>이벤트 &amp; 프로모션</h1>
				<p class="sub-text">다양한 이벤트 및 프로모션으로 캐스퍼를 만나보세요</p>
			</div>
			<div class="cont">
				<!-- coupon -->
				<ul v-if="couponDownloadList && couponDownloadList.length > 0" class="coupon-list">
					<li v-for="(item, index) in couponDownloadList" :key="index" :class="{ used: item.issuableYn === 'N' }">
						<strong class="text">{{ item.couponName }}</strong>
						<p v-if="item.couponDiscountRate" class="price">
							<em>{{ item.couponDiscountRate }}</em>
							% 할인
						</p>
						<p v-else-if="item.couponDiscountPrice" class="price">
							<em>{{ Number(item.couponDiscountPrice) | currency }}</em>
							원 할인
						</p>
						<p class="date">{{ item.couponUseableRange }}</p>
						<template v-if="isLogin && item.issuableYn === 'N'">
							<p class="disabled-text">이미 발급받은 쿠폰입니다.</p>
						</template>
						<template v-else>
							<v-btn
								v-if="item.couponContents && item.couponContents !== ''"
								type="button"
								class="btn-detail"
								@click="
									popVisible.popCouponDetail = true
									popVisible.infoTitle = item.couponName
									popVisible.infoContent = item.couponContents
								"
							>
								사용조건 자세히 보기
								<i class="icon-open"></i>
							</v-btn>
							<v-btn class="btn-download" @click="fnCouponDownload(item.couponCode)"><span class="offscreen">쿠폰받기</span></v-btn>
						</template>
					</li>
				</ul>

				<ul v-if="eventList.length > 0" class="event-list">
					<li v-for="(item, index) in eventList" :key="index">
						<v-btn type="link" href="javascript:void(0);" class="nuxt-link-exact-active nuxt-link-active" @click="goEventDetail(item.eventNumber)">
							<div class="event-img">
								<v-img :src="`${item.pcFilePathName}/${item.pcFileName}`" :alt="item.eventName" />
							</div>
							<strong class="bold">{{ item.eventName }}</strong>
							<p class="date">{{ item.eventStartDate | date('YYYY-MM-DD') }} ~ {{ item.eventFinishDate | date('YYYY-MM-DD') }}</p>
						</v-btn>
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

		<!-- 팝업 -->
		<coupon-detail :pop-visible="popVisible" @close="popVisible.popCouponDetail = false" />
		<!-- ALERT 팝업 -->
		<v-popup popup-type="alert" :footer="['confirm']" :visible="alert.visible" @confirm="onClose()" @close="alert.visible = onClose()">
			<template slot="body">
				<span v-html="alert.message"></span>
			</template>
		</v-popup>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { dateFilter } from 'vue-date-fns'
import CouponDetail from '~/components/page/vehicles/coupon/popup/CouponDetail'

export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 이벤트 & 프로모션',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대캐스퍼 출시, 현대캐스퍼 출시일, CASPER 출시, 캐스퍼 프로모션' },
				{ 'data-n-head': 'ssr', name: 'description', content: '현대자동차 캐스퍼 출시, 구매 혜택 등 다양한 이벤트 및 프로모션을 공식 웹사이트에서 확인해보세요.' },
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/benefit/Event' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 이벤트 & 프로모션' },
				{ 'data-n-head': 'ssr', property: 'og:description', content: '현대자동차 캐스퍼 출시, 구매 혜택 등 다양한 이벤트 및 프로모션을 공식 웹사이트에서 확인해보세요.' },
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 이벤트 & 프로모션' },
				{ 'data-n-head': 'ssr', property: 'twitter:description', content: '현대자동차 캐스퍼 출시, 구매 혜택 등 다양한 이벤트 및 프로모션을 공식 웹사이트에서 확인해보세요.' },
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/benefit/Event' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content : 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name : 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/benefit/Event' }
			]
		}
	},
	components: {
		CouponDetail
	},
	filters: {
		date: dateFilter,
		currency: (value) => {
			if (!value) return ''
			return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
		}
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '구매', link: '/' },
				{ linkName: '구매혜택', link: '/' }
			],
			eventList: [],
			page: 1,
			pageSize: 10,
			loadingChk: true,
			alert: {
				visible: false,
				message: '',
				callback: () => {}
			},
			// 팝업
			popVisible: {
				popCouponDetail: false, //쿠폰 상세 설명 팝업
				infoTitle: '', //쿠폰 상세 설명 팝업 타이틀
				infoContent: '' //쿠폰 상세 설명 팝업 컨텐츠
			}
		}
	},
	computed: {
		...mapGetters({
			isLogin: 'isLogin',
			isCorp: 'isCorp',
			userInfo: 'userInfo', // 사용자 정보
			couponDownloadList: 'product/couponDownloadList',
			event: 'eventModules/eventList'
		})
	},
	async mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:구매 혜택:이벤트&프로모션:목록',
						siteSection: '차량',
						siteSubsection: '구매 혜택'
					}
				}
			}

			window._spaData(obj)
		})

		await this.getCouponList()
		await this.getEventList()

		window.addEventListener('scroll', this.handleScroll)
	},

	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		...mapActions(['eventModules/getEventList']),
		...mapActions({
			getCarPurchaseCount: 'estimate-done/getCarPurchaseCount' // API-WX-결제서비스-016 (차량 구매대수 리턴)
		}),

		handleScroll() {
			const checkWindow =
				window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
			let event = this.$el.querySelector('.event')
			let size = event.offsetTop + event.scrollHeight - window.innerHeight //document.body.clientHeight - window.innerHeight

			if (size <= checkWindow + 100 && this.eventList && this.eventList.length !== 0 && this.loadingChk && this.eventList.length < this.event.totalCount) {
				this.loadingChk = false
				this.page = this.page + 1
				this.getEventList()
			}
		},

		async getCouponList() {
			let customerNumber = ''
			if (this.isLogin && this.userInfo) {
				customerNumber = this.isCorp ? this.userInfo.corpBizNumber : this.userInfo.customerNumber //고객관리번호
			}

			await this.$store.dispatch('product/getCouponDownloadList', {
				customerNumber: customerNumber
			})
		},

		async getEventList() {
			if (this.loadingChk === false) {
				this.$nuxt.$loading.start()
			}

			await this['eventModules/getEventList']({
				searchCode: '10',
				pageNo: this.page,
				pageSize: this.pageSize
			})
				.then((res) => {
					if (res && res.dataList) {
						this.eventList.push(...res.dataList)
						this.loadingChk = true
					}
				})
				.finally(() => {
					this.$nuxt.$loading.finish()
				})
		},
		goEventDetail(eventNumber) {
			this.$router.push({ name: 'vehicles-benefit-EventDetail', query: { eventNumber: eventNumber } })
		},
		// 쿠폰다운로드
		async fnCouponDownload(couponCode) {
			if (!this.isLogin || !this.userInfo || (!this.isCorp && !this.userInfo.customerNumber) || (this.isCorp && !this.userInfo.corpBizNumber)) {
				let alert = {
					callback: () => {
						sessionStorage.setItem('login_redirect_url', this.$route.fullPath)
						this.$router.push('/login')
					},
					cancel: () => {}
				}
				this.$nuxt.$emit('loginCheck', alert)
			} else {
				let carBuyCount = 0
				await this.getCarPurchaseCount({ csmrMgmtNo: this.userInfo.csmrMgmtNo, saleCnttNo: '' }).then((data) => {
					if (data && data.carPurchaseCount) {
						carBuyCount = data.carPurchaseCount
					}
				})

				await this.$store
					.dispatch('product/getIssueCoupon', {
						cpnNo: couponCode,
						customerNumber: this.isCorp ? this.userInfo.corpBizNumber : this.userInfo.customerNumber, //고객관리번호
						carBuyCount: carBuyCount
					})
					.then((data) => {
						if (data && data.length > 0) {
							this.alert = { visible: true, message: '쿠폰 다운로드가 완료되었습니다.' }
						}
					})
			}
		},
		onClose() {
			this.alert.visible = false
			this.$router.go(0)
		}
	}
}
</script>
