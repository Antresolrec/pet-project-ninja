const fillEffects = document.querySelectorAll('.fill-effect');

if (fillEffects) {
  fillEffects.forEach((effect) => {
    ['mouseenter', 'mouseout'].forEach((evt) => {
      effect.addEventListener(evt, (e) => {
        const parentOffset = effect.getBoundingClientRect();
        const relX = e.pageX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;
        const i = effect.querySelector('i');
        i.style.top = `${relY}px`;
        i.style.left = `${relX}px`;
      });
    });
  });
}
