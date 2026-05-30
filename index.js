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

    const topbar = document.querySelector('.topbar');
    if (topbar) {
        const sidebarToggle = document.createElement('button');
        sidebarToggle.type = 'button';
        sidebarToggle.className = 'sidebar-toggle-mobile';
        sidebarToggle.setAttribute('aria-expanded', 'false');
        sidebarToggle.innerHTML = '☰';
        sidebarToggle.addEventListener('click', toggleSidebarMobile);
        topbar.appendChild(sidebarToggle);
    }

    const miniaturas = document.querySelectorAll('.miniaturas img');
    const miniaturasRow = document.querySelector('.miniaturas');
    const prevButton = document.querySelector('.miniatura-prev');
    const nextButton = document.querySelector('.miniatura-next');

    if (miniaturas.length > 0) {
        miniaturas.forEach(img => {
            img.addEventListener('click', () => {
                miniaturas.forEach(item => item.classList.remove('active'));
                img.classList.add('active');
            });
        });

        if (prevButton && nextButton && miniaturasRow) {
            prevButton.addEventListener('click', () => {
                miniaturasRow.scrollBy({ left: -220, behavior: 'smooth' });
            });

            nextButton.addEventListener('click', () => {
                miniaturasRow.scrollBy({ left: 220, behavior: 'smooth' });
            });
        }
    }

});

function fazerLogout(){
    localStorage.clear();
    sessionStorage.clear();

    window.location.href = "index.html";
}
function toggleVejaMais() {
      const menu = document.getElementById("vejamais");
      menu.classList.toggle("hidden");
}

function toggleSidebarMobile() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle-mobile');
    if (!sidebar) return;

    const expanded = sidebar.classList.toggle('sidebar-expanded');
    if (toggleButton) {
        toggleButton.setAttribute('aria-expanded', expanded.toString());
    }
}

function voltarPagina() {
    window.history.back();
}
const faqButtons = document.querySelectorAll(".faq-pergunta");

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

    const miniaturas = document.querySelectorAll('.miniaturas img');
    miniaturas.forEach(img => {
        img.classList.toggle('active', img.dataset.src === imagem);
    });
}

//Mudar Tema
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    // salva preferência
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "escuro");
        //Mudar Imagem para modo escuro
        document.getElementById("img-logo").src = "img/CastroTEC Logo fundo cinza.png";
    } else {
        localStorage.setItem("tema", "claro");
        //Mudar Imagem para modo claro
        document.getElementById("img-logo").src = "img/CastroTEC Logo tema claro.png";
    }
}


    
// carrega o tema salvo
window.addEventListener("load", () => {
    //Modo Escuro
    const tema = localStorage.getItem("tema");

    if (tema === "escuro") {
        document.body.classList.add("dark");
        document.getElementById("img-logo").src = "img/CastroTEC Logo fundo cinza.png";
    } else {
        document.getElementById("img-logo").src = "img/CastroTEC Logo tema claro.png";
    }

    const fonteGrandeSalva = localStorage.getItem("fonteGrande");

    if (fonteGrandeSalva === "true") {
        document.body.classList.add("fonte-grande");
    }
});



// Adicionar link de whatsapp
function linkWhats(links) {
    for (let i = 0; i < links.length; i++) {
            links[i].href = "https://wa.me/5511951491871?text=Olá,%20vim%20pelo%20site";
        links[i].target = "_blank";
        links[i].setAttribute("rel", "noopener noreferrer");
        links[i].setAttribute("aria-label", "Agendar visita técnica por WhatsApp");
    }
}

// Selecionar todos os elementos de uma classe
const whatsappLink = document.querySelectorAll('.whatsapp-link');

// Adicionar atributos a todos os elementos
linkWhats(whatsappLink)

let fonteGrande =
localStorage.getItem("fonteGrande") === "true";

if (fonteGrande) {

    document.body.classList.add("fonte-grande");
}
function aumentarFonte() {

    fonteGrande = !fonteGrande;

    document.body.classList.toggle("fonte-grande");

    localStorage.setItem(
        "fonteGrande",
        fonteGrande
    );
}
