function animationClickBtn() {
  $(".btn-filter").click(function () {
    // $(".ul-image-gallery").fadeTo(100, 0);
    $(".ul-image-gallery").fadeOut().removeClass("show");
    setTimeout(function () {
      $(".li-img").fadeIn().addClass("show");
      $(".ul-image-gallery").fadeTo(250, 1);
    }, 350);
  });
}

$(document).ready(function () {
  animationClickBtn();
});
