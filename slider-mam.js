const slide = ["mam-1.webp", "mam-2.webp", "mam-3.webp", "mam-4.webp", "mam-5.webp", "mam-6.mp4"];
let numero = 0;

function ChangeSlide(sens ) { 
    numero = numero + sens; 
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = "images/mam/" + slide[numero];
}

// setInterval("ChangeSlide(1)", 10000);