new WOW().init();


// jQuery for progress bar animations

$(".100").animate({
  width: "100%"
}, 2500);

$(".95").animate({
  width: "95%"
}, 2500);

$(".90").animate({
  width: "90%"
}, 2500);

$(".85").animate({
  width: "85%"
}, 2500);

$(".80").animate({
  width: "80%"
}, 2500);

$(".75").animate({
  width: "75%"
}, 2500);

$(".70").animate({
  width: "70%"
}, 2500);

$(".65").animate({
  width: "65%"
}, 2500);

$(".60").animate({
  width: "60%"
}, 2500);

$(".55").animate({
  width: "55%"
}, 2500);

$(".50").animate({
  width: "50%"
}, 2500);


// jQuery for making a div a link
// selects element with class project, and executes function.

$(".project").click(function() {
  window.open($(this).find("a:first").attr("href"));
  return false;
});


// jQuery for ensuring video BG autoplays properly
$( window ).load(function() {
  $( '.header__bg' ).get(0).play();
});
