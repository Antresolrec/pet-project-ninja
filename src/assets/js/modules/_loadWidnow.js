import setScroll from './scroll';
import scrollHeader from './header-scroll';

window.addEventListener('load', () => {
  document.body.classList.remove('off-animations');
  setScroll();
  scrollHeader();
  document.querySelector('.wrapper').classList.add('_loaded');
});
