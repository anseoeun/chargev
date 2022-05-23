<template>
	<div class="toggle-area5" :class="{ completed: check1 && check2 && check3 && check4, active: isOptionsShow }">
		<div class="information-detail" :class="{ active: isOptionsShow }">
			<div class="summary-info">
				<h1 class="title">STEP 5. 시승 안내 및 이용동의</h1>
			</div>
		</div>
		<div class="detail-info" :class="{ active: isOptionsShow }" :style="{ display: isOptionsShow === false ? 'none' : null }">
			<div class="matching-list driving-info">
				<!-- <div class="list-row">
					<div class="tit"><b>시승자 정보</b></div>
					<div class="auto">
						<ul class="cell-list">
							<li>
								<div class="cell-tit wide">이름</div>
								<div class="cell-txt">{{ (userInfo && userInfo.userName) || '' }}</div>
							</li>
							<li>
								<div class="cell-tit wide">휴대전화번호</div>
								<div class="cell-txt">{{ userInfo && userInfo.hpNo ? formatPhoneNumber(userInfo.hpNo + '') : '' }}</div>
							</li>
						</ul>
						<br />
						<p class="bullet-star">시승 신청 후 고객님께 안내 전화를 드립니다. 잘못된 연락처로 인해 시승이 불가하실 수 있으니 정확한 연락처를 확인해주세요.</p>
					</div>
				</div> -->
				<div class="list-row">
					<div class="tit"><b>안내 사항</b></div>
					<div class="auto">
						<ul class="bullet-list">
							<li>시승을 위해 드라이빙라운지 / CASPER STUDIO 방문 시, 운전면허증을 지참해주세요.</li>
							<li
								v-html="
									'시승 시 교통법규를 지켜 안전하게 운행해주세요. 과속, 위험 운전 및 기타 운행이 불가능하다고 판단될 경우 고객님의 안전을 위해 시승이 제한될 수 있습니다.'
								"
							></li>
							<li>시승 중 혹시 모를 사고가 발생할 경우 자기부담금은 최대 10만원까지 부과됩니다.</li>
						</ul>
					</div>
				</div>
				<div class="list-row">
					<div class="tit"><b>서비스 이용 동의</b></div>
					<div class="auto">
						<v-checkbox :one-check="true" :checked.sync="check1" class="right" @change="copyChk($event, 1)">
							(필수) 시승차 및 서비스 이용에 따른 주요 고지사항 및 이용약관 안내
						</v-checkbox>
						<br />
						<v-checkbox :one-check="true" :checked.sync="check2" class="right" @change="copyChk($event, 2)">
							(필수) 위치기반 서비스 이용약관 안내
						</v-checkbox>
						<br />
						<v-checkbox :one-check="true" :checked.sync="check3" class="right" @change="copyChk($event, 3)">
							(필수) 개인정보 수집 및 이용 안내
						</v-checkbox>
						<br />
						<v-checkbox :one-check="true" :checked.sync="check4" class="right" @change="copyChk($event, 4)">
							(선택) 차량구입관련 사항 및 각종 정보제공 안내 (마케팅 활용 및 광고성 정보 전송)
						</v-checkbox>
					</div>
				</div>
			</div>
		</div>

		<v-popup
			:width="'1000px'"
			:visible="testDrivePop"
			:dim-click="false"
			:footer="['confirm']"
			@confirm="testDrivePop = false"
			@close="
				check1 = false
				testDrivePop = false
			"
		>
			<template slot="header">
				<div class="title">(필수) 시승차 이용 및 서비스 이용에 따른 주요 고지사항</div>
			</template>
			<template slot="body">
				<div class="terms-area">
					<strong>1. 유의사항</strong>
					<!-- 2021.09.23 추가 -->
					<p>&lt;드라이빙라운지&gt;</p>

					<!-- 2021.09.29(ver1.1) (결함#8903)내용변경 -->
					<ol>
						<li>
							① 고객님의 시승차 운전이 불가하다고 판단 시 귀사 직원의 판단에 따라 즉시 시승이 중단/취소될 수 있으며 향후 시승 이용이 제한될 수 있습니다.
							<br />
							(음주, 심신미약, 운전미숙, 과속 및 난폭운전, 기상악화 등 안전상 위험하다고 판단되는 경우)
						</li>
						<li>② 시승서비스 이용을 위해서는 시승 전 반드시 운전면허증을 제시해야 합니다.</li>
						<li>③ 시승차는 보험 적용 기준에 따라 만 21세 이상만 운형 가능합니다.</li>
						<!-- <li>
              ④ 찾아가는 시승서비스의 경우 시승 구간은 시승 희망지 주변이며, 그 외의 경우 시승 구간은 드리이빙라운지
              주변입니다. 시승 후에는 출발지로 돌아와 반드시 차량을 반납해야 합니다.
            </li> -->
						<li>
							④ 다음 시승 신청 고객님들을 위해 시승 신청시간을 준수해 주시기 바랍니다.
						</li>
						<!-- <li>
              ⑥ 시승 고객님의 안전한 운행을 위해 동승 시승, 찾아가는 시승을 희망하시는 경우 카마스터가 동승합니다.
            </li>
            <li>
              ⑦계약 이력 또는 담당 카마스터가 있는 고객님이 동승 시승을 희망하시는 경우 담당 카마스터담당 와 동승 시승
              가능 여부 확인 후 예약이 확정됩니다. 계약 이력이 있는 고객님은 담당 카마스터가 동승이 불가능한 경우,
              찾아가는 시승서비스 이용이 제한됩니다.
            </li> -->
						<li>
							⑤ 시승서비스는 고객님께서 차량을 구매하기 전 관심 차종을 경험할 수 있는 기회를 드리고자 제공되는 서비스입니다. 따라서 개인적 용도로 시승차를
							이용하려는 경우 시승이 제한될 수 있습니다. 많은 고객님께서 시승서비스를 제공하기 위해 고객님 한 분당 연간 6회까지 시승 신청이 가능합니다.
						</li>
					</ol>
					<!-- // 2021.09.29(ver1.1) (결함#8903)내용변경 -->

					<!-- 2021.09.23 추가 -->
					<p>&lt;CASPER STUDIO&gt;</p>
					<ol>
						<li>
							①고객님의 시승차 운전이 불가하다고 판단 시 귀사 직원의 판단에 따라 즉시 시승이 중단/취소될 수 있으며 향후 시승 이용이 제한될 수 있습니다. (음주,
							심신미약, 운전미숙, 과속 및 난폭운전, 기상악화 등 안전상 위험하다고 판단되는 경우)
						</li>
						<li>②시승서비스 이용을 위해서는 시승 전 반드시 운전면허증을 제시해야 합니다.</li>
						<li>③시승차는 보험 적용 기준에 따라 만 21세 이상만 운행 가능합니다.</li>
						<li>④시승시간에는 차량 준비 및 차량 이동 시간이 포함됩니다.</li>
						<li>⑤다음 시승 신청 고객님들을 위해 시승 신청시간을 준수해 주시기 바랍니다. 고객님과 연락이 두절되는 경우 시승 신청이 자동 취소될 수 있습니다.</li>
						<li>⑥동승 시승 시 안전한 운행을 위해 담당 크루가 동승합니다.</li>
						<li>⑦동승 시승 시 운행 중 동승한 크루가 안내하는 지정된 시승 코스만 운행 가능합니다.</li>
						<li>⑧Semi-Untact 시승 시 담당 크루가 미 동승하며 관제시스템으로 모니터링을 진행합니다.</li>
						<li>⑨Semi-Untact 시승 시 안내하는 지정된 시승 범위 안에서 운행 가능합니다.</li>
						<li>⑩크루가 안전 운행이 불가능하다고 판단할 시 즉시 시승진행을 중단할 수 있으며, 향후 6개월간 시승프로그램 참여가 제한됩니다.</li>
						<li>⑪시승 차량의 경우 녹화장비가 설치되어 있으며, 민,형사상 법적 증거로 사용될 수 있습니다.</li>
						<li>⑫녹화장비로 기록된 영상은 시승 종료 후 30일 보관되며, 열람은 경찰 입회 하에서만 가능합니다.</li>
						<li>
							⑬시승서비스는 고객님께서 차량을 구매하기 전 관심 차종을 경험할 수 있는 기회를 드리고자 제공되는 서비스입니다. 따라서 개인적 용도로 시승차를
							이용하려는 경우 시승이 제한될 수 있습니다. 많은 고객님께 시승서비스를 제공하기 위해 고객님 한 분당 연간 6회까지 시승 신청이 가능합니다.
						</li>
					</ol>

					<strong>2. 보험사항</strong>
					<p>
						상기차량은 대인배상(1,2), 대물배상, 자기신체, 자기 차량, 무보험 등의 보험에 가입되어 있으나, 보험 가액을 초과하는 부분 및 보험 미적용 부분 (운전자
						연령 한정 운전 특약 위반, 차량 사고 시 자차 부담금 최대 10만원 고객 부담)등에 대해서는 본인이 스스로 책임을 지는 동시에 귀사에 발생한 모든 손해를
						배상할 것을 약속합니다.
					</p>

					<strong>3. 금지사항</strong>
					<p>
						본인은 귀사가 제공한 상기 차량을 상업적으로 이용하는 등 비정상적으로 운행하거나, 본인 외 제 3자에게 운행, 양도, 대여, 담보의 목적으로 제공하는 등의
						행위를 일절 하지 않을 것을 약속합니다. 또한 주행보조 기능(AEB자동 긴급 제동 시스템, FCA 전방 충돌 방지 보조 등) 작동을 위하여 위험한 운전을 시도하지
						않으며, 항상 안전하게 운전할 것을 약속합니다.
					</p>

					<strong>4. 책임사항</strong>
					<ol>
						<li>① 본인은 위 보험 사항 및 금지사항, 유의사항을 위반하여 발생한 모든 민.형사상 책임을 부담합니다.</li>
						<li>
							② 본인은 약정된 차량 반납 일시까지 상기 차량을 지정된 반납 장소에 반납하지 않거나 차량 반납시 차량 상태가 변동된 경우, 이로 인해 발생한 모든
							손해에 대한 배상 책임을 부담합니다.
						</li>
						<li>③ 본인은 교통법규 미준수로 인한 벌금, 과태료 및 시승 운행 시 발생한 도로교통비 등을 부담합니다.</li>
					</ol>

					<strong>위치정보 수집장치 부착 사실 고지</strong>
					<!-- 2021.09.23 수정 -->
					<p>시승차량에 장착된 블루링크 및 모션 단말을 통해 시승서비스 이용 시간 동안 시승차량 및 고객님의 위치정보가 수집됨을 알려드립니다.</p>
				</div>
			</template>
		</v-popup>

		<!-- (필수) 위치기반 서비스 이용약관 안내 -->
		<v-popup
			:width="'1000px'"
			:visible="positionServicePop"
			:dim-click="false"
			:footer="['confirm']"
			@confirm="positionServicePop = false"
			@close="
				check2 = false
				positionServicePop = false
			"
		>
			<template slot="header">
				<div class="title">(필수) 위치기반 서비스 이용약관 안내</div>
			</template>
			<template slot="body">
				<div class="terms-area list-depth">
					<p class="contents-head t-center bold">제1장 총 칙</p>
					<p>제 1 조 (목적)</p>
					<ul>
						<li
							>본 약관은 회원(캐스퍼 온라인 서비스 약관에 동의한 자를 말합니다. 이하 “회원”이라고 합니다.)이 주식회사 현대자동차(이하 “회사”라고 합니다.)가
							제공하는 캐스퍼 온라인 서비스(이하 “서비스”라고 합니다)를 이용함에 있어 회사와 회원의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</li
						>
					</ul>

					<p>제 2 조 (이용약관의 효력 및 변경)</p>
					<ol>
						<li
							>①본 약관은 서비스를 신청한 고객 또는 개인위치정보주체가 본 약관에 동의하고 회사가 정한 소정의 절차에 따라 서비스의 이용자로 등록함으로써 효력이
							발생합니다.</li
						>
						<li
							>②회원이 온라인에서 본 약관의 "동의하기" 버튼을 클릭하였을 경우 본 약관의 내용을 모두 읽고 이를 충분히 이해하였으며, 그 적용에 동의한 것으로
							봅니다.</li
						>
						<li
							>③회사는 위치정보의 보호 및 이용 등에 관한 법률, 콘텐츠산업 진흥법, 전자상거래 등에서의 소비자보호에 관한 법률, 소비자기본법 약관의 규제에 관한
							법률 등 관련법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li
						>
						<li
							>④회사가 약관을 개정할 경우에는 기존약관과 개정약관 및 개정약관의 적용일자와 개정사유를 명시하여 현행약관과 함께 그 적용일자 10일 전부터 적용일
							이후 상당한 기간 동안 공지만을 하고, 개정 내용이 회원에게 불리한 경우에는 그 적용일자 30일 전부터 적용일 이후 상당한 기간 동안 각각 이를 서비스
							홈페이지에 게시하거나 회원에게 전자적 형태(전자우편, SMS 등)로 약관 개정 사실을 발송하여 고지합니다.</li
						>
						<li
							>⑤회사가 전항에 따라 회원에게 통지하면서 공지 또는 공지∙고지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 이용약관에 승인한
							것으로 봅니다. 회원이 개정약관에 동의하지 않을 경우 회원은 이용계약을 해지할 수 있습니다.</li
						>
					</ol>

					<p>제 3 조 (관계법령의 적용)</p>
					<ul>
						<li>본 약관은 신의성실의 원칙에 따라 공정하게 적용하며, 본 약관에 명시되지 아니한 사항에 대하여는 관계법령 또는 상관례에 따릅니다.</li>
					</ul>

					<p>제 4 조 (서비스의 내용)</p>
					<ul>
						<li>회사가 제공하는 서비스는 아래와 같습니다.</li>
					</ul>
					<div class="table-area">
						<table>
							<colgroup>
								<col width="50%" />
								<col width="auto" />
							</colgroup>
							<thead>
								<tr>
									<th>서비스 명</th>
									<th>서비스 내용</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>캐스퍼 시승 서비스</td>
									<td>시승차량에 장착된 블루링크 단말을 통해 시승차량 이동 내역 및 실시간 위치정보 수집</td>
								</tr>
							</tbody>
						</table>
					</div>

					<p>제 5 조 (서비스 이용요금) </p>
					<ol>
						<li>①회사가 제공하는 서비스는 기본적으로 무료입니다. 단, 별도의 유료 서비스의 경우 해당 서비스에 명시된 요금을 지불하여야 사용 가능합니다.</li>
						<li>②회사는 유료 서비스 이용요금을 회사와 계약한 전자지불업체에서 정한 방법에 의하거나 회사가 정한 청구서에 합산하여 청구할 수 있습니다.</li>
						<li>③유료서비스 이용을 통하여 결제된 대금에 대한 취소 및 환불은 회사의 결제 이용약관 등 관계법에 따릅니다.</li>
						<li>④회원의 개인정보도용 및 결제사기로 인한 환불요청 또는 결제자의 개인정보 요구는 법률이 정한 경우 외에는 거절될 수 있습니다.</li>
						<li>⑤무선 서비스 이용 시 발생하는 데이터 통신료는 별도이며 가입한 각 이동통신사의 정책에 따릅니다.</li>
						<li>⑥MMS 등으로 게시물을 등록할 경우 발생하는 요금은 이동통신사의 정책에 따릅니다.</li>
					</ol>

					<p>제 6 조 (서비스내용변경 통지 등)</p>
					<ol>
						<li
							>①회사가 서비스 내용을 변경하거나 종료하는 경우 회사는 회원의 등록된 전자우편 주소로 이메일을 통하여 서비스 내용의 변경 사항 또는 종료를 통지할 수
							있습니다.
						</li>
						<li>②①항의 경우 불특정 다수인을 상대로 통지를 함에 있어서는 웹사이트 등 기타 회사의 공지사항을 통하여 회원들에게 통지할 수 있습니다.</li>
					</ol>

					<p>제 7 조 (서비스이용의 제한 및 중지)</p>
					<ol>
						<li
							>①회사는 아래 각 호의 1에 해당하는 사유가 발생한 경우에는 회원의 서비스 이용을 제한하거나 중지시킬 수 있습니다.
							<ol>
								<li>1. 회원이 회사 서비스의 운영을 고의 또는 중과실로 방해하는 경우</li>
								<li>2. 서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우</li>
								<li>3. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</li>
								<li>4. 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 때</li>
								<li>5. 기타 중대한 사유로 인하여 회사가 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우</li>
							</ol>
						</li>
						<li>②회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및 제한기간 등을 회원에게 알려야 합니다.</li>
					</ol>

					<p>제 8 조 (개인위치정보의 이용 또는 제공)</p>
					<ol>
						<li>①회사는 개인위치정보를 이용하여 서비스를 제공하고자 하는 경우에는 미리 이용약관에 명시한 후 개인위치정보주체의 동의를 얻어야 합니다.</li>
						<li
							>②회원 및 법정대리인의 권리와 그 행사방법은 제소 당시의 이용자의 주소에 의하며, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다.
							다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.</li
						>
						<li
							>③회사는 타사업자 또는 이용 고객과의 요금정산 및 민원처리를 위해 위치정보 이용·제공․사실 확인자료를 자동 기록·보존하며, 해당 자료는 6개월간
							보관합니다.</li
						>
						<li
							>④회사는 개인위치정보를 회원이 지정하는 제3자에게 제공하는 경우에는 개인위치정보를 수집한 당해 통신 단말장치로 매회 회원에게 제공받는 자, 제공일시
							및 제공목적을 즉시 통보합니다. 단, 아래 각 호의 1에 해당하는 경우에는 회원이 미리 특정하여 지정한 통신 단말장치 또는 전자우편주소로 통보합니다.
							<ol>
								<li>1. 개인위치정보를 수집한 당해 통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지 아니한 경우</li>
								<li>2. 회원이 온라인 게시 등의 방법으로 통보할 것을 미리 요청한 경우</li>
							</ol>
						</li>
					</ol>

					<p>제 9 조 (개인위치정보주체의 권리)</p>
					<ol>
						<li
							>①회원은 회사에 대하여 언제든지 개인위치정보를 이용한 위치기반서비스 제공 및 개인위치정보의 제3자 제공에 대한 동의의 전부 또는 일부를 철회할 수
							있습니다. 이 경우 회사는 수집한 개인위치정보 및 위치정보 이용, 제공사실 확인자료를 파기합니다.</li
						>
						<li
							>②회원은 회사에 대하여 언제든지 개인위치정보의 수집, 이용 또는 제공의 일시적인 중지를 요구할 수 있으며, 회사는 이를 거절할 수 없고 이를 위한
							기술적 수단을 갖추고 있습니다.</li
						>
						<li
							>③회원은 회사에 대하여 아래 각 호의 자료에 대한 열람 또는 고지를 요구할 수 있고, 당해 자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다. 이
							경우 회사는 정당한 사유 없이 회원의 요구를 거절할 수 없습니다.
							<ol>
								<li>1. 본인에 대한 위치정보 수집, 이용, 제공사실 확인자료</li>
								<li>2. 본인의 개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률 또는 다른 법률 규정에 의하여 제3자에게 제공된 이유 및 내용</li>
							</ol>
						</li>
						<li>④회원은 제1항 내지 제3항의 권리행사를 위해 회사의 소정의 절차를 통해 요구할 수 있습니다.</li>
					</ol>

					<p>제 10 조 (법정대리인의 권리) </p>
					<ol>
						<li
							>①회사는 14세 미만의 회원에 대해서는 개인위치정보를 이용한 위치기반서비스 제공 및 개인위치정보의 제3자 제공에 대한 동의를 당해 회원과 당해 회원의
							법정대리인으로부터 동의를 받아야 합니다. 이 경우 법정대리인은 제9조에 의한 회원의 권리를 모두 가집니다.</li
						>
						<li
							>②회사는 14세 미만의 아동의 개인위치정보 또는 위치정보 이용․제공사실 확인자료를 이용약관에 명시 또는 고지한 범위를 넘어 이용하거나 제3자에게
							제공하고자 하는 경우에는 14세미만의 아동과 그 법정대리인의 동의를 받아야 합니다. 단, 아래의 경우는 제외합니다.
							<ol>
								<li>1. 위치정보 및 위치기반서비스 제공에 따른 요금정산을 위하여 위치정보 이용, 제공사실 확인자료가 필요한 경우</li>
								<li>2. 통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우</li>
							</ol>
						</li>
					</ol>

					<p>제 11 조 (8세 이하의 아동 등의 보호의무자의 권리) </p>
					<ol>
						<li
							>①회사는 아래의 경우에 해당하는 자(이하 “8세 이하의 아동”등이라 한다)의 보호의무자가 8세 이하의 아동 등의 생명 또는 신체보호를 위하여
							개인위치정보의 이용 또는 제공에 동의하는 경우에는 본인의 동의가 있는 것으로 봅니다.
							<ol>
								<li>1. 8세 이하의 아동</li>
								<li>2. 금치산자</li>
								<li
									>3. 장애인복지법 제2조제2항제2호의 규정에 의한 정신적 장애를 가진 자로서 장애인고용촉진및직업재활법 제2조제2호의 규정에 의한 중증장애인에
									해당하는 자(장애인복지법 제29조의 규정에 의하여 장애인등록을 한 자에 한한다)</li
								>
							</ol>
						</li>
						<li
							>②8세 이하의 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 이용 또는 제공에 동의를 하고자 하는 보호의무자는 서면동의서에 보호의무자임을
							증명하는 서면을 첨부하여 회사에 제출하여야 합니다.</li
						>
						<li>③보호의무자는 8세 이하의 아동 등의 개인위치정보 이용 또는 제공에 동의하는 경우 개인위치정보주체 권리의 전부를 행사할 수 있습니다.</li>
					</ol>

					<p>제 12 조 (위치정보관리책임자의 지정)</p>
					<ol>
						<li
							>①회사는 위치정보를 적절히 관리․보호하고 개인위치정보주체의 불만을 원활히 처리할 수 있도록 실질적인 책임을 질 수 있는 지위에 있는 자를
							위치정보관리책임자로 지정해 운영합니다.</li
						>
						<li>②위치정보관리책임자는 위치기반서비스를 제공하는 부서의 부서장으로서 구체적인 사항은 본 약관의 부칙에 따릅니다.</li>
					</ol>

					<p>제 13 조 (손해배상) </p>
					<ol>
						<li
							>①회사가 위치정보의 보호 및 이용 등에 관한 법률 제15조 내지 제26조의 규정을 위반한 행위로 회원에게 손해가 발생한 경우 회원은 회사에 대하여
							손해배상 청구를 할 수 있습니다. 이 경우 회사는 고의, 과실이 없음을 입증하지 못하는 경우 책임을 면할 수 없습니다.</li
						>
						<li
							>②회원이 본 약관의 규정을 위반하여 회사에 손해가 발생한 경우 회사는 회원에 대하여 손해배상을 청구할 수 있습니다. 이 경우 회원은 고의, 과실이
							없음을 입증하지 못하는 경우 책임을 면할 수 없습니다.</li
						>
					</ol>

					<p>제 14 조 (면책) </p>
					<ol>
						<li
							>①회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여 회원에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.
							<ol>
								<li>1. 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우</li>
								<li>2. 서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의 고의적인 서비스 방해가 있는 경우</li>
								<li>3. 회원의 귀책사유로 서비스 이용에 장애가 있는 경우</li>
								<li>4. 제1호 내지 제3호를 제외한 기타 회사의 고의∙과실이 없는 사유로 인한 경우</li>
							</ol>
						</li>
						<li
							>②회사는 서비스 및 서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성 등에 대해서는 보증을 하지 않으며 이로 인해 발생한 회원의 손해에 대하여는
							책임을 부담하지 아니합니다.</li
						>
					</ol>

					<p>제 15 조 (규정의 준용)</p>
					<ol>
						<li>①본 약관은 대한민국법령에 의하여 규정되고 이행됩니다.</li>
						<li>②본 약관에 규정되지 않은 사항에 대해서는 관련법령 및 상관습에 의합니다.</li>
					</ol>

					<p>제 16 조 (분쟁의 조정 및 기타) </p>
					<ol>
						<li
							>①회사는 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 위치정보의 보호 및 이용 등에 관한 법률
							제28조의 규정에 의한 방송통신위원회에 재정을 신청할 수 있습니다.</li
						>
						<li
							>②회사 또는 고객은 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 개인정보보호법 제43조의 규정에
							의한 개인정보분쟁조정위원회에 조정을 신청할 수 있습니다.</li
						>
					</ol>

					<p>제 17 조 (회사의 연락처)</p>
					<p>회사의 상호 및 주소 등은 다음과 같습니다.</p>
					<ol>
						<li
							><div class="f-box"
								><span class="label">1. <span class="w-fix">상호</span> :</span> <span class="auto">현대자동차㈜</span></div
							></li
						>
						<li
							><div class="f-box"
								><span class="label">2. <span class="w-fix">대표자</span> :</span> <span class="auto">장재훈</span></div
							></li
						>
						<li
							><div class="f-box"
								><span class="label">3. <span class="w-fix">주소</span> :</span> <span class="auto">대한민국 서울특별시 서초구 헌릉로12(양재동)</span></div
							></li
						>
						<li
							><div class="f-box"
								><span class="label">4. <span class="w-fix">대표전화</span> :</span> <span class="auto">캐스퍼 고객센터 080-500-6000</span></div
							></li
						>
					</ol>

					<p class="contents-head t-center bold">부 칙</p>
					<ol>
						<li>제1조 (시행일) 이 약관은 2022년 04월 18일부터 시행한다.</li>
						<li
							>제2조 위치정보관리책임자는 2022년 04월을 기준으로 다음과 같이 지정합니다.
							<ol>
								<li
									><div class="f-box"
										><span class="label">1. <span class="w-fix">소속</span> :</span> <span class="auto">판촉전략실 SI Center</span></div
									></li
								>
								<li
									><div class="f-box"
										><span class="label">2. <span class="w-fix">연락처</span> :</span> <span class="auto">조인근 책임매니저</span></div
									></li
								>
							</ol>
						</li>
					</ol>
				</div>
			</template>
		</v-popup>

		<!-- (필수) 개인정보 수집 및 이용안내 -->
		<v-popup
			:width="'550px'"
			:visible="privacyInfoPop"
			:dim-click="false"
			:footer="['confirm']"
			@confirm="privacyInfoPop = false"
			@close="
				check3 = false
				privacyInfoPop = false
			"
		>
			<template slot="header">
				<div class="title">(필수) 개인정보 수집 및 이용안내</div>
			</template>
			<template slot="body">
				<p class="contents-head">개인정보 수집 및 이용 목적</p>
				<ul class="bullet-list">
					<li>시승서비스 제공, 시승차량 사고 발생 시 보험처리 등</li>
					<li>사고 대응, 시승차량 도난 방지 및 운행 관리, 고객 불만</li>
					<li>민원사항 처리, 분쟁 발생 시 대응, 소비자 의견 조사, 고객 관리 서비스 제공</li>
				</ul>

				<p class="contents-head">개인정보의 수집 항목</p>
				<ul class="bullet-list">
					<li>
						고객성명, 휴대전화번호, 생년월일, 성별, 시승정보(시승차종, 차량번호, 시승일시), 시승차량 이동 내역 및 실시간 위치정보
					</li>
				</ul>

				<p class="contents-head">개인정보의 보유 및 이용기간</p>
				<ul class="bullet-list">
					<li>시승일 기준 2년</li>
				</ul>

				<div class="notice">
					<div class="bullet-star">
						고객님은 위의 개인정보 수집 이용에 대한 동의를 거부하실 수 있습니다.
						<br />
						그러나, 동의 거부 시 시승서비스 이용이 불가합니다.
					</div>
				</div>
			</template>
		</v-popup>

		<!-- (선택)차량구입관련상담및각종정보제공안내 -->
		<v-popup
			:width="'550px'"
			:visible="carBuyPop"
			:dim-click="false"
			:footer="['nonAgree', 'confirm']"
			@nonAgree="nonAgree"
			@confirm="confirm"
			@close="
				check4 = false
				carBuyPop = false
			"
		>
			<template slot="header">
				<div class="title">(선택) 차량구입 관련 상담 및 각종 정보제공 안내</div>
			</template>
			<template slot="body">
				<p class="contents-head">정보 수집 목적</p>
				<ul class="bullet-list">
					<li>차량구입 안내 및 제품/서비스/이벤트 관련 정보 전송 등</li>
					<li>마케팅 &middot; 홍보 목적 활용</li>
				</ul>

				<p class="contents-head">정보 수집 항목</p>
				<ul class="bullet-list">
					<li>고객성명, 휴대전화번호, 생년월일, 성별, 주소</li>
				</ul>

				<p class="contents-head">정보 수집 목적</p>
				<ul class="bullet-list">
					<li>시승일 기준 2년간</li>
				</ul>

				<div class="notice">
					<div class="bullet-star">
						고객님은 위의 마케팅 활용 및 광고성 정보 전송에 대한 동의를 거부하실 수 있습니다. 동의를 거부하시더라도 시승서비스 이용에는 제한이 없으나, 차량구입
						정보 등의 안내 &middot; 제공이 제한됩니다.
					</div>
				</div>
			</template>
		</v-popup>
	</div>
</template>

<script>
//import { mapGetters } from 'vuex'
export default {
	props: {
		isOptionsShow: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			visible: {
				testDrive: false
			},
			testDrivePop: false,
			positionServicePop: false,
			privacyInfoPop: false,
			carBuyPop: false,

			check1: false,
			check2: false,
			check3: false,
			check4: false
		}
	},
	// computed: {
	// 	...mapGetters({
	// 		userInfo: 'userInfo'
	// 	})
	// },
	mounted() {
		this.$nextTick(() => {
			let obj = {
				page: {
					spa: {
						pageName: '차량:시승 신청:step5',
						siteSection: '차량',
						siteSubsection: '시승 신청'
					}
				}
			}

			window._spaData(obj)
		})
	},
	methods: {
		reset() {
			this.check1 = false
			this.check2 = false
			this.check3 = false
			this.check4 = false
		},
		formatPhoneNumber(number) {
			return number
				? number
						.replace(/[^0-9]/g, '')
						.replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/, '$1-$2-$3')
						.replace('--', '-')
				: '000-0000-0000'
		},
		copyChk(e, index) {
			if (index === 1) {
				if (e === true) this.testDrivePop = true
			} else if (index === 2) {
				if (e === true) this.positionServicePop = true
			} else if (index === 3) {
				if (e === true) this.privacyInfoPop = true
			} else if (index === 4) {
				if (e === true) this.carBuyPop = true
			}
		},
		nonAgree() {
			this.check4 = false
			this.carBuyPop = false
		},
		confirm() {
			this.check4 = true
			this.carBuyPop = false
		},
		async setSelectedCheck(selectedStepCheck) {
			this.check1 = selectedStepCheck.step5Check1
			this.check2 = selectedStepCheck.step5Check2
			this.check3 = selectedStepCheck.step5Check3
			this.check4 = selectedStepCheck.step5Check4
		}
	}
}
</script>
