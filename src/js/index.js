import '../scss/style.scss'

//показать полное меню
const btnShowMenu = document.getElementById('btn-menu');
btnShowMenu.addEventListener('click', showFullMenu);
function showFullMenu() {
  document.getElementById('full-menu').style.display = 'unset';
}

//закрыть полное меню
const blurFullMenu = document.querySelector('.menu-opacity');
blurFullMenu.addEventListener('click', closeFullMenu);
const btnCloseMenu = document.getElementById('btn-close-menu');
btnCloseMenu.addEventListener('click', closeFullMenu);
function closeFullMenu() {
  document.getElementById('full-menu').style.display = 'none';
}

//показать обратную свзять
const btnShowFeedBack = document.getElementById('chat-feedback');
btnShowFeedBack.addEventListener('click', showFeedBack);
const btnGetFeedBack = document.getElementById('get-chat');
btnGetFeedBack.addEventListener('click', showFeedBack);
function showFeedBack() {
  document.getElementById('feedback').style.display = 'unset';
  document.getElementById('callback').style.display = 'none';
}

//закрыть обратную связь
const btnCloseFeedBack = document.getElementById('feedback-close');
btnCloseFeedBack.addEventListener('click', closeFeedBack);
const blurFeedBack = document.querySelector('.feedback-opacity');
blurFeedBack.addEventListener('click', closeFeedBack);
function closeFeedBack() {
  document.getElementById('feedback').style.display = 'none';
}

//показать заказ звонка
const btnShowCallBack = document.getElementById('call');
btnShowCallBack.addEventListener('click', showCallBack);
const btnGetChat = document.getElementById('get-call');
btnGetChat.addEventListener('click', showCallBack);
function showCallBack() {
  document.getElementById('callback').style.display = 'unset';
  document.getElementById('feedback').style.display = 'none';
}

//закрыть заказ звонка
const btnCloseCallBack = document.getElementById('callback-close');
btnCloseCallBack.addEventListener('click', closeCallBack);
const blurCallBack = document.querySelector('.callback-opacity');
blurCallBack.addEventListener('click', closeCallBack);
function closeCallBack() {
  document.getElementById('callback').style.display = 'none';
}

//показать статью о компании
const btnMoreInfo = document.getElementById('btn-more-info');
btnMoreInfo.addEventListener('click', {
  handleEvent(event) {
    document.querySelector('.block__infoCPS').style.overflow = 'visible';
    document.querySelector('.block__infoCPS').style.height = 'auto'; //'100%';
    document.getElementById('btn-more-info').style.display = 'none';
    document.getElementById('btn-less-info').style.display = 'unset';
  }
});

//скрыть статью о компании
const btnLessInfo = document.getElementById('btn-less-info');
btnLessInfo.addEventListener('click', {
  handleEvent(event) {
    document.querySelector('.block__infoCPS').style.overflow = '';
    document.querySelector('.block__infoCPS').style.height = '';
    document.getElementById('btn-more-info').style.display = 'unset';
    document.getElementById('btn-less-info').style.display = 'none';
  }
});

//бренды показать
const btnMoreBrands = document.getElementById('btn-more');
btnMoreBrands.addEventListener('click', {
  handleEvent(event) {
    document.querySelector('.list-logo').style.overflow = 'visible';
    document.querySelector('.list-logo').style.height = '100%';
    document.getElementById('btn-more').style.display = 'none';
    document.getElementById('btn-less').style.display = 'unset';
  }
});

//бренды скрыть
const btnLessBrands = document.getElementById('btn-less');
btnLessBrands.addEventListener('click', {
  handleEvent(event) {
    document.querySelector('.list-logo').style.overflow = '';
    document.querySelector('.list-logo').style.height = '';
    document.getElementById('btn-more').style.display = 'unset';
    document.getElementById('btn-less').style.display = 'none';
  }
});

//Сервисы показать
const btnMoreServices = document.getElementById('btn-more-services');
btnMoreServices.addEventListener('click', {
  handleEvent(event) {
    document.querySelector('.list-services').style.overflow = 'visible';
    document.querySelector('.list-services').style.height = '100%';
    document.getElementById('btn-more-services').style.display = 'none';
    document.getElementById('btn-less-services').style.display = 'unset';
  }
});

//Сервисы скрыть
const btnLessServices = document.getElementById('btn-less-services');
btnLessServices.addEventListener('click', {
  handleEvent(event) {
    document.querySelector('.list-services').style.overflow = '';
    document.querySelector('.list-services').style.height = '';
    document.getElementById('btn-more-services').style.display = 'unset';
    document.getElementById('btn-less-services').style.display = 'none';
  }
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
