<template>
	<div class="content vehicles promotion">
		<div v-if="!promotionEnd && !emplPrvtYn" class="promotion-rk" style="width:1200px;margin:0 auto" v-html="exhibitionData.pcExhbDtlSbc"></div>
		<div v-if="promotionEnd" class="promotion-end">
			<div class="title">아쉽지만 본 기획전은 종료되었습니다.</div>
			<nuxt-link to="/" class="btn lg blue">홈으로</nuxt-link>
		</div>
		<div v-else-if="emplPrvtYn" class="promotion-end">
			<div class="title">죄송합니다.<br />고객님은 본 기획전에 참여하실 수 없습니다.</div>
			<nuxt-link to="/" class="btn lg blue">홈으로</nuxt-link>
		</div>
		<div v-else class="promotion-wrap">
			<search-filter :filter-val="filterVal" :search-filter="exhibitionFilterList" @change="searchFilterChange" />

			<div class="promotion-top">
				<div class="take-over">
					<i class="icon-map"></i>
					나의 탁송지역
					<v-popover trigger="hover" placement="bottom-start" class="help">
						<p>
							설정한 탁송 지역을 기준으로 탁송료가 계산됩니다.
						</p>
						<v-btn slot="reference"><i class="icon-help"></i></v-btn>
					</v-popover>
					<span class="area">{{ deliveryLocalAreaName }}</span>
					<v-btn class="btn-more" @click="popDelivery = true">변경하기</v-btn>
				</div>
				<div class="filter">
					<v-select v-model="filterSelect" :data="filterSelectList" class="no-st" @change="filterSelectChange" />
				</div>
				<ul class="view-type">
					<li>
						<v-btn :class="{ active: viewType === 'card-type' }" @click="viewType = 'card-type'">
							<i class="icon-card" :class="{ on: viewType === 'card-type' }"><span class="offscreen">카드형</span></i>
						</v-btn>
					</li>
					<li>
						<v-btn :class="{ active: viewType === 'list-type' }" @click="viewType = 'list-type'">
							<i class="icon-list" :class="{ on: viewType === 'list-type' }"><span class="offscreen">리스트형</span></i>
						</v-btn>
					</li>
				</ul>
			</div>
			<div
				v-if="exhibitionCarList && exhibitionCarList.totalCount && exhibitionCarList.totalCount > 0"
				:class="viewType === 'card-type' ? 'card-type' : 'list-type'"
			>
				<car-info :car-list.sync="exhibitionCarList.discountsearchcars" :page-no="pageNo" :select-filter="filterVal" :sort-filter="filterSelect" />
			</div>
			<!-- no-search -->
			<div v-else class="no-search">
				<template v-if="loading">
					<i class="icon"></i>
					<p class="txt">선택하신 조건에 맞는 기획전 차량이 없습니다.</p>
					<v-btn type="nlink" to="/vehicles/making/model" class="btn md blue">나만의 캐스퍼 만들기</v-btn>
				</template>
			</div>
		</div>
		<delivery-select :visible="popDelivery" @close="onClose"></delivery-select>
	</div>
</template>

<script>
const Cookie = require('js-cookie')
import moment from 'moment'
import { mapGetters } from 'vuex'
import CarInfo from '~/components/page/vehicles/list/CarInfo'
import DeliverySelect from '~/components/page/vehicles/popup/DeliverySelect'
import SearchFilter from '~/components/page/vehicles/list/SearchFilter.vue'

export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 기획전',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대캐스퍼 할인, 캐스퍼 프로모션, 캐스퍼 이벤트, 캐스퍼 특가' },
				{ 'data-n-head': 'ssr', name: 'description', content: '현대 캐스퍼 기획전 차량 목록 페이지입니다. 자세한 내용은 웹사이트에서 확인해보세요.' },
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/car-list/promotion' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 기획전' },
				{ 'data-n-head': 'ssr', property: 'og:description', content: '현대 캐스퍼 기획전 차량 목록 페이지입니다. 자세한 내용은 웹사이트에서 확인해보세요.' },
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 기획전' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '현대 캐스퍼 기획전 차량 목록 페이지입니다. 자세한 내용은 웹사이트에서 확인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/car-list/promotion' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/car-list/promotion' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/car-list/promotion' }
			]
		}
	},
	components: {
		CarInfo,
		DeliverySelect,
		SearchFilter
	},
	data() {
		return {
			defaultSelect: true, //정렬필터 초기세팅값인 경우
			filterSelect: '10',
			filterSelectList: [
				{ value: '10', label: '할인금액순' },
				{ value: '20', label: '낮은가격순' },
				{ value: '30', label: '생산일순' }
			],
			viewType: 'card-type',
			popDelivery: false,
			deliveryAreaCode: 'B',
			//	deliveryAreaName: '서울시',
			deliveryLocalAreaCode: 'B0',
			deliveryLocalAreaName: '서울특별시',
			loadingChk: true,
			loading: false,
			pageNo: 1,
			pageSize: 18,
			promotionEnd: false,
			emplPrvtYn: false,
			carBodyCode: '',
			carEngineCode: '',
			carTrimCode: '',
			exteriorColorCode: '',
			interiorColorCode: '',
			deliveryCenterCode: '',
			filterVal: { carBodyCode: '', carEngineCode: '', carTrimCode: '', exteriorColorCode: '', interiorColorCode: '', deliveryCenterCode: '' },
			promotionCarHistory: [],
			prePage: '/'
		}
	},
	computed: {
		...mapGetters({
			isLogin: 'isLogin',
			exhibitionCarList: 'promotionModules/exhibitionCarList',
			exhibitionData: 'promotionModules/exhibitionData',
			exhibitionFilterList: 'promotionModules/exhibitionFilterList'
		})
	},
	watch: {
		exhibitionCarList(value) {
			const size = this.pageNo * this.pageSize - this.pageSize
			if (value && value.discountsearchcars && Object.keys(this.promotionCarHistory).length > 0 && size < value.discountsearchcars.length) {
				const isCarInfo = value.discountsearchcars.some((item, idx) => {
					if (
						this.promotionCarHistory.criterionYearMonth === item.criterionYearMonth &&
						this.promotionCarHistory.carProductionNumber === item.carProductionNumber
					) {
						setTimeout(() => {
							const scrollPosition = document.querySelectorAll('.promotion-car')[idx].offsetTop
							document.documentElement.scrollTop = scrollPosition
						}, 300)
						this.promotionCarHistory = []
						return true
					}
				})
				if (!isCarInfo) {
					if (value.discountsearchcars.length < value.totalCount) {
						this.pageNo++
						this.getCarList()
					} else {
						this.promotionCarHistory = []
						setTimeout(() => {
							let vehiclesList = document.querySelector('.vehicles-list')
							document.documentElement.scrollTop = vehiclesList.offsetTop
						}, 100)
					}
				}
			}
		}
	},
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			vm.prePage = from.path
		})
	},

	async fetch({ store, query, redirect, route }) {
		if (!query.exhbNo) {
			return redirect('/common/error/400')
		}

		await store
			.dispatch('promotionModules/EXHIBITION_VIEW', {
				exhbNo: query.exhbNo
			})
			.then((res) => {
				if (!res || (res && (res.useYn != 'Y' || (res.exhbStrtDtm && moment(new Date()).isBefore(moment(res.exhbStrtDtm)))))) {
					return redirect('/common/error/400')
				}
			})
		await store.dispatch('commonModules/GET_ADDRESS_SIDO_LIST')
	},
	async mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:기획전:프로모션',
						siteSection: '차량',
						siteSubsection: '기획전'
					}
				}
			}

			window._spaData(obj)
		})

		if (
			this.exhibitionData &&
			this.exhibitionData.useYn &&
			this.exhibitionData.useYn == 'Y' &&
			this.exhibitionData.exhbEndDtm &&
			moment(new Date()).isAfter(moment(this.exhibitionData.exhbEndDtm))
		) {
			this.promotionEnd = true
		}

		if (this.exhibitionData?.exhbScnCd === '02' && this.exhibitionData?.emplPrvtYn === 'N') {
			this.emplPrvtYn = true

			if (!this.isLogin) {
				const fromName = await this.$nuxt?.context?.from?.name
				if (sessionStorage.getItem('login_redirect_url') === this.$route.fullPath && fromName === 'login') {
					await sessionStorage.removeItem('login_redirect_url')
					await this.$router.push('/')
				}
				let alert = {
					callback: () => {
						this.fnLogin()
					},
					cancel: () => {
						this.$router.push('/')
					}
				}
				await this.$nuxt.$emit('loginCheck', alert)
			}
		}

		let promotionCarHistory = sessionStorage.getItem('promotionCarHistory')
		if (promotionCarHistory !== null) {
			if (this.prePage == '/vehicles/car-list/detail') {
				promotionCarHistory = { ...JSON.parse(promotionCarHistory) }
				this.promotionCarHistory = promotionCarHistory
				//	this.pageNo = promotionCarHistory.pageNo
				this.carBodyCode = promotionCarHistory.selectFilter.carBodyCode
				this.carEngineCode = promotionCarHistory.selectFilter.carEngineCode
				this.carTrimCode = promotionCarHistory.selectFilter.carTrimCode
				this.exteriorColorCode = promotionCarHistory.selectFilter.exteriorColorCode
				this.interiorColorCode = promotionCarHistory.selectFilter.interiorColorCode
				this.deliveryCenterCode = promotionCarHistory.selectFilter.deliveryCenterCode

				this.filterSelect = promotionCarHistory.sortFilter //정렬필터값
				this.defaultSelect = true
				this.filterVal = promotionCarHistory.selectFilter
			}
			sessionStorage.removeItem('promotionCarHistory')
		}

		if (Cookie.get(`siDoData`)) {
			const siDoData = JSON.parse(Cookie.get(`siDoData`))
			this.deliveryAreaCode = siDoData.siDoCode
			//this.deliveryAreaName = siDoData.siDoName
		}

		if (Cookie.get(`siGunData`)) {
			const siGunData = JSON.parse(Cookie.get(`siGunData`))

			this.deliveryLocalAreaCode = siGunData.siGunCode
			this.deliveryLocalAreaName = siGunData.siGunName
		}

		await this.$store.dispatch('promotionModules/EXHIBITION_FILTER_LIST', {
			exhbNo: this.$route.query.exhbNo
		})

		let exhibitionCarList = []
		this.$store.commit('promotionModules/SET_EXHIBITION_CAR_LIST', exhibitionCarList)

		await this.getCarList()

		window.addEventListener('scroll', this.handleScroll)
	},

	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			const checkWindow =
				window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop

			let size = document.body.scrollHeight - window.innerHeight

			if (
				size <= checkWindow + 100 &&
				this.exhibitionCarList &&
				this.exhibitionCarList.discountsearchcars &&
				this.exhibitionCarList.discountsearchcars.length !== 0 &&
				this.loadingChk &&
				this.exhibitionCarList.discountsearchcars.length < this.exhibitionCarList.totalCount &&
				Object.keys(this.promotionCarHistory).length == 0
			) {
				this.loadingChk = false
				this.pageNo = this.pageNo + 1
				this.getCarList()
			}
		},

		onClose(value, siDoData, siGunData) {
			this.popDelivery = value
			if (value == false && siDoData) {
				this.deliveryAreaCode = siDoData.siDoCode
				//this.deliveryAreaName = siDoData.siDoName
				this.deliveryLocalAreaCode = siGunData.siGunCode ? siGunData.siGunCode : ''
				this.deliveryLocalAreaName = siGunData.siGunName ? siGunData.siGunName : ''
				let exhibitionCarList = []
				this.$store.commit('promotionModules/SET_EXHIBITION_CAR_LIST', exhibitionCarList)
				this.pageNo = 1
				this.getCarList()
			}
		},
		filterSelectChange(filterValue) {
			if (this.defaultSelect) {
				this.defaultSelect = false
				return
			}
			let exhibitionCarList = []
			this.$store.commit('promotionModules/SET_EXHIBITION_CAR_LIST', exhibitionCarList)
			this.pageNo = 1
			this.filterSelect = filterValue
			this.getCarList()
		},
		async getCarList() {
			this.loading = false
			var exhibitionCarList = this.exhibitionCarList
			this.$nuxt.$loading.start()

			await this.$store
				.dispatch('promotionModules/EXHIBITION_CAR_LIST', {
					exhbNo: this.$route.query.exhbNo,
					sortCode: this.filterSelect,
					deliveryAreaCode: this.deliveryAreaCode ? this.deliveryAreaCode : 'B',
					deliveryLocalAreaCode: this.deliveryLocalAreaCode ? this.deliveryLocalAreaCode : 'B0',
					carBodyCode: this.carBodyCode,
					carEngineCode: this.carEngineCode,
					carTrimCode: this.carTrimCode,
					exteriorColorCode: this.exteriorColorCode,
					interiorColorCode: this.interiorColorCode,
					deliveryCenterCode: this.deliveryCenterCode,
					pageNo: this.pageNo,
					pageSize: this.pageSize
				})
				.then((res) => {
					if (exhibitionCarList && exhibitionCarList.discountsearchcars) {
						res.discountsearchcars.forEach((item) => {
							exhibitionCarList.discountsearchcars.push({ ...item, exhbNo: this.$route.query.exhbNo })
						})
						this.$store.commit('promotionModules/SET_EXHIBITION_CAR_LIST', exhibitionCarList)
					}
					this.loading = true
					this.loadingChk = true
				})
				.finally(() => {
					this.$nuxt.$loading.finish()
				})
		},
		searchFilterChange(val) {
			if (!val || !val.codeName) return

			switch (val.codeName) {
				case 'carBodyCode':
					this.carBodyCode = val.code
					this.filterVal.carBodyCode = val.code
					break
				case 'carEngineCode':
					this.carEngineCode = val.code
					this.filterVal.carEngineCode = val.code
					break
				case 'carTrimCode':
					this.carTrimCode = val.code
					this.filterVal.carTrimCode = val.code
					break
				case 'exteriorColorCode':
					this.exteriorColorCode = val.code
					this.filterVal.exteriorColorCode = val.code
					break
				case 'interiorColorCode':
					this.interiorColorCode = val.code
					this.filterVal.interiorColorCode = val.code
					break
				case 'deliveryCenterCode':
					this.deliveryCenterCode = val.code
					this.filterVal.deliveryCenterCode = val.code
					break
			}

			let exhibitionCarList = []
			this.$store.commit('promotionModules/SET_EXHIBITION_CAR_LIST', exhibitionCarList)
			this.pageNo = 1
			this.getCarList()
		},

		// 통합로그인 페이지 이동
		fnLogin() {
			sessionStorage.setItem('login_redirect_url', this.$route.fullPath)
			this.$router.push({ name: 'login' })
		}
	}
}
</script>
