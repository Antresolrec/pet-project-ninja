import setScroll from './scroll';
import scrollHeader from './header-scroll';

window.addEventListener('load', () => {
  setScroll();
  scrollHeader();
  document.querySelector('.wrapper').classList.add('_loaded');
});
