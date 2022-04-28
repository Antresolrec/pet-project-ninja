const backToTop = document.querySelector('.back-to-top');

export default function trackScroll() {
  const offsetTop = window.pageYOffset;
  const userWindow = document.documentElement.clientHeight;

  if (offsetTop > userWindow) {
    backToTop.classList.add('_show');
  } else {
    backToTop.classList.remove('_show');
  }
}
