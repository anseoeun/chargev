<template>
	<div class="content vehicles offline-showroom">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="전시/시승 안내" page-infotext="가까운 곳에서 캐스퍼를 만나보세요." />
		<div class="offline-showroom-detail-wrap">
			<div class="offline-showroom-detail">
				<div class="title">
					<b>
						{{ showroom && showroom.showroom && showroom.showroom.showroomName }}
						<!-- {{ showroom && showroom.showroom && showroom.showroom.showroomTypeName }} -->
					</b>
					<span class="flag-wrap">
						<!-- <span v-if="showroom && showroom.showroom && showroom.showroom.showroomTypeCode" class="flag">
							{{ showroom.showroom.showroomTypeCode === '01' ? '전용 전시장' : showroom.showroom.showroomTypeCode === '02' ? '팝업 전시' : '' }}
						</span> -->
						<span v-if="showroom && showroom.showroom && showroom.showroom.consultAvailYn === 'Y'" class="flag">구매 안내 가능</span>
						<span v-else class="flag">셀프체험</span>
						<span v-if="showroom && showroom.showroom && showroom.showroom.testDriveAvailYn === 'Y'" class="flag">시승 가능</span>
					</span>
				</div>

				<div class="detail-desc">
					<div class="detail-info">
						<ul>
							<li>
								<strong class="tit">주소</strong>
								<div class="txt">
									{{ showroom && showroom.showroom && showroom.showroom.showroomAddress }}
									<!-- {{ showroom && showroom.showroom && showroom.showroom.agencyAddress2 }} -->
								</div>
							</li>
							<li v-if="showroom && showroom.showroom && showroom.showroom.operationStartDate">
								<strong class="tit">운영 기간</strong>
								<div class="txt">
									{{
										showroom && showroom.showroom && showroom.showroom.operationStartDate
											? $moment(showroom.showroom.operationStartDate).format('YYYY. MM. DD') + ' ~ '
											: ''
									}}{{
										showroom && showroom.showroom && showroom.showroom.operationStartDate && showroom.showroom.operationEndDate
											? $moment(showroom.showroom.operationEndDate).format('YYYY. MM. DD')
											: ''
									}}
								</div>
							</li>
							<li v-if="showroom && showroom.showroom && showroom.showroom.operationTime">
								<strong class="tit">운영 시간</strong>
								<div class="txt">{{ showroom && showroom.showroom && showroom.showroom.operationTime ? showroom.showroom.operationTime : '' }}</div>
							</li>
							<li v-if="showroom && showroom.showroom && showroom.showroom.showroomTel">
								<strong class="tit">전화번호</strong>
								<div class="txt">{{ showroom && showroom.showroom && showroom.showroom.showroomTel }}</div>
							</li>
						</ul>
					</div>
					<div
						v-if="showroom && showroom.showroom && showroom.showroom.additionalGuidance && showroom.showroom.additionalGuidance.length > 0"
						class="notice-wrap col"
					>
						<ul class="bullet-list">
							<li v-html="showroom.showroom.additionalGuidance"></li>
						</ul>
					</div>
					<p v-if="showroom && showroom.showroom && showroom.showroom.testDriveAvailYn === 'Y'" class="text">
						시승 서비스 이용을 원하시는 고객님께서는 시승 신청을 통해 예약 후 방문해주세요.
					</p>
					<div class="btn-wrap">
						<v-btn v-if="showroom && showroom.showroom && showroom.showroom.testDriveAvailYn === 'Y'" class="btn md blue" @click="driving()">
							시승 신청
						</v-btn>
					</div>
				</div>

				<div v-if="showroom && showroom.imageList && showroom.imageList.length > 0" class="showrooms-visual">
					<div class="showrooms-img">
						<div class="car-detail-img">
							<v-carousel-new :data="showroom.imageList" :navigation="true" :pagination="true" :items-to-show="1" :items-to-slide="1">
								<template slot-scope="props">
									<div class="img">
										<v-img :src="srcUploadPath(props.item.fileGroupSn, props.item.fileSn)" :alt="props.item.fileName"></v-img>
									</div>
								</template>
							</v-carousel-new>
						</div>
					</div>
				</div>

				<div v-if="showroom && showroom.displayCarList && showroom.displayCarList.length > 0" class="showrooms-car">
					<div class="title">전시 중인 차</div>
					<ul>
						<li v-for="(item, index) in showroom.displayCarList" :key="index">
							<div class="car">
								<div class="img">
									<v-img
										v-if="item.carCode && item.saleModelCode && item.exteriorColorCode"
										:src="`${CONT_PATH}/wcontents/repn-car/side-45/${item.carCode}/${item.saleModelCode}/A01/${item.exteriorColorCode}/m.png`"
										:alt="`${item.carName} 외장 이미지`"
									></v-img>
									<v-img v-else :src="require('~/assets/images/mycar/car-null.png')" :alt="`${item.carName} 외장 이미지`"></v-img>
								</div>
								<div class="desc">
									<p class="tit">
										{{ displayCarList && displayCarList[index] ? (displayCarList[index].saleModelName ? displayCarList[index].saleModelName : '') : '' }}
									</p>
									<ul>
										<li>
											<div class="tit">외장색상</div>
											<div class="txt">
												{{
													displayCarList && displayCarList[index]
														? displayCarList[index].exteriorColorName
															? displayCarList[index].exteriorColorName
															: '-'
														: '-'
												}}
											</div>
										</li>
										<li>
											<div class="tit">내장색상</div>
											<div class="txt">
												{{
													displayCarList && displayCarList[index]
														? displayCarList[index].interiorColorName
															? displayCarList[index].interiorColorName
															: '-'
														: '-'
												}}
											</div>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
					<p class="bullet-star">전시장의 상황에 따라 전시 중인 차는 사전 예고 없이 변경될 수 있습니다.</p>
				</div>
				<div v-if="testDriveCarList && testDriveCarList.length > 0" class="showrooms-car">
					<div class="title">시승 가능 차</div>
					<ul>
						<li v-for="(item, index) in testDriveCarList" :key="index">
							<div class="car">
								<div class="img">
									<v-img
										:src="`${CONT_PATH}/wcontents/repn-car/side-45/${carCode}/${item.saleCarCtyNo}/${item.optCtyNo}/${item.xrclCtyNo}/m.png`"
										:alt="`${item.carn} 외장 이미지`"
									></v-img>
								</div>
								<div class="desc">
									<p class="tit">
										{{ item.carn }} {{ item.saleCarCtyNo && item.saleCarCtyNo.substring(3, 4) === 'V' ? 'VAN' : '' }} {{ item.fuelScnNm }} {{ item.trimNm }}</p
									>
									<ul>
										<li>
											<div class="tit">외장 색상</div>
											<div class="txt">{{ item.xrclCtyNm }}</div>
										</li>
										<li>
											<div class="tit">내장 색상</div>
											<div class="txt">{{ item.ieclCtyNm }}</div>
										</li>
										<li>
											<div class="tit">선택 품목</div>
											<div class="txt">
												{{ item.optCtyNm || '' }}
											</div>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="map-view">
				<div class="title">
					위치 안내
				</div>
				<div ref="mapBox" style="height:480px;background:#f9f9f9"></div>
			</div>
			<div class="btn-box">
				<v-btn type="nlink" to="/vehicles/offline-showrooms" class="btn lg blue">목록</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as pStore from '~/store/purchase-guide'
import * as pTypes from '~/store/purchase-guide/types'
import loadScriptOnce from 'load-script-once'
import { apiEstimate } from '~/ajax'
import dateFns from 'date-fns'

let kakao = global.kakao
export default {
	head() {
		return {
			title: '체험 > 전시/시승 안내'
		}
	},
	components: {},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '체험', link: '/' },
				{ linkName: '전시/시승 안내', link: '/' }
			],
			displayCarList: [],
			showroomCode: '',
			imgPage: 1,
			carCode: 'AX01'
		}
	},
	computed: {
		...pStore.mapGetters({
			showroom: pTypes.showroom,
			testDriveCarList: pTypes.testDriveCarList
		}),
		...mapGetters({
			isLogin: 'isLogin'
		})
	},
	async asyncData({ store, query }) {
		return {
			showroomCode: query.showroomCode
		}
	},
	async fetch({ store, params, query }) {
		if (query.showroomCode) {
			return (
				// API-WX-고객지원서비스-006 (전시장 상세정보조회)
				await store.dispatch(`${pTypes.namespace}/${pTypes.getShowroom}`, {
					showroomCode: query.showroomCode
				})
			)
		}
	},
	async created() {
		if (!this.showroomCode) {
			this.$alert('잘못된 접근입니다.')
			this.$router.go(-1)
			return
		}
	},
	async mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:쇼룸:오프라인:상세',
						siteSection: '차량',
						siteSubsection: '쇼룸'
					}
				}
			}

			window._spaData(obj)
		})

		sessionStorage.removeItem('reservationData')

		await loadScriptOnce(`https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.KAKAO_MAP_KEY}&libraries=services`)
			.then(async () => {
				await window.kakao.maps.load(() => {
					kakao = window.kakao

					this.initMap()
				})
			})
			.catch((err) => {
				console.error(err)
			})

		this.$store.commit(`${pTypes.namespace}/${pTypes.testDriveCarList}`, [])
		if (
			this.showroom &&
			this.showroom.showroom &&
			this.showroom.showroom.testDriveCenterCode &&
			this.showroom.showroom.testDriveAvailYn &&
			this.showroom.showroom.testDriveAvailYn === 'Y'
		) {
			const params = {
				CAR_MODEL_CD: this.carCode,
				ORG_TYPE_SCN_CD: !this.showroom.showroom.testDriveCenterCode.includes('AX') ? '99' : '95',
				CHAN_SCN_CD: '07',
				ORG_SCN_CD: 'A',
				ORG_CD: this.showroom.showroom.testDriveCenterCode,
				TSRD_RQ_NO: dateFns.format(new Date(), 'YYYYMMDDHHmmss')
			}
			//시승차종 상세정보 조회
			await this.$store.dispatch(`${pTypes.namespace}/${pTypes.getTestDriveCarList}`, params)
		}

		if (this.showroom && this.showroom.displayCarList && this.showroom.displayCarList.length > 0) {
			let displayCarList = []
			for (let i = 0; i < this.showroom.displayCarList.length; i++) {
				let displayCarInfo = {}
				// API-WH-상품서비스-043 (판매모델별 상품정보 및 이미지 정보를 조회하는 API)
				const [res, err] = await apiEstimate.getCarSaleModelCodeInfo({
					saleModelCode: this.showroom.displayCarList[i].saleModelCode,
					imageSectionCode: '02'
				})
				if (err) console.log(err)
				if (res && res.data && res.data[0]) {
					displayCarInfo.saleModelName = res.data[0].saleModelName
					displayCarInfo.pcFilePath = res.data[0].pcFilePath
					displayCarInfo.carEnginCode = res.data[0].carEnginCode
				}
				// API-WH-상품서비스-011 (판매모델별 외장색상 리스트 조회)
				const [res2, err2] = await apiEstimate.getExteriorColor({
					saleModelCode: this.showroom.displayCarList[i].saleModelCode
				})
				if (err2) console.log(err2)
				if (this.showroom.displayCarList[i].exteriorColorCode && res2 && res2.data && res2.data.length > 0) {
					let exteriorColorCodeFilter = res2.data.filter((item) => item.exteriorColorCode === this.showroom.displayCarList[i].exteriorColorCode)
					if (exteriorColorCodeFilter && exteriorColorCodeFilter.length > 0) {
						displayCarInfo.exteriorColorCode = exteriorColorCodeFilter[0].exteriorColorCode
						displayCarInfo.exteriorColorName = exteriorColorCodeFilter[0].exteriorColorName
					}
				}
				// API-WH-상품서비스-012 (판매모델별 내장색상 리스트 조회)
				const [res3, err3] = await apiEstimate.getInteriorColor({
					saleModelCode: this.showroom.displayCarList[i].saleModelCode
				})
				if (err3) console.log(err3)
				if (this.showroom.displayCarList[i].interiorColorCode && res3 && res3.data && res3.data.length > 0) {
					let interiorColorCodeFilter = res3.data.filter((item) => item.realityInteriorColorCode === this.showroom.displayCarList[i].interiorColorCode)
					if (interiorColorCodeFilter && interiorColorCodeFilter.length > 0) {
						displayCarInfo.interiorColorCode = interiorColorCodeFilter[0].realityInteriorColorCode
						displayCarInfo.interiorColorName = interiorColorCodeFilter[0].interiorColorName
					}
				}

				displayCarList.push(displayCarInfo)
			}
			this.displayCarList = displayCarList
		}
	},
	methods: {
		async initMap() {
			if (this.showroom && this.showroom.showroom) {
				let map = await new kakao.maps.Map(this.$refs.mapBox, {
					center: new kakao.maps.LatLng(this.showroom.showroom.latitude, this.showroom.showroom.longitude),
					level: 3,
					disableDoubleClick: true
				})
				let markerPosition = new kakao.maps.LatLng(this.showroom.showroom.latitude, this.showroom.showroom.longitude)
				let marker = new kakao.maps.Marker({
					position: markerPosition
				})
				marker.setMap(map)
			}
		},
		async pageChange(page) {
			this.imgPage = await page
		},
		srcUploadPath(fileGroupSn, fileSn) {
			if (fileGroupSn) {
				const url = '/api/bff/main/file/download/' + fileGroupSn + '/' + fileSn
				return url
			}
		},
		driving() {
			this.$router.push({
				name: 'vehicles-test-driving',
				query: {
					carModelCd: 'AX01',
					fuelScnCd: '0000',
					testDriveCenterCode: (this.showroom && this.showroom.showroom && this.showroom.showroom.testDriveCenterCode) || null
				}
			})
		},
		toHtml(val) {
			return val
				? val
						.replace(/&amp;/gi, '&')
						.replace(/&lt;/gi, '<')
						.replace(/&gt;/gi, '>')
						.replace(/&quot;/gi, '"')
						// eslint-disable-next-line quotes
						.replace(/&#039;/gi, "'")
						.replace(/&nbsp;/gi, ' ')
						// eslint-disable-next-line quotes
						.replace(/&#39;/gi, "'")
						.replace(/\n/gi, '<br />')
				: ''
		}
	}
}
</script>
