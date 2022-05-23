<template>
	<div class="toggle-area3" :class="{ completed: selectedCar && selectedCar.carInfoSbc && selectedService, active: isOptionsShow }">
		<div class="information-detail" :class="{ active: isOptionsShow }">
			<div class="summary-info">
				<h1 class="title">STEP 3. 차량 및 시승 방법</h1>
				<div class="right">
					<span class="text bold">
						{{ selectedCar ? (selectedCar.carInfoSbc ? selectedCar.carInfoSbc : '') : '' }}
						<span v-if="selectedCar && selectedCar.carInfoSbc">
							{{
								selectedService
									? selectedService === 'visit'
										? '(동승 시승)'
										: selectedService === 'self'
										? '(Semi-Untact 시승)'
										: selectedService === 'service'
										? '(찾아가는 시승)'
										: selectedService === 'untact'
										? '(Untact 시승)'
										: ''
									: ''
							}}
						</span>
					</span>
					<v-btn v-if="selectedCar && selectedCar.carInfoSbc" class="btn-change" @click="showChange">
						<span v-if="isOptionsShow">
							변경 취소
							<i class="icon-change-reset"></i>
						</span>
						<span v-else>
							변경
							<i class="icon-change"></i>
						</span>
					</v-btn>
				</div>
			</div>
		</div>
		<div v-show="isOptionsShow" class="detail-info" :class="{ active: isOptionsShow }">
			<p class="step-guide-text">원하시는 차량과 시승 방법을 선택해주세요.</p>
			<div class="matching-list">
				<div class="list-column">
					<div class="title"><b>시승 차량</b></div>
					<div class="auto">
						<div class="test-car">
							<ul v-if="carInfoDetail">
								<li v-for="(item, index) in carInfoDetail" :key="index">
									<v-btn type="link" href="javascript:void(0);" class="car" :class="{ on: selectedCarIndex === index }" @click="carSelected(index)">
										<p class="tit">
											{{ item.carn }} {{ item.saleCarCtyNo && item.saleCarCtyNo.substring(3, 4) === 'V' ? 'VAN' : '' }} {{ item.fuelScnNm }} {{ item.trimNm }}
										</p>
										<div class="desc">
											<div class="img">
												<v-img
													v-if="imageList && imageList[index] && item.xrclCtyNo"
													:src="
														`${CONT_PATH}/wcontents/repn-car/side-45/${imageList[index].carCode}/${item.saleCarCtyNo}/${item.optCtyNo}/${item.xrclCtyNo}/m.png`
													"
													:alt="`${item.carn} 외장 이미지`"
												></v-img>
												<v-img v-else :src="require('~/assets/images/mycar/car-null.png')" :alt="`${item.carn} 외장 이미지`"></v-img>
											</div>
											<ul>
												<li>
													<div class="tit">외장색상</div>
													<div class="txt">{{ item.xrclCtyNm }}</div>
												</li>
												<li>
													<div class="tit">내장색상</div>
													<div class="txt">{{ item.ieclCtyNm }}</div>
												</li>
												<li>
													<div class="tit">선택품목</div>
													<div class="txt">{{ item.optCtyNm || '무옵션' }}</div>
												</li>
											</ul>
										</div>
									</v-btn>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="list-column">
					<div class="title"><b>시승 방법</b></div>
					<div class="auto">
						<v-radio
							v-if="serviceList"
							v-model="selectedService"
							:custom-label="true"
							:data="serviceList"
							class="radio-round-button method-selc"
							type="button"
							@change="onSelectService"
						>
							<template slot-scope="props">
								{{ props.item.label }}
								<v-popover trigger="hover" placement="bottom-start">
									<p v-if="props.item.value === 'visit'" class="nowrap">
										[시승방법]
										<br />
										1. 시승 거점 사무실 방문
										<br />
										2. 동승 카마스터가 차량 키 수령
										<br />
										3. 카마스터 동승 시승(차량 설명 포함)
									</p>
									<p v-else-if="props.item.value === 'self'" class="nowrap">
										[시승방법]
										<br />
										1. 시승 거점 사무실 방문
										<br />
										2. 차량 키 직접 수령
										<br />
										3. 차량 단독 시승(차량 설명 미포함)
									</p>
									<p v-else-if="props.item.value === 'untact'" class="nowrap">
										[시승방법]
										<br />
										1. 모바일 웹으로 디지털 키 수령(사무실 방문 불필요)
										<br />
										2. 시승차량 주차장 방문
										<br />
										3. 차량 단독 시승(차량 설명 미포함)
									</p>
									<p v-else class="nowrap"></p>
									<v-btn slot="reference"><i class="icon-help"></i></v-btn>
								</v-popover>
							</template>
						</v-radio>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import * as testDriving from '~/store/test-driving'
import * as testDrivingTypes from '~/store/test-driving/types'
import { apiProduct } from '~/ajax'

import dateFns from 'date-fns'

export default {
	components: {},
	props: {
		isOptionsShow: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			serviceList: [],
			imageList: [],
			carList: null,
			carCheck: '',
			selectedService: null,
			selectedCar: null,
			selectedCarIndex: null
		}
	},
	computed: {
		...testDriving.mapGetters({
			carInfoDetail: testDrivingTypes.carInfoDetail,
			saleModelCodeList: testDrivingTypes.saleModelCodeList
		})
	},
	watch: {
		async carInfoDetail(val) {
			let images = []
			if (val.length > 0) {
				for (let i = 0; i < val.length; i++) {
					const [res, err] = await apiProduct.getCarImageInfo({
						saleModelCode: val[i].saleCarCtyNo,
						imageSectionCode: '02'
					})
					if (err) {
						images.push(null)
					}
					if (res && res.data) {
						if (res.data[0]) {
							images.push(res.data[0])
						} else {
							images.push(null)
						}
					}
				}
			}
			this.imageList = images
		}
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:시승 신청:step3',
						siteSection: '차량',
						siteSubsection: '시승 신청'
					}
				}
			}

			window._spaData(obj)
		})
	},
	methods: {
		...testDriving.mapActions([testDrivingTypes.postCarInfoDetail]),
		async reset() {
			this.selectedService = await null
			this.selectedCar = await null
			this.selectedCarIndex = await null
		},
		async init(obj, selectedEngin) {
			let list = []
			if (obj.orgTypeScnCd == '50' || obj.orgTypeScnCd == '70') {
				list = [
					{
						value: 'visit',
						label: '동승 시승 서비스',
						tooltip: '시승 장소에 방문 후, 담당 직원과 동승하여 차량에 대한 안내와 함께 시승하는 서비스입니다.'
					}
				]
			} else if (obj.orgCd === 'EV01') {
				list = [
					{
						value: 'evService',
						label: '현대 EV 스테이션 특화 시승 서비스',
						tooltip: '고객님이 현대 EV 스테이션에 직접 방문, 구루와 동승하여 전기차에 대한 안내와 함께 시승하는 서비스'
					}
				]
			} else {
				if (obj.visitPrctYn === 'Y')
					list.push({
						value: 'visit',
						label: '동승 시승 서비스',
						tooltip: '시승 장소에 방문 후, 담당 직원과 동승하여 차량에 대한 안내와 함께 시승하는 서비스입니다.'
					})
				if (obj.selfPrctYn === 'Y')
					list.push({
						value: 'self',
						label: 'Semi-Untact 시승 서비스',
						tooltip: '시승 장소에 방문 후, 자유롭게 혼자 시승하는 서비스입니다.'
					})
				if (obj.untactYn === 'Y')
					list.push({
						value: 'untact',
						label: 'Untact 시승 서비스',
						tooltip: '차량 준비 및 이동 시간을 포함하여 1시간 30분 ~ 2시간 동안 시승 서비스를 이용하실 수 있습니다.'
					})
				// if (obj.findPrctYn === 'Y')
				// list.push({
				// 	value: 'service',
				// 	label: '찾아가는 시승 서비스',
				// 	tooltip: '고객님이 원하시는 장소로 카마스터가 방문하여 시승하는 서비스'
				// })
			}
			//성수, 울산지점은 'visit', 'evService' 필터
			if (obj.orgCd === 'AX01' || obj.orgCd === 'C20') list = list.filter((ele) => ele.value !== 'visit' && ele.value !== 'evService')

			this.serviceList = list

			// EP_IF_오픈시승_002_시승차종상세정보
			await this[testDrivingTypes.postCarInfoDetail]({
				ORG_TYPE_SCN_CD: obj.orgTypeScnCd,
				CHAN_SCN_CD: '07',
				ORG_SCN_CD: 'A',
				ORG_CD: obj.orgCd,
				CAR_MODEL_CD: this.saleModelCodeList[0].CARMODELCD,
				TSRD_RQ_NO: dateFns.format(new Date(), 'YYYYMMDDHHmmss'),
				selectedEngin: selectedEngin
			})
		},
		carSelected(index) {
			//this.selectedCar = this.carInfoDetail[index]
			const bodyTypeNm = this.carInfoDetail[index].saleCarCtyNo && this.carInfoDetail[index].saleCarCtyNo.substring(3, 4) === 'V' ? 'VAN' : ''
			this.selectedCar = {
				...this.carInfoDetail[index],
				carInfoSbc: this.carInfoDetail[index].carn + ' ' + bodyTypeNm + ' ' + this.carInfoDetail[index].fuelScnNm + ' ' + this.carInfoDetail[index].trimNm
			}
			this.selectedCarIndex = index

			//시승 방법 리스트에 비대면 시승 서비스있으면 삭제
			let findServiceIdx = this.serviceList.findIndex((data) => data.value == 'untact')
			if (findServiceIdx > -1) this.serviceList.splice(findServiceIdx, 1)

			//선택한 차량 비대면 시승 여부 'Y'이면 시승 방법 리스트에 비대면 시승 서비스 추가
			if (this.selectedCar.untactYn === 'Y')
				this.serviceList.push({
					value: 'untact',
					label: 'Untact 시승 서비스',
					tooltip: '차량 준비 및 이동 시간을 포함하여 1시간 30분 ~ 2시간 동안 시승 서비스를 이용하실 수 있습니다.'
				})

			this.$emit('completed', this.carInfoDetail[index])
		},
		onSelectService(value) {
			this.$emit('setService', value)
		},
		showChange() {
			this.$emit('stepChange', 3)
		},
		async setCarInfo(reservationData) {
			this.selectedService = await reservationData.selectedService
			this.onSelectService(this.selectedService)
			this.selectedCar = await null
			this.selectedCarIndex = await null

			let selectedCarIndex = this.carInfoDetail.findIndex(
				(ele) =>
					ele.carModelCd === reservationData.selectedCar.carModelCd &&
					ele.saleCarCtyNo === reservationData.selectedCar.saleCarCtyNo &&
					ele.xrclCtyNo === reservationData.selectedCar.xrclCtyNo &&
					ele.ieclCtyNo === reservationData.selectedCar.ieclCtyNo &&
					ele.optCtyNo === reservationData.selectedCar.optCtyNo
			)

			if (selectedCarIndex > -1) {
				await setTimeout(() => {
					this.carSelected(selectedCarIndex)
				}, 1000)
				return true
			} else {
				return false
			}
		}
	}
}
</script>
