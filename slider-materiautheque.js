const slide = ["materiautheque-1.webp", "materiautheque-2.webp", "materiautheque-3.webp", "materiautheque-4.webp", "materiautheque-5.webp"];
let numero = 0;

function ChangeSlide(sens ) { 
    numero = numero + sens; 
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = "images/materiautheque/" + slide[numero];
}

// setInterval("ChangeSlide(1)", 10000);