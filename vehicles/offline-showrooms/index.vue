<template>
	<div class="content vehicles offline-showroom">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="전시/시승 안내" page-infotext="가까운 곳에서 캐스퍼를 만나보세요." />

		<div class="offline-showroom-wrap">
			<div class="position-info">
				<div class="total">
					검색결과
					<b>{{ showroomList && showroomList.total }}</b>
					건
				</div>
				<!-- <div class="my-pos">
					<span class="t-gray">
						<i class="icon-index"></i>
						<span>{{ (address && address.roadAddr) || '' }}</span>
					</span>
					&nbsp;
					<v-btn class="btn-pos-change" @click="postCodeVisible.address = true">위치수정</v-btn>
				</div> -->
			</div>
			<div class="map-guide-area other-case">
				<div class="map-list custom-scroll-area">
					<ul v-if="showroomList && showroomList.list && showroomList.list.length > 0" class="list">
						<li v-for="(item, index) in showroomList.list" :key="index">
							<div class="pos-info" :class="{ on: index === clickIdx }" @click="onCenterClick(index)">
								<div class="title">
									<span class="seq">{{ index + 1 }}</span>
									<b class="bold">
										{{ item.showroomName ? item.showroomName : '' }}
										<!-- {{ item.showroomName ? ' 전시장' : '' }} -->
									</b>
									<span class="km">{{ item.distance.charAt(0) === '.' ? '0' + item.distance : item.distance }}km</span>
								</div>
								<div class="address">
									{{ item.showroomAddress }}
								</div>
								<div v-if="item.operationStartDate" class="text">
									<span class="label">운영 기간</span>
									{{ item.operationStartDate ? $moment(item.operationStartDate).format('YYYY. MM. DD') + ' - ' : ''
									}}{{ item.operationEndDate ? $moment(item.operationEndDate).format('YYYY. MM. DD') : '' }}
								</div>
								<!-- <div class="text t-black">전시 중인 차량 {{ item.displayCarCount ? item.displayCarCount : '0' }}대</div> -->
								<div class="text t-black"
									>전시 중인 차 {{ item.displayCarCount ? item.displayCarCount : '0' }}대<template v-if="item.testDrivingCarCount > 0"
										>, 시승 가능 차 {{ item.testDrivingCarCount }}대</template
									></div
								>
								<div class="txt">
									<div class="flag-list">
										<!-- <span v-if="item.showroomTypeCode" class="flag">
											{{ item.showroomTypeCode === '01' ? '전용 전시장' : item.showroomTypeCode === '02' ? '팝업 전시' : '' }}
										</span> -->
										<span v-if="item.consultAvailYn && item.consultAvailYn === 'Y'" class="flag">구매 안내 가능</span>
										<span v-else class="flag">셀프체험</span>
										<span v-if="item.testDriveAvailYn && item.testDriveAvailYn === 'Y'" class="flag">시승가능</span>
									</div>
									<div class="right">
										<v-btn type="button" class="btn sm gray" @click.stop="onCenterClick(index, true)">자세히 보기</v-btn>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<!-- <div v-if="showroomList && main-floating showroomList.total > 10">
						<v-pagination :page.sync="page" :size="10" :total="showroomList.total" :page-count="5" @page-change="pageChange" />
					</div> -->
				</div>

				<div ref="mapBox" class="map-view"></div>
				<div v-show="popVisible" ref="testDriveClickPop" class="map-tooltip">
					<v-btn class="close" @click="onMapPopClose"><span class="offscreen">툴팁닫기</span></v-btn>
					<div class="pos-info">
						<div ref="tootip_title" class="title">
							<span class="seq">{{ clickIdx + 1 }}</span>
							<b class="bold">
								{{ centerData ? (centerData.showroomName ? centerData.showroomName : '') : '' }}
								<!-- {{ centerData ? (centerData.showroomName ? ' 전시장' : '') : '' }} -->
							</b>
							<v-btn type="button" class="kakaomap" @click="openKakaoMap()">
								<i class="icon-kakaomap"><span class="offscreen">카카오맵으로보기</span></i>
							</v-btn>
						</div>
						<div class="date" :style="{ height: centerData && centerData.operationStartDate ? null : '18px' }">
							{{
								centerData
									? centerData.operationStartDate
										? '운영 기간 : ' + $moment(centerData.operationStartDate).format('YYYY. MM. DD') + ' - '
										: ' '
									: ' '
							}}{{ centerData ? (centerData.operationEndDate ? $moment(centerData.operationEndDate).format('YYYY. MM. DD') : '') : '' }}
						</div>
						<div class="flag-list no-pad">
							<div class="left">
								<template class="flag-list">
									<!-- <span v-if="centerData && centerData.showroomTypeCode" class="flag">
										{{ centerData.showroomTypeCode === '01' ? '전용 전시장' : centerData.showroomTypeCode === '02' ? '팝업 전시' : '' }}
									</span> -->
									<span v-if="centerData && centerData.consultAvailYn && centerData.consultAvailYn === 'Y'" class="flag">구매 안내 가능</span>
									<span v-else class="flag">셀프체험</span>
									<span v-if="centerData && centerData.testDriveAvailYn && centerData.testDriveAvailYn === 'Y'" class="flag">시승가능</span>
								</template>
							</div>
							<div class="right">
								<v-btn type="button" class="btn sm gray" @click.stop="centerSelected(clickIdx)">자세히 보기</v-btn>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 위치수정  -->
		<Address :pop-visible="postCodeVisible" @updateAddr="updateUserAddr" @offModal="offPostCode"></Address>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import loadScriptOnce from 'load-script-once'
import Address from '~/components/page/vehicles/test-driving/popup/Address'
import * as csStore from '~/store/customer-support'
import * as csTypes from '~/store/customer-support/types'
import * as pgStore from '~/store/purchase-guide'
import * as pgTypes from '~/store/purchase-guide/types'
import * as addrData from '~/plugins/utils/data'

let kakao = global.kakao
export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 전시/시승 안내',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대자동차 대리점, 캐스퍼 전시장, 캐스퍼 실차, 캐스퍼 체험' },
				{ 'data-n-head': 'ssr', name: 'description', content: '가까운 현대자동차 전시장에서 캐스퍼를 체험해보세요. 캐스퍼 실차 체험 정보를 안내합니다.' },
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/offline-showrooms' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 전시/시승 안내' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '가까운 현대자동차 전시장에서 캐스퍼를 체험해보세요. 캐스퍼 실차 체험 정보를 안내합니다.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 전시/시승 안내' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '가까운 현대자동차 전시장에서 캐스퍼를 체험해보세요. 캐스퍼 실차 체험 정보를 안내합니다.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/offline-showrooms' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/offline-showrooms' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/offline-showrooms' }
			]
		}
	},
	components: {
		Address
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '체험', link: '/' },
				{ linkName: '전시/시승 안내', link: '/' }
			],
			popVisible: false,

			postCodeVisible: {
				// 주소검색 노출 여부
				address: false,
				index: null
			},

			page: 1,

			geocoder: null,
			agencyZoomDefaultLv: 13,
			map: {},
			marker: [],
			markerOverlay: [], // 마커 커스텀오버레이
			// 커스텀 오버레이: 마우스 클릭시 사용
			customOverlay2: null,

			address: {
				roadAddr: null,
				siNm: null,
				sggNm: null
			},

			// 현재 위치에 따른 좌표 - 초기값: 서울시 서초구 헌릉로 12
			addrPos: {
				latitude: 37.4643623227152,
				longitude: 127.042663599215
			},

			// 위치 검색에 따른 좌표
			searchPos: {
				latitude: null,
				longitude: null,
				radius: 5
			},

			mapSearch: false,
			centerData: null,
			clickIdx: null
		}
	},
	computed: {
		...csStore.mapGetters({
			displayCarSearchCar: csTypes.displayCarSearchCar
		}),
		...pgStore.mapGetters({
			showroomList: pgTypes.showroomList
		}),
		...mapGetters({
			kakaomapId: 'kakaomapIDModules/kakaomapId',
			kakaomapresult: 'kakaomapIDModules/result'
		})
	},
	async mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:쇼룸:오프라인:목록',
						siteSection: '차량',
						siteSubsection: '쇼룸'
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

					this.initMap()
				})
			})
			.catch((err) => {
				console.error(err)
			})
	},
	methods: {
		...csStore.mapActions([csTypes.getDisplayCarSearchCar]),
		...pgStore.mapActions([pgTypes.getShowrooms]),
		...mapActions({
			getKakaoId: 'kakaomapIDModules/getKakaoId'
		}),
		async getDisplayCar(res) {
			// API-WX-고객지원서비스-005 (전시장 목록 조회)
			await this[pgTypes.getShowrooms]({
				latitude: res && res.latitude ? res.latitude : this.addrPos.latitude, // 현재 위도
				longitude: res && res.longitude ? res.longitude : this.addrPos.longitude, // 현재 반경
				mapLatitude: '', // 지도상 위도
				mapLongitude: '', // 지도상 경도
				radius: '', // 반경
				showroomTypeCode: '', // 전시장 구분코드(전용전시장=01 팝업전시장=02)
				// searchFilter: '', // 검색조건
				// deliveryAreaCode: '', // 광역시코드
				// localAreaCode: '', // 시군구코드
				pageNo: this.page, // 현재 페이지번호
				pageSize: 100 // 페이징 사이즈
			}).then((res) => {
				this.displayMarker()
			})
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

			const bounds = new kakao.maps.LatLngBounds()

			if (this.showroomList && this.showroomList.list && this.showroomList.list.length > 0) {
				this.showroomList.list.map((item, i) => {
					// const imgOptions = {
					// 	spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
					// 	spriteOrigin: new kakao.maps.Point(0, i * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
					// 	offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
					// }
					const imageSrc = require('~/assets/images/common/ico-mapidx.png')
					// const imageSrc = this.BASE_PATH + '/images/marker_number_blue.png' // 마커 이미지 url, 스프라이트 이미지를 씁니다
					// 마커 이미지의 이미지 크기 입니다
					let imageSize = new kakao.maps.Size(36, 37)
					// 마커 이미지를 생성합니다
					let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
					// 마커를 표시할 위치
					let position = new kakao.maps.LatLng(item.latitude, item.longitude)
					// 마커를 생성합니다
					let markerShape = new kakao.maps.Marker({
						map: vm.map, // 마커를 표시할 지도
						position: position, // 마커를 표시할 위치
						title: item.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
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

					bounds.extend(position)
				})
				// 마커설정
				this.marker.map((items) => {
					items.setMap(this.map)
				})
				// 마커 커스텀오버레이 설정
				this.markerOverlay.map((items) => {
					items.setMap(this.map)
				})

				if (!this.mapSearch) {
					this.map.setBounds(bounds)
				}
				this.map.setLevel(13)
			} else {
				this.marker.map((items) => {
					items.setMap(null)
				}) // 마커초기화
				this.marker = []

				this.markerOverlay.map((items) => {
					items.setMap(this.map)
				})
				this.markerOverlay = []
			}
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

			this.centerData = this.showroomList.list[index]
			this.clickIdx = index

			const customOverlayPos = new kakao.maps.LatLng(this.showroomList.list[index].latitude, this.showroomList.list[index].longitude)
			const contents = await this.$refs.testDriveClickPop
			this.customOverlay2 = new kakao.maps.CustomOverlay({
				position: customOverlayPos,
				content: contents,
				xAnchor: 0.5,
				yAnchor: 1.3
			})
			this.customOverlay2.setMap(this.map)

			this.map.setLevel(5)
			this.map.panTo(customOverlayPos)
			document.querySelectorAll('.map-idx_' + index)[0]?.classList.add('on')
			if (flag) {
				this.centerSelected(index)
			}
		},
		async centerSelected(index) {
			this.$router.push({
				name: 'vehicles-offline-showrooms-detail',
				query: { showroomCode: this.showroomList.list[index].showroomCode }
			})
		},
		async initMapDetail() {
			// kakao map 초기 셋팅
			// this.map = await new kakao.maps.Map(this.$refs.mapBox, {
			// 	// 권한 요청 여부 판단 이전 default map view setting
			// 	center: new kakao.maps.LatLng(37.4643623227152, 127.042663599215),
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
			this.map.setZoomable(false)

			// 브라우저 현재위치 좌표--> 주소로 변환 하는 부분
			this.setAddressByPos()

			return nowPos
		},
		async initMap() {
			this.initMapDetail().then((res) => {
				const { latitude, longitude } = res
				this.searchPos = { latitude, longitude }
				// 초기 위치 값에 따른 조회
				const initRadius = this.getDistance(new kakao.maps.LatLng(latitude, longitude), this.map.getBounds().getSouthWest())
				this.searchPos.radius = Math.floor(initRadius / 1000)

				this.getDisplayCar()
				// this.displayMarker()
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
			} else {
				console.log('--------------------------------------------')
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
		fnChangeOrgTypeName(typeCode = '') {
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
				case typeCode === '99':
					name = '드라이빙라운지'
					break
			}
			return name
		},
		// 위치 검색 => 드라이빙 라운지 검색 후 지도 위치 변경
		async updateUserAddr(juso) {
			this.page = 1
			this.mapSearch = true
			const { roadAddr, roadAddrPart1, siNm, sggNm } = juso
			this.address = { roadAddr: roadAddrPart1, siNm, sggNm }

			await this.setMapByAddress(roadAddr)
		},
		// 주소로 위치셋팅
		async setMapByAddress(addr) {
			const address = addr || this.address.roadAddr
			await this.geocoder.addressSearch(address, (result, status) => {
				if (status === kakao.maps.services.Status.OK) {
					this.addrPos.latitude = result[0].y
					this.addrPos.longitude = result[0].x
					const reCenterPos = new kakao.maps.LatLng(this.addrPos.latitude, this.addrPos.longitude)
					this.map.setCenter(reCenterPos) // 좌표값으로 맵 이동
					this.getDisplayCar({ latitude: this.addrPos.latitude, longitude: this.addrPos.longitude })
				}
			})
			this.offPostCode()
		},
		offPostCode() {
			this.postCodeVisible.address = false
		},
		async pageChange(page) {
			this.mapSearch = await false
			await this.onMapPopClose()
			this.page = await page
			await this.getDisplayCar()
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
		async openKakaoMap() {
			const { showroomName = '', latitude = '', longitude = '' } = this.centerData
			let name = showroomName || ''

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
		}
	}
}
</script>

<style lang="scss" scoped>
.map-tooltip {
	top: auto !important;
	bottom: 38px !important;
	left: -180px !important;
	z-index: 2;
	background-color: #fff;
}
</style>
