/* eslint-disable */
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll("._lp");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            // const curentPopup = document.getElementById(popupName);
            const curentPopup = document.querySelector('.popup_' + popupName);
            if (this.getAttribute('data-video')) {
                let container = curentPopup.querySelector('.video-container');
                console.log(container);
                container.innerHTML = `
					<iframe width="auto" height="315" src="${popupLink.getAttribute('data-video')}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`;
            }
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup, noCloseActivePopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (!noCloseActivePopup && popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
        // if (getInternetExplorerVersion() !== -1) {
        //     // IE обнаружен
        //     let body = curentPopup.querySelector(".popup__content");
        //     console.log($(body).height(), $(window).height())
        //     if ($(body).height() + 50 > $(window).height()) {
        //         curentPopup.classList.add('popup--fix-ie');
        //     }
        // }
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock-popup');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock-popup');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();


export default function popupOpenUniversalForm(title = '', text = '', noCloseActivePopup = false) {
    // let modal = document.getElementById('universal-form');
    let modal = document.querySelector('.popup-universal');
    let titleModal = modal ? modal.querySelector('.popup-universal__title') : null;
    let textModal = modal ? modal.querySelector('.popup-universal__text') : null;

    console.log(titleModal)

    titleModal.innerHTML = title;
    if (titleModal) {
        titleModal.innerHTML = title;
    }
    if (textModal) {
        textModal.innerHTML = text;
    }

    if (modal) {
        popupOpen(modal, noCloseActivePopup);
    }
}

// window.popupOpen = popupOpenUniversalForm;

(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

/* eslint-enable */
