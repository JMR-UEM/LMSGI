var slideIndex = 0;
showImagenes();
function showImagenes() {
    var i;
    var imagenes = document.getElementsByClassName("misImagenes");
    for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > imagenes.length) {slideIndex = 1}
    imagenes[slideIndex-1].style.display = "block";
    setTimeout(showImagenes,3000);
}

