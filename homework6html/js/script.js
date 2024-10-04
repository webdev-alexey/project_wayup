$(function () {
  $(window).scroll(function () {
    $(".virtues__item--schedule").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("animate__fadeInLeft");
      }
    });
  });
  $(window).scroll(function () {
    $(".virtues__item--travels").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("animate__bounce");
      }
    });
  });

  $(window).scroll(function () {
    $(".virtues__item--values").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("animate__fadeInRight");
      }
    });
  });
  $(window).scroll(function () {
    $(".section__title").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("animate__fadeInDown");
      }
    });
  });
  $(window).scroll(function () {
    $(".mail__form").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("animate__fadeInUp");
      }
    });
  });
});
