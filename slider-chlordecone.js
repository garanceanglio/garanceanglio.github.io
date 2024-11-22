const slide = ["chlordecone-1.webp", "chlordecone-2.webp", "chlordecone-3.webp", "chlordecone-4.webp", "chlordecone-5.webp", "chlordecone-6.webp"];
let numero = 0;

function ChangeSlide(sens ) { 
    numero = numero + sens; 
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = "images/serigraphie_trame/" + slide[numero];
}

// setInterval("ChangeSlide(1)", 10000);