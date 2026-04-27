// Slideshow jQuery

let slideIndex = 1;
  let timer = null;

  function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("showing");
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("showing");
    dots[slideIndex - 1].classList.add("active");
  }

  function plusSlides(n) {
    clearInterval(timer);
    showSlides(slideIndex += n);
    autoSlide();
  }

  function currentSlide(n) {
    clearInterval(timer);
    showSlides(slideIndex = n);
    autoSlide();
  }

  function autoSlide() {
    timer = setInterval(() => {
      slideIndex++;
      if (slideIndex > document.getElementsByClassName("slide").length) {
        slideIndex = 1;
      }
      showSlides(slideIndex);
    }, 5000);
  }

  window.onload = () => {
    showSlides(slideIndex);
    autoSlide();
  };