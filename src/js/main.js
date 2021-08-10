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

  


