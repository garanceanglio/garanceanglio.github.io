const slide = ["lazy-dog-1.webp", "lazy-dog-2.webp", "lazy-dog-3.webp", "lazy-dog-4.webp", "lazy-dog-5.webp"];
let numero = 0;

function ChangeSlide(sens ) { 
    numero = numero + sens; 
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = "images/basset_hound/" + slide[numero];
}

// setInterval("ChangeSlide(1)", 10000);