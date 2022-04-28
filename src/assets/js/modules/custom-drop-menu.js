const customDropMenu = document.querySelectorAll('.js-drop');

export default function closeDropMenu(target) {
  if (!target.closest('._open')) {
    customDropMenu.forEach((dropMenu) => {
      dropMenu.parentNode.classList.remove('_open');
    });
  }
}
if (customDropMenu) {
  customDropMenu.forEach((dropMenu) => {
    dropMenu.addEventListener('click', (e) => {
      const isCurOpen = e.currentTarget.parentNode.classList.contains('_open');
      const target = e.currentTarget;
      if (isCurOpen) {
        target.parentNode.classList.remove('_open');
      } else {
        customDropMenu.forEach((thisDropMenu) => {
          thisDropMenu.parentNode.classList.remove('_open');
        });
        target.parentNode.classList.add('_open');
      }
    });
  });
}
