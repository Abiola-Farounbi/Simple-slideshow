
// To get the index
// assign value of 1
var slideCounter = 1;

//call the function to show the function
showSlides(slideCounter);

// function for the current slide showing based on the dot clicked
function currentSlide(n) {
  showSlides(slideCounter = n);
}

// function to show slide
function showSlides(n) {
  // creating variable i
  var i;
  //getting each image div
  var slides = document.getElementsByClassName('slide');
 //getting each dot 
  var dots = document.getElementsByClassName("dot");
  //check if we've reached the last image
  if (n > slides.length) {slideCounter = 1}
  //placing the current image 
  if (n < 1) {slideCounter= slides.length}
  //hiding all the images
  for (i = 0; i < slides.length; i++) {
  
      slides[i].style.display = "none";  
  }
  //assigning the dots dull
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //display the image of the dot clicked 
  slides[slideCounter-1].style.display = "block"; 
  // displaying the dot with a different color 
  dots[slideCounter-1].className += " active";
}