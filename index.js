//Alterar tema

function toggleMenu() {
    const menu = document.getElementById("btnConfig");
    menu.classList.toggle("hidden");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
document.getElementById("btnConfig").addEventListener("click", toggleMenu);

//https://wa.me/5511945070187



document.addEventListener("DOMContentLoaded", function () {

//Botão do Whatsapp

const botao = document.createElement("a");

botao.href = "https://wa.me/5511945070187?=Olá,%20vim%20pelo%20site";
botao.target = "_blank";
botao.classList.add("whatsapp-btn");

botao.innerHTML= '<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt=WhatsApp">';
document.body.appendChild(botao);

const botao3 = document.createElement("a");

botao3.href = "https://wa.me/5511945070187?=Olá,%20vim%20pelo%20site";
botao3.target = "_blank";
botao3.classList.add("whatsapp-btn2");

botao3.innerHTML= '<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt=WhatsApp">';
document.body.appendChild(botao3);


    sidebar.appendChild(botao2);

});
/*Botao de saida*/
function fazerLogout(){
    localStorage.clear();
    sessionStorage.clear();

    window.location.href="chrome://newtab";

  

}

//Carrosel

const imagens = document.querySelectorAll(".carrosel img");

let index = 0;

function trocarImagem (){

    imagens[index].classList.remove("ativo");
    imagens[index + 1].classList.add("ativo");
}

setInterval(trocarImagem, 3000); //troca a imagem