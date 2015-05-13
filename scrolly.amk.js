jQuery(document).ready(function(){

  var scroll_check = false,
  $window = $(window),
  amkmenu_distance = $('#amkmenu').offset().top; // The default position of the navbar

  $window.scroll(function (event) {
    scroll_check = true;
  });

  setInterval(function () {
    if (scroll_check) {
      scroll_check = false;

      if ($window.scrollTop() >= amkmenu_distance) {
        $('#amkmenu').addClass('navbar-fixed-top');
      }
      else {
        $('#amkmenu').removeClass('navbar-fixed-top');
      }
    }
  }, 250);

});
