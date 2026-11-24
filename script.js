/**
 * Personal Archive — Interactive Behaviors & Content Store
 * Zero external dependencies. Edit ARCHIVE_ITEMS below to update your projects and writings.
 */

/* ==========================================================================
   EDITABLE ARCHIVE STORE (Projects & Writings)
   ========================================================================== */
const ARCHIVE_ITEMS = {
  'project-01': {
    type: 'project',
    number: '01',
    category: 'Engineering',
    date: '2026',
    title: 'Meridian Spatial Atlas',
    subtitle: 'Deterministic elevation rendering and spatial indexing for coastal geography.',
    image: 'assets/project-01.png',
    imageAlt: 'Swiss risograph geometric cartography illustration with interlocking orbital rings and topographic contours',
    specs: [
      { label: 'ROLE', value: 'Lead Engineer & Cartography UI' },
      { label: 'STACK', value: 'HTML Canvas, TypeScript, Web Workers' },
      { label: 'YEAR', value: '2026' }
    ],
    sections: [
      {
        heading: 'Problem & Direction',
        paragraphs: [
          'Conventional web mapping tools bundle heavy vector tile runtimes even when the narrative calls for a focused regional plate. Meridian Spatial Atlas was built to explore how fast an interactive contour reader can feel when geometry is streamed directly into a lightweight 2D canvas pipeline.',
          'Each elevation slice is quantized ahead of time and rendered with crisp hairline contours, keyboard pan/zoom controls, and tabular coordinate readouts.'
        ]
      }
    ],
    pullquote: 'A map interface should behave like a printed survey plate that happens to respond to your hand.'
  },

  'project-02': {
    type: 'project',
    number: '02',
    category: 'Editorial',
    date: '2025',
    title: 'Monograph 04 Type System',
    subtitle: 'Translating Swiss editorial book grids into fluid, accessible web typography.',
    image: 'assets/project-02.png',
    imageAlt: 'Editorial illustration of stepped architectural arches and fanned archival paper folios',
    specs: [
      { label: 'ROLE', value: 'Editorial Designer & Frontend' },
      { label: 'STACK', value: 'CSS Grid, Subgrid, Custom Tokens' },
      { label: 'YEAR', value: '2025' }
    ],
    sections: [
      {
        heading: 'Typographic Architecture',
        paragraphs: [
          'Long-form essays online often suffer from monotonous single-column stacks or cramped sidebars. Monograph 04 establishes a strict proportional scale linking headline tracking, body measure, and marginalia captions across desktop and phone widths.',
          'Readers can shift between continuous essay mode and index overview without losing scroll context or contrast legibility.'
        ]
      }
    ],
    pullquote: 'Hierarchy comes from proportion and pause, never from decorative chrome.'
  },

  'project-03': {
    type: 'project',
    number: '03',
    category: 'Visual',
    date: '2025',
    title: 'Forma Tactile Synth',
    subtitle: 'A browser-native polyphonic instrument inspired by Dieter Rams era hardware.',
    image: 'assets/project-03.png',
    imageAlt: 'Overhead graphic editorial illustration of a minimalist tactile acoustic instrument with circular dials and stepped faders',
    specs: [
      { label: 'ROLE', value: 'Interaction & Audio Design' },
      { label: 'STACK', value: 'Web Audio API, SVG, Vanilla JS' },
      { label: 'YEAR', value: '2025' }
    ],
    sections: [
      {
        heading: 'Tactile Controls on Flat Glass',
        paragraphs: [
          'Most browser synthesizers imitate photorealistic plastic knobs that feel clumsy with a trackpad or keyboard. Forma strips controls down to bold geometric dials, snap-stepped faders, and live oscilloscope hairlines.',
          'Every parameter is reachable via direct pointer drag or arrow keys, letting users sketch warm harmonic pads directly inside a single HTML document.'
        ]
      }
    ],
    pullquote: 'When visual noise disappears, listening becomes the primary feedback loop.'
  },

  'project-04': {
    type: 'project',
    number: '04',
    category: 'Engineering',
    date: '2024',
    title: 'Kinetik Transit Observatory',
    subtitle: 'Distilling noisy municipal ferry and rail timetables into one calm schedule board.',
    image: 'assets/project-04.png',
    imageAlt: 'Modernist transit architecture diagram illustration with parallel lines, arched bridges, and circular station nodes',
    specs: [
      { label: 'ROLE', value: 'Full-Stack & Information Design' },
      { label: 'STACK', value: 'GTFS Feeds, Vanilla JS, CSS Grid' },
      { label: 'YEAR', value: '2024' }
    ],
    sections: [
      {
        heading: 'Clarity Under Motion',
        paragraphs: [
          'Commuters rarely need a marketing splash screen—they need next-departure intervals and transfer cadence at a glance. Kinetik normalizes live municipal feeds into tabular hairline ledgers modeled after European station departure boards.',
          'The layout degrades cleanly offline using cached timetable snapshots so travelers inside tunnels still see reliable baseline intervals.'
        ]
      }
    ],
    pullquote: 'Civic software earns trust when every pixel answers a question before the train arrives.'
  },

  'writing-01': {
    type: 'writing',
    number: '01',
    category: 'Design',
    date: 'Oct 2026 · 6 min read',
    title: 'Against Soft Shadows: Why Crisp Geometry Ages Better',
    subtitle: 'On replacing hazy elevation layers with structural borders, rhythm, and ink contrast.',
    sections: [
      {
        heading: 'The Haze Trap',
        paragraphs: [
          'For over a decade, default interface kits equated depth with diffuse gray blur. Add twenty pixels of spread, drop the opacity to eight percent, and call a rectangle elevated. Yet blurred shadows rarely clarify hierarchy—they smudge the boundary between figure and ground.',
          'Print designers solved layering centuries ago without airbrushes: a crisp rule, an intentional offset, or a decisive shift in paper tone. When two surfaces meet at a clean edge, the eye immediately understands containment without squinting at gradients.'
        ]
      },
      {
        heading: 'Contrast as Structure',
        paragraphs: [
          'Solid offset shadows and 1px hairlines behave predictably across screens, zoom levels, and print media. They force discipline: if a card still looks muddled without blur, the underlying spacing or typography needs work.'
        ]
      }
    ],
    pullquote: 'A crisp edge tells the truth about where one idea ends and the next begins.'
  },

  'writing-02': {
    type: 'writing',
    number: '02',
    category: 'Essay',
    date: 'Aug 2026 · 5 min read',
    title: 'Small Static Sites as Permanent Digital Gardens',
    subtitle: 'Why plain HTML, CSS, and a folder of essays remain the safest home for personal work.',
    sections: [
      {
        heading: 'Resisting Bit Rot',
        paragraphs: [
          'Open a personal site built five years ago with a sprawling dependency graph and chances are good that half its build plugins have broken. Meanwhile, a plain HTML document authored in 1998 still renders smoothly in every modern browser on earth.',
          'Choosing minimal tooling is not nostalgia; it is an editorial pledge to your future self. When publishing an essay requires editing one readable file rather than upgrading forty packages, you write more often and worry less.'
        ]
      },
      {
        heading: 'Craft at Human Scale',
        paragraphs: [
          'Keeping an archive compact also sharpens taste. Without template bloat hiding behind generators, every margin, caption, and link carries direct intention.'
        ]
      }
    ],
    pullquote: 'Longevity on the web belongs to files you can open and understand ten years from today.'
  },

  'writing-03': {
    type: 'writing',
    number: '03',
    category: 'Engineering',
    date: 'Jun 2026 · 8 min read',
    title: 'Designing State Machines with Zero Framework Overhead',
    subtitle: 'Practical patterns for predictable modals, filters, and drawers in modern Vanilla JavaScript.',
    sections: [
      {
        heading: 'Explicit Transitions Over Ad-Hoc Flags',
        paragraphs: [
          'Interactive bugs usually creep in when booleans multiply independently: isMenuOpen, isModalActive, isFiltered. Before long, two overlays stay open simultaneously or keyboard focus vanishes behind a backdrop.',
          'You do not need a heavy state container to avoid these pitfalls. Modeling UI elements around native browser primitives—like HTML <dialog>, ARIA attributes as the single source of truth, and clean event delegation—eliminates entire classes of synchronization bugs.'
        ]
      },
      {
        heading: 'Let the DOM Hold Honest State',
        paragraphs: [
          'When aria-expanded and hidden drive both visual CSS selectors and behavior checks, accessibility and logic stay locked together by construction.'
        ]
      }
    ],
    pullquote: 'The cleanest state management is the one where impossible states cannot even be styled.'
  },

  'writing-04': {
    type: 'writing',
    number: '04',
    category: 'Design',
    date: 'Mar 2026 · 7 min read',
    title: 'Editorial Pacing: Borrowing Rhythm from Print Monographs',
    subtitle: 'Balancing dense reference indexes against generous visual rests down a scrolling page.',
    sections: [
      {
        heading: 'Density Needs Counterweight',
        paragraphs: [
          'Websites often pick one speed and stay stuck there: either every band is padded into sleepy emptiness, or every corner is crammed with uniform cards. Print monographs breathe differently. A full-bleed plate gives way to a tight tabular index, followed by two calm columns of prose.',
          'Varying density intentionally signals to the reader how to read each section—whether to pause and look, scan a list by year, or settle into longer sentences.'
        ]
      },
      {
        heading: 'Shared Vertical Edges',
        paragraphs: [
          'Even when layouts alternate between split panes and full-width rows, anchoring elements to consistent container margins keeps the rhythm unified from top to footer.'
        ]
      }
    ],
    pullquote: 'Pacing is how a vertical page teaches the reader when to sprint and when to linger.'
  },

  'writing-05': {
    type: 'writing',
    number: '05',
    category: 'Essay',
    date: 'Jan 2026 · 4 min read',
    title: 'Notes from Rebuilding My Reading Workflow',
    subtitle: 'Moving away from endless bookmark folders toward slower, annotated personal indexes.',
    sections: [
      {
        heading: 'Accumulation Is Not Reading',
        paragraphs: [
          'Most read-it-later queues turn quietly into guilt archives—hundreds of saved links sorted by good intentions rather than curiosity. Last winter I deleted every unvisited bookmark older than ninety days and started keeping plain-text reading notes instead.',
          'Writing three honest sentences after finishing an article forces synthesis. If an idea is not sharp enough to summarize in plain words, saving the URL was never going to help.'
        ]
      },
      {
        heading: 'Publishing Small Observations',
        paragraphs: [
          'Putting those concise notes directly inside this archive keeps learning visible, imperfect, and genuinely useful.'
        ]
      }
    ],
    pullquote: 'A small shelf of books you actually argue with beats a warehouse of unread tabs.'
  }
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initNavDrawer();
  initScrollSpy();
  initFilters();
  initReaderModal();
  initContact();
  initPrintCV();
  initFoxRunner();
  initFoxPetting();
});

/* ==========================================================================
   1. FLOATING PILL MENU DRAWER & CLOCK
   ========================================================================== */
function initNavDrawer() {
  const toggleBtn = document.getElementById('menu-toggle');
  const toggleLabel = document.getElementById('menu-toggle-label');
  const toggleIcon = document.getElementById('menu-toggle-icon');
  const drawer = document.getElementById('nav-drawer');
  const clockEl = document.getElementById('drawer-clock');
  const drawerLinks = document.querySelectorAll('[data-drawer-link]');

  if (!toggleBtn || !drawer) return;

  function setDrawerOpen(open) {
    drawer.hidden = !open;
    toggleBtn.setAttribute('aria-expanded', String(open));
    if (toggleLabel) toggleLabel.textContent = open ? 'Close' : 'Menu';
    if (toggleIcon) toggleIcon.textContent = open ? '×' : '+';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    setDrawerOpen(!isOpen);
  });

  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => setDrawerOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      setDrawerOpen(false);
      toggleBtn.focus();
    }
  });

  document.addEventListener('click', (event) => {
    const navWrap = toggleBtn.closest('.site-nav-wrap');
    if (
      toggleBtn.getAttribute('aria-expanded') === 'true' &&
      navWrap &&
      !navWrap.contains(event.target)
    ) {
      setDrawerOpen(false);
    }
  });

  if (clockEl) {
    const updateClock = () => {
      try {
        clockEl.textContent = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(new Date());
      } catch {
        clockEl.textContent = new Date().toLocaleTimeString();
      }
    };
    updateClock();
    setInterval(updateClock, 1000);
  }
}

/* ==========================================================================
   2. DESKTOP NAV ACTIVE SECTION HIGHLIGHT
   ========================================================================== */
function initScrollSpy() {
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
  if (!navLinks.length || !('IntersectionObserver' in window)) return;

  const topSection = document.getElementById('top');
  const sectionMap = navLinks
    .map((link) => {
      const targetId = link.getAttribute('href')?.slice(1);
      const section = targetId ? document.getElementById(targetId) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((l) => l.classList.remove('is-active'));
        if (entry.target === topSection) return;
        const match = sectionMap.find((item) => item.section === entry.target);
        if (match) match.link.classList.add('is-active');
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
  );

  if (topSection) observer.observe(topSection);
  sectionMap.forEach(({ section }) => observer.observe(section));
}

/* ==========================================================================
   3. CATEGORY FILTERING (PROJECTS & WRITINGS)
   ========================================================================== */
function initFilters() {
  setupFilterGroup({
    buttonSelector: '[data-project-filter]',
    filterAttr: 'data-project-filter',
    containerId: 'project-gallery',
    itemSelector: '.project-card',
    toggleFilteredClass: true
  });

  setupFilterGroup({
    buttonSelector: '[data-writing-filter]',
    filterAttr: 'data-writing-filter',
    containerId: 'writing-list',
    itemSelector: '.index-row',
    toggleFilteredClass: false
  });
}

function setupFilterGroup({ buttonSelector, filterAttr, containerId, itemSelector, toggleFilteredClass }) {
  const buttons = Array.from(document.querySelectorAll(buttonSelector));
  const container = document.getElementById(containerId);
  if (!buttons.length || !container) return;

  const items = Array.from(container.querySelectorAll(itemSelector));

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute(filterAttr) || 'all';

      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });

      if (toggleFilteredClass) {
        container.classList.toggle('is-filtered', selected !== 'all');
      }

      items.forEach((item) => {
        const matches = selected === 'all' || item.getAttribute('data-category') === selected;
        item.hidden = !matches;
      });
    });
  });
}

/* ==========================================================================
   4. ACCESSIBLE EDITORIAL READER MODAL (<dialog>)
   ========================================================================== */
function initReaderModal() {
  const modal = document.getElementById('reader-modal');
  const closeBtn = document.getElementById('reader-close');
  const metaContainer = document.getElementById('reader-meta');
  const contentContainer = document.getElementById('reader-content');

  if (!modal || !metaContainer || !contentContainer) return;

  let lastTrigger = null;

  function renderItem(item) {
    metaContainer.replaceChildren();
    contentContainer.replaceChildren();

    const numBadge = createEl('span', 'counter-badge', item.number);
    const catPill = createEl('span', 'pill pill--tag', item.category);
    const dateSpan = createEl('span', 'reader-date', item.date);
    metaContainer.append(numBadge, catPill, dateSpan);

    const title = createEl('h2', 'reader-title', item.title);
    title.id = 'reader-title';
    const subtitle = createEl('p', 'reader-subtitle', item.subtitle);
    contentContainer.append(title, subtitle);

    if (item.image) {
      const img = document.createElement('img');
      img.className = 'reader-hero-img';
      img.src = item.image;
      img.alt = item.imageAlt || item.title;
      contentContainer.append(img);
    }

    if (Array.isArray(item.specs) && item.specs.length) {
      const specsDl = createEl('dl', 'reader-specs');
      item.specs.forEach((spec) => {
        const wrap = createEl('div', 'reader-spec');
        wrap.append(createEl('dt', '', spec.label), createEl('dd', '', spec.value));
        specsDl.append(wrap);
      });
      contentContainer.append(specsDl);
    }

    const body = createEl('div', 'reader-body');
    item.sections.forEach((sec) => {
      if (sec.heading) {
        body.append(createEl('h3', 'reader-subheading', sec.heading));
      }
      sec.paragraphs.forEach((text) => {
        body.append(createEl('p', '', text));
      });
    });

    if (item.pullquote) {
      const quote = createEl('blockquote', 'reader-pullquote', `“${item.pullquote}”`);
      body.append(quote);
    }

    contentContainer.append(body);
  }

  function openModal(itemId, triggerEl) {
    const item = ARCHIVE_ITEMS[itemId];
    if (!item) return;

    lastTrigger = triggerEl || document.activeElement;
    renderItem(item);

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
    contentContainer.scrollTop = 0;
    closeBtn?.focus();
  }

  function closeModal() {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-open-item]');
    if (!trigger) return;
    event.preventDefault();
    const itemId = trigger.getAttribute('data-open-item');
    openModal(itemId, trigger);
  });

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  modal.addEventListener('cancel', () => {
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      requestAnimationFrame(() => lastTrigger.focus());
    }
  });
}

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

/* ==========================================================================
   5. COPY EMAIL & CONTACT FORM VALIDATION
   ========================================================================== */
function initContact() {
  const EMAIL_ADDRESS = 'hello@denizkaya.studio';
  const copyButtons = document.querySelectorAll('[data-copy-email]');

  copyButtons.forEach((btn) => {
    const originalText = btn.textContent;
    let resetTimerId = null;

    btn.addEventListener('click', async () => {
      if (resetTimerId) clearTimeout(resetTimerId);
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(EMAIL_ADDRESS);
        } else {
          fallbackCopy(EMAIL_ADDRESS);
        }
        btn.textContent = 'Copied ✓';
      } catch {
        btn.textContent = EMAIL_ADDRESS;
      }

      resetTimerId = setTimeout(() => {
        btn.textContent = originalText;
        resetTimerId = null;
      }, 2200);
    });
  });

  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorMessage = document.getElementById('error-message');
  const statusEl = document.getElementById('form-status');

  const clearError = (input, errorEl) => {
    input?.removeAttribute('aria-invalid');
    if (errorEl) errorEl.textContent = '';
  };

  nameInput?.addEventListener('input', () => clearError(nameInput, errorName));
  emailInput?.addEventListener('input', () => clearError(emailInput, errorEmail));
  messageInput?.addEventListener('input', () => clearError(messageInput, errorMessage));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let hasError = false;

    const nameVal = nameInput?.value.trim() || '';
    const emailVal = emailInput?.value.trim() || '';
    const msgVal = messageInput?.value.trim() || '';

    if (!nameVal) {
      nameInput?.setAttribute('aria-invalid', 'true');
      if (errorName) errorName.textContent = 'Please enter your name.';
      hasError = true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailPattern.test(emailVal)) {
      emailInput?.setAttribute('aria-invalid', 'true');
      if (errorEmail) errorEmail.textContent = 'Please enter a valid email address.';
      hasError = true;
    }

    if (msgVal.length < 10) {
      messageInput?.setAttribute('aria-invalid', 'true');
      if (errorMessage) errorMessage.textContent = 'Please add a short note (at least 10 characters).';
      hasError = true;
    }

    if (hasError) {
      if (statusEl) statusEl.textContent = '';
      return;
    }

    if (statusEl) {
      statusEl.replaceChildren();
      const subject = encodeURIComponent(`Website inquiry from ${nameVal}`);
      const body = encodeURIComponent(`From: ${nameVal} (${emailVal})\n\n${msgVal}`);
      const mailtoHref = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;

      const msgSpan = document.createTextNode('Note validated. Since this site has no backend server yet, ');
      const mailLink = document.createElement('a');
      mailLink.href = mailtoHref;
      mailLink.textContent = 'open in your mail app';
      const endSpan = document.createTextNode(' to send directly.');
      statusEl.append(msgSpan, mailLink, endSpan);
    }

    form.reset();
  });
}

function fallbackCopy(text) {
  const temp = document.createElement('textarea');
  temp.value = text;
  temp.setAttribute('readonly', '');
  temp.style.position = 'fixed';
  temp.style.opacity = '0';
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
}

/* ==========================================================================
   6. PRINT / SAVE CV TRIGGER
   ========================================================================== */
function initPrintCV() {
  const printBtn = document.getElementById('print-cv');
  if (!printBtn) return;

  printBtn.addEventListener('click', () => {
    window.print();
  });
}

/* ==========================================================================
   7. FIXED MINIMAL FOX COMPANION (SCOPED: PROJECTS -> PERSONAL NOTE)
   ========================================================================== */
function initFoxRunner() {
  const rail = document.getElementById('fox-runner-rail');
  const fox = document.getElementById('fox-runner');
  const projectsEl = document.getElementById('projects');
  const aboutEl = document.getElementById('about');
  const modal = document.getElementById('reader-modal');

  if (!rail || !fox || !projectsEl || !aboutEl) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentProgress = 0;
  let targetProgress = 0;
  let lastScrollY = window.scrollY;
  let rafId = null;
  let idleTimer = null;
  let isHovered = false;

  const getSectionProgress = () => {
    const projectsRect = projectsEl.getBoundingClientRect();
    const aboutRect = aboutEl.getBoundingClientRect();
    const startY = projectsRect.top + window.scrollY - window.innerHeight * 0.45;
    const endY = aboutRect.bottom + window.scrollY - window.innerHeight * 0.25;
    const span = endY - startY;

    if (span <= 0) return 0;
    return Math.min(1, Math.max(0, (window.scrollY - startY) / span));
  };

  function renderFrame() {
    const diff = targetProgress - currentProgress;
    if (reducedMotion || Math.abs(diff) < 0.0005) {
      currentProgress = targetProgress;
    } else {
      currentProgress += diff * 0.14;
    }

    const modalOpen = Boolean(modal && modal.hasAttribute('open'));
    const beforeZone = currentProgress <= 0.003;
    const afterZone = currentProgress >= 0.995;
    const shouldHide = modalOpen || (!isHovered && (beforeZone || afterZone));

    rail.classList.toggle('is-hidden', shouldHide);

    // Run smoothly from just off the left edge to just past the right edge
    const foxWidth = fox.offsetWidth || 86;
    const startX = -foxWidth - 10;
    const endX = window.innerWidth + 14;
    const x = startX + (endX - startX) * currentProgress;

    fox.style.transform = `translate3d(${x.toFixed(1)}px, 0, 0)`;

    // Soft entry from the left and smooth fade-out as it exits past the right side
    let foxOpacity = 1;
    if (!isHovered) {
      if (currentProgress < 0.05) {
        foxOpacity = Math.max(0, currentProgress / 0.05);
      } else if (currentProgress > 0.92) {
        foxOpacity = Math.max(0, 1 - (currentProgress - 0.92) / 0.08);
      }
    }
    fox.style.opacity = foxOpacity.toFixed(2);

    if (!reducedMotion && Math.abs(targetProgress - currentProgress) >= 0.0005) {
      rafId = requestAnimationFrame(renderFrame);
    } else {
      rafId = null;
    }
  }

  function scheduleRender() {
    if (!rafId) {
      rafId = requestAnimationFrame(renderFrame);
    }
  }

  function onScroll() {
    const scrollY = window.scrollY;
    const delta = scrollY - lastScrollY;
    lastScrollY = scrollY;

    if (Math.abs(delta) > 1) {
      fox.classList.toggle('is-facing-left', delta < 0);
      if (!reducedMotion) {
        fox.classList.add('is-running');
        if (idleTimer) clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
          fox.classList.remove('is-running');
        }, 170);
      }
    }

    targetProgress = getSectionProgress();
    scheduleRender();
  }

  fox.addEventListener('pointerenter', () => {
    isHovered = true;
    fox.classList.remove('is-running');
    scheduleRender();
  });

  fox.addEventListener('pointerleave', () => {
    isHovered = false;
    scheduleRender();
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    targetProgress = getSectionProgress();
    scheduleRender();
  });

  // Recalculate travel bounds automatically if project filters change section height
  if ('ResizeObserver' in window) {
    const layoutObserver = new ResizeObserver(() => {
      targetProgress = getSectionProgress();
      scheduleRender();
    });
    layoutObserver.observe(document.body);
  }

  // Sync visibility when modal opens/closes
  if (modal && 'MutationObserver' in window) {
    const modalObserver = new MutationObserver(scheduleRender);
    modalObserver.observe(modal, { attributes: true, attributeFilter: ['open'] });
  }

  targetProgress = getSectionProgress();
  currentProgress = targetProgress;
  renderFrame();
}

/* ==========================================================================
   8. INTERACTIVE FOX PETTING (HOVER, STROKE & TAP — VISUAL ONLY)
   ========================================================================== */
function initFoxPetting() {
  const targets = document.querySelectorAll('[data-pettable-fox]');
  if (!targets.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function spawnParticle(x, y, isHeart) {
    if (reducedMotion) return;

    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('aria-hidden', 'true');
    svg.classList.add('pet-particle');

    const path = document.createElementNS(svgNS, 'path');
    if (isHeart) {
      path.setAttribute(
        'd',
        'M8 14.2 6.9 13.2C3.3 9.9 1.2 8 1.2 5.5 1.2 3.6 2.7 2.2 4.5 2.2c1.1 0 2.2.5 2.9 1.4h1.2c.7-.9 1.8-1.4 2.9-1.4 1.8 0 3.3 1.4 3.3 3.3 0 2.5-2.1 4.4-5.7 7.7L8 14.2Z'
      );
      path.setAttribute('fill', '#E2FF70');
      path.setAttribute('stroke', '#141414');
      path.setAttribute('stroke-width', '1.2');
    } else {
      path.setAttribute('d', 'M8 1 9.8 6.2 15 8 9.8 9.8 8 15 6.2 9.8 1 8 6.2 6.2Z');
      path.setAttribute('fill', '#FAF9F5');
      path.setAttribute('stroke', '#141414');
      path.setAttribute('stroke-width', '1');
    }

    svg.appendChild(path);
    const jitterX = (Math.random() - 0.5) * 24;
    const rot = ((Math.random() - 0.5) * 24).toFixed(1);
    svg.style.left = `${x + (Math.random() - 0.5) * 14}px`;
    svg.style.top = `${y - 4}px`;
    svg.style.setProperty('--pet-dx', `${jitterX.toFixed(1)}px`);
    svg.style.setProperty('--pet-rot', `${rot}deg`);

    document.body.appendChild(svg);
    svg.addEventListener('animationend', () => svg.remove(), { once: true });
    setTimeout(() => svg.remove(), 900);
  }

  targets.forEach((el) => {
    let lastX = null;
    let lastY = null;
    let strokeDist = 0;
    let settleTimer = null;

    function triggerPetPulse(clientX, clientY, count = 1) {
      el.classList.add('is-petting');
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        el.classList.remove('is-petting');
      }, 750);

      for (let i = 0; i < count; i += 1) {
        spawnParticle(clientX, clientY, i % 2 === 0);
      }
    }

    el.addEventListener('pointerenter', (event) => {
      lastX = event.clientX;
      lastY = event.clientY;
      strokeDist = 0;
      const rect = el.getBoundingClientRect();
      triggerPetPulse(event.clientX || rect.left + rect.width / 2, event.clientY || rect.top + 8, 2);
    });

    el.addEventListener('pointermove', (event) => {
      if (lastX === null || lastY === null) {
        lastX = event.clientX;
        lastY = event.clientY;
        return;
      }
      const dist = Math.hypot(event.clientX - lastX, event.clientY - lastY);
      lastX = event.clientX;
      lastY = event.clientY;
      strokeDist += dist;

      if (strokeDist >= 26) {
        strokeDist = 0;
        triggerPetPulse(event.clientX, event.clientY, 1);
      }
    });

    el.addEventListener('pointerleave', () => {
      lastX = null;
      lastY = null;
      strokeDist = 0;
      if (settleTimer) clearTimeout(settleTimer);
      el.classList.remove('is-petting');
    });

    el.addEventListener('click', () => {
      const rect = el.getBoundingClientRect();
      triggerPetPulse(rect.left + rect.width / 2, rect.top + rect.height * 0.25, 3);
    });
  });
}
