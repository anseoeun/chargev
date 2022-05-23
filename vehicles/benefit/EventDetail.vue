<template>
	<div class="content purchase-benefit event-detail">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="구매 혜택" page-infotext="다양한 혜택을 통해 캐스퍼를 구매하세요." />

		<div v-if="eventInfo" class="event-wrap">
			<strong class="title">{{ eventInfo.eventName }}</strong>
			<div class="event-header">
				<div v-if="eventInfo.eventStartDate && eventInfo.eventFinishDate" class="date">
					{{ eventInfo.eventStartDate | date('YYYY.MM.DD') }}~{{ eventInfo.eventFinishDate | date('YYYY.MM.DD') }}
				</div>
				<div v-if="eventList.length > 0 && findEventNumber" class="select">
					<v-select ref="eventSelectRef" v-model="eventNumber" value-key="eventNumber" label-key="eventName" :data="eventList" @change="changeEvent" />
				</div>
				<div v-else-if="totalEventList.length > 0 && !findEventNumber && pastEvent" class="select">
					<v-select ref="eventSelectRef" v-model="eventNumber" value-key="eventNumber" label-key="eventName" :data="totalEventList" @change="changeEvent" />
				</div>
			</div>
			<div class="event-detail">
				<div ref="eventDetail" class="event-view" v-html="eventInfo.pcEventDetailSubstance">
					<!-- <v-img :src="require('~/assets/images/temp/temp-event-detail.jpg')"></v-img> -->
				</div>
				<input id="couponDownloadCopy" type="button" style="display:none;" @click="fnCouponDownload()" />
				<input id="couponDownloadEventNo" type="hidden" />
				<div class="btn-box">
					<v-btn class="btn lg blue" @click="$router.push('/vehicles/benefit/Event')">목록</v-btn>
				</div>
			</div>
		</div>

		<!-- ALERT 팝업 -->
		<v-popup
			popup-text-align="center"
			popup-type="alert"
			top="35vh"
			:visible="alert.visible"
			:footer="alert.footer"
			@confirm="alert.callback"
			@cancel="alert.cancel"
			@close="alert.cancel"
		>
			<template slot="body">
				<span v-html="alert.message"></span>
			</template>
		</v-popup>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { dateFilter } from 'vue-date-fns'

export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 이벤트 & 프로모션',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대캐스퍼 출시, 현대캐스퍼 출시일, CASPER 출시, 캐스퍼 프로모션' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content: '현대자동차 캐스퍼 출시, 구매 혜택 등 다양한 이벤트 및 프로모션을 공식 웹사이트에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/benefit/EventDetail' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 이벤트 & 프로모션' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '현대자동차 캐스퍼 출시, 구매 혜택 등 다양한 이벤트 및 프로모션을 공식 웹사이트에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 이벤트 & 프로모션' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '현대자동차 캐스퍼 출시, 구매 혜택 등 다양한 이벤트 및 프로모션을 공식 웹사이트에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/benefit/EventDetail' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/benefit/EventDetail' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/benefit/Detail' }
			]
		}
	},
	components: {},
	filters: {
		date: dateFilter
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '구매', link: '/' },
				{ linkName: '구매혜택', link: '/' }
			],
			eventNumber: '',
			page: 1,
			pageSize: 10,
			eventList: [],
			eventInfo: {},
			loadingChk: true,
			findEventNumber: false,
			pastEvent: false,
			totalEventList: [],
			cpnNo: '',
			alert: {}
		}
	},
	computed: {
		...mapGetters({
			isLogin: 'isLogin',
			userInfo: 'userInfo',
			//	eventInfo: 'eventModules/eventInfo',
			event: 'eventModules/eventList'
		})
	},

	watch: {
		$route(to) {
			if (to.query.eventNumber) {
				this.getEventInfo(to.query.eventNumber)

				//진행중인 이벤트 목록에 없는 경우
				if (this.eventList.findIndex((el) => el.eventNumber === to.query.eventNumber) === -1) {
					this.page = 0
					this.findEventNumber = false
					this.pastEvent = false
					this.totalEventList = []
					this.eventList = []
				} else {
					this.findEventNumber = true
				}
			}
		},
		eventList(val) {
			if (!this.findEventNumber && this.eventList.findIndex((el) => el.eventNumber === this.$route.query.eventNumber) === -1) {
				if (this.eventList.length < this.event.totalCount) {
					this.page = this.page + 1
					this.getEventList()
				} else {
					this.pastEvent = true
					this.totalEventList.push(this.eventInfo)
					this.totalEventList.push(...this.eventList)
					setTimeout(() => {
						const selectScroller = this.$refs.eventSelectRef?.$el.querySelector('.el-select-dropdown__wrap')
						selectScroller?.addEventListener('scroll', this.handleScroll)
					}, 100)
				}
			} else {
				this.findEventNumber = true
				setTimeout(() => {
					const selectScroller = this.$refs.eventSelectRef?.$el.querySelector('.el-select-dropdown__wrap')
					selectScroller?.addEventListener('scroll', this.handleScroll)
				}, 100)
			}
		}
	},

	async mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:구매 혜택:이벤트&프로모션:상세',
						siteSection: '차량',
						siteSubsection: '구매 혜택'
					}
				}
			}

			window._spaData(obj)
		})

		await this.getEventInfo(this.$route.query.eventNumber)
		await this.getEventList()

		await this.$EventBus.$on('alertLayer', (obj) => {
			this.alert = {
				visible: obj.visible,
				footer: obj.footer,
				message: obj.message,
				callback: () => {
					this.alert.visible = false
					obj.callback()
				},
				cancel: () => {
					this.alert.visible = false
					obj.cancel()
				}
			}
		})

		await this.$nextTick(() => {
			const couponDownBtn = this.$refs.eventDetail?.querySelector('#couponDownload')
			const couponDownloadVal = this.$refs.eventDetail?.querySelector('#couponDownloadVal')
			if (couponDownBtn) {
				this.cpnNo = couponDownloadVal?.value || ''
				if (this.eventInfo.expireYn === 'Y') {
					couponDownBtn?.addEventListener('click', function(event) {
						event.preventDefault()
						let alert = {
							visible: true,
							footer: ['confirm'],
							message: '쿠폰 다운로드 기간이 아닙니다.',
							callback: () => {},
							cancel: () => {}
						}
						this.$EventBus.$emit('alertLayer', alert)
					})
				} else {
					this.postIssuePartnersCoupon({
						cpnNo: this.cpnNo,
						downloadYn: 'N'
					}).then((result) => {
						if (result && result.EXPIREDYN === 'N') {
							couponDownBtn?.addEventListener('click', function(event) {
								event.preventDefault()
								document.querySelector('#couponDownloadCopy').click()
							})
						} else {
							couponDownBtn?.addEventListener('click', function(event) {
								event.preventDefault()
								let alert = {
									visible: true,
									footer: ['confirm'],
									message: '쿠폰 다운로드 기간이 아닙니다.',
									callback: () => {},
									cancel: () => {}
								}
								this.$EventBus.$emit('alertLayer', alert)
							})
						}
					})
				}
			}
		})
	},
	beforeDestroy() {
		const selectScroller = this.$refs.eventSelectRef?.$el.querySelector('.el-select-dropdown__wrap')
		selectScroller?.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		...mapActions(['eventModules/getEventList']),
		...mapActions({ postIssuePartnersCoupon: 'product/postIssuePartnersCoupon' }),
		handleScroll() {
			const scoller = this.$refs.eventSelectRef.$el.querySelector('.el-select-dropdown__wrap')
			const scrollTop = scoller.scrollTop

			const scrollHeight = scoller.scrollHeight

			const size = scrollHeight - scoller.clientHeight

			if (
				size <= scrollTop + 30 &&
				this.eventList &&
				this.eventList.length !== 0 &&
				this.loadingChk &&
				this.eventList.length < this.event.totalCount &&
				this.findEventNumber
			) {
				this.loadingChk = false
				this.page = this.page + 1
				this.getEventList()
			}
		},
		async getEventList() {
			this.$nuxt.$loading.start()

			await this['eventModules/getEventList']({
				searchCode: '10', //진행중인 이벤트
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
		changeEvent(value) {
			if (this.$route.query.eventNumber === value) return
			this.findEventNumber = true
			this.$router.push({ name: 'vehicles-benefit-EventDetail', query: { eventNumber: value } })
		},
		async getEventInfo(value) {
			await this.$store
				.dispatch('eventModules/getEventInfo', {
					eventNumber: value
				})
				.then((res) => {
					if (!res || res.useYn != 'Y') {
						return this.$router.push('/error/400')
					} else {
						this.eventNumber = value
						this.eventInfo = res
					}
				})
		},

		fnCouponDownload() {
			if (!this.isLogin) {
				let alert = {
					callback: () => {
						sessionStorage.setItem('login_redirect_url', this.$route.fullPath)
						this.$router.push('/login')
					},
					cancel: () => {}
				}
				this.$nuxt.$emit('loginCheck', alert)
			} else {
				if (this.isLogin && !this.userInfo.customerNumber) {
					this.$nuxt.$loading.start()
					// 5초마다 만복
					let count = 0
					const polling = setInterval(async () => {
						count++
						const [res, err] = await this.$store.dispatch('commonModules/POST_REQ_CSMR_MGMTNO')
						if (err) return
						if (!res.data.csmrMgmtNo && count === 5) {
							// 고객관리번호 없으면 메인이동
							this.$nuxt.$loading.finish()
							this.$alert('일시적으로 접속이 원활하지 않습니다. 다시 시도해주세요.')
							clearInterval(polling) // 25초지나면 stop
							// end
						} else if (res.data.csmrMgmtNo) {
							//고객관리번호 있으면 로딩 종료
							this.userInfo.customerNumber = res.data.csmrMgmtNo
							this.$nuxt.$loading.finish()
							clearInterval(polling)
							this.fnCouponDownload()
						}
					}, 5000)
				} else {
					this.$nuxt.$loading.start()
					this.postIssuePartnersCoupon({
						cpnNo: this.cpnNo
					}).then((result) => {
						this.$nuxt.$loading.finish()

						if (result && result.rspCode == '0000') {
							let alert = {
								visible: true,
								footer: ['confirm'],
								message: '쿠폰이 발급 되었습니다.</br>쿠폰번호: ' + result.cpnNo + '</br>쿠폰번호는 마이페이지의 쿠폰 내역에서도 확인할 수 있습니다.',
								callback: () => {},
								cancel: () => {}
							}
							this.$EventBus.$emit('alertLayer', alert)
						} else if (result && result.rspCode == 'EXP.2012') {
							let alert = {
								visible: true,
								footer: ['confirm'],
								message: result.rspMessage,
								callback: () => {
									this.$router.push('/mypage/coupon')
								},
								cancel: () => {}
							}
							this.$EventBus.$emit('alertLayer', alert)
						} else {
							let alert = {
								visible: true,
								footer: ['confirm'],
								message: result.rspMessage,
								callback: () => {},
								cancel: () => {}
							}
							this.$EventBus.$emit('alertLayer', alert)
						}
					})
				}
			}
		}
	}
}
</script>
