let uA = window.navigator.userAgent;
function isIE() {
  uA = navigator.userAgent;
  const isIe = uA.indexOf('MSIE ') > -1 || uA.indexOf('Trident/') > -1;
  return isIe;
}
if (isIE()) {
  document.querySelector('html').classList.add('fix-ie');
}
