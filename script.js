// =======================================
// PARA MARIANA ❤️
// Creado por Nicolás
// =======================================
// Siempre iniciar desde arriba

window.history.scrollRestoration = "manual";

window.onload = () => {

    window.scrollTo(0, 0);

};
// -------------------------------
// BOTONES
// -------------------------------
// Bloquea el scroll al entrar
document.body.classList.add("lock-scroll");
const openButton = document.getElementById("openLetter");
const envelope = document.querySelector(".envelope");
const typingText = document.getElementById("typingText");
const music = document.getElementById("music");

// -------------------------------
// CARTA
// -------------------------------

const letter = `

Mi vida ❤️

Hay momentos que cambian nuestra vida sin tenerlo pensado y adivina...

Conocerte fue uno de ellos.

Desde que llegaste, mis días se llenaron de una felicidad que antes no conocía.

Poco a poco hiciste que mi corazón encontrara un lugar donde sentirse tranquilo, querido y completo.

Gracias por cada sonrisa, cada abrazo y cada instante que hemos compartido.

Quiero que sepas que te quiero con todo mi corazón.

Contigo me he sentido complementado, valorado y verdaderamente feliz.

Encontrar a una mujer como tú no es fácil.

Por eso mismo prometo dar lo mejor de mí para cuidarte, protegerte y hacerte sonreír todos los días.

Gracias por llenar mi corazón de amor.

Te quiero muchísimo.

❤️ Tu amor bonito

`;

let index = 0;

function typeWriter() {

    if (index < letter.length) {

        typingText.innerHTML += letter.charAt(index);

        index++;

        typingText.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });

        setTimeout(typeWriter, 35);

    }

    else {

    autoScroll = false;

    const nextSection = document.getElementById("nextSection");

    nextSection.classList.add("show");

    // Espera a que aparezca la animación y luego baja hasta el botón
    setTimeout(() => {

        nextSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 500);

}

}


// -------------------------------
// ABRIR CARTA
// -------------------------------

openButton.addEventListener("click", () => {

    // Abrir el sobre
    envelope.classList.add("open");

    // Quitar el bloqueo del scroll
    document.body.classList.remove("lock-scroll");

    // Música
    music.play();

    // Escribir la carta
    setTimeout(() => {

        typeWriter();

    }, 900);

    // Ir a la carta
    document.getElementById("letter").scrollIntoView({

        behavior: "smooth"

    });

});

const paper = document.querySelector(".paper");

window.addEventListener("scroll", () => {

    const section = document.getElementById("letter");

    const rect = section.getBoundingClientRect();

    const visible = window.innerHeight - rect.top;

    if (visible > 0) {

        let height = 250 + visible * 1.5;

        if (height > 1200) height = 1200;

        paper.style.maxHeight = height + "px";

    }

});



// =======================================
// CORAZONES FLOTANDO
// =======================================

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";

    heart.style.left = Math.random()*100+"%";

    heart.style.top = "100%";

    heart.style.fontSize = Math.random()*20+15+"px";

    heart.style.opacity = Math.random();

    heart.style.color = "#ff7aa8";

    heart.style.animation = `floatHeart ${Math.random()*4+5}s linear`;

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);


// =======================================
// ANIMACIÓN AL HACER SCROLL
// =======================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

sections.forEach(section=>{

    observer.observe(section);

});

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

showSlide(current);

nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    document.getElementById("gallery").scrollIntoView({

        behavior:"smooth"

    });

});




// =======================================
// EFECTO BOTÓN FINAL
// =======================================

const loveButton = document.getElementById("loveButton");

loveButton.addEventListener("click",()=>{

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            createHeart();

        },i*30);

    }

    alert("❤️ Te quiero muchísimo Mariana ❤️");

    const slides = document.querySelectorAll(".slide");




});
