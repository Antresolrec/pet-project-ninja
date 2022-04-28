import closeDropMenu from './custom-drop-menu';

document.addEventListener('click', (e) => {
  const target = e.target;
  closeDropMenu(target);
});
