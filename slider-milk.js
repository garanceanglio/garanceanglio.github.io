const slide = ["milk-1.webp", "milk-2.webp", "milk-3.webp"];
let numero = 0;

function ChangeSlide(sens ) { 
    numero = numero + sens; 
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = "images/milk/" + slide[numero];
}

// setInterval("ChangeSlide(1)", 10000);