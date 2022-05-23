<template>
	<!-- 외장색상 -->
	<div ref="outcolor" class="option-box">
		<div class="box-header">
			<b class="tit">외장 색상</b>
		</div>
		<div class="box-body">
			<div class="optprice">
				<div class="left">
					<span class="name">{{ exterior.exteriorColorName }}</span>
				</div>
				<div class="right">
					<span v-if="exterior.exteriorColorPrice > 0" class="price">
						<b>+ {{ exterior.exteriorColorPrice | amount }}</b>
						원
					</span>
				</div>
			</div>
			<v-radio
				v-if="exteriorColor.length > 0 && exterior && exterior.exteriorColorCode"
				v-model="exteriorColorCode"
				:custom-label="true"
				:data="exteriorColor"
				value-key="exteriorColorCode"
				label-key="exteriorColorName"
				class="out-color-List"
				@change="fnCheckExColor"
			>
				<template slot-scope="props">
					<v-popover trigger="hover" :placement="props.item.index % 5 == 0 || props.item.index % 6 == 0 ? 'top-end' : 'top-start'" style-type="popover-round">
						<p>
							{{ props.item.exteriorColorName }}
						</p>
						<i
							slot="reference"
							class="out-color shiny"
							:style="
								`background-image: url('${CONT_PATH}/wcontents/repn-car/side-45/${selectedInfo.carCode}/exterior/${props.item.exteriorColorCode}/colorchip-exterior.png')`
							"
						>
							<span v-if="props.item.choiceYn === 'N'" class="dim"></span>
						</i>
					</v-popover>
				</template>
			</v-radio>
			<div v-if="isRecommColorShow" class="opt-more">
				<v-btn type="button" class="more btn-more" @click="isPopup.recommendColor = true"><span>가장 인기있는 색상을 확인해보세요.</span></v-btn>
			</div>
		</div>

		<!-- 색상추천정보 -->
		<RecommendColor
			:pop-visible="isPopup"
			:selected-info="selectedInfo"
			:recommend-color-grp="recommendColorGrp"
			@chooseColor="fnCheckExColor"
			@close="isPopup.recommendColor = false"
		/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { RecommendColor } from '~/components/page/vehicles/making/popup'
export default {
	components: {
		RecommendColor
	},
	props: {
		pos: {
			type: Number,
			default: 0
		},
		headerHeight: {
			type: Number,
			default: 0
		},
		exterior: {
			type: Object,
			default: () => ({
				exteriorColorCode: '',
				exteriorColorName: '',
				exteriorColorPrice: 0
			})
		},
		selectedInfo: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			exteriorColorCode: '',
			isPopup: {
				recommendColor: false
			}
		}
	},
	computed: {
		...mapGetters({
			recommendColorGrp: 'estimate/recommendColorGrp', // API-WH-고객정보-007 (연령별 외장색상 추천 정보 조회)
			exteriorColor: 'estimate/exteriorColor' // API-WH-상품서비스-011 (판매모델별 외장색상 리스트 조회)
		}),

		isRecommColorShow() {
			return this.recommendColorGrp && this.recommendColorGrp.length > 0
		}
	},
	watch: {
		'exterior.exteriorColorCode'(val) {
			this.exteriorColorCode = val
		}
	},
	mounted() {
		this.exteriorColorCode = this.exterior.exteriorColorCode
		this.$nextTick(() => {
			let rectCollection = this.$refs.outcolor.offsetTop
			this.$emit('update:pos', rectCollection)
		})
	},
	methods: {
		fnCheckExColor(val) {
			this.selectedInfo.recommendCheck = false
			this.$emit('fnCheckExColor', val)
			this.isPopup.recommendColor = false
		}
	}
}
</script>
