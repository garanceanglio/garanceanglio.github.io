const slide = ["photos-1.webp", "photos-2.webp", "photos-3.webp", "photos-4.webp", "photos-5.webp", "photos-6.webp", "photos-7.webp", "photos-8.webp", "photos-9.webp"];
let numero = 0;

function ChangeSlide(sens ) { 
    numero = numero + sens; 
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = "images/photo/" + slide[numero];
}

// setInterval("ChangeSlide(1)", 10000);