const mouseParallax = document.querySelectorAll('.mouse-parallax');
if (mouseParallax) {
  for (let index = 0; index < mouseParallax.length; index++) {
    const item = mouseParallax[index];
    const mouseParallaxSpeed = item.getAttribute('data-parallax-speed');
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (item.hasAttribute('data-parallax-rev')) {
        item.style.transform = `translate3d(${x * mouseParallaxSpeed}px, ${
          y * mouseParallaxSpeed
        }px, 0)`;
      } else {
        item.style.transform = `translate3d(-${x * mouseParallaxSpeed}px, -${
          y * mouseParallaxSpeed
        }px, 0)`;
      }
    });
  }
}
