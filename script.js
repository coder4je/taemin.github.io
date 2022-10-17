// Image Slide 
let slideIndex = 0;
showSlide();

function showSlide(){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlide, 2000);
}

// Logo change by scroll

let logo = "About Taemin"
let main = "Main Section"
let newLogo = "Portfolio"
const header = document.querySelector(".logo");
const sectionOne = document.querySelector(".main_section");
const Portfolio = document.querySelector(".portfolio");

const sectionOneOptions = {
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      header.innerHTML = newLogo;
    } 
    else {
      header.innerHTML = logo;
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Contact links
const email = document.querySelector(".gamil").style.color = "pink";
const gitHub = document.querySelector(".gitHub").style.color = "pink";
const linkedIn = document.querySelector(".linkedIn").style.color = "pink";
