var startProductBarPos = -1;

window.onscroll = function () {
  var bar = document.getElementById("sticky-search");
  var searchwidth = document.getElementsByClassName("search");
  var textBrand = document.getElementsByClassName("textBrand");
  let width = window.innerWidth;

  if (startProductBarPos < 0) startProductBarPos = findPosY(bar);

  // eslint-disable-next-line no-restricted-globals
  if (pageYOffset > startProductBarPos) {
    bar.style.position = "fixed";
    bar.style.top = 0;
    textBrand[0].style.display = "block";
    if (width >= 1024) {
      searchwidth[0].style.width = 90 + "%";
    } else if (width >= 768) {
      searchwidth[0].style.width = 85 + "%";
    } else if (width >= 425) {
      searchwidth[0].style.width = 80 + "%";
    }else if(width >= 375){
        searchwidth[0].style.width = 78 + "%";
    }
  } else {
    bar.style.position = "relative";
    searchwidth[0].style.width = 100 + "%";
    textBrand[0].style.display = "none";
  }
};

function findPosY(obj) {
  var curtop = 0;
  if (typeof obj.offsetParent != "undefined" && obj.offsetParent) {
    while (obj.offsetParent) {
      curtop += obj.offsetTop;
      obj = obj.offsetParent;
    }
    curtop += obj.offsetTop;
  } else if (obj.y) curtop += obj.y;
  return curtop;
}

// $(window).scroll(function(e){
//     var $el = $('.fixedElement');
//     var isPositionFixed = ($el.css('position') == 'fixed');
//     if ($(this).scrollTop() > 60 && !isPositionFixed){
//       $el.css({'position': 'fixed', 'top': '0px'});
//     }
//     if ($(this).scrollTop() < 60 && isPositionFixed){
//       $el.css({'position': 'static', 'top': '0px'});
//     }
//   });
