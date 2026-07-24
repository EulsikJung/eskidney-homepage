/* ===================================
   공통 헤더 / 푸터 자동 삽입
   =================================== */
(function () {
  const isSubpage = window.location.pathname.replace(/\\/g, '/').includes('/pages/');
  const base = isSubpage ? '../' : '';
  const pagesBase = isSubpage ? '' : 'pages/';

  /* ── 헤더 HTML ── */
  const headerHTML = `
<header id="header">
  <div class="header-top">
    <div class="container">
      <div class="header-top-info">
        <span><i class="fa-solid fa-phone"></i> 032-426-2301</span>
        <span><i class="fa-solid fa-location-dot"></i> 인천 남동구 남동대로 931 갤럭시타워 2F</span>
        <span><i class="fa-regular fa-clock"></i> 월수금 08:30–20:00 &nbsp;|&nbsp; 화목 08:30–19:00 &nbsp;|&nbsp; 토 08:30–13:00</span>
      </div>
      <div class="header-top-sns">
        <a href="https://naver.me/IgJLOB2k" target="_blank" title="네이버 플레이스"><i class="fa-solid fa-location-dot"></i></a>
        <a href="https://blog.naver.com/eskidney" target="_blank"><i class="fa-solid fa-blog"></i></a>
        <a href="https://www.youtube.com/channel/UCp_n-tM8PCBB4RYk8d2u_cQ" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        <a href="http://pf.kakao.com/_khLJT" target="_blank"><i class="fa-solid fa-comment"></i></a>
        <a href="https://www.instagram.com/eskidney" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  </div>
  <div class="header-main">
    <div class="container">
      <a href="${base}index.html" class="logo">
        <img src="${base}pictures/logo.png" alt="정을식내과 인공신장실" class="logo-img" style="height:48px;width:auto;display:block;">
      </a>
      <nav>
        <ul class="nav">
          <li><a href="${pagesBase}about.html">병원소개 <i class="fa-solid fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="${pagesBase}about.html"><i class="fa-regular fa-hospital"></i> 인사말</a></li>
              <li><a href="${pagesBase}doctors.html"><i class="fa-solid fa-user-doctor"></i> 의료진 소개</a></li>
              <li><a href="${pagesBase}gallery.html"><i class="fa-regular fa-images"></i> 시설 둘러보기</a></li>
              <li><a href="${pagesBase}contact.html"><i class="fa-solid fa-map-location-dot"></i> 오시는길</a></li>
              <li><a href="${pagesBase}fees.html"><i class="fa-solid fa-file-invoice"></i> 비급여 고지</a></li>
              <li><a href="${pagesBase}faq.html"><i class="fa-solid fa-circle-question"></i> 자주 묻는 질문</a></li>
            </ul>
          </li>
          <li><a href="${pagesBase}dialysis.html">인공신장실 <i class="fa-solid fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="${pagesBase}dialysis.html"><i class="fa-solid fa-heart-pulse"></i> 혈액투석이란</a></li>
              <li><a href="${pagesBase}dialysis.html#facility"><i class="fa-solid fa-bed"></i> 투석실 시설</a></li>
              <li><a href="${pagesBase}dialysis.html#isolation"><i class="fa-solid fa-shield-halved"></i> 격리투석실</a></li>
              <li><a href="${pagesBase}column.html"><i class="fa-solid fa-pen-nib"></i> 신장내과 건강칼럼</a></li>
            </ul>
          </li>
          <li><a href="${pagesBase}outpatient.html">외래진료 <i class="fa-solid fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="${pagesBase}outpatient.html#premium"><i class="fa-solid fa-star"></i> 프리미엄 주치의</a></li>
              <li><a href="${pagesBase}outpatient.html#dialysis"><i class="fa-solid fa-heart-pulse"></i> 혈액투석</a></li>
              <li><a href="${pagesBase}outpatient.html#kidney"><i class="fa-solid fa-droplet"></i> 신장질환</a></li>
              <li><a href="${pagesBase}outpatient.html#chronic"><i class="fa-solid fa-heart"></i> 만성질환</a></li>
              <li><a href="${pagesBase}outpatient.html#thyroid"><i class="fa-solid fa-disease"></i> 갑상선·내분비</a></li>
              <li><a href="${pagesBase}outpatient.html#digest"><i class="fa-solid fa-magnifying-glass"></i> 소화기·내시경</a></li>
              <li><a href="${pagesBase}outpatient.html#acute"><i class="fa-solid fa-stethoscope"></i> 일반진료</a></li>
            </ul>
          </li>
          <li><a href="${pagesBase}checkup.html">건강검진 <i class="fa-solid fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="${pagesBase}checkup.html"><i class="fa-solid fa-building-columns"></i> 국가건강검진</a></li>
              <li><a href="${pagesBase}checkup.html#cancer"><i class="fa-solid fa-ribbon"></i> 4대 암검진</a></li>
              <li><a href="${pagesBase}checkup.html#custom"><i class="fa-solid fa-sliders"></i> 개인맞춤 검진</a></li>
            </ul>
          </li>
          <li><a href="${pagesBase}equipment.html">장비소개</a></li>
          <li><a href="${pagesBase}wellness.html">웰빙클리닉 <i class="fa-solid fa-chevron-down"></i></a>
            <ul class="dropdown">
              <li><a href="${pagesBase}wellness.html"><i class="fa-solid fa-droplet"></i> 영양수액</a></li>
              <li><a href="${pagesBase}wellness.html#vaccine"><i class="fa-solid fa-syringe"></i> 예방접종</a></li>
              <li><a href="${pagesBase}wellness.html#obesity"><i class="fa-solid fa-weight-scale"></i> 비만클리닉</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="header-cta">
        <a href="tel:032-426-2301" class="btn-call"><i class="fa-solid fa-phone"></i> 032-426-2301</a>
        <a href="http://pf.kakao.com/_khLJT" target="_blank" class="btn-kakao"><i class="fa-solid fa-comment"></i> 카카오 상담</a>
      </div>
      <button class="hamburger" aria-label="메뉴"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<div class="mobile-nav">
  <div class="mobile-nav-head">
    <a href="${base}index.html" class="logo">
      <img src="${base}pictures/logo.png" alt="정을식내과 인공신장실" class="logo-img" style="height:48px;width:auto;display:block;">
    </a>
    <button class="mobile-nav-close"><i class="fa-solid fa-xmark"></i></button>
  </div>
  <ul class="mobile-menu">
    <li><a href="#">병원소개 <i class="fa-solid fa-chevron-down"></i></a>
      <ul class="mobile-sub">
        <li><a href="${pagesBase}about.html">인사말</a></li>
        <li><a href="${pagesBase}doctors.html">의료진 소개</a></li>
        <li><a href="${pagesBase}gallery.html">시설 둘러보기</a></li>
        <li><a href="${pagesBase}contact.html">오시는길</a></li>
        <li><a href="${pagesBase}fees.html">비급여 고지</a></li>
      </ul>
    </li>
    <li><a href="#">인공신장실 <i class="fa-solid fa-chevron-down"></i></a>
      <ul class="mobile-sub">
        <li><a href="${pagesBase}dialysis.html">혈액투석이란</a></li>
        <li><a href="${pagesBase}dialysis.html#facility">투석실 시설</a></li>
        <li><a href="${pagesBase}dialysis.html#isolation">격리투석실</a></li>
        <li><a href="${pagesBase}column.html">신장내과 건강칼럼</a></li>
      </ul>
    </li>
    <li><a href="#">외래진료 <i class="fa-solid fa-chevron-down"></i></a>
      <ul class="mobile-sub">
        <li><a href="${pagesBase}outpatient.html">프리미엄 주치의</a></li>
        <li><a href="${pagesBase}outpatient.html#kidney">신장내과</a></li>
        <li><a href="${pagesBase}outpatient.html#internal">내분비·심혈관·소화기</a></li>
      </ul>
    </li>
    <li><a href="#">건강검진 <i class="fa-solid fa-chevron-down"></i></a>
      <ul class="mobile-sub">
        <li><a href="${pagesBase}checkup.html">국가건강검진</a></li>
        <li><a href="${pagesBase}checkup.html#cancer">4대 암검진</a></li>
        <li><a href="${pagesBase}checkup.html#custom">개인맞춤 검진</a></li>
      </ul>
    </li>
    <li><a href="${pagesBase}equipment.html">장비소개</a></li>
    <li><a href="#">웰빙클리닉 <i class="fa-solid fa-chevron-down"></i></a>
      <ul class="mobile-sub">
        <li><a href="${pagesBase}wellness.html">영양수액</a></li>
        <li><a href="${pagesBase}wellness.html#vaccine">예방접종</a></li>
        <li><a href="${pagesBase}wellness.html#obesity">비만클리닉</a></li>
      </ul>
    </li>
  </ul>
  <div class="mobile-nav-foot">
    <a href="tel:032-426-2301" class="btn-call"><i class="fa-solid fa-phone"></i> 032-426-2301</a>
    <a href="http://pf.kakao.com/_khLJT" target="_blank" class="btn-kakao"><i class="fa-solid fa-comment"></i> 카카오 상담</a>
  </div>
</div>`;

  /* ── 푸터 HTML ── */
  const footerHTML = `
<footer id="footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-logo">
        <img src="${base}pictures/logo_white.png" alt="정을식내과 인공신장실" class="logo-img-white" style="height:46px;width:auto;display:block;margin-bottom:14px;">
        <div class="info">
          대표자: 정을식 &nbsp;|&nbsp; 사업자등록번호: 601-93-12204<br/>
          인천광역시 남동구 남동대로 931 갤럭시타워 2층<br/>
          Tel. 032-426-2301
        </div>
      </div>
      <div class="footer-links">
        <a href="${pagesBase}about.html">병원소개</a>
        <a href="${pagesBase}contact.html">오시는길</a>
        <a href="${pagesBase}fees.html">비급여고지</a>
      </div>
    </div>
    <div class="footer-copy">© 2025 정을식내과의원. All rights reserved.</div>
  </div>
</footer>

<div class="floats">
  <a href="http://pf.kakao.com/_khLJT" target="_blank" class="float-btn kakao"><i class="fa-solid fa-comment"></i></a>
  <a href="tel:032-426-2301" class="float-btn phone"><i class="fa-solid fa-phone"></i></a>
  <button class="float-btn top"><i class="fa-solid fa-chevron-up"></i></button>
</div>

<div class="mobile-bottom-bar">
  <a href="tel:032-426-2301" class="mbb-btn call"><i class="fa-solid fa-phone"></i>전화</a>
  <a href="http://pf.kakao.com/_khLJT" target="_blank" class="mbb-btn kakao"><i class="fa-solid fa-comment"></i>카카오</a>
  <a href="${pagesBase}contact.html" class="mbb-btn"><i class="fa-solid fa-map-location-dot"></i>오시는길</a>
</div>

<div id="videoModal" class="video-modal">
  <div class="video-modal-inner">
    <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
    <iframe id="modalIframe" src="" allowfullscreen allow="autoplay"></iframe>
  </div>
</div>`;

  /* ── 삽입 ── */
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.outerHTML = headerHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;
})();
