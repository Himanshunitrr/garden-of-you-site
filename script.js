(() => {
  const shots = window.__SCREENSHOTS__ || [];
  const track = document.getElementById('track');

  // theme
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('goy_theme');
  if (saved === 'dark' || saved === 'light') root.dataset.theme = saved;

  const updateThemeIcon = () => {
    const isDark = root.dataset.theme === 'dark';
    btn.textContent = isDark ? '☼' : '☾';
    btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  };
  updateThemeIcon();

  btn.addEventListener('click', () => {
    root.dataset.theme = (root.dataset.theme === 'dark') ? 'light' : 'dark';
    localStorage.setItem('goy_theme', root.dataset.theme);
    updateThemeIcon();
  });

  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // build slides
  const makeSlide = (src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';

    const a = document.createElement('a');
    a.href = src;
    a.target = '_blank';
    a.rel = 'noopener';

    const img = document.createElement('img');
    img.src = src;
    img.alt = `App screenshot ${i+1}`;
    img.loading = i === 0 ? 'eager' : 'lazy';

    a.appendChild(img);
    slide.appendChild(a);
    return slide;
  };

  if (track && shots.length) {
    shots.forEach((s, i) => track.appendChild(makeSlide(s, i)));
  }

  // controls
  const next = document.getElementById('nextBtn');
  const prev = document.getElementById('prevBtn');

  const scrollBySlide = (dir) => {
    const width = track?.clientWidth || 0;
    track?.scrollBy({ left: dir * width, behavior: 'smooth' });
  };

  next?.addEventListener('click', () => scrollBySlide(1));
  prev?.addEventListener('click', () => scrollBySlide(-1));
})();
