import scrollHeader from './header-scroll';
import trackScroll from './backToTop';
import { setScroll, activeLinks } from './scroll';

window.addEventListener('scroll', () => {
  scrollHeader();
  trackScroll();
  activeLinks();
  setScroll();
});
