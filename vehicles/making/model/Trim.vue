<template>
	<div class="option-box">
		<div class="box-header">
			<b class="tit">트림</b>
		</div>
		<div class="box-body">
			<v-radio
				v-if="carTrimList.length > 0"
				v-model="selectedInfo.saleModelCode"
				class="radio-line-button t-bewteen"
				type="button"
				:custom-label="true"
				:data="carTrimList"
				value-key="saleModelCode"
				label-key="carTrimName"
				@change="
					selectedInfo.recommendCheck = false
					$emit('onChangeTrim')
				"
			>
				<template slot-scope="props">
					<span class="name">
						<span class="txt">{{ props.item.carTrimName }}</span>
						<v-btn type="icon" class="info-btn" icon-class="icon-info" @click="fnPopTrimDetail(props.item)"></v-btn>
					</span>
					<span class="price">
						<span class="price">
							<b>{{ props.item.carModelPrice | amount }}</b>
							원
						</span>
					</span>
				</template>
			</v-radio>
			<div v-if="filterQuery.carBodyCode !== 'V'" class="opt-more">
				<v-btn type="button" class="more btn-more" @click="isPopup.compareSelect = true"><span>트림의 주요 특징을 비교해보세요.</span></v-btn>
			</div>
		</div>

		<!-- 항목보기 팝업 -->
		<TrimDetail
			:pop-visible="isPopup"
			:car-info="carInfo"
			:option-basic-title="trimOptBasicTitle"
			:add-btn="selectedInfo.saleModelCode === carInfo.saleModelCode.substring(0, 5) + 'G' + carInfo.saleModelCode.substring(6, 9) ? true : false"
			@addOption="fnAddOption"
		/>
		<!-- 비교하기 팝업 -->
		<CompareSelect :pop-visible="isPopup" :car-trim-list="carTrimList" @applyTrim="fnApplyTrim" />
		<!-- 엔진가이드 팝업 -->
		<EngineChoiceGuide :pop-visible="isPopup" />
	</div>
</template>

<script>
import CompareSelect from '~/components/page/vehicles/comparison/popup/CompareSelect'
import { TrimDetail, EngineChoiceGuide } from '~/components/page/vehicles/making/popup'
import { mapActions } from 'vuex'
export default {
	components: {
		CompareSelect,
		TrimDetail,
		EngineChoiceGuide
	},
	props: {
		carTrimList: {
			type: Array,
			default: () => [{}]
		},
		selectedInfo: {
			type: Object,
			default: () => {}
		},
		filterQuery: {
			type: Object,
			default: () => {}
		}
	},

	data() {
		return {
			isPopup: {
				detail: false, //항목보기 팝업
				detailLoading: false, //항목보기 팝업 로딩 여부
				compareSelect: false, //비교하기 팝업
				engineChoiceGuide: false //엔진가이드 팝업
			},
			trimOptBasicTitle: [], // 항목보기 기본포함품목 타이틀 리스트
			carInfo: {
				saleModelCode: '',
				carTrimName: '',
				basicOption: [],
				choiceOption: [],
				tuixsOption: []
			},
			detailA: false,
			detailB: false
		}
	},

	watch: {
		detailA(val) {
			if (val && this.detailB) {
				this.isPopup.detailLoading = true
				this.detailA = false
				this.detailB = false
			}
		},
		detailB(val) {
			if (val && this.detailA) {
				this.isPopup.detailLoading = true
				this.detailA = false
				this.detailB = false
			}
		}
	},

	methods: {
		...mapActions({
			getCarMakingInfo: 'estimate/getCarMakingInfo' // 판매모델별 상품정보 조회, 연령별 외장 색상 추천 조회
		}),

		fnApplyTrim(saleModelCode) {
			this.selectedInfo.saleModelCode = saleModelCode
			this.$emit('onChangeTrim')
		},

		// 트림 항목보기 팝업 호출
		fnPopTrimDetail(item) {
			this.carInfo = {
				saleModelCode: '',
				carTrimName: '',
				basicOption: [],
				choiceOption: [],
				tuixsOption: []
			}
			// 터보 옵션 선택 여부에 따라 판매모델코드 변경
			// let turboYn =
			// 	this.selectedInfo.saleModelCode === item.saleModelCode.substring(0, 5) + 'G' + item.saleModelCode.substring(6, 9) &&
			// 	this.selectedInfo.option.optionChoiceCodes.findIndex((ele) => ele === 'CA1' || ele === 'CA2') > -1
			// 		? true
			// 		: false

			// 판매모델별 차량 상세 조회, 연령별 외장 색상 추천 조회
			this.getCarMakingInfo({
				carCode: this.selectedInfo.carCode,
				saleModelCode: item.saleModelCode.substring(0, 5) + 'G' + item.saleModelCode.substring(6, 9),
				estimationUrl: '',
				interiorColorCode: '',
				exteriorColorCode: '',
				siteTypeCode: 'W',
				noCommit: true //store commit 방지
			}).then((data) => {
				this.trimOptBasicTitle = data.optionBasicTitle
				// if (!turboYn) {
				this.carInfo.saleModelCode = item.saleModelCode.substring(0, 5) + 'G' + item.saleModelCode.substring(6, 9)
				this.carInfo.carTrimName = item.carTrimName
				this.carInfo.basicOption = data.option.optionBasic.reduce((acc, ele) => {
					ele.carOptions.some((el) => {
						acc.push({
							basicOptionCategoryCode: ele.basicOptionCategoryCode,
							...el
						})
					})
					return acc
				}, [])
				this.carInfo.tuixsOption = data.option.optionTuix.filter((ele) => ele.tuixOptionCode !== 'AX0001')
				// }
				let turboOpt = this.carInfo.choiceOption.find((ele) => ele.choiceOptionCode === 'CA1' || ele.choiceOptionCode === 'CA2')
				let plusOpt = this.carInfo.choiceOption.find((ele) => ele.choiceOptionCode === 'AWB' || ele.choiceOptionCode === 'CAP')
				let choiceOption = data.option.optionChoice
				if (turboOpt) this.carInfo.choiceOption = plusOpt ? [turboOpt, ...choiceOption, plusOpt] : [turboOpt, ...choiceOption]
				else this.carInfo.choiceOption = choiceOption

				this.detailA = true
			})

			this.getCarMakingInfo({
				carCode: this.selectedInfo.carCode,
				saleModelCode: item.saleModelCode.substring(0, 5) + 'T' + item.saleModelCode.substring(6, 9),
				estimationUrl: '',
				interiorColorCode: '',
				exteriorColorCode: '',
				siteTypeCode: 'W',
				noCommit: true //store commit 방지
			}).then((data) => {
				// this.trimOptBasicTitle = data.optionBasicTitle
				// if (turboYn) {
				// 	this.carInfo.saleModelCode = item.saleModelCode.substring(0, 5) + 'T' + item.saleModelCode.substring(6, 9)
				// 	this.carInfo.carTrimName = item.carTrimName
				// 	this.carInfo.basicOption = data.option.optionBasic.reduce((acc, ele) => {
				// 		ele.carOptions.some((el) => {
				// 			acc.push({
				// 				basicOptionCategoryCode: ele.basicOptionCategoryCode,
				// 				...el
				// 			})
				// 		})
				// 		return acc
				// 	}, [])
				// 	this.carInfo.tuixsOption = data.option.optionTuix.filter((ele) => ele.tuixOptionCode !== 'AX0001')
				// }
				let turboOpt = data.option.optionChoice.find((ele) => ele.choiceOptionCode === 'CA1' || ele.choiceOptionCode === 'CA2')
				let plusOpt = data.option.optionChoice.find((ele) => ele.choiceOptionCode === 'AWB' || ele.choiceOptionCode === 'CAP')
				if (turboOpt) this.carInfo.choiceOption = plusOpt ? [turboOpt, ...this.carInfo.choiceOption, plusOpt] : [turboOpt, ...this.carInfo.choiceOption]

				// 항목보기 팝업
				this.isPopup.detail = true
				this.detailB = true
			})
		},

		fnAddOption(optCode, type) {
			this.$emit('addOption', optCode, type)
			this.isPopup.detail = false
		}
	}
}
</script>
