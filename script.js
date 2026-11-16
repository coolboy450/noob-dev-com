// เมนูมือถือ
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'ปิดเมนู' : 'เปิดเมนู');
});
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});

// (email signup removed: there is no mailing list behind it yet, so the form only pretended to subscribe)
