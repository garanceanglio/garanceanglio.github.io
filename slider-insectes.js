const slide = ["insectes-1.webp", "insectes-2.webp", "insectes-3.webp", "insectes-4.webp", "insectes-5.webp", "insectes-6.webp", "insectes-7.webp"];
let numero = 0;

function ChangeSlide(sens ) { 
    numero = numero + sens; 
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = "images/insectes/" + slide[numero];
}

// setInterval("ChangeSlide(1)", 10000);