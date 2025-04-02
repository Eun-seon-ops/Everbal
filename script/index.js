var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 3000,
    pagination: {
      el: ".mySwiper .swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".best_in", {
    slidesPerView: 3,
    spaceBetween: 70,
    centeredSlides: true,
    pagination: {
      el: ".best_in .swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".review_in", {
    slidesPerView: 'auto',
    spaceBetween: 70,
    centeredSlides: true,
    pagination: {
      el: ".review_in .swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
  });