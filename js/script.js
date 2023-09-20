let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()) {
    document.body.classList.add('mobile')
} else {
    document.body.classList.add('pc')
}

if (document.getElementById("faq__item-wrapper") !== null) {
    document.querySelectorAll('.faq__item-description p').forEach(function (item) {
        item.addEventListener('click', function () {
            let id = this.getAttribute('data-tab');
            document.querySelector('.faq__popup[data-contant="' + id + '"]').classList.add('active');
            document.querySelector('.faq__popup[data-contant="' + id + '"]').nextElementSibling.classList.add('active');
            document.body.classList.add('block');
        })
    })

    document.querySelectorAll('.faq__close').forEach(function (item) {
        item.addEventListener('click', function () {
            item.closest('.faq__popup.active').classList.remove('active');
            document.body.classList.remove('block');
        })
    })
}
else {
    console.log("'faq__item-wrapper' does not exist");
}

if (document.body.classList.contains('mobile')) {
    document.querySelectorAll('.faq__item-description').forEach(function (item) {
        item.addEventListener('click', function () {
            item.previousElementSibling.classList.add('active');
        })
    })
}