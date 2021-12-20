var responsiveSlider = function() {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var one = document.getElementById("slideButton1");
  var two = document.getElementById("slideButton2");
  var three = document.getElementById("slideButton3");
  var four = document.getElementById("slideButton4");

  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });

  function reColorSlides(n){
    one.style.backgroundColor = "#616161";
    two.style.backgroundColor = "#616161";
    three.style.backgroundColor = "#616161";
    four.style.backgroundColor = "#616161";
    document.getElementById("slideButton" + n).style.backgroundColor = "#ff8001";
  }

  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
      reColorSlides(count);
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
      reColorSlides(count);
    }
  };

  function slide(n){
    count = n - 1
    slideList.style.left = "-" + count * sliderWidth + "px";
    reColorSlides(n);
  }

  one.addEventListener("click", function() {
    slide(1);
  });
  two.addEventListener("click", function() {
    slide(2);
  });
  three.addEventListener("click", function() {
    slide(3);
  });
  four.addEventListener("click", function() {
    slide(4);
  });

  setInterval(function() {
  nextSlide()
  }, 5000);

};

window.onload = function() {
responsiveSlider();
}
