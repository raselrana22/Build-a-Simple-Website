// Automatic Slideshow - change image every 3 seconds
let myIndex = 0;
 carousel();

function carousel() {
  let i;
  let slide = document.getElementsByClassName("mySlide");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > slide.length) { myIndex = 1 }
  slide[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000)
}

