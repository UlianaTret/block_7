import '../scss/style.scss'

//показать полное меню
const btnShowMenu = document.querySelector('.show-full-menu');
btnShowMenu.addEventListener('click', showFullMenu);
function showFullMenu() {
  document.querySelector('.full-menu').style.display = 'unset';
}

//закрыть полное меню
const blurFullMenu = document.querySelector('.menu-opacity');
blurFullMenu.addEventListener('click', closeFullMenu);
const btnCloseMenu = document.querySelector('.close-full-menu');
btnCloseMenu.addEventListener('click', closeFullMenu);
function closeFullMenu() {
  document.querySelector('.full-menu').style.display = 'none';
}

//показать обратную свзять
const btnShowFeedBack = document.querySelector('.chat');
btnShowFeedBack.addEventListener('click', showFeedBack);
const btnGetFeedBack = document.querySelector('.additional-list__chat');
btnGetFeedBack.addEventListener('click', showFeedBack);
function showFeedBack() {
  document.querySelector('.feedback').style.display = 'unset';
  document.querySelector('.callback').style.display = 'none';
}

//закрыть обратную связь
const btnCloseFeedBack = document.querySelector('.close-feedback');
btnCloseFeedBack.addEventListener('click', closeFeedBack);
const blurFeedBack = document.querySelector('.feedback-opacity');
blurFeedBack.addEventListener('click', closeFeedBack);
function closeFeedBack() {
  document.querySelector('.feedback').style.display = 'none';
}

//показать заказ звонка
const btnShowCallBack = document.querySelector('.call');
btnShowCallBack.addEventListener('click', showCallBack);
const btnGetChat = document.querySelector('.additional-list__call');
btnGetChat.addEventListener('click', showCallBack);
function showCallBack() {
  document.querySelector('.callback').style.display = 'unset';
  document.querySelector('.feedback').style.display = 'none';
}

//закрыть заказ звонка
const btnCloseCallBack = document.querySelector('.close-callback');
btnCloseCallBack.addEventListener('click', closeCallBack);
const blurCallBack = document.querySelector('.callback-opacity');
blurCallBack.addEventListener('click', closeCallBack);
function closeCallBack() {
  document.querySelector('.callback').style.display = 'none';
}

//показать статью о компании
const btnMoreInfo = document.querySelector('.read-more');
btnMoreInfo.addEventListener('click',function(event) {
    document.querySelector('.block__infoCPS').style.overflow = 'visible';
    document.querySelector('.block__infoCPS').style.height = 'auto'; //'100%';
    document.querySelector('.read-more').style.display = 'none';
    document.querySelector('.read-less').style.display = 'unset';
});

//скрыть статью о компании
const btnLessInfo = document.querySelector('.read-less');
btnLessInfo.addEventListener('click', function(event) {
    document.querySelector('.block__infoCPS').style.overflow = '';
    document.querySelector('.block__infoCPS').style.height = '';
    document.querySelector('.read-more').style.display = 'unset';
    document.querySelector('.read-less').style.display = 'none';
});

//бренды показать
const btnMoreBrands = document.querySelector('.show-more');
btnMoreBrands.addEventListener('click', function(event) {
    document.querySelector('.list-logo').style.overflow = 'visible';
    document.querySelector('.list-logo').style.height = '100%';
    document.querySelector('.show-more').style.display = 'none';
    document.querySelector('.show-less').style.display = 'unset';
});

//бренды скрыть
const btnLessBrands = document.querySelector('.show-less');
btnLessBrands.addEventListener('click', function(event) {
    document.querySelector('.list-logo').style.overflow = '';
    document.querySelector('.list-logo').style.height = '';
    document.querySelector('.show-more').style.display = 'unset';
    document.querySelector('.show-less').style.display = 'none';
});

//Сервисы показать
const btnMoreServices = document.querySelector('.btn-more-services');
btnMoreServices.addEventListener('click', function(event) {
    document.querySelector('.list-services').style.overflow = 'visible';
    document.querySelector('.list-services').style.height = '100%';
    document.querySelector('.btn-more-services').style.display = 'none';
    document.querySelector('.btn-less-services').style.display = 'unset';
});

//Сервисы скрыть
const btnLessServices = document.querySelector('.btn-less-services');
btnLessServices.addEventListener('click', function(event) {
    document.querySelector('.list-services').style.overflow = '';
    document.querySelector('.list-services').style.height = '';
    document.querySelector('.btn-more-services').style.display = 'unset';
    document.querySelector('.btn-less-services').style.display = 'none';
});

// slider
const swiper = new Swiper('.swiper-container', {
  loop: false, //бесконечность прокрутки
  pagination: {//точки
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: false,
  spaceBetween: 10, // расстояние между слайдами
  speed: 800, // скорость прокрутки
  width: 250,
});
