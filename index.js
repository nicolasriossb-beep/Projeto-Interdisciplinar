function toggleMenu() {
    const menu = document.getElementById("btnConfig");
    menu.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {

    const botao = document.createElement("a");

    botao.href = "https://wa.me/5511951491871?text=Olá,%20vim%20pelo%20site";
    botao.target = "_blank";
    botao.classList.add("whatsapp-btn");

    botao.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp">';
    
    document.body.appendChild(botao);

});

function fazerLogout(){
    localStorage.clear();
    sessionStorage.clear();

    window.location.href = "index.html";
}
function toggleVejaMais() {
      const menu = doucument.getElementById("vejamais");
      menu.classList.toggle("hidden");
}
function voltarPagina() {
    window.history.back();
}
const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const resposta = button.nextElementSibling;

        resposta.classList.toggle("hidden");

    });

});

function trocarServico(imagem, titulo, descricao) {

    document.getElementById("imagemGrande").src = imagem;

    document.getElementById("tituloServico").textContent = titulo;

    document.getElementById("descricaoServico").textContent = descricao;

}

//Mudar Tema
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    // salva preferência
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
}

//Aumentar Tamanho da Fonte
function toggleTextSize(){
    document.body.classList.toggle("text-size");

    if(document.body.classList.contains("text-size")) {
        localStorage.setItem("Tamanho","Grande");
    } else {
        localStorage.setItem("Tamanho","Normal");
    }
}

// carrega o tema salvo
window.onload = () => {
    //Modo Escuro
    const tema = localStorage.getItem("tema");

    if (tema === "escuro") {
        document.body.classList.add("dark");
    }

    const tamanho = localStorage.getItem("Tamanho");

    if(tamanho === "Grande") {
        document.body.classList.add("text-size");
    }
}



// Adicionar link de whatsapp
function linkWhats(links) {
    for (let i = 0; i < links.length; i++) {
        links[i].href = "https://wa.me/5511951491871?text=Olá,%20vim%20pelo%20site";
        links[i].target = "_blank";
        links[i].ariaLabel = "Agendar visita técnica por Whatsapp"
    }
}

// Selecionar todos os elementos de uma classe
const whatsappLink = document.querySelectorAll('.whatsapp-link');

// Adicionar atributos a todos os elementos
linkWhats(whatsappLink)
