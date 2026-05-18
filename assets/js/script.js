const btnPlay = document.getElementById('btn-play');
const musica = document.getElementById('musica');
const icone = btnPlay.querySelector('i');
const label = document.querySelector('.music-label');

btnPlay.addEventListener('click', () => {
    if (musica.paused) {
        musica.play().catch(error => console.log("Interação necessária para tocar áudio."));
        icone.classList.replace('fa-play', 'fa-pause');
        label.innerText = "Tocando o nosso amor ❤️";
        label.style.color = "#be123c";
    } else {
        musica.pause();
        icone.classList.replace('fa-pause', 'fa-play');
        label.innerText = "Música pausada 🎵";
        label.style.color = "#9d174d";
    }
});

const swiper = new Swiper('.mySwiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});


function atualizarContador() {
    const dataInicio = new Date('2026-04-20T00:00:00');
    const agora = new Date();
    const diferenca = agora - dataInicio;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    document.getElementById('countdown').innerText = `Há ${dias} dias vivendo o meu maior sonho`;
}

atualizarContador();
setInterval(atualizarContador, 1000 * 60 * 60);


const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});