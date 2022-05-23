<template>
	<div class="toggle-area4" :class="{ completed: selectedDateTime, active: isOptionsShow }">
		<div class="information-detail" :class="{ active: isOptionsShow }">
			<div class="summary-info">
				<h1 class="title">STEP 4. 일정</h1>
				<div class="right">
					<span class="text bold">{{ selectedDateTime }}</span>
					<v-btn v-if="selectedDateTime" class="btn-change" @click="showChange">
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
			<p class="step-guide-text">
				원하시는 날짜와 시간을 선택해주세요.
				<br />
				차량 준비 및 이동 시간을 포함하여 1시간 ~ 1시간 30분 동안 시승서비스를 이용하실 수 있습니다.
			</p>
			<div class="driving-schedule">
				<div class="schedule-header">
					<div class="status">
						<span>
							<i class="able"></i>
							신청 가능
						</span>
						<span>
							<i class="disable"></i>
							신청 마감
						</span>
					</div>
					<div class="year-month">{{ currentYear }}년 {{ currentMonthLabel }}월</div>
					<div class="prev-next">
						<span class="prev">
							<button type="button" class="btn-prev" :disabled="limitedStart || btnDisabled" @click.prevent="previousMonth">
								이전달
							</button>
						</span>
						<span class="next">
							<button type="button" class="btn-next" :disabled="btnDisabled" @click.prevent="nextMonth">
								다음달
							</button>
						</span>
					</div>
				</div>

				<table class="schedule-table">
					<thead>
						<tr>
							<th v-for="(dayLabel, index) in dayLabels" :key="index">{{ dayLabel }}</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="(week, weekIndex) in weekArray" :key="weekIndex">
							<td v-for="(day, secondIdx) in week" :key="secondIdx" :class="dayClassObj(day)">
								<div v-if="day.isCurrentMonth" class="date">{{ day.date | formatDateToDay }}</div>
								<div v-if="day.isCurrentMonth && day.isToday" class="today-txt">오늘</div>
								<div v-if="day.isCurrentMonth" class="check-time">
									<template v-if="monthSchedule[weekIndex * 7 + secondIdx] && monthSchedule[weekIndex * 7 + secondIdx].length">
										<template v-if="testDrivingClosed(monthSchedule[weekIndex * 7 + secondIdx])">
											<span class="closed">신청 마감</span>
										</template>
										<template v-else>
											<ul>
												<li v-for="(item, idx) in monthSchedule[weekIndex * 7 + secondIdx]" :key="idx">
													<!-- 지점 & 대리점 -->
													<v-btn
														v-if="selectedCenter && selectedCenter.orgTypeScnCd && [50, 70].includes(Number(selectedCenter.orgTypeScnCd))"
														:disabled="item.prct_YN === 'N'"
														:class="{
															on:
																selectedDateTime &&
																selectedDateSchedule &&
																selectedDateSchedule.ymd.substr(0, 4) === item.prct_YMD.substr(0, 4) &&
																selectedDateSchedule.ymd.substr(4, 2) === item.prct_YMD.substr(4, 2) &&
																selectedDateSchedule.ymd.substr(6, 2) === item.prct_YMD.substr(6, 2) &&
																selectedDateSchedule.timeStrart === item.prct_TIM_START,
															disabled: item.prct_YN === 'N'
														}"
														@click="setSelectedDate(item, weekIndex * 7 + secondIdx, idx, day)"
													>
														{{ item.prct_MERIDIEM }}
													</v-btn>
													<!-- 시승센터 -->
													<v-btn
														v-else
														:disabled="item.prct_YN === 'N'"
														:class="{
															on:
																selectedDateTime &&
																selectedDateSchedule &&
																selectedDateSchedule.ymd.substr(0, 4) === item.prct_YMD.substr(0, 4) &&
																selectedDateSchedule.ymd.substr(4, 2) === item.prct_YMD.substr(4, 2) &&
																selectedDateSchedule.ymd.substr(6, 2) === item.prct_YMD.substr(6, 2) &&
																selectedDateSchedule.timeStrart === item.prct_TIM_START,
															disabled: item.prct_YN === 'N'
														}"
														@click="setSelectedDate(item, weekIndex * 7 + secondIdx, idx, day)"
													>
														{{ item.prct_TIM_START.substr(0, 2) }}:{{ item.prct_TIM_START.substr(2, 2) }}
													</v-btn>
												</li>
											</ul>
										</template>
									</template>
									<template v-else-if="day.isDeadlineday && monthSchedule[weekIndex * 7 + secondIdx]">
										<span class="closed">신청 마감</span>
									</template>
									<template v-else-if="day.isAfterToday && monthSchedule[weekIndex * 7 + secondIdx]">
										<span class="closed">미오픈</span>
									</template>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<v-popup :visible="selectedPop" :width="'550px'" :footer="['cancel', 'confirm']" @cancel="selectedCancel" @close="selectedCancel" @confirm="handleSubmit">
			<template slot="header">
				<div class="title">다음 일시로 시승을 신청하시겠습니까?</div>
			</template>
			<template v-if="selectedCenter && selectedCenter.orgTypeScnCd && selectSchedule" slot="body">
				<p class="text-main">
					{{ selectSchedule && selectSchedule.ymd && selectSchedule.ymd.substr(0, 4) }}년
					{{ selectSchedule && selectSchedule.ymd && selectSchedule.ymd.substr(4, 2) }}월
					{{ selectSchedule && selectSchedule.ymd && selectSchedule.ymd.substr(6, 2) }}일
					{{
						[50, 70].includes(Number(selectedCenter.orgTypeScnCd))
							? selectSchedule.meridiem
							: selectSchedule.timeStrart.substr(0, 2) + ':' + selectSchedule.timeStrart.substr(2, 2)
					}}
				</p>
			</template>
		</v-popup>
	</div>
</template>

<script>
import * as testDriving from '~/store/test-driving'
import * as testDrivingTypes from '~/store/test-driving/types'
import dateFns from 'date-fns'

const DAY_LABELS = ['일', '월', '화', '수', '목', '금', '토']
const MONTH_LABELS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

export default {
	filters: {
		formatDateToDay(val) {
			return dateFns.format(val, 'D')
		}
	},
	props: {
		isOptionsShow: {
			type: Boolean,
			default: false
		},
		selectedCenter: {
			type: Object,
			default: null
		},
		selectedCar: {
			type: Object,
			default: null
		},
		selectedService: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			btnDisabled: false, // 버튼 비활성화용

			selectedPop: false,
			selectSchedule: null,
			selectedDateSchedule: null,
			selectedDateTime: null,

			daysArray: [],
			weekArray: [],
			curr: new Date(),
			startDate: new Date(),
			customYn: false,
			currDateCursor: null,
			dayLabels: null,
			monthSchedule: [],
			monthScheduleIndex: 0,
			selectedYYYY: null,
			selectedDate: null
		}
	},
	computed: {
		currentMonth() {
			return this.currDateCursor.getMonth()
		},
		currentYear() {
			return this.currDateCursor.getFullYear()
		},
		currentMonthLabel() {
			return MONTH_LABELS[this.currentMonth]
		},
		limitedStart() {
			console.log(dateFns.format(this.currDateCursor, 'YYYYMM'))
			console.log(dateFns.format(this.curr, 'YYYYMM'))
			if (parseInt(dateFns.format(this.curr, 'YYYYMM')) >= parseInt(dateFns.format(this.currDateCursor, 'YYYYMM'))) {
				return true
			} else {
				return false
			}
		}
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:시승 신청:step4',
						siteSection: '차량',
						siteSubsection: '시승 신청'
					}
				}
			}

			window._spaData(obj)
		})
	},
	created() {
		this.dayLabels = DAY_LABELS.slice()
		this.today = new Date()
		this.selectedDate = this.today
		this.currDateCursor = this.today
	},
	methods: {
		...testDriving.mapActions([testDrivingTypes.postBookingSchedule]),
		async reset() {
			this.selectedPop = await false
			this.selectSchedule = await null
			this.selectedDateTime = await null
			this.selectedDateSchedule = await null
		},
		async init(currDate) {
			await this.getBookingSchedule(currDate)

			this.currDateCursor = await this.startDate
			this.selectedDate = await this.startDate

			await this.makeDaysArray()
		},
		makeDaysArray() {
			const date = this.currDateCursor
			const startOfMonth = dateFns.startOfMonth(date)
			const endOfMonth = dateFns.endOfMonth(date)
			// const days = dateFns.eachDay(startOfMonth, endOfMonth);

			const deadlineday = new Date()
			deadlineday.setDate(deadlineday.getDate() + 1)

			const days = dateFns.eachDay(startOfMonth, endOfMonth).map((day) => ({
				date: day,
				isCurrentMonth: dateFns.isSameMonth(new Date(this.currentYear, this.currentMonth), day),
				isToday: dateFns.isToday(day),
				isFreeday: dateFns.isToday(day),
				isSelected: dateFns.isSameDay(this.selectedDate, day),
				isAfterToday: dateFns.isAfter(day, this.selectedDate),
				isDeadlineday: dateFns.isSameDay(deadlineday, day)
			}))

			let previousMonthCursor = dateFns.lastDayOfMonth(dateFns.addMonths(date, -1))
			const begIndex = dateFns.getDay(days[0].date)
			for (let i = begIndex; i > 0; i--) {
				days.unshift({
					date: previousMonthCursor,
					isCurrentMonth: false,
					isToday: dateFns.isToday(previousMonthCursor),
					isFreeday: dateFns.isToday(previousMonthCursor),
					isSelected: dateFns.isSameDay(this.selectedDate, previousMonthCursor),
					isAfterToday: false,
					isDeadlineday: false
				})
				previousMonthCursor = dateFns.addDays(previousMonthCursor, -1)
			}

			const daysNeededAtEnd = days.length % 7 > 0 ? 7 - (days.length % 7) : 0
			let nextMonthCursor = dateFns.addMonths(date, 1)
			nextMonthCursor = dateFns.setDate(nextMonthCursor, 1)
			for (let x = 1; x <= daysNeededAtEnd; x++) {
				days.push({
					date: nextMonthCursor,
					isCurrentMonth: false,
					isToday: dateFns.isToday(nextMonthCursor),
					isFreeday: dateFns.isToday(nextMonthCursor),
					isSelected: dateFns.isSameDay(this.selectedDate, nextMonthCursor),
					isAfterToday: false,
					isDeadlineday: false
				})
				nextMonthCursor = dateFns.addDays(nextMonthCursor, 1)
			}
			this.daysArray = days

			let weekArray = []
			this.weekArrayIndex = days.length / 7
			for (let i = 0; i < this.weekArrayIndex; i++) {
				let idx = (i + 1) * 7
				let arr = []
				for (let x = idx - 7; x < idx; x++) {
					arr.push(days[x])
				}
				weekArray.push(arr)
			}
			this.weekArray = weekArray

			setTimeout(() => {
				this.btnDisabled = false
			}, 1000)
		},
		// 시승신청 일자 버튼 리스트
		fnTimeLinkBtn(list, currDate) {
			const bookingMonth = []
			//TODO:
			//해당부분 사용을안함 ..
			let cntYYYY = 0
			this.linkYYYY = [dateFns.format(this.curr, 'YYYY')]
			let cntMM = 0
			this.linkMM = [dateFns.format(this.curr, 'YYYYMM')]

			////
			// 지점/대리점 경우일때만
			// 월별로 오전/오후 시간대를 나눈뒤, 가공하여 로직 처리
			// `20200530` : { '오전' : { ... }, '오후' : { ... }} 형태로 그룹핑한 가공한 데이터
			const groupByDay =
				(this.selectedCenter.orgCd !== 'B37' &&
					[50, 70].includes(Number(this.selectedCenter.orgTypeScnCd)) &&
					list.reduce((map, obj) => {
						const key = obj['prct_YMD'] // group key 기준: 월
						if (!map[key]) {
							map[key] = { 오전: [], 오후: [] }
						}

						// TODO: 정확한 validation은 날짜 포맷으로 변경후 시간 체크 해줄 것
						// 현재: 시간 값을 단순 정수형 크기로 판단
						const startTime = obj['prct_TIM_START'] && Number(obj['prct_TIM_START'])
						switch (true) {
							case startTime < 1200: // 12시 이전 ==> 오전
								map[key]['오전'].push({ ...obj, prct_MERIDIEM: '오전' })
								break
							case startTime >= 1200: // 12시 이후(12시 포함) ==> 오후
								map[key]['오후'].push({ ...obj, prct_MERIDIEM: '오후' })
								break
						}
						return map
					}, {})) ||
				{}

			const groupByResult = [] // 가공한 데이터를 담는 곳

			// key: `월`표기로 되어있는 객체 ===> (example) { '20200528': { ... }, '20200529': { ... } }
			Object.keys(groupByDay).map((monthKey) => {
				// key: `오전 or 오후`표기로 되어있는 객체 ===> (example) { '오전': { ... }, '오후': { ... } }
				Object.keys(groupByDay[monthKey]).map((meridiemKey) => {
					if (Object.keys(groupByDay[monthKey][meridiemKey]).length) {
						// 오전 or 오후 시간대의 데이터가 있을 경우에만
						let minTimeIdx = 0 // 최소시간(첫타임) => 첫타임 시간대를 알기위한 인덱스 값

						// 스케쥴 개수에 상관없이 예약 상태가 'N'건이 있다면 예약불가
						groupByDay[monthKey][meridiemKey].some((items, idx, self) => {
							if (items.prct_YN === 'N') {
								// 'N'건이 있다면
								self.map((selfItem) => (selfItem.prct_YN = 'N')) // 모든 데이터를 'N'으로 변경
								return true
							}
						})

						// 최소시간대의 index 값을 알기위해서
						groupByDay[monthKey][meridiemKey].reduce((acc, currObj, currIdx) => {
							// ※ 기존
							// if (acc > currObj['prct_TIM_START']) {
							//     // 첫번째 데이터의 예약시간보다 빠른 예약시간대의 데이터가 있다면
							//     acc = currObj['prct_TIM_START']
							//     minTimeIdx = currIdx
							//   }
							//

							// ※ 변경
							// 각 오전, 오후 시간대가 3개이상일 경우
							if (Object.keys(groupByDay[monthKey][meridiemKey]).length > 2) {
								// TODO: 추후 로직 재확인하여 기존으로 원복하기 or 변경사항 수정하기
								// 1. [10:30~12:00, 13:00~14:30, 14:30~16:00, 16:00~17:30] => 데이터가 있다고 가정
								// 2. 오전시간대 1개, 오후시간대 3개일 경우 오후시간대의 2번째 값을 셋팅
								// 3. 오전시간대 2개, 오후시간대 2개일 경우 else 케이스로 넘어감.
								minTimeIdx = 1
							} else {
								// 각 [오전, 오후] 시간대가 3개 미만일 경우
								// 제일 빠른 시간대의 시간을 넣어줌.
								if (acc > currObj['prct_TIM_START']) {
									// 첫번째 데이터의 예약시간보다 빠른 예약시간대의 데이터가 있다면
									acc = currObj['prct_TIM_START']
									minTimeIdx = currIdx
								}
							}
							//
						}, groupByDay[monthKey][meridiemKey][0]['prct_TIM_START'])
						groupByResult.push(groupByDay[monthKey][meridiemKey][minTimeIdx]) // 가공된 데이터를 넣어줌.
					}
				})
			})
			console.log('groupByResult =>', groupByResult)
			////////////

			if (groupByResult && groupByResult.length) {
				list = groupByResult
			} // 대리점/지점일 경우 데이터 가공하여 덮어씀.
			console.log(list)
			list.forEach((data, index) => {
				// 년 링크 만들기
				if (data.prct_YMD.substr(0, 4) !== this.linkYYYY[cntYYYY]) {
					this.linkYYYY.push(data.prct_YMD.substr(0, 4))
					cntYYYY = cntYYYY + 1
				}
				// 월 링크 만들기
				if (data.prct_YMD.substr(0, 4) === this.selectedYYYY.substr(0, 4)) {
					if (data.prct_YMD.substr(0, 6) !== this.linkMM[cntMM]) {
						this.linkMM.push(data.prct_YMD.substr(0, 6))
						cntMM = cntMM + 1
					}
				}

				// "예약일시"의 월과 현재 월이 같을 경우
				if (data.prct_YMD.substr(0, 6) === currDate) {
					bookingMonth.push(data)
				}
			})

			//FIXME:
			let flag = 0
			let todayFlag = true
			this.daysArray.filter((data, index) => {
				// 현재 달 아니면 prct_YMD 쌓음
				if (!data.isCurrentMonth && flag === 0) this.monthSchedule.push([])
				if (data.isCurrentMonth) flag = 1
				if (!data.isToday && todayFlag) this.monthScheduleIndex = this.monthScheduleIndex + 1
				if (data.isToday) todayFlag = false
			})

			const day = 31
			this.fnDay(bookingMonth, day)
		},
		getBookingSchedule(currDate) {
			if (!this.selectedCar.prdnCarNo || !this.selectedCenter.orgCd) return
			if (this.selectedCenter.orgCd) this.$nuxt.$loading.start()
			currDate = !currDate ? dateFns.format(this.curr, 'YYYYMM') : dateFns.format(currDate, 'YYYYMM')
			if (!this.selectedYYYY) this.selectedYYYY = currDate.substr(0, 4)
			this.monthSchedule = []
			this.$nextTick(() => {
				if (!this.customYn) {
					// EP_IF_오픈시승_009_시승예약스케줄
					this[testDrivingTypes.postBookingSchedule]({
						CHAN_SCN_CD: '07',
						ORG_SCN_CD: 'A',
						ORG_CD: this.selectedCenter.orgCd,
						ORG_TYPE_SCN_CD: this.selectedCenter.orgTypeScnCd,
						PRDN_CAR_NO: this.selectedCar.prdnCarNo,
						TSRD_RQ_NO: dateFns.format(new Date(), 'YYYYMMDDHHmmss'),
						TSRD_SVC_CD:
							this.selectedService === 'service'
								? 'A01'
								: this.selectedService === 'visit' || this.selectedService === 'evService'
								? 'A02'
								: this.selectedService === 'self'
								? 'A03'
								: this.selectedService === 'untact'
								? 'A04'
								: ''
					})
						.then((list) => {
							console.log(list)
							if (list && list.length) {
								this.fnTimeLinkBtn(list, currDate)
							}
						})
						.finally(() => {
							this.$nuxt.$loading.finish()
						})
				} else {
					const data = this.tmpData.slice()
					this.fnTimeLinkBtn(data, currDate)
					this.$nuxt.$loading.finish()
				}
			})
		},
		// 날짜을 계산하여 버튼을 넣어준다
		fnDay(bookingMonth, day, dayReverse = 1) {
			if (day < 1) return

			// 회사공유일은 따로 지정해서 휴무하지않기때문에 수동으로 작업한다
			// 시승에서 나중에 휴무일 계산해서 내려오기때문에 삭제예정
			// const monthClosed = ['20200605']
			const bookingDay = []
			bookingMonth.filter((data, index) => {
				data.isActive = false
				if (parseInt(data.prct_YMD.substr(6, 2)) === dayReverse) {
					// (this.serviceType === 'service' && this.holidayDaysByMonthPeriod.includes(data.prct_YMD)) ||
					// monthClosed.includes(data.prct_YMD)
					// 찾아가는 시승일 경우, 10,16시만 활성화
					if (this.serviceType === 'service') {
						if (data.prct_TIM_START === '1000' || data.prct_TIM_START === '1600') {
							bookingDay.push(data)
						}
					} else {
						bookingDay.push(data)
					}
				}
			})

			this.monthSchedule.push(bookingDay)
			return this.fnDay(bookingMonth, day - 1, dayReverse + 1)
		},
		nextMonth() {
			this.btnDisabled = true
			this.currDateCursor = dateFns.addMonths(this.currDateCursor, 1)
			this.getBookingSchedule(this.currDateCursor)
			this.makeDaysArray()
			// this.$emit('select-current-year', `${this.currentYear}${this.currentMonthLabel}`)
		},
		previousMonth() {
			this.btnDisabled = true
			this.currDateCursor = dateFns.addMonths(this.currDateCursor, -1)
			this.getBookingSchedule(this.currDateCursor)
			this.makeDaysArray()
			// this.$emit('select-current-year', `${this.currentYear}${this.currentMonthLabel}`)
		},
		dayClassObj(day) {
			return {
				current: day.isCurrentMonth,
				today: day.isToday,
				freeday: day.isFreeday,
				selected: day.isSelected
			}
		},
		async setSelectedDate(item, mainIndex = '', idx, day) {
			if (typeof day !== 'undefined') {
				this.selectedDate = await dateFns.format(day.date, 'YYYYMMDD')
				this.currDateCursor = await day.date
				this.today = await day.date
			}

			const obj =
				(await item.prct_YN) !== 'N'
					? {
							ymd: this.selectedDate,
							timeStrart: item.prct_TIM_START,
							timeEnd: item.prct_TIM_END,
							meridiem: item.prct_MERIDIEM || '', // 오전,오후(지점/대리점일 경우에만 데이터 있음)
							mainIndex,
							idx
					  }
					: { ymd: '', timeStrart: '', timeEnd: '', mainIndex: 0, idx: 0, meridiem: '' }

			this.selectSchedule = await obj
			this.selectedPop = await true
		},
		async handleSubmit() {
			let selectedDateTime = null
			if (this.selectSchedule && this.selectSchedule.ymd) {
				selectedDateTime =
					this.selectSchedule.ymd.substr(0, 4) + '년 ' + this.selectSchedule.ymd.substr(4, 2) + '월 ' + this.selectSchedule.ymd.substr(6, 2) + '일 '
				if ([50, 70].includes(Number(this.selectedCenter.orgTypeScnCd))) selectedDateTime = selectedDateTime + this.selectSchedule.meridiem
				else selectedDateTime = selectedDateTime + this.selectSchedule.timeStrart.substr(0, 2) + ':' + this.selectSchedule.timeStrart.substr(2, 2)
			}
			this.selectedDateSchedule = await this.selectSchedule
			this.selectedDateTime = await selectedDateTime
			this.selectedPop = await false
			this.$emit('completed', this.selectSchedule)
		},
		showChange() {
			this.$emit('stepChange', 4)
		},
		async selectedCancel() {
			this.selectedPop = await false
		},
		testDrivingClosed(daySchedule) {
			const schedule = daySchedule
			let isClosed = 'Y'
			for (let i = 0; i < schedule.length; i++) {
				if (schedule[i].prct_YN === 'Y') {
					isClosed = 'N'
					return
				}
			}
			return isClosed === 'Y'
		},
		async setSchedule(selectSchedule) {
			this.selectSchedule = await selectSchedule
			this.handleSubmit()
		}
	}
}
</script>

<style lang="css" scoped>
.driving-schedule .schedule-table td.today {
	background: none;
}
.driving-schedule .schedule-table td.current.today {
	background: #f6f0ed;
}
.disabled {
	cursor: default;
}
.driving-schedule .schedule-table td .check-time ul li button.onHover:hover {
	background: #000;
	color: #fff;
}
.content.vehicles.test-driving .driving-schedule .schedule-table td .check-time ul li button.on,
.content.vehicles.test-driving .driving-schedule .schedule-table td .check-time ul li button[disabled]:hover {
	background: #f6f0ed;
	border: 1px solid #f6f0ed;
	color: #000;
}
</style>
