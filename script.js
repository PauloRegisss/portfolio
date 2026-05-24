window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    loader.classList.add("fade-out");
});

const texto = "Código limpo, APIs eficientes e sistemas confiáveis.";
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