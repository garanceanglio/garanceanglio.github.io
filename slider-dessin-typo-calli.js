const slide = ["dessin-typo-calli-1.webp", "dessin-typo-calli-2.webp", "dessin-typo-calli-3.webp", "dessin-typo-calli-4.webp", "dessin-typo-calli-5.webp", "dessin-typo-calli-6.webp"];
let numero = 0;

function ChangeSlide(sens ) { 
    numero = numero + sens; 
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = "images/dessin typo calli/" + slide[numero];
}

// setInterval("ChangeSlide(1)", 10000);