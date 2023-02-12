
var slideIndex = 1;
var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
})


function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeDot";
}

function currentSlide(n){
  showSlides(slideIndex = n);
}


function plusDivs(n) {
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1); 
  }
}



    