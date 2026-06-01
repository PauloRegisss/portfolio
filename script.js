window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    loader.classList.add("fade-out");
});

const texto = "Clean code, efficient APIs, and reliable systems.";
const elemento = document.getElementById("digitando");

let i = 0;

function escrever() {
    if(i < texto.length){
        elemento.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 60);
    }
}

escrever();

let contador = document.getElementById('contador');

let numero = 20;

const intervalo = setInterval(() => {

    numero++;

    contador.innerHTML = numero;

    if(numero >= 100){
        clearInterval(intervalo);
    }

}, 20);