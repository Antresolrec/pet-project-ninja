import setScroll from './scroll';
import scrollHeader from './header-scroll';
import trackScroll from './backToTop';

window.addEventListener('scroll', () => {
  scrollHeader();
  trackScroll();
  setTimeout(() => {
    setScroll();
  }, 100);
});
