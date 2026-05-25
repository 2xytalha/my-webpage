// ── LIVE STATUS MESSAGES ─────────────────────────────────
const statusMessages = {
  tr: [
    'Sistemler şu an optimize ediliyor…',
    'şu an mobil uygulama geliştiriliyor…',
    'Otomasyon sistemleri kuruluyor…',
    'Yeni yazılım çözümleri üretiliyor…',
    'Performans iyileştirmeleri yapılıyor…',
  ],
  en: [
    'Currently optimizing systems…',
    'Currently building mobile apps…',
    'Currently automating workflows…',
    'Currently shipping custom tools…',
    'Currently tweaking performance…',
  ]
};

// ── TRANSLATIONS ──────────────────────────────────────────
const i18n = {
  tr: {
    'nav.mindset': 'Yaklaşımım', 'nav.skills': 'Uzmanlıklarım', 'nav.projects': 'Projeler', 'nav.focus': 'Odak Noktam', 'nav.contact': 'İletişim',
    'hero.eyebrow': 'Sistem Geliştirici · Yazılım Uzmanı · Otomasyon',
    'hero.tagline': 'Günü kurtaran kodlar değil, kalıcı sistemler inşa ederim.',
    'hero.brand':   'Geliştirir, optimize eder ve otomatikleştiririm.',
    'hero.cta1': 'Projeleri Gör', 'hero.cta2': 'İletişime Geç',
    'hero.status': 'Sistemler şu an optimize ediliyor…',
    'stats.platforms.label': 'Platformlar', 'stats.focus.label': 'Odak', 'stats.status.label': 'Durum',
    'stats.platforms.val': 'Windows · macOS · Linux',
    'stats.focus.val': 'Otomasyon · Performans · Araçlar',
    'stats.status.val': 'Aktif geliştirme aşamasında',
    'section.mindset.label': 'Yaklaşımım',
    'section.mindset.title': 'Çalışma felsefem<br>ve vizyonum.',
    'mindset.1': 'Geçici çözümler değil, sürdürülebilir sistemler kurarım.',
    'mindset.2': 'Tekrarlayan işleri manuel yapmak yerine kodla otomatikleştiririm.',
    'mindset.3': 'Sadece meşgul görünmeye değil, gerçek sonuçlara ve verimliliğe odaklanırım.',
    'mindset.4': 'Hızlı prototipler üretir, test eder ve sürekli daha iyisini geliştiririm.',
    'section.skills.label': 'Uzmanlıklarım',
    'section.skills.title': 'Neler geliştiriyor,<br>neleri optimize ediyorum?',
    'skill.systems.title': 'Çapraz Platform Hakimiyeti',
    'skill.systems.desc': 'Platform bağımsız düşünür; Windows, macOS ve Linux ortamlarında rahatça çalışırım.',
    'skill.windows.title': 'Windows Optimizasyonu & FPS',
    'skill.windows.desc': 'Oyunlar ve ağır uygulamalar için işletim sistemi düzeyinde derin optimizasyon ve maksimum performans ayarları.',
    'skill.automation.title': 'Otomasyon & Özel Araçlar',
    'skill.automation.desc': 'Sürekli tekrar eden süreçleri otomatikleştirir, insan müdahalesine gerek duymayan akıllı sistemler yazarım.',
    'skill.mobile.title': 'Mobil Uygulama Geliştirme',
    'skill.mobile.desc': 'Sadece iyi görünen değil, amaca hizmet eden, yüksek performanslı ve akıcı mobil uygulamalar geliştiririm.',
    'section.projects.label': 'Projeler',
    'section.projects.title': 'Bugüne kadar inşa ettiğim sistemler.',
    'proj.colorbot.tag': 'Otomasyon · Python',
    'proj.colorbot.desc': 'Ekrandaki pikselleri gerçek zamanlı analiz ederek, hedeflenen renk algılandığında milisaniyeler içinde tepki veren yüksek performanslı otomasyon botu.',
    'proj.colorbot.cta': "GitHub'da Gör →",
    'proj.yazboz.tag': 'Mobil · TypeScript',
    'proj.yazboz.desc': 'Popüler masa oyunu 101 Okey için geliştirilmiş, hesaplama hatalarını ortadan kaldıran akıllı mobil skor takip ve hesaplama uygulaması.',
    'proj.yazboz.cta': "GitHub'da Gör →",
    'proj.fsbo.tag': 'Otomasyon · Python',
    'proj.fsbo.desc': 'Sahibinden.com üzerindeki "sahibinden satılık" emlak ilanlarını anti-bot sistemlerini aşarak otomatik toplayan, GUI destekli profesyonel masaüstü uygulaması.',
    'proj.fsbo.cta': "GitHub'da Gör →",
    'proj.stickerbridge.tag': 'Web Aracı · Python',
    'proj.stickerbridge.desc': 'LINE Store çıkartmalarını saniyeler içinde WhatsApp paketine dönüştüren web aracı. Hem statik hem animasyonlu çıkartmaları destekler, dark mode ve iki dil seçeneği sunar.',
    'proj.stickerbridge.cta': 'Araca Git →',
    'section.focus.label': 'Güncel Odak',
    'section.focus.title': 'Şu anki ana odak noktalarım.',
    'focus.software.title': 'Özel Yazılım Çözümleri',
    'focus.software.desc': 'Gerçek dünyadaki problemleri çözen; hızlı, temiz kodlanmış ve kalıcı yazılım araçları.',
    'focus.mobile.title': 'Mobil Uygulamalar',
    'focus.mobile.desc': 'Kullanıcı deneyimini (UX) ön planda tutan, modern ve yüksek performanslı mobil uygulamalar.',
    'focus.tools.title': 'Verimli & Ölçeklenebilir Araçlar',
    'focus.tools.desc': 'Küçük betiklerden (script) kapsamlı sistemlere kadar, ihtiyaçlara göre büyüyebilen verimlilik araçları.',
    'section.philosophy.label': 'Felsefe',
    'quote.1': '"Motivasyon geçici,<br>sistemler kalıcıdır."',
    'quote.2': '"Bir kere inşa et,<br>sonsuza dek çalışsın."',
    'section.contact.label': 'İletişim',
    'contact.heading': 'Üzerinde konuşmaya değer<br>bir fikrin mi var?',
    'contact.solo': 'Tüm bağlantılarım ↗',
    'footer.copy': 'Tüm sistemler aktif.',
    'tools.label': 'Araçlar',
    'request.text': 'İhtiyacına özel bir yazılıma mı ihtiyacın var?',
    'request.cta': 'Projeyi Konuşalım →',
  },
  en: {
    'nav.mindset': 'Mindset', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.focus': 'Focus', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Builder · Systems Thinker · Automator',
    'hero.tagline': 'I build systems, not just projects.',
    'hero.brand':   'I optimize, build, and automate.',
    'hero.cta1': 'View Projects', 'hero.cta2': 'Get in Touch',
    'hero.status': 'Currently building…',
    'stats.platforms.label': 'Platforms', 'stats.focus.label': 'Focus', 'stats.status.label': 'Status',
    'stats.platforms.val': 'Windows · macOS · Linux',
    'stats.focus.val': 'Automation · Performance · Tools',
    'stats.status.val': 'Actively building',
    'section.mindset.label': 'Mindset',
    'section.mindset.title': 'How I think,<br>how I work.',
    'mindset.1': 'I build systems, not one-time solutions',
    'mindset.2': 'I automate repetitive tasks before they automate me',
    'mindset.3': 'I focus on results and efficiency, not busy work',
    'mindset.4': 'I experiment fast, break fast, iterate faster',
    'section.skills.label': 'Skills',
    'section.skills.title': 'What I build,<br>what I optimize.',
    'skill.systems.title': 'Cross-Platform Expertise',
    'skill.systems.desc': 'I work natively across Windows, macOS, and Linux — no shortcuts, no excuses.',
    'skill.windows.title': 'Windows Tweaking & FPS',
    'skill.windows.desc': 'Deep system tuning for maximum performance — games, apps, raw speed.',
    'skill.automation.title': 'Automation & Custom Tools',
    'skill.automation.desc': "If it's repetitive, I automate it. Scripts, bots, pipelines — built to run without you.",
    'skill.mobile.title': 'Mobile App Development',
    'skill.mobile.desc': 'Clean, functional mobile apps — built with purpose, tested for real use.',
    'section.projects.label': 'Projects',
    'section.projects.title': "Systems I've shipped.",
    'proj.colorbot.tag': 'Automation · Python',
    'proj.colorbot.desc': 'A high-performance trigger bot that watches your screen in real time and fires a key or click the moment a target color appears — zero delay, zero manual input.',
    'proj.colorbot.cta': 'View on GitHub →',
    'proj.yazboz.tag': 'Mobile · TypeScript',
    'proj.yazboz.desc': 'A mobile scoreboard application built for the classic Turkish card game 101 — tracks scores automatically so players can focus on the game.',
    'proj.yazboz.cta': 'View on GitHub →',
    'proj.fsbo.tag': 'Automation · Python',
    'proj.fsbo.desc': 'A desktop app that automatically scrapes "For Sale By Owner" real estate listings from Sahibinden.com — with a GUI and anti-bot bypass built in.',
    'proj.fsbo.cta': 'View on GitHub →',
    'proj.stickerbridge.tag': 'Web Tool · Python',
    'proj.stickerbridge.desc': 'A web tool that converts LINE Store sticker packs into WhatsApp sticker packages in seconds. Supports both static and animated stickers, with dark mode and EN/TR language options.',
    'proj.stickerbridge.cta': 'Open Tool →',
    'section.focus.label': 'Current Focus',
    'section.focus.title': "What I'm building now.",
    'focus.software.title': 'Custom Software Solutions',
    'focus.software.desc': 'Building tailored tools and systems that solve real problems — fast, clean, and built to last.',
    'focus.mobile.title': 'Mobile Applications',
    'focus.mobile.desc': 'Designing and shipping mobile apps with a focus on usability, performance, and clean UX.',
    'focus.tools.title': 'Efficient & Scalable Tools',
    'focus.tools.desc': 'From scripts to full systems — I build tools that grow with the problem.',
    'section.philosophy.label': 'Philosophy',
    'quote.1': '"Motivation fades,<br>systems stay."',
    'quote.2': '"I build once,<br>I use repeatedly."',
    'section.contact.label': 'Contact',
    'contact.heading': 'If you have an idea,<br>reach out.',
    'contact.solo': 'View all links ↗',
    'footer.copy': 'All systems operational.',
    'tools.label': 'Tools',
    'request.text': 'Need a custom tool?',
    'request.cta': "Let's talk →",
  }
};

// ── Language system ───────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'tr';

function applyTranslations(lang) {
  const t = i18n[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const v = t[el.getAttribute('data-key')];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-html-key]').forEach(el => {
    const v = t[el.getAttribute('data-html-key')];
    if (v !== undefined) el.innerHTML = v;
  });
  document.documentElement.setAttribute('lang', lang);
  document.title = lang === 'tr' ? 'Talha Ateş — Sistem Kurucusu' : 'Talha Ateş — Systems Builder';
  // Sync live status to current language mid-rotation
  const _lsEl = document.getElementById('live-status-text');
  if (_lsEl) _lsEl.textContent = statusMessages[lang][statusIndex % statusMessages[lang].length];
}

const langToggle = document.getElementById('lang-toggle');
// Declare before applyTranslations so the sync inside it can reference them
const liveStatusEl = document.getElementById('live-status-text');
let statusIndex = 0;

langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
applyTranslations(currentLang);

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'tr' ? 'en' : 'tr';
  langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
  applyTranslations(currentLang);
  localStorage.setItem('lang', currentLang);
});

// ── Live status rotation ──────────────────────────────────
setInterval(() => {
  if (!liveStatusEl) return;
  liveStatusEl.classList.add('fading');
  setTimeout(() => {
    statusIndex = (statusIndex + 1) % statusMessages[currentLang].length;
    liveStatusEl.textContent = statusMessages[currentLang][statusIndex];
    liveStatusEl.classList.remove('fading');
  }, 380);
}, 3500);

// ── Footer year ───────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();


// ── Navbar scroll state ───────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile burger ─────────────────────────────────────────
const burger    = document.getElementById('nav-burger');
const mobileNav = document.getElementById('nav-mobile');
burger.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
mobileNav.querySelectorAll('.nav-mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});

// ── Scroll reveal ─────────────────────────────────────────
if ('IntersectionObserver' in window) {
  const ro = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in-view)').forEach(el => el.classList.add('in-view'));
  }, 800);
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
}

// ── Active nav link ───────────────────────────────────────
const navLinks = document.querySelectorAll('.nav-link');
const sectionObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.getAttribute('id');
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    }
  }),
  { threshold: 0.35 }
);
document.querySelectorAll('section[id]').forEach(s => sectionObs.observe(s));
