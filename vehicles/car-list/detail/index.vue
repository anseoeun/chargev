<template>
	<div class="content vehicles car-list-detail">
		<div class="car-list-detail-wrap">
			<div class="car-desc">
				<div class="vr-360">
					<!-- <div class="vr">
						<v-img
							v-if="productData && productData.discountCarInfo"
							:src="
								`${CONT_PATH}/wcontents/repn-car/side-45/${productData.discountCarInfo.carCode}/exterior/${
									productData.discountCarInfo.exteriorColorCode
								}/engine/${productData.discountCarInfo.engineCode || 'G'}/l.png`
							"
						></v-img>
					</div> -->
					<iframe id="configuratorIFrame" style="width: 100%;height: 100%;" frameborder="none" scrolling="no" :src="`${CONFIGURATOR_URL}`"></iframe>
					<p class="txt">※ 사이트 내 이미지는 참고용이며 실제 차량과는 다를 수 있습니다.</p>
				</div>
				<car-summary v-if="productData" :promotion-yn="promotionYn" :product-data.sync="productData" @viewMap="viewMap" />
			</div>
			<!-- 상세 -->
			<div class="car-detail">
				<v-tab class="tab-default line" :data="tabList" :contents="true" :value="tabStatus" @change="tabChange">
					<template slot="contents">
						<div v-show="promotionYn == 'Y'" data-id="tab1">
							<!-- 상세설명 -->
							<promotion :product-data.sync="productData" />
						</div>
						<div data-id="tab2">
							<spec :product-data.sync="productData" />
						</div>
						<div data-id="tab3">
							<registration-info :promotion-yn="promotionYn" />
						</div>
						<div data-id="tab4">
							<delivery :promotion-yn="promotionYn" />
						</div>
						<div data-id="tab5">
							<take-out-info ref="takeOutInfo" :product-data.sync="productData" />
						</div>
					</template>
				</v-tab>
			</div>
			<!-- 유사차량 추천영역 -->
			<!-- <recommendation :promotion-yn="promotionYn" /> -->
		</div>
	</div>
</template>

<script>
const Cookie = require('js-cookie')
import { mapGetters, mapActions } from 'vuex'
import CarSummary from '~/components/page/vehicles/car-list/detail/Summary'
import Promotion from '~/components/page/vehicles/car-list/detail/Promotion'
import Spec from '~/components/page/vehicles/car-list/detail/Spec'
import RegistrationInfo from '~/components/page/vehicles/car-list/detail/RegistrationInfo'
import Delivery from '~/components/page/vehicles/car-list/detail/Delivery'
import TakeOutInfo from '~/components/page/vehicles/car-list/detail/TakeOutInfo'
//import Recommendation from '~/components/page/vehicles/car-list/detail/Recommendation'
export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 기획전 차량 상세',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대캐스퍼 스펙' },
				{ 'data-n-head': 'ssr', name: 'description', content: '현대캐스퍼 기획전 차량의 상세 스펙을 웹사이트에서 확인해보세요.' },
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/car-list/detail' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 기획전 차량 상세' },
				{ 'data-n-head': 'ssr', property: 'og:description', content: '현대캐스퍼 기획전 차량의 상세 스펙을 웹사이트에서 확인해보세요.' },
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 기획전 차량 상세' },
				{ 'data-n-head': 'ssr', property: 'twitter:description', content: '현대캐스퍼 기획전 차량의 상세 스펙을 웹사이트에서 확인해보세요.' },
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/car-list/detail' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://www.casper.hyundai.com/vehicles/car-list/detail' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/car-list/detail' }
			]
		}
	},
	components: {
		CarSummary,
		Promotion,
		Spec,
		RegistrationInfo,
		Delivery,
		TakeOutInfo
		//Recommendation
	},
	data() {
		return {
			tabStatus: 'tab1',
			tabList: [
				{ value: 'tab1', label: '판촉차 상세설명' },
				{ value: 'tab2', label: '차량 상세' },
				{ value: 'tab3', label: '구매 절차 안내' },
				{ value: 'tab4', label: '배달탁송/인수 안내' },
				{ value: 'tab5', label: '직접 인수 방법안내' }
			],
			productData: {},
			promotionYn: 'N',
			deliveryAreaCode: 'B',
			deliveryLocalAreaCode: 'B0',
			scroll: ''
		}
	},

	computed: {
		...mapGetters({
			productView: 'product/productView'
		})
	},
	watch: {
		$route(to) {
			if (to.query.carProductionNumber || to.query.saleModelCode) {
				this.$router.go(0)
			}
		}
	},

	async fetch({ store, redirect, route }) {
		let asgYn = 'Y'

		//할인, 전시차량 재고 정보 조회
		if (route.query.carProductionNumber) {
			const date = new Date()
			const criterionYearMonth = date.getFullYear().toString() + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1).toString()

			const param = { criterionYearMonth: criterionYearMonth, carProductionNumber: route.query.carProductionNumber }
			await store.dispatch('product/getDiscountCarInventory', param).then((res) => {
				asgYn = res && res.data && res.data.asgYn ? res.data.asgYn : 'Y'
			})

			//일반 재고차 재고정보 조회
		} else if (
			route.query.saleModelCode &&
			route.query.optionMixCode &&
			route.query.exteriorColorCode &&
			route.query.interiorColorCode &&
			route.query.deliveryCenterCode
		) {
			const param = {
				saleModelCode: route.query.saleModelCode,
				optionMixCode: route.query.optionMixCode,
				exteriorColorCode: route.query.exteriorColorCode,
				interiorColorCode: route.query.interiorColorCode,
				tuixOptionCode: '',
				contractCarTypeCode: '10', //일반재고
				productionCarNumber: '',
				deliveryCenterCode: route.query.deliveryCenterCode
			}
			await store.dispatch('product/getCarInventory', param).then((res) => {
				asgYn = res && res.data && res.data.cnt && res.data.cnt > 0 ? 'N' : 'Y'
			})
		}

		//재고 없는 경우
		if (asgYn === 'Y') {
			return redirect('/common/error/400')
		}
		await store.dispatch('commonModules/GET_ADDRESS_SIDO_LIST')
	},
	async mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:기획전:차량상세',
						siteSection: '차량',
						siteSubsection: '기획전'
					}
				}
			}

			window._spaData(obj)
		})

		const scrollManager = this.$smoothScroll
		this.scroll = scrollManager.create()

		let siDoData = { siDoCode: 'B', siDoName: '서울' }
		let siGunData = { siGunCode: 'B0', siGunName: '서울특별시' }

		if (Cookie.get(`siDoData`)) {
			siDoData = JSON.parse(Cookie.get(`siDoData`))
		} else {
			Cookie.set('siDoData', siDoData)
		}

		if (Cookie.get(`siGunData`)) {
			siGunData = JSON.parse(Cookie.get(`siGunData`))
		} else {
			Cookie.set('siGunData', siGunData)
		}

		this.deliveryAreaCode = siDoData.siDoCode
		this.deliveryLocalAreaCode = siGunData.siGunCode

		await this.getCarDetail()

		await this.setConfigurator()
	},
	methods: {
		...mapActions({
			putLateViewList: 'PUT_LATE_VIEW_LIST', // 최근 본 차 쿠키 저장
			getCarFscCd: 'estimate/getCarFscCd' // API-WX-상품서비스-088 (FSC코드 조회)
		}),
		viewMap() {
			this.tabStatus = 'tab5'
			setTimeout(() => {
				let map = document.querySelector('.map-area')
				document.documentElement.scrollTop = map.offsetTop
			}, 100)
		},
		tabChange(valueData) {
			this.tabStatus = valueData.value

			if (valueData.value == 'tab5') {
				this.$refs.takeOutInfo.kakaomapOptions.map.relayout()
				this.$refs.takeOutInfo.setBounds()
			}
		},
		async getCarDetail() {
			let params = {}
			if (this.$route.query.carProductionNumber && this.$route.query.criterionYearMonth) {
				params = {
					carProductionNumber: this.$route.query.carProductionNumber,
					criterionYearMonth: this.$route.query.criterionYearMonth,
					exhbNo: this.$route.query.exhbNo || '',
					deliveryAreaCode: this.deliveryAreaCode,
					deliveryLocalAreaCode: this.deliveryLocalAreaCode
				}
			} else if (
				this.$route.query.saleModelCode &&
				this.$route.query.optionMixCode &&
				this.$route.query.exteriorColorCode &&
				this.$route.query.interiorColorCode &&
				this.$route.query.deliveryCenterCode
			) {
				//일반 재고차 차량상세 조회
				params = {
					saleModelCode: this.$route.query.saleModelCode,
					optionMixCode: this.$route.query.optionMixCode,
					exteriorColorCode: this.$route.query.exteriorColorCode,
					interiorColorCode: this.$route.query.interiorColorCode,
					deliveryCenterCode: this.$route.query.deliveryCenterCode,
					deliveryAreaCode: this.deliveryAreaCode,
					deliveryLocalAreaCode: this.deliveryLocalAreaCode,
					contractCarTypeCode: '10' //일반재고
				}
			}
			await this.$store.dispatch('product/getProductView', params)
			if (this.productView && this.productView.api_wx_product_058 && this.productView.api_wx_product_058.data) {
				this.productData = this.productView.api_wx_product_058.data
			} else if (this.productView && this.productView.api_wx_product_082 && this.productView.api_wx_product_082.data) {
				this.productData = this.productView.api_wx_product_082.data
			}

			this.tabList = []

			if (this.productData.discountCarInfo && this.productData.discountCarInfo.discountTypeCode && this.productData.discountCarInfo.discountTypeCode == '04') {
				this.promotionYn = 'Y'
				this.tabList.push({ value: 'tab1', label: '기획전 차량 안내' })
				this.tabStatus = 'tab1'
			} else {
				this.promotionYn = 'N'
				this.tabStatus = 'tab2'
			}
			this.tabList.push({ value: 'tab2', label: '차량 상세' }, { value: 'tab3', label: '구매 절차 안내' })

			if (
				this.productData.discountCarInfo &&
				this.productData.discountCarInfo.agencyCode &&
				this.productData.discountCarInfo.discountTypeCode &&
				this.productData.discountCarInfo.discountTypeCode == '05'
			) {
				this.tabList.push({ value: 'tab5', label: '직접 인수 방법안내' })
			} else {
				this.tabList.push({ value: 'tab4', label: '배달탁송/인수 안내' })
			}

			//할인차 유사사양 추천리스트
			this.$store.commit('product/getStockCarSimilar', {})
			if (this.productData.discountCarInfo) {
				const params = {
					saleModelCode: this.productData.discountCarInfo.saleModelCode,
					exteriorColorCode: this.productData.discountCarInfo.exteriorColorCode,
					interiorColorCode: this.productData.discountCarInfo.interiorColorCode,
					optionMixCode: this.productData.discountCarInfo.optionMixCode,
					carProductionNumber: this.productData.discountCarInfo.carProductionNumber,
					deliveryAreaCode: this.deliveryAreaCode,
					deliveryLocalAreaCode: this.deliveryLocalAreaCode
				}
				await this.$store.dispatch('product/getStockCarSimilar', params)
			}

			//최근본차 저장
			this.lateViewCarSave()
		},
		lateViewCarSave() {
			const discountCarInfo = this.productData.discountCarInfo
			if (!discountCarInfo) return
			// 최근 본 차 쿠키 저장

			this.putLateViewList({
				criterionYearMonth: this.$route.query.criterionYearMonth || '',
				carProductionNumber: this.$route.query.carProductionNumber || '',
				saleModelCode: discountCarInfo.saleModelCode,
				optionMixCode: discountCarInfo.optionMixCode,
				exteriorColorCode: discountCarInfo.exteriorColorCode,
				interiorColorCode: discountCarInfo.interiorColorCode,
				deliveryCenterCode: discountCarInfo.deliveryCenterCode,
				estimationNumber: '',
				tuixOptionCode: discountCarInfo.tuixOptionCode ? discountCarInfo.tuixOptionCode : '',
				totalPrice: discountCarInfo.carPrice - discountCarInfo.discountPrice,
				linkType: ''
			})
		},
		// ,
		// topAnimation() {
		// 	setTimeout(() => {
		// 		let detail = document.querySelector('.car-list-detail')
		// 		document.documentElement.scrollTop = detail.offsetTop
		// 	}, 100)
		// }

		// 컨피규레이터 세팅
		setConfigurator() {
			this.$nuxt.$loading.start()
			const render = document.getElementById('configuratorIFrame')
			// FSC코드 조회
			this.getCarFscCd({
				saleModelCode: this.productData.discountCarInfo.saleModelCode,
				optionCode: this.productData.discountCarInfo.optionMixCode,
				saleSpecCode: ''
			}).then((data) => {
				if (data) {
					let postData = {
						nationcd: data.NATCD,
						fscgen: data.FSCTMMSCD,
						extcolor: this.productData.discountCarInfo.exteriorColorCode,
						intcolor: this.productData.discountCarInfo.interiorColorCode,
						browser: '0',
						ui_on: '0'
					}

					render?.contentWindow?.postMessage(postData, '*')

					const width = this.$el.querySelector('.vr-360').offsetWidth
					render.style.height = width * 0.56 + 'px'
				}
			})

			this.$nuxt.$loading.finish()
		}
	}
}
</script>
