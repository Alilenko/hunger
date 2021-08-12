import Swiper from 'swiper';
import SwiperCore, {Pagination, Autoplay, Navigation}  from 'swiper/core';
import burger from './modules/burger';
import tabs from './modules/tabs';
import scrollHeader from './modules/scrollHeader';
import scrollTop from './modules/scrollTop';
import modalImage from './modules/modalImg';


document.addEventListener("DOMContentLoaded", function(event) {
  burger();
  tabs();
  scrollHeader();
  scrollTop();
  modalImage();

  });

  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'assets/img/spinner.svg',
    success: "Спасибо! Мы скоро с вами свяжемся",
    failure:"Что-то пошло не так..."
  };

  forms.forEach(item => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const object = {};
      formData.forEach(function(value, key){
        object[key] = value;
      });


      fetch('server.php', {
        method: "POST",
        headers:{
          'Content-type': 'application/json' 
        }, 
        body: JSON.stringify(object)
       })
       .then(data => data.text())
       .then(data => {
         showThanksModal(message.success) ;
         statusMessage.remove();
       })
       .catch(() => {
        showThanksModal(message.failure);
       })
       .finally(() => {
        form.reset();
        statusMessage.remove();
       });
    });
  }

  const thanks = document.querySelector('.thanks');
  const overlay = document.querySelector('.overlay');

  function showThanks(){
    thanks.classList.add('show', 'fade');
    thanks.classList.remove('hide');
    overlay.classList.add('show', 'fade');
    overlay.classList.remove('hide');

  } 

  function closeThanks(){
    thanks.classList.add('hide');
    thanks.classList.remove('show', 'fade');
    overlay.classList.add('hide');
    overlay.classList.remove('show', 'fade');
  }
  overlay.addEventListener('click', closeThanks);

  function showThanksModal(message){

    showThanks();
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('thanks__content');
    thanksModal.innerHTML = `
    <div class="thanks__title">${message}</div>
    `;

    thanks.append(thanksModal);
    setTimeout(() => {
      closeThanks();
      thanksModal.remove();
    }, 2500);
  }
 
   

  SwiperCore.use([ Pagination, Autoplay, Navigation,]);

  const swiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 800,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },

  
  
  

    });

  


