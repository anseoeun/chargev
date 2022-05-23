<template>
	<div v-show="!isLoading" class="making-container">
		<div class="car-visual">
			<div class="visual">
				<!-- 2021-04-02 (ver1.1) 코딩변경 -->
				<!-- <transition name="vimg"><div v-if="visualStatus == 'init'" class="visual-img" :style="`background-image:url('${visualBg.init}')`"></div></transition>
				<transition name="vimg"><div v-if="visualStatus == 'outcolor'" class="visual-img" :style="`background-image:url('${visualBg.out}')`"></div></transition>
				<transition name="vimg"><div v-if="visualStatus == 'incolor'" class="visual-img" :style="`background-image:url('${visualBg.in}')`"></div></transition>
				<transition name="vimg"><div v-if="configurationShow" class="configuration"></div></transition> -->
				<iframe id="configuratorIFrame" style="width: 100%;height: 100%;" :src="`${CONFIGURATOR_URL}`"></iframe>
				<div class="noti-txt-wrap">
					<p class="noti-txt">* 사이트 내 이미지는 참고용이며 실제 차량과는 다를 수 있습니다.</p>
				</div>
				<!-- <div class="video-area">
					<video autoplay muted playsinline>
						<source :src="`${CONT_PATH}/wcontents/attach-1/2021/08/016/movie/configurator.mp4`" type="video/mp4" />
					</video>
				</div> -->
			</div>
			<!-- <div class="visual-menu">
				<v-btn type="button" class="btn-out" :class="{ on: visualStatus === 'outcolor' }" @click="changeBg('outcolor')"></v-btn>
				<v-btn type="button" class="btn-in" :class="{ on: visualStatus === 'incolor' }" @click="changeBg('incolor')"></v-btn>
				<span class="btn-spred">
					<v-btn type="button" :class="[`${spredBtn}`, { on: spredBtnIs }, { active: configurationShow }]" @click="spredBtnIs = !spredBtnIs"></v-btn>
					<span v-show="spredBtnIs" class="spred">
						<v-btn v-if="spredBtn !== 'btn-day'" type="button" class="btn-day" @click="changeConfiguration('btn-day')"></v-btn>
						<v-btn v-if="spredBtn !== 'btn-night'" type="button" class="btn-night" @click="changeConfiguration('btn-night')"></v-btn>
						<v-btn v-if="spredBtn !== 'btn-outdoor'" type="button" class="btn-outdoor" @click="changeConfiguration('btn-outdoor')"></v-btn>
						<v-btn v-if="spredBtn !== 'btn-city'" type="button" class="btn-city" @click="changeConfiguration('btn-city')"></v-btn>
					</span>
				</span>
			</div> -->
		</div>
		<div class="opt-btn" :style="`right:${optWidth}px`">
			<v-btn v-if="optionShow" class="btn-opt-close" @click="hideOption"><span class="offscreen">닫기</span></v-btn>
			<v-btn v-else class="btn-opt-open" @click="showOption"><span class="offscreen">열기</span></v-btn>
		</div>
		<div v-show="optionShow" ref="caropt" class="car-option" :class="[{ expend: isExpend }]" @scroll="scroll">
			<div ref="caroptin" class="inner">
				<!-- 바디타입 -->
				<div v-if="filterData && filterData.carBodyType && filterData.carBodyType.length > 1" class="option-box">
					<template v-for="({ type, title, code, name }, index) in filterList">
						<div v-show="filterShow(type)" :key="index" class="box-header">
							<b class="tit">
								{{ title }}
								<!-- <v-btn type="icon" icon-class="icon-info"></v-btn> -->
							</b>
						</div>
						<div v-show="filterShow(type)" :key="'A' + index" class="box-body">
							<v-radio
								v-model="filterQuery[code]"
								class="radio-line-button sm-h t-bewteen"
								type="button"
								:custom-label="true"
								:data="filterData[type]"
								:value-key="code"
								:label-key="name"
								@change="onChangeQuery(code)"
							>
								<template slot-scope="props">
									<span class="name">
										<span class="txt">캐스퍼 {{ props.item.carBodyName }}</span>
										<v-btn
											type="icon"
											class="info-btn"
											icon-class="icon-info"
											@click="
												isPopup.bodyType = true
												isPopup.bodyTypeLabel = props.item.carBodyName
											"
										></v-btn>
									</span>
								</template>
							</v-radio>
						</div>
					</template>
				</div>
				<!-- 트림 -->
				<Trim :car-trim-list="carTrimList" :selected-info="selectedInfo" :filter-query="filterQuery" @onChangeTrim="onChangeTrim" @addOption="onAddOption" />
				<!-- 외장색상 -->
				<ExteriorDetail :pos.sync="position.outColorTop" :exterior="selectedInfo.exterior" :selected-info="selectedInfo" @fnCheckExColor="fnCheckExColor" />
				<!-- 내장색상 -->
				<InteriorDetail
					:pos.sync="position.inColorTop"
					:interior="selectedInfo.interior"
					:selected-info="selectedInfo"
					:filter-query="filterQuery"
					@fnCheckInColor="fnCheckInColor"
				/>
				<!-- 옵션 -->
				<OptionDetail
					:pos.sync="position.optionTop"
					:selected-info="selectedInfo"
					:filter-query="filterQuery"
					:option-choice-list="optionChoiceList"
					:option-tuix-list-part-t="optionTuixListPartT"
					:option-tuix-list-part-n="optionTuixListPartN"
					:summary-show="summaryShow"
					@recommPop="isPopup.recommendOption = true"
					@expend="optExpend"
					@contract="optContract"
					@fnCheckOption="fnCheckOption"
					@addOption="onAddOption"
				/>
				<!-- 요약 -->
				<template v-if="!isExpend">
					<div class="fixed-area" :style="fixAreaHeight">
						<div class="area" :style="fixSubStyle">
							<div v-if="recommendContract" class="fixed-recommend">
								<v-btn type="link" href="javascript:void(0);" class="recommend" @click="isPopup.recommendCombination = true">
									<p class="txt">
										선택이 어려우신가요? 나만의 캐스퍼를 추천해드립니다
									</p>
									<v-btn class="close" @click.stop="recommendContractClose"><span class="offscreen">닫기</span></v-btn>
								</v-btn>
							</div>
							<div class="summary-price">
								<div v-if="summaryShow" class="summary-out-wrap" :style="fixSummaryStyle">
									<v-btn v-if="summaryShow" class="summary-close" @click="setSummaryHide"><span class="offscreen">닫기</span></v-btn>
									<OptSummary v-if="summaryShow" :selected-info="selectedInfo" :set-style="fixSummaryStyle" />
								</div>
								<div class="fixed-price-wrap">
									<v-btn :class="['open-btn', { on: summaryShow }]" @click="setSummaryShow">
										<span class="offscreen">열기</span>
									</v-btn>
									<div :class="['fixed-price', { on: summaryShow }]">
										<div class="f-row total">
											<div class="left"><b>총 차량 가격</b></div>
											<div class="right">
												<span class="account">
													<b>{{ carTotalPrice | amount }}</b>
													원
												</span>
											</div>
										</div>
										<div v-if="minMonthlyPrice.monthlyPayment" class="banner-installment">
											{{ minMonthlyPrice.installmentName }} 할부 이용 시 월
											<b>{{ minMonthlyPrice.monthlyPayment }}</b>
											원
											<v-btn class="btn-info" type="icon" icon-class="icon-info" @click="isPopup.monthlyPaymentGuide = true">
												<span class="offscreen">안내팝업보기</span>
											</v-btn>
										</div>
									</div>
								</div>
							</div>
							<div class="fixed-btn">
								<!-- 법인 -->
								<div v-if="isCorp && !$route.params.carInfoChangeYn" class="number-check">
									<span class="label">수량</span>
									<div v-if="$route.query.preCarFlag" class="el-input-number">
										<div class="el-input">
											<input type="text" class="el-input__inner" :value="`${$route.query.carAmount}`" disabled />
										</div>
									</div>
									<v-input-number v-else v-model="selectedInfo.carAmount" :min="1" :max="999" @input="fnCarAmountCheck" />
								</div>
								<div class="next-step-wrap">
									<v-btn
										v-if="$route.params.carInfoChangeYn && $route.params.carInfoChangeYn === 'Y'"
										type="link"
										href="javascript:void(0);"
										class="next-step"
										@click="fnCarInfoChangePopup"
									>
										<span>변경하기</span>
									</v-btn>
									<v-btn v-else type="link" href="javascript:void(0);" class="next-step" @click="fnMoveDonePage">
										<span>견적내기</span>
									</v-btn>
								</div>
							</div>
						</div>
					</div>

					<div ref="btmwrap" class="btm-wrap" :style="fixBtnWrapHeight"></div>
				</template>
				<div v-else class="opt-price-wrap" sltyle="position:fixed" :style="fixOptBtmStype">
					<p v-if="recommendOption.length > 0 && filterQuery.carBodyCode !== 'V'" class="txt">
						<v-btn @click="isPopup.recommendOption = true">가장 선호하는 선택 품목 조합을 알아보세요.</v-btn>
					</p>
					<div class="right">
						<span class="price">
							<span class="label">총 차량 가격</span>
							<b>{{ carTotalPrice | amount }}</b>
							<span class="unit">원</span>
						</span>
					</div>
				</div>
			</div>
		</div>

		<!-- 차량조합추천  -->
		<RecommendCombination
			:pop-visible="isPopup"
			:model-data="recommendModel"
			:selected-info="selectedInfo"
			@onChangeTrim="onChangeTrimWithOptArr"
			@detail="fnCarSpecDetail"
			@close="isPopup.recommendCombination = false"
		/>

		<CarInfoChangeGuide :pop-visible="isPopup" />

		<!-- 색상에 따른 트림 변경안내  -->
		<TrimChangeInfo
			:pop-visible="isPopup"
			:selected-info="selectedInfo"
			:before-exterior-color-code="beforeExteriorColorCode"
			:before-interior-color-code="beforeRealityInteriorColorCode"
			@onChangeTrim="onChangeTrimWithOption"
			@close="
				selectedInfo.exterior.exteriorColorCode = beforeExteriorColorCode
				selectedInfo.exterior.exteriorColorName = beforeExteriorColorName
				selectedInfo.interior.interiorColorCode = beforeInteriorColorCode
				selectedInfo.interior.realityInteriorColorCode = beforeRealityInteriorColorCode
				selectedInfo.interior.interiorColorName = beforeInteriorColorName
				isPopup.trimChangeInfo = false
			"
		/>

		<!-- 색상에 따른 옵션 추가안내  -->
		<OptionChangeInfo :pop-visible="isPopup" />

		<!-- 옵션 추가안내  -->
		<PartsAddInfo
			:pop-visible="isPopup"
			:car-option-code="carOptionCode"
			:add-del-option="addOption"
			@select="onAddOption2"
			@close="isPopup.partsAddInfo = false"
		/>

		<!-- 옵션 삭제안내  -->
		<PartsDelInfo
			:pop-visible="isPopup"
			:car-option-code="carOptionCode"
			:add-del-option="addDelOption"
			@select="onAddOption2"
			@close="isPopup.partsDelInfo = false"
		/>

		<!-- 파츠 삭제안내  -->
		<PartsDelTuixInfo
			:pop-visible="isPopup"
			:add-del-option="addDelOption"
			:option-info="setOptionInfo"
			@select="fnGetTuixOptions"
			@close="isPopup.partsDelTuixInfo = false"
		/>

		<!-- 옵션추천정보 -->
		<RecommendOption :pop-visible="isPopup" :recommend-option="recommendOption" @setOptions="onSetOptions" @close="isPopup.recommendOption = false" />

		<FriendRecommend :pop-visible="isPopup" :friend-recommend-type="friendRecommendType" @close="isPopup.friendRecommend = false" />

		<VehicleChangeInfo
			:pop-visible="isPopup"
			:car-delivery-change-info="carDeliveryChangeInfo"
			:selected-info="selectedInfo"
			@fnMoveDonePage="fnMoveDonePage"
			@close="
				isPopup.vehicleChangeInfo = false
				isPopup.spVehicleChangeInfo = false
			"
		/>

		<!-- PS-DIS_105,  PS-DIS_106 바디타입안내 -->
		<BodyType :pop-visible="isPopup" @close="isPopup.bodyType = false" />

		<MonthlyPaymentGuide :pop-visible="isPopup" :min-monthly-price="minMonthlyPrice" @close="isPopup.monthlyPaymentGuide = false" />
		
		<ActivePlusInfo :pop-visible="isPopup" @select="onAddOption3" @select2="onAddOption2(isPopup.partsAddInfoTmp)" @close=";(isPopup.activePlusInfo = false),(isPopup.dummyActivePlusInfo = false)" />

		<!-- ALERT 팝업 -->
		<v-popup
			popup-text-align="center"
			popup-type="alert"
			:visible="alert.visible"
			:footer="alert.footer"
			@confirm="alert.callback"
			@cancel="alert.cancel"
			@close="alert.cancel"
		>
			<template slot="body">
				<span v-html="alert.message"></span>
			</template>
		</v-popup>
	</div>
</template>

<script>
const Cookie = require('js-cookie')
import Trim from './Trim'
import ExteriorDetail from './ExteriorDetail'
import InteriorDetail from './InteriorDetail'
import OptionDetail from './OptionDetail'
import {
	OptSummary,
	RecommendCombination,
	TrimChangeInfo,
	OptionChangeInfo,
	PartsAddInfo,
	PartsDelInfo,
	PartsDelTuixInfo,
	RecommendOption,
	VehicleChangeInfo,
	BodyType,
	ActivePlusInfo
} from '~/components/page/vehicles/making/popup'
import { MonthlyPaymentGuide } from '~/components/page/estimation/popup'
import FriendRecommend from '~/components/page/vehicles/popup/FriendRecommend'
import CarInfoChangeGuide from '~/components/page/vehicles/popup/CarInfoChangeGuide'
import { VInputNumber } from '~/components/element'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
	head() {
		return {
			title: '현대자동차 캐스퍼 CASPER - 모델 선택',
			meta: [
				{ 'data-n-head': 'ssr', name: 'keywords', content: '현대캐스퍼 컬러, 현대캐스퍼 디자인, 현대캐스퍼 스펙' },
				{
					'data-n-head': 'ssr',
					name: 'description',
					content: '현대 캐스퍼 모델 선택 페이지입니다. 컬러 및 스펙, 트림별로 자세한 옵션을 선택하여 나만의 캐스퍼를 디자인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:site_name', content: 'CASPER' },
				{ 'data-n-head': 'ssr', property: 'og:type', content: 'website' },
				{ 'data-n-head': 'ssr', property: 'og:url', content: 'https://casper.hyundai.com/vehicles/making/model' },
				{ 'data-n-head': 'ssr', property: 'og:title', content: '현대자동차 캐스퍼 CASPER - 모델 선택' },
				{
					'data-n-head': 'ssr',
					property: 'og:description',
					content: '현대 캐스퍼 모델 선택 페이지입니다. 컬러 및 스펙, 트림별로 자세한 옵션을 선택하여 나만의 캐스퍼를 디자인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'og:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', property: 'twitter:card', content: 'summary_large_image' },
				{ 'data-n-head': 'ssr', property: 'twitter:site', content: '@About_Hyundai' },
				{ 'data-n-head': 'ssr', property: 'twitter:title', content: '현대자동차 캐스퍼 CASPER - 모델 선택' },
				{
					'data-n-head': 'ssr',
					property: 'twitter:description',
					content: '현대 캐스퍼 모델 선택 페이지입니다. 컬러 및 스펙, 트림별로 자세한 옵션을 선택하여 나만의 캐스퍼를 디자인해보세요.'
				},
				{ 'data-n-head': 'ssr', property: 'twitter:url', content: 'https://casper.hyundai.com/vehicles/making/model' },
				{ 'data-n-head': 'ssr', property: 'twitter:image', content: 'https://casper.hyundai.com/wcontents/attach-1/2021/08/016/movie/main.png' },
				{ 'data-n-head': 'ssr', name: 'google-site-verification', content: 'lov58MR6dpEsr3ZrG17L9bvRvbSxfMp96aOfh4tsPyc' },
				{ 'data-n-head': 'ssr', name: 'naver-site-verification', content: 'ec9e4473734696d27cdd6ac410d04e82dc7a36a0' }
			],
			link: [
				{ rel: 'canonical', href: 'https://casper.hyundai.com/vehicles/making/model' },
				{ rel: 'alternate', href: 'https://m.casper.hyundai.com/vehicles/making/model' }
			],
			bodyAttrs: {
				style: 'overflow-y:hidden'
			}
		}
	},
	layout: 'casper',
	components: {
		Trim,
		ExteriorDetail,
		InteriorDetail,
		OptionDetail,
		OptSummary,
		RecommendCombination,
		TrimChangeInfo,
		OptionChangeInfo,
		PartsAddInfo,
		PartsDelInfo,
		PartsDelTuixInfo,
		RecommendOption,
		VehicleChangeInfo,
		FriendRecommend,
		CarInfoChangeGuide,
		VInputNumber,
		BodyType,
		MonthlyPaymentGuide,
		ActivePlusInfo
	},
	data() {
		return {
			isLoading: true,
			filterQuery: {
				carCode: '', // 차량코드
				carPurposeCode: '', // 차량용도 코드
				carEnginCode: '', // 엔진코드
				carBodyCode: '', // 바디타입코드
				carMissionCode: '', // 변속기 코드
				carDriveCode: '', // 구동방식 코드
				carInteriorSpaceCode: '', // 실내공간 코드(포터만)
				carLoadCode: '', // 적재공간 코드(포터만)
				carVersionCode: '', // 버전코드(벨로스터만)
				siteTypeCode: ''
			},
			filterData: {},
			filterTypes: [
				{ id: 'carEngin', title: '엔진' },
				{ id: 'carBody', title: '바디타입' },
				{ id: 'carMission', title: '변속기' },
				{ id: 'carDrive', title: '구동방식' },
				{ id: 'carInteriorSpace', title: '바디타입(실내공간)' },
				{ id: 'carLoad', title: '바디타입(적재함)' },
				{ id: 'carVersion', title: '외관' }
			],
			startFlag: false,
			isFilterLoading: false,
			carTrimList: [],

			selectedInfo: {
				carCode: '',
				carName: '',
				purposeCode: '',
				saleModelCode: '',
				realSaleModelCode: '',
				carAbbreviation: '',
				carBodyName: '',
				carBodyCode: '',
				carEnginName: '',
				carEnginCode: '',
				carMissionName: '',
				carMissionCode: '',
				carDriveName: '',
				carPrice: '0',
				estimationUrl: '',
				exterior: {
					exteriorColorCode: '',
					exteriorColorName: '',
					exteriorColorPrice: 0
				},
				interior: {
					interiorColorCode: '',
					interiorColorName: '',
					interiorColorPrice: 0,
					realityInteriorColorCode: ''
				},
				option: {
					saleSpecCode: '', //사양스펙코드
					classChoice: {},
					optionChoice: [],
					optionChoiceCodes: [],
					optionTuix: [],
					optionTuixCodes: []
				},
				carAmount: 1,
				recommendCheck: true
			},

			tmpSelectedInfo: {
				saleModelCode: '',
				exteriorColorCode: '',
				interiorColorCode: '',
				optionMixCode: '',
				tuixOptionCode: ''
			},
			optionBasicList: [], // 기본옵션
			optionGeneralList: [], // 사양급옵션 리스트
			noOptionGeneralList: [{ saleModelCode: '', carCode: 'AD', saleSpecCode: 'N' }], // 노출 하지 않을 차량, 사양급 코드 정보
			optionChoiceList: [], // 선택옵션
			optionTuixList: [], // TUIX옵션
			optionSubTitleTab: [],
			beforeOptionRequired: [], // 기존 필수 옵션 코드 목록 (현재선택 이전)
			beforeExteriorColorCode: '',
			beforeExteriorColorName: '',
			beforeInteriorColorCode: '',
			beforeRealityInteriorColorCode: '',
			beforeInteriorColorName: '',
			carOptionCode: '', // 옵션 상세 팝업에 주는 옵션코드
			setOptionInfo: {}, // TUIX 삭제 팝업에 주는 변경할 색상, 옵션 정보
			addOption: [], // 추가 될 옵션
			addDelOption: {}, // 추가/삭제 될 옵션

			recommendModel: {}, //추천모델 리스트

			isPopup: {
				recommendCombination: false,
				carInfoChangeGuide: false,
				repnCarCode: '',
				specName: '',
				trimChangeInfo: false,
				trimChangeColor: '',
				optionChangeInfo: false,
				partsAddInfo: false, // 옵션 추가팝업
				partsAddInfoTmp: {},
				partsDelInfo: false, // 옵션 삭제팝업
				partsDelTuixInfo: false, // 파츠 삭제팝업
				recommendOption: false, //옵션조합추천
				friendRecommend: false,
				vehicleChangeInfo: false,
				spVehicleChangeInfo: false,
				bodyType: false, // 바디타입 설명 팝업
				bodyTypeLabel: '',
				monthlyPaymentGuide: false,
				activePlusInfo: false,
				dummyActivePlusInfo: false
			},

			alert: {
				visible: false,
				footer: [],
				message: '',
				callback: () => {},
				cancel: () => {}
			},

			initLoading: false,

			headerH: 60,
			isExpend: false,
			optionShow: true,
			optWidth: 0,
			configurationShow: false,
			summaryShow: false,
			visualStatus: 'init',
			recommendContract: false,
			visualBg: {
				init: require('~/assets/images/mycar/bg-casper-body.jpg'),
				out: require('~/assets/images/mycar/bg-casper-outcolor.jpg'),
				in: require('~/assets/images/mycar/bg-casper-incolor.jpg')
			},
			carImg: {
				src: require('~/assets/images/temp/temp-payment-car-model.png'),
				alt: 'AX 스마트스트림 가솔린 1.1 터보 프리미엄 밀레니얼 A/T'
			},
			scrollSize: '',
			scrollIs: false,
			scrollBottom: false,
			fixSubStyle: '',
			fixBtnStyle: '',
			fixBtnWrapHeight: '',
			fixAreaHeight: '',
			fixSummaryStyle: '',
			fixOptBtmStype: '',
			//spredBtn
			spredBtnIs: false,
			spredBtn: 'btn-day',
			position: {
				outColorTop: 0,
				inColorTop: 0,
				optionTop: {
					option1Top: 0,
					option2Top: 0,
					option3Top: 0
				}
			},

			friendRecommendType: '', //지인 추천 타입 recom: 추천, exceed: 추천횟수초과, expire: 기한만료
			minMonthlyPrice: {
				installmentName: '',
				installmentMonth: '',
				monthlyPayment: ''
			},

			carDeliveryChangeInfo: {
				estimationCarTypeCode: '',
				deliveryCenterCode: '',
				deliveryLocalAreaCode: '',
				carProductionNumber: '',
				beforeDeliveryDate: '',
				beforeCarTotalPrice: 0,
				beforeHighpassEnable: false,
				afterDeliveryDate: '',
				afterCarTotalPrice: 0,
				afterHighpassEnable: false
			},

			carChangeInfo: {},
			isInitSetting: true
		}
	},
	computed: {
		...mapGetters({
			isCorp: 'isCorp',
			exteriorColor: 'estimate/exteriorColor', // API-WH-상품서비스-011 (판매모델별 외장색상 리스트 조회)
			interiorColor: 'estimate/interiorColor', // API-WH-상품서비스-012 (판매모델별 내장색상 리스트 조회)
			recommendOption: 'estimate/recommendOption', // API-WH-개인화추천서비스-004 (옵션 추천 리스트 조회)
			repInstallmentInfo: 'estimate-done/repInstallmentInfo', // 대표 할부상품 정보
			contractPossibleChk: 'purchaseModules/contractPossibleChk'
		}),

		filterList() {
			const keyList = Object.keys(this.filterData)
			return keyList.length
				? this.filterTypes
						.map(({ id, title }) => ({
							id,
							title,
							type: `${id}Type`,
							code: `${id}Code`,
							name: `${id}Name`,
							enableYn: `${id}EnableYn`,
							filters: this.filterData[`${id}Type`] || []
						}))
						.filter(({ filters }) => filters.length > 0)
				: []
		},
		// 필터 노출여부
		filterShow() {
			// 선택 항목이 1개 이하인 경우 노출하지 않음.
			// 전체 필터의 하위 선택 항목이 모두 1개 이하인 경우 전체 노출
			return (type) => {
				if (Object.keys(this.filterData).length > 0) {
					if (this.filterData[type] && type === 'carBodyType') {
						const len = this.filterData[type].length
						if (len > 1) {
							return true
						}
					}
				}
				return false
			}
		},

		optionTuixListPartT() {
			return this.optionTuixList.filter((el) => !el.tuixOptionName.startsWith('[N'))
		},

		optionTuixListPartN() {
			return this.optionTuixList
				.filter((el) => el.tuixOptionName.startsWith('[N'))
				.map((el) => ({
					...el,
					tuixOptionName: el.tuixOptionName.replace('[N 퍼포먼스 파츠]', '').replace('[N퍼포먼스파츠]', '')
				}))
		},

		//차량가격 + 색상가격 + 선택 옵션 가격 + tuix 옵션 가격
		carTotalPrice() {
			let price = 0

			price += Number(this.selectedInfo.carPrice)

			if (this.selectedInfo.exterior && this.selectedInfo.exterior.exteriorColorPrice) {
				price += Number(this.selectedInfo.exterior.exteriorColorPrice)
			}

			if (this.selectedInfo.interior && this.selectedInfo.interior.interiorColorPrice) {
				price += Number(this.selectedInfo.interior.interiorColorPrice)
			}

			price += this.selectedInfo.option.optionChoice.reduce(function(accumulator, value) {
				return accumulator + Number(value.choiceOptionPrice)
			}, 0)

			price += this.selectedInfo.option.optionTuix.reduce(function(accumulator, value) {
				return accumulator + Number(value.tuixOptionPrice)
			}, 0)

			return price
		},

		realSaleModelCode() {
			return this.selectedInfo.option.optionChoiceCodes.findIndex((ele) => ele === 'CA1' || ele === 'CA2') > -1
				? this.selectedInfo.saleModelCode.substring(0, 5) + 'T' + this.selectedInfo.saleModelCode.substring(6, 9)
				: this.selectedInfo.saleModelCode
		}
	},
	watch: {
		carTotalPrice(val) {
			//대표 월 납입금
			if (this.repInstallmentInfo && Object.keys(this.repInstallmentInfo).length > 0) {
				const installmentPrice = Math.floor((val * 0.7) / 100000) * 100000
				const monthlyPayment = Math.round(
					(installmentPrice * this.repInstallmentInfo.monthlyRate * this.repInstallmentInfo.piRate) / (this.repInstallmentInfo.piRate - 1)
				)

				this.minMonthlyPrice = {
					...this.repInstallmentInfo,
					monthlyPayment: monthlyPayment.toLocaleString(),
					advancePrice: Number(val - installmentPrice).toLocaleString()
				}
			}
		},

		realSaleModelCode(val) {
			this.selectedInfo.realSaleModelCode = val
		},

		initLoading(val) {
			if (val) {
				this.$nextTick(async () => {
					// this.scrollSize = this.$refs.caropt.offsetWidth - this.$refs.caropt.clientWidth
					this.scrollSize = await 0
					await this.scrollCheck()
					await this.setStyle()
					await this.getOptW()
					if (!this.$route.params.contractNumber) this.selectedInfo.recommendCheck = await true
					else this.selectedInfo.recommendCheck = await false
					await this.recommendContractCheck()

					this.fixBtnWrapHeight = (await 'height:') + document.querySelector('.btm-wrap').clientHeight + 'px'
					this.fixAreaHeight = (await 'height:') + document.querySelector('.fixed-area').clientHeight + 'px'
				})
			}
		},
		'selectedInfo.carAmount'(newVal, oldVal) {
			if (this.isCorp && ((oldVal > 1 && newVal === 1) || (oldVal === 1 && newVal > 1) || (oldVal > 1 && newVal > 1 && oldVal !== newVal)))
				this.selectedInfo.recommendCheck = false
		}
	},

	asyncData({ query }) {
		const filterQuery = {
			// carCode: query.model, // 차량코드
			// carPurposeCode: query.purposeCode || '', // 차량용도 코드
			carCode: 'AX01', // 차량코드
			// carCode: 'JJ01', // 차량코드
			// carCode: 'GH01', // 차량코드
			carPurposeCode: 'J', // 차량용도 코드
			carEnginCode: '', // 엔진코드
			carBodyCode: '', // 바디타입코드
			carMissionCode: '', // 변속기 코드
			carDriveCode: '', // 구동방식 코드
			carInteriorSpaceCode: '', // 실내공간 코드(포터만)
			carLoadCode: '', // 적재공간 코드(포터만)
			carVersionCode: '', // 버전코드(벨로스터만)
			siteTypeCode: 'W'
		}

		const selectedInfo = {
			// carCode: query.model,
			// carPurposeCode: query.purposeCode || ''
			carCode: 'AX01',
			// carCode: 'JJ01',
			// carCode: 'GH01',
			carPurposeCode: 'J' || '',
			exterior: {
				exteriorColorCode: '',
				exteriorColorName: '',
				exteriorColorPrice: 0
			},
			interior: {
				interiorColorCode: '',
				interiorColorName: '',
				interiorColorPrice: 0,
				realityInteriorColorCode: ''
			},
			option: {
				saleSpecCode: '', //사양스펙코드
				classChoice: {},
				optionChoice: [],
				optionChoiceCodes: [],
				optionTuix: [],
				optionTuixCodes: []
			},
			carAmount: 1,
			recommendCheck: true
		}

		return { selectedInfo, filterQuery: { ...filterQuery } }
	},

	fetch({ params, query, redirect }) {
		// 사전계약 계약번호가 없을 경우 구매내역으로 리다이렉트
		if (query.preCarFlag && !params.contractNumber) {
			return redirect('/mypage/purchase-list/order-history')
		}
	},

	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:내 차 만들기:모델 선택',
						siteSection: '차량',
						siteSubsection: '내 차 만들기'
					}
				}
			}

			window._spaData(obj)
		})

		//this.onNetFunnel('casper_02')
		this.fnInit()

		this.$EventBus.$on('alertLayer', (obj) => {
			this.alert = {
				visible: obj.visible,
				footer: obj.footer,
				message: obj.message,
				callback: () => {
					this.alert.visible = false
					obj.callback()
				},
				cancel: () => {
					this.alert.visible = false
					obj.cancel()
				}
			}
		})
		this.$nextTick(() => {
			this.isLoading = false
		})
	},
	created() {
		if (this.$route.params.carInfoChangeYn && this.$route.params.carInfoChangeYn === 'Y') {
			history.replaceState({ carInfoChangeYn: 'Y' }, null, null)
		} else {
			try {
				if (history.state.carInfoChangeYn === 'Y') {
					this.$router.push({ name: 'mypage-purchase-contract-detail' })
				}
				// eslint-disable-next-line no-empty
			} catch (e) {}
		}
	},
	methods: {
		...mapActions({
			getDiscountReferral: 'estimate/getDiscountReferral', // API-WX-고객정보서비스-021 (지인추천 할인 조건 조회)
			getCarFscCd: 'estimate/getCarFscCd', // API-WX-상품서비스-088 (FSC코드 조회)
			getCar: 'estimate/getCar', // 차량 상세 조회
			getModelFilters: 'estimate/getModelFilters', // 모델 필터 조회
			getTrims: 'estimate/getTrims', // 트림리스트+추천트림 조회+필수옵션 가격
			// getRecommendationEstimationCars: 'estimate/getRecommendationEstimationCars', // 추천 견적 차량 리스트 조회(상품서비스084)
			getPersonalTop3CarsList: 'estimate/getPersonalTop3CarsList', // API-WX-상품서비스-077 (차량 조합 추천 TOP3 차량 리스트)
			getCarMakingInfo: 'estimate/getCarMakingInfo', // 판매모델별 상품정보 조회, 연령별 외장 색상 추천 조회
			getOptions: 'estimate/getOptions', // API-WH-상품서비스-015 (판매모델별 사양(옵션) 정보(기본품목+선택품목+TUIX) 리스트 조회)
			getColorChangeTrimOption: 'estimate/getColorChangeTrimOption', // API-WH-상품서비스-045 (선택할 수 없는 색상변경 시 변경 트림, 옵션정보를 조회하는 API)
			getExteriorColor: 'estimate/getExteriorColor', // API-WH-상품서비스-011 (판매모델별 외장색상 리스트 조회)
			getInteriorColor: 'estimate/getInteriorColor', // API-WH-상품서비스-012 (판매모델별 내장색상 리스트 조회)
			getTuixCheck: 'estimate/getTuixCheck', // API-WH-상품서비스-080 (옵션/색상 선택 시 삭제되는 TUIX 리스트)
			getOptionsTuix: 'estimate/getOptionsTuix', // API-WH-상품서비스-019 (판매모델별 TUIX 옵션 리스트 조회)
			getTuixRequiredChoice: 'estimate/getTuixRequiredChoice', // API-WH-상품서비스-088 (옵션선택시 필수선택 tuix 조회)
			getDisableTuix: 'estimate/getDisableTuix', // API-WH-상품서비스-077 (Tuix 선택 시 Tuix 비활성화 목록)
			getOptionRequiredChoice: 'estimate/getOptionRequiredChoice', // API-WH-상품서비스-097 (컬러선택시(외장/내장) 필수 옵션 조회)
			getAlterChoiceOption: 'estimate/getAlterChoiceOption', // 선택된 옵션들의 비활성화, 활성화 옵션 리스트 조회
			getOptionDel: 'estimate/getOptionDel', // API-WH-상품서비스-021 (옵션변경 시 삭제되는 옵션 리스트)
			getTuixChoiceCheck: 'estimate/getTuixChoiceCheck', //API-WH-상품서비스-087 (견적임시저장전 tuix필수선택여부 조회)
			postTemporaryStorage: 'estimate/postTemporaryStorage', // API-WH-견적서비스-001 (내차만들기 임시저장)
			putLateViewList: 'PUT_LATE_VIEW_LIST', // 최근 본 차 쿠키 저장
			getPaymentProduct: 'estimate-done/getPaymentProduct', // API-WH-결제서비스-013 (할부상품 리스트 조회)
			getOptionMixInfo: 'estimate/getOptionMixInfo', // (옵션 조힙 코드 조회)
			getTuixInfo: 'estimate/getTuixInfo', // (파츠 조힙 코드 조회)
			getContractCarStatus: 'estimate-done/getContractCarStatus', // API-E-구매서비스-002 (차량현황 조회)
			getContractPosibleChk: 'purchaseModules/GET_CONTRACT_POSSIBLE_CHECK', // API-WH-구매서비스-009 ==> 계약정보 호출.
			getContractDownPayment: 'estimate-done/getContractDownPayment', // API-WE-상품서비스-029 (계약금 조회)
			postHighpassEnable: 'estimate/postHighpassEnable' // EP_IF_국내판매_075(차량별 하이패스 장착 여부)
		}),

		/* ############################# style 관련 method - Start ###################################### */
		setStyle() {
			let summaryShow = () => {
				let summaryBtm

				if (this.scrollBottom) {
					summaryBtm = document.querySelector('.fixed-price-wrap').clientHeight + document.querySelector('.fixed-btn').clientHeight - 1
					this.fixSummaryStyle = 'bottom:' + summaryBtm + 'px;'
				} else {
					summaryBtm = document.querySelector('.fixed-price-wrap').clientHeight - 1 + document.querySelector('.fixed-btn').clientHeight - 1
					this.fixSummaryStyle = 'bottom:' + summaryBtm + 'px;'
				}
			}

			if (this.scrollIs && this.scrollBottom) {
				//bottom
				if (this.summaryShow) {
					summaryShow()
					this.fixSubStyle =
						'position:fixed;bottom:' + (document.querySelector('.btm-wrap').clientHeight - 1) + 'px;width:' + this.$refs.caropt.offsetWidth + 'px;'
					this.fixBtnStyle = 'position:fixed;bottom:0;width:' + this.$refs.caropt.offsetWidth + 'px;'
				} else {
					this.fixSubStyle = 'width:' + this.$refs.caropt.innerWidth + 'px;'
					this.fixBtnStyle = ''
				}
			} else if (this.scrollIs && this.scrollBottom == false) {
				if (this.summaryShow) {
					this.fixSubStyle = 'position:fixed;bottom:0;width:' + this.$refs.caropt.offsetWidth + 'px;'
					summaryShow()
				} else if (this.isExpend) {
					setTimeout(() => {
						this.fixOptBtmStype = 'position:fixed;bottom:0;width:' + (this.$refs.caropt.offsetWidth - this.scrollSize) + 'px;'
					}, 100)
				} else {
					this.fixSubStyle = 'position:fixed;bottom:0;right:' + this.scrollSize + ';width:' + (this.$refs.caropt.offsetWidth - this.scrollSize) + 'px;'
					this.fixBtnStyle = ''
				}
			} else {
				if (this.summaryShow) {
					summaryShow()
				} else if (this.isExpend) {
					setTimeout(() => {
						this.fixOptBtmStype = 'position:fixed;bottom:0;width:' + this.$refs.caropt.offsetWidth + 'px;'
					}, 100)
				} else {
					this.fixSubStyle = 'position:fixed;bottom:0;right:0;width:' + this.$refs.caropt.offsetWidth + 'px;'
					this.fixBtnStyle = ''
				}
			}
		},
		scrollCheck() {
			if (this.$refs.caropt.offsetWidth == this.$refs.caropt.clientWidth) this.scrollIs = false
			else this.scrollIs = true
		},
		scroll() {
			let scrollTop = Math.ceil(this.$refs.caropt.scrollTop)
			let outColorTop = this.position.outColorTop
			let inColorTop = this.position.inColorTop
			let btmH = this.$refs.btmwrap ? this.$refs.btmwrap.clientHeight : 0

			if (scrollTop + this.$refs.caropt.clientHeight >= this.$refs.caroptin.clientHeight - btmH) {
				this.scrollBottom = true
				this.setStyle()
			} else {
				this.scrollBottom = false
				this.setStyle()
			}

			if (this.isExpend) return
			if (scrollTop < outColorTop) {
				this.visualStatus = 'init'
			} else if (scrollTop >= outColorTop && this.$refs.caropt.scrollTop < inColorTop) {
				this.visualStatus = 'outcolor'
			} else if (scrollTop >= inColorTop) {
				this.visualStatus = 'incolor'
			}
		},
		changeBg(scroll) {
			this.configurationShow = false

			if (scroll === 'outcolor') {
				this.$refs.caropt.scrollTop = this.position.outColorTop
				this.visualStatus = 'outcolor'
			} else if (scroll === 'incolor') {
				this.$refs.caropt.scrollTop = this.position.inColorTop
				this.visualStatus = 'incolor'
			}
		},
		changeConfiguration(btn) {
			this.configurationShow = true
			this.visualShow = false
			this.spredBtnIs = false
			this.spredBtn = btn
			this.visualStatus = false
		},
		optExpend(pxpended, type, fnc) {
			this.isExpend = true
			this.setStyle()
			setTimeout(() => {
				fnc()
				if (type === 'option1') this.$refs.caropt.scrollTop = this.position.optionTop.option1Top
				else if (type === 'option2') this.$refs.caropt.scrollTop = this.position.optionTop.option2Top
				else if (type === 'option3') this.$refs.caropt.scrollTop = this.position.optionTop.option3Top
				this.getOptW()
			}, 100)
		},
		optContract(pxpended, type, fnc) {
			this.isExpend = false
			setTimeout(() => {
				fnc()
				if (type === 'option1') this.$refs.caropt.scrollTop = this.position.optionTop.option1Top
				else if (type === 'option2') this.$refs.caropt.scrollTop = this.position.optionTop.option2Top
				else if (type === 'option3') this.$refs.caropt.scrollTop = this.position.optionTop.option3Top
				this.getOptW()
			}, 100)
		},
		getOptW() {
			this.optWidth = this.$refs.caropt.offsetWidth
		},
		showOption() {
			this.optionShow = true
			setTimeout(() => {
				this.getOptW()
			}, 100)
		},
		hideOption() {
			this.optionShow = false
			setTimeout(() => {
				this.getOptW()
				//init
				this.$refs.caropt.scrollTop = 0
				this.isExpend = false
			}, 100)
		},
		setSummaryShow() {
			this.summaryShow = true
			// if(this.summaryShow == false) {
			//   // this.scrollBottom = false
			// }
			this.setStyle()
		},
		setSummaryHide() {
			this.summaryShow = false
			// if(this.summaryShow == false) {
			//   // this.scrollBottom = false
			// }
		},
		recommendContractClose() {
			this.recommendContract = false

			this.fixAreaHeight = ''
			setTimeout(() => {
				this.fixAreaHeight = 'height:' + document.querySelector('.fixed-area .area').clientHeight + 'px'
			}, 100)
		},
		recommendContractCheck() {
			let act
			let setAct = () => {
				act = setTimeout(() => {
					if (this.selectedInfo.recommendCheck) {
						this.recommendContract = true

						this.fixAreaHeight = ''
						setTimeout(() => {
							this.fixAreaHeight = 'height:' + document.querySelector('.fixed-area .area').clientHeight + 'px'
						}, 100)
					}
				}, 10000)
			}
			setAct()
			document.body.onclick = function(e) {
				clearTimeout(act)
				setAct()
			}
		},
		/* ############################# style 관련 method - End ###################################### */

		// 컨피규레이터 세팅
		setConfigurator() {
			this.$nuxt.$loading.start()
			const render = document.getElementById('configuratorIFrame')
			// FSC코드 조회
			this.getCarFscCd({
				saleModelCode: this.realSaleModelCode,
				optionCode: this.selectedInfo.option.optionChoiceCodes.length > 0 ? this.selectedInfo.option.optionChoiceCodes.join(',') : '',
				saleSpecCode: this.selectedInfo.option.saleSpecCode
			}).then((data) => {
				if (data) {
					let postData = {
						nationcd: data.NATCD,
						fscgen: data.FSCTMMSCD,
						extcolor: this.selectedInfo.exterior.exteriorColorCode,
						intcolor: this.selectedInfo.interior.interiorColorCode
						//browser: navigator.userAgent.toLowerCase().indexOf('msie') !== -1 || navigator.userAgent.toLowerCase().indexOf('trident') !== -1 ? '1' : '0',
						// intro: '1',
						// ui_on: '0'
					}

					//최초진입시
					if (this.isInitSetting) {
						postData = {
							nationcd: data.NATCD,
							fscgen: data.FSCTMMSCD,
							extcolor: this.selectedInfo.exterior.exteriorColorCode,
							intcolor: this.selectedInfo.interior.interiorColorCode,
							browser: '0', //최초 진입시
							ui_on: '0' //최초 진입시
						}
						this.isInitSetting = false
					}

					render?.contentWindow?.postMessage(postData, '*')
				}
			})

			this.$nuxt.$loading.finish()
		},

		// 초기화면 세팅
		async fnInit() {
			// 차량 상세 조회
			await this.getCar({
				carCode: this.selectedInfo.carCode,
				estimationUrl: this.$route.query.estimationUrl || this.$route.params.estimationUrl
			}).then((data) => {
				if (!data) return

				this.selectedInfo = {
					carPurposeCode: this.selectedInfo.carPurposeCode,
					carCode: data.carCode,
					carName: data.carName,
					saleModelCode: data.saleModelCode ? data.saleModelCode.substring(0, 5) + 'G' + data.saleModelCode.substring(6, 9) : '',
					exterior: {
						exteriorColorCode: '',
						exteriorColorName: '',
						exteriorColorPrice: 0
					},
					interior: {
						interiorColorCode: '',
						interiorColorName: '',
						interiorColorPrice: 0,
						realityInteriorColorCode: ''
					},
					option: {
						saleSpecCode: '', //사양스펙코드
						classChoice: {},
						optionChoice: [],
						optionChoiceCodes: [],
						optionTuix: [],
						optionTuixCodes: []
					},
					carAmount: 1,
					recommendCheck: true,
					estimationUrl: this.$route.query.estimationUrl || this.$route.params.estimationUrl
				}
			})

			// 모델비교 유입 케이스
			if (this.$route.params.saleModelCode)
				this.selectedInfo.saleModelCode = this.$route.params.saleModelCode.substring(0, 5) + 'G' + this.$route.params.saleModelCode.substring(6, 9)

			// API-WX-상품서비스-077 (차량 조합 추천 TOP3 차량 리스트)
			if (!this.$route.params.contractNumber) {
				await this.getPersonalTop3CarsList({
					carCode: this.selectedInfo.carCode,
					channelSectionCode: 'pc'
				}).then((data) => {
					if (data) {
						this.recommendModel = data
					} else {
						this.recommendModel = {}
					}
				})
			}

			// 모델 필터 조회
			await this.getModelFilters({ ...this.filterQuery }).then((data) => {
				if (!data) return

				this.filterData = data
				if (this.filterList && this.filterList.length && this.filterData['carBodyType'] && this.filterData['carBodyType'].length) {
					this.filterQuery.carBodyCode = this.filterData['carBodyType'][0] ? this.filterData['carBodyType'][0].carBodyCode : ''
					// 밴 타입일 경우 바디타입 두번째로 세팅
					if (this.selectedInfo.saleModelCode.substring(3, 4) === 'V' && this.filterData['carBodyType'].length > 1)
						this.filterQuery.carBodyCode = this.filterData['carBodyType'][1] ? this.filterData['carBodyType'][1].carBodyCode : ''
					// 바디타입 적용
					this.onChangeQuery('carBodyCode')
				}
			})
		},

		// 필터 선택(바디타입)
		async onChangeQuery(codeKey) {
			this.isFilterLoading = true
			const startIndex = this.filterList.findIndex(({ code }) => code === codeKey) + 1

			for (let i = startIndex; i < this.filterList.length; i++) {
				const paramsFilterQuery = { ...this.filterQuery }
				// init filter query
				for (let j = i; j <= this.filterList.length - 1; j++) {
					paramsFilterQuery[this.filterList[j].code] = ''
				}

				await this.getModelFilters(paramsFilterQuery).then((data) => {
					if (!data) return

					this.filterData = data

					const { code, enableYn, filters } = this.filterList[i]
					const isChange = this.isChangeValue(code, enableYn, filters)
					if (isChange) {
						filters &&
							filters.some((obj) => {
								if (obj[enableYn] === 'Y') {
									this.filterQuery[code] = obj[code]
									return true
								}
							})
					}
				})
			}

			//최종 셋팅
			this.filterList.forEach(({ code, enableYn, filters }) => {
				const isChange = this.isChangeValue(code, enableYn, filters)
				if (isChange) {
					filters &&
						filters.some((obj) => {
							if (obj[enableYn] === 'Y') {
								this.filterQuery[code] = obj[code]
								return true
							}
						})
				}
			})

			this.selectedInfo.carPurposeCode = this.filterData.carPurposeCode
			await this.fnGetTrimList()
		},

		// 필터 변경여부 확인
		isChangeValue(code, enableYn, filters) {
			const value = this.filterQuery[code]
			const currents = filters.find((obj) => obj[code] === value)
			if (value === '' || !currents) {
				return true
			} else {
				return currents[enableYn] === 'N'
			}
		},

		// 필터 결과 트림 리스트 조회
		async fnGetTrimList() {
			this.startFlag = true
			await this.getTrims({
				carCode: this.selectedInfo.carCode,
				carAbbreviation: this.selectedInfo.carCode ? this.selectedInfo.carCode.substr(0, 2) : '',
				carPurposeCode: this.selectedInfo.carPurposeCode,
				carBodyCode: this.filterQuery.carBodyCode,
				carEnginCode: this.filterQuery.carEnginCode,
				carMissionCode: this.filterQuery.carMissionCode,
				carDriveCode: this.filterQuery.carDriveCode,
				carM5LoadCode: this.filterQuery.carLoadCode ? this.filterQuery.carLoadCode : this.filterQuery.carM5LoadCode ? this.filterQuery.carM5LoadCode : '',
				carM5InteriorSpaceCode: this.filterQuery.carInteriorSpaceCode
					? this.filterQuery.carInteriorSpaceCode
					: this.filterQuery.carM5InteriorSpaceCode
					? this.filterQuery.carM5InteriorSpaceCode
					: '',
				carVersionCode: this.filterQuery.carVersionCode
			}).then((data) => {
				this.isFilterLoading = false

				const tmpList = data.map((item) => {
					item.class = false
					const trimCode = item.saleModelCode.substr(6, 1)

					//주요품목 이미지 세팅
					item.carTrimSaleSpecImgList.map((e, index) => {
						item[`optionImg${index + 1}`] = e.attcFilePathNm + e.attcFileNm
						item[`optionImgNm${index + 1}`] = e.imageNm
					})

					let imgPath = ''
					if (this.selectedInfo.carCode.substr(0, 2) === 'JA') {
						// 스타렉스 이미지 경로 = 바디타입 + 트림
						imgPath = this.filterQuery.carBodyCode
					} else if (this.selectedInfo.carCode === 'M504') {
						// 포터2 이미지 경로 = 바디타입(실내공간) + 트림
						imgPath = this.filterQuery.carInteriorSpaceCode
					} else {
						// 그외 이미지 경로 = 엔진타입 + 트림
						imgPath = this.filterQuery.carEnginCode
					}

					item.trimImg = `/contents/vr360/${this.selectedInfo.carCode}/trim/${imgPath}${trimCode}.png`

					//주요품목 데이터가 없는 경우 직접 조합해서 세팅.
					if (!(Array.isArray(item.carTrimSaleSpecImgList) && item.carTrimSaleSpecImgList.length)) {
						for (let i = 1; i < 4; i++) {
							item[`optionImg${i}`] = `/contents/vr360/${this.selectedInfo.carCode}/trim/${imgPath}${trimCode}-USP-00${i}.png`
							item[`optionImgNm${i}`] = `옵션${i}`
						}
					}

					return item
				})

				this.carTrimList = tmpList

				// 선택된 트림이 없을 경우 첫번째 트림으로 선택
				if (!this.selectedInfo.saleModelCode || this.carTrimList.findIndex((ele) => ele.saleModelCode === this.selectedInfo.saleModelCode) < 0) {
					this.selectedInfo.saleModelCode = this.carTrimList[0].saleModelCode
					this.onChangeTrim()
				}

				// API-WX-고객정보서비스-021 (지인추천 할인 조건 조회)
				if (this.$route.query.recommenderCode) {
					if (!this.isCorp) {
						this.getDiscountReferral({
							csmrMgmtNo: atob(this.$route.query.recommenderCode)
						}).then((data) => {
							if (data) {
								if (data.notExpireYn !== 'Y') {
									this.friendRecommendType = 'expire'
									this.isPopup.friendRecommend = true
								} else if (data.possibleYn === 'N') {
									this.friendRecommendType = 'exceed'
									this.isPopup.friendRecommend = true
								} else {
									this.friendRecommendType = 'recom'
									this.isPopup.friendRecommend = true
								}
							}
						})
					} else {
						this.friendRecommendType = 'corp'
						this.isPopup.friendRecommend = true
					}
				}

				// API-H-결제서비스-013 (할부상품 리스트 조회)
				this.getPaymentProduct({ saleModelCode: this.realSaleModelCode })
			})
		},

		/* ############################# 트림선택 ###################################### */
		//트림 선택 이벤트
		async onChangeTrim(exteriorClr, interiorClr) {
			this.$nuxt.$loading.start()

			// 캐스퍼 터보 트림에서 선택 가능한 옵션 조회 후 추가(캐스퍼 액티브1/2, 액티브 플러스)
			let turboOpt, plusOpt, tuixOpt
			const turboModelCode = this.selectedInfo.saleModelCode.substring(0, 5) + 'T' + this.selectedInfo.saleModelCode.substring(6, 9)

			await this.getOptions({
				saleModelCode: turboModelCode
			}).then((optData) => {
				turboOpt = optData.optionChoice.find((ele) => ele.choiceOptionCode === 'CA1' || ele.choiceOptionCode === 'CA2')
				plusOpt = optData.optionChoice.find((ele) => ele.choiceOptionCode === 'AWB' || ele.choiceOptionCode === 'CAP')
				turboOpt = turboOpt ? { ...turboOpt, alert: 'Y', isClassChoiceVisible: true } : null
				plusOpt = plusOpt ? { ...plusOpt, alert: 'N', isClassChoiceVisible: true } : null
				tuixOpt = optData.optionTuix.find((ele) => ele.tuixOptionCode === 'AX0001')
			})

			// 판매모델별 차량 상세 조회, 연령별 외장 색상 추천 조회
			await this.getCarMakingInfo({
				carCode: this.selectedInfo.carCode,
				saleModelCode: this.selectedInfo.saleModelCode,
				estimationUrl: this.selectedInfo.estimationUrl,
				interiorColorCode: '',
				exteriorColorCode: '',
				siteTypeCode: 'W'
			}).then((data) => {
				if (turboOpt) data.option.optionChoice = plusOpt ? [turboOpt, ...data.option.optionChoice, plusOpt] : [turboOpt, ...data.option.optionChoice]

				// this.carInfo = {
				// 	carCode: this.selectedInfo.carCode,
				// 	saleModelCode: this.selectedInfo.saleModelCode,
				// 	modelCode: this.selectedInfo.saleModelCode,
				// 	purposeCode: this.selectedInfo.carPurposeCode,
				// 	estimationUrl: this.$route.query.estimationUrl,
				// 	...data.saleModelInfo
				// }

				// window._satellite.track('byo_step_2', {
				// 	vehicle_code: this.carInfo.carCode,
				// 	vehicle_name: this.carInfo.carName,
				// 	vehicle_engine: this.carInfo.carEnginName,
				// 	vehicle_body_style: this.carInfo.carBodyName,
				// 	vehicle_drive_train: this.carInfo.carDriveName,
				// 	vehicle_transmission: this.carInfo.carMissionName,
				// 	vehicle_trim: this.carInfo.carTrimName
				// })

				// this.carPrice = data.saleModelInfo.carPrice

				this.selectedInfo = {
					...this.selectedInfo,
					...data.saleModelInfo
				}

				this.selectedInfo.option = {
					saleSpecCode: '',
					classChoice: {},
					optionChoice: [],
					optionChoiceCodes: [],
					optionTuix: [],
					optionTuixCodes: []
				}

				if (data.option) {
					this.optionBasicList = data.option.optionBasic
					if (this.selectedInfo.carCode.substr(0, 2) === this.noOptionGeneralList[0].carCode) {
						// 아반떼 사양급 '틸블루컬러패키지' 미노출
						this.optionGeneralList = data.option.classChoice.filter((ele) => ele.saleSpecCode !== this.noOptionGeneralList[0].saleSpecCode)
					} else {
						this.optionGeneralList = data.option.classChoice
					}
					this.optionChoiceList = data.option.optionChoice
					this.optionTuixList = data.option.optionTuix
					if (tuixOpt) this.optionTuixList = [tuixOpt, ...this.optionTuixList]
					// 2020.01.09 기본 포함 품목 옵션 타이틀탭명 공통코드 data로 변경
					this.optionSubTitleTab = data.optionBasicTitle
				}

				// 임시 저장된 옵션 정보가 있으면
				if (data.tmpEstimationInfo && Object.keys(data.tmpEstimationInfo).length > 0) {
					//선택된 사양
					if (data.tmpEstimationInfo.carInfo.saleSpecCode === 'null' && data.option.classChoice && data.option.classChoice.length) {
						this.selectedInfo.option.saleSpecCode = data.option.classChoice[0].saleSpecCode
					} else {
						this.selectedInfo.option.saleSpecCode = data.tmpEstimationInfo.carInfo.saleSpecCode
					}

					//선택옵션 정보를 담는다
					this.selectedInfo.option.optionChoice = data.tmpEstimationInfo.carInfo.choiceOption
					// 견적임시저장 선택옵션 정보 불러올 시 단일 선택 불가한 옵션(unityChoiceYn)이 없기 때문에 새로 세팅
					this.selectedInfo.option.optionChoice.some((ele) => {
						if (Array.isArray(this.optionChoiceList)) {
							const optionChoice = data.option.optionChoice.find((option) => option.choiceOptionCode === ele.choiceOptionCode && option.unityChoiceYn)
							if (optionChoice) {
								ele.unityChoiceYn = optionChoice.unityChoiceYn
							}
						}

						// 선택된 옵션 일 경우 딤처리 해제
						this.optionChoiceList = this.optionChoiceList.map((el) => {
							if (el.choiceOptionCode === ele.choiceOptionCode) return { ...el, alert: 'Y' }
							else return el
						})
					})

					this.selectedInfo.option.optionChoiceCodes = this.selectedInfo.option.optionChoice.map((ele) => ele.choiceOptionCode)

					this.selectedInfo.option.optionTuix = data.tmpEstimationInfo.carInfo.tuixsOption
					this.selectedInfo.option.optionTuixCodes = this.selectedInfo.option.optionTuix.map((ele) => ele.tuixOptionCode)

					// 선택된 옵션정보가 있으면
					if (this.selectedInfo.option.optionChoice.length > 0) {
						this.fnDisableChoiceOption(this.selectedInfo.option.optionChoiceCodes.join(','))
					}

					if (this.isCorp && !this.$route.params.carInfoChangeYn && !this.$route.query.preCarFlag)
						this.selectedInfo.carAmount = data.tmpEstimationInfo.carAmount
					else this.selectedInfo.carAmount = 1

					// 차량 변경 데이터 세팅 후 estimationUrl 초기화
					this.selectedInfo.estimationUrl = ''
				} else if (data.option && data.option.classChoice.length) {
					this.selectedInfo.option.saleSpecCode = data.saleModelInfo.saleSpecCode || data.option.classChoice[0].saleSpecCode
				}

				// 모델비교 유입케이스
				if (this.$route.params.saleModelCode && this.$route.params.saleModelCode.substring(5, 6) === 'T') {
					this.selectedInfo.option.optionChoice = this.optionChoiceList.filter((ele) => ele.choiceOptionCode === 'CA1' || ele.choiceOptionCode === 'CA2')
					this.selectedInfo.option.optionChoiceCodes = this.selectedInfo.option.optionChoice.map((ele) => ele.choiceOptionCode)
					this.fnDisableChoiceOption()
					this.$route.params.saleModelCode = ''
				}

				// 컬러 초기 선택 값 설정
				let exItem = null
				if (data.exteriorColor) {
					if (data.tmpEstimationInfo && Object.keys(data.tmpEstimationInfo).length > 0 && data.tmpEstimationInfo.carInfo.exteriorColorCode) {
						exItem = data.exteriorColor.find((ele) => ele.exteriorColorCode === data.tmpEstimationInfo.carInfo.exteriorColorCode && ele.choiceYn === 'Y')
					}

					if (!exItem) exItem = data.exteriorColor.find((ele) => ele.choiceYn === 'Y')

					this.selectedInfo.exterior.exteriorColorCode = exItem.exteriorColorCode
					this.selectedInfo.exterior.exteriorColorName = exItem.exteriorColorName
					this.beforeExteriorColorCode = exItem.exteriorColorCode
					this.beforeExteriorColorName = exItem.exteriorColorName

					// if (exItem) {
					// 	// 외장이미지(360) 색상변경
					// 	this.vr360.changeVr360CarColorChip(exItem.index)
					// }
				}

				let inItem = null
				if (data.interiorColor) {
					if (data.tmpEstimationInfo && Object.keys(data.tmpEstimationInfo).length > 0 && data.tmpEstimationInfo.carInfo.interiorColorCode) {
						inItem = data.interiorColor.find((ele) => ele.interiorColorCode === data.tmpEstimationInfo.carInfo.interiorColorCode && ele.choiceYn === 'Y')
					}

					if (!inItem) inItem = data.interiorColor.find((ele, index) => ele.choiceYn === 'Y')

					this.selectedInfo.interior.interiorColorCode = inItem.interiorColorCode
					this.selectedInfo.interior.realityInteriorColorCode = inItem.realityInteriorColorCode
					this.selectedInfo.interior.interiorColorName = inItem.interiorColorName
					this.beforeInteriorColorCode = inItem.interiorColorCode
					this.beforeRealityInteriorColorCode = inItem.realityInteriorColorCode
					this.beforeInteriorColorName = inItem.interiorColorName
				}

				// 계약 차량변경 시 출고 예정일 등 조회
				if (
					data.tmpEstimationInfo &&
					Object.keys(data.tmpEstimationInfo).length > 0 &&
					this.$route.params.carInfoChangeYn &&
					this.$route.params.carInfoChangeYn === 'Y'
				) {
					this.tmpSelectedInfo.saleModelCode = data.tmpEstimationInfo.carInfo.saleModelCode
					this.tmpSelectedInfo.exteriorColorCode = data.tmpEstimationInfo.carInfo.exteriorColorCode
					this.tmpSelectedInfo.interiorColorCode = data.tmpEstimationInfo.carInfo.interiorColorCode
					this.tmpSelectedInfo.optionMixCode = data.tmpEstimationInfo.optionMixCode
					this.tmpSelectedInfo.tuixOptionCode = data.tmpEstimationInfo.tuixMixCode

					if (this.$route.params.anticipationPromiseDateText && this.$route.params.anticipationPromiseDateText !== '') {
						this.carDeliveryChangeInfo.beforeDeliveryDate = this.$route.params.anticipationPromiseDateText
					} else {
						// //출고예정일 조회
						// this.getContractCarStatus({
						// 	contractCarTypeCode: data.tmpEstimationInfo.estimationCarTypeCode, //계약차량유형코드 : 10 일반재고 20 할인재고 30 전시재고 40 판촉재고 50 생산주문 60 신차사전예약
						// 	deliveryCenterCode:
						// 		data.tmpEstimationInfo.estimationCarTypeCode === '10' ||
						// 		data.tmpEstimationInfo.estimationCarTypeCode === '20' ||
						// 		data.tmpEstimationInfo.estimationCarTypeCode === '40'
						// 			? data.tmpEstimationInfo.deliveryCenterCode || ''
						// 			: '', //일반재고, 조건재고(전시재고 제외 - 직접인수)의 경우 출고센터 고정
						// 	saleModelCode: data.tmpEstimationInfo.carInfo.saleModelCode,
						// 	optionMixCode: data.tmpEstimationInfo.optionMixCode || '',
						// 	tuixOptionCode: data.tmpEstimationInfo.tuixMixCode || '',
						// 	exteriorColorCode: data.tmpEstimationInfo.carInfo.exteriorColorCode,
						// 	interiorColorCode: data.tmpEstimationInfo.carInfo.interiorColorCode,
						// 	branchCode: '',
						// 	BranchName: '',
						// 	branchAddress: '',
						// 	deliveryLocalAreaCode: data.tmpEstimationInfo.deliveryInfo.deliveryLocalAreaCode || '',
						// 	productionCarNumber: data.tmpEstimationInfo.estimationCarTypeCode === '40' ? data.tmpEstimationInfo.carProductionNumber || '' : '',
						// 	contractNumber: this.$route.params.contractNumber || '',
						// 	fixDeliveryCenterCode: ''
						// }).then((statusData) => {
						// 	this.carDeliveryChangeInfo.beforeDeliveryDate = statusData.anticipationPromiseDateText
						// })

						// 구매내역에서 넘어온 예상출고일이 없을 경우 예상출고일 하드코딩
						this.carDeliveryChangeInfo.beforeDeliveryDate = '즉시출고 가능'
					}

					this.carDeliveryChangeInfo.estimationCarTypeCode = data.tmpEstimationInfo.estimationCarTypeCode
					this.carDeliveryChangeInfo.deliveryCenterCode = data.tmpEstimationInfo.deliveryCenterCode
					this.carDeliveryChangeInfo.deliveryLocalAreaCode = data.tmpEstimationInfo.deliveryInfo.deliveryLocalAreaCode
					this.carDeliveryChangeInfo.carProductionNumber = data.tmpEstimationInfo.carProductionNumber
					this.carDeliveryChangeInfo.beforeCarTotalPrice = Number(this.carTotalPrice).toLocaleString()

					// EP_IF_국내판매_075(차량별 하이패스 장착 여부)
					const params = {
						OPT: '5',
						SALE_MDL_CD: this.tmpSelectedInfo.saleModelCode,
						PRDN_CAR_NO: this.carDeliveryChangeInfo.carProductionNumber,
						SALE_OPT_CD: this.tmpSelectedInfo.optionMixCode
					}
					this.postHighpassEnable(params).then((data) => {
						if (data) this.carDeliveryChangeInfo.beforeHighpassEnable = data
					})
				}

				if (!this.initLoading) this.initLoading = true
			})

			//색상에 따른 트림변경 시 색상 세팅
			if (exteriorClr) {
				let selectedExterior = this.exteriorColor.find((ele) => ele.exteriorColorCode === exteriorClr)
				this.selectedInfo.exterior.exteriorColorCode = selectedExterior.exteriorColorCode
				this.selectedInfo.exterior.saleModelCode = selectedExterior.saleModelCode
				this.selectedInfo.exterior.exteriorColorName = selectedExterior.exteriorColorName
				this.selectedInfo.exterior.choiceYn = selectedExterior.choiceYn
				this.selectedInfo.exterior.exteriorColorPrice = selectedExterior.exteriorColorPrice
				this.selectedInfo.exterior.index = selectedExterior.index
				this.selectedInfo.exterior.inColorCode = selectedExterior.inColorCode
				this.selectedInfo.exterior.interiorColorCode = selectedExterior.interiorColorCode
				this.beforeExteriorColorCode = this.selectedInfo.exterior.exteriorColorCode
				this.beforeExteriorColorName = this.selectedInfo.exterior.exteriorColorName
			}

			if (interiorClr) {
				let selectedInterior = this.interiorColor.find((ele) => ele.interiorColorCode === interiorClr)
				this.selectedInfo.interior.interiorColorCode = selectedInterior.interiorColorCode
				this.selectedInfo.interior.saleModelCode = selectedInterior.saleModelCode
				this.selectedInfo.interior.interiorColorName = selectedInterior.interiorColorName
				this.selectedInfo.interior.choiceYn = selectedInterior.choiceYn
				this.selectedInfo.interior.interiorColorPrice = selectedInterior.interiorColorPrice
				this.selectedInfo.interior.exColorCode = selectedInterior.exColorCode
				this.selectedInfo.interior.realityInteriorColorCode = selectedInterior.realityInteriorColorCode
				this.beforeInteriorColorCode = this.selectedInfo.interior.interiorColorCode
				this.beforeRealityInteriorColorCode = this.selectedInfo.interior.realityInteriorColorCode
				this.beforeInteriorColorName = this.selectedInfo.interior.interiorColorName
			}

			// 컨피규레이터 세팅
			if (!exteriorClr && !interiorClr) this.setConfigurator()
			this.$nuxt.$loading.finish()
		},

		/* ############################# 색상선택 ###################################### */
		// 외장색상 선택 시
		async fnCheckExColor(exColorCode, inColorCode) {
			let selectedExterior = this.exteriorColor.find((ele) => ele.exteriorColorCode === exColorCode)
			this.selectedInfo.exterior = { ...selectedExterior }

			// window._satellite.track('byo_step_spec', { vehicle_exterior_color: this.selectedInfo.exterior.exteriorColorCode })

			if (this.selectedInfo.exterior.choiceYn === 'N') {
				// API-WH-상품서비스-045 (선택할 수 없는 색상변경 시 변경 트림, 옵션정보를 조회하는 API)
				this.getColorChangeTrimOption({
					carCode: this.selectedInfo.carCode,
					saleModelCode: this.realSaleModelCode,
					beforeInteriorColorCode: this.selectedInfo.interior.realityInteriorColorCode,
					beforeExteriorColorCode: this.beforeExteriorColorCode,
					interiorColorCode: this.selectedInfo.interior.realityInteriorColorCode,
					exteriorColorCode: this.selectedInfo.exterior.exteriorColorCode,
					optionCode: this.selectedInfo.option.optionChoiceCodes.length > 0 ? this.selectedInfo.option.optionChoiceCodes.join(',') : ''
				}).then((data) => {
					if (data.interiorChangeColorYn && data.interiorChangeColorYn === 'Y') {
						//색상변경 안내
						this.onNotiColor(this.selectedInfo.exterior.exteriorColorName, 'ex')
						this.selectedInfo.exterior.exteriorColorCode = this.beforeExteriorColorCode || this.selectedInfo.exterior.exteriorColorCode
						this.selectedInfo.exterior.exteriorColorName = this.beforeExteriorColorName || this.selectedInfo.exterior.exteriorColorName
					} else {
						//트림변경 안내
						this.isPopup.trimChangeInfo = true
						this.isPopup.trimChangeColor = 'EX'
					}
				})
			} else if (this.beforeExteriorColorCode !== this.selectedInfo.exterior.exteriorColorCode) {
				this.selectedInfo.exterior.inColorCode = inColorCode
				await this.fnSelectColor('ex', this.selectedInfo.exterior)
				this.beforeExteriorColorCode = this.selectedInfo.exterior.exteriorColorCode
				this.beforeExteriorColorName = this.selectedInfo.exterior.exteriorColorName
				this.beforeInteriorColorCode = this.selectedInfo.interior.interiorColorCode
				this.beforeRealityInteriorColorCode = this.selectedInfo.interior.realityInteriorColorCode
				this.beforeInteriorColorName = this.selectedInfo.interior.interiorColorName
			}
		},

		// 내장색상 선택 시
		async fnCheckInColor(inColorCode, exColorCode) {
			let selectedInterior = this.interiorColor.find((ele) => ele.interiorColorCode === inColorCode)
			this.selectedInfo.interior = { ...selectedInterior }

			// window._satellite.track('byo_step_spec',{vehicle_interior_color : item.interiorColorName})

			if (this.selectedInfo.interior.choiceYn === 'N') {
				// API-WH-상품서비스-045 (선택할 수 없는 색상변경 시 변경 트림, 옵션정보를 조회하는 API)
				this.getColorChangeTrimOption({
					carCode: this.selectedInfo.carCode,
					saleModelCode: this.realSaleModelCode,
					beforeInteriorColorCode: this.beforeRealityInteriorColorCode,
					beforeExteriorColorCode: this.selectedInfo.exterior.exteriorColorCode,
					interiorColorCode: this.selectedInfo.interior.realityInteriorColorCode,
					exteriorColorCode: this.selectedInfo.exterior.exteriorColorCode,
					optionCode: this.selectedInfo.option.optionChoiceCodes.length > 0 ? this.selectedInfo.option.optionChoiceCodes.join(',') : ''
				}).then((data) => {
					if (data.exteriorChangeColorYn && data.exteriorChangeColorYn === 'Y') {
						//색상변경 안내
						this.onNotiColor(this.selectedInfo.interior.interiorColorName, 'in')
						this.selectedInfo.interior.interiorColorCode = this.beforeInteriorColorCode || this.selectedInfo.interior.interiorColorCode
						this.selectedInfo.interior.realityInteriorColorCode = this.beforeRealityInteriorColorCode || this.selectedInfo.interior.realityInteriorColorCode
						this.selectedInfo.interior.interiorColorName = this.beforeInteriorColorName || this.selectedInfo.interior.interiorColorName
					} else {
						//트림변경 안내
						this.isPopup.trimChangeInfo = true
						this.isPopup.trimChangeColor = 'IN'
					}
				})
			} else if (this.beforeInteriorColorCode !== this.selectedInfo.interior.interiorColorCode) {
				this.selectedInfo.interior.exColorCode = exColorCode
				this.fnSelectColor('in', this.selectedInfo.interior)
				this.beforeExteriorColorCode = this.selectedInfo.exterior.exteriorColorCode
				this.beforeExteriorColorName = this.selectedInfo.exterior.exteriorColorName
				this.beforeInteriorColorCode = this.selectedInfo.interior.interiorColorCode
				this.beforeRealityInteriorColorCode = this.selectedInfo.interior.realityInteriorColorCode
				this.beforeInteriorColorName = this.selectedInfo.interior.interiorColorName
			}
		},

		// 색상 선택
		async fnSelectColor(type, item) {
			let param = {}
			if (type === 'ex') {
				param = { exColor: item.exteriorColorCode }
			} else if (type === 'in') {
				param = { inColor: item.interiorColorCode }
			}

			// 색상 선택에 따라 선택 불가한 TUIX 옵션 있는지 체크
			const bool = await this.fnOpenDelTuixOption(param)

			if (!bool) {
				if (type === 'ex') {
					// 선택불가한 색상이 있는지 재 조회
					await this.getInteriorColor({
						saleModelCode: this.realSaleModelCode,
						exteriorColorCode: item.exteriorColorCode
					})

					let inColorCode = this.selectedInfo.interior.interiorColorCode //이미 선택된 색상
					if (item.inColorCode && this.selectedInfo.interior.interiorColorCode !== item.inColorCode) {
						inColorCode = item.inColorCode //사양옵션 시 변경되어야 하는 색상
					}

					// 선택된 색상이 재 조회 후에 선택불가로 바뀐 경우 첫번째로 변경 선택
					const idx = this.interiorColor.findIndex((ele) => ele.interiorColorCode === inColorCode && ele.choiceYn === 'Y')

					if (idx < 0) {
						const inItem = this.interiorColor.find((ele) => ele.choiceYn === 'Y')

						if (inItem) {
							this.selectedInfo.interior = inItem
							item.interiorColorCode = inItem.interiorColorCode
						}
					}

					// TUIX옵션 리스트 재조회
					this.fnGetTuixOptions([], item)

					// 외장이미지(360) 색상변경
					// this.vr360.changeVr360CarColorChip(item.index)
				} else if (type === 'in') {
					this.selectedInfo.interior = item
					// 선택불가한 색상이 있는 지 재 조회
					await this.getExteriorColor({
						saleModelCode: this.realSaleModelCode,
						interiorColorCode: item.interiorColorCode,
						siteTypeCode: 'W'
					})

					let exColorCode = this.selectedInfo.exterior.exteriorColorCode //이미 선택된 색상
					if (item.exColorCode && this.selectedInfo.exterior.exteriorColorCode !== item.exColorCode) {
						exColorCode = item.exColorCode //사양옵션 시 변경되어야 하는 색상
					}

					// 선택된 색상이 재 조회 후에 선택불가로 바뀐 경우 첫번째로 변경 선택
					const idx = this.exteriorColor.findIndex((ele) => ele.exteriorColorCode === exColorCode && ele.choiceYn === 'Y')
					if (idx < 0) {
						const exItem = this.exteriorColor.find((ele) => ele.choiceYn === 'Y')

						if (exItem) {
							this.selectedInfo.exterior = exItem
							item.exteriorColorCode = exItem.exteriorColorCode

							// 외장이미지(360) 색상변경
							// this.vr360.changeVr360CarColorChip(exItem.index)
						}
					}

					// TUIX옵션 리스트 재조회
					this.fnGetTuixOptions([], item)
				}

				// 컨피규레이터 세팅
				this.setConfigurator()
			}

			await this.checkRequiredOption()
		},

		// 색상 선택 불가 안내
		onNotiColor(colorName, type) {
			// 선택할수 없는 색상 선택 시 색상변경만 하는 되는 경우
			let msg = colorName + ' 색상은 선택하신 외장색과 함께 제공되지 않는 색상입니다.<br />외장색상을 변경해주세요.'
			if (type === 'ex') {
				msg = colorName + ' 색상은 선택하신 내장색과 함께 제공되지 않는 색상입니다.<br />내장색상을 변경해주세요.'
			}

			this.alert = {
				visible: true,
				footer: ['close'],
				message: msg,
				callback: () => {
					this.alert.visible = false
				},
				cancel: () => {
					this.alert.visible = false
				}
			}
		},

		// API-WH-상품서비스-097 (컬러선택시(외장/내장) 필수 옵션 조회)
		async checkRequiredOption() {
			await this.getOptionRequiredChoice({
				saleModelCode: this.realSaleModelCode, // 판매모델 코드
				saleSpecCode: this.selectedInfo.option.saleSpecCode, // 사양급코드
				exteriorColorCode: this.selectedInfo.exterior.exteriorColorCode, // 외장색상코드
				interiorColorCode: this.selectedInfo.interior.interiorColorCode // 내장색상코드
			}).then((data) => {
				if (data && data.length) {
					this.beforeOptionRequired = [] // 기존 필수 옵션 코드 목록 (현재선택 이전)
					data.map((items) => {
						if (items.CHOICEYN === 'N') {
							this.optionChoiceList.map((choiceItem) => {
								if (items.OPTIONCODE === choiceItem.choiceOptionCode) {
									choiceItem.requiredOptionYn = 'N'
									const ocIdx = this.selectedInfo.option.optionChoice.findIndex((oc) => {
										return oc.choiceOptionCode === items.OPTIONCODE
									})
									const occIdx = this.selectedInfo.option.optionChoiceCodes.findIndex((code) => {
										return code === items.OPTIONCODE
									})

									this.selectedInfo.option.optionChoice.splice(ocIdx, 1)
									this.selectedInfo.option.optionChoiceCodes.splice(occIdx, 1)
								}
							})
						} else {
							this.optionChoiceList.map((choiceItem) => {
								if (items.OPTIONCODE === choiceItem.choiceOptionCode) {
									choiceItem.alert = 'Y'
									choiceItem.requiredOptionYn = 'Y'
								}
							})

							//필수 옵션을 자동으로 활성화(선택) 하기전에 선택이 이미 되어있었는지 체크 후 활성화
							if (
								!this.selectedInfo.option.optionChoiceCodes.some((optionCode) => {
									return optionCode === items.OPTIONCODE
								})
							) {
								this.fnSetSelectedOption(items.OPTIONCODE, 'choice')
							}
						}
					})

					const classChoice = this.optionGeneralList.find((ele) => ele.saleSpecCode === this.selectedInfo.option.saleSpecCode)

					if (classChoice && classChoice.carClassOption && classChoice.carClassOption.length) {
						data.map((items) => {
							const isOption = classChoice.carClassOption.some((option) => {
								return option.carOptionCode === items.OPTIONCODE
							})
							const cvrtClassOption = { carOptionCode: items.OPTIONCODE, defaultChoiceYn: 'Y' }

							if (!isOption) {
								// 기존 필수 옵션 목록에 없었던 케이스일 경우 추가
								classChoice.carClassOption.push(cvrtClassOption)
							}
							this.beforeOptionRequired.push(cvrtClassOption)
						})
					} else {
						// 기존에 필수 옵션 케이스가 없었을 경우 바로 넣어줌.
						const cvrtClassOptionList = data.map((items) => {
							return { carOptionCode: items.OPTIONCODE, defaultChoiceYn: 'Y' }
						})
						classChoice.carClassOption = cvrtClassOptionList
						this.beforeOptionRequired = cvrtClassOptionList
					}
				} else {
					// 변경한 내장색상/외장색상에 대한 필수 옵션 코드가 없을 경우
					this.optionChoiceList.map((choiceItem) => {
						choiceItem.requiredOptionYn = 'Y'
					}) // 선택불가 상태인 옵션들을 모두 풀어줌.

					const classChoice = this.optionGeneralList.find((ele) => ele.saleSpecCode === this.selectedInfo.option.saleSpecCode)
					if (classChoice && classChoice.carClassOption && classChoice.carClassOption.length) {
						classChoice.carClassOption.map((items, idx) => {
							const isOption = this.beforeOptionRequired.some((option) => {
								return option.carOptionCode === items.carOptionCode
							})

							if (isOption) {
								// 기존값에 대한 필수 옵션 코드가 있었는지 여부
								classChoice.carClassOption.splice(idx, 1)
							}
						})

						this.beforeOptionRequired = [] // init
					}
				}
			})
		},

		/* ############################# 옵션선택 ###################################### */
		// 옵션 선택(체크)
		async fnCheckOption(item, type, confirm) {
			if (item.alert === 'Y' && type !== 'tuix') {
				if (item.choiceOptionCode === 'CAP' && !confirm) {
					const idx = this.fnExistOption(item.choiceOptionCode, type)
					if (idx < 0) {
						this.isPopup.activePlusInfo = true
						return
					}
				}
				const bool = await this.fnOpenDelTuixOption(item) // 색상, 옵션 선택 시 마다 삭제되는 TUIX옵션이 있으면 삭제팝업

				if (!bool) {
					// 선택한 옵션 리스트에 추가 또는 해제
					await this.fnSetSelectedOption(item.choiceOptionCode, type)
					// 다른 옵션 비활성화/활성화 처리
					await this.fnDisableChoiceOption(item.choiceOptionCode)

					if (item.requiredOptionYn === 'N') await this.fnDisableOption(item) // 컬러색상별 옵션 불가능한 case일 경우
				}
				// window._satellite.track('byo_step_spec', { vehicle_amenities: this.convertOptionCodesToOptionNames(this.selectedInfo.option.optionChoiceCodes, 'choice') })
			} else if (item.alert === 'N' && type !== 'tuix') {
				//추가할 옵션이 있는지 체크
				if (item.requiredOptionYn === 'N') {
					// 옵션 선택불가 케이스
					await this.fnDisableOption(item)
				} else {
					await this.fnGetAddDelOption(item, type)
				}
				// window._satellite.track('byo_step_spec', { vehicle_amenities: this.convertOptionCodesToOptionNames(this.selectedInfo.option.optionChoiceCodes, 'choice') })
			} else if (item.alert === 'Y' && type === 'tuix') {
				this.fnSetSelectedOption(item.tuixOptionCode, type)

				// 다른 옵션 비활성화/활성화 처리
				this.fnDisableTuixOption(item.tuixOptionCode)
				// window._satellite.track('byo_step_spec', { vehicle_TUIX: this.convertOptionCodesToOptionNames(this.selectedInfo.option.optionTuixCodes, 'tuix') })
			}

			if (type !== 'tuix') await this.setConfigurator()
		},

		// 색상, 옵션 선택 시 마다 삭제되는 TUIX옵션이 있으면 삭제팝업
		async fnOpenDelTuixOption(item) {
			if (this.selectedInfo.option.optionTuix.length > 0) {
				const codes = []
				if (item && item.choiceOptionCode) {
					this.selectedInfo.option.optionChoiceCodes.map((ele) => {
						if (ele !== item.choiceOptionCode) {
							codes.push(ele)
						}
					})
					const existIdx = this.fnExistOption(item.choiceOptionCode, 'choice')
					if (existIdx < 0) {
						if (item.choiceOptionCode) codes.push(item.choiceOptionCode)
					}
				} else {
					this.selectedInfo.option.optionChoiceCodes.map((ele) => {
						codes.push(ele)
					})
					if (item.choiceOptionCode) codes.push(item.choiceOptionCode)
				}

				item.codes = codes

				const tuixList = await this.fnGetTuixCheck(item)
				const tuixList2 = tuixList.filter((ele) => ele.tuixOptionCode !== 'AX0001')
				if (tuixList2.length > 0) {
					this.isPopup.partsDelTuixInfo = true
					this.setOptionInfo = item
					this.addDelOption = { delTuixOptionList: tuixList2 }
					return true
				}
				return false
			}
			return false
		},

		// 옵션 체크 또는 해제
		fnSetSelectedOption(optionCode, type) {
			if (type === 'tuix') {
				const idx = this.fnExistOption(optionCode, type)

				if (idx >= 0) {
					//옵션 체크 해제(삭제)
					this.selectedInfo.option.optionTuix = this.selectedInfo.option.optionTuix.filter((ele) => ele.tuixOptionCode !== optionCode)
					this.selectedInfo.option.optionTuixCodes = this.selectedInfo.option.optionTuixCodes.filter((code) => code !== optionCode)
				} else {
					//옵션 체크(추가)
					const optionItem = this.optionTuixList.find((ele) => ele.tuixOptionCode === optionCode)

					if (optionItem) {
						this.selectedInfo.option.optionTuix.push(optionItem)
						this.selectedInfo.option.optionTuixCodes.push(optionCode)
					}
				}
			} else if (type === 'choice') {
				const idx = this.fnExistOption(optionCode, type)

				if (idx >= 0) {
					//옵션 체크 해제(삭제)
					const classChoice = this.optionGeneralList.find((ele) => ele.saleSpecCode === this.selectedInfo.option.saleSpecCode)
					//사양 옵션에 필수로 선택되어야 하는 옵션은 풀리면 안됨
					if (classChoice && classChoice.carClassOption && classChoice.carClassOption.findIndex((ele) => ele.carOptionCode === optionCode) > -1) {
						return
					}

					//코나 Smart 트림 필수조건 = 그레이 내장색상 -> 베이직패키지 필수
					if (
						optionCode === 'BSP' &&
						this.carInfo &&
						(this.carInfo.saleModelCode === 'OSJJ5TSD4' || this.carInfo.saleModelCode === 'OSJJ5TSE4') &&
						this.selectedInfo.interior.interiorColorCode === 'YPK'
					) {
						return
					}
					////////////////////////////////////////////////////////////////////

					this.selectedInfo.option.optionChoice = this.selectedInfo.option.optionChoice.filter((ele) => ele.choiceOptionCode !== optionCode)

					this.selectedInfo.option.optionChoiceCodes = this.selectedInfo.option.optionChoiceCodes.filter((code) => code !== optionCode)
				} else {
					//옵션 체크
					const optionItem = this.optionChoiceList.find((ele) => ele.choiceOptionCode === optionCode)
					if (optionItem) {
						if (optionItem.requiredOptionYn === 'N') {
							return
						} // 색상 컬러값에 따른 선택 불가능한 옵션일 경우( 활성화 x )

						this.selectedInfo.option.optionChoice.push(optionItem)
						this.selectedInfo.option.optionChoiceCodes.push(optionCode)
					}
				}
			}
		},

		// 옵션 선택시  다른 옵션 비활성화/활성화 처리(상품070, 071)
		async fnDisableChoiceOption(code) {
			// console.log('옵션 활성화/비활성화 처리')
			if (this.selectedInfo.option.optionChoiceCodes.length > 0) {
				let disableCA1Flag =
					this.realSaleModelCode === 'AXJJ4GBT1' && this.selectedInfo.option.optionChoiceCodes.findIndex((ele) => ele === 'AWP') > -1 ? true : false
				await this.getAlterChoiceOption({
					saleModelCode: this.realSaleModelCode,
					optionCode: this.selectedInfo.option.optionChoiceCodes.join(',')
				}).then((data) => {
					// 전체 활성화 처리
					this.optionChoiceList.map((ele) => {
						ele.alert = 'Y'
						return ele
					})
					// 비활성화 처리
					this.optionChoiceList.map((ele) => {
						if (data.disable.length > 0) {
							data.disable.forEach((dEle) => {
								if (ele.choiceOptionCode === dEle.optionCode) {
									ele.alert = 'N'
								}
							})
						}

						if (data.enable.length > 0) {
							data.enable.forEach((eEle) => {
								if (ele.choiceOptionCode === eEle.optionCode) {
									ele.alert = 'Y'
								}
							})
						}

						// 모던 터보 트림일 경우 AWP 휠 딤처리
						if (this.realSaleModelCode === 'AXJJ4TBT1' && ele.choiceOptionCode === 'AWP') ele.alert = 'N'
						if (this.realSaleModelCode === 'AXJJ4GBT1' && ele.choiceOptionCode === 'AWB') ele.alert = 'N'
						if (disableCA1Flag && ele.choiceOptionCode === 'CA1') ele.alert = 'N'

						return ele
					})

					if (this.selectedInfo.option.classChoice && this.selectedInfo.option.classChoice.length) {
						// 초기 옵션 정보가 있는 경우
						this.selectedInfo.option.classChoice.map((items) => {
							// 초기 옵션이 활성화 되어 있다면 true, 아니라면 false
							const selectedOptionStatus = this.selectedInfo.option.optionChoiceCodes.find((items2) => {
								return items2 === items.carOptionCode
							})
							// 초기 옵션의 필수 여부가 'Y' 이면서 초기 옵션이 1개이며, 활성화 되어 있을 경우
							// ※ 초기 필수 옵션 체크가 1개라고 가정한 상태
							if (items.defaultChoiceYn === 'Y' && this.selectedInfo.option.optionChoiceCodes.length === 1 && selectedOptionStatus) {
								// console.log('첫번째 필수 옵션만 활성화 되어 있는 상태')
								this.optionChoiceList.map((ele) => {
									// 선택 품목 옵션 목록
									// 필수 옵션을 선택한 상태에서 다른 옵션들의 활성화/비활성화 여부를 다시 설정하기 위함.
									//  ==> 초기 데이터가 필수 옵션 선택 여부를 고려하지 않아, 모두 비활성화로 되어있기 때문
									// data.enable(활성화), data.disable(비활성화) 옵션 목록을 돌면서 선택 품목 옵션에 상태값을 저장함.
									if (data.enable && data.enable.length) {
										data.enable.some((ele2) => {
											if (ele2.optionCode === ele.choiceOptionCode) {
												ele.excpUnityChoiceYn = 'Y' // 활성화
												return true
											}
										})
									}

									if (data.disable && data.disable.length) {
										data.disable.some((ele2) => {
											if (ele2.optionCode === ele.choiceOptionCode) {
												ele.excpUnityChoiceYn = 'N' // 비활성화
												return true
											}
										})
									}
								})
							}
						})
					}

					// 이벤트(클릭) 옵션을 선택했을 경우, 활성화인지 비활성화인지 여부를 판단
					const selectedOptionStatus = this.selectedInfo.option.optionChoiceCodes.find((items2) => {
						return items2 === code
					})
					if (!selectedOptionStatus && code) {
						// 선택 해제시
						// 선택 해제한 옵션의 연관된 옵션들을 활성화한 상태에서 해당 옵션을 해제했을 경우
						// 선택 헤제한 옵션을 다시 활성화 하라고 할 경우 아래 로직을 타기 위해 빈배열로 바꿔줌
						if (data.enable && data.enable.length === 1) {
							if (
								data.enable.find((items) => {
									return items.optionCode === code
								})
							) {
								data.enable = []
							}
						}
					}

					// 옵션 활성화 목록이 없는 경우 : 단일 선택 불가한 옵션(unityChoiceYn:N) 비활성화 처리
					if (data.enable.length === 0) {
						let unityChoiceYnCnt = 0 // 단일 선택 불가능한 옵션 개수
						this.selectedInfo.option.optionChoice.forEach((ele, index) => {
							if (ele.unityChoiceYn === 'N' && ele.excpUnityChoiceYn !== 'Y') {
								this.fnSetSelectedOption(ele.choiceOptionCode, 'choice')
								unityChoiceYnCnt++
							}
						})

						if (unityChoiceYnCnt > 0) {
							// 단일 선택 불가능한 옵션이 있을 경우
							this.fnDisableChoiceOption()
						}

						if (code) {
							this.optionChoiceList.map((ele) => {
								//처음 015 API 데이터의 값이 선택 불가인 경우 비활성화 처리
								// A(메인키) -> B -> C 구조일시 A가 선택해지될시 B에가
								// API-H-상품서비스-021(옵션변경 시 삭제되는 옵션 리스트) 호출하였을시 해지될 리스트가 있을경우
								// 해당 선택된 상태을 ALERT로 변경해준다
								if (ele.unityChoiceYn === 'N' && ele.excpUnityChoiceYn !== 'Y') {
									this.getOptionDel({
										saleModelCode: this.realSaleModelCode,
										afterOption: code ? code : '',
										beforOption: this.selectedInfo.option.optionChoiceCodes.length > 0 ? this.selectedInfo.option.optionChoiceCodes.join(',') : ''
									}).then((data) => {
										if (data && data.carAddOptionList && data.carAddOptionList.length > 0) {
											data.carAddOptionList.forEach((carAddEle, carAddIndex) => {
												if (ele.optionCode === carAddEle.optionCode) {
													ele.alert = 'Y'
												}
											})
										} else {
											ele.alert = 'N'
										}
									})
								}
							})
						}
						// TUIX옵션 리스트 재조회(선택 옵션에 따라 TUIX옵션이 달라짐)
						return this.fnGetTuixOptions()
					}

					const citem = this.selectedInfo.option.optionChoice.find((ele) => ele.choiceOptionCode === code)

					// A(메인키) -> B -> C 구조일시 A가 선택해지될시 전체적으로 해제되는 로직
					//선택한 옵션코드가 API-H-상품서비스-021 (옵션변경 시 삭제되는 옵션 리스트) 통해 리스트가 있는경우 삭제
					if (!citem && code) {
						this.selectedInfo.option.optionChoice.forEach(async (ele, index) => {
							if (ele.unityChoiceYn === 'N' && ele.excpUnityChoiceYn !== 'Y') {
								await this.getOptionDel({
									saleModelCode: this.realSaleModelCode,
									afterOption: ele.choiceOptionCode,
									beforOption: this.selectedInfo.option.optionChoiceCodes.length > 0 ? this.selectedInfo.option.optionChoiceCodes.join(',') : ''
								}).then((data) => {
									if (data && data.carAddOptionList && data.carAddOptionList.length > 0) {
										data.carAddOptionList.forEach((carAddEle, carAddIndex) => {
											//해당 데이터에 삭제코드 리스트에 선택된 code가 담겨져있는지 확인한후
											if (carAddEle.optionCode === code) {
												data.carAddOptionList.forEach((carAddEle2, carAddIndex2) => {
													//삭제리스트 중 선택된 code가 다른것만 삭제한다.
													if (carAddEle2.optionCode !== code) {
														this.fnSetSelectedOption(carAddEle2.optionCode, 'choice')
														this.fnDisableChoiceOption(carAddEle2.optionCode)
													}
												})
											}
										})
									}
									// TUIX옵션 리스트 재조회(선택 옵션에 따라 TUIX옵션이 달라짐)
									this.fnGetTuixOptions()
								})
							}
						})
					}
				})
			} else {
				this.optionChoiceList.map((ele) => {
					ele.unityChoiceYn === 'N' ? (ele.alert = 'N') : (ele.alert = 'Y')
				})

				// 옵션이 전부 해제되면 TUIX옵션 리스트 재조회
				this.fnGetTuixOptions()
			}

			// 액티브 플러스 파츠 숨김 처리 관련
			// API-WH-상품서비스-088 (옵션선택시 필수선택 tuix 조회)
			this.getTuixRequiredChoice({
				saleModelCode: this.realSaleModelCode,
				optionCode: this.selectedInfo.option.optionChoiceCodes.length ? this.selectedInfo.option.optionChoiceCodes.join(',') : '',
				saleSpecCode: this.selectedInfo.option.saleSpecCode
			}).then((requiredData) => {
				if (requiredData && requiredData.length > 0) {
					// duplicate field remove
					const requireTuixL = requiredData.filter(((set) => (f) => !set.has(f.tuixCode) && set.add(f.tuixCode))(new Set()))

					requireTuixL.map((requireEle) => {
						if (requireEle.tuixCode === 'AX0001' && this.selectedInfo.option.optionTuix.findIndex((el) => el.tuixOptionCode === 'AX0001') === -1) {
							//옵션 체크(추가)
							const optionItem = this.optionTuixList.find((ele) => ele.tuixOptionCode === requireEle.tuixCode)
							if (optionItem) {
								this.selectedInfo.option.optionTuix.push(optionItem)
								this.selectedInfo.option.optionTuixCodes.push(requireEle.tuixCode)
							}
						}
					})
				} else {
					//옵션 체크 해제(삭제)
					this.selectedInfo.option.optionTuix = this.selectedInfo.option.optionTuix.filter((ele) => ele.tuixOptionCode !== 'AX0001')
					this.selectedInfo.option.optionTuixCodes = this.selectedInfo.option.optionTuixCodes.filter((code) => code !== 'AX0001')
				}
			})
		},

		// 옵션선택불가 안내
		fnDisableOption(item) {
			this.alert = {
				visible: true,
				footer: ['close'],
				message: `<span style="font-weight: bold">${item.choiceOptionName}</span> 옵션은<br /> 
          <span style="font-weight: bold">${this.selectedInfo.interiorinteriorColorName}</span> 색상을 선택한 경우에는 선택이 불가능한 옵션입니다.`,
				callback: () => {
					this.alert.visible = false
				},
				cancel: () => {
					this.alert.visible = false
				}
			}
		},

		// 옵션 추가/삭제 할 옵션이 있는 지 조회(상품021)
		async fnGetAddDelOption(item, type) {
			//삭제되는 TUIX있는지 조회
			const tuixArr = await this.fnGetTuixCheck({
				codes: this.selectedInfo.option.optionChoiceCodes
			})

			let optionFilterList = this.optionChoiceList
				.filter(
					(ele) =>
						ele.choiceOptionCode === 'CA1' ||
						ele.choiceOptionCode === 'CA2' ||
						ele.choiceOptionCode === 'CAP' ||
						ele.choiceOptionCode === 'AWP' ||
						ele.choiceOptionCode === 'AWB'
				)
				.map((ele) => ({
					optionCode: ele.choiceOptionCode,
					optionPrice: ele.choiceOptionPrice,
					optionName: ele.choiceOptionName,
					mobileImageFilePath: ele.mobileOptionImgPath,
					pcImageFilePath: ele.optionImgPath
				}))

			// 액티브 플러스 옵션은 강제로 팝업 호출
			if (item.choiceOptionCode === 'CAP') {
				this.carOptionCode = item.choiceOptionCode
				this.addOption = optionFilterList.filter((ele) => ele.optionCode === 'CA2' || ele.optionCode === 'CAP')
				this.isPopup.partsAddInfo = true
			} else if (item.choiceOptionCode === 'AWB') {
				this.carOptionCode = item.choiceOptionCode
				if (this.selectedInfo.option.optionChoiceCodes.findIndex((ele) => ele === 'AWP') > -1) {
					this.addDelOption = {
						carAddOptionList: optionFilterList.filter((ele) => ele.optionCode === 'CA1' || ele.optionCode === 'AWB'),
						carDelOptionList: optionFilterList.filter((ele) => ele.optionCode === 'AWP')
					}
					this.isPopup.partsDelInfo = true
				} else {
					this.addOption = optionFilterList.filter((ele) => ele.optionCode === 'CA1' || ele.optionCode === 'AWB')
					this.isPopup.partsAddInfo = true
				}
			} else if (item.choiceOptionCode === 'AWP') {
				this.carOptionCode = item.choiceOptionCode
				this.addDelOption = {
					carAddOptionList: optionFilterList.filter((ele) => ele.optionCode === 'AWP'),
					carDelOptionList: optionFilterList.filter((ele) => ele.optionCode === 'CA1')
				}
				if (this.selectedInfo.option.optionChoiceCodes.findIndex((ele) => ele === 'AWB') > -1) {
					this.addDelOption.carDelOptionList.push(optionFilterList.find((ele) => ele.optionCode === 'AWB'))
				}
				this.isPopup.partsDelInfo = true
			} else if (item.choiceOptionCode === 'CA1') {
				this.carOptionCode = item.choiceOptionCode
				this.addDelOption = {
					carAddOptionList: optionFilterList.filter((ele) => ele.optionCode === 'CA1'),
					carDelOptionList: optionFilterList.filter((ele) => ele.optionCode === 'AWP')
				}
				this.isPopup.partsDelInfo = true
			} else {
				await this.getOptionDel({
					saleModelCode: this.realSaleModelCode,
					afterOption: item.choiceOptionCode,
					beforOption: this.selectedInfo.option.optionChoiceCodes.length > 0 ? this.selectedInfo.option.optionChoiceCodes.join(',') : ''
				}).then((data) => {
					if (data && Object.keys(data).length > 0) {
						if (data.carDelOptionList || data.carAddOptionList) {
							data.carAddOptionList = data.carAddOptionList.filter((ele) => ele.optionCode !== 'CA1' && ele.optionCode !== 'CA2')

							// 옵션 추가/삭제 팝업 띄우기
							if (!data.carDelOptionList && data.carAddOptionList) {
								this.carOptionCode = item.choiceOptionCode
								this.addOption = data.carAddOptionList
								this.isPopup.partsAddInfo = true
								return true
							} else {
								data.delTuixOptionList = tuixArr
								this.carOptionCode = item.choiceOptionCode
								this.addDelOption = data
								this.isPopup.partsDelInfo = true
								return true
							}
						}
					} else if (tuixArr.length > 0) {
						// TUIX 해제 되는 품목 팝업
						this.isPopup.partsDelTuixInfo = true
						this.setOptionInfo = item
						this.addDelOption.delTuixOptionList = tuixArr
						return true
					}
				})
			}
		},

		// TUIX 선택 시 다른 TUIX옵션 비활성화 처리
		fnDisableTuixOption(code) {
			// API-WH-상품서비스-077 (Tuix 선택 시 Tuix 비활성화 목록)
			if (this.selectedInfo.option.optionTuixCodes.length > 0) {
				this.getDisableTuix({
					saleModelCode: this.realSaleModelCode,
					tuixCode: this.selectedInfo.option.optionTuixCodes.join(',')
				}).then((data) => {
					// TUIX 전체 활성화 처리
					this.optionTuixList.map((ele) => {
						ele.alert = 'Y'
						return ele
					})

					// 비활성화 처리
					if (data && data.length > 0) {
						this.optionTuixList.map((ele) => {
							data.forEach((dEle) => {
								if (ele.tuixOptionCode === dEle.tuixCode) {
									ele.alert = 'N'
								}
							})
							return ele
						})
					}
				})
			} else {
				this.optionTuixList.map((ele) => {
					ele.unityChoiceYn === 'N' ? (ele.alert = 'N') : (ele.alert = 'Y')
				})
			}
		},

		// TUIX 옵션 리스트 재조회(상품019)
		fnGetTuixOptions(delTuixList, item) {
			this.isPopup.partsDelTuixInfo = false

			const codes = []
			if (item && item.choiceOptionCode) {
				this.selectedInfo.option.optionChoiceCodes.map((ele) => {
					if (ele !== item.choiceOptionCode) {
						codes.push(ele)
					}
				})
				const existIdx = this.fnExistOption(item.choiceOptionCode, 'choice')
				if (existIdx < 0) {
					if (item.choiceOptionCode) codes.push(item.choiceOptionCode)
				}
			} else {
				this.selectedInfo.option.optionChoiceCodes.map((ele) => {
					codes.push(ele)
				})
				if (item && item.choiceOptionCode) codes.push(item.choiceOptionCode)
			}

			this.getOptionsTuix({
				saleModelCode: this.realSaleModelCode,
				saleSpecCode: this.selectedInfo.option.saleSpecCode,
				optionCode: codes.length > 0 ? codes.join(',') : '',
				exteriorColorCode: item && item.exColor ? item.exColor : this.selectedInfo.exterior.exteriorColorCode,
				interiorColorCode: item && item.inColor ? item.inColor : this.selectedInfo.interior.interiorColorCode
			}).then((data) => {
				if (data) {
					const newOptionTuixList = data

					// API-WH-상품서비스-088 (옵션선택시 필수선택 tuix 조회)
					this.getTuixRequiredChoice({
						saleModelCode: this.realSaleModelCode,
						optionCode: this.selectedInfo.option.optionChoiceCodes.length ? this.selectedInfo.option.optionChoiceCodes.join(',') : '',
						saleSpecCode: this.selectedInfo.option.saleSpecCode
					})
						.then((requiredData) => {
							if (requiredData && requiredData.length > 0) {
								const nowTuixL = this.selectedInfo.option.optionTuix

								// duplicate field remove
								const requireTuixL = requiredData.filter(((set) => (f) => !set.has(f.tuixCode) && set.add(f.tuixCode))(new Set()))

								requireTuixL.map((requireEle) => {
									const nowIdx = nowTuixL.findIndex((nowEle) => nowEle.tuixOptionCode === requireEle.tuixCode)
									if (nowIdx > -1) {
										requireEle.selectedYn = 'Y'
									} else {
										requireEle.selectedYn = 'N'
										this.fnSetSelectedOption(requireEle.tuixCode, 'tuix')
									}
								})
							}

							// 리스트 재 조회하면서 리스트에 없는 이미 선택된 TUIX를 삭제한다
							if (delTuixList) {
								delTuixList.forEach((tuixEle) => {
									this.fnSetSelectedOption(tuixEle.tuixOptionCode, 'tuix')
								})
							}

							//색상 선택 한 후 TUIX 조회한 경우 색상 셋팅
							if (item && item.exColor) {
								const colorItem = this.exteriorColor.find((ele) => ele.exteriorColorCode === item.exColor)

								this.fnCheckExColor(colorItem.exteriorColorCode, this.selectedInfo.interior.interiorColorCode)
							}

							if (item && item.inColor) {
								const colorItem = this.interiorColor.find((ele) => ele.interiorColorCode === item.inColor)

								this.fnCheckInColor(colorItem.interiorColorCode, this.selectedInfo.exterior.exteriorColorCode)
							}

							if (item && item.choiceOptionCode) {
								// 선택한 선택옵션 추가
								this.fnSetSelectedOption(item.choiceOptionCode, 'choice')
							}
						})
						.finally(() => {
							// 선택되어있던 tuixList 항목들이 재조회된 tuixList에 없을 경우 비활성화 처리
							const selTuixList = this.selectedInfo.option.optionTuix

							selTuixList.map((items) => {
								const findTuixIdx = newOptionTuixList.findIndex((items2) => {
									return items2.tuixOptionCode === items.tuixOptionCode
								})

								if (findTuixIdx === -1) {
									this.fnSetSelectedOption(items.tuixOptionCode, 'tuix')
								}
							})

							//비활성화 되는 TUIX
							// API-WH-상품서비스-077 (Tuix 선택 시 Tuix 비활성화 목록)
							if (this.selectedInfo.option.optionTuixCodes.length > 0) {
								this.getDisableTuix({
									saleModelCode: this.realSaleModelCode,
									tuixCode: this.selectedInfo.option.optionTuixCodes.join(',')
								})
									.then((data) => {
										// TUIX 전체 활성화 처리
										newOptionTuixList.map((ele) => {
											ele.alert = 'Y'
											return ele
										})

										// 비활성화 처리
										if (data && data.length > 0) {
											newOptionTuixList.map((ele) => {
												data.forEach((dEle) => {
													if (ele.tuixOptionCode === dEle.tuixCode) {
														ele.alert = 'N'
													}
												})
												return ele
											})
										}

										this.optionTuixList = newOptionTuixList
									})
									.catch((e) => {
										this.optionTuixList = newOptionTuixList
									})
							} else {
								newOptionTuixList.map((ele) => {
									ele.unityChoiceYn === 'N' ? (ele.alert = 'N') : (ele.alert = 'Y')
								})

								this.optionTuixList = newOptionTuixList
							}
						})
				}
			})
		},

		// 이미 선택된 옵션인지 체크
		fnExistOption(code, type) {
			if (type === 'tuix') {
				return this.selectedInfo.option.optionTuix.findIndex((ele) => ele.tuixOptionCode === code)
			} else if (type === 'choice') {
				return this.selectedInfo.option.optionChoice.findIndex((ele) => ele.choiceOptionCode === code)
			}
		},

		// 삭제되는 TUIX 옵션이 있는지 체크(상품080)
		async fnGetTuixCheck(item) {
			let tuixArr = []
			let codes = []

			item.codes && item.codes.forEach((ele) => codes.push(ele))

			// API-WH-상품서비스-080 (옵션/색상 선택 시 삭제되는 TUIX 리스트)
			await this.getTuixCheck({
				saleModelCode: this.realSaleModelCode,
				saleSpecCode: this.selectedInfo.option.saleSpecCode,
				optionCode: codes ? codes.join(',') : '',
				exteriorColorCode: item.exColor ? item.exColor : this.selectedInfo.exterior.exteriorColorCode,
				interiorColorCode: item.inColor ? item.inColor : this.selectedInfo.interior.interiorColorCode,
				tuixCode: this.selectedInfo.option.optionTuixCodes.length ? this.selectedInfo.option.optionTuixCodes.join(',') : ''
			}).then((data) => {
				if (data && data.length) {
					tuixArr = data
				}
			})

			return tuixArr
		},

		onAddOption(code, typeCode) {
			// 옵션 상세 팝업에서 '추가하기' 버튼 선택 시
			// 이미 선택되어 있는 옵션이면 선택 유지
			this.isPopupSpec = false
			if (typeCode === 'O') {
				if (this.selectedInfo.option.optionChoice.findIndex((ele) => ele.choiceOptionCode === code) !== -1) {
					if(code === 'CAP') this.isPopup.dummyActivePlusInfo = true
					return
				}
				const item = this.optionChoiceList.find((option) => option.choiceOptionCode === code)

				this.fnCheckOption(item, 'choice', false)
			} else if (typeCode === 'T') {
				if (this.selectedInfo.option.optionTuix.findIndex((ele) => ele.tuixOptionCode === code) !== -1) return
				const item = this.optionTuixList.find((option) => option.tuixOptionCode === code)

				this.fnCheckOption(item, 'tuix')
			}
		},

		onAddOption2(obj) {
			// 옵션 추가 팝업에서 '추가하기' 버튼 선택 시
			this.isPopup.partsAddInfo = false
			this.isPopup.partsDelInfo = false
			this.isPopup.activePlusInfo = false

			obj.carAddOptionList.forEach((ele) => {
				if (this.selectedInfo.option.optionChoice.findIndex((selectEle) => selectEle.choiceOptionCode === ele.optionCode) === -1) {
					this.fnSetSelectedOption(ele.optionCode, 'choice')
				}
			})

			if (obj.carDelOptionList.length > 0) {
				obj.carDelOptionList.forEach((ele) => {
					this.fnSetSelectedOption(ele.optionCode, 'choice')
				})
			}
			// 다른 옵션 비활성화/활성화 처리
			this.fnDisableChoiceOption()

			if (obj.delTuixOptionList && obj.delTuixOptionList.length > 0) {
				this.fnGetTuixOptions(obj.delTuixOptionList)
			}

			this.isPopup.partsAddInfoTmp = {}
			this.setConfigurator()
		},

		onAddOption3() {
			// 옵션 추가 팝업에서 '추가하기' 버튼 선택 시
			this.isPopup.activePlusInfo = false

			let optItem = this.optionChoiceList.find((ele) => ele.choiceOptionCode === 'CAP')
			this.fnCheckOption(optItem, 'choice', true)
		},

		async onChangeTrimWithOption(exteriorClr, interiorClr, addCodeArr, delCodeArr) {
			let codeArr = this.selectedInfo.option.optionChoiceCodes.filter((ele) => delCodeArr.findIndex((el) => el === ele) === -1)
			codeArr = [...codeArr, ...addCodeArr]

			await this.onChangeTrim(exteriorClr, interiorClr)

			let optArr = []
			this.optionChoiceList.some((el) => {
				if (codeArr.findIndex((ele) => ele === el.choiceOptionCode) > -1) {
					el.alert = 'Y'
					optArr.push(el)
				}
			})
			this.selectedInfo.option.optionChoice = optArr
			this.selectedInfo.option.optionChoiceCodes = this.selectedInfo.option.optionChoice.map((ele) => ele.choiceOptionCode)
			this.fnDisableChoiceOption()

			this.setConfigurator()
		},

		async onChangeTrimWithOptArr(codeArr, exteriorClr, interiorClr) {
			this.recommendContract = false
			await this.onChangeTrim(exteriorClr, interiorClr)

			let optArr = []
			this.optionChoiceList.some((el) => {
				if (codeArr.findIndex((ele) => ele === el.choiceOptionCode) > -1) {
					el.alert = 'Y'
					optArr.push(el)
				}
			})
			this.selectedInfo.option.optionChoice = optArr
			this.selectedInfo.option.optionChoiceCodes = this.selectedInfo.option.optionChoice.map((ele) => ele.choiceOptionCode)
			this.fnDisableChoiceOption()

			this.setConfigurator()
		},

		onSetOptions(codeArr) {
			if (this.selectedInfo.option.optionChoiceCodes.length > 0) {
				this.alert = {
					visible: true,
					footer: ['cancel', 'confirm'],
					message: '이미 선택한 옵션 해제 후 해당 옵션으로 변경됩니다.<br/>변경 하시겠습니까?',
					callback: () => {
						let optArr = []
						this.optionChoiceList.some((el) => {
							if (codeArr.findIndex((ele) => ele === el.choiceOptionCode) > -1) {
								el.alert = 'Y'
								optArr.push(el)
							}
						})
						this.selectedInfo.option.optionChoice = optArr
						this.selectedInfo.option.optionChoiceCodes = this.selectedInfo.option.optionChoice.map((ele) => ele.choiceOptionCode)
						this.fnDisableChoiceOption()
						this.isPopup.recommendOption = false
						this.alert.visible = false
					},
					cancel: () => {
						this.alert.visible = false
					}
				}
			} else {
				let optArr = []
				this.optionChoiceList.some((el) => {
					if (codeArr.findIndex((ele) => ele === el.choiceOptionCode) > -1) {
						el.alert = 'Y'
						optArr.push(el)
					}
				})
				this.selectedInfo.option.optionChoice = optArr
				this.selectedInfo.option.optionChoiceCodes = this.selectedInfo.option.optionChoice.map((ele) => ele.choiceOptionCode)
				this.fnDisableChoiceOption()
				this.isPopup.recommendOption = false
			}
		},

		async fnCarAmountCheck(val) {
			if (this.isCorp && !this.$route.query.preCarFlag) {
				await this.getContractPosibleChk({ contractCount: val, personalCorporationCode: 3 })

				if (Number(this.contractPossibleChk.collectivelyCount) < Number(val)) {
					this.alert = {
						visible: true,
						footer: ['close'],
						message: '최대 구매 가능 수량은 ' + Number(this.contractPossibleChk.collectivelyCount).toLocaleString() + '대 입니다.',
						callback: () => {
							this.alert.visible = false
						},
						cancel: () => {
							this.alert.visible = false
						}
					}

					this.selectedInfo.carAmount = Number(this.contractPossibleChk.collectivelyCount)
				}
			}
		},

		async fnCarInfoChangePopup() {
			if (this.$route.params.carInfoChangeYn && this.$route.params.carInfoChangeYn === 'Y') {
				let optionMixCode, tuixOptionCode

				await this.getOptionMixInfo({
					saleModelCode: this.realSaleModelCode,
					optionCode: this.selectedInfo.option.optionChoiceCodes.length ? this.selectedInfo.option.optionChoiceCodes.join(',') : '',
					saleSpecCode: this.selectedInfo.option.saleSpecCode
				}).then((data) => {
					optionMixCode = data.optionMixCode
				})

				if (this.selectedInfo.option.optionTuixCodes.length > 0) {
					await this.getTuixInfo({
						saleModelCode: this.realSaleModelCode,
						tuixCode: this.selectedInfo.option.optionTuixCodes.length > 0 ? this.selectedInfo.option.optionTuixCodes.join(',') : '',
						saleSpecCode: this.selectedInfo.option.saleSpecCode
					}).then((data) => {
						if (data) tuixOptionCode = data.tuixMixCode
					})
				}

				if (
					this.tmpSelectedInfo.saleModelCode === this.realSaleModelCode &&
					this.tmpSelectedInfo.exteriorColorCode === this.selectedInfo.exterior.exteriorColorCode &&
					this.tmpSelectedInfo.interiorColorCode === this.selectedInfo.interior.interiorColorCode &&
					this.tmpSelectedInfo.optionMixCode === optionMixCode &&
					(this.tmpSelectedInfo.tuixOptionCode ? this.tmpSelectedInfo.tuixOptionCode : '') === (tuixOptionCode ? tuixOptionCode : '')
				) {
					this.alert = {
						visible: true,
						footer: ['close'],
						message: '변경 내용이 없습니다. 구매 상세로 바로 이동합니다.',
						callback: () => {
							this.onMoveMypage(true)
							this.alert.visible = false
						},
						cancel: () => {
							this.onMoveMypage(true)
							this.alert.visible = false
						}
					}
					return
				}

				//출고예정일 조회
				await this.getContractCarStatus({
					contractCarTypeCode: this.carDeliveryChangeInfo.estimationCarTypeCode, //계약차량유형코드 : 10 일반재고 20 할인재고 30 전시재고 40 판촉재고 50 생산주문 60 신차사전예약
					deliveryCenterCode:
						this.carDeliveryChangeInfo.estimationCarTypeCode === '10' ||
						this.carDeliveryChangeInfo.estimationCarTypeCode === '20' ||
						this.carDeliveryChangeInfo.estimationCarTypeCode === '40'
							? this.carDeliveryChangeInfo.deliveryCenterCode || ''
							: '', //일반재고, 조건재고(전시재고 제외 - 직접인수)의 경우 출고센터 고정
					saleModelCode: this.realSaleModelCode,
					optionMixCode: optionMixCode || '',
					tuixOptionCode: tuixOptionCode || '',
					exteriorColorCode: this.selectedInfo.exterior.exteriorColorCode,
					interiorColorCode: this.selectedInfo.interior.interiorColorCode,
					branchCode: '',
					BranchName: '',
					branchAddress: '',
					deliveryLocalAreaCode: this.carDeliveryChangeInfo.deliveryLocalAreaCode || '',
					productionCarNumber: this.carDeliveryChangeInfo.estimationCarTypeCode === '40' ? this.carDeliveryChangeInfo.carProductionNumber || '' : '',
					contractNumber: '',
					fixDeliveryCenterCode: ''
				}).then((statusData) => {
					this.carDeliveryChangeInfo.afterDeliveryDate = statusData.anticipationPromiseDateText
					this.carDeliveryChangeInfo.afterCarTotalPrice = Number(this.carTotalPrice).toLocaleString()
				})

				this.carChangeInfo = {
					carCode: this.selectedInfo.carCode,
					carPrice: this.selectedInfo.carPrice,
					saleModelCode: this.realSaleModelCode,
					optionMixCode: optionMixCode || '',
					tuixOptionCode: tuixOptionCode || '',
					interiorColorCode: this.selectedInfo.interior.interiorColorCode,
					interiorColorPrice: this.selectedInfo.interior.interiorColorPrice,
					exteriorColorCode: this.selectedInfo.exterior.exteriorColorCode,
					exteriorColorPrice: this.selectedInfo.exterior.exteriorColorPrice,
					realityInteriorColorCode: this.selectedInfo.interior.realityInteriorColorCode || '',
					estimationCarTypeCode: this.carDeliveryChangeInfo.estimationCarTypeCode, //견적차량유형코드 : 10 일반재고 20 할인재고 30 전시재고 40 판촉재고 50 생산주문
					carAmount: this.selectedInfo.carAmount
				}

				// if (
				// 	this.carDeliveryChangeInfo.beforeDeliveryDate === this.carDeliveryChangeInfo.afterDeliveryDate &&
				// 	this.carDeliveryChangeInfo.beforeCarTotalPrice === this.carDeliveryChangeInfo.afterCarTotalPrice
				// ) {
				// 	this.alert = {
				// 		visible: true,
				// 		footer: ['cancel', 'confirm'],
				// 		message: '차량정보를 변경하시겠습니까?',
				// 		callback: () => {
				// 			this.alert.visible = false
				// 			this.fnMoveDonePage()
				// 		},
				// 		cancel: () => {
				// 			this.alert.visible = false
				// 		}
				// 	}
				// } else {
				// 	this.isPopup.vehicleChangeInfo = true
				// }

				// EP_IF_국내판매_075(차량별 하이패스 장착 여부)
				const params = {
					OPT: '5',
					SALE_MDL_CD: this.realSaleModelCode,
					PRDN_CAR_NO: this.carDeliveryChangeInfo.carProductionNumber,
					SALE_OPT_CD: optionMixCode
				}
				this.postHighpassEnable(params).then((data) => {
					if (data) this.carDeliveryChangeInfo.afterHighpassEnable = data
				})

				// 차량금액 및 예상출고일 변경에 상관없이 예상출고일 레이어 팝업 노출
				await this.getContractDownPayment({
					saleModelCode: this.realSaleModelCode,
					optionMixCode: optionMixCode,
					exteriorColorCode: this.selectedInfo.exterior.exteriorColorCode,
					interiorColorCode: this.selectedInfo.interior.interiorColorCode
				}).then((data) => {
					if (data && data.specialCarYn == 'Y') this.isPopup.spVehicleChangeInfo = true
					else this.isPopup.vehicleChangeInfo = true
				})
			}
		},

		// 내차만들기 저장 후 상세견적으로 이동
		async fnMoveDonePage() {
			if (!this.selectedInfo.exterior.exteriorColorCode || !this.selectedInfo.interior.interiorColorCode) return

			if (this.isCorp && !this.$route.query.preCarFlag) {
				await this.getContractPosibleChk({ contractCount: this.selectedInfo.carAmount, personalCorporationCode: 3 })

				if (Number(this.contractPossibleChk.collectivelyCount) < Number(this.selectedInfo.carAmount)) {
					this.alert = {
						visible: true,
						footer: ['close'],
						message: '최대 구매 가능 수량은 ' + Number(this.contractPossibleChk.collectivelyCount).toLocaleString() + '대 입니다.',
						callback: () => {
							this.alert.visible = false
						},
						cancel: () => {
							this.alert.visible = false
						}
					}
					return
				}
			}

			// -------------------------------- 임시저장 전 , tuix 필수선택 확인 부분
			let temporaryStopResonArr = []
			await this.getTuixRequiredChoice({
				saleModelCode: this.realSaleModelCode,
				optionCode: this.selectedInfo.option.optionChoiceCodes.length ? this.selectedInfo.option.optionChoiceCodes.join(',') : '',
				saleSpecCode: this.selectedInfo.option.saleSpecCode
			}).then((data) => {
				if (data && data.length > 0) {
					const nowTuixL = this.selectedInfo.option.optionTuix
					const requireTuixL = data

					requireTuixL.map((requireEle) => {
						const nowIdx = nowTuixL.findIndex((nowEle) => nowEle.tuixOptionCode === requireEle.tuixCode)
						if (nowIdx > -1) {
							requireEle.selectedYn = 'Y'
						} else {
							requireEle.selectedYn = 'N'
						}
					})

					const needTuixNameL = []
					requireTuixL.forEach((finEle) => {
						if (finEle.selectedYn === 'N') {
							needTuixNameL.push(finEle.tuixName)
						}
					})
					if (needTuixNameL && needTuixNameL.length > 0) {
						const resonObj = {
							type: 'getTuixRequiredChoice',
							tuixNames: needTuixNameL.length > 0 ? needTuixNameL.join(',') : ''
						}
						temporaryStopResonArr.push(resonObj)
					}
				}
			})

			await this.getTuixChoiceCheck({
				saleModelCode: this.realSaleModelCode,
				optionCode: this.selectedInfo.option.optionChoiceCodes.length ? this.selectedInfo.option.optionChoiceCodes.join(',') : '',
				tuixCode: this.selectedInfo.option.optionTuixCodes.length > 0 ? this.selectedInfo.option.optionTuixCodes.join(',') : '',
				exteriorColorCode: this.selectedInfo.exterior.exteriorColorCode,
				interiorColorCode: this.selectedInfo.interior.interiorColorCode,
				saleSpecCode: this.selectedInfo.option.saleSpecCode
			}).then((data) => {
				if (data && data.tuixSaveYn !== 'Y') {
					const resonObj = {
						type: 'getTuixCheck',
						tuixNames: ''
					}
					temporaryStopResonArr.push(resonObj)
				}
			})

			if (temporaryStopResonArr.length > 0) {
				const idx = temporaryStopResonArr.findIndex((ele) => ele.type === 'getTuixCheck')
				const requireObj = temporaryStopResonArr.find((ele) => ele.type === 'getTuixRequiredChoice')
				let msg = ''
				if (requireObj && requireObj.tuixNames) {
					msg = '해당 모델은 ' + requireObj.tuixNames + ' 필수입니다.<br />H Genuine Accessories 옵션 체크 후 저장해주세요.'
				} else if (idx > -1) {
					msg = '해당 모델은 H Genuine Accessories 옵션 필수입니다.<br />H Genuine Accessories 옵션 체크 후 저장해주세요.'
				}
				this.alert = {
					visible: true,
					footer: ['close'],
					message: msg,
					callback: () => {
						this.alert.visible = false
					},
					cancel: () => {
						this.alert.visible = false
					}
				}
				return
			}
			console.log('[making]this.carInfo.estimationUrl :>> ', this.$route.query.estimationUrl)

			if (this.$route.params.carInfoChangeYn && this.$route.params.carInfoChangeYn === 'Y') {
				this.alert = {
					visible: true,
					footer: ['confirm'],
					message: '차량정보가 변경되었습니다. 구매 상세로 이동합니다.',
					callback: () => {
						// 마이페이지 화면으로 이동
						this.onMoveMypage()
						this.alert.visible = false
					},
					cancel: () => {
						this.alert.visible = false
					}
				}
			} else {
				// 임시 저장 API-H-견적서비스-001 (내차만들기 임시저장)
				this.postTemporaryStorage({
					carCode: this.selectedInfo.carCode,
					carPrice: this.selectedInfo.carPrice,
					saleModelCode: this.realSaleModelCode,
					// saleSpecCode: this.selectedInfo.option.saleSpecCode,
					optionMixCode: this.selectedInfo.option.optionChoiceCodes.length ? this.selectedInfo.option.optionChoiceCodes.join(',') : '',
					tuixOptionCode: this.selectedInfo.option.optionTuixCodes.length > 0 ? this.selectedInfo.option.optionTuixCodes.join(',') : '',
					interiorColorCode: this.selectedInfo.interior.interiorColorCode,
					interiorColorPrice: this.selectedInfo.interior.interiorColorPrice,
					exteriorColorCode: this.selectedInfo.exterior.exteriorColorCode,
					exteriorColorPrice: this.selectedInfo.exterior.exteriorColorPrice,
					realityInteriorColorCode: this.selectedInfo.interior.realityInteriorColorCode || '',
					estimationUrl:
						this.$route.params.reEntry || (this.$route.params.carInfoChangeYn && this.$route.params.carInfoChangeYn === 'Y') || this.$route.query.preCarFlag
							? this.$route.query.estimationUrl || ''
							: '',
					// estimationCarTypeCode: this.$route.query.preCarFlag ? '60' : '50', //견적차량유형코드 : 10 일반재고 20 할인재고 30 전시재고 40 판촉재고 50 생산주문
					estimationCarTypeCode: '50', //견적차량유형코드 : 10 일반재고 20 할인재고 30 전시재고 40 판촉재고 50 생산주문
					carAmount: this.$route.query.preCarFlag ? this.$route.query.carAmount : this.selectedInfo.carAmount,
					contractFlag:
						this.$route.params.contractNumber ||
						(this.$route.params.carInfoChangeYn && this.$route.params.carInfoChangeYn === 'Y') ||
						this.$route.query.preCarFlag
							? 'Y'
							: 'N'
				}).then((data) => {
					if (data) {
						// 최근 본 차 쿠키 저장
						this.putLateViewList({
							carProductionNumber: '',
							saleModelCode: this.realSaleModelCode,
							optionMixCode: data.optionMixCode ? data.optionMixCode : '',
							exteriorColorCode: this.selectedInfo.exterior.exteriorColorCode,
							interiorColorCode: this.selectedInfo.interior.interiorColorCode,
							deliveryCenterCode: '',
							estimationNumber: atob(data.estimationUrl),
							tuixOptionCode: data.tuixOptionCode ? data.tuixOptionCode : '',
							totalPrice: this.carTotalPrice,
							linkType: 'M'
						})

						// 지인 추천 시 쿠키값 세팅
						if (this.friendRecommendType === 'recom') {
							Cookie.set('recommenderCode', this.$route.query.recommenderCode)
						}

						if (this.$route.params.contractNumber) {
							this.alert = {
								visible: true,
								footer: ['confirm'],
								message: '차량 정보가 수정되었습니다.',
								callback: () => {
									// 내차만들기완료 화면으로 이동
									this.onMoveEstimation(data.estimationUrl)
									this.alert.visible = false
								},
								cancel: () => {
									this.alert.visible = false
								}
							}
						} else {
							// 내차만들기완료 화면으로 이동
							this.onMoveEstimation(data.estimationUrl)
						}
					}
				})
			}
		},

		onMoveEstimation(estimationUrl, isExit) {
			const link = {
				name: 'estimation',
				query: {
					estimationUrl: estimationUrl,
					purposeCode: this.selectedInfo.purposeCode
				},
				params: {
					//옵션 변경하지 않고 종료시에는 금액변동팝업이 안뜨도록 reEntry false처리
					reEntry: isExit ? false : this.$route.params.reEntry
				}
			}

			if (this.$route.query.preCarFlag) {
				link.query.preCarFlag = true
				link.params.contractNumber = this.$route.params.contractNumber
			}
			this.$router.push({ ...link })
		},

		onMoveMypage(flag) {
			let link = {
				name: 'mypage-purchase-contract-detail',
				params: {
					contractNumber: this.$route.params.contractNumber,
					carInfoChangeYn: 'Y',
					carChangeInfo: this.carChangeInfo
				}
			}

			if (flag) {
				link = {
					name: 'mypage-purchase-contract-detail',
					params: { contractNumber: this.$route.params.contractNumber }
				}
			}

			this.$router.push({ ...link })
		},

		fnCarSpecDetail(carCode, specName) {
			this.isPopup.repnCarCode = carCode
			this.isPopup.specName = specName
			this.isPopup.carInfoChangeGuide = true
		},
		onNetFunnel(action_id) {
			const $axiosHtml = axios.create({ baseURL: (process.env.NODE_ENV === 'development' ? 'http://localhost:3013' : '') + process.env.BASE_PATH })
			$axiosHtml.get(`/model-markup/netFunnel/netFunnel.html`).then((res) => {
				window.NetFunnel.SkinUtil.add('block', { htmlStr: res.data }, 'normal')
				window.NetFunnel_Action(
					{ action_id },
					{
						success: '',
						block: function(ev, ret) {
							window.NetFunnel.PopupSetup('continue', ret, 'block')
						}
					}
				)
			})
		}
	}
}
</script>
