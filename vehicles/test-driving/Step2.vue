<template>
	<div class="toggle-area2" :class="{ completed: centerData && centerData.orgNm, active: isOptionsShow }">
		<div class="information-detail" :class="{ active: isOptionsShow }">
			<div class="summary-info">
				<h1 class="title">STEP 2. 시승 장소</h1>
				<div class="right">
					<span class="text bold">
						{{ selectedCenter ? (selectedCenter.orgNm ? fnChangeOrgTypeName(selectedCenter.orgTypeScnCd, selectedCenter.orgNm) : '') : '' }}
					</span>
					<v-btn v-if="centerData && centerData.orgNm" class="btn-change" @click="showChange">
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
			<p class="step-guide-text">원하시는 시승 장소를 선택해주세요.</p>
			<div class="matching-list">
				<div class="list-row">
					<div class="total">
						검색결과
						<b class="t-blue">{{ centerSortList.length }}</b>
						건
					</div>
				</div>
			</div>
			<div class="map-guide-area">
				<div class="map-list">
					<ul class="list">
						<li v-for="(item, index) in centerSortList" :key="index">
							<div class="pos-info" :class="{ on: index === clickIdx }" @click="onCenterClick(index)">
								<div class="title">
									<span class="seq">{{ index + 1 }}</span>
									<b class="bold">{{ fnChangeOrgTypeName(item.orgTypeScnCd, item.orgNm) }}</b>
									<span class="km">{{ getDistance(item.latitude, item.longitude) }}km</span>
								</div>
								<div class="address">{{ item.waraAdr }} {{ item.dtlAdr }}</div>
								<div class="phone">{{ item.tn }}</div>
								<div class="txt">
									<div v-if="item.orgTypeScnCd && item.orgTypeScnCd === '95'" class="flag-list">
										<span class="flag">캐스퍼 전용</span>
									</div>
									<div class="right">
										<v-btn class="btn sm gray" @click.stop="onCenterClick(index, true)">선택</v-btn>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div ref="mapBox" class="map-view"></div>
				<div v-show="popVisible" ref="testDriveClickPop" class="map-tooltip">
					<v-btn class="close" @click="onMapPopClose"><span class="offscreen">툴팁닫기</span></v-btn>
					<div class="pos-info">
						<div class="title">
							<span class="seq">{{ clickIdx + 1 }}</span>
							<b class="bold">{{ centerData ? (centerData.orgNm ? fnChangeOrgTypeName(centerData.orgTypeScnCd, centerData.orgNm) : '') : '' }}</b>
							<v-btn type="button" class="kakaomap" @click="openKakaoMap()">
								<i class="icon-kakaomap"><span class="offscreen">카카오맵으로보기</span></i>
							</v-btn>
						</div>
						<div class="flag-list">
							<div class="left">
								<template v-if="centerData && centerData.orgTypeScnCd && centerData.orgTypeScnCd === '95'" class="flag-list">
									<span class="flag">캐스퍼 전용</span>
								</template>
							</div>
							<div class="right">
								<v-btn class="btn sm gray" @click.stop="mapSelected(clickIdx)">선택</v-btn>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as testDriving from '~/store/test-driving'
import * as testDrivingTypes from '~/store/test-driving/types'
import { apiTestDriving } from '~/ajax'
import loadScriptOnce from 'load-script-once'
import dateFns from 'date-fns'
import _ from 'lodash'
import * as addrData from '~/plugins/utils/data'

let kakao = global.kakao
export default {
	props: {
		isOptionsShow: {
			type: Boolean,
			default: false
		},
		selectedEngin: {
			type: String,
			default: ''
		},
		excludeModelList: {
			type: Array,
			default: () => []
		},
		selectedCenter: {
			type: Object,
			default: null
		}
	},
	data() {
		return {
			centerSortList: [],

			address: {
				roadAddr: null,
				siNm: null,
				sggNm: null
			},

			addrPos: {
				latitude: null,
				longitude: null
			},

			// 위치 검색에 따른 좌표
			searchPos: {
				latitude: null,
				longitude: null,
				radius: 5
			},

			geocoder: null,
			agencyZoomDefaultLv: 13,
			map: {},
			marker: [],
			markerOverlay: [], // 마커 커스텀오버레이

			popVisible: false,
			centerData: null,
			clickIdx: null,
			// 커스텀 오버레이: 마우스 클릭시 사용
			customOverlay2: null
		}
	},
	computed: {
		...testDriving.mapGetters({
			centerList: testDrivingTypes.centerList,
			saleModelCodeList: testDrivingTypes.saleModelCodeList
		}),
		...mapGetters({
			kakaomapId: 'kakaomapIDModules/kakaomapId',
			kakaomapresult: 'kakaomapIDModules/result'
		})
	},
	watch: {
		centerList(val) {
			// 센터목록 표시
			const positions = []
			if (val.length > 0) {
				val.filter((dataItem, index) => {
					// 지점 50, 대리점 70 ,EV스테이션 95, 드라이빙라운지 99 잠시동안만 드라이빙라운지만 보이도록 조출
					//if (!['50', '70', '95', '99'].includes(dataItem.orgTypeScnCd)) return

					const distance = this.getDistance(dataItem.latitude, dataItem.longitude) //거리순
					const data = {
						...dataItem,
						orgTypeScnNm: this.fnChangeOrgTypeName(dataItem.orgTypeScnCd, dataItem.orgNm),
						distance,
						isSelectActive: false
					}
					positions.push(data)
				})
			}
			this.centerSortList = _.orderBy(positions, ['distance'])
		}
	},
	async mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:시승 신청:step2',
						siteSection: '차량',
						siteSubsection: '시승 신청'
					}
				}
			}

			window._spaData(obj)
		})

		await loadScriptOnce(`https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.KAKAO_MAP_KEY}&libraries=services`)
			.then(async () => {
				await window.kakao.maps.load(() => {
					kakao = window.kakao
					this.geocoder = new kakao.maps.services.Geocoder()
					// this.marker = new kakao.maps.Marker()
				})
			})
			.catch((err) => {
				console.error(err)
			})
	},
	methods: {
		...testDriving.mapActions([testDrivingTypes.postCenterList]),
		...mapActions({
			getKakaoId: 'kakaomapIDModules/getKakaoId'
		}),
		async init(val) {
			this.centerData = null
			this.clickIdx = null
			// 브라우저 현재위치 가져오는 부분
			const { latitude, longitude } = await this.getPosition()

			this.addrPos = { latitude, longitude }
			// 센터 조회
			// EP_IF_오픈시승_004_시승거점(시도)
			await this[testDrivingTypes.postCenterList]({
				CHAN_SCN_CD: '07',
				ORG_SCN_CD: 'A',
				STA_NM: '',
				CNT_NM: '',
				CAR_MODEL_CD: this.saleModelCodeList[0].CARMODELCD, // 차량 코드
				FUEL_SCN_CD: val === '0000' ? '' : val, // 선택한 엔진 코드
				TSRD_RQ_NO: dateFns.format(new Date(), 'YYYYMMDDHHmmss'),
				EXCLUDE_MODEL_LIST: this.excludeModelList
			})
			setTimeout(() => {
				this.initMap()
			}, 200)
		},
		async initMapDetail() {
			// kakao map 초기 셋팅
			// this.map = await new kakao.maps.Map(this.$refs.mapBox, {
			// 	// 권한 요청 여부 판단 이전 default map view setting
			// 	center: new kakao.maps.LatLng(37.486219, 127.033676),
			// 	level: this.agencyZoomDefaultLv, // 지도의 확대 레벨
			// 	disableDoubleClick: true
			// })

			// 브라우저 현재위치 가져오는 부분
			const { latitude, longitude } = await this.getPosition()

			this.addrPos = { latitude, longitude }
			const nowPos = { latitude, longitude }
			const zoomControl = new kakao.maps.ZoomControl()
			// Map 생성
			this.map = new kakao.maps.Map(this.$refs.mapBox, {
				center: new kakao.maps.LatLng(this.addrPos.latitude, this.addrPos.longitude), // 지도의 중심좌표
				level: this.agencyZoomDefaultLv, // 지도의 확대 레벨
				disableDoubleClick: true
			})

			this.map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)
			this.map.setZoomable(true)

			// 브라우저 현재위치 좌표--> 주소로 변환 하는 부분
			this.setAddressByPos()

			return nowPos
		},
		async initMap(isAgency, testDriveCenterCode, val) {
			this.initMapDetail().then((res) => {
				const { latitude, longitude } = res
				this.searchPos = { latitude, longitude }
				// 초기 위치 값에 따른 조회
				const initRadius = this.getDistance(new kakao.maps.LatLng(latitude, longitude), this.map.getBounds().getSouthWest())
				this.searchPos.radius = Math.floor(initRadius / 1000)
				this.displayMarker()

				if (isAgency) this.setAgencyData(testDriveCenterCode, val)
			})
		},
		async mapSelected(index) {
			this.$emit('completed', this.centerSortList[index])
		},
		showChange() {
			this.$emit('stepChange', 2)
		},
		errorHandler(error) {
			if (error.code === 1) {
				console.log('접근 차단')
			} else if (error.code === 2) {
				console.log('위치를 반환할 수 없습니다.')
			}
		},
		displayMarker() {
			let vm = this
			this.marker.map((items) => {
				items.setMap(null)
			}) // 마커초기화
			this.marker = []

			this.markerOverlay.map((items) => {
				items.setMap(null)
			}) // 마커 커스텀오버레이 초기화
			this.markerOverlay = []

			// let markerPosition = new kakao.maps.LatLng(this.addrPos.latitude, this.addrPos.longitude)
			// let marker = new kakao.maps.Marker({
			// 	position: markerPosition
			// })
			// this.marker.push(marker)

			if (this.centerSortList && this.centerSortList.length > 0) {
				this.centerSortList.map((item, i) => {
					// const imgOptions = {
					// 	spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
					// 	spriteOrigin: new kakao.maps.Point(0, i * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
					// 	offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
					// }
					const imageSrc = require('~/assets/images/common/ico-mapidx.png')
					//  this.BASE_PATH + '/assets/images/common/ico-mapidx.png' // 마커 이미지 url, 스프라이트 이미지를 씁니다
					// 마커 이미지의 이미지 크기 입니다
					let imageSize = new kakao.maps.Size(25, 30)
					// 마커 이미지를 생성합니다
					let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
					// 마커를 생성합니다
					let markerShape = new kakao.maps.Marker({
						map: vm.map, // 마커를 표시할 지도
						position: new kakao.maps.LatLng(item.latitude, item.longitude), // 마커를 표시할 위치
						image: markerImage, // 마커 이미지
						clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
						zIndex: -1,
						opacity: 0.000001
					})
					// 마커에 클릭이벤트를 등록합니다
					kakao.maps.event.addListener(markerShape, 'click', () => {
						this.onCenterClick(i)
					})
					this.marker.push(markerShape)

					// 마커 커스텀오버레이 세팅
					let customOverlay = new kakao.maps.CustomOverlay({
						position: new kakao.maps.LatLng(item.latitude, item.longitude),
						content: '<div class="map-idx map-idx_' + i + '">' + (i + 1) + '</div>',
						zIndex: -2,
						xAnchor: 0.38,
						yAnchor: 1
					})
					this.markerOverlay.push(customOverlay)
				})
			}

			// 마커설정
			this.marker.map((items) => {
				items.setMap(this.map)
			})
			// 마커 커스텀오버레이 설정
			this.markerOverlay.map((items) => {
				items.setMap(this.map)
			})
		},
		// 마커 클릭
		async onCenterClick(index, flag) {
			if (this.customOverlay2) {
				this.customOverlay2.setMap(null)
			}

			for (let i = 0; i < this.marker.length; i++) {
				if (i !== index) {
					this.marker[i].setZIndex(-1)
				} else {
					this.marker[i].setZIndex(1)
				}
			}
			for (let i = 0; i < this.markerOverlay.length; i++) {
				document.querySelectorAll('.map-idx')[i]?.classList.remove('on')
				if (i !== index) {
					this.markerOverlay[i].setZIndex(-2)
				} else {
					this.markerOverlay[i].setZIndex(2)
				}
			}
			this.popVisible = true

			this.centerData = this.centerSortList[index]
			this.clickIdx = index

			const customOverlayPos = new kakao.maps.LatLng(this.centerSortList[index].latitude, this.centerSortList[index].longitude)
			const contents = await this.$refs.testDriveClickPop
			this.customOverlay2 = new kakao.maps.CustomOverlay({
				position: customOverlayPos,
				content: contents,
				xAnchor: 0.5,
				yAnchor: 1.4
			})
			this.customOverlay2.setMap(this.map)

			this.map.setLevel(5)
			this.map.panTo(customOverlayPos)

			document.querySelectorAll('.map-idx_' + index)[0]?.classList.add('on')
			if (flag) {
				this.mapSelected(index)
			}
		},
		// 위치 검색 => 드라이빙 라운지 검색 후 지도 위치 변경
		setCenterList(juso, val) {
			const { roadAddr, roadAddrPart1, siNm, sggNm } = juso
			this.address = { roadAddr: roadAddrPart1, siNm, sggNm }

			this.onMapPopClose()

			this.setMapByAddress(roadAddr)

			this[testDrivingTypes.postCenterList]({
				CHAN_SCN_CD: '07',
				ORG_SCN_CD: 'A',
				// STA_NM: this.filterSiNm(siNm),
				STA_NM: '',
				CNT_NM: '',
				CAR_MODEL_CD: this.saleModelCodeList[0].CARMODELCD, // 차량 코드
				FUEL_SCN_CD: val === '0000' ? '' : val, // 선택한 엔진 코드
				TSRD_RQ_NO: dateFns.format(new Date(), 'YYYYMMDDHHmmss'),
				EXCLUDE_MODEL_LIST: this.excludeModelList
			}).then(() => {
				this.displayMarker()
			})
		},
		// 주소로 위치셋팅
		async setMapByAddress(addr, search) {
			const address = addr || this.address.roadAddr
			await this.geocoder.addressSearch(address, (result, status) => {
				if (status === kakao.maps.services.Status.OK) {
					this.addrPos.latitude = result[0].y
					this.addrPos.longitude = result[0].x
					const reCenterPos = new kakao.maps.LatLng(this.addrPos.latitude, this.addrPos.longitude)
					this.map.setCenter(reCenterPos) // 좌표값으로 맵 이동

					if (search) this.displayMarker()
				}
			})
		},
		// 주소 1Depth매핑
		get1DepthMapping(val) {
			for (let i = 0; i < addrData.default.address1.length; i++) {
				if (addrData.default.address1[i].value === val) {
					return addrData.default.address1[i].label
				} else {
					return val
				}
			}
		},
		// 좌표로 주소셋팅
		setAddressByPos() {
			const { latitude, longitude } = this.addrPos
			// 시,도
			this.geocoder.coord2RegionCode(longitude, latitude, (result, status) => {
				if (status === kakao.maps.services.Status.OK) {
					// eslint-disable-next-line camelcase
					const res = result.find(({ region_type }) => region_type === 'H')
					this.address.siNm = this.get1DepthMapping(res.region_1depth_name)
				}
			})

			// 상세주소
			this.geocoder.coord2Address(longitude, latitude, (result, status) => {
				if (status === kakao.maps.services.Status.OK) {
					// eslint-disable-next-line camelcase
					const { road_address, address } = result[0]
					// eslint-disable-next-line camelcase
					this.address.roadAddr = road_address ? road_address.address_name : address.address_name
				}
			})
		},
		// 현재 사용자 위치 가지고 오기
		async getPosition() {
			const [res, err] = await this.$clientUtils.getLocation()
			return err ? { latitude: 37.4643623227152, longitude: 127.042663599215 } : res
		},
		// 내위치에서 거리 구하기 (센터좌표)
		getDistance(lat, lng) {
			if (kakao && kakao.maps) {
				const distanceLine = new kakao.maps.Polyline({
					path: [new kakao.maps.LatLng(this.addrPos.latitude, this.addrPos.longitude), new kakao.maps.LatLng(lat, lng)]
				})
				let distanceMeter = 0
				distanceMeter = Math.round(distanceLine.getLength() / 1000)
				return distanceMeter
			}
		},
		fnChangeOrgTypeName(typeCode = '', orgNm) {
			// 시승 거점 유형 코드별 명칭
			let name = ''
			// 지점 50, 대리점 70 ,드라이빙라운지 99
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
		async onMapPopClose() {
			if (this.customOverlay2) {
				await this.customOverlay2.setMap(null)
			}
			for (let i = 0; i < this.marker.length; i++) {
				if (i !== this.clickIdx) {
					this.marker[i].setZIndex(-1)
				} else {
					this.marker[i].setZIndex(2)
				}
			}
			for (let i = 0; i < this.markerOverlay.length; i++) {
				document.querySelectorAll('.map-idx')[i]?.classList.remove('on')
				if (i !== this.clickIdx) {
					this.markerOverlay[i].setZIndex(-2)
				} else {
					this.markerOverlay[i].setZIndex(1)
				}
			}
			this.popVisible = await false
			this.customOverlay2 = await null
			this.clickIdx = await null
		},
		// 전시장 => 시승
		async setAgency(testDriveCenterCode, val) {
			this.centerData = await null
			this.clickIdx = await 0
			this.$nuxt.$loading.start()
			await setTimeout(() => {
				this.initMap(true, testDriveCenterCode, val)
			}, 1000)
			this.$nuxt.$loading.finish()
		},
		async setAgencyData(testDriveCenterCode, val) {
			// EP_IF_오픈시승_006_시승거점 상세정보
			const [res, err] = await apiTestDriving.postOrgDetail({
				ORG_TYPE_SCN_CD: !testDriveCenterCode.includes('AX') ? '99' : '95',
				CHAN_SCN_CD: '07',
				ORG_SCN_CD: 'A',
				ORG_CD: testDriveCenterCode,
				TSRD_RQ_NO: this.$moment().format('YYYYMMDDHHmmss')
			})
			if (!err && res && res.data && res.data[0]) {
				this.centerData = await res.data[0]
				await this.centerSortList.push(this.centerData)
				await setTimeout(() => {
					this.onCenterClick(0, true)
				}, 200)

				let query = Object.assign({}, this.$route.query)
				delete query.testDriveCenterCode
				this.$router.replace({ query })
			} else {
				this.$alert('드라이빙라운지 정보가 없습니다')
				let query = Object.assign({}, this.$route.query)
				delete query.testDriveCenterCode
				this.$router.replace({ query })
				this.init(val)
				return
			}
		},
		filterSiNm(val) {
			let res = ''
			switch (val) {
				case '서울특별시':
					res = '서울'
					break
				case '강원도':
					res = '강원'
					break
				case '경기도':
					res = '경기'
					break
				case '경상남도':
					res = '경상남도'
					break
				case '경상북도':
					res = '경상북도'
					break
				case '광주광역시':
					res = '광주'
					break
				case '대구광역시':
					res = '대구'
					break
				case '대전광역시':
					res = '대전'
					break
				case '부산광역시':
					res = '부산'
					break
				case '세종특별자치시':
					res = '세종'
					break
				case '울산광역시':
					res = '울산'
					break
				case '인천광역시':
					res = '인천'
					break
				case '전라남도':
					res = '전라남도'
					break
				case '전라북도':
					res = '전라북도'
					break
				case '제주특별자치도':
					res = '제주'
					break
				case '충청남도':
					res = '충청남도'
					break
				case '충청북도':
					res = '충청북도'
					break
				default:
					break
			}
			return res
		},
		async openKakaoMap() {
			const { orgTypeScnCd = '', orgNm = '', latitude = '', longitude = '' } = this.centerData
			let name = ''
			if (orgTypeScnCd === '1') {
				name = orgNm + ' 지점'
			} else if (orgTypeScnCd === '2') {
				name = orgNm + ' 대리점'
			} else if (orgTypeScnCd === '95') {
				name = orgNm
			} else if (orgTypeScnCd === '99') {
				name = '드라이빙라운지 ' + orgNm
			}

			// store check
			await this.getKakaoId({ name, latitude, longitude })

			if (this.kakaomapresult) {
				const mapID = this.kakaomapId
				window.open(`https://map.kakao.com/link/map/${mapID}`)
			} else {
				// 검색 결과 위도경도 정확하지 않으면 as-is
				const agent = navigator.userAgent.toLowerCase()
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || agent.indexOf('msie') != -1) {
					name = encodeURI(name)
				}
				window.open(`https://map.kakao.com/link/map/${name},${latitude},${longitude}`)
			}
		},
		async setSelectedCenter(selectedCenter) {
			let selectedCenterIndex = this.centerSortList.findIndex((ele) => ele.orgCd === selectedCenter.orgCd)
			if (selectedCenterIndex > -1) {
				await setTimeout(() => {
					this.onCenterClick(selectedCenterIndex, true)
				}, 1000)
				return true
			} else {
				return false
			}
		}
	}
}
</script>

<style lang="css" scoped>
.map-tooltip {
	top: auto !important;
	bottom: 38px !important;
	left: -180px !important;
	z-index: 2;
	background-color: #fff;
}
</style>
