const backToTop = document.querySelector('.back-to-top');

export default function trackScroll() {
  const offsetTop = window.pageYOffset;
  const userWindow = document.documentElement.clientHeight;
  const showClass = '_show';

  if (offsetTop > userWindow) {
    backToTop.classList.add(showClass);
  } else {
    backToTop.classList.remove(showClass);
  }
}
