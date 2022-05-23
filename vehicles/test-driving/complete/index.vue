<template>
	<div class="content vehicles test-driving">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="시승 신청" page-infotext="캐스퍼가 제공하는 편리한 시승 서비스를 이용해보세요." />
		<div class="test-driving-wrap">
			<div class="test-driving-complete-wrap">
				<div class="test-driving-complete">
					<div class="title">
						<b class="tit">시승 신청 완료</b>
						<p class="stxt">
							시승 신청이 완료되었습니다.
							<br />
							고객님께서 신청하신 내용은 아래와 같습니다.
						</p>
					</div>
					<div class="car-img">
						<v-img :src="srcPath" :alt="srcPath"></v-img>
					</div>
					<!-- 정보 -->
					<div class="driving-compelete-info">
						<ul>
							<li>
								<div class="tit">신청 상태</div>
								<div class="desc">
									<p class="txt">{{ bookingList ? (bookingList.prctStNm ? '시승 ' + bookingList.prctStNm : '') : '' }}</p>
								</div>
							</li>
							<li>
								<div class="tit">시승 장소</div>
								<div class="desc">
									<p class="txt bold">
										{{
											(selectedCenter && selectedCenter.orgTypeScnCd) === '99'
												? (selectedCenter && selectedCenter.orgTypeScnNm) || ''
												: selectedCenter && selectedCenter.orgNm
												? fnChangeOrgTypeName(selectedCenter.orgTypeScnCd, selectedCenter.orgNm)
												: ''
										}}
									</p>
									<p class="txt">
										{{ bookingList ? (bookingList.tsrdAdr ? bookingList.tsrdAdr : '') : '' }}
										<br />
										{{ bookingList ? (bookingList.tsrdTn ? bookingList.tsrdTn : '') : '' }}
									</p>
									<v-btn class="btn-more" @click="showDrivingRounge">찾아오시는 길</v-btn>
								</div>
							</li>
							<li>
								<div class="tit">시승 차량</div>
								<div class="desc">
									<p class="txt">
										{{ bookingList ? (bookingList.carn ? bookingList.carn : '') : '' }}
										{{ bookingList && bookingList.saleCarCtyNo && bookingList.saleCarCtyNo.substring(3, 4) === 'V' ? 'VAN' : '' }}
										{{ bookingList ? (bookingList.fuelScnNm ? bookingList.fuelScnNm : '') : '' }}
										{{ bookingList ? (bookingList.trimNm ? bookingList.trimNm : '') : '' }}
									</p>
									<ul class="c-list">
										<li>
											<span class="label">외장색상</span>
											<span class="color">{{ bookingList ? (bookingList.xrclCtyNm ? bookingList.xrclCtyNm : '') : '' }}</span>
										</li>
										<li>
											<span class="label">내장색상</span>
											<span class="color">{{ bookingList ? (bookingList.ieclCtyNm ? bookingList.ieclCtyNm : '') : '' }}</span>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div class="tit">시승방법/일시</div>
								<div class="desc">
									<p class="txt">{{ bookingList ? (bookingList.tsrdSvcNm ? bookingList.tsrdSvcNm + ' 서비스' : '') : '' }}</p>
									<p class="txt">{{ formattedDateDat(bookingList.tsrdPrctYmd) }} {{ formattedTime(bookingList) }}</p>
								</div>
							</li>
							<li>
								<div class="tit">시승자 정보</div>
								<div class="desc">
									<p class="txt">{{ bookingList ? (bookingList.usrNa ? bookingList.usrNa : '') : '' }}</p>
									<p class="txt">{{ userCp }}</p>
								</div>
							</li>
						</ul>
					</div>
					<!-- // 정보 -->
					<ul class="bullet-list">
						<li>시승을 위해 드라이빙라운지/CASPER STUDIO 방문 시, 운전면허증을 지참해주세요.</li>
						<li>시승 당일에 예약을 취소하실 경우, 추후 시승 서비스 신청에 제약이 있을 수 있습니다.</li>
					</ul>
				</div>
				<div class="btn-box">
					<v-btn class="btn lg line blue" type="button" @click="popupVisible.checkPoint = true">시승 체크포인트</v-btn>
					<v-btn class="btn lg blue" @click="moveMypage">나의 시승신청 내역</v-btn>
				</div>
			</div>
		</div>

		<driving-lounge ref="drivingLounge" :visible.sync="popVisible" :data.sync="selectedCenter" @close="popVisible = false" />
		<popup :visible.sync="popupVisible" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import DrivingLounge from '~/components/page/vehicles/test-driving/popup/DrivingLounge'
import Popup from '~/components/page/vehicles/test-driving/popup'
import dateFns from 'date-fns'
import * as testDriving from '~/store/test-driving'
import * as testDrivingTypes from '~/store/test-driving/types'
import { apiProduct } from '~/ajax'

export default {
	head() {
		return {
			title: '체험 > 시승 신청'
		}
	},
	components: {
		DrivingLounge,
		Popup
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '체험', link: '/' },
				{ linkName: '시승 신청', link: '/' }
			],
			popupVisible: {
				drivingLounge: false,
				checkPoint: false
			},

			popVisible: false,

			userCp: '',
			selectedCenter: {},
			carSaleModelCodeInfoList: [],

			interiorColorName: '-',
			exteriorColorName: '-'
		}
	},
	computed: {
		...mapGetters({
			resEstimationInfo: 'reviewsModules/resEstimationInfo',
			isLogin: 'isLogin',
			userInfo: 'userInfo'
		}),
		...testDriving.mapGetters({
			bookingList: testDrivingTypes.bookingList
		}),
		params() {
			return this.$route.params
		},
		srcPath() {
			let filePath = ''
			if (this.params && this.params.selectedCar) {
				filePath = `${this.CONT_PATH}/wcontents/repn-car/side-45/AX01/${this.params.selectedCar.saleCarCtyNo}/${this.params.selectedCar.optCtyNo}/${this.params.selectedCar.xrclCtyNo}/l.png`
			}
			return filePath
		}
	},
	async asyncData({ params }) {
		return {
			selectedCenter: params.centerInfo,
			userCp:
				params.drivingInfo && params.drivingInfo.usrCp
					? params.drivingInfo.usrCp
							.replace(/[^0-9]/g, '')
							.replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/, '$1-$2-$3')
							.replace('--', '-')
					: ''
		}
	},
	created() {
		try {
			if (this.$nuxt.context.from && this.$nuxt.context.from.name === 'mypage-test-driving') {
				history.go(-2)
			}
		} catch (e) {
			console.log(e)
		}

		if (!this.params.drivingInfo || !this.params.centerInfo) {
			this.$router.push({ path: `/mypage/test-driving` })
		} else if (this.params.drivingInfo && this.params.centerInfo) {
			this.$store
				.dispatch(`${testDrivingTypes.namespace}/${testDrivingTypes.postBookingList}`, {
					CHAN_SCN_CD: '07',
					ORG_SCN_CD: 'A',
					ORG_CD: this.params.centerInfo.orgCd,
					ORG_TYPE_SCN_CD: this.params.centerInfo.orgTypeScnCd
				})
				.then((data) => {
					console.log(data)
					apiProduct
						.getCarImageInfo({
							saleModelCode: data.saleCarCtyNo,
							imageSectionCode: '02'
						})
						.then((data) => {
							const [res, err] = data
							if (err) return
							this.carSaleModelCodeInfoList = res.data.length > 0 ? res.data : ''
							// let completeWebJson = {
							//   vehicle_code: this.carSaleModelCodeInfoList.length > 0 ? this.carSaleModelCodeInfoList[0].carCode : '',
							//   vehicle_name: this.carSaleModelCodeInfoList.length > 0 ? this.carSaleModelCodeInfoList[0].carName : '',
							//   vehicle_engine:
							//     this.carSaleModelCodeInfoList.length > 0 ? this.carSaleModelCodeInfoList[0].carEnginName : '',
							//   vehicle_body_style:
							//     this.carSaleModelCodeInfoList.length > 0 ? this.carSaleModelCodeInfoList[0].carBodyName : '',
							//   vehicle_drive_train:
							//     this.carSaleModelCodeInfoList.length > 0 ? this.carSaleModelCodeInfoList[0].carDriveName : '',
							//   vehicle_transmission:
							//     this.carSaleModelCodeInfoList.length > 0 ? this.carSaleModelCodeInfoList[0].carMissionName : '',
							//   vehicle_trim:
							//     this.carSaleModelCodeInfoList.length > 0 ? this.carSaleModelCodeInfoList[0].carTrimName : '',
							//   vehicle_exterior_color: '',
							//   vehicle_interior_color: '',
							//   vehicle_amenities: [],
							//   vehicle_TUIX: [],
							//   test_drive_location: this.bookingList.tsrdCtrNm,
							//   test_drive_type: this.bookingList.tsrdSvcNm, //방문서비스|찾아가는 서비스
							//   test_drive_time: this.bookingList.tsrdTim // 시승신청 된 방문 신청 시간
							// }
							// window._satellite.track('book_a_test_drive_complete', completeWebJson)
						})
				})
		}
	},
	methods: {
		formattedDateDat(val) {
			return dateFns.format(val, 'YYYY년 MM월 DD일')
		},
		formattedTime(obj) {
			// prctMyTim : 오전,오후
			// tsrdTim: 예약시간
			const { prctMyTim = '', tsrdTim = '' } = obj

			if (prctMyTim) {
				// 지점/대리점
				switch (true) {
					case prctMyTim === 'A':
						return '오전'
					case prctMyTim === 'P':
						return '오후'
				}
				return ''
			} else {
				// 드라이빙라운지
				let res = ''
				if (tsrdTim) res = tsrdTim.split('-')
				return res && res.length > 0 ? res[0] : res
			}
		},
		fnChangeOrgTypeName(typeCode = '', orgNm) {
			// 시승 거점 유형 코드별 명칭
			let name = ''
			// 지점 50, 대리점 70, 캐스퍼 전용 95, 드라이빙라운지 99
			switch (true) {
				case typeCode === '50':
					name = '지점'
					break
				case typeCode === '70':
					name = '대리점'
					break
				case typeCode === '95':
					name = orgNm
					break
				case typeCode === '99':
					name = '드라이빙라운지 ' + orgNm
					break
			}
			return name
		},
		async showDrivingRounge() {
			await this.$refs.drivingLounge.init()
			this.popVisible = await true
		},
		moveMypage() {
			this.$router.push({ path: `/mypage/test-driving` })
		}
	}
}
</script>
