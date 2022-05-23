<template>
	<div class="content vehicles test-driving">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="시승 신청" page-infotext="캐스퍼가 제공하는 편리한 시승 서비스를 이용해보세요." />

		<div ref="wrap" class="test-driving-wrap">
			<!-- STEP 1. 시승 모델 -->
			<step1 ref="step1" :is-options-show.sync="step1OptionsShow" :car-fuel-list.sync="carFuelList" @completed="setEngin" @stepChange="stepChange" />
			<!-- STEP 2. 시승 장소 -->
			<step2
				ref="step2"
				:is-options-show.sync="step2OptionsShow"
				:selected-engin.sync="selectedEngin"
				:exclude-model-list.sync="excludeModelList"
				:selected-center.sync="selectedCenter"
				@completed="setCenter"
				@stepChange="stepChange"
				@addressPop="postCodeVisible.address = true"
			/>
			<!-- STEP 3. 차량 및 시승 방법 -->
			<step3 ref="step3" :is-options-show.sync="step3OptionsShow" @completed="setCarService" @setService="setService" @stepChange="stepChange" />
			<!-- STEP 4. 일정 -->
			<step4
				ref="step4"
				:is-options-show.sync="step4OptionsShow"
				:selected-center.sync="selectedCenter"
				:selected-car.sync="selectedCar"
				:selected-service.sync="selectedService"
				@completed="setSchedule"
				@stepChange="stepChange"
			/>
			<!-- STEP 5. 신청자 정보 확인 및 고지사항 확인 -->
			<step5 ref="step5" :is-options-show.sync="step5OptionsShow" />

			<div class="btn-box">
				<v-btn class="btn lg blue" type="button" :disabled="btnCheck" @click="onComplete">시승 신청</v-btn>
			</div>

			<!-- 유의사항 -->
			<div class="notice-wrap col">
				<strong class="title">유의사항</strong>
				<!-- 2021.08.25(ver1.5) (개선#6069)문구변경 -->
				<ul class="bullet-list">
					<li>시승 서비스는 만 21세 이상 운전면허 소지자면 누구나 이용 가능합니다.</li>
					<li>시승 신청은 개인/법인 당 1건만 가능합니다.</li>
					<li>보다 많은 고객님께 시승 서비스를 제공하기 위해 고객님 한 분당 연간 6회까지의 시승 신청이 가능합니다.</li>
					<li>시승 차종의 색상과 세부 사양은 사전 예고 없이 변경될 수 있습니다.</li>
				</ul>
			</div>
			<!-- // 유의사항 -->
		</div>

		<!-- Alert -->
		<v-popup :width="'550px'" :visible="showAlert" :footer="['confirm']" @confirm="confirm()" @close="confirm()">
			<template slot="body">
				<p class="text-main" v-html="alertMessage"></p>
			</template>
		</v-popup>

		<Address :pop-visible="postCodeVisible" @updateAddr="updateUserAddr" @offModal="offPostCode"></Address>
		<!-- 시승센터이전안내 -->
		<!-- <v-popup width="450px" :visible="popVisible" class="large-scroll pop-notice" @close="onCloseNotice">
			<template slot="body">
				<div class="popup-cont">
					<div v-if="notiData && notiData.src" class="noti-img">
						<v-img :src="notiData.src" :alt="notiData.alt"></v-img>
					</div>
				</div>
			</template>
			<template slot="footer">
				<div class="check-day">
					<v-checkbox true-value="CODE001" :one-check="true" :checked.sync="isDayCheck">오늘 하루 창 열지 않기</v-checkbox>
				</div>
				<v-btn class="btn-close" @click="onCloseNotice">닫기</v-btn>
			</template>
		</v-popup> -->
	</div>
</template>

<script>
// const Cookie = require('js-cookie')

import { mapGetters } from 'vuex'
import * as testDriving from '~/store/test-driving'
import * as testDrivingTypes from '~/store/test-driving/types'
import Step1 from '~/pages/vehicles/test-driving/Step1'
import Step2 from '~/pages/vehicles/test-driving/Step2'
import Step3 from '~/pages/vehicles/test-driving/Step3'
import Step4 from '~/pages/vehicles/test-driving/Step4'
import Step5 from '~/pages/vehicles/test-driving/Step5'

import Address from '~/components/page/vehicles/test-driving/popup/Address'

import dateFns from 'date-fns'

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
		Step1,
		Step2,
		Step3,
		Step4,
		Step5,
		Address
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '체험', link: '/' },
				{ linkName: '시승 신청', link: '/' }
			],
			curr: new Date(),
			selectedEngin: null, // 선택한 엔진
			selectedCenter: null, // 선택한 드라이빙 라운지
			selectedCar: null, // 선택한 시승차량
			selectedService: null, // 선택한 시승방법
			selectSchedule: null, // 선택한 시승일정

			postCodeVisible: {
				// 주소검색 노출 여부
				address: false,
				index: null
			},

			// 찾아가는 시승
			addr: {
				zipCode: '',
				address1: '',
				address2: '',
				addrDetail: ''
			},
			// 문의사항
			applyText: '',

			excludeModelList: [],
			currentStep: 1,
			step1OptionsShow: false,
			step2OptionsShow: false,
			step3OptionsShow: false,
			step4OptionsShow: false,
			step5OptionsShow: false,

			// 신청완료 페이지로 넘길 데이터
			drivingInfo: {
				usrNa: null,
				usrCp: null,
				tsrd_FNH_DT: null,
				tsrd_STRT_DT: null
			},

			showAlert: false,
			returnType: null,
			alertMessage: '',
			reservationData: {} //로그인전 셋팅한 예약 데이터
			// notiData: {
			// 	src: require('~/assets/images/temp/temp-new-center.jpg'),
			// 	alt: ''
			// },
			// isDayCheck: false,
			// popVisible: false
		}
	},
	computed: {
		...mapGetters({
			isLogin: 'isLogin',
			userInfo: 'userInfo',
			sessionId: 'sessionId',
			isCertState: 'commonModules/isCertificate',
			certUserInfo: 'commonModules/certUserInfo'
		}),
		...testDriving.mapGetters({
			carFuelList: testDrivingTypes.carFuelList, // 차량 엔진
			centerList: testDrivingTypes.centerList, // 센터 리스트
			carType: testDrivingTypes.carType, // H_3_차종+차량리스트
			carTypeCars: testDrivingTypes.carTypeCars, // 1_시승차종리스트
			carList: testDrivingTypes.carList, // 2_시승차종상세정보
			areaList: testDrivingTypes.areaList, // 3_찾아가는시승가능지역
			bookingreg: testDrivingTypes.bookingreg, // 11_시승예약등록
			saleModelCodeList: testDrivingTypes.saleModelCodeList
		}),
		btnCheck() {
			let res = true
			if (
				this.selectedEngin &&
				this.selectedCenter &&
				this.selectedCenter &&
				this.selectedCenter.orgCd &&
				this.selectedCar &&
				this.selectedCar &&
				this.selectedCar.prdnCarNo &&
				this.selectedService &&
				this.selectSchedule &&
				this.selectSchedule &&
				this.selectSchedule.ymd &&
				this.$refs.step5.check1 &&
				this.$refs.step5.check2 &&
				this.$refs.step5.check3
			) {
				res = false
			}
			return res
		}
	},
	async fetch({ store, route, redirect }) {
		// if (!store.state.isLogin) {
		// 	return redirect('/login', { login_redirect_url: route.fullPath })
		// }
		// API-WE-상품서비스-045 (시승 차량 판매모델 조회) ==>
		// EP_IF_오픈시승_007_차량별시승거점
		return await store.dispatch(`${testDrivingTypes.namespace}/${testDrivingTypes.postCarFuelList}`, {
			CHAN_SCN_CD: '07',
			ORG_SCN_CD: 'A',
			// ORG_TYPE_SCN_CD: '99',
			// CAR_MODEL_CD: query.carModelCd ? query.carModelCd : 'AX01',
			CAR_MODEL_CD: 'AX01',
			TSRD_YMD: dateFns.format(new Date(), 'YYYYMMDD'),
			TSRD_RQ_NO: dateFns.format(new Date(), 'YYYYMMDDHHmmss')
		})
	},
	mounted() {
		// if (!this.isLogin) {
		// 	location.href = `${process.env.CCSP_LOGIN_PATH}?response_type=code&client_id=${process.env.CCSP_CLIENT_ID}&redirect_uri=${process.env.CCSP_REDIRECT_URI}&state=login&scope=&lang=kr`
		// 	return
		// }
		//console.log(this.userInfo)
		// 만 21세 체크
		//this.ageCheck()

		// 년 6회 체크
		// 캐스퍼는 6회 제한 없음
		//this.bookingCheck()

		//로그인화면에서 리다이렉트 된 경우 이전 데이터 셋팅
		let reservationData = sessionStorage.getItem('reservationData')
		if (reservationData !== null) {
			this.reservationData = { ...JSON.parse(reservationData) }
			sessionStorage.removeItem('reservationData')
			if (this.reservationData.selectedEngin) {
				this.$refs.step1.setEngin(this.reservationData.selectedEngin)
			} else {
				this.reservationData = {}
			}
		} else if (this.$route.query.fuelScnCd && this.$route.query.fuelScnCd !== '') {
			let flag = false
			this.carFuelList?.forEach((item, index) => {
				if (item.fuelScnCd === this.$route.query.fuelScnCd) {
					flag = true
				}
			})
			if (flag) {
				this.$refs.step1.setEngin(this.$route.query.fuelScnCd)
			} else {
				this.$alert('시승 모델(엔진) 정보가 없습니다.')
				this.step1OptionsShow = true
			}
		} else {
			this.step1OptionsShow = true
		}
	},
	methods: {
		...testDriving.mapActions([
			testDrivingTypes.postCenterList,
			testDrivingTypes.postBookingSchedule,
			testDrivingTypes.postBookings,
			testDrivingTypes.postBookingreg,
			testDrivingTypes.postCarFuelList,
			testDrivingTypes.postHdotCustomerInfo
		]),
		stepChange(index) {
			if (index === 1) {
				if (this.step1OptionsShow === true) {
					this.testDrivingSlideToggle(1, 'close')
					if (this.currentStep !== 1) this.testDrivingSlideToggle(this.currentStep, 'open')
					if (this.currentStep === 2) {
						this.step2OptionsShow = true
					} else if (this.currentStep === 3) {
						this.step3OptionsShow = true
					} else if (this.currentStep === 4) {
						this.step4OptionsShow = true
					} else if (this.currentStep === 5) {
						this.step5OptionsShow = true
					}
				} else {
					this.testDrivingSlideToggle(1, 'open')
					this.testDrivingSlideToggle(2, 'close')
					this.step2OptionsShow = false
					this.testDrivingSlideToggle(3, 'close')
					this.step3OptionsShow = false
					this.testDrivingSlideToggle(4, 'close')
					this.step4OptionsShow = false
					this.testDrivingSlideToggle(5, 'close')
					this.step5OptionsShow = false
				}
				this.step1OptionsShow = !this.step1OptionsShow
			} else if (index === 2) {
				if (!this.selectedEngin) {
					this.alertMessage = '엔진을 선택해주세요'
					this.showAlert = true
					this.returnType = null
					return
				}
				if (this.step2OptionsShow === true) {
					this.testDrivingSlideToggle(2, 'close')
					if (this.currentStep !== 2) this.testDrivingSlideToggle(this.currentStep, 'open')
					if (this.currentStep === 1) {
						this.step1OptionsShow = true
					} else if (this.currentStep === 3) {
						this.step3OptionsShow = true
					} else if (this.currentStep === 4) {
						this.step4OptionsShow = true
					} else if (this.currentStep === 5) {
						this.step5OptionsShow = true
					}
				} else {
					this.testDrivingSlideToggle(2, 'open')
					this.testDrivingSlideToggle(1, 'close')
					this.step1OptionsShow = false
					this.testDrivingSlideToggle(3, 'close')
					this.step3OptionsShow = false
					this.testDrivingSlideToggle(4, 'close')
					this.step4OptionsShow = false
					this.testDrivingSlideToggle(5, 'close')
					this.step5OptionsShow = false
				}
				this.step2OptionsShow = !this.step2OptionsShow
			} else if (index === 3) {
				if (!this.selectedEngin) {
					this.alertMessage = '엔진을 선택해주세요'
					this.showAlert = true
					this.returnType = null
					return
				}
				if (!this.selectedCenter) {
					this.alertMessage = '드라이빙 라운지를 선택해주세요'
					this.showAlert = true
					this.returnType = null
					return
				}
				if (this.step3OptionsShow === true) {
					this.testDrivingSlideToggle(3, 'close')
					if (this.currentStep !== 3) this.testDrivingSlideToggle(this.currentStep, 'open')
					if (this.currentStep === 1) {
						this.step1OptionsShow = true
					} else if (this.currentStep === 2) {
						this.step2OptionsShow = true
					} else if (this.currentStep === 4) {
						this.step4OptionsShow = true
					} else if (this.currentStep === 5) {
						this.step5OptionsShow = true
					}
				} else {
					this.testDrivingSlideToggle(3, 'open')
					this.testDrivingSlideToggle(1, 'close')
					this.step1OptionsShow = false
					this.testDrivingSlideToggle(2, 'close')
					this.step2OptionsShow = false
					this.testDrivingSlideToggle(4, 'close')
					this.step4OptionsShow = false
					this.testDrivingSlideToggle(5, 'close')
					this.step5OptionsShow = false
				}
				this.step3OptionsShow = !this.step3OptionsShow
			} else if (index === 4) {
				if (!this.selectedEngin) {
					this.alertMessage = '엔진을 선택해주세요'
					this.showAlert = true
					this.returnType = null
					return
				}
				if (!this.selectedCenter) {
					this.alertMessage = '드라이빙 라운지를 선택해주세요'
					this.showAlert = true
					this.returnType = null
					return
				}
				if (!this.selectedCar) {
					this.alertMessage = '시승 차량을 선택해주세요'
					this.showAlert = true
					this.returnType = null
					return
				}
				if (!this.selectedService) {
					this.alertMessage = '시승 방법을 선택해주세요'
					this.showAlert = true
					this.returnType = null
					return
				}
				if (this.step4OptionsShow === true) {
					this.testDrivingSlideToggle(4, 'close')
					if (this.currentStep !== 4) this.testDrivingSlideToggle(this.currentStep, 'open')
					if (this.currentStep === 1) {
						this.step1OptionsShow = true
					} else if (this.currentStep === 2) {
						this.step2OptionsShow = true
					} else if (this.currentStep === 3) {
						this.step3OptionsShow = true
					} else if (this.currentStep === 5) {
						this.step5OptionsShow = true
					}
				} else {
					this.testDrivingSlideToggle(4, 'open')
					this.testDrivingSlideToggle(1, 'close')
					this.step1OptionsShow = false
					this.testDrivingSlideToggle(2, 'close')
					this.step2OptionsShow = false
					this.testDrivingSlideToggle(3, 'close')
					this.step3OptionsShow = false
					this.testDrivingSlideToggle(5, 'close')
					this.step5OptionsShow = false
				}
				this.step4OptionsShow = !this.step4OptionsShow
			}
		},
		async setEngin(val) {
			this.currentStep = await 2
			this.selectedEngin = await val
			this.selectedCenter = await null
			this.selectedCar = await null
			this.selectedService = await null
			this.selectSchedule = await null
			this.step1OptionsShow = await false

			// 전시장안내 => 시승신청 기획 검토 필요
			if (this.$route.query.testDriveCenterCode && this.$route.query.testDriveCenterCode !== '') {
				// 전시장 안내 testDriveCenterCode 있을때
				// EP_IF_오픈시승_006_시승거점 상세정보
				this.step2OptionsShow = await true
				this.testDrivingSlideToggle(2, 'open')
				await this.$refs.step2.setAgency(this.$route.query.testDriveCenterCode, val)
			} else {
				// const isPopupShow = this.$moment(new Date(), 'YYYYMMDD').isBefore(this.$moment('20211221', 'YYYYMMDD'))
				// if (isPopupShow) {
				// 	if (Cookie.get('testDrivingPop') !== 'dayChecked') {
				// 		this.popVisible = true
				// 	}
				// }

				// 전시장 안내 testDriveCenterCode 없을때
				// EP_IF_오픈시승_004_시승거점(시도)
				await this.$refs.step2.init(val)
				await this.$refs.step3.reset(val)
				await this.$refs.step4.reset(val)
				await this.$refs.step5.reset()
				// this.stepChange(2)
				// document.documentElement.scrollTop = 187 * (1 - 1) + this.$refs.wrap.offsetTop

				if (this.reservationData.selectedCenter && this.reservationData.selectedCenter !== '') {
					const res = await this.$refs.step2.setSelectedCenter(this.reservationData.selectedCenter)
					if (!res) {
						this.reservationData = {}
						this.stepChange(2)
						document.documentElement.scrollTop = 187 * (1 - 1) + this.$refs.wrap.offsetTop
					}
				} else {
					this.stepChange(2)
					document.documentElement.scrollTop = 187 * (1 - 1) + this.$refs.wrap.offsetTop
				}
			}
		},
		async setCenter(val) {
			this.currentStep = await 3
			this.selectedCenter = await val
			this.selectedService = await null
			this.selectedCar = await null
			this.selectSchedule = await null
			this.step2OptionsShow = await false

			await this.$refs.step3.reset(val)
			// EP_IF_오픈시승_002_시승차종상세정보
			await this.$refs.step3.init(val, this.selectedEngin)
			await this.$refs.step4.reset(val)
			await this.$refs.step5.reset()
			// this.stepChange(3)

			if (this.reservationData.selectedCar && this.reservationData.selectedService && this.reservationData.selectedService !== '') {
				const res = await this.$refs.step3.setCarInfo(this.reservationData)
				if (!res) {
					this.reservationData = {}
					this.stepChange(3)
					document.documentElement.scrollTop = 187 * (2 - 1) + this.$refs.wrap.offsetTop
				}
			} else {
				this.stepChange(3)
				document.documentElement.scrollTop = 187 * (2 - 1) + this.$refs.wrap.offsetTop
			}
		},
		async setCarService(val) {
			this.selectedCar = await val
			this.selectSchedule = await null
			await this.$refs.step4.reset(val)
			await this.$refs.step5.reset()
			if (this.selectedService) {
				this.currentStep = await 4
				// EP_IF_오픈시승_009_시승예약스케줄
				await this.$refs.step4.init()

				if (this.reservationData.selectSchedule && this.reservationData.selectSchedule !== '') {
					await this.$refs.step4.setSchedule(this.reservationData.selectSchedule)
				} else {
					this.stepChange(4)
					document.documentElement.scrollTop = 187 * (3 - 1) + this.$refs.wrap.offsetTop
				}
			}
		},
		async setService(val) {
			this.selectedService = await val
			this.selectSchedule = await null
			await this.$refs.step4.reset(val)
			await this.$refs.step5.reset()
			if (this.selectedCar) {
				this.currentStep = await 4
				// EP_IF_오픈시승_009_시승예약스케줄
				await this.$refs.step4.init()
				this.stepChange(4)
				document.documentElement.scrollTop = 187 * (4 - 1) + this.$refs.wrap.offsetTop
			}
		},
		async setSchedule(val) {
			this.currentStep = await 5
			this.selectSchedule = await val
			await this.$refs.step5.reset()
			this.step1OptionsShow = await false
			this.step2OptionsShow = await false
			this.step3OptionsShow = await false
			this.step4OptionsShow = await false
			this.testDrivingSlideToggle(5, 'open')
			this.step5OptionsShow = await true
			document.documentElement.scrollTop = 187 * (5 - 1) + this.$refs.wrap.offsetTop

			if (this.reservationData.selectedStepCheck && this.reservationData.selectedStepCheck !== '') {
				await this.$refs.step5.setSelectedCheck(this.reservationData.selectedStepCheck)
				await this.onComplete()
			}
		},
		async onComplete() {
			if (!this.$refs.step5.check1 || !this.$refs.step5.check2 || !this.$refs.step5.check3) {
				this.alertMessage = '서비스 이용 동의를 선택해 주세요.'
				this.showAlert = true
				this.returnType = null
				return
			}
			if (!this.selectedEngin) {
				this.alertMessage = '시승 모델 (엔진)을 선택해 주세요.'
				this.showAlert = true
				this.returnType = null
				return
			}
			if (!this.selectedCenter || (this.selectedCenter && !this.selectedCenter.orgCd)) {
				this.alertMessage = '드라이빙라운지를 선택해 주세요.'
				this.showAlert = true
				this.returnType = null
				return
			}
			if (!this.selectedCar || (this.selectedCar && !this.selectedCar.prdnCarNo)) {
				this.alertMessage = '시승 차량을 선택해 주세요.'
				this.showAlert = true
				this.returnType = null
				return
			}
			if (!this.selectedService) {
				this.alertMessage = '시승 방법을 선택해 주세요.'
				this.showAlert = true
				this.returnType = null
				return
			}
			if (!this.selectSchedule || (this.selectSchedule && !this.selectSchedule.ymd)) {
				this.alertMessage = '시승 일정을 선택해주세요.'
				this.showAlert = true
				this.returnType = null
				return
			}

			//test중_start
			// 만 21세 체크
			//this.ageCheck()

			if (!this.isLogin) {
				let link = '/vehicles/test-driving'
				let alert = {
					callback: () => {
						const reservationData = {
							selectedEngin: this.selectedEngin,
							selectedCenter: this.selectedCenter,
							selectedCar: this.selectedCar,
							selectedService: this.selectedService,
							selectSchedule: this.selectSchedule,
							selectedStepCheck: {
								step5Check1: this.$refs.step5.check1,
								step5Check2: this.$refs.step5.check2,
								step5Check3: this.$refs.step5.check3,
								step5Check4: this.$refs.step5.check4
							}
						}

						sessionStorage.setItem('reservationData', JSON.stringify(reservationData))
						sessionStorage.setItem('login_redirect_url', link)

						this.$router.push('/login')
					},
					cancel: () => {}
				}
				this.$nuxt.$emit('loginCheck', alert)
				// location.href = `${process.env.CCSP_LOGIN_PATH}?response_type=code&client_id=${process.env.CCSP_CLIENT_ID}&redirect_uri=${process.env.CCSP_REDIRECT_URI}&state=login&scope=&lang=kr`
			} else {
				//test중_end
				const hpNo = this.userInfo?.hpNo ? this.formatPhoneNumber(this.userInfo.hpNo + '') : null || null
				if (!hpNo) {
					this.alertMessage = '시승신청자의 휴대전화번호가 없습니다.휴대전화정보가 없으면, 신청이 불가 합니다.'
					this.showAlert = true
					this.returnType = null
					return
				}

				// 만 21세 체크
				this.ageCheck()

				// 년 6회 체크
				// 캐스퍼는 6회 제한 없음
				this.bookingCheck()

				if (!dateFns.isToday(this.curr)) {
					this.alertMessage = '하루가 지났습니다.다시 진행해 주십시요.'
					this.showAlert = true
					this.returnType = 'refrash'
					this.$router.push({
						name: 'vehicles-test-driving'
					})
					return
				}

				var homeZip = ''
				var homeAdrSbc = ''
				var homeDtlAdrSbc = ''

				// API-WX-고객정보서비스-006 (현대닷컴 회원정보 연동 조회)
				await this[testDrivingTypes.postHdotCustomerInfo]({
					csmrMgmtNo: this.userInfo?.csmrMgmtNo
				}).then((res) => {
					if (res && res.customerInfo && res.customerInfo.length > 0) {
						homeZip = res.customerInfo[0].homeZip
						homeAdrSbc = res.customerInfo[0].homeAdrSbc
						homeDtlAdrSbc = res.customerInfo[0].homeDtlAdrSbc
					}
				})
				// if (this.userInfo && Object.keys(this.userInfo).length && !this.completeActiveFlag) {
				//   this.setUserInfo()
				//   console.log('userInfo', this.userInfo)
				//   this.guideAlert = true
				//   return
				// }

				// EP_IF_오픈시승_009_시승예약스케줄
				await this[testDrivingTypes.postBookingSchedule]({
					CHAN_SCN_CD: '07',
					ORG_SCN_CD: 'A',
					ORG_CD: this.selectedCenter.orgCd,
					ORG_TYPE_SCN_CD: this.selectedCenter.orgTypeScnCd,
					PRDN_CAR_NO: this.selectedCar.prdnCarNo,
					TSRD_RQ_NO: dateFns.format(new Date(), 'YYYYMMDDHHmmss'),
					TSRD_SVC_CD:
						this.selectedService === 'service'
							? 'A01'
							: this.selectedService === 'visit' || this.selectedService === 'evService'
							? 'A02'
							: this.selectedService === 'self'
							? 'A03'
							: this.selectedService === 'untact'
							? 'A04'
							: ''
				}).then((data) => {
					// 스케쥴 데이터가 있을 경우
					let matchedScheduleList = []
					const startTime = this.selectSchedule.timeStrart && Number(this.selectSchedule.timeStrart)

					if ([50, 70].includes(Number(this.selectedCenter.orgTypeScnCd))) {
						// 지점, 대리점
						// 스케줄 데이터에서 신청 날짜의 데이터만 추출.

						matchedScheduleList = data.filter((items) => {
							if (startTime < 1200) {
								return items.prct_YMD === this.selectSchedule.ymd && Number(items.prct_TIM_START) < 1200
							} else if (startTime >= 1200) {
								return items.prct_YMD === this.selectSchedule.ymd && Number(items.prct_TIM_START) >= 1200
							}

							return items.prct_YMD === this.selectSchedule.ymd
						})
					} else {
						// 드라이빙라운지 && 캐스퍼
						matchedScheduleList = data.filter((items) => {
							return items.prct_YMD === this.selectSchedule.ymd && Number(items.prct_TIM_START) === startTime // time: Number Type
						})
					}
					// 시승 가능 여부 체크
					let possibleYn = matchedScheduleList.some((items) => {
						return items.prct_YN === 'N'
					}) // true: 예약 불가능, false: 예약 가능

					// 데이터 없을 경우 예약 불가능
					if (matchedScheduleList && matchedScheduleList.length === 0) possibleYn = true

					let reqData = {
						ORG_TYPE_SCN_CD: this.selectedCenter.orgTypeScnCd,
						CHAN_SCN_CD: '07', // 채널구분코드(시승플랫폼: 01, 홈페이지: 02, 현대모터스튜디오: 03, 제네시스거점: 04, 컨피규레이터: 05, 플랫폼(임직원몰): TBD)
						ORG_SCN_CD: 'A', // 시승거점코드(시승센터, 현대, 서울, 강남, 코엑스디지털: A,  지점, 제네시스, 고양, 하남, 고양오토스퀘어: B,  대리점, 하남, 남부서비스센터: C)
						CHAN_TSRD_PRCT_NO: '', // 채널고유신청번호
						SBCR_BIRTH_YMD: this.userInfo.birYmd || '99991231', // 예약자생년월일
						SBCR_SEX: ['M', '1'].includes(this.userInfo.sexScd) ? '1' : '2', //예약자 성별
						USER_AUTH_YN: 'Y', // 본인인증여부
						SBCR_YN: this.userInfo && Object.keys(this.userInfo).length ? '01' : '02', // 회원구분(회원: 01, 비회원: 02)
						USER_ETC: '', // 고객특이사항(정상고객: A, 유의고객: B)
						SBCR_ID: '', // 예약자ID
						SBCR_IPIN_KEY: '', // 예약자IPIN키
						SBCR_CCPC: hpNo, // 예약자연락처
						SBCR_EML_ADR: this.userInfo.userEmail || '', // 예약자이메일주소
						SBCR_VIST_ZIP: homeZip, // 도로명 주소(우편번호)
						SBCR_VIST_TH1_ADR: homeAdrSbc, // 도로명 주소(기본주소)
						SBCR_VIST_TH2_ADR: homeDtlAdrSbc, // 도로명 주소(상세주소)
						SBCR_VIST_TH3_ADR: '', // 도로명 주소(상세주소)
						SBCR_VIST_TH4_ADR: '', // 도로명 주소(상세주소)
						SBCR_VIST_TH5_ADR: '', // 참고주소
						TSRD_TH1_ZIP: this.addr.zipCode || '', // 방문시승 주소(우편번호)
						TSRD_TH1_ADR: this.addr.address1 || '', // 방문시승도로명 주소1
						TSRD_TH2_ADR: this.addr.address2 || '', // 방문시승도로명 주소1
						TSRD_TH3_ADR: this.addr.address3 || '', // 방문시승도로명 주소2
						TSRD_TH4_ADR: this.addr.addrDetail || '', // 방문시승도로명 주소3
						TSRD_TH5_ADR: this.addr.addrDetail || '', // 참고주소
						PRCT_INFO_AGR_YN: 'Y', // 시승유의사항확인 여부
						PRCT_INFO_AGR_YMD: dateFns.format(this.curr, 'YYYYMMDDHHmmss'), // 시승유의사항확인 일시
						PRCT_INFO_CJGT_AGR_YN: 'Y', // 개인정보활용동의 여부
						PRCT_INFO_CJGT_AGR_YMD: dateFns.format(this.curr, 'YYYYMMDDHHmmss'), // 개인정보활용동의 일시
						PRCT_MARKETING_YN: this.$refs.step5.check4 === true ? 'Y' : 'N', // 마케팅동의여부
						PRCT_MARKETING_YN_YMD: this.$refs.step5.check4 === true ? dateFns.format(this.curr, 'YYYYMMDDHHmmss') : '', // 마케팅동의여부 일시
						TSRD_SVC_CD:
							this.selectedService === 'service'
								? 'A01'
								: this.selectedService === 'visit' || this.selectedService === 'evService'
								? 'A02'
								: this.selectedService === 'self'
								? 'A03'
								: this.selectedService === 'untact'
								? 'A04'
								: '', // 시승서비스코드(찾아가는시승: A01, 방문시승: A02)
						TSRD_PRCT_SCN_CD: 'A', // 시승예약구분코드(고객예약: A, 별도전담: B, 직원시승: C, 판촉활동: D)
						VIST_PATH_SCN_CD: 'A', // 방문경로구분코드 (인터넷: A, 카마스터신청: B, 전화: C, 방문: D, 비포서비스: E, 시승이벤트: F, 기타: G)
						CM_ASSIG_CD: '', // 동승카마스터 배정구분
						ORG_CD: this.selectedCenter.orgCd, // 시승센터코드
						VIN_NO: '', // 타대번호(생산번호)
						PRDN_CAR_NO: this.selectedCar.prdnCarNo, // 생산번호
						PRCT_SBC: this.applyText || '', // 예약내용
						CM_EENO: '', // 카마스터사원번호
						RGHQ_CD: '', // 지역본부코드
						PRCT_YMD: this.selectSchedule.ymd, // 예약년월일
						PRCT_SN: '', // 시승순번
						PRCT_TIM_START: this.selectSchedule.timeStrart, // 시승예약시작시간
						PRCT_TIM_END: this.selectSchedule.timeEnd, // 시승예약종료시간
						PRCT_ST_CD: 'D', // 예약상태코드(취소: C, 대기: D, 매칭: M, 확정: O, 완료: R)
						PRCT_MY_TIM: this.transMeridiemCode(this.selectSchedule.meridiem), // 예약희망시간 ==> 지점/대리점일 경우에만 셋팅 (오전: A, 오후: P)
						PRCT_PTT_DTM: '', // 예약신청일시
						TSRD_PHB_RSON_SBC: '' // 시승불가사유내용
					}

					if (!possibleYn) {
						// EP_IF_오픈시승_011_시승예약등록
						this[testDrivingTypes.postBookingreg](reqData)
							.then((res) => {
								if (res) {
									this.drivingInfo.usrNa = this.userInfo.userName || ''
									this.drivingInfo.usrCp = hpNo
									if (res.data.infoResponse.prct_YN === 'Y') {
										this.$router.push({
											name: 'vehicles-test-driving-complete',
											params: {
												drivingInfo: this.drivingInfo,
												centerInfo: this.selectedCenter,
												selectedCar: this.selectedCar
											}
										})
									}
								}
							})
							.finally(() => {
								this.$nuxt.$loading.finish()
							})
							.catch((err) => {
								this.$nuxt.$loading.finish()
							})
					} else {
						this.$alert('해당 시간은 신청이 마감되었습니다.')
						this.fnScheduleInit() // 캘린더 초기화
					}
				})
			}
		},
		async fnScheduleInit() {
			this.selectSchedule = await null
			await this.$refs.step4.reset()
			await this.$refs.step4.init()
			this.step4OptionsShow = await true
			document.documentElement.scrollTop = 187 * (4 - 1) + this.$refs.wrap.offsetTop
		},
		updateUserAddr(val, idx) {
			this.$refs.step2.setCenterList(val, this.selectedEngin)
			this.offPostCode()
		},
		offPostCode() {
			this.postCodeVisible.address = false
			document.querySelector('body').classList.remove('el-popup-parent--hidden')
		},
		// 만 21세 체크
		ageCheck() {
			const { birYmd } = this.userInfo
			// 조건 : ( 만 21세 이상시 예약 가능 / 만 21세 미만일 경우 예약 불가능 )
			if (birYmd) {
				let age = this.$moment().diff(birYmd, 'year')
				if (age < 21) {
					// 예약 불가능합니다 !!
					this.alertMessage = '보험 적용 기준에 따라<br />만 21세 이상부터 시승 서비스를 이용하실 수 있습니다.'
					this.showAlert = true
					this.returnType = 'main'
					return
				}
			} else {
				// 선택날짜와 사용자의 생년월일이 유효하지 않을 경우
				// TODO: alert 필요시 해당 라인에 넣을 것
				console.log('날짜 포맷이 유효하지 않습니다.')
				this.alertMessage = '생년월일이 유효하지 않습니다.'
				this.showAlert = true
				this.returnType = 'main'
				return
			}
		},
		// 년 6회 체크로직
		bookingCheck() {
			const hpNo = this.userInfo && this.userInfo.hpNo ? this.userInfo.hpNo.slice(-4) : ''

			// EP_IF_오픈시승_012_시승예약내역
			this[testDrivingTypes.postBookings]({
				CHAN_SCN_CD: '07',
				ORG_SCN_CD: 'A',
				ORG_CD: this.selectedCenter.orgCd,
				ORG_TYPE_SCN_CD: this.selectedCenter.orgTypeScnCd
			}).then((res) => {
				// 기존 infoResponse, DisplayResponse 체크 로직 ==> CheckResponse 체크 로직으로 변경
				if (res && res.data.CheckResponse && res.data.CheckResponse.prctYn === 'N') {
					if (this.isLogin) {
						this.alertMessage = res.data.CheckResponse.msg || ''
						this.showAlert = true
						this.returnType = 'mypage'
					} else {
						location.href = `${process.env.CCSP_LOGIN_PATH}?response_type=code&client_id=${process.env.CCSP_CLIENT_ID}&redirect_uri=${process.env.CCSP_REDIRECT_URI}&state=login&scope=&lang=kr`
						return
					}
					return
				}
			})
		},
		transMeridiemCode(meridiem = '') {
			// 오전, 오후 ==> 매칭되는 코드값으로 변경
			let resultStr = ''
			switch (true) {
				case meridiem === '오전':
					resultStr = 'A'
					break
				case meridiem === '오후':
					resultStr = 'P'
					break
			}
			return resultStr
		},
		formatPhoneNumber(number) {
			return number
				? number
						.replace(/[^0-9]/g, '')
						.replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/, '$1-$2-$3')
						.replace('--', '-')
				: '000-0000-0000'
		},
		confirm() {
			this.showAlert = false
			if (this.returnType && this.returnType === 'main') {
				this.$router.push({
					path: '/'
				})
			} else if (this.returnType && this.returnType === 'refrash') {
				this.$router.push({
					name: 'vehicles-test-driving'
				})
			} else if (this.returnType && this.returnType === 'mypage') {
				this.$router.push({
					name: 'mypage-test-driving'
				})
			}
		}
		// onCloseNotice() {
		// 	if (this.isDayCheck) {
		// 		Cookie.set('testDrivingPop', 'dayChecked', {
		// 			expires: 1
		// 		})
		// 	}
		// 	this.popVisible = false
		// }
	}
}
</script>
