/* ===================================
   정을식내과의원 홈페이지 메인 JS
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 0. 카톡 1:1 상담 플로팅 버튼 자동 삽입 (버튼 없는 페이지에) ── */
  if (!document.querySelector('.floats')) {
    const lang = (document.documentElement.lang || 'ko').toLowerCase();
    const isEn = lang.indexOf('en') === 0;
    const isZh = lang.indexOf('zh') === 0;
    const kakaoTitle = isEn ? 'KakaoTalk 1:1 chat' : (isZh ? 'KakaoTalk 1:1 咨询' : '카카오톡 1:1 상담');
    const phoneTitle = isEn ? 'Call us' : (isZh ? '电话咨询' : '전화 문의');
    const topTitle = isEn ? 'Back to top' : (isZh ? '返回顶部' : '맨 위로');
    const floats = document.createElement('div');
    floats.className = 'floats';
    floats.innerHTML =
      '<a href="http://pf.kakao.com/_khLJT" target="_blank" rel="noopener" class="float-btn kakao" title="' + kakaoTitle + '"><i class="fa-solid fa-comment"></i></a>' +
      ((!isEn && !isZh) ? '<a href="https://m.booking.naver.com/booking/13/bizes/1108509/items/5747934" target="_blank" rel="noopener" class="float-btn naver" title="네이버 예약"><i class="fa-regular fa-calendar-check"></i></a>' : '') +
      '<a href="tel:032-426-2301" class="float-btn phone" title="' + phoneTitle + '"><i class="fa-solid fa-phone"></i></a>' +
      '<button class="float-btn top" title="' + topTitle + '"><i class="fa-solid fa-chevron-up"></i></button>';
    document.body.appendChild(floats);
  }

  /* ── 0-1. 장비 사진 누르면 크게 보기 (equip-card 이미지) ── */
  (function(){
    var imgs = document.querySelectorAll('.equip-card .equip-img img');
    if (!imgs.length) return;
    var lb = document.createElement('div');
    lb.className = 'equip-lightbox';
    lb.setAttribute('role','dialog');
    lb.setAttribute('aria-modal','true');
    lb.innerHTML = '<button class="elb-close" aria-label="닫기"><i class="fa-solid fa-xmark"></i></button><figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(lb);
    var big = lb.querySelector('img'), cap = lb.querySelector('figcaption');
    function close(){ lb.classList.remove('open'); document.body.style.overflow=''; }
    lb.addEventListener('click', function(e){ if (e.target !== big) close(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && lb.classList.contains('open')) close(); });
    imgs.forEach(function(im){
      im.setAttribute('tabindex','0');
      im.setAttribute('role','button');
      function open(){
        big.src = im.currentSrc || im.src; big.alt = im.alt || '';
        var card = im.closest('.equip-card'), h = card && card.querySelector('h4'), mk = card && card.querySelector('.maker');
        cap.textContent = [mk && mk.textContent.trim(), h && h.textContent.trim()].filter(Boolean).join(' · ') || im.alt || '';
        if (/제조사 제공/.test(im.alt || '')) cap.textContent += ' (제조사 제공 이미지)';
        lb.classList.add('open'); document.body.style.overflow='hidden';
      }
      im.addEventListener('click', open);
      im.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
  })();

  /* ── 1. 헤더 스크롤 효과 ── */
  const header = document.getElementById('header');
  const topBtn = document.querySelector('.float-btn.top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header?.classList.add('scrolled');
      topBtn?.classList.add('visible');
    } else {
      header?.classList.remove('scrolled');
      topBtn?.classList.remove('visible');
    }
  });

  topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── 2. 모바일 메뉴 ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-nav-close');

  hamburger?.addEventListener('click', () => mobileNav?.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileNav?.classList.remove('open'));

  // 모바일 서브메뉴 토글 (mobile-menu 또는 mobile-nav-menu 모두 지원)
  document.querySelectorAll('.mobile-menu > li > a, .mobile-nav-menu > li > a').forEach(link => {
    const submenu = link.nextElementSibling;
    if (submenu && (submenu.classList.contains('mobile-sub') || submenu.classList.contains('mobile-submenu'))) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        submenu.classList.toggle('open');
        const icon = link.querySelector('i.fa-chevron-down');
        if (icon) icon.style.transform = submenu.classList.contains('open') ? 'rotate(180deg)' : '';
      });
    }
  });

  /* ── 3. 히어로 슬라이더 ── */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(idx) {
    slides[currentSlide]?.classList.remove('active');
    dots[currentSlide]?.classList.remove('active');
    currentSlide = (idx + slides.length) % slides.length;
    slides[currentSlide]?.classList.add('active');
    dots[currentSlide]?.classList.add('active');
  }

  function startSlider() {
    slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      goToSlide(i);
      startSlider();
    });
  });

  if (slides.length > 0) startSlider();

  /* ── 4. 장비 탭 ── */
  const equipTabs = document.querySelectorAll('.equip-tab');
  const equipPanels = document.querySelectorAll('.equipment-panel');

  equipTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      equipTabs.forEach(t => t.classList.remove('active'));
      equipPanels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });

  /* ── 5. 의료진 영상 모달 ── */
  const modal = document.getElementById('videoModal');
  const modalIframe = document.getElementById('modalIframe');
  const modalClose = document.querySelector('.modal-close') || document.querySelector('.video-modal-close');

  // 로컬(file://) 환경 여부 감지
  const isLocal = location.protocol === 'file:';

  document.querySelectorAll('.btn-video, .btn-video-full, .doctor-video-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoId = btn.dataset.video;
      if (!videoId) return;

      if (isLocal) {
        // 로컬에서는 YouTube 새 탭으로 열기
        window.open(`https://www.youtube.com/shorts/${videoId}`, '_blank');
      } else {
        // 배포 후에는 모달로 재생
        if (modalIframe) {
          modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        }
        modal?.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal?.classList.remove('active');
    if (modalIframe) modalIframe.src = '';
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  /* ── 6. 스크롤 애니메이션 ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

});
