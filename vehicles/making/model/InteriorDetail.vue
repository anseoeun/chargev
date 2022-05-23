<template>
	<!-- 내장색상 -->
	<div ref="incolor" class="option-box">
		<div class="box-header">
			<b class="tit">내장 색상</b>
			<div class="right"></div>
		</div>
		<div class="box-body">
			<div class="optprice">
				<div class="left">
					<span class="name">{{ interior.realityInteriorColorName || interior.interiorColorName }}</span>
				</div>
				<div v-if="interior.interiorColorPrice > 0" class="right">
					<span class="price">
						<b>+ {{ interior.interiorColorPrice | amount }}</b>
						원
					</span>
				</div>
			</div>
			<v-radio
				v-if="interiorColor.length > 0 && interior && interior.interiorColorCode"
				v-model="interiorColorCode"
				:custom-label="true"
				:data="interiorColorData"
				value-key="interiorColorCode"
				label-key="interiorColorName"
				class="in-color-List"
				@change="fnCheckInColor"
			>
				<template slot-scope="props">
					<v-popover trigger="hover" :placement="props.item.index % 2 == 0 ? 'top-end' : 'top-start'" style-type="popover-round">
						<p>
							{{ props.item.interiorColorName }}
						</p>
						<i
							slot="reference"
							class="in-color"
							:style="
								`background-image: url('${CONT_PATH}/wcontents/repn-car/side-45/${selectedInfo.carCode}/interior/${props.item.interiorColorCode}/colorchip-interior.png')`
							"
						>
							<span v-if="props.item.choiceYn === 'N'" class="dim"></span>
						</i>
					</v-popover>
				</template>
			</v-radio>
			<p v-if="filterQuery.carBodyCode === 'V'" class="bullet-star noti">시트 패키지 선택 시, 내장 소재와 컬러 배색이 달라집니다.</p>
			<p v-else class="bullet-star noti">블랙 색상의 경우 트림에 따라 소재와 컬러 배색이 달라집니다.</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	components: {},
	props: {
		pos: {
			type: Number,
			default: 0
		},
		headerHeight: {
			type: Number,
			default: 0
		},
		interior: {
			type: Object,
			default: () => ({
				interiorColorCode: '',
				interiorColorName: '',
				interiorColorPrice: 0
			})
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
			interiorColorCode: ''
		}
	},
	computed: {
		...mapGetters({
			interiorColor: 'estimate/interiorColor' // API-WH-상품서비스-012 (판매모델별 내장색상 리스트 조회)
		}),

		interiorColorData() {
			if (this.filterQuery.carBodyCode === 'V') return this.interiorColor.filter((ele) => ele.interiorColorCode === 'NNB')
			else return this.interiorColor
		}
	},
	watch: {
		'interior.interiorColorCode'(val) {
			this.interiorColorCode = val
		}
	},
	mounted() {
		this.interiorColorCode = this.interior.interiorColorCode
		this.$nextTick(() => {
			let rectCollection = this.$refs.incolor.offsetTop
			this.$emit('update:pos', rectCollection)
		})
	},
	methods: {
		fnCheckInColor(val) {
			this.selectedInfo.recommendCheck = false
			this.$emit('fnCheckInColor', val)
		}
	}
}
</script>
