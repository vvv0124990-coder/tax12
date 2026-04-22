export type NavLink = {
  id: string;
  label: string;
};

export type GuideHero = {
  tag: string;
  titleHtml: string;
  description: string;
  pills: string[];
};

export type SidebarLawLink = {
  code: string;
  label: string;
  url: string;
};

export type GuidePanel = {
  title?: string;
  lawLabel?: string;
  lawUrl?: string;
  tone?: "default" | "soft-blue" | "soft-violet" | "soft-gold" | "soft-green";
  contentHtml: string;
};

export type GuideSection = {
  id: string;
  number: string;
  navLabel: string;
  title: string;
  panels: GuidePanel[];
};

export type LawCard = {
  id: string;
  code: string;
  title: string;
  description: string;
  buttonLabel: string;
  url: string;
};

export type ReviewFormLink = {
  title: string;
  downloadPath: string;
  downloadFileName: string;
  officialUrl: string;
  officialLabel: string;
  note?: string;
};

export type DisclaimerItem = {
  number: string;
  title: string;
  description: string;
};

export type GuidePageData = {
  brand: string;
  brandAccent: string;
  navLinks: NavLink[];
  hero: GuideHero;
  alertHtml: string;
  sidebarTitle: string;
  sidebarLawTitle: string;
  sidebarLawLinks: SidebarLawLink[];
  sections: GuideSection[];
  lawSectionTitle: string;
  lawSectionSubtitle: string;
  lawCards: LawCard[];
  reviewFormsTitle: string;
  reviewFormsDescription: string;
  reviewFormsReferenceLabel: string;
  reviewFormsReferenceUrl: string;
  reviewFormsReferenceNote: string;
  reviewForms: ReviewFormLink[];
  disclaimerTitle: string;
  disclaimerDescription: string;
  disclaimers: DisclaimerItem[];
  footerLines: string[];
};

const LAW_URLS = {
  corp116: "https://www.law.go.kr/LSW/lsLinkCommonInfo.do?ancYnChk=&chrClsCd=&lsJoLnkSeq=1022606821",
  sole1602: "https://www.law.go.kr/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1001064038",
  corpPenalty: "https://law.go.kr/LSW/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1013461245",
  solePenalty: "https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1026498351",
  corpRule79: "https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=&lspttninfSeq=59540",
  corp13: "https://www.law.go.kr/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=900179222",
  corp60: "https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1026613261",
  corp25: "https://www.law.go.kr/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=900181049",
  ntsTaxLaw: "https://taxlaw.nts.go.kr/index.do",
  corpDecree158: "https://law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1022760303",
  corpAppendix77Pdf: "https://www.law.go.kr/LSW/flDownload.do?bylClsCd=110202&flSeq=160258977&gubun=",
  ntsReferenceRoom: "https://www.nts.go.kr/nts/na/ntt/selectNttList.do?bbsId=30669&mi=2386",
  ntsSearch: "https://g.nts.go.kr/search/search.jsp",
} as const;

export const GUIDE_PAGE_DATA: GuidePageData = {
  brand: "지출증명서류",
  brandAccent: "실무 가이드",
  navLinks: [
    { id: "sec1", label: "개요" },
    { id: "sec2", label: "전제조건" },
    { id: "sec3", label: "정규증빙 범위" },
    { id: "sec4", label: "지출기준" },
    { id: "sec5", label: "보관의무" },
    { id: "sec6", label: "미수취시 흐름" },
    { id: "sec7", label: "수취 특례" },
    { id: "sec8", label: "합계표" },
    { id: "law", label: "법령 링크" },
  ],
  hero: {
    tag: "세무 실무 가이드",
    titleHtml: "지출증명서류<br><em>완전 가이드</em>",
    description:
      "법인세법 제116조 및 소득세법 제160조의2에 근거한 지출증명서류 수취·보관 의무, 가산세 구조, 수취 특례까지 실무에서 꼭 알아야 할 모든 내용을 정리합니다.",
    pills: ["법인세법 §116", "소득세법 §160의2", "법인세법시행규칙 §79", "가산세 2%", "5년 보관의무"],
  },
  alertHtml: `
    일정 사업자와의 거래 <strong>건당 3만원 초과</strong> 지출 시 법정지출증명서류(세금계산서·계산서·신용카드매출전표·현금영수증 등)를 반드시 수취해야 합니다.
    미수취 시 <strong>공급대가의 2% 가산세</strong>가 법인세(개인사업자는 종합소득세) 신고 시 부과됩니다.
  `,
  sidebarTitle: "목차",
  sidebarLawTitle: "법령 바로가기",
  sidebarLawLinks: [
    {
      code: "법인세법 §116",
      label: "지출증명서류의 수취 및 보관",
      url: LAW_URLS.corp116,
    },
    {
      code: "소득세법 §160의2",
      label: "경비등의 지출증명 수취 및 보관",
      url: LAW_URLS.sole1602,
    },
    {
      code: "법인세법 §76",
      label: "가산세 (증명서류 수취 불성실)",
      url: LAW_URLS.corpPenalty,
    },
    {
      code: "소득세법 §81의6",
      label: "증명서류 수취 불성실 가산세",
      url: LAW_URLS.solePenalty,
    },
    {
      code: "법인세법시행규칙 §79",
      label: "지출증명서류 수취 특례",
      url: LAW_URLS.corpRule79,
    },
    {
      code: "법인세법 §13①①",
      label: "이월결손금 (보관기간 연장 근거)",
      url: LAW_URLS.corp13,
    },
    {
      code: "국세청",
      label: "국세법령정보시스템",
      url: LAW_URLS.ntsTaxLaw,
    },
  ],
  sections: [
    {
      id: "sec1",
      number: "01",
      navLabel: "개요 및 핵심 원칙",
      title: "개요 및 핵심 원칙",
      panels: [
        {
          tone: "default",
          contentHtml: `
            <div class="intro-box">
              <p>
                법인 또는 개인사업자가 사업과 관련하여 재화·용역을 공급받고 대가를 지급할 때,
                <span class="hl">건당 거래금액이 3만원을 초과</span>하는 경우에는 반드시
                <span class="hl">법정지출증명서류</span>(세금계산서·계산서·신용카드매출전표·현금영수증 등)를 수취·보관해야 합니다.
              </p>
              <p>
                법정지출증명서류를 수취하지 못한 경우에는 <span class="hl">지출증명서류 수취 불성실 가산세(공급대가의 2%)</span>를
                법인세 과세표준신고(개인사업자는 종합소득세 신고) 시 납부해야 합니다.
              </p>
              <p>
                지출증명서류를 수취하지 않은 개인사업자는<span class="hl-blue">「영수증수취명세서」</span>를 작성하여 제출해야 하며 이를 제출하지 못한 경우에는
                <span class="hl">영수증수취명세서 미제출 가산세(지급금액의 1%)</span>를 종합소득세 과세표준신고시 납부해야 합니다.
              </p>
              <p>
                지출증명서류를 수취하지 아니한 직전 사업연도 수입금액 <span class="hl">30억 원 이상인 법인</span>은
                <span class="hl-blue">「지출증명서류합계표」</span>를 별도로 작성하여 보관해야 합니다.
              </p>
            </div>
          `,
        },
        {
          tone: "soft-blue",
          contentHtml: `
            <div class="info-box">
              <strong>근거 법령</strong><br>
              법인: <strong>법인세법 제116조</strong> (지출증명서류의 수취 및 보관) |
              개인사업자: <strong>소득세법 제160조의2</strong> (경비등의 지출증명 수취 및 보관) |
              가산세: <strong>법인세법 제76조</strong>, <strong>소득세법 제81조의6</strong>
            </div>
          `,
        },
      ],
    },
    {
      id: "sec2",
      number: "02",
      navLabel: "법정 증빙 수취 전제조건",
      title: "법정 증빙 수취를 위한 전제조건",
      panels: [
        {
          title: "(1) 법정 증빙 수취 의무가 발생하는 4가지 요건",
          lawLabel: "법인세법 §116 →",
          lawUrl: LAW_URLS.corp116,
          tone: "default",
          contentHtml: `
            <p>다음 4가지 조건을 모두 충족할 때 법정지출증명서류 수취 의무가 발생합니다.</p>
            <ul class="cond-list">
              <li>경비 사용자가 반드시 <strong>법인 또는 개인사업자</strong>여야 한다.</li>
              <li><strong>사업과 관련하여</strong> 지출하여야 한다.</li>
              <li><strong>재화나 용역을 구입</strong>하여야 한다.</li>
              <li>거래 상대방 또한 <strong>법인 또는 개인사업자</strong>여야 한다. (개인 간 거래는 수취 의무 없음)</li>
            </ul>
          `,
        },
      ],
    },
    {
      id: "sec3",
      number: "03",
      navLabel: "정규지출증빙 범위",
      title: "정규지출증빙의 범위",
      panels: [
        {
          title: "(2) 인정되는 법정(정규) 지출증명서류 8가지",
          lawLabel: "법인세법 §116②→",
          lawUrl: LAW_URLS.corp116,
          tone: "default",
          contentHtml: `
            <div class="doc-grid">
              <div class="doc-card">
                <span class="doc-num">01</span>
                <div>
                  <div class="doc-name">세금계산서</div>
                  <div class="doc-note">매입자발행 세금계산서 포함</div>
                </div>
              </div>
              <div class="doc-card">
                <span class="doc-num">02</span>
                <div>
                  <div class="doc-name">계산서</div>
                  <div class="doc-note">매입자발행 계산서 포함 / 면세 물품</div>
                </div>
              </div>
              <div class="doc-card">
                <span class="doc-num">03</span>
                <div>
                  <div class="doc-name">신용카드매출전표</div>
                  <div class="doc-note">법인카드 + 임직원 카드 모두 인정</div>
                </div>
              </div>
              <div class="doc-card">
                <span class="doc-num">04</span>
                <div>
                  <div class="doc-name">현금영수증</div>
                  <div class="doc-note">지출증빙용으로 발급받은 것</div>
                </div>
              </div>
              <div class="doc-card">
                <span class="doc-num">05</span>
                <div>
                  <div class="doc-name">직불카드 (체크카드)</div>
                  <div class="doc-note">사업 관련 지출 시</div>
                </div>
              </div>
              <div class="doc-card">
                <span class="doc-num">06</span>
                <div>
                  <div class="doc-name">기명식선불카드</div>
                  <div class="doc-note">기프트카드 등</div>
                </div>
              </div>
              <div class="doc-card">
                <span class="doc-num">07</span>
                <div>
                  <div class="doc-name">복지카드</div>
                  <div class="doc-note">사내 복지포인트 카드</div>
                </div>
              </div>
              <div class="doc-card">
                <span class="doc-num">08</span>
                <div>
                  <div class="doc-name">전자화폐</div>
                  <div class="doc-note">기명식 전자화폐</div>
                </div>
              </div>
            </div>
            <div class="doc-footnote">
              <strong>신용카드매출전표</strong>는 법인카드 뿐만 아니라 <strong>임직원(종업원) 개인 명의 카드</strong>도 인정됩니다.
              단, <strong>접대비(기업업무추진비)</strong>의 경우에는 반드시 <strong>법인 명의 카드</strong>만 인정됩니다.
            </div>
          `,
        },
      ],
    },
    {
      id: "sec4",
      number: "04",
      navLabel: "지출기준 및 처리",
      title: "지출기준 및 처리 (제재조치)",
      panels: [
        {
          title: "(3) 비용 유형별 법정증빙 수취 기준 및 제재",
          lawLabel: "법인세법 §76 →",
          lawUrl: LAW_URLS.corpPenalty,
          tone: "default",
          contentHtml: `
            <table class="expense-table">
              <thead>
                <tr>
                  <th style="width:22%">구분</th>
                  <th style="width:45%">수취 기준</th>
                  <th style="width:33%">제재조치</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="cat-label">일반경비</span>
                    <span class="cat-sub">(자산취득 포함)</span>
                  </td>
                  <td>
                    건당 거래금액이 <span class="hl-red">3만원 초과</span>하는 경우<br>
                    → 법정지출증명서류 수취 의무
                  </td>
                  <td>
                    <span class="tag-green">손금 인정</span><br>
                    단, <span class="hl-red">지출증명서류 수취 불성실 가산세 2%</span> 적용<br>
                    <span style="font-size:0.78rem;color:var(--muted)">* 법인세 산출세액 없어도 부과</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="cat-label">접대비</span>
                    <span class="cat-sub">(기업업무추진비)</span>
                  </td>
                  <td>
                    1회 접대 지출액이 <span class="hl-red">3만원 초과</span>하는 경우<br>
                    (경조사비는 <span class="hl-red">20만원 초과</span>)<br>
                    → 법정지출증명서류 수취 의무<br>
                    <span style="font-size:0.78rem;color:var(--blue)">※ 반드시 법인 명의 카드 사용</span>
                  </td>
                  <td>
                    <span class="tag-red">손금 불산입</span><br>
                    가산세 부과는 없음<br>
                    <span style="font-size:0.78rem;color:var(--muted)">(손금 자체가 불인정됨)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          `,
        },
      ],
    },
    {
      id: "sec5",
      number: "05",
      navLabel: "보관의무 (5년 + 예외)",
      title: "정규지출증빙 보관의무",
      panels: [
        {
          title: "(4) 원칙: 5년간 보관 (현금영수증은 보관대상 제외)",
          lawLabel: "법인세법 §116① →",
          lawUrl: LAW_URLS.corp116,
          tone: "default",
          contentHtml: `
            <p>
              법인 또는 개인사업자는 사업과 관련된 모든 거래의 증명서류를 작성하거나 받아서
              <strong>법인세(소득세) 신고기한이 지난 날부터 5년간</strong> 보관해야 합니다.
              단, 현금영수증은 국세청에 전산으로 기록되므로 별도 보관대상에서 제외됩니다.
            </p>
          `,
        },
        {
          tone: "soft-violet",
          contentHtml: `
            <div class="ptc">
              <div class="ptc-head">
                <span class="ptc-badge">실무 Point to Check</span>
                <span class="ptc-title">예외적으로 보관 의무기간이 증가하는 경우</span>
              </div>
              <p>
                <strong>근거: 법인세법 제13조 제1항 제1호</strong><br>
                각 사업연도 개시일 전 <strong>15년 이내</strong>에 개시한 사업연도에서 발생한 결손금으로서,
                그 후의 각 사업연도 과세표준 계산 시 공제되지 않은 금액은 이월결손금으로 공제가 가능합니다.
              </p>
              <p>
                이와 같이 <strong>15년이 경과한 이월결손금을 공제</strong>받는 경우에는,
                공제받은 사업연도의 신고기간부터 <strong>1년이 되는 날까지</strong> 보관해야 합니다.
              </p>
              <div class="formula">
                실질 보관의무 기간 = 11년 + 과세표준 신고기간<br>
                (법인세법 3개월 / 소득세법 6개월)
              </div>
              <p style="font-size:0.82rem;color:#5a3060">
                * 일반적인 경우 5년이지만, 이월결손금이 있는 법인은 최대 11년 이상 보관이 필요합니다.
              </p>
            </div>
          `,
        },
      ],
    },
    {
      id: "sec6",
      number: "06",
      navLabel: "미수취시 처리 흐름도",
      title: "미수취시 처리 흐름도 및 가산세 구조",
      panels: [
        {
          title: "건당 3만원 초과 거래 시 의사결정 흐름",
          lawLabel: "법인세법 §76 →",
          lawUrl: LAW_URLS.corpPenalty,
          tone: "default",
          contentHtml: `
            <div class="flowchart-wrap">
              <div class="flow-root">
                <div class="flow-q">
                  건당 3만원 초과 거래 시,<br>법정지출증명서류(=정규증빙)를 수취하였는가?<br>
                  <span style="font-size:0.75rem;font-weight:400;color:#aaa">(기업업무추진비 외 일반경비 기준)</span>
                </div>
              </div>
              <div class="flow-branches">
                <div class="flow-branch">
                  <div class="flow-branch-label yes">▲ YES (수취함)</div>
                  <div class="flow-result ok">
                    <strong>손금 인정 + 가산세 없음</strong>
                    정상 처리됩니다. 수취한 증빙을 5년간 보관하십시오.
                  </div>
                </div>
                <div class="flow-branch">
                  <div class="flow-branch-label no">▲ NO (미수취)</div>
                  <div class="flow-result warn">
                    <strong>손금은 인정, 가산세 부과</strong>
                    공급대가의 <strong>2%</strong> 지출증명서류 수취 불성실 가산세 납부<br>
                    <span style="font-size:0.8rem">(법인세 산출세액 없어도 부과됨)</span>
                  </div>
                  <div class="flow-sub">
                    <div class="flow-q2">영수증수취명세서 제출의무가 있는가? (개인사업자 해당)</div>
                    <div class="flow-sub-branches">
                      <div class="flow-sub-result ok2">
                        <strong>제출 O (NO 가산세)</strong>
                        영수증수취명세서를 제출했다면 1% 추가 가산세 없음
                      </div>
                      <div class="flow-sub-result bad">
                        <strong>미제출 → 추가 1% 가산세</strong>
                        개인사업자는 영수증수취명세서 미제출 시 1% 추가 가산세 부담
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `,
        },
        {
          title: "가산세 종류 정리",
          lawLabel: "소득세법 §81의6 →",
          lawUrl: LAW_URLS.solePenalty,
          tone: "default",
          contentHtml: `
            <table class="gasan-table">
              <thead>
                <tr>
                  <th>가산세 종류</th>
                  <th>세율</th>
                  <th>적용 대상</th>
                  <th>관련 법령</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>지출증명서류 수취 불성실 가산세</td>
                  <td><strong class="hl-red">2%</strong><br><span style="font-size:0.76rem">(공급대가 기준)</span></td>
                  <td>법인 / 개인사업자<br>(미수취·허위 수취)</td>
                  <td>법인세법 §76<br>소득세법 §81의6</td>
                </tr>
                <tr>
                  <td>영수증수취명세서 미제출 가산세</td>
                  <td><strong class="hl-red">1%</strong><br><span style="font-size:0.76rem">(미제출 금액 기준)</span></td>
                  <td>개인사업자만 해당<br>(법인사업자 제출의무 없음)</td>
                  <td>소득세법 §81의6</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          tone: "soft-gold",
          contentHtml: `
            <div class="exempt-persons">
              <h4>가산세 적용 배제 대상 개인사업자 (4가지)</h4>
              <p style="font-size:0.84rem;color:#5a3e00;margin-bottom:12px">
                아래 4가지 중 하나에 해당하는 개인사업자는 <strong>지출증명서류 수취불성실 가산세(2%)</strong> 및
                <strong>영수증수취명세서 미제출 가산세(1%)</strong>를 모두 면제받습니다.
              </p>
              <ul>
                <li>해당 연도 <strong>신규사업자</strong></li>
                <li>전년도 사업소득 수입금액 <strong>4,800만원 미달</strong> 사업자</li>
                <li>연말정산하는 <strong>보험모집인, 방문판매원, 음료배달원</strong></li>
                <li><strong>추계신고자</strong> (단순경비율 적용)</li>
              </ul>
            </div>
          `,
        },
        {
          tone: "soft-violet",
          contentHtml: `
            <div class="ptc" style="margin-top:20px">
              <div class="ptc-head">
                <span class="ptc-badge">주의</span>
                <span class="ptc-title">공급가액은 손금이나 부가세 매입세액은 손금 불인정되는 경우</span>
              </div>
              <p>
                정규증빙 미수취 시 <strong>공급가액은 손금으로 인정</strong>될 수 있으나,
                아래 경우에는 <strong>부가가치세 매입세액이 손금으로 인정되지 않습니다.</strong>
                (부가가치세법상 의무 불이행 또는 업무무관이므로 사외유출로 처분. 이 경우 손금불인정 금액에 대해서는 별도 가산세 없음)
              </p>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;margin-top:8px">
                <li style="font-size:0.86rem;color:#3a1f5a;padding:7px 12px;background:rgba(91,45,142,0.07);border-radius:3px">① 사업자등록신청 전 매입세액</li>
                <li style="font-size:0.86rem;color:#3a1f5a;padding:7px 12px;background:rgba(91,45,142,0.07);border-radius:3px">② 세금계산서 미수취·부실기재분 매입세액</li>
                <li style="font-size:0.86rem;color:#3a1f5a;padding:7px 12px;background:rgba(91,45,142,0.07);border-radius:3px">③ 매입처별 세금계산서 합계표 미제출·부실기재분 매입세액</li>
                <li style="font-size:0.86rem;color:#3a1f5a;padding:7px 12px;background:rgba(91,45,142,0.07);border-radius:3px">④ 업무무관 매입세액</li>
              </ul>
            </div>
          `,
        },
      ],
    },
    {
      id: "sec7",
      number: "07",
      navLabel: "지출증명서류 수취 특례",
      title: "지출증명서류 수취 특례",
      panels: [
        {
          tone: "default",
          contentHtml: `
            <div class="intro-box">
              <p>
                일정 사업자와의 거래 건당 3만원 초과 시 법정 지출증명서류를 수취해야 하나,
                <span class="hl-blue">법인세법 시행령 제158조 및 법인세법 시행규칙 제79조 「지출증명서류 수취 특례」</span>에 해당하는 경우에는
                법정 지출증명서류를 수취하지 않아도 됩니다.
                이 경우 두 가지 처리 방법으로 나뉩니다.
              </p>
            </div>
          `,
        },
        {
          title: "① 영수증수취명세서 제출 제외대상 거래 (35가지)",
          lawLabel: "법인세법 시행령 §158, 시행규칙 §79 →",
          lawUrl: LAW_URLS.corpDecree158,
          tone: "default",
          contentHtml: `
            <p style="margin-bottom:12px">
              아래 거래는 건당 3만원 초과라도 법정 지출증명서류를 수취하지 않아도 되며,
              영수증수취명세서 제출도 면제됩니다.
              따라서 <strong class="hl-red">지출증명서류 수취불성실 가산세(2%)</strong>와
              <strong class="hl-blue">영수증수취명세서 미제출 가산세(1%)</strong>는 면제됩니다.
            </p>
            <div class="exemption-grid">
              <div class="exemption-item"><span class="ex-num">15</span>읍·면 지역 소재</div>
              <div class="exemption-item"><span class="ex-num">16</span>금융·보험용역</div>
              <div class="exemption-item"><span class="ex-num">17</span>비거주자와의 거래</div>
              <div class="exemption-item"><span class="ex-num">18</span>농어민과의 거래</div>
              <div class="exemption-item"><span class="ex-num">19</span>국가 등과의 거래</div>
              <div class="exemption-item"><span class="ex-num">20</span>비영리 법인과의 거래</div>
              <div class="exemption-item"><span class="ex-num">21</span>원천징수대상 사업소득</div>
              <div class="exemption-item"><span class="ex-num">22</span>사업의 양도</div>
              <div class="exemption-item"><span class="ex-num">23</span>전기통신·방송용역</div>
              <div class="exemption-item"><span class="ex-num">24</span>국외에서의 공급</div>
              <div class="exemption-item"><span class="ex-num">25</span>공매·경매·수용</div>
              <div class="exemption-item"><span class="ex-num">26</span>부동산 구입</div>
              <div class="exemption-item"><span class="ex-num">27</span>주택임대용역</div>
              <div class="exemption-item"><span class="ex-num">28</span>택시운송용역</div>
              <div class="exemption-item"><span class="ex-num">29</span>전산판매 통합관리시스템 가입자와 거래</div>
              <div class="exemption-item"><span class="ex-num">30</span>항공기 항행 용역</div>
              <div class="exemption-item"><span class="ex-num">31</span>간주 임대료</div>
              <div class="exemption-item"><span class="ex-num">32</span>연체이자 지급분</div>
              <div class="exemption-item"><span class="ex-num">33</span>송금명세서 제출분</div>
              <div class="exemption-item"><span class="ex-num">34</span>접대비 필요경비 부인분</div>
              <div class="exemption-item"><span class="ex-num">35</span>유료도로 통행료</div>
            </div>
          `,
        },
        {
          title: "② 경비등 송금명세서 제출대상 거래 (10가지)",
          lawLabel: "법인세법 시행령 §158 →",
          lawUrl: LAW_URLS.corpDecree158,
          tone: "default",
          contentHtml: `
            <p style="margin-bottom:8px">
              공급받은 재화·용역의 거래금액을 <strong>금융기관을 통하여 지급</strong>하고,
              법인세 확정신고 시 송금사실을 기재한 <strong>「경비등의 송금명세서」</strong>를 납세지 관할세무서장에게 제출하는 경우
              법정증빙을 수취하지 않아도 인정됩니다.
            </p>
            <div class="info-box" style="margin-bottom:12px">
              <strong>주의:</strong> 금융기관을 통해 지급하지 않거나, 경비등 송금명세서를 미제출하는 경우에는
              <strong>지출증명서류 수취 불성실 가산세(2%)</strong>가 부과됩니다.
            </div>
            <div class="songeum-grid">
              <div class="songeum-item"><span class="ex-num">01</span>부가가치세법상 <strong>간이과세자</strong>로부터 부동산임대용역을 제공받은 경우</div>
              <div class="songeum-item"><span class="ex-num">02</span><strong>임가공용역</strong>을 공급받은 경우 (법인과의 거래는 제외)</div>
              <div class="songeum-item"><span class="ex-num">03</span><strong>운수업</strong>을 영위하는 자(간이과세자에 한함)가 제공하는 운송용역 (택시 운송용역 포함)</div>
              <div class="songeum-item"><span class="ex-num">04</span>간이과세자로부터 <strong>재활용폐자원</strong> 등 또는 재활용가능자원</div>
              <div class="songeum-item"><span class="ex-num">05</span>항공법에 의한 <strong>상업서류 송달용역</strong>을 제공받은 경우</div>
              <div class="songeum-item"><span class="ex-num">06</span>부동산 중개업법에 의한 <strong>중개업자에게 수수료</strong>를 지급하는 경우</div>
              <div class="songeum-item"><span class="ex-num">07</span>복권기금법에 의한 복권사업자가 <strong>복권을 판매하는 자에게 수수료</strong>를 지급하는 경우</div>
              <div class="songeum-item"><span class="ex-num">08</span><strong>전자상거래</strong> 등에서 소비자보호에 관한 법률에 따른 통신판매에 따라 재화·용역을 공급받은 경우</div>
              <div class="songeum-item"><span class="ex-num">09</span>기타 <strong>국세청장이 정하여 고시</strong>하는 경우</div>
              <div class="songeum-item"><span class="ex-num">10</span><strong>농어민으로부터 재화를 구입</strong>하는 경우 (접대비에 해당)</div>
            </div>
          `,
        },
      ],
    },
    {
      id: "sec8",
      number: "08",
      navLabel: "지출증명서류합계표",
      title: "지출증명서류합계표",
      panels: [
        {
          tone: "soft-green",
          contentHtml: `
            <div class="hapgye-box">
              <h4>지출증명서류합계표란?</h4>
              <p>
                <strong>직전 연도의 수입금액이 30억원 이상인 법인</strong>으로서,
                법인세법 제116조 제2항에 따른 지출증명서류를 수취해야 하는 거래
                (예: 유형자산·무형자산·재고자산·비용)가 발생한 경우 작성하여 보관해야 합니다.
              </p>
              <div class="formula2">
                대상: 직전 사업연도 수입금액 30억원 이상 법인<br>
                (사업연도 1년 미만인 경우: 30억원 × 해당 월수 ÷ 12)
              </div>
            </div>
          `,
        },
      ],
    },
  ],
  lawSectionTitle: "관련 법령 전체 링크",
  lawSectionSubtitle: "// 모든 링크는 국가법령정보센터(law.go.kr) 및 국세법령정보시스템으로 연결됩니다.",
  lawCards: [
    {
      id: "law-card-1",
      code: "법인세법 제116조",
      title: "지출증명서류의 수취 및 보관",
      description:
        "법인의 지출증명서류 수취·보관 의무의 핵심 근거 조문. 3만원 초과 거래 시 세금계산서 등 정규증빙 수취 의무를 규정합니다.",
      buttonLabel: "법령 보기 →",
      url: LAW_URLS.corp116,
    },
    {
      id: "law-card-2",
      code: "소득세법 제160조의2",
      title: "경비등의 지출증명 수취 및 보관",
      description:
        "개인사업자의 지출증명서류 수취·보관 의무 근거 조문. 사업소득·기타소득의 필요경비 계산 시 적용됩니다.",
      buttonLabel: "법령 보기 →",
      url: LAW_URLS.sole1602,
    },
    {
      id: "law-card-3",
      code: "법인세법 제76조",
      title: "가산세 (법인)",
      description:
        "법인이 지출증명서류 수취의무를 위반한 경우 공급대가의 2% 가산세를 부과하는 근거 조문.",
      buttonLabel: "법령 보기 →",
      url: LAW_URLS.corpPenalty,
    },
    {
      id: "law-card-4",
      code: "소득세법 제81조의6",
      title: "증명서류 수취 불성실 가산세 (개인)",
      description:
        "개인사업자의 지출증명서류 미수취·허위수취 시 2% 가산세, 영수증수취명세서 미제출 시 1% 추가 가산세 규정.",
      buttonLabel: "법령 보기 →",
      url: LAW_URLS.solePenalty,
    },
    {
      id: "law-card-5",
      code: "법인세법시행규칙 제79조",
      title: "지출증명서류 수취 특례",
      description:
        "3만원 초과 거래라도 법정증빙을 수취하지 않아도 되는 특례 거래 유형 35가지 및 송금명세서 대상 10가지 열거.",
      buttonLabel: "법령 보기 →",
      url: LAW_URLS.corpRule79,
    },
    {
      id: "law-card-6",
      code: "법인세법 제13조 제1항 제1호",
      title: "이월결손금 (보관기간 연장 근거)",
      description:
        "15년 이전 이월결손금 공제 시 지출증명서류 보관기간이 연장되는 근거. 최대 11년 + 신고기간.",
      buttonLabel: "법령 보기 →",
      url: LAW_URLS.corp13,
    },
    {
      id: "law-card-7",
      code: "법인세법 제60조",
      title: "법인세과세표준 확정신고",
      description:
        "경비등 송금명세서를 확정신고 시 첨부하는 절차의 근거 조문.",
      buttonLabel: "법령 보기 →",
      url: LAW_URLS.corp60,
    },
    {
      id: "law-card-8",
      code: "법인세법 제25조",
      title: "기업업무추진비 (접대비)",
      description:
        "접대비의 손금산입 한도 및 정규증빙 수취 요건. 3만원(경조사비 20만원) 초과 시 법인 명의 카드 필수.",
      buttonLabel: "법령 보기 →",
      url: LAW_URLS.corp25,
    },
    {
      id: "law-card-9",
      code: "국세법령정보시스템",
      title: "법인세법 전문 (국세청)",
      description:
        "국세청 국세법령정보시스템에서 제공하는 법인세법 전문. 최신 개정 반영.",
      buttonLabel: "사이트 바로가기 →",
      url: LAW_URLS.ntsTaxLaw,
    },
    {
      id: "law-card-10",
      code: "법인세법 시행령 제158조",
      title: "지출증명서류의 수취 및 보관 (시행령)",
      description:
        "법인세법 제116조의 위임을 받아 지출증명서류 대상 사업자 범위 등 세부 사항을 규정.",
      buttonLabel: "법령 보기 →",
      url: LAW_URLS.corpDecree158,
    },
  ],
  reviewFormsTitle: "검토서식",
  reviewFormsDescription:
    "아래 검토서식은 사이트에서 바로 PDF로 내려받을 수 있으며, 공식 출처 링크도 함께 확인할 수 있습니다.",
  reviewFormsReferenceLabel: "지출증명서류합계표 공식 PDF",
  reviewFormsReferenceUrl: LAW_URLS.corpAppendix77Pdf,
  reviewFormsReferenceNote:
    "지출증명서류합계표 자체 공식 서식은 국가법령정보센터 별지 제77호서식 PDF를 참고하세요.",
  reviewForms: [
    {
      title: "지출증명서류수취검토서",
      downloadPath: "downloads/review-form-spending-evidence.pdf",
      downloadFileName: "지출증명서류수취검토서.pdf",
      officialUrl: LAW_URLS.ntsReferenceRoom,
      officialLabel: "국세청 법인세 참고자료실",
      note: "국세청 신고 참고자료를 기준으로 바로 출력할 수 있게 정리한 PDF입니다.",
    },
    {
      title: "신용카드 및 상품권 등 사용내역 검토서식",
      downloadPath: "downloads/review-form-card-gift-certificate.pdf",
      downloadFileName: "신용카드 및 상품권 등 사용내역 검토서식.pdf",
      officialUrl: LAW_URLS.ntsSearch,
      officialLabel: "국세청 통합검색",
      note: "2026 자기검증 검토서식 안내를 기준으로 사이트에서 직접 내려받을 수 있게 구성한 PDF입니다.",
    },
  ],
  disclaimerTitle: "면책문구",
  disclaimerDescription:
    "아래 면책문구는 본 사이트의 실무 안내 성격과 이용 범위를 명확히 하기 위한 기본 고지사항입니다.",
  disclaimers: [
    {
      number: "01",
      title: "일반 정보 제공",
      description:
        "본 사이트는 세무 실무 이해를 돕기 위한 일반 정보 제공을 목적으로 하며, 개별 사안에 대한 법률 또는 세무 자문을 제공하지 않습니다.",
    },
    {
      number: "02",
      title: "사실관계 우선",
      description:
        "동일한 조문이라도 거래 구조, 업종, 계약 내용, 증빙 수취 방식 등에 따라 적용 결과가 달라질 수 있으므로 실제 판단은 사실관계를 기준으로 해야 합니다.",
    },
    {
      number: "03",
      title: "최신 법령 확인",
      description:
        "법령, 시행령, 시행규칙, 예규, 서식 및 행정해석은 수시로 개정 또는 변경될 수 있으므로 적용 전 최신 원문을 반드시 확인하시기 바랍니다.",
    },
    {
      number: "04",
      title: "개별 신고 책임",
      description:
        "본 사이트의 정리 내용만을 근거로 세무조정, 과세표준신고, 가산세 판단을 확정해서는 안 되며 최종 확인과 적용 책임은 이용자에게 있습니다.",
    },
    {
      number: "05",
      title: "전문가 검토 권장",
      description:
        "실제 신고, 수정신고, 경정청구, 서식 제출 또는 세무조사 대응 전에는 공인세무사 또는 관할 세무서와 구체적 사실관계를 검토하시기 바랍니다.",
    },
    {
      number: "06",
      title: "책임 제한",
      description:
        "본 사이트의 자료 이용 또는 해석 과정에서 발생한 직간접적 손해에 대하여 운영자는 법적 책임을 부담하지 않습니다.",
    },
  ],
  footerLines: [
    "지출증명서류 완전 가이드 | 본 가이드는 실무 참고용으로 제작되었습니다.",
    "실제 세무 처리 시 공인세무사 또는 세무서에 확인하시기 바랍니다.",
    "법령 링크는 국가법령정보센터(law.go.kr) 및 국세법령정보시스템(taxlaw.nts.go.kr)으로 연결됩니다.",
  ],
};
