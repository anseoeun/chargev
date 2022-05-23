<template>
	<div class="toggle-area1" :class="{ completed: enginCheckLabel !== '', active: isOptionsShow }">
		<div class="information-detail" :class="{ active: isOptionsShow }">
			<div class="summary-info">
				<h1 class="title">STEP 1. 시승 모델</h1>
				<div class="right">
					<span class="text bold">{{ enginCheckLabel }}</span>
					<v-btn v-if="enginCheckLabel !== ''" class="btn-change" @click="showChange">
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
			<p class="step-guide-text">원하시는 엔진을 선택해주세요.</p>
			<div class="engin-select">
				<v-radio
					v-model="enginCheck"
					value-key="fuelScnCd"
					label-key="fuelScnNm"
					class="radio-round-button sm-w"
					type="button"
					:data="carFuelList"
					@change="enginChange"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		carFuelList: {
			type: Array,
			default: () => []
		},
		isOptionsShow: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			enginCheck: null
		}
	},
	computed: {
		enginCheckLabel() {
			let label = ''
			this.carFuelList?.forEach((item, index) => {
				if (item.fuelScnCd === this.enginCheck) {
					label = item.fuelScnNm
				}
			})
			return label
		}
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:시승 신청:step1',
						siteSection: '차량',
						siteSubsection: '시승 신청'
					}
				}
			}

			window._spaData(obj)
		})

		this.enginCheck = this.checkedEngin
	},
	methods: {
		enginChange(val) {
			console.log(val)
			if (val) this.$emit('completed', this.enginCheck)
		},
		showChange() {
			this.$emit('stepChange', 1)
		},
		async setEngin(fuelScnCd) {
			console.log(fuelScnCd)
			this.enginCheck = await fuelScnCd
			await this.enginChange(fuelScnCd)
		}
	}
}
</script>
