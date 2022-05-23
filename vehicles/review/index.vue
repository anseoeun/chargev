<template>
	<div class="content vehicles vehicles-review">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="구매 후기" page-infotext="고객들의 후기를 확인해 보세요." />

		<div class="vehicles-review-wrap">
			<!-- total-satisfy -->
			<div class="total-satisfy">
				<div class="content-inner">
					<div class="rate-satisfy">
						<p class="txt">총 {{ epilogueStatistics && epilogueStatistics.epilogueCount ? epilogueStatistics.epilogueCount : '0' }}명 만족도</p>
						<div class="grade-wrap">
							<div class="grade-gage">
								<div
									class="bar"
									:style="`width:${epilogueStatistics.satisfactionScoreAvg ? Number(epilogueStatistics.satisfactionScoreAvg * 2) * 10 : 0}%`"
								></div>
							</div>
							<div class="grade">{{ epilogueStatistics.satisfactionScoreAvg || 0 }}</div>
						</div>
						<v-btn class="btn-more" @click="popupVisible.satisfaction = true">자세히 보기</v-btn>
					</div>
					<div class="detail-satisfy">
						<ul>
							<li>
								<span class="flag">성능</span>
								<div class="per">
									{{ epilogueStatistics && epilogueStatistics.stptChoiPrvs001Rate ? Math.round(epilogueStatistics.stptChoiPrvs001Rate) + '%' : '-' }}
								</div>
								<p class="txt">
									{{
										(epilogueStatistics.stptChoiPrvs001 &&
											Number(epilogueStatistics.stptChoiPrvs001) > 0 &&
											stptChoiPrvs001_list[Number(epilogueStatistics.stptChoiPrvs001) - 1].label) ||
											'-'
									}}
								</p>
							</li>
							<li>
								<span class="flag">공간</span>
								<div class="per">
									{{ epilogueStatistics && epilogueStatistics.stptChoiPrvs002Rate ? Math.round(epilogueStatistics.stptChoiPrvs002Rate) + '%' : '-' }}
								</div>
								<p class="txt">
									{{
										(epilogueStatistics.stptChoiPrvs002 &&
											Number(epilogueStatistics.stptChoiPrvs002) > 0 &&
											stptChoiPrvs002_list[Number(epilogueStatistics.stptChoiPrvs002) - 1].label) ||
											'-'
									}}
								</p>
							</li>
							<li>
								<span class="flag">디자인</span>
								<div class="per">
									{{ epilogueStatistics && epilogueStatistics.stptChoiPrvs003Rate ? Math.round(epilogueStatistics.stptChoiPrvs003Rate) + '%' : '-' }}
								</div>
								<p class="txt">
									{{
										(epilogueStatistics.stptChoiPrvs003 &&
											Number(epilogueStatistics.stptChoiPrvs003) > 0 &&
											stptChoiPrvs003_list[Number(epilogueStatistics.stptChoiPrvs003) - 1].label) ||
											'-'
									}}
								</p>
							</li>
							<li>
								<span class="flag">승차감</span>
								<div class="per">
									{{ epilogueStatistics && epilogueStatistics.stptChoiPrvs004Rate ? Math.round(epilogueStatistics.stptChoiPrvs004Rate) + '%' : '-' }}
								</div>
								<p class="txt">
									{{
										(epilogueStatistics.stptChoiPrvs004 &&
											Number(epilogueStatistics.stptChoiPrvs004) > 0 &&
											stptChoiPrvs004_list[Number(epilogueStatistics.stptChoiPrvs004) - 1].label) ||
											'-'
									}}
								</p>
							</li>
						</ul>
					</div>
				</div>
				<!-- // total-satisfy -->
			</div>

			<div class="content-inner">
				<p class="review-title">후기목록</p>
				<div class="top-noti-info">
					<div class="left inbl-wrap">
						<span class="btn-order">
							<v-btn :class="{ on: orderType === 1 }" :disabled="loading" @click="orderChange(1)">최신순</v-btn>
							<v-btn :class="{ on: orderType === 2 }" :disabled="loading" @click="orderChange(2)">평점높은순</v-btn>
							<v-btn :class="{ on: orderType === 3 }" :disabled="loading" @click="orderChange(3)">평점낮은순</v-btn>
						</span>
					</div>
					<div class="right">
						<v-checkbox :one-check="true" :checked.sync="photoReviewVal" :disabled="loading" @change="onChangePht($event)">포토후기</v-checkbox>
					</div>
				</div>
				<div class="top-noti-info sub-noti">
					<div class="left">
						<v-select v-model="enginVal" :data="carFuelList" value-key="carEngineCode" label-key="carEngineName" :disabled="loading" @input="onChangeEngine" />
						<v-select v-model="trimVal" :data="trimList" value-key="saleModelCode" label-key="saleModelName" :disabled="loading" />
						<span class="btns">
							<v-btn class="btn md blue line" type="button" :disabled="loading" @click="serach">검색</v-btn>
							<v-btn class="btn md blue line" type="button" :disabled="loading" @click="clear">
								초기화
								<i class="icon-reset"></i>
							</v-btn>
						</span>
					</div>
					<div class="right inbl-wrap">
						<v-btn class="btn md blue btn-review-write" type="button" :disabled="loading" @click="reviewRegist()">구매후기 작성</v-btn>
					</div>
				</div>
				<!-- list-board -->
				<div class="buying-review-list">
					<template v-if="epiloguesData && epiloguesData.list && epiloguesData.list.length > 0">
						<ul>
							<li v-for="(item, index) in epiloguesData.list" :key="index">
								<div class="title-wrap">
									<div class="title">{{ item.saleModelName }}</div>
									<div class="right">
										<div class="date">{{ item.regDate }} / {{ item.customerAgeSectionName }} / {{ item.customerGenderName }}</div>
									</div>
								</div>
								<div class="mid-row">
									<div class="grade-wrap">
										<v-rate :value="Number(item.satisfactionScore)" class="grade-check xs-size view"></v-rate>
										<span class="grade">{{ item.satisfactionScore }}</span>
									</div>
									<ul class="review-list">
										<li v-if="item.stptChoiPrvs001 && Number(item.stptChoiPrvs001) > 0">
											<span class="flag">성능</span>
											<span class="txt">{{ item.stptChoiPrvs001 && stptChoiPrvs001_list[Number(item.stptChoiPrvs001) - 1].label }}</span>
										</li>
										<li v-if="item.stptChoiPrvs002 && Number(item.stptChoiPrvs002) > 0">
											<span class="flag">공간</span>
											<span class="txt">{{ item.stptChoiPrvs002 && stptChoiPrvs002_list[Number(item.stptChoiPrvs002) - 1].label }}</span>
										</li>
										<li v-if="item.stptChoiPrvs003 && Number(item.stptChoiPrvs003) > 0">
											<span class="flag">디자인</span>
											<span class="txt">{{ item.stptChoiPrvs003 && stptChoiPrvs003_list[Number(item.stptChoiPrvs003) - 1].label }}</span>
										</li>
										<li v-if="item.stptChoiPrvs004 && Number(item.stptChoiPrvs004) > 0">
											<span class="flag">승차감</span>
											<span class="txt">{{ item.stptChoiPrvs004 && stptChoiPrvs004_list[Number(item.stptChoiPrvs004) - 1].label }}</span>
										</li>
									</ul>
									<div class="img">
										<v-img
											:src="
												`${CONT_PATH}/wcontents/repn-car/side-45/${item.carCode}/${item.saleModelCode}/${item.optionMixCode}/${item.exteriorColorCode}/s.png`
											"
											:alt="item.saleModelName"
										></v-img>
									</div>
								</div>
								<div class="desc">
									<!-- 사진 -->
									<div class="upload-view-list-wrap">
										<v-carousel-new
											v-if="item.imageFile"
											:data="item.imageFile"
											:navigation="true"
											:items-to-show="6.5"
											:items-to-slide="1"
											class="upload-view-list sm-size"
										>
											<template slot-scope="props">
												<div class="item">
													<v-btn class="img" @click="detail(item, index)">
														<v-img
															v-obj-src="{ src: srcUploadPath(props.item.fileGroupSn, props.item.fileSn), type: 'thum' }"
															:alt="props.item.fileName"
														></v-img>
													</v-btn>
												</div>
											</template>
										</v-carousel-new>
									</div>

									<div class="review" :class="{ on: reviewOpen[index] === true }">
										<div v-if="item.epilogueContents" class="review-text" v-html="toHtml(item.epilogueContents)"></div>
									</div>
									<div class="etc-menus">
										<v-btn
											class="good"
											:class="{ epilogueAssistY: isLogin && item.epilogueAssistYn === 'Y' }"
											@click="like(item.epilogueNumber, item.epilogueAssistYn)"
										>
											도움이 되었어요
											<!-- <span
												class="up"
												:class="{ disabled: isLogin && item.epilogueAssistYn === 'Y' }"
												:disabeld="isLogin && item.epilogueAssistYn === 'Y'"
												:style="{ cursor: !isLogin ? 'pointer' : item.epilogueAssistYn !== 'Y' ? 'pointer' : null }"
												@click="like(item.epilogueNumber, item.epilogueAssistYn)"
											> -->
											<span class="up">
												<span class="icon"></span>
												<span class="num">{{ item.likeCount }}</span>
											</span>
										</v-btn>
										<v-btn class="btn-more" @click="estimationPop(index)">동일 차량 견적내기</v-btn>
										<v-btn class="btn-more" @click="purchaseInfo(item, index)">
											구매차량 정보보기
										</v-btn>
										<v-btn v-if="item.epilogueContents && reviewOpen[index] === true" class="review-more close" @click="reviewOpenChange(index)"></v-btn>
										<v-btn v-else-if="item.epilogueContents && !reviewOpen[index]" class="review-more" @click="reviewOpenChange(index)"></v-btn>
									</div>
								</div>
							</li>
						</ul>
					</template>
					<template v-else>
						<div class="list-null only-text">
							<p>후기 내역이 없습니다.</p>
						</div>
					</template>
				</div>
				<!-- <div v-if="epiloguesData && epiloguesData.list && epiloguesData.list.length <= 0" class="btn-box t-right">
					<v-btn class="btn md white r" type="nlink">구매후기 보러가기</v-btn>
				</div> -->
				<v-pagination
					v-if="epiloguesData && epiloguesData.list && epiloguesData.list.length > 0"
					:total="epiloguesData.total"
					:page.sync="page"
					:size="10"
					@page-change="pageChange"
				/>
				<!-- 안내사항 -->
				<div class="page-notice">
					<div class="title big">유의사항</div>
					<p class="only-txt">
						아래 사항에 해당하는 경우 통보 없이 게시글이 삭제될 수 있습니다.
						<br />
						1) 차량과 무관한 내용 2) 명애훼손성, 모욕성 게시글 3) 그외 욕설 , 비방글 등 본 게시판 목적에 부적절한 게시글
					</p>
				</div>
				<!-- // 안내사항 -->
			</div>
		</div>

		<satisfaction :visible="popupVisible.satisfaction" :epilogue-statistics="epilogueStatistics" @close="popupVisible.satisfaction = false" />

		<photo-detail
			ref="photoDetail"
			:visible="popupVisible.photoDetail"
			:epilogue-seq="epilogueSeq"
			:detail-data="detailData"
			:detail-image="detailImage"
			:estimation-index="estimationIndex"
			:is-login="isLogin"
			@like="like"
			@estimationPop="estimationPop"
			@close="popupVisible.photoDetail = false"
		/>

		<purchase-info
			:visible="popupVisible.purchaseInfo"
			:res-epilogue-info="resEpilogueInfo"
			:res-purchase-epilogue-info="resPurchaseEpilogueInfo"
			:res-estimation-info="resEstimationInfo"
			:res-payment-amount-info="resPaymentAmountInfo"
			:estimation-index="estimationIndex"
			@estimationPop="estimationPop"
			@close="popupVisible.purchaseInfo = false"
		/>

		<!-- 동일차량 견적내기 -->
		<v-popup :width="'550px'" :visible="popEstimation" :footer="['confirm']" @confirm="moveEstimation" @close="popEstimation = false">
			<template slot="header">
				<div class="title">동일차량 견적내기</div>
			</template>
			<template slot="body">
				<ul class="bullet-list">
					<li>작성자의 구매 할인 내역은 포함되지 않습니다.</li>
					<li>동일 차량과 옵션으로 견적 진행됩니다.</li>
				</ul>
			</template>
		</v-popup>
	</div>
</template>

<script>
import { apiProduct, apiPurchase, apiMypage } from '~/ajax'
import * as pStore from '~/store/product'
import * as pTypes from '~/store/product/types'

import { mapGetters, mapActions } from 'vuex'
import { VBtn } from '~/components/element'
import PhotoDetail from '~/components/page/review/Detail'
import Satisfaction from '~/components/page/review/Satisfaction'
import PurchaseInfo from '~/components/page/review/PurchaseInfo'

export default {
	components: {
		VBtn,
		PhotoDetail,
		Satisfaction,
		PurchaseInfo
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '후기', link: '/' },
				{ linkName: '구매 후기', link: '/' }
			],
			loading: false,
			popupVisible: {
				photoDetail: false,
				satisfaction: false,
				purchaseInfo: false
			},
			popEstimation: false, // 동일차량 견적내기 팝업
			estimationIndex: null, // 동일차량 견적내기 인덱스
			//	성능 선택항목 리스트
			stptChoiPrvs001_list: [
				{ value: '1', label: '운전이 즐거워요.' },
				{ value: '2', label: '대체로 만족해요.' },
				{ value: '3', label: '조금 아쉬워요.' }
			],
			//	공간 선택항목 리스트
			stptChoiPrvs002_list: [
				{ value: '1', label: '공간이 충분해요.' },
				{ value: '2', label: '공간이 적당해요.' },
				{ value: '3', label: '적은 인원에게 적합해요.' }
			],
			//	디자인 선택항목 리스트
			stptChoiPrvs003_list: [
				{ value: '1', label: '마음에 쏙 들어요.' },
				{ value: '2', label: '매력적이에요.' },
				{ value: '3', label: '무난한 편이에요.' }
			],
			//	승차감 선택항목 리스트
			stptChoiPrvs004_list: [
				{ value: '1', label: '매우 편안해요.' },
				{ value: '2', label: '일상에서 타기 좋아요.' },
				{ value: '3', label: '탄탄하게 느껴져요.' }
			],
			reviewOpen: [false, false, false, false, false, false, false, false, false, false],
			imgList: [null, null, null, null, null, null, null, null, null, null],
			isSearch: false,
			serarchEnginVal: '',
			serarchTrimVal: '',

			page: 1,

			enginVal: '0000',
			trimVal: '0000',
			orderType: 1,
			photoReviewVal: false,

			epilogueFilter: null,

			carFuelList: [{ carEngineCode: '0000', carEngineName: '엔진전체' }],

			trimList: [
				{
					saleModelCode: '0000',
					saleModelName: '트림전체'
				}
			],

			epilogueSeq: '', //	구매후기상세 번호
			detailImage: [], // 구매후기상세 이미지
			detailData: {}, // 구매후기상세 데이터
			resEpilogueInfo: null,
			resPurchaseEpilogueInfo: null,
			resEstimationInfo: null,
			resPaymentAmountInfo: null
		}
	},
	computed: {
		...mapGetters({
			userInfo: 'userInfo',
			isLogin: 'isLogin',
			contractListInfo: 'mainModules/contractListInfo', // 나의 계약 정보 조회
			epilogueStatistics: 'product/epilogueStatistics', // 만족도 통계
			epiloguesData: 'reviewsModules/epiloguesData' // 구매후기 리스트
			// resContractEpilogueCheckInfo: 'reviewsModules/resContractEpilogueCheckInfo'
		})
	},
	async fetch({ store, params, query }) {
		await Promise.all([
			store.dispatch('reviewsModules/EpiloguesDataGet', {
				siteTypeCode: 'W',
				carCode: 'AX01',
				enginCode: '',
				trimCode: '',
				orderType: '1',
				phtgYn: null,
				pageNo: '1',
				pageSize: '10'
			}),
			store.dispatch(`${pTypes.namespace}/${pTypes.getEpilogueStatistics}`, {
				carCode: 'AX01',
				siteTypeCode: 'W'
			})
		])
	},
	async created() {
		// if (!this.$route.query.carModelCd) {
		// 	alert('잘못된 접근입니다.')
		// 	history.go(-1)
		// 	return
		// }

		const [res, err] = await apiProduct.getEpilogueFilter({
			siteTypeCode: 'W',
			carCode: 'AX01'
		})
		if (err) return
		if (res && res.data) {
			let carFuelList = [{ carEngineCode: '0000', carEngineName: '엔진전체' }]
			let trimList = [{ saleModelCode: '0000', saleModelName: '트림전체' }]
			this.epilogueFilter = res.data
			res.data.map((el) => {
				carFuelList.push(el)
			})
			this.carFuelList = carFuelList
			this.trimList = trimList
		}
	},
	async mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:구매후기',
						siteSection: '차량',
						siteSubsection: '구매 후기'
					}
				}
			}

			window._spaData(obj)
		})

		// if (this.isLogin && this.contractData) {
		// 	this.contractData.forEach((item, index) => {
		// 		if (
		// 			this.keyVisual.carCode === item.carCode &&
		// 			item.epilogueYn === 'N' &&
		// 			item.carMakeCertificateDate &&
		// 			this.$moment().isSameOrBefore(this.$moment(item.carMakeCertificateDate, 'YYYYMMDD').add(30, 'days'))
		// 		) {
		// 			if (item.saleCnttNo && item.saleCnttNo.length) {
		// 				this.contractNumber = item.saleCnttNo
		// 				this.saleModelCode = item.saleCarCtyNo
		// 				this.chkbtn = true
		// 			}
		// 		}
		// 	})
		// }
	},
	async beforeMount() {
		if (this.isLogin) {
			let action = await sessionStorage.getItem('login_redirect_action')
			sessionStorage.removeItem('login_redirect_action')
			if (action && action === 'like') {
				await this.like(sessionStorage.getItem('login_redirect_like_num'), sessionStorage.getItem('login_redirect_like_yn'))
			} else if (action && action === 'regist') {
				await this.reviewRegist()
			}
			sessionStorage.removeItem('login_redirect_like_num')
			sessionStorage.removeItem('login_redirect_like_yn')
		}
	},
	methods: {
		...mapActions([
			'reviewsModules/EpiloguesDataGet',
			'reviewsModules/PurchaseEpilogueInfoDataGet', // API-WE-구매서비스-048 (구매후기 계약정보 조회)
			'reviewsModules/PaymentAmountInfoDataGet', // API-E-결제서비스-003 (차량대금 결제정보 조회)		=>		구매정보
			'estimate/postTemporaryStorage', // API-WH-견적서비스-001 (내차만들기 임시저장)
			'myPageModules/GET_MY_CONTRACT_LIST' // 나의 구매내역 목록 조회
		]),
		...pStore.mapActions([pTypes.getCarSaleModelCodeInfo, pTypes.getEpilogueDetail]),
		getContractEpilogues() {
			if (this.isSearch) {
				this['reviewsModules/EpiloguesDataGet']({
					siteTypeCode: 'W',
					carCode: 'AX01',
					enginCode: this.serarchEnginVal === '0000' ? '' : this.serarchEnginVal,
					trimCode: this.serarchTrimVal === '0000' ? '' : this.serarchTrimVal,
					orderType: this.orderType,
					phtgYn: this.photoReviewVal === true ? 'Y' : null,
					pageNo: this.page,
					pageSize: '10'
				})
			} else {
				this['reviewsModules/EpiloguesDataGet']({
					siteTypeCode: 'W',
					carCode: 'AX01',
					enginCode: this.enginVal === '0000' ? '' : this.enginVal,
					trimCode: this.trimVal === '0000' ? '' : this.trimVal,
					orderType: this.orderType,
					phtgYn: this.photoReviewVal === true ? 'Y' : null,
					pageNo: this.page,
					pageSize: '10'
				})
			}
			this.reviewOpen = [false, false, false, false, false, false, false, false, false, false]
		},
		orderChange(i) {
			this.orderType = i
			this.getContractEpilogues()
			// this['reviewsModules/EpiloguesDataGet']({
			// 	siteTypeCode: 'W',
			// 	carCode: this.$route.query.carModelCd || 'IG08',
			// 	enginCode: '',
			// 	trimCode: '',
			// 	orderType: this.orderType,
			// 	phtgYn: this.photoReviewVal === true ? 'Y' : 'N',
			// 	pageNo: this.page,
			// 	pageSize: '10'
			// })
		},
		async onChangeEngine(val) {
			let trimList = [
				{
					saleModelCode: '0000',
					saleModelName: '트림전체'
				}
			]
			if (val !== '0000') {
				let find = await this.epilogueFilter.find((item) => {
					if (item.carEngineCode === val) {
						return item
					}
					return null
				})
				if (find && find.saleModelList) {
					trimList = await trimList.concat(find.saleModelList)
				}
			}
			this.trimList = await trimList
			this.trimVal = await '0000'
		},
		onChangePht() {
			this.page = 1
			this.getContractEpilogues()
		},
		serach() {
			console.log('serach')
			this.isSearch = true
			this.serarchEnginVal = this.enginVal
			this.serarchTrimVal = this.trimVal
			this.page = 1
			this.getContractEpilogues()
		},
		clear() {
			this.enginVal = '0000'
			this.trimVal = '0000'
		},
		async pageChange(val) {
			this.page = await val
			this.getContractEpilogues()
		},
		async purchaseInfo(item, i) {
			this.estimationIndex = await i
			console.log(item)
			const [res, err] = await apiProduct.getEpilogueDetail({
				siteTypeCode: 'W',
				epilogueSeq: item.epilogueNumber
			})
			if (err) {
				this.resEpilogueInfo = res.data
				return
			}
			if (res.data) {
				this.resEpilogueInfo = res.data
			}

			if (this.resEpilogueInfo !== null) {
				const [res, err] = await apiPurchase.getPurchaseEpilogue({
					contractNumber: this.resEpilogueInfo.contractNumber
				})
				if (err) {
					this.resPurchaseEpilogueInfo = res.data
					return
				}
				if (res.data) {
					this.resPurchaseEpilogueInfo = res.data
				}

				if (this.resPurchaseEpilogueInfo !== null) {
					const [res, err] = await apiProduct.getEstimationInfoName({
						carCode: this.resPurchaseEpilogueInfo.carCode,
						saleModelCode: this.resPurchaseEpilogueInfo.saleModelCode,
						optionMixCode: this.resPurchaseEpilogueInfo.optionMixCode,
						exteriorColorCode: this.resPurchaseEpilogueInfo.exteriorColorCode,
						interiorColorCode: this.resPurchaseEpilogueInfo.interiorColorCode,
						tuixMixCode: this.resPurchaseEpilogueInfo.tuixOptionCode,
						saleTypeCode: '',
						realityInteriorColorCode: this.resPurchaseEpilogueInfo.interiorColorCode || ''
					})
					if (err) {
						this.resEstimationInfo = res.data
						return
					}
					if (res.data) {
						this.resEstimationInfo = res.data
					}
				}

				// const [resp, errp] = await apiPayment.getPaymentAmountInfo({
				// 	saleContractNo: this.resEpilogueInfo.contractNumber
				// })
				// if (errp) {
				// 	this.resPaymentAmountInfo = resp.data
				// 	return
				// }
				// if (resp.data) {
				// 	this.resPaymentAmountInfo = resp.data
				// }
			}

			if (this.resEpilogueInfo !== null && this.resPurchaseEpilogueInfo !== null && this.resEstimationInfo !== null) {
				this.popupVisible.purchaseInfo = true
			}
		},
		reviewOpenChange(index) {
			this.reviewOpen.splice(index, 1, !this.reviewOpen[index])
		},
		srcUploadPath(fileGroupSn, fileSn) {
			if (fileGroupSn) {
				const url = '/api/bff/main/file/download/' + fileGroupSn + '/' + fileSn
				return url
			}
		},
		async detail(item, i) {
			this.estimationIndex = await i
			console.log(item)
			await this[pTypes.getEpilogueDetail]({
				epilogueSeq: item.epilogueNumber,
				siteTypeCode: 'W'
			}).then((res) => {
				console.log(res)
				this.epilogueSeq = item.epilogueNumber
				this.detailData = res
				this.detailImage = item.imageFile
				this.popupVisible.photoDetail = true
			})
		},
		async like(epilogueNumber, epilogueAssistYn, flag) {
			if (!this.isLogin) {
				// this.$alert('로그인 후 가능합니다.')

				let alert = {
					callback: () => {
						sessionStorage.setItem('login_redirect_url', this.$route.fullPath)
						sessionStorage.setItem('login_redirect_action', 'like')
						sessionStorage.setItem('login_redirect_like_num', epilogueNumber)
						sessionStorage.setItem('login_redirect_like_yn', epilogueAssistYn)
						this.$router.push('/login')
					},
					cancel: () => {}
				}
				this.$nuxt.$emit('loginCheck', alert)
				return
			}
			if (epilogueAssistYn !== 'Y') {
				console.log(epilogueNumber)
				const [res, err] = await apiProduct.postEpilogueLike({
					epilogueNumber: epilogueNumber,
					epilogueAssistYn: 'Y'
				})
				if (err) return
				console.log(res)
			} else {
				console.log(epilogueNumber)
				const [res, err] = await apiProduct.postEpilogueLike({
					epilogueNumber: epilogueNumber,
					epilogueAssistYn: 'N'
				})
				if (err) return
				console.log(res)
			}
			this.getContractEpilogues()
			if (flag === 'pop') {
				this.detail(this.epiloguesData.list[this.estimationIndex], this.estimationIndex)
			}
		},
		async reviewRegist() {
			// console.log(
			// 	'%cMyProject%cline:517%c로그인 여부',
			// 	'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
			// 	'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
			// 	'color:#fff;background:rgb(17, 63, 61);padding:3px;border-radius:2px',
			// 	this.isLogin
			// )

			if (!this.isLogin) {
				// this.$alert('구매후기는 로그인후 작성할 수 있습니다.')

				let alert = {
					callback: () => {
						sessionStorage.setItem('login_redirect_url', this.$route.fullPath)
						sessionStorage.setItem('login_redirect_action', 'regist')
						this.$router.push('/login')
					},
					cancel: () => {}
				}
				this.$nuxt.$emit('loginCheck', alert)

				return
			}

			this.loading = true
			this.$nuxt.$loading.start()

			let contractList = []
			let contractNumber = null
			let saleModelCode = null
			const [res, err] = await apiMypage.getMyContract({ pageNo: 1, pageSize: 999 })
			if (err) {
				this.loading = false
				this.$nuxt.$loading.finish()
				return
			}

			if (res && res.data && res.data.list && res.data.list.length > 0) {
				contractList = await res.data.list.filter((item) =>
					this.$route.query.carModelCd ? item.carCode === this.$route.query.carModelCd : item.carCode === 'CN01'
				)
			}

			if (contractList && contractList.length > 0) {
				for (let i = 0; i < contractList.length; i++) {
					const [res2, err2] = await apiPurchase.getContractContractInfo({
						contractNumber: contractList[i].contractNumber
					})
					if (err2) {
						this.loading = false
						this.$nuxt.$loading.finish()
						return
					}
					if (
						res2 &&
						res2.data &&
						res2.data.epilogueYn === 'N' &&
						res2.data.carMakeCertificateRequestDate &&
						this.$moment().isSameOrBefore(this.$moment(res2.data.carMakeCertificateRequestDate, 'YYYYMMDD').add(30, 'days'))
					) {
						contractNumber = res2.data.contractNumber
						saleModelCode = res2.data.saleModelCode

						this.$router.push({
							name: 'mypage-review-regist',
							query: {
								carCode: 'AX01',
								contractNumber: res2.data.contractNumber,
								saleModelCode: res2.data.saleModelCode
							}
						})
						this.loading = false
						this.$nuxt.$loading.finish()
						return
					}
				}
			}

			if (!contractNumber && !saleModelCode) {
				this.$alert('구매후기는 구매후 작성할 수 있습니다.')
				this.loading = false
				this.$nuxt.$loading.finish()
				return
			}
		},
		async estimationPop(i) {
			this.popupVisible.photoDetail = false
			this.popupVisible.purchaseInfo = false
			this.estimationIndex = await i
			console.log(this.epiloguesData.list[i])
			this.popEstimation = await true
		},
		async moveEstimation() {
			const [res, err] = await apiProduct.getEpilogueDetail({
				siteTypeCode: 'W',
				epilogueSeq: this.epiloguesData.list[this.estimationIndex].epilogueNumber
			})
			if (err) {
				this.resEpilogueInfo = res.data
				return
			}
			if (res.data) {
				this.resEpilogueInfo = res.data
			}

			if (this.resEpilogueInfo !== null) {
				const [res, err] = await apiPurchase.getPurchaseEpilogue({
					contractNumber: this.resEpilogueInfo.contractNumber
				})
				if (err) {
					this.resPurchaseEpilogueInfo = res.data
					return
				}
				if (res.data) {
					this.resPurchaseEpilogueInfo = res.data
				}
			}

			await this['estimate/postTemporaryStorage']({
				carCode: this.epiloguesData.list[this.estimationIndex].carCode,
				carPrice: this.resPurchaseEpilogueInfo.carPrice,
				saleModelCode: this.epiloguesData.list[this.estimationIndex].saleModelCode,
				optionMixCode: this.epiloguesData.list[this.estimationIndex].optionMixCode,
				tuixOptionCode: this.epiloguesData.list[this.estimationIndex].tuixOptionCode,
				interiorColorCode: this.epiloguesData.list[this.estimationIndex].interiorColorCode,
				exteriorColorCode: this.epiloguesData.list[this.estimationIndex].exteriorColorCode,
				realityInteriorColorCode: this.epiloguesData.list[this.estimationIndex].realityInteriorColorCode || '',
				acquisitionTypeCode: '02',
				deliveryCenterCode: '',
				carProductionNumber: '',
				estimationCarTypeCode: '50' // 견적차량유형코드: 10 일반재고 20 할인재고 30 전시재고 40 판촉재고 50 생산주문
			}).then((data) => {
				// 상세견적 이동
				if (data) {
					this.$router.push({
						name: 'estimation',
						query: {
							estimationUrl: data.estimationUrl
						}
					})
				}
			})
		},
		toHtml(value) {
			if (!value) return ''
			return (
				value
					.replace(/&amp;/gi, '&')
					.replace(/&lt;/gi, '<')
					.replace(/&gt;/gi, '>')
					.replace(/&quot;/gi, '"')
					// eslint-disable-next-line quotes
					.replace(/&#039;/gi, "'")
					.replace(/&nbsp;/gi, ' ')
					// eslint-disable-next-line quotes
					.replace(/&#39;/gi, "'")
			)
		}
	}
}
</script>

<style scoped>
.epilogueAssistY {
	color: #0983a9;
}
.epilogueAssistY .up .icon {
	background: url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAMAAADH72RtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAxlBMVEUJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6kJg6n////bcTWIAAAAQHRSTlMApfS0KrD59eoP8GBQQM/lhFKY9u/BNOD81PsWKKCk8t3usiKixgiv+MAjumlIjCH9dgER6QPWkPPZZcJ8yt5VTQMyTgAAAAFiS0dEQYnebE4AAAAHdElNRQflCAwRMyQld5xOAAAAkklEQVQY033M1xKCMBSE4Q2KRlCxJ5aIXbH3Xs77P5UUJ6Nc+F9+M7tAFCMjkcR3ZoqleeZHLNiUjUmO7P+Sd7SYfgUUqeRL2apUayBDyDprOE20lFJttwNSEF3Z63/WAwplONJ/40konoapnMVkTotopWVJq0D4erONYCf2B9DxdHbp4oVxugLkd7s/RNDTewFvnLMSLqTRhZkAAAAASUVORK5CYII=')
		no-repeat 0 0 !important;
	background-size: 100% 100%;
}
.epilogueAssistY .up .num {
	color: #0983a9 !important;
}
</style>
