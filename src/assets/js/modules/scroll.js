import * as SmoothScroll from './smoothScroll/smoothScroll';
import menuClose from './burger';

const scrItems = document.querySelectorAll('.js-anim');

function offsetPage(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

export default function setScroll() {
  const srcValue = window.scrollY;

  if (scrItems) {
    for (let index = 0; index < scrItems.length; index++) {
      const scrItem = scrItems[index];
      const scrItemOffset = offsetPage(scrItem).top;
      const scrItemHeight = scrItem.offsetHeight;

      let scrItemPoint =
        window.innerHeight - (window.innerHeight - scrItemHeight / 3);
      if (window.innerHeight > scrItemHeight) {
        scrItemPoint = window.innerHeight - scrItemHeight / 3;
      }

      if (
        srcValue > scrItemOffset - scrItemPoint &&
        srcValue < scrItemOffset + scrItemHeight
      ) {
        scrItem.classList.add('_show');
        // scroll_load_item(scrItem);
      } else {
        // scrItem.classList.remove('_show');
      }
    }
  }
}

function goTo(targetBlock, speed, offset = 80) {
  const header = '';
  // OffsetHeader
  // if (window.innerWidth < 992) {
  //	header = 'header';
  // }
  const options = {
    speedAsDuration: true,
    speed,
    header,
    offset,
    easing: 'easeOutQuad',
  };
  const scr = new SmoothScroll();
  scr.animateScroll(targetBlock, '', options);
}

const link = document.querySelectorAll('._goto');

if (link) {
  const blocks = [];
  for (let index = 0; index < link.length; index++) {
    const el = link[index];
    const blockName = el.getAttribute('href').replace('#', '');
    if (blockName !== '' && !blocks.indexOf(blockName)) {
      blocks.push(blockName);
    }
    el.addEventListener('click', (e) => {
      if (document.querySelector('.nav-header__wrapper._open')) {
        menuClose(250);
      }
      const targetBlockClass = el.getAttribute('href').replace('#', '');
      const targetBlock = document.querySelector(`.${targetBlockClass}`);
      goTo(targetBlock, 300);
      e.preventDefault();
    });
  }
}
