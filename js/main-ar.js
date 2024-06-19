var swiper = new Swiper(".mySwiper", {
  loop: true,
  rtl: true,
  spaceBetween: 20,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  rtl: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".mySwiperRatings", {
  // slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  rtl: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
    },
    1068: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
    },
    1224: {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
    },
  },
});

// ====================================================
// video
$(".box-video-mp4").hide(1000);
$(".btn-play").click(function(){
	$(".box-video-mp4").slideDown(500);	// بيظهر ع شكل ستارة
});


$(".btn-x").click(function(){
	$(".box-video-mp4").slideUp(500);	// بيظهر ع شكل ستارة
});
