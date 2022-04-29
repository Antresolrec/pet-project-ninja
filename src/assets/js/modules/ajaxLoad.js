const loadSections = document.querySelectorAll('.js-load-section');

const initLoad = function (section) {
  let url;
  const loadTarget = section.querySelector('.js-load-target');
  const loadTrigger = section.querySelector('.js-load');

  const sendRequest = function (onSuccess, onError) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
      if (xhr.status === 200 && onSuccess) {
        onSuccess(xhr.response);
      } else {
        onError(xhr.response);
      }
    });

    xhr.addEventListener('error', () => {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', () => {
      onError(`Запрос не успел выполниться за ${xhr.timeout}мс`);
    });

    xhr.timeout = 10000;

    xhr.open('GET', url);
    xhr.send();
  };

  const onErrorLoad = function (data) {
    console.log(data);
  };

  const onSuccessLoad = function (data) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = data;
    loadTrigger.parentNode.removeChild(loadTrigger);

    const elements = wrapper.querySelectorAll('.js-load-item'); //  Ищем элементы
    // const pagination = wrapper.querySelector('.js-load'); //  Ищем навигацию

    if (elements) {
      const fragment = document.createDocumentFragment();
      Array.prototype.forEach.call(elements, (element) => {
        fragment.appendChild(element);
      });
      loadTarget.appendChild(fragment);
    }

    // if (pagination) {
    //   const triggerButton = pagination.querySelector('[data-url]');
    //   section.appendChild(pagination);
    //   triggerButton.addEventListener('click', onLoadTriggerClick);
    // }
  };

  const onLoadTriggerClick = function (evt) {
    evt.preventDefault();
    const button = evt.currentTarget;
    url = button.getAttribute('data-url');
    sendRequest(onSuccessLoad, onErrorLoad);
  };

  if (loadTarget && loadTrigger) {
    const triggerButton = loadTrigger.querySelector('[data-url]');
    if (triggerButton) {
      triggerButton.addEventListener('click', onLoadTriggerClick);
    }
  }
};

if (loadSections) {
  Array.prototype.forEach.call(loadSections, (section) => {
    initLoad(section);
  });
}
