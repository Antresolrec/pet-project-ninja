export default function scrollHeader() {
  const srcValue = window.pageYOffset;
  const header = document.querySelector('.header__wrapper');
  if (header !== null) {
    if (srcValue > 0) {
      header.classList.add('_scroll');
    } else {
      header.classList.remove('_scroll');
    }
  }
}
