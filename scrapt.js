// قائمة الترجمات (ثنائي اللغة لكل نصوص الصفحة الأساسية)
const translations = {
  en: {
    home: "Home",
    services: "Services",
    features: "Features",
    marketing: "Marketing",
    bookNow: "All Eyes On You 👋",
    heroTitle:
      'Building Digital <span class="has-before">Marketing</span>, Brand and Experience',
    heroText:
      "At Dream Media, we specialize in marketing, brand building, training, and consulting, delivering efficient and impactful solutions.",

    // Services
    servicesSubtitle: "Our Services",
    servicesTitle:
      'Managing your business with our <span class="has-before">best service</span>',
    serviceProductManagement: "Product Management",
    serviceWebMobile: "Web & Mobile Development",
    serviceMarketing: "Marketing",
    serviceBusinessTraining: "Business training",
    servicePrinting: "Printing",
    serviceMarketingCommunication: "Marketing and Communication",
    serviceBusinessDevelopment: "Business Development",
    serviceMoreLink: "04 More Service",

    // Feature
    featureSubtitle: "Why Choose Dream Media",
    featureTitle:
      'Experts in Marketing, Training, and Business Consulting, Solving Client <span class="has-before">Challenges</span>',
    featureFastTitle: "Fast working process",
    featureFastText:
      "At Dream Media we specialize in marketing, building brands for agencies, and social media design.",
    featureTeamTitle: "Dedicated team",
    featureTeamText:
      "At Dream Media, our team works closely with you to build an effective and integrated marketing strategy.",
    featureSupportTitle: "24/7 hours support",
    featureSupportText:
      "We provide ongoing support and consulting to ensure campaign success and continuous improvement.",

    // Marketing slider
    marketingSubtitle: "Our Work",
    marketingTitle: 'Featured <span class="has-before">Projects</span>',
    marketingButton: "View Project",

    // Partners
    partnersSubtitle: "Our Partners",
    partnersTitle: 'Trusted by Leading <span class="has-before">Companies</span>',

    // Footer
    footerAboutTitle: "About Dream media",
    footerAboutText:
      "Baghdad-based marketing and business solutions company specializing in digital marketing, social media management, video production, printing, and training. We help businesses and organizations grow and build a strong presence through creative strategies and measurable results.",
    footerInstagramTitle: "Instagram post",
    footerCopyright: "© 2024 Dream Media.",

    // Floating contact
    contactWhatsApp: "WhatsApp",
    contactEmail: "Email",
    contactPhone: "Phone"
  },

  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    features: "المميزات",
    marketing: "التسويق",
    blog: "المدونة",
    bookNow: "كل الأنظار عليك 👋",
    heroTitle:
      'نبني <span class="has-before">التسويق الرقمي</span>، الهوية التجارية والتجربة',

    heroText:
      "في دريم ميديا نختص في التسويق وبناء العلامة التجارية والتدريب والاستشارات لنقدّم حلولًا فعّالة ومؤثرة.",

    // Services
    servicesSubtitle: "خدماتنا",
    servicesTitle:
      'ندير أعمالك من خلال <span class="has-before">أفضل الخدمات</span>',
    serviceProductManagement: "إدارة المنتجات",
    serviceWebMobile: "تطوير المواقع والتطبيقات",
    serviceMarketing: "التسويق",
    serviceBusinessTraining: "تدريب الأعمال",
    servicePrinting: "الطباعة والإنتاج",
    serviceMarketingCommunication: "التسويق والاتصال",
    serviceBusinessDevelopment: "تطوير الأعمال",
    serviceMoreLink: "خدمات أخرى",

    // Feature
    featureSubtitle: "لماذا تختار دريم ميديا؟",
    featureTitle:
      'خبراء في التسويق والتدريب والاستشارات لنحل <span class="has-before">تحديات عملائك</span>',
    featureFastTitle: "سرعة في إنجاز العمل",
    featureFastText:
      "نوفّر خططًا مرنة وسريعة للتسويق وتصميم المحتوى وبناء الهوية البصرية بما يناسب طبيعة عملك.",
    featureTeamTitle: "فريق مخصص لنجاحك",
    featureTeamText:
      "فريق دريم ميديا يعمل معك خطوة بخطوة لبناء استراتيجية تسويق متكاملة وفعّالة.",
    featureSupportTitle: "دعم متواصل 24/7",
    featureSupportText:
      "نقدّم دعمًا واستشارات مستمرة لضمان استمرار نجاح الحملات التسويقية وتحسين النتائج.",

    // Marketing slider
    marketingSubtitle: "أعمالنا",
    marketingTitle: 'أبرز <span class="has-before">المشاريع</span>',
    marketingButton: "عرض المشروع",

    // Partners
    partnersSubtitle: "شركاؤنا",
    partnersTitle: 'موثوق به من قبل <span class="has-before">شركات رائدة</span>',

    // Footer
    footerAboutTitle: "عن دريم ميديا",
    footerAboutText:
      "شركة حلول تسويقية وتجارية مقرّها بغداد، متخصصة في التسويق الرقمي، إدارة حسابات التواصل الاجتماعي، إنتاج الفيديو، الطباعة، والتدريب. نساعد الشركات والمؤسسات على النمو وبناء حضور قوي من خلال استراتيجيات إبداعية ونتائج قابلة للقياس.",
    footerInstagramTitle: "منشورات إنستغرام",
    footerCopyright: "© 2024 دريم ميديا.",

    // Floating contact
    contactWhatsApp: "واتساب",
    contactEmail: "البريد الإلكتروني",
    contactPhone: "اتصال"
  }
};

const langToggleBtn = document.getElementById("lang-toggle-btn");
const htmlTag = document.documentElement;

// اللغة الافتراضية: عربي
let currentLang = localStorage.getItem("lang") || "ar";

// دالة تحديث المحتوى حسب اللغة
function updateContent(lang) {
  // ضبط اتجاه الصفحة
  htmlTag.lang = lang;
  htmlTag.dir = lang === "ar" ? "rtl" : "ltr";

  // زر اللغة (AR / EN)
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === "ar" ? "EN" : "AR";
  }

  // ====== القائمة الرئيسية (Navbar) ======
  const navHome = document.querySelector('[data-nav-link][href="#home"]');
  const navService = document.querySelector('[data-nav-link][href="#service"]');
  const navFeature = document.querySelector('[data-nav-link][href="#feature"]');
  const navProject = document.querySelector('[data-nav-link][href="#project"]');
  const navBlog = document.querySelector('[data-nav-link][href="#blog"]');

  if (navHome) navHome.textContent = translations[lang].home;
  if (navService) navService.textContent = translations[lang].services;
  if (navFeature) navFeature.textContent = translations[lang].features;
  if (navProject) navProject.textContent = translations[lang].marketing;
  if (navBlog) navBlog.textContent = translations[lang].blog;

  // زر "All Eyes On You"
  const bookBtn = document.querySelector(".btn-primary.has-before.has-after");
  if (bookBtn) bookBtn.textContent = translations[lang].bookNow;

  // ====== قسم الـ Hero ======
  const heroHeading = document.getElementById("hero-heading");
  if (heroHeading) {
    heroHeading.innerHTML = translations[lang].heroTitle;
  }

  const heroTextEl = document.querySelector(".hero-text");
  if (heroTextEl && translations[lang].heroText) {
    heroTextEl.textContent = translations[lang].heroText;
  }

  // ====== قسم الخدمات (#service) ======
  const serviceSection = document.getElementById("service");
  if (serviceSection) {
    const serviceSubtitle = serviceSection.querySelector(".section-subtitle");
    const serviceTitle = serviceSection.querySelector(".section-title");

    if (serviceSubtitle && translations[lang].servicesSubtitle) {
      serviceSubtitle.textContent = translations[lang].servicesSubtitle;
    }

    if (serviceTitle && translations[lang].servicesTitle) {
      serviceTitle.innerHTML = translations[lang].servicesTitle;
    }

    const serviceCardTitles = serviceSection.querySelectorAll(
      ".service-card .card-title"
    );
    const serviceKeys = [
      "serviceProductManagement",
      "serviceWebMobile",
      "serviceMarketing",
      "serviceBusinessTraining",
      "servicePrinting",
      "serviceMarketingCommunication",
      "serviceBusinessDevelopment"
    ];

    serviceCardTitles.forEach((el, idx) => {
      const key = serviceKeys[idx];
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    const moreSpan = serviceSection.querySelector(".link-card .span");
    if (moreSpan && translations[lang].serviceMoreLink) {
      moreSpan.textContent = translations[lang].serviceMoreLink;
    }
  }

  // ====== قسم المميزات (#feature) ======
  const featureSection = document.getElementById("feature");
  if (featureSection) {
    const featureSubtitle = featureSection.querySelector(".section-subtitle");
    const featureTitle = featureSection.querySelector(".section-title");

    if (featureSubtitle && translations[lang].featureSubtitle) {
      featureSubtitle.textContent = translations[lang].featureSubtitle;
    }

    if (featureTitle && translations[lang].featureTitle) {
      featureTitle.innerHTML = translations[lang].featureTitle;
    }

    const featureCards = featureSection.querySelectorAll(".feature-card");
    if (featureCards.length >= 3) {
      const [fastCard, teamCard, supportCard] = featureCards;

      const fastTitle = fastCard.querySelector(".card-title");
      const fastText = fastCard.querySelector(".card-text");
      if (fastTitle) fastTitle.textContent = translations[lang].featureFastTitle;
      if (fastText) fastText.textContent = translations[lang].featureFastText;

      const teamTitle = teamCard.querySelector(".card-title");
      const teamText = teamCard.querySelector(".card-text");
      if (teamTitle) teamTitle.textContent = translations[lang].featureTeamTitle;
      if (teamText) teamText.textContent = translations[lang].featureTeamText;

      const supportTitle = supportCard.querySelector(".card-title");
      const supportText = supportCard.querySelector(".card-text");
      if (supportTitle)
        supportTitle.textContent = translations[lang].featureSupportTitle;
      if (supportText)
        supportText.textContent = translations[lang].featureSupportText;
    }
  }

  // ====== قسم التسويق / المشاريع (#project) ======
  const marketingSection = document.getElementById("project");
  if (marketingSection) {
    const marketingSubtitle = marketingSection.querySelector(
      ".section-subtitle"
    );
    const marketingTitle = marketingSection.querySelector(".section-title");

    if (marketingSubtitle && translations[lang].marketingSubtitle) {
      marketingSubtitle.textContent = translations[lang].marketingSubtitle;
    }

    if (marketingTitle && translations[lang].marketingTitle) {
      marketingTitle.innerHTML = translations[lang].marketingTitle;
    }

    const sliderBtns = marketingSection.querySelectorAll(".slider-btn");
    sliderBtns.forEach((btn) => {
      btn.textContent = translations[lang].marketingButton;
    });
  }

  // ====== قسم الشركاء (#partners) ======
  const partnersSection = document.getElementById("partners");
  if (partnersSection) {
    const partnersSubtitle = partnersSection.querySelector(".section-subtitle");
    const partnersTitle = partnersSection.querySelector(".section-title");

    if (partnersSubtitle && translations[lang].partnersSubtitle) {
      partnersSubtitle.textContent = translations[lang].partnersSubtitle;
    }

    if (partnersTitle && translations[lang].partnersTitle) {
      partnersTitle.innerHTML = translations[lang].partnersTitle;
    }
  }

  // ====== الفوتر ======
  const footer = document.querySelector(".footer");
  if (footer) {
    const footerTitles = footer.querySelectorAll(".footer-list-title");
    // 0: About, 1: Instagram post
    if (footerTitles[0]) {
      footerTitles[0].textContent = translations[lang].footerAboutTitle;
    }
    if (footerTitles[1]) {
      footerTitles[1].textContent = translations[lang].footerInstagramTitle;
    }

    const footerTextEl = footer.querySelector(".footer-text");
    if (footerTextEl && translations[lang].footerAboutText) {
      footerTextEl.textContent = translations[lang].footerAboutText;
    }

    const copyrightEl = footer.querySelector(".copyright");
    if (copyrightEl && translations[lang].footerCopyright) {
      copyrightEl.textContent = translations[lang].footerCopyright;
    }
  }

  // ====== زر التواصل العائم (واتساب / إيميل / اتصال) ======
  const fcMenu = document.getElementById("fc-menu");
  if (fcMenu) {
    const labels = fcMenu.querySelectorAll(".fc-item span");
    const contactKeys = [
      "contactWhatsApp",
      "contactEmail",
      "contactPhone"
    ];
    labels.forEach((el, idx) => {
      const key = contactKeys[idx];
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // حفظ اللغة في localStorage
  localStorage.setItem("lang", lang);
  currentLang = lang;
}

// التبديل عند الضغط على زر اللغة
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    updateContent(newLang);
  });
}

// تطبيق اللغة عند تحميل الصفحة
updateContent(currentLang);

// =========================
// Mobile nav toggle (لو عندك قائمة موبايل ثانية)
// =========================
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// =========================
// Theme toggle (Light / Dark)
// =========================
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("dream-theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current =
      root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", current);
    localStorage.setItem("dream-theme", current);
  });
}

// سنة الفوتر تلقائياً (لو حاب تستخدمها في مكان آخر)
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// =========================
// Marketing Swiper (السلايدر)
// =========================
const marketingSwiper = new Swiper(".marketing-slider", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".marketing-next",
    prevEl: ".marketing-prev"
  },
  pagination: {
    el: ".marketing-pagination",
    clickable: true
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// === Reveal on scroll (sections animation) ===
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

/* === Lightbox / Image viewer (professional popup) === */
(function () {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const lbImg = lightbox.querySelector(".lightbox__img");
  const lbCaption = lightbox.querySelector(".lightbox__caption");
  const btnClose = lightbox.querySelector(".lightbox__close");
  const btnPrev = lightbox.querySelector(".lightbox__prev");
  const btnNext = lightbox.querySelector(".lightbox__next");

  // Collect images that should open in the lightbox: images inside main article sections
  const galleryImages = Array.from(
    document.querySelectorAll("main article img")
  );
  if (galleryImages.length === 0) return;

  // Keep track of currently opened index
  let currentIndex = -1;

  function openAt(index) {
    const img = galleryImages[index];
    if (!img) return;
    currentIndex = index;
    lbImg.src = img.src;
    lbImg.alt = img.alt || "";
    lbCaption.textContent =
      img.getAttribute("data-caption") || img.alt || "";
    lightbox.classList.add("lightbox--open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lbImg.focus && lbImg.focus();
  }

  function close() {
    lightbox.classList.remove("lightbox--open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentIndex = -1;
  }

  function showNext() {
    if (currentIndex < 0) return;
    const next = (currentIndex + 1) % galleryImages.length;
    openAt(next);
  }

  function showPrev() {
    if (currentIndex < 0) return;
    const prev = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openAt(prev);
  }

  // Click on images to open
  galleryImages.forEach((img, i) => {
    img.style.cursor = "zoom-in";
    img.setAttribute("tabindex", "0");
    img.addEventListener("click", (e) => {
      e.preventDefault();
      openAt(i);
    });
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openAt(i);
    });
  });

  // Controls
  btnClose.addEventListener("click", close);
  btnNext.addEventListener("click", showNext);
  btnPrev.addEventListener("click", showPrev);

  // Close when clicking outside image content
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (lightbox.getAttribute("aria-hidden") === "false") {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }
  });

  // Preload neighbors for smoother navigation
  function preload(src) {
    const i = new Image();
    i.src = src;
  }
  const obs = new MutationObserver(() => {
    if (currentIndex >= 0) {
      const next = (currentIndex + 1) % galleryImages.length;
      const prev = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      preload(galleryImages[next].src);
      preload(galleryImages[prev].src);
    }
  });
  obs.observe(lightbox, { attributes: true, attributeFilter: ["class"] });
})();

// Floating Contact Menu
const fcToggle = document.getElementById("fc-toggle");
const fcMenu = document.getElementById("fc-menu");

if (fcToggle && fcMenu) {
  fcToggle.addEventListener("click", () => {
    fcMenu.classList.toggle("show");
  });

  // إغلاق القائمة عند الضغط خارجها
  document.addEventListener("click", (e) => {
    if (!fcToggle.contains(e.target) && !fcMenu.contains(e.target)) {
      fcMenu.classList.remove("show");
    }
  });
}
