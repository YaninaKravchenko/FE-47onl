/*const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });*/


  var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
   /* slidesPerColumn: 2,*/
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
  });
