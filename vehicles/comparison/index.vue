<template>
	<div class="content vehicles model">
		<v-pageheader page-title="모델비교" page-infotext="캐스퍼와 다른 차량을 비교해 보세요." :top-breadcrumb="topBreadcrumb" />

		<div class="car-model-wrap">
			<!-- comparision-model -->
			<div ref="fix" class="comparision-model-wrap">
				<div class="comparision-model">
					<div class="model-wrap">
						<div class="top-info-menu small-hide">
							<div class="left"><span class="txt">엔진 및 세부 등급은 가장 낮은 가격 기준으로 기본 선택되며, 아래에서 각 차량 별 변경 가능합니다.</span></div>
							<div class="right">
								<v-btn class="btn md blue line" type="button" :disabled="btnDisabled" @click="setEq">동급차량 비교</v-btn>
								<v-btn class="btn md blue line" type="button" :disabled="btnDisabled" @click="setCompares">자주 선택되는 차량 비교</v-btn>
								<v-btn class="btn md blue line" type="button" :disabled="btnDisabled" @click="deleteCarData(0)">
									전체 초기화
									<i class="icon-reset"></i>
								</v-btn>
							</div>
						</div>
						<div class="model-list">
							<ul>
								<template>
									<li v-for="(carData, index) in defaultCarDatas" :key="index">
										<!-- 차량선택 -->
										<div v-if="carData.caridx !== '-1'" class="desc">
											<v-btn v-if="index > 0" class="delete" @click="deleteCarData(index)">
												<span class="offscreen">삭제</span>
											</v-btn>
											<div class="logo">{{ carData.makercode === '1010' ? '현대' : carData.maker }}</div>
											<div class="car-name">{{ carData.carnamekr }}</div>
											<div class="car-img small-hide">
												<v-img
													v-if="carData.imgn && carData.imgn !== ''"
													:src="`${CONT_PATH}/wcontents/comparison/${carData.imgn}`"
													:alt="carData.carnamekr"
													@error="carData.imgn = null"
												></v-img>
												<template v-else>
													<div class="no-img">
														<v-img :src="require('~/assets/images/vehicles/img-no-car.png')" alt="임시이미지"></v-img>
														<p>이미지 준비중</p>
													</div>
												</template>
											</div>
											<div class="select small-hide">
												<v-select
													v-model="selectedTrim[index]"
													:data="trims[index]"
													:first-select="true"
													value-key="juyotrim"
													label-key="juyotrim"
													placeholder="선택하세요"
													@change="onChangeTrim(index)"
												/>
												<v-select
													v-model="selectedTrimDetail[index]"
													:data="trimDetails[index]"
													:first-select="true"
													value-key="trimidx"
													label-key="trimname"
													placeholder="선택하세요"
													@change="onChangeDetail(index, selectedTrimDetail[index])"
												/>
											</div>
											<ul class="matching-list small-hide">
												<li>
													<div class="tit">차량가격</div>
													<div class="txt auto">
														<b>{{ Number(trimPrices[index]).toLocaleString() }}</b>
														<span class="unit">원</span>
													</div>
												</li>
												<li>
													<div class="tit">유지비용({{ driveDaySelected }}년)</div>
													<div class="txt auto">
														<b>{{ carMaintenances[index].mprice | comma }}</b>
														<span class="unit">원</span>
													</div>
												</li>
											</ul>
											<div class="total-price">
												<div class="account">
													<div class="tit">총 구입 비용</div>
													<div class="price">
														<b>{{ totalPrice(index) | comma }}</b>
														<span class="unit">원</span>
													</div>
												</div>
												<div v-if="parseInt(totalPrice(0)) !== parseInt(totalPrice(index))" class="margin">
													<span v-if="parseInt(totalPrice(0)) > parseInt(totalPrice(index))" class="down">
														{{ (totalPrice(0) - totalPrice(index)) | comma }} 원
													</span>
													<span v-if="parseInt(totalPrice(0)) < parseInt(totalPrice(index))" class="up">
														{{ (totalPrice(index) - totalPrice(0)) | comma }} 원
													</span>
												</div>
											</div>
											<button v-if="index === 0" type="button" class="btn md blue" @click="moveCasper(index)">나만의 캐스퍼 만들기</button>
											<button v-if="index !== 0" type="button" class="btn md blue" @click="addCar(index, 'edit')">
												변경하기
											</button>
										</div>
										<!-- 차량 선택 X && 트림비교 X -->
										<div v-else-if="carData.caridx === '-1'" class="car-select">
											<div class="text">
												<i class="icon"></i>
												<p class="txt">
													비교할 차량을
													<br />
													선택해 주세요
												</p>
											</div>
											<v-btn v-if="index === 0" class="btn md white" type="button" :disabled="true" @click="addCar(index)">선택하기</v-btn>
											<v-btn v-else :disabled="defaultCarDatas[0].caridx === '-1'" class="btn md white" type="button" @click="addCar(index)">선택하기</v-btn>
										</div>
									</li>
								</template>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- // comparision-model -->

			<div class="comparision-model-result">
				<!-- 성능 제원 -->
				<perfomance-detail :details="details" />
				<!-- 경제성/환경 -->
				<economic-detail ref="eco" :details="details" @onChangeCostByData="onChangeCostByData" />
				<!-- 충돌/안전 -->
				<!-- <safety-detail :details="details" /> -->
				<!-- 기본품목 -->
				<spec-detail :details="details" />
				<!-- 구입비용 -->
				<price-detail ref="discount" :sale-model-codes="saleModelCodes" :env-modes="envModes" :trim-params="trimParams" :details="details" />
			</div>
		</div>

		<!-- 유의사항 -->
		<div class="notice-wrap col">
			<strong class="title">유의사항</strong>
			<ul class="bullet-list">
				<li>사이트 내 자동차 이미지는 참고용으로 구매 시점과 제조사 수시 변경으로 판매차량과 다를 수 있으니 해당 모델 판매점에 확인바랍니다.</li>
				<li
					>사이트 내 내용은 고객님의 차량 구매 의사 결정에 도움을 드리고자 제공하는 서비스로 법적인 효력이 없으며, 실제 구매 시 가격 및 조건에 따라 차이가 있을
					수 있습니다.</li
				>
				<li>사이트 내 차량별 비교 정보는 각 제조업체의 카탈로그 및 홈페이지에 공개된 자료를 바탕으로 작성 되었습니다.</li>
				<li>지속적으로 최신정보를 갱신하고 있으나 간혹 업데이트가 늦어지는 경우가 발생할 수 있습니다.</li>
			</ul>
		</div>
		<!-- // 유의사항 -->

		<!-- 차량비교 팝업 -->
		<comparison-pop
			ref="comparisonPopup"
			:visible="comparisonPop"
			:selected-idx.sync="selectedIdx"
			:is-change.sync="isChange"
			@trimReset="trimReset"
			@deleteCarData="deleteCarData"
			@changeDefaultCar="changeDefaultCar"
			@close="comparisonPop = false"
			@popFrequentlyCoparison="frequentlyCoparisonPop = true"
		/>
		<!-- 공채 안내 -->
		<frequently-coparison :visible="frequentlyCoparisonPop" @close="frequentlyCoparisonPop = false" />
	</div>
</template>

<script>
import * as compareStore from '~/store/comparison'
import * as compareTypes from '~/store/comparison/types'
import PerfomanceDetail from '~/components/page/vehicles/comparison/PerfomanceDetail'
import EconomicDetail from '~/components/page/vehicles/comparison/EconomicDetail'
// import SafetyDetail from '~/components/page/vehicles/comparison/SafetyDetail'
import SpecDetail from '~/components/page/vehicles/comparison/SpecDetail'
import PriceDetail from '~/components/page/vehicles/comparison/PriceDetail'
import ComparisonPop from '~/components/page/vehicles/comparison/popup/Comparison'
import FrequentlyCoparison from '~/components/page/vehicles/comparison/popup/FrequentlyCoparison'
export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 모델비교',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '연비 좋은 SUV, 소형 SUV, 경차 SUV, 캐스퍼 옵션' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content: '현대 경차 SUV 캐스퍼와 다양한 차종을 비교해보세요. 성능, 제원, 연비, 가격 등 캐스퍼의 상세 옵션을 확인하세요'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/comparison' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 모델비교' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '현대 경차 SUV 캐스퍼와 다양한 차종을 비교해보세요. 성능, 제원, 연비, 가격 등 캐스퍼의 상세 옵션을 확인하세요'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 모델비교' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '현대 경차 SUV 캐스퍼와 다양한 차종을 비교해보세요. 성능, 제원, 연비, 가격 등 캐스퍼의 상세 옵션을 확인하세요'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/comparison' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/comparison' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/comparison' }
			]
		}
	},
	components: {
		PerfomanceDetail,
		EconomicDetail,
		// SafetyDetail,
		SpecDetail,
		PriceDetail,
		ComparisonPop,
		FrequentlyCoparison
	},
	filters: {
		comma(val) {
			return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		}
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '소개', link: '/' },
				{ linkName: '모델비교', link: '/' }
			],
			comparisonPop: false, // 차량비교 팝업
			frequentlyCoparisonPop: false, // 자주 비교되는 차량 팝업
			selectedIdx: 0, // 비교차량 선택 인덱스
			selectedMaker: '', // 제조사 코드
			selectedTrim: ['-', '-', '-', '-'], // 선택 트림
			selectedTrimDetail: ['-', '-', '-', '-'], // 선택
			trimPrices: [0, 0, 0, 0],
			selectedCarDatas: [null, null, null, null],
			saleModelCodes: ['', '', '', ''],
			selectedTrimDetailName: ['', '', '', ''],
			envModes: [],
			trimParams: [
				{
					trimidx: '-',
					carprice: '',
					trimcd1: '',
					envMode: ''
				},
				{
					trimidx: '-',
					carprice: '',
					trimcd1: '',
					envMode: ''
				},
				{
					trimidx: '-',
					carprice: '',
					trimcd1: '',
					envMode: ''
				},
				{
					trimidx: '-',
					carprice: '',
					trimcd1: '',
					envMode: ''
				}
			],

			driveDaySelected: '3', // 경제성/환경 운행기간
			driveDistSelected: '20000', // 경제성/환경 운행거리
			selectedCondi: 'A',
			multichildChecked: false, // 다자녀 감면 체크

			isChange: false,
			editTemp: null,

			btnDisabled: false
		}
	},
	computed: {
		...compareStore.mapGetters({
			makers: compareTypes.makers, // EP_IF_카젠시_001(제조사 리스트 조회)
			makerCars: compareTypes.makerCars, // EP_IF_카젠시_002(제조사별 모델리스트 조회)
			defaultCarDatas: compareTypes.defaultCarDatas, // store 모델비교 차량 세팅 리스트
			trims: compareTypes.trims, // EP_IF_카젠시_004(차량별 엔진/세부등급 리스트)
			compares: compareTypes.compares, // EP_IF_카젠시_003(자주비교되는 차량리스트)
			trimDetails: compareTypes.trimDetails, // store 모델비교 차량 트림 상세 리스트
			carMaintenances: compareTypes.carMaintenances, // store 모델비교 차량 가격 정보 리스트
			carRegistTaxs: compareTypes.carRegistTaxs, // store 모델비교 차량 비용 정보 리스트
			ecoAssistPrices: compareTypes.ecoAssistPrices, // 친환경차 보조금
			details: compareTypes.details, // EP_IF_카젠시_005(트림별 상세제원)
			casperInit: 'casperInit', // 캐스퍼 초기(1.0 가솔린 스마트)
			casperTrim: 'casperTrim', // 캐스퍼 동급차량 비교(1.0 가솔린 모던)
			rayTrim: 'rayTrim', // 레이 동급차량 비교(1.0 가솔린 시그니처)
			morningTrim: 'morningTrim', // 모닝 동급차량 비교(1.0 가솔린 시그니처)
			sparkTrim: 'sparkTrim', // 스파크 동급차량 비교(1.0 가솔린 프리미어 C-tech(a/t))
			casper2Trim: 'casper2Trim', // 캐스퍼 자주 선택되는 차량 비교(1.0 가솔린 스마트)
			casper3Trim: 'casper3Trim', // 캐스퍼 자주 선택되는 차량 비교(1.0 가솔린 터보 인스퍼레이션)
			venueTrim: 'venueTrim', // 베뉴 자주 선택되는 차량 비교(1.6 가솔린 스마트)
			avanteTrim: 'avanteTrim' // 아반떼 자주 선택되는 차량 비교(스마트스트림 가솔린 1.6 스마트)
		})
	},
	watch: {
		casperInit() {
			// 최초 진입시 캐스퍼 세팅
			this.selectedTrim.splice(0, 1, this.casperInit.trim)
			setTimeout(() => {
				this.selectedTrimDetail.splice(0, 1, this.casperInit.trimDetail)
			}, 200)
		},
		casperTrim() {
			// 캐스퍼 동급차량 비교
			this.selectedTrim.splice(0, 1, this.casperTrim.trim)
			setTimeout(() => {
				this.selectedTrimDetail.splice(0, 1, this.casperTrim.trimDetail)
			}, 200)
		},
		rayTrim() {
			// 레이 동급차량 비교 디폴트 노출
			this.selectedTrim.splice(1, 1, this.rayTrim.trim)
			setTimeout(() => {
				this.selectedTrimDetail.splice(1, 1, this.rayTrim.trimDetail)
			}, 200)
		},
		morningTrim() {
			// 모닝 동급차량 비교 디폴트 노출
			this.selectedTrim.splice(2, 1, this.morningTrim.trim)
			setTimeout(() => {
				this.selectedTrimDetail.splice(2, 1, this.morningTrim.trimDetail)
			}, 200)
		},
		sparkTrim() {
			// 스파크 동급차량 비교 디폴트 노출
			this.selectedTrim.splice(3, 1, this.sparkTrim.trim)
			setTimeout(() => {
				this.selectedTrimDetail.splice(3, 1, this.sparkTrim.trimDetail)
			}, 200)
		},
		casper2Trim() {
			// 캐스퍼 자주 선택되는 차량 비교 디폴트 노출
			this.selectedTrim.splice(0, 1, this.casper2Trim.trim)
			setTimeout(() => {
				this.selectedTrimDetail.splice(0, 1, this.casper2Trim.trimDetail)
			}, 200)
		},
		casper3Trim() {
			// 캐스퍼 자주 선택되는 차량 비교 디폴트 노출
			this.selectedTrim.splice(1, 1, this.casper3Trim.trim)
			setTimeout(() => {
				this.selectedTrimDetail.splice(1, 1, this.casper3Trim.trimDetail)
			}, 200)
		},
		venueTrim() {
			// 베뉴 자주 선택되는 차량 비교 디폴트 노출
			this.selectedTrim.splice(2, 1, this.venueTrim.trim)
			setTimeout(() => {
				this.selectedTrimDetail.splice(2, 1, this.venueTrim.trimDetail)
			}, 200)
		},
		avanteTrim() {
			// 아반떼 자주 선택되는 차량 비교 디폴트 노출
			this.selectedTrim.splice(3, 1, this.avanteTrim.trim)
			setTimeout(() => {
				this.selectedTrimDetail.splice(3, 1, this.avanteTrim.trimDetail)
			}, 200)
		},
		trims(val, oldVal) {
			if (!val || val.length == 0) {
				return
			}
			val.some((trim, index) => {
				if (this.selectedTrim[index] === '-') {
					this.selectedTrim.splice(index, 1, trim[0] ? trim[0].juyotrim : '')
					return true
				}
			})
		},
		trimDetails(val, oldVal) {
			if (!val || val.length == 0) {
				return
			}
			val.some((trimDetail, index) => {
				if (this.selectedTrimDetail[index] == '-') {
					this.selectedTrimDetail.splice(index, 1, trimDetail[0] ? trimDetail[0].trimidx : '')
					return true
				}
			})
		}
	},
	async fetch({ store }) {
		await Promise.all([
			// EP_IF_카젠시_001(제조사 리스트 조회)
			store.dispatch(`${compareTypes.namespace}/${compareTypes.getMakers}`),
			// EP_IF_카젠시_002(제조사별 모델리스트 조회)
			store.dispatch(`${compareTypes.namespace}/${compareTypes.getMakerCars}`, { makercode: '1010' }),
			// EP_IF_카젠시_008(공채지역정보)
			store.dispatch(`${compareTypes.namespace}/${compareTypes.getRegistMainArea}`, {})
		])
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:모델 비교',
						siteSection: '차량',
						siteSubsection: '모델 비교'
					}
				}
			}

			window._spaData(obj)
		})
	},
	async created() {
		// 모델비교
		await this.deleteCarData(0) // 초기화
		setTimeout(async () => {
			await this.initCasper() // 최초 진입시 캐스퍼 디폴트 노출 (1.0 가솔린  -  스마트 런칭)
		}, 200)
	},
	methods: {
		...compareStore.mapActions([
			compareTypes.getMakerCars,
			compareTypes.addDefaultCarData,
			compareTypes.getTrims,
			compareTypes.getTrimDetails,
			compareTypes.getCompares,
			compareTypes.getMakersCarByCode,
			compareTypes.deleteCar,
			compareTypes.getCarMaintenance,
			compareTypes.getDetails
		]),
		// 최초 진입시 캐스퍼 디폴트 노출 (1.0 가솔린  -  스마트 런칭)
		async initCasper() {
			// EP_IF_카젠시_001(제조사 리스트 조회)  getMakers
			// EP_IF_카젠시_002(제조사별 모델리스트 조회)  getMakerCars
			//   ㄴ> API-WH-상품서비스-057 (대표차량 리스트를 조회하는 API)  getRepresentativeCars
			//   		ㄴ> 현대 대표자 목록 조회 해서 노출여부 필터링(아반떼, AX만 나옴) 주석 처리
			// EP_IF_카젠시_003(자주비교되는 차량리스트)  getCompares
			// EP_IF_카젠시_004(차량별 엔진/세부등급 리스트)  getMakersCarsCar
			// API-WH-상품서비스-076 (경쟁차종 자사 차량 기본 품목 옵션 리스트 조회)  getOptionsBasicOption
			// EP_IF_카젠시_005(트림별 상세제원)  getTrimsDetail
			// EP_IF_카젠시_007(유지비용정보)  getCarsCost
			// API-WE-결제서비스-014 (등록비용 조회)  getHCarRegistTax	- PriceDetail  ( 현대 & 제네시스 )
			// EP_IF_카젠시_009(취득세공채정보)  getECarRegistTax	- PriceDetail	( 그 외 차량 )

			await this.$nuxt.$loading.start()
			let label = ''
			this.makers.some((maker, idx) => {
				if (maker.makercode === this.selectedMaker) {
					label = maker.maker
					return true
				}
			})

			let selCar = {}
			this.makerCars.some((car, index) => {
				if (car.caridx === '1189') {
					selCar = {
						makercode: car.makercode,
						maker: label,
						carnamekr: car.carnamekr,
						caridx: car.caridx,
						imgn: car.imgn,
						carprice: car.carprice,
						estPossibleYn: car.estPossibleYn,
						purCnsPossibleYn: car.purCnsPossibleYn
					}
					return true
				}
			})

			if (selCar.caridx) {
				// store ==> 모델비교 차량 리스트 세팅
				this[compareTypes.addDefaultCarData]({
					idx: 0,
					carData: selCar
				})

				// EP_IF_카젠시_004(차량별 엔진/세부등급 리스트)
				this[compareTypes.getTrims]({
					idx: 0,
					caridx: selCar.caridx,
					type: 'casperInit'
				})
			}

			setTimeout(() => {
				this.btnDisabled = false
				this.$nuxt.$loading.finish()
			}, 1000)
		},
		async setEq() {
			// 동급차량 비교
			await this.$nuxt.$loading.start()
			this.btnDisabled = await true
			await this.deleteCarData(0)
			let list = [
				{ makercode: '1010', caridx: '1189' }, // 캐스퍼
				{ makercode: '1020', caridx: '971' }, // 기아 / 레이
				{ makercode: '1020', caridx: '86' }, // 기아 / 모닝
				{ makercode: '1030', caridx: '933' } // 쉐보레 / 스파크
			]
			for (let i = 0; i < list.length; i++) {
				let label = ''
				this.selectedMaker = list[i].makercode
				await this[compareTypes.getMakerCars]({
					makercode: list[i].makercode
				}).then(() => {
					this.makers.some((maker, idx) => {
						if (maker.makercode === list[i].makercode) {
							label = maker.maker
							return true
						}
					})

					let selCar = {}
					this.makerCars.some((car, index) => {
						if (car.caridx === list[i].caridx) {
							selCar = {
								makercode: car.makercode,
								maker: label,
								carnamekr: car.carnamekr,
								caridx: car.caridx,
								imgn: car.imgn,
								carprice: car.carprice,
								estPossibleYn: car.estPossibleYn,
								purCnsPossibleYn: car.purCnsPossibleYn
							}
							return true
						}
					})

					if (selCar.caridx) {
						// store ==> 모델비교 차량 리스트 세팅
						this[compareTypes.addDefaultCarData]({
							idx: i,
							carData: selCar
						})

						// EP_IF_카젠시_004(차량별 엔진/세부등급 리스트)
						this[compareTypes.getTrims]({
							idx: i,
							caridx: selCar.caridx,
							type: i === 0 ? 'casper' : i === 1 ? 'ray' : i === 2 ? 'morning' : i === 3 ? 'spark' : null
						})
					}
				})
			}

			setTimeout(() => {
				this.btnDisabled = false
				this.$nuxt.$loading.finish()
			}, 1000)
		},
		async setCompares() {
			// 자주 선택되는 차량 비교
			await this.$nuxt.$loading.start()
			this.btnDisabled = await true
			await this.deleteCarData(0)
			let list = [
				{ makercode: '1010', caridx: '1189' }, // 캐스퍼
				{ makercode: '1010', caridx: '1189' }, // 캐스퍼
				{ makercode: '1010', caridx: '1112' }, // 베뉴
				{ makercode: '1010', caridx: '52' } // 아반떼
			]
			for (let i = 0; i < list.length; i++) {
				let label = ''
				this.selectedMaker = list[i].makercode
				await this[compareTypes.getMakerCars]({
					makercode: list[i].makercode
				}).then(() => {
					this.makers.some((maker, idx) => {
						if (maker.makercode === list[i].makercode) {
							label = maker.maker
							return true
						}
					})

					let selCar = {}
					this.makerCars.some((car, index) => {
						if (car.caridx === list[i].caridx) {
							selCar = {
								makercode: car.makercode,
								maker: label,
								carnamekr: car.carnamekr,
								caridx: car.caridx,
								imgn: car.imgn,
								carprice: car.carprice,
								estPossibleYn: car.estPossibleYn,
								purCnsPossibleYn: car.purCnsPossibleYn
							}
							return true
						}
					})

					if (selCar.caridx) {
						// store ==> 모델비교 차량 리스트 세팅
						this[compareTypes.addDefaultCarData]({
							idx: i,
							carData: selCar
						})

						// EP_IF_카젠시_005(트림별 상세제원)
						this[compareTypes.getTrims]({
							idx: i,
							caridx: selCar.caridx,
							type: i === 0 ? 'casper2' : i === 1 ? 'casper3' : i === 2 ? 'venue' : i === 3 ? 'avante' : null
						})
					}
				})
			}

			setTimeout(() => {
				this.btnDisabled = false
				this.$nuxt.$loading.finish()
			}, 1000)
		},
		async addCar(idx, type) {
			this.editTemp = null
			this.$refs.comparisonPopup.initPopup()
			if (type !== 'edit') {
				this.isChange = await false
			} else {
				this.isChange = await true
				this.editTemp = {
					selectedTrim: this.selectedTrim[idx],
					selectedTrimDetail: this.selectedTrimDetail[idx],
					selectedTrimDetailName: this.selectedTrimDetailName[idx],
					saleModelCodes: this.saleModelCodes[idx],
					defaultCarDatas: this.defaultCarDatas[idx]
				}
			}
			let makerCode = ''
			this.selectedIdx = await idx
			if (idx === 0) {
				makerCode = '1010'
				this.selectedMaker = makerCode
				this.$refs.comparisonPopup.onChangeMaker(makerCode)

				if (this.defaultCarDatas[this.selectedIdx].caridx !== '-1') {
					this.selectedCar = this.defaultCarDatas[this.selectedIdx].caridx
				} else {
					this.selectedCar = ''
				}
			} else {
				if (this.defaultCarDatas[this.selectedIdx].caridx === '-1') {
					this.selectedIdx = this.defaultCarDatas.findIndex((el) => el.caridx === '-1')
					this.selectedMaker = ''
					this.selectedCar = ''
				} else {
					this.$refs.comparisonPopup.onChangeMaker(this.defaultCarDatas[this.selectedIdx].makercode, true, this.defaultCarDatas[this.selectedIdx].caridx)
					this.selectedMaker = this.defaultCarDatas[this.selectedIdx].makercode
					this.selectedCar = this.defaultCarDatas[this.selectedIdx].caridx
				}
			}
			this.comparisonPop = !this.comparisonPop
		},
		onChangeTrim(idx) {
			this.selectedTrimDetail.splice(idx, 1, '-')
			this[compareTypes.getTrimDetails]({
				idx,
				juyotrim: this.selectedTrim[idx]
			})
		},
		async onChangeDetail(idx, tridx) {
			if (tridx && tridx !== '-') {
				if (idx === 0) {
					// EP_IF_카젠시_003(자주비교되는 차량리스트)
					this[compareTypes.getCompares]({
						trimidx: tridx
					})
				}

				const trimDetailFound = this.trimDetails[idx] && this.trimDetails[idx].length > 0 && this.trimDetails[idx].filter((detail) => detail.trimidx === tridx)
				if (trimDetailFound && trimDetailFound[0]) this.selectedTrimDetailName.splice(idx, 1, trimDetailFound[0].trimname)
				const trimPrice = trimDetailFound && trimDetailFound.length > 0 ? Number(trimDetailFound[0].carprice) : 0
				const envMode = trimDetailFound && trimDetailFound.length > 0 ? trimDetailFound[0].envMode : ''
				const trimcd = trimDetailFound && trimDetailFound.length > 0 ? trimDetailFound[0].trimcd1 : ''
				envMode && this.envModes.splice(idx, 1, envMode)
				trimcd && this.saleModelCodes.splice(idx, 1, trimcd)
				this.envModes.splice(idx, 1, envMode)
				this.trimPrices.splice(idx, 1, trimPrice)
				const trimData = {
					trimidx: tridx,
					carprice: trimPrice,
					trimcd1: trimcd,
					envMode
				}
				this.trimParams.splice(idx, 1, trimData)
				// EP_IF_카젠시_005(트림별 상세제원)
				this[compareTypes.getDetails]({
					idx,
					trimidx: tridx,
					hd_trim: this.trimParams[0] ? this.trimParams[0].trimidx : '',
					//trimidxs: this.trimParams.filter((el) => el.trimidx != '-').map((el) => el.trimidx).join(','),
					trimcd
				})
				await this.onChangeCost(idx)
				if (this.$refs.discount) {
					await setTimeout(() => {
						this.$refs.discount.getRegistTaxData(idx, 'index', idx)
					}, 200)
				}
			}
		},
		onChangeCost(idx) {
			if (
				this.selectedTrimDetail[idx] &&
				this.selectedTrimDetail[idx] !== '' &&
				this.selectedTrimDetail[idx] !== '-' &&
				this.trimDetails[idx] &&
				this.trimDetails[idx] !== '-1'
			) {
				this[compareTypes.getCarMaintenance]({
					index: idx,
					trimidxs: this.selectedTrimDetail[idx],
					driveyear: this.driveDaySelected || '3',
					drivekm: this.driveDistSelected || '20000',
					regcon1: this.selectedCondi + '-' + (this.multichildChecked ? '2' : '1') + '-' + this.details[idx].envMode
				})
			}
		},
		onChangeCostByData(data) {
			this.driveDaySelected = data.selectedDay
			this.driveDistSelected = data.selectedDist
			this.onChangeCost(data.idx)
		},
		totalPrice(i) {
			// 총 구입비용
			// 차량가격 + 등록비
			// 친환경차 보조금 ? - 친환경차 보조금
			let res = Number(this.trimPrices[i] || 0) + Number(this.carRegistTaxs[i]?.regtotalprice || 0) - (this.ecoAssistPrices[i] || 0)
			return res
		},
		async deleteCarData(idx) {
			await this[compareTypes.deleteCar]({
				idx
			})
			if (idx === 0) {
				this.selectedCar = await ''
				this.selectedMaker = await ''
				this.selectedTrim = await ['', '', '', '']
				this.selectedTrimDetail = await ['', '', '', '']
				this.selectedTrimDetailName = await ['', '', '', '']
				this.saleModelCodes = await ['', '', '', '']
				await this.$store.dispatch(`${compareTypes.namespace}/${compareTypes.getMakerCars}`, { makercode: '1010' })
				await this.initCasper()
			} else {
				this.selectedTrim.splice(idx, 1)
				this.selectedTrim.push('-')
				this.selectedTrimDetail.splice(idx, 1)
				this.selectedTrimDetail.push('-')
			}
		},
		changeDefaultCar(idx) {
			this[compareTypes.addDefaultCarData]({
				idx: idx,
				carData: this.editTemp.defaultCarDatas
			})
			this.selectedTrim.splice(idx, 1, this.editTemp.selectedTrim)
			this.selectedTrimDetail.splice(idx, 1, this.editTemp.selectedTrimDetail)
			this.selectedTrimDetailName.splice(idx, 1, this.editTemp.selectedTrimDetailName)
			this.saleModelCodes.splice(idx, 1, this.editTemp.saleModelCodes)
		},
		async trimReset(index) {
			this.selectedTrim.splice(index, 1, '-')
		},
		moveCasper(index) {
			this.$router.push({
				name: 'vehicles-making-model',
				params: {
					saleModelCode: this.saleModelCodes[index]
				}
			})
		},
		handleScroll() {
			// 2021.03.23 (ver1.1) window.scrollY -- > window.pageYOffset 으로변경 (익스문제)
			if (window.pageYOffset > this.$refs.fix.offsetTop + 250) {
				this.$refs.fix.classList.add('fix')
			} else {
				this.$refs.fix.classList.remove('fix')
			}
		}
	}
}
</script>
