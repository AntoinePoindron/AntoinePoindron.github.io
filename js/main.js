/* ANIMATION SLIDER */

$(document).ready(function(){
  $('.slick_slider').slick({
   	autoplay: true,
   	autoplaySpeed: 4000,
});
});

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});

function openWin(url){
newwin=window.open(url,'','width=400,height=400,top=200,left=200');
if(newwin){
window.onfocus=function(){newwin.window.close()}
}
}