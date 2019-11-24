new WOW().init();

// Add smooth scrolling to links in the nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

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

$(".45").animate({
  width: "45%"
}, 2500);

$(".40").animate({
  width: "40%"
}, 2500);

$(".35").animate({
  width: "35%"
}, 2500);

$(".30").animate({
  width: "30%"
}, 2500);

$(".25").animate({
  width: "25%"
}, 2500);

$(".20").animate({
  width: "20%"
}, 2500);

$(".15").animate({
  width: "15%"
}, 2500);

$(".10").animate({
  width: "10%"
}, 2500);

$(".5").animate({
  width: "5%"
}, 2500);


// jQuery for making a div a link
// selects element with class project, and executes function.
$(".project").click(function () {
  window.open($(this).find("a:first").attr("href"));
  return false;
});



