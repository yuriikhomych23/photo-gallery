// створюємо слайдер для фоток 

let btnPrev = document.querySelector('#gallery .buttons .prev');
let btnNext = document.querySelector('#gallery .buttons .next');

let images = document.querySelectorAll('#gallery .photos img');

let i = 0;


btnPrev.onclick = function () {
    images[i].className = ''
    i--;
    if(i < 0) {
        i = images.length - 1;
    }

    images[i].className = 'showed'; // присвоюємо до попередніх картинок клас showed  і спрацьовує opacity
}

btnNext.onclick = function () {
    images[i].className = '';
    i++;
    if(i >= images.length) {
        i = 0;
    }

    images[i].className = 'showed'; // присвоєюмо до наступний картинок клас showed і спрацьовує opacity, застримка 1 секунда 
}
