<template>
	<div class="etc-option">
		<!-- option -->
		<div v-if="optionChoiceList.length > 0" ref="option1" class="option-box">
			<v-btn v-if="!summaryShow" class="btn-option-open" @click="optExpend('option1')"></v-btn>
			<v-btn class="btn-option-close" @click="optContract('option1')"></v-btn>
			<div class="box-header">
				<b class="tit">선택 품목</b>
				<div v-if="recommendOption.length > 0 && filterQuery.carBodyCode !== 'V'" class="opt-more">
					<v-btn type="button" class="more btn-more" @click="$emit('recommPop')"><span>가장 선호하는 선택 품목 조합을 알아보세요.</span></v-btn>
				</div>
			</div>
			<div class="box-body">
				<div class="car-option-list">
					<ul>
						<template v-for="item in optionChoiceList">
							<li v-if="item.isClassChoiceVisible" :key="item.choiceOptionCode">
								<a
									href="javascript:void(0)"
									role="button"
									type="button"
									class="opt-bx"
									:class="[{ on: optionActiveClass(item) }, { dim: optionDimClass(item) }]"
									@click.prevent="fnCheckOption(item, 'choice')"
								>
									<div class="tit">
										<span>{{ item.choiceOptionName }}</span>
									</div>
									<div class="img">
										<span v-if="item.choiceOptionCode === 'CA1' || item.choiceOptionCode === 'CA2'" class="best">best</span>
										<v-btn class="btn-icon" @click.stop="fnOpenOptionDetail(item, 'choice')">
											<i class="icon-info"></i>
										</v-btn>
										<v-img :src="`${CONT_PATH}${item.optionImgPath}`.replace('/contents/', '/wcontents/')" :alt="item.choiceOptionName"></v-img>
									</div>
									<div class="price">
										<b>+ {{ item.choiceOptionPrice | amount }}</b>
										<span class="unit">원</span>
									</div>
								</a>
							</li>
						</template>
					</ul>
				</div>
			</div>
		</div>
		<!-- H Genuine Accessories -->
		<div v-if="optionTuixListPartT.length > 0" ref="option2" class="option-box" :style="tuixPartTDisplayYn ? 'display: none' : ''">
			<v-btn v-if="!summaryShow" class="btn-option-open" @click="optExpend('option2')"></v-btn>
			<v-btn class="btn-option-close" @click="optContract('option2')"></v-btn>
			<div class="box-header">
				<b class="tit">
					H Genuine Accessories
				</b>
			</div>
			<div class="box-body">
				<div class="car-option-list">
					<ul>
						<li v-for="item in optionTuixListPartT" :key="item.tuixOptionCode">
							<a
								href="javascript:void(0)"
								role="button"
								type="button"
								class="opt-bx"
								:class="[{ on: optionActiveClass(item) }, { dim: optionDimClass(item) }]"
								:style="item.tuixOptionCode === 'AX0001' ? 'display: none' : ''"
								@click.prevent="fnCheckOption(item, 'tuix')"
							>
								<div class="tit">
									<span>{{ item.tuixOptionName }}</span>
								</div>
								<div class="img">
									<v-btn class="btn-icon" @click.stop="fnOpenOptionDetail(item, 'tuix')">
										<i class="icon-info"></i>
									</v-btn>
									<v-img :src="`${CONT_PATH}${item.imgFilePath}`.replace('/contents/', '/wcontents/')" :alt="item.tuixOptionName"></v-img>
								</div>
								<div class="price">
									<b>+ {{ item.tuixOptionPrice | amount }}</b>
									<span class="unit">원</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- N Performance -->
		<div v-if="optionTuixListPartN.length > 0" ref="option3" class="option-box">
			<v-btn v-if="!summaryShow" class="btn-option-open" @click="optExpend('option3')"></v-btn>
			<v-btn class="btn-option-close" @click="optContract('option3')"></v-btn>
			<div class="box-header">
				<b class="tit">N Performance</b>
			</div>
			<div class="box-body">
				<div class="car-option-list">
					<ul>
						<li v-for="item in optionTuixListPartN" :key="item.tuixOptionCode">
							<a
								href="javascript:void(0)"
								role="button"
								type="button"
								class="opt-bx"
								:class="[{ on: optionActiveClass(item) }, { dim: optionDimClass(item) }]"
								@click.prevent="fnCheckOption(item, 'tuix')"
							>
								<div class="tit">
									<span>{{ item.tuixOptionName }}</span>
								</div>
								<div class="img">
									<v-btn class="btn-icon" @click.stop="fnOpenOptionDetail(item, 'tuix')">
										<i class="icon-info"></i>
									</v-btn>
									<v-img :src="`${CONT_PATH}${item.imgFilePath}`.replace('/contents/', '/wcontents/')" :alt="item.tuixOptionName"></v-img>
								</div>
								<div class="price">
									<b>+ {{ item.tuixOptionPrice | amount }}</b>
									<span class="unit">원</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 사양안내팝업 -->
		<PackageGuide
			:pop-visible="isPopup"
			:car-option-code="carOptionCode"
			:car-option-type-code="carOptionTypeCode"
			:sale-model-code="realSaleModelCode"
			:add-btn="true"
			@addOption="onAddOption"
			@close="isPopup.packageGuide = false"
		/>
	</div>
</template>

<script>
import PackageGuide from '~/components/page/vehicles/popup/PackageGuide'
import { mapGetters } from 'vuex'
export default {
	components: {
		PackageGuide
	},
	props: {
		pos: {
			type: Object,
			default: () => {}
		},
		headerHeight: {
			type: Number,
			default: 0
		},
		selectedInfo: {
			type: Object,
			default: () => {}
		},
		filterQuery: {
			type: Object,
			default: () => {}
		},
		optionChoiceList: {
			type: Array,
			default: () => []
		},
		optionTuixListPartT: {
			type: Array,
			default: () => []
		},
		optionTuixListPartN: {
			type: Array,
			default: () => []
		},
		summaryShow: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			position: {},

			isPopup: {
				packageGuide: false
			},
			carOptionCode: '', // 옵션 상세 팝업에 주는 옵션코드
			carOptionTypeCode: '' // 옵션 상세 팝업에 주는 옵션 타입 코드
		}
	},
	computed: {
		...mapGetters({
			recommendOption: 'estimate/recommendOption' // API-WX-상품서비스-079 (옵션 추천 리스트 조회[대고객])
		}),

		// 옵션 선택
		optionActiveClass() {
			return (item) => {
				if (item.choiceOptionCode && this.selectedInfo.option.optionChoice.findIndex((ele) => ele.choiceOptionCode === item.choiceOptionCode) > -1) return true
				if (item.tuixOptionCode && this.selectedInfo.option.optionTuix.findIndex((ele) => ele.tuixOptionCode === item.tuixOptionCode) > -1) return true
				return false
			}
		},
		// 옵션 비활성
		optionDimClass() {
			return (item) => {
				if (item.requiredOptionYn === 'N' || item.alert === 'N') return true
				return false
			}
		},

		realSaleModelCode() {
			return this.carOptionCode === 'CA1' || this.carOptionCode === 'CA2' || this.carOptionCode === 'CAP' || this.carOptionCode === 'AWB'
				? this.selectedInfo.saleModelCode.substring(0, 5) + 'T' + this.selectedInfo.saleModelCode.substring(6, 9)
				: this.carOptionCode === 'AWP'
				? this.selectedInfo.saleModelCode.substring(0, 5) + 'G' + this.selectedInfo.saleModelCode.substring(6, 9)
				: this.selectedInfo.realSaleModelCode
		},

		tuixPartTDisplayYn() {
			return this.optionTuixListPartT.findIndex((ele) => ele.tuixOptionCode === 'AX0001') > -1 && this.optionTuixListPartT.length === 1 ? true : false
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.setPos()
		})
	},
	methods: {
		fnCheckOption(item, type) {
			this.selectedInfo.recommendCheck = false
			this.$emit('fnCheckOption', item, type)
		},

		// 옵션 상세 팝업
		fnOpenOptionDetail(item, type) {
			this.isPopup.packageGuide = true

			if (type === 'classChoice') {
				this.carOptionTypeCode = 'O'
				this.carOptionCode = item.carOptionCode
			}

			if (type === 'basic') {
				this.carOptionTypeCode = 'B'
				this.carOptionCode = item.basicOptionCode
			}

			if (type === 'choice') {
				this.carOptionTypeCode = 'O'
				this.carOptionCode = item.choiceOptionCode
			}

			if (type === 'tuix') {
				this.carOptionTypeCode = 'T'
				this.carOptionCode = item.tuixOptionCode
			}
		},

		onAddOption(code, typeCode) {
			this.$emit('addOption', code, typeCode)
		},

		setPos() {
			if (this.$refs.option1) {
				let rectCollection1 = this.$refs.option1.offsetTop
				this.position.option1Top = rectCollection1
			}
			if (this.$refs.option2) {
				let rectCollection2 = this.$refs.option2.offsetTop
				this.position.option2Top = rectCollection2
			}
			if (this.$refs.option3) {
				let rectCollection3 = this.$refs.option3.offsetTop
				this.position.option3Top = rectCollection3
			}
			this.$emit('update:pos', this.position)
		},
		optExpend(type) {
			this.$emit('expend', true, type, this.setPos)
		},
		optContract(type) {
			this.$emit('contract', false, type, this.setPos)
		}
	}
}
</script>
