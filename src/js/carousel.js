const containerImg = document.getElementById('container-carousel');
const imagensCarousel = document.querySelectorAll('[data-carousel-imgs]');

console.log(imagensCarousel)



let contadorCarousel = 0
let intervaloDoID; 

function carouselProjetos () {
    contadorCarousel++;
    if (contadorCarousel == imagensCarousel.length) {
        contadorCarousel = 0;
    }

    const offset = contadorCarousel * -250; // Ajuste o valor conforme necessário

    // containerImg.style.transition = 'transform 1s ease-in-out';
    containerImg.style.transform = `translateX(${offset}px)`;
    
}
// setInterval(carouselProjetos, 2000);


function startCarouselInterval() {
    intervaloDoID = setInterval(carouselProjetos, 2000);
}

function pauseCarouselInterval() {
    clearInterval(intervaloDoID);
}

startCarouselInterval(); // Inicie o carrossel quando a página carregar

// Adicione manipuladores de eventos para pausar e continuar o carrossel quando o mouse estiver sobre ele
containerImg.addEventListener('mouseenter', pauseCarouselInterval);
containerImg.addEventListener('mouseleave', startCarouselInterval);
