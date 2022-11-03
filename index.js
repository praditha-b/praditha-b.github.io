function toggle(val,val2) {
    var x = document.getElementById(val);
    var y = document.getElementById(val2);
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.transform= "rotate(-135deg)";
      y.style.marginTop = "1.8vh";
    } else {
      x.style.display = "none";
      y.style.transform= "rotate(45deg)";
      y.style.marginTop = "0vh";
    }
  }

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 