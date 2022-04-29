import setScroll from './scroll';
import scrollHeader from './header-scroll';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.wrapper').classList.add('_loaded');
  document.body.classList.remove('off-animations');
  setScroll();
  scrollHeader();
});
