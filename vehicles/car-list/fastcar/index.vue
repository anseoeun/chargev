<template>
	<div class="content vehicles promotion fastcar">
		<v-pageheader
			:top-breadcrumb="topBreadcrumb"
			page-title="빠른 출고차"
			page-infotext="다른 고객님의 사양/배송지 변경으로 발생한 출고 대기 차량으로 기다림 없이 빠른 출고가 가능합니다.<br />출고 센터에서 탁송 지역까지 원거리일 경우 탁송 기간이 더 소요될 수 있습니다."
		/>
		<div>
			<div class="promotion-wrap">
				<search-filter :filter-val="filterVal" :search-filter="fastDeliveryFilterList" @change="searchFilterChange" />

				<div class="promotion-top">
					<div class="take-over">
						<span class="total">전체 {{ (fastDeliveryList && fastDeliveryList.totalCount) || 0 }}개</span>
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
					v-if="fastDeliveryList && fastDeliveryList.totalCount && fastDeliveryList.totalCount > 0"
					:class="viewType === 'card-type' ? 'card-type' : 'list-type'"
				>
					<car-info :car-list="fastDeliveryList.searchcars" :page-no="pageNo" :select-filter="filterVal" :sort-filter="filterSelect" />
				</div>
				<!-- no-search -->
				<div v-else class="no-search">
					<template v-if="loading">
						<i class="icon"></i>
						<p class="txt">빠른 출고 가능한 차가 없습니다.</p>
						<v-btn type="nlink" to="/vehicles/making/model" class="btn md blue">나만의 캐스퍼 만들기</v-btn>
					</template>
				</div>
				<v-pagination :total="fastDeliveryList.totalCount" :page="pageNo" :size="pageSize" @page-change="pageChange" />
			</div>
			<delivery-select :visible="popDelivery" @close="onClose"></delivery-select>
		</div>
	</div>
</template>

<script>
const Cookie = require('js-cookie')
import { mapGetters } from 'vuex'
import CarInfo from '~/components/page/vehicles/list/CarInfo'
import DeliverySelect from '~/components/page/vehicles/popup/DeliverySelect'
import SearchFilter from '~/components/page/vehicles/list/SearchFilter.vue'

export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 빠른 출고차'
		}
	},
	components: {
		CarInfo,
		DeliverySelect,
		SearchFilter
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '구매', link: '/' },
				{ linkName: '빠른 출고차', link: '/vehicles/car-list/fastcar' }
			],
			carCode: 'AX01',
			defaultSelect: true, //정렬필터 초기세팅값인 경우
			filterSelect: '20',
			filterSelectList: [
				{ value: '20', label: '낮은가격순' },
				{ value: '10', label: '높은가격순' }
			],
			viewType: 'card-type',
			popDelivery: false,
			deliveryAreaCode: 'B',
			//deliveryAreaName: '서울시',
			deliveryLocalAreaCode: 'B0',
			deliveryLocalAreaName: '서울특별시',
			pageNo: 1,
			pageSize: 18,
			carBodyCode: '',
			carEngineCode: '',
			carTrimCode: '',
			exteriorColorCode: '',
			interiorColorCode: '',
			deliveryCenterCode: '',
			loading: false,
			//selectFilter: { carEngineCode: '', carTrimCode: '', exteriorColorCode: '', interiorColorCode: '', deliveryCenterCode: '' },
			filterVal: { carBodyCode: '', carEngineCode: '', carTrimCode: '', exteriorColorCode: '', interiorColorCode: '', deliveryCenterCode: '' },
			fastCarHistory: [],
			prePage: '/'
		}
	},
	computed: {
		...mapGetters({
			fastDeliveryList: 'product/fastDeliveryList',
			fastDeliveryFilterList: 'product/fastDeliveryFilterList'
		})
	},
	watch: {
		fastDeliveryList(value) {
			if (value && value.searchcars && Object.keys(this.fastCarHistory).length > 0) {
				const isCarInfo = value.searchcars.some((item, idx) => {
					if (
						this.fastCarHistory.saleModelCode == item.saleModelCode &&
						this.fastCarHistory.optionMixCode == item.optionMixCode &&
						this.fastCarHistory.exteriorColorCode == item.exteriorColorCode &&
						this.fastCarHistory.interiorColorCode == item.interiorColorCode &&
						this.fastCarHistory.deliveryCenterCode == item.deliveryCenterCode
					) {
						return true
					}
				})

				if (!isCarInfo) {
					if (value.searchcars.length === 0) {
						this.pageNo = 1
						this.getCarList()
					} else {
						setTimeout(() => {
							let vehiclesList = document.querySelector('.vehicles-list')
							document.documentElement.scrollTop = vehiclesList.offsetTop
						}, 100)
					}
				}

				this.fastCarHistory = []
			}
		}
	},

	beforeRouteEnter(to, from, next) {
		next((vm) => {
			vm.prePage = from.path
		})
	},

	async fetch({ store, query, redirect, route }) {
		await store.dispatch('commonModules/GET_ADDRESS_SIDO_LIST')
	},
	async mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:기획전:빠른 출고차 찾기',
						siteSection: '차량',
						siteSubsection: '기획전'
					}
				}
			}

			window._spaData(obj)
		})

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

		// 00~01시, 06~08시 빠른출고차 재고 미노출
		const todyTimeHour = this.srvTimeHour()
		//let todyTimeHour = new Date().getHours()
		if ((todyTimeHour >= 0 && todyTimeHour < 1) || (todyTimeHour >= 6 && todyTimeHour < 8)) {
			this.loading = true
			let fastDeliveryList = []
			this.$store.commit('product/getFastDeliveryList', fastDeliveryList)
			this.$store.commit('product/getFastDeliveryFilterList', {})
			return
		}

		let fastCarHistory = sessionStorage.getItem('fastCarHistory')
		if (fastCarHistory !== null) {
			if (this.prePage == '/vehicles/car-list/detail') {
				fastCarHistory = { ...JSON.parse(fastCarHistory) }

				this.fastCarHistory = fastCarHistory
				this.pageNo = fastCarHistory.pageNo
				this.carBodyCode = fastCarHistory.selectFilter.carBodyCode
				this.carEngineCode = fastCarHistory.selectFilter.carEngineCode
				this.carTrimCode = fastCarHistory.selectFilter.carTrimCode
				this.exteriorColorCode = fastCarHistory.selectFilter.exteriorColorCode
				this.interiorColorCode = fastCarHistory.selectFilter.interiorColorCode
				this.deliveryCenterCode = fastCarHistory.selectFilter.deliveryCenterCode

				this.filterSelect = fastCarHistory.sortFilter //정렬필터값
				this.defaultSelect = true
				this.filterVal = fastCarHistory.selectFilter
			}
			sessionStorage.removeItem('fastCarHistory')
		}

		await this.$store.dispatch('product/getFastDeliveryFilterList', {
			carCode: this.carCode
		})

		await this.getCarList()
	},
	methods: {
		pageChange(page) {
			this.pageNo = page
			this.getCarList()
		},

		onClose(value, siDoData, siGunData) {
			this.popDelivery = value
			if (value == false && siDoData) {
				this.deliveryAreaCode = siDoData.siDoCode
				//this.deliveryAreaName = siDoData.siDoName
				this.deliveryLocalAreaCode = siGunData.siGunCode ? siGunData.siGunCode : ''
				this.deliveryLocalAreaName = siGunData.siGunName ? siGunData.siGunName : ''
				this.pageChange(1)
			}
		},
		filterSelectChange(filterValue) {
			if (this.defaultSelect) {
				this.defaultSelect = false
				return
			}
			this.filterSelect = filterValue
			this.pageChange(1)
		},
		async getCarList() {
			// 00~01시, 06~08시 빠른출고차 재고 미노출
			const todyTimeHour = this.srvTimeHour()
			//let todyTimeHour = new Date().getHours()
			if ((todyTimeHour >= 0 && todyTimeHour < 1) || (todyTimeHour >= 6 && todyTimeHour < 8)) {
				return
			} else {
				this.$nuxt.$loading.start()
				await this.$store
					.dispatch('product/getFastDeliveryList', {
						carCode: this.carCode,
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
					.finally(() => {
						this.loading = true
						this.$nuxt.$loading.finish()
					})
			}
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
			this.pageChange(1)
		},
		srvTimeHour() {
			const xhr = new XMLHttpRequest()
			xhr.open('GET', location.href, false)
			xhr.setRequestHeader('Content-Type', 'text/html')
			xhr.send('')
			var st = xhr.getResponseHeader('Date') // 한국 시간 -9
			var today = new Date(st)
			const utc = today.getTime() + today.getTimezoneOffset() * 60 * 1000
			const krTimeDiff = 9 * 60 * 60 * 1000
			var todayHour = new Date(utc + krTimeDiff).getHours() // 한국 시간 +9
			console.log(todayHour)

			return todayHour
		}
	}
}
</script>
