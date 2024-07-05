// slider.js
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let slideInterval = setInterval(showSlides, 5000);

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
}

function pauseSlide() {
    clearInterval(slideInterval);
}
