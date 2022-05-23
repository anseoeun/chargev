<template>
	<div class="content vehicles event">
		<v-pageheader :top-breadcrumb="topBreadcrumb" page-title="이벤트" page-infotext="다양한 이벤트를 만나보세요" />
		<div class="event-wrap">
			<div class="content-inner">
				<v-tab class="tab-default" :data="tabList" :custom-label="true" :contents="true">
					<template slot="label" slot-scope="props">
						{{ props.item.label }}
						<span v-if="props.item.value == 'tab1'">({{ eventList && eventList.totalCount ? eventList.totalCount : '0' }})</span>
					</template>
					<template slot="contents">
						<div data-id="tab1">
							<div class="event-list">
								<template v-if="eventList && eventList.totalCount && eventList.dataList && eventList.totalCount > 0">
									<ul>
										<li v-for="(item, index) in eventList.dataList" :key="index">
											<div class="img" @click="goEventDetail(item.eventNumber)">
												<v-img :src="`${item.pcFilePathName}/${item.pcFileName}`" :alt="item.eventName" />
											</div>
											<p class="tit" @click="goEventDetail(item.eventNumber)">{{ item.eventName }}</p>
											<p class="date">{{ item.eventStartDate | date('YYYY-MM-DD') }}~{{ item.eventFinishDate | date('YYYY-MM-DD') }}</p>
										</li>
									</ul>
									<v-pagination :total="eventList.totalCount" :page="page" :size="pageSize" @page-change="pageChange" />
								</template>
								<template v-else>
									<div class="no-event">
										진행중인 이벤트가 없습니다.
									</div>
								</template>
							</div>
						</div>
						<div data-id="tab2">
							<past-event />
						</div>
					</template>
				</v-tab>
			</div>
		</div>
	</div>
</template>

<script>
import { VPagination } from '~/components/element'
import PastEvent from '~/components/page/vehicles/enent/PastEvent'
import { mapActions, mapGetters } from 'vuex'
import { dateFilter } from 'vue-date-fns'

export default {
	head() {
		return {
			title: '이벤트'
		}
	},
	components: {
		VPagination,
		PastEvent
	},

	filters: {
		date: dateFilter
	},

	data() {
		return {
			topBreadcrumb: [{ linkName: '이벤트', link: '/vehicles/event' }],
			tabList: [
				{ value: 'tab1', label: '진행중인 이벤트' },
				{ value: 'tab2', label: '지난 이벤트' }
			],
			page: 1,
			pageSize: 9
		}
	},
	computed: {
		...mapGetters({
			eventList: 'eventModules/eventList'
		})
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:구매 이벤트:목록',
						siteSection: '차량',
						siteSubsection: '구매 이벤트'
					}
				}
			}

			window._spaData(obj)
		})

		this.getEventList()
	},
	methods: {
		...mapActions(['eventModules/getEventList']),

		pageChange(page) {
			this.page = page
			this.getEventList()
		},
		async getEventList() {
			await this['eventModules/getEventList']({
				searchCode: '10',
				pageNo: this.page,
				pageSize: this.pageSize
			})
		},
		goEventDetail(eventNumber) {
			this.$router.push({ name: 'vehicles-event-detail', query: { eventNumber: eventNumber } })
		}
	}
}
</script>
