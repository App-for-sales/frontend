var $window = $(window);
var nav = $('#main-navigation');
$window.scroll(function(){
    if ($window.scrollTop() >= 300) {
       nav.addClass('fixed-header');
    }
    else {
       nav.removeClass('fixed-header');
    }
});
