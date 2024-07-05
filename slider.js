
    // Déclaration de la variable globale slideIndex
var slideIndex = 0;
var slideInterval;

// Fonction pour avancer ou reculer les slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fonction pour afficher le slide actuel
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Fonction principale pour afficher les slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    // Gestion des limites de l'index des slides
    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }

    // Masquer tous les slides et retirer la classe "active" des dots
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Afficher le slide actuel et ajouter la classe "active" au dot correspondant
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Fonction pour démarrer le diaporama automatiquement
function autoSlide() {
    slideInterval = setInterval(function() {
        plusSlides(1); // Avancer d'un slide
    }, 2000); // Interval de 5 secondes (5000 ms)
}

// Arrêter le diaporama automatique si l'utilisateur interagit manuellement avec les contrôles
function pauseSlide() {
    clearInterval(slideInterval);
}

// Appel initial pour démarrer le diaporama
showSlides(slideIndex);
autoSlide(); // Démarrer le diaporama automatique au chargement de la page
