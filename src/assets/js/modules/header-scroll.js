const header = document.querySelector('.header__wrapper');
const scrollClass = '_scroll';

function scrollHeader() {
  if (header) {
    const srcValue = window.pageYOffset;
    if (srcValue > 0) {
      header.classList.add(scrollClass);
    } else {
      header.classList.remove(scrollClass);
    }
  }
}

scrollHeader();

export default scrollHeader;
