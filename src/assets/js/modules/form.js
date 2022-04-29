import popupOpenUniversalForm from './popups';

const forms = document.querySelectorAll('.js-form');

function validatiobGroupCheckbox(group) {
  const quantityCheckbox = group.getAttribute('data-quantity');
  const fields = group.querySelectorAll('input');
  let counter = 0;

  fields.forEach((item) => {
    if (item.checked) {
      counter++;
    }
  });

  return counter < quantityCheckbox;
}

function validationField(field) {
  const parent = field.parentNode;
  const errorClass = '_error';
  const dataValidate = field.getAttribute('data-validate');
  const patternEmail = /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
  const message = field.parentNode.querySelector('.form-error');

  switch (dataValidate) {
    case 'text':
      if (field.value === '') {
        parent.classList.add(errorClass);
        return false;
      }
      break;
    case 'phone':
      if (field.value === '' || field.value.indexOf('_') !== -1) {
        parent.classList.add(errorClass);
        return false;
      }
      break;
    case 'email':
      if (field.value === '') {
        message.innerHTML = 'Some text of error';
        parent.classList.add(errorClass);
        return false; // test
      }
      if (field.value.toLowerCase().search(patternEmail) !== 0) {
        message.innerHTML = 'Email field must be valid';
        parent.classList.add(errorClass);
        return false; // test
      }
      break;
    case 'checkbox':
      if (field.checked === false) {
        parent.classList.add(errorClass);
        return false; // test
      }
      break;
    case 'group-checkbox':
      if (validatiobGroupCheckbox(field)) {
        field.classList.add(errorClass);
        return false; // test
      }
      break;
    case 'pass':
      if (field.value === '') {
        parent.classList.add(errorClass);
        return false; // test
      }
      break;
    case 'new-pass-repeat':
      if (
        field.value === '' ||
        field.value !==
          field.parentNode.parentNode.parentNode.querySelector(
            '.input--new-pass'
          ).value
      ) {
        parent.classList.add(errorClass);
        return false; // test
      }
      break;
    default:
      parent.classList.remove(errorClass);
  }
  parent.classList.remove(errorClass);
  return true;
}

forms.forEach((form) => {
  const items = form.querySelectorAll('*[data-validate]');
  items.forEach((item) => {
    item.addEventListener('blur', () => {
      validationField(item);
    });
  });
  form.send = function () {
    const fields = this.querySelectorAll('*[data-validate]');
    const validationArray = [];
    let messageTitle = this.querySelector('.js-form__message-title');
    let messageText = this.querySelector('.js-form__message-text');

    messageTitle = messageTitle ? messageTitle.innerHTML.trim() : '';
    messageText = messageText ? messageText.innerHTML.trim() : '';

    fields.forEach((item) => {
      const parent = item.parentNode;
      item.classList.remove('_error');
      parent.classList.remove('_error');
      validationArray.push(validationField(item));
    });

    if (!validationArray.includes(false, 0)) {
      const data = new FormData(this);
      const ajax = new XMLHttpRequest();
      const type = 'post';
      const action = this.getAttribute('action') || window.location.href;

      ajax.open(type, action);

      if (type.toLowerCase() === 'post') {
        ajax.addEventListener('load', () => {
          if (ajax.status === 200) {
            if (ajax.response) {
              try {
                const obj = JSON.parse(ajax.response);
                if (obj.reload === 'y') {
                  document.location.reload();
                  // console.log('reload')
                } else if (obj.message || obj.title) {
                  popupOpenUniversalForm(
                    obj.title ? obj.title : '',
                    obj.message ? obj.message : ''
                  );
                } else {
                  popupOpenUniversalForm(messageTitle, messageText);
                }
              } catch (e) {
                // console.log(e);
                popupOpenUniversalForm(messageTitle, messageText, true);
              }
            } else {
              popupOpenUniversalForm(messageTitle, messageText, true);
            }
          } else {
            // callback ошибки на сервере
            // self._callbackError();
            popupOpenUniversalForm(
              'Server Error',
              'Repeat February Later',
              true
            );
          }
        });

        ajax.send(data);
      }
    }
  };
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fields = this.querySelectorAll('*[data-validate]');
    const validationArray = [];
    let messageTitle = this.querySelector('.js-form__message-title');
    let messageText = this.querySelector('.js-form__message-text');

    messageTitle = messageTitle ? messageTitle.innerHTML.trim() : '';
    messageText = messageText ? messageText.innerHTML.trim() : '';

    fields.forEach((item) => {
      const parent = item.parentNode;
      item.classList.remove('_error');
      parent.classList.remove('_error');
      validationArray.push(validationField(item));
    });

    if (!validationArray.includes(false, 0)) {
      const data = new FormData(this);
      const ajax = new XMLHttpRequest();
      const type = 'post';
      const action = this.getAttribute('action') || window.location.href;

      ajax.open(type, action);

      if (type.toLowerCase() === 'post') {
        ajax.addEventListener('load', () => {
          if (ajax.status === 200) {
            // callback успешной отправки
            // self._callbackDone();
            popupOpenUniversalForm(messageTitle, messageText);
          } else {
            // callback ошибки на сервере
            // self._callbackError();
            popupOpenUniversalForm('Server Error', 'Repeat February Later');
          }
        });

        ajax.send(data);
      }
    }
  });
});
