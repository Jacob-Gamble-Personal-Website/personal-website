const alertMessages = {
    "about.html": "Please click on the Who Am I header to go back home.",
    "projects.html": "Please click on the My Projects header to go back home and click on the project images to be taken to the corresponding git repository.",
    "index.html": "Click on the social media icons to be redirected to the corresponding site!",
  }
  
  const currentPage = window.location.pathname.split("/").pop();
  
  if (alertMessages.hasOwnProperty(currentPage)) {
    alert(alertMessages[currentPage]);
  }
  
  const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[n].classList.add('active');
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

setInterval(() => {
  nextSlide();
}, 3000);
