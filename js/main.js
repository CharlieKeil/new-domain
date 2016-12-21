$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

var leBgWrapper = document.querySelector(".le-bg-w");
var leBg = document.querySelector(".le-bg");

function leInitWrapper() {
  leBgWrapper.style.height = window.innerHeight + "px";
  if (window.innerWidth < 1024) {
    leBg.style.backgroundSize = "auto";
  }
  else {
    leBg.style.backgroundSize = "100%";
  }
}
leInitWrapper();

window.addEventListener("resize", function() {
  leInitWrapper();
});

window.addEventListener("scroll", function(evt) {
  leBg.style.top = "-" + (this.scrollY / 2) + "px";
});
