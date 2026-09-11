// PlaitPouchRiver Master Client Script
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Synchronization
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // 2. Interactive FAQs Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 3. Interactive Plaiting & Tensile Estimator Calculator
  const plaitStyle = document.getElementById('calc-plait-style');
  const strandCount = document.getElementById('calc-strands');
  const leatherGrain = document.getElementById('calc-grain');
  const resultHours = document.getElementById('calc-hours-val');
  const resultTensile = document.getElementById('calc-tensile-val');
  const resultPatina = document.getElementById('calc-patina-val');

  function updatePlaitEstimates() {
    if (!plaitStyle || !strandCount || !leatherGrain) return;
    const styleVal = plaitStyle.value;
    const strands = parseInt(strandCount.value, 10) || 4;
    const grain = leatherGrain.value;

    let baseHours = strands * 1.8;
    let tensileLbs = strands * 38;
    let patinaYears = 25;

    if (styleVal === 'herringbone') {
      baseHours *= 1.4;
      tensileLbs *= 1.25;
    } else if (styleVal === 'round-lanyard') {
      baseHours *= 1.2;
      tensileLbs *= 1.15;
    } else if (styleVal === 'french-lace') {
      baseHours *= 1.6;
      tensileLbs *= 1.1;
    }

    if (grain === 'bridle') {
      tensileLbs += 40;
      patinaYears = 45;
    } else if (grain === 'french-calf') {
      baseHours += 2;
      tensileLbs += 15;
      patinaYears = 30;
    } else if (grain === 'bison') {
      tensileLbs += 75;
      patinaYears = 50;
    }

    if (resultHours) resultHours.textContent = Math.round(baseHours) + ' hrs';
    if (resultTensile) resultTensile.textContent = Math.round(tensileLbs) + ' lbs';
    if (resultPatina) resultPatina.textContent = patinaYears + '+ yrs';
  }

  if (plaitStyle && strandCount && leatherGrain) {
    [plaitStyle, strandCount, leatherGrain].forEach(el => {
      el.addEventListener('change', updatePlaitEstimates);
      el.addEventListener('input', updatePlaitEstimates);
    });
    updatePlaitEstimates();
  }
});
