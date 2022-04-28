import * as textMaskCore from './textMaskCoreModul/textMaskCoreModul';

const phoneMask = document.querySelectorAll('.phone-mask');

phoneMask.forEach((item) => {
  const mask = textMaskCore.createTextMaskInputElement({
    inputElement: item,
    mask: [
      '+',
      '7',
      ' ',
      '(',
      /[1-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ],
  });

  item.addEventListener('input', () => {
    mask.update();
  });
});

const dateStaticMask = document.querySelectorAll('.date-static-mask');

dateStaticMask.forEach((item) => {
  const mask = textMaskCore.createTextMaskInputElement({
    inputElement: item,
    mask: [
      /[0-3]/,
      /[0-9]/,
      '.',
      /[0-1]/,
      /[0-9]/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  });

  item.addEventListener('input', () => {
    mask.update();
  });
});

const dateRangeMask = document.querySelectorAll('.date-range-mask');

dateRangeMask.forEach((item) => {
  const mask = textMaskCore.createTextMaskInputElement({
    inputElement: item,
    mask: [
      /[0-3]/,
      /[0-9]/,
      '.',
      /[0-1]/,
      /[0-9]/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      ' ',
      '-',
      ' ',
      /[0-3]/,
      /[0-9]/,
      '.',
      /[0-1]/,
      /[0-9]/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  });

  item.addEventListener('input', () => {
    mask.update();
  });
});
