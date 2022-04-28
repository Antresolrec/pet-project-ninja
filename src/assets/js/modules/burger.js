const iconBurger = document.querySelector('.nav-header__burger');
let unlock = true;

function bodyLockRemove(delay) {
  const body = document.querySelector('body');
  if (unlock) {
    const lockPadding = document.querySelectorAll('.js-lock-padding');
    setTimeout(() => {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');
    }, delay);

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, delay);
  }
}

function bodyLockAdd(delay) {
  const body = document.querySelector('body');
  if (unlock) {
    const lockPadding = document.querySelectorAll('.js-lock-padding');
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = `${
        window.innerWidth - document.querySelector('.wrapper').offsetWidth
      }px`;
    }
    body.style.paddingRight = `${
      window.innerWidth - document.querySelector('.wrapper').offsetWidth
    }px`;
    body.classList.add('_lock');

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, delay);
  }
}

function bodyLock(delay) {
  const body = document.querySelector('body');
  if (body.classList.contains('_lock')) {
    bodyLockRemove(delay);
  } else {
    bodyLockAdd(delay);
  }
}

function menuClose(delay) {
  const menuBody = document.querySelector('.nav-header__wrapper');
  iconBurger.classList.remove('_open');
  menuBody.classList.remove('_open');
  bodyLockRemove(delay);
}

if (iconBurger) {
  const delay = 250;
  const menuBody = document.querySelector('.nav-header__wrapper');
  iconBurger.addEventListener('click', (e) => {
    e.preventDefault();
    if (unlock) {
      bodyLock(delay);
      iconBurger.classList.toggle('_open');
      menuBody.classList.toggle('_open');
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
      menuClose();
    }
  });
}

export default menuClose;
