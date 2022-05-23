<template>
	<div class="content vehicles event-detail">
		<v-pageheader :top-breadcrumb="topBreadcrumb" />
		<div class="event-wrap">
			<div v-if="eventInfo" class="event-header">
				<p class="title">{{ eventInfo.eventName }}</p>
				<div v-if="eventInfo.eventStartDate && eventInfo.eventFinishDate" class="date">
					{{ eventInfo.eventStartDate | date('YYYY-MM-DD') }}~{{ eventInfo.eventFinishDate | date('YYYY-MM-DD') }}
				</div>
			</div>
			<div class="event-detail">
				<div v-if="eventInfo && eventInfo.pcEventDetailSubstance" class="event-view">
					<!-- <v-img :src="require('~/assets/images/temp/temp-event-detail.jpg')"></v-img> -->
					<v-html :template="eventInfo.pcEventDetailSubstance" />
				</div>
				<div class="btn-box">
					<v-btn class="btn md blue" type="button" @click="$router.push('/vehicles/event')">목록</v-btn>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { dateFilter } from 'vue-date-fns'

export default {
	head() {
		return {
			title: '이벤트'
		}
	},
	components: {},
	filters: {
		date: dateFilter
	},
	data() {
		return {
			topBreadcrumb: [
				{ linkName: '이벤트', link: '/vehicles/event' },
				{ linkName: '구매', link: '/' },
				{ linkName: '구매혜택', link: '/' },
				{ linkName: '', link: '/' }
			]
		}
	},
	computed: {
		...mapGetters({
			eventInfo: 'eventModules/eventInfo'
		})
	},

	async fetch({ store, query, redirect }) {
		await store
			.dispatch('eventModules/getEventInfo', {
				eventNumber: query.eventNumber
			})
			.then((res) => {
				if (!res || res.useYn != 'Y') {
					return redirect('/error/400')
				}
			})
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:구매 이벤트:상세',
						siteSection: '차량',
						siteSubsection: '구매 이벤트'
					}
				}
			}

			window._spaData(obj)
		})
	},
	created() {
		this.topBreadcrumb[3].linkName = this.eventInfo.eventName
		this.topBreadcrumb[3].link = '/vehicles/event/detail?eventNumber=' + this.eventInfo.eventNumber
	},
	methods: {}
}
</script>
