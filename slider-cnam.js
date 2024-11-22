const slide = ["cnam-1.webp", "cnam-2.webp", "cnam-3.mp4", "cnam-4.webp", "cnam-5.webp"];
let numero = 0;

function ChangeSlide(sens ) { 
    numero = numero + sens; 
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = "images/cnam/" + slide[numero];
}

// setInterval("ChangeSlide(1)", 10000);