let ua = window.navigator.userAgent;
function isIE() {
  ua = navigator.userAgent;
  const isIe = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
  return isIe;
}
if (isIE()) {
  document.querySelector('html').classList.add('fix-ie');
}
