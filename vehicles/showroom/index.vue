<template>
	<div id="showroom" class="showroom-wrap">
		<keep-alive></keep-alive>
		<div class="video-wrap">
			<div class="mute">
				<v-btn class="mute-on" @click="offMute"><span class="offscreen">소리끄기</span></v-btn>
				<v-btn class="mute-off" @click="onMute"><span class="offscreen">소리켜기</span></v-btn>
			</div>
			<div class="section video1">
				<div class="video">
					<video id="video1">
						<source src="https://casper.hyundai.com/wcontents/video/clip_01.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div class="section video2">
				<div class="video">
					<video id="video2">
						<source src="https://casper.hyundai.com/wcontents/video/clip_02.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div class="section video3">
				<div class="video">
					<video id="video3">
						<source src="https://casper.hyundai.com/wcontents/video/clip_03.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div class="section video4">
				<div class="video">
					<video id="video4">
						<source src="https://casper.hyundai.com/wcontents/video/clip_04.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div class="section video5">
				<div class="video">
					<video id="video5">
						<source src="https://casper.hyundai.com/wcontents/video/clip_05.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div class="section video6">
				<div class="video">
					<video id="video6">
						<source src="https://casper.hyundai.com/wcontents/video/clip_06.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div class="section video7">
				<div class="video">
					<video id="video7">
						<source src="https://casper.hyundai.com/wcontents/video/clip_07.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</div>

		<div class="desc-wrap">
			<div class="mute">
				<v-btn class="mute-on" @click="offMute"><span class="offscreen">소리끄기</span></v-btn>
				<v-btn class="mute-off" @click="onMute"><span class="offscreen">소리켜기</span></v-btn>
			</div>
			<div class="section video1">
				<div></div>
				<div class="desc">
					<h1 class="tit" data-ani="top">디지털 쇼룸</h1>
					<div class="exp-txt" data-ani="top" data-delay="-200">
						캐스퍼 디지털 쇼룸에 오신 것을 환영합니다.
						<br />
						현대자동차의 새로운 엔트리 SUV 캐스퍼를 생생하게 체험해보세요.
					</div>
					<p class="noti-txt ver">영상 내 차량 모델은 실제와 다를 수 있습니다.</p>
					<div class="btn-wrap" data-ani="top" data-delay="-300">
						<v-btn class="play-btn" @click="goPlay('video1')">캐스퍼 체험하기</v-btn>
					</div>
					<p class="noti-txt hor" data-ani="top2" data-delay="-100">영상 내 차량 모델은 실제와 다를 수 있습니다.</p>
				</div>
				<div class="desc">
					<h1 class="tit" data-ani="top">외장 색상</h1>
					<div class="exp-txt" data-ani="top" data-delay="-200">
						캐스퍼만의 톡톡 튀는 여섯가지 색상을 직접 확인해보세요.
					</div>
					<p class="noti-txt ver">영상 내 차량 모델은 실제와 다를 수 있습니다.</p>
					<div class="btn-wrap" data-ani="top" data-delay="-300">
						<v-btn class="play-btn" @click="goPlay('video2')">외장 색상 확인하기</v-btn>
					</div>
					<p class="noti-txt hor" data-ani="top2" data-delay="-100">영상 내 차량 모델은 실제와 다를 수 있습니다.</p>
				</div>
			</div>
			<!-- 2 -->
			<div class="section video2">
				<div></div>
				<div class="desc">
					<h1 class="tit" data-ani="top">캐스퍼 액티브</h1>
					<div class="exp-txt" data-ani="top" data-delay="-200">
						캐스퍼 액티브 모델(1.0T-GDI, 터보 엔진)은 주행의 재미를 더해줍니다.
						<br />
						캐스퍼 액티브만의 스포티한 외장 디자인도 함께 확인해보세요.
						<br />
						<p class="sub-txt">* 캐스퍼 액티브, 액티브 플러스 적용</p>
					</div>
					<p class="noti-txt ver">영상 내 차량 모델은 실제와 다를 수 있습니다.</p>
					<div class="btn-wrap" data-ani="top" data-delay="-300">
						<v-btn class="play-btn" @click="goPlay('video3')">캐스퍼 액티브 체험하기</v-btn>
					</div>
					<p class="noti-txt hor" data-ani="top2" data-delay="-100">영상 내 차량 모델은 실제와 다를 수 있습니다.</p>
				</div>
			</div>
			<!-- 3 -->
			<div class="section video3">
				<div></div>
				<div class="desc">
					<h1 class="tit" data-ani="top">실내 공간</h1>
					<div class="exp-txt" data-ani="top" data-delay="-200">
						전좌석 풀 폴딩, 리클라이닝, 슬라이딩이 가능한 캐스퍼로
						<br />
						실내 공간을 자유롭게 활용해보세요.
					</div>
					<p class="noti-txt ver">영상 내 차량 모델은 실제와 다를 수 있습니다.</p>
					<div class="btn-wrap" data-ani="top" data-delay="-300">
						<v-btn class="play-btn" @click="goPlay('video4', 'loop1')">실내 공간 확인하기</v-btn>
					</div>
					<p class="noti-txt hor" data-ani="top2" data-delay="-100">영상 내 차량 모델은 실제와 다를 수 있습니다.</p>
				</div>
			</div>
			<!-- 4 -->
			<div class="section video4">
				<div></div>

				<div class="desc">
					<h1 class="tit" data-ani="top">캐스퍼 드라이빙 시작!</h1>
					<div class="exp-txt" data-ani="top" data-delay="-200">
						이제 캐스퍼를 타고 드라이빙을 시작해볼까요?
						<br />
						라이프스타일에 따라 다양한 드라이빙 코스가 준비되어 있습니다.
					</div>
					<p class="noti-txt ver">영상 내 차량 모델과 주행 경험은 실제와 다를 수 있습니다.</p>
					<div class="btn-wrap" data-ani="top" data-delay="-300">
						<v-btn class="play-btn" @click="goPlay('video4', 'loop2')">다음</v-btn>
					</div>
					<p class="noti-txt hor" data-ani="top2" data-delay="-100">영상 내 차량 모델과 주행 경험은 실제와 다를 수 있습니다.</p>
				</div>
				<div class="desc">
					<h1 class="tit" data-ani="top">
						<div class="number"><span>#01</span></div>
						도심 속 캐스퍼
					</h1>
					<div class="exp-txt" data-ani="top" data-delay="-200">
						마트, 주유소, 드라이브 스루 매장까지! 캐스퍼는 도심 속에서 더욱 빛납니다.
						<br />
						넉넉한 수납공간과 편리한 인포테인먼트 시스템도 함께 경험해보세요.
					</div>
					<p class="noti-txt ver">
						영상 내 차량 모델과 주행 경험은 실제와 다를 수 있습니다.
						<br />
						동승석 시트백 보드 트레이는 별도 구매 품목입니다.
					</p>
					<div class="btn-wrap" data-ani="top" data-delay="-300">
						<v-btn class="play-btn" @click="goPlay('video5', 'loop1')">드라이빙 시작</v-btn>
					</div>
					<p class="noti-txt hor" data-ani="top2" data-delay="-100">
						영상 내 차량 모델과 주행 경험은 실제와 다를 수 있습니다.
						<br />
						동승석 시트백 보드 트레이는 별도 구매 품목입니다.
					</p>
				</div>
			</div>
			<!-- 5 -->
			<div class="section video5">
				<div></div>
				<div class="desc">
					<h1 class="tit" data-ani="top">
						<div class="number"><span>#02</span></div>
						여가를 함께할 캐스퍼
					</h1>
					<div class="exp-txt" data-ani="top" data-delay="-200">
						화창한 주말, 캠핑 용품을 싣고 캠핑장으로 떠나보세요.
						<br />
						2WD 험로주행모드로 어떤 지형을 만나도 최적의 주행 경험을 할 수 있을 거예요.
					</div>
					<p class="noti-txt ver">
						영상 내 차량 모델과 주행 경험은 실제와 다를 수 있습니다.
						<br />
						루프 박스, 크로스바, 자전거 거치대, 에어매트는 별도 구매 품목입니다.
					</p>
					<div class="btn-wrap" data-ani="top" data-delay="-300">
						<v-btn class="play-btn" @click="goPlay('video6', 'loop1')">드라이빙 시작</v-btn>
					</div>
					<p class="noti-txt hor" data-ani="top2" data-delay="-100">
						영상 내 차량 모델과 주행 경험은 실제와 다를 수 있습니다.
						<br />
						루프 박스, 크로스바, 자전거 거치대, 에어매트는 별도 구매 품목입니다.
					</p>
				</div>
			</div>
			<!-- 6 -->
			<div class="section video6">
				<div></div>
				<div class="desc">
					<h1 class="tit" data-ani="top">
						<div class="number"><span>#03</span></div>
						편안하고 안전한 캐스퍼
					</h1>
					<div class="exp-txt" data-ani="top" data-delay="-200">
						리클라이닝, 슬라이딩 시트로 2열에서도 편안하게!
						<br />
						지능형 안전 기술을 탑재한 똑똑한 캐스퍼와 함께 안전한 드라이빙을 즐겨보세요.
					</div>
					<p class="noti-txt ver">
						영상 내 차량 모델과 주행 경험은 실제와 다를 수 있습니다
					</p>
					<div class="btn-wrap" data-ani="top" data-delay="-300">
						<v-btn class="play-btn" @click="goPlay('video7')">드라이빙 시작</v-btn>
					</div>
					<p class="noti-txt hor" data-ani="top2" data-delay="-100">
						영상 내 차량 모델과 주행 경험은 실제와 다를 수 있습니다.
					</p>
				</div>
			</div>
			<!-- 7 -->
			<div class="section video7">
				<div></div>
				<div class="desc">
					<h1 class="tit" data-ani="top">캐스퍼 체험 완료!</h1>
					<div class="exp-txt" data-ani="top" data-delay="-200">
						이제 캐스퍼를 구매하러 가볼까요?
					</div>
					<p class="noti-txt ver">영상 내 차량 모델은 실제와 다를 수 있습니다.</p>
					<div class="btn-wrap" data-ani="top" data-delay="-300">
						<div class="btn-end">
							<v-btn class="btn" @click="goPlay('video1')">
								한번 더 캐스퍼를 체험하고 싶다면
								<br />
								<b>다시 체험하기</b>
							</v-btn>
							<v-btn class="btn" @click="$router.push({ path: '/vehicles/making/model' })">
								나만의 캐스퍼를 만들어 보고 싶다면
								<br />
								<b>나만의 캐스퍼 만들기</b>
							</v-btn>
						</div>
					</div>
					<p class="noti-txt hor" data-ani="top2" data-delay="-100">영상 내 차량 모델은 실제와 다를 수 있습니다.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'showroom',
	data() {
		return {
			pageTitle: '쇼룸',
			headerBtns: {
				allMenu: true
			},
			current: 'video1',
			flag: null,
			descflag: null,
			repeat: false,
			orientation: null
		}
	},
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:쇼룸:디지털',
						siteSection: '차량',
						siteSubsection: '쇼룸'
					}
				}
			}

			window._spaData(obj)
		})

		document.querySelectorAll('.video1').forEach((el) => {
			el.classList.add('on')
		})
		this.offMute()
		setTimeout(() => {
			this.animation('.video1 .desc')
		}, 500)
	},
	methods: {
		goPlay(id, loop) {
			const sv = document.getElementById(id)

			clearInterval(this.flag)

			if (id === 'video1') {
				this.changeCut(id)
				if (this.repeat) {
					this.animation('.video1 .desc:nth-child(2)')
					document.querySelectorAll('video').forEach((video) => {
						video.classList.remove('play')
					})
				}
				this.repeat = false
			} else if (id === 'video2' || id === 'video3' || (id === 'video4' && loop === 'loop1') || id === 'video5' || id === 'video6') {
				if (this.orientation != 90) {
					this.changeCut(id, true)
				} else {
					this.changeCut(id)
				}
			} else if (id === 'video4' && loop === 'loop2') {
				this.hideDesc('.' + id)
			} else if (id === 'video7') {
				if (this.orientation != 90) {
					this.changeCut(id, true)
				} else {
					this.changeCut(id)
				}
				this.repeat = true
			} else {
				this.changeCut(id)
				this.hideDesc('.' + id)
			}

			if (sv.currentTime === 0) sv.play()
			sv.closest('.video').classList.add('play')

			// 종료 --> ended
			// 현재 재생 위치 --> currentTime
			// 반복 재생 여부 --> loop
			// 음소거 여부 --> muted
			// 속도 조절 --> playbackRate
			// 원본 크기 --> videoHeight / videoWidth
			// video 요소 크기 --> width / height
			// 볼륨 크기(0.0 ~ 1.0) --> volume
			// 시작 위치 --> startOffsetTime
			this.flag = setInterval(
				function() {
					if (this.current == 'video1') {
						// this.changeCut('video2')
						if (sv.currentTime >= 44) this.animation('.video1 .desc:nth-child(3)')
					} else if (this.current === 'video2') {
						// this.changeCut('video3')
						if (sv.currentTime >= 15) this.animation('.video2 .desc:nth-child(2)')
					} else if (this.current === 'video3') {
						// this.changeCut('video4')
						if (sv.currentTime >= 18) this.animation('.video3 .desc:nth-child(2)')
					} else if (this.current === 'video4' && loop === 'loop1') {
						if (sv.currentTime > 24) this.changeDesc('.video4', 2)
						if (sv.currentTime >= 26.5) {
							sv.currentTime = 24
						}
					} else if (this.current === 'video4' && loop === 'loop1') {
						if (sv.currentTime > 24) this.changeDesc('.video4', 2)
						if (sv.currentTime >= 26.5) {
							sv.currentTime = 24
						}
					} else if (this.current === 'video4' && loop === 'loop2') {
						this.changeDesc('.video4', 3)
						if (sv.currentTime >= 26.5) {
							sv.currentTime = 24
						}
					} else if (this.current === 'video5' && loop === 'loop1') {
						if (sv.currentTime > 39) this.changeDesc('.video5', 2)
						if (sv.currentTime >= 41.5) {
							sv.currentTime = 39
						}
					} else if (this.current === 'video6' && loop === 'loop1') {
						if (sv.currentTime > 56) this.changeDesc('.video6', 2)
						if (sv.currentTime >= 58.5) {
							sv.currentTime = 56
						}
					}
					if (sv.ended) {
						clearInterval(this.flag)
						if (this.current === 'video7') {
							this.animation('.video7 .desc:nth-child(2)')
						}
						// sv.currentTime = 0
					}
				}.bind(this),
				100,
				id
			)
		},
		goPause(id) {
			let sv = document.getElementById(id)
			sv.pause()
		},

		changeCut(cut, delay) {
			document.querySelectorAll('video').forEach((video) => {
				video.currentTime = 0
				video.pause()
			})
			// document.querySelector('#'+cut).currentTime = 0
			this.current = cut
			this.hideDesc('.section')

			document.querySelectorAll('.video-wrap .section').forEach((el) => {
				el.classList.remove('on')
			})

			if (!delay) {
				document.querySelectorAll('.desc-wrap .section').forEach((el) => {
					el.classList.remove('on')
				})
			}
			document.querySelectorAll('.' + cut).forEach((el) => {
				el.classList.add('on')
			})
		},
		hideDesc(el) {
			document.querySelectorAll(el + ' .on').forEach((desc) => {
				desc.classList.remove('on')
			})
		},
		changeDesc(el, num) {
			let desc = document.querySelector(el + ' .desc:nth-child(' + num + ')')
			if (desc.classList.contains('on')) return

			document.querySelectorAll(el + ' .on').forEach((desc) => {
				desc.classList.remove('on')
			})
			this.animation(el + ' .desc:nth-child(' + num + ')')
		},
		animation(val) {
			let el = document.querySelector(val)
			if (!el) return
			if (el.classList.contains('on')) return

			let time = 0
			let dataEl = el.querySelectorAll('[data-ani]')
			el.classList.add('on')
			document.querySelectorAll('.section .active').forEach((desc) => {
				desc.classList.remove('active')
			})

			if (el.closest('.video5')) {
				document.querySelectorAll('.video4').forEach((el) => {
					el.classList.remove('on')
				})
			}
			if (el.closest('.video6')) {
				document.querySelectorAll('.video5').forEach((el) => {
					el.classList.remove('on')
				})
			}

			setTimeout(() => {
				el.classList.add('active')
			}, 300)

			function play(val) {
				val.forEach((el, i) => {
					let delay = el.dataset.delay ? el.dataset.delay : 0
					time += 400 + parseInt(delay)

					window.motion = setTimeout(function() {
						el.classList.add('on')
					}, time)
				})
			}
			setTimeout(() => {
				play(dataEl)
			}, 300)
		},
		onMute() {
			document.querySelectorAll('video').forEach((el) => {
				el.muted = false
			})
			document.querySelectorAll('.mute-off').forEach((el) => {
				el.style.display = 'none'
			})
			document.querySelectorAll('.mute-on').forEach((el) => {
				el.style.display = 'block'
			})
		},
		offMute() {
			document.querySelectorAll('video').forEach((el) => {
				el.muted = true
			})
			document.querySelectorAll('.mute-off').forEach((el) => {
				el.style.display = 'block'
			})
			document.querySelectorAll('.mute-on').forEach((el) => {
				el.style.display = 'none'
			})
		}
	}
}
</script>

<style lang="scss">
@import '~/assets/style/page/showroom.scss';
</style>
