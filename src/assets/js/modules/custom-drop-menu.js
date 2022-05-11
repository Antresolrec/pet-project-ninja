const customDropMenu = document.querySelectorAll('.js-drop');
const openClass = '_open';

export default function closeDropMenu(target) {
  if (!target.closest('._open')) {
    customDropMenu.forEach((dropMenu) => {
      dropMenu.parentNode.classList.remove(openClass);
    });
  }
}
if (customDropMenu) {
  customDropMenu.forEach((dropMenu) => {
    dropMenu.addEventListener('click', (e) => {
      const isCurOpen = e.currentTarget.parentNode.classList.contains(
        openClass
      );
      const target = e.currentTarget;
      if (isCurOpen) {
        target.parentNode.classList.remove(openClass);
      } else {
        customDropMenu.forEach((thisDropMenu) => {
          thisDropMenu.parentNode.classList.remove(openClass);
        });
        target.parentNode.classList.add(openClass);
      }
    });
  });
}
