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

    const miniaturas = Array.from(document.querySelectorAll('.miniaturas img'));
    const miniaturasRow = document.querySelector('.miniaturas');
    const prevButton = document.querySelector('.miniatura-prev');
    const nextButton = document.querySelector('.miniatura-next');
    let currentServiceIndex = miniaturas.findIndex(img => img.classList.contains('active'));

    if (currentServiceIndex === -1) {
        currentServiceIndex = 0;
    }

    function atualizarServicoPorIndice(index) {
        const img = miniaturas[index];
        if (!img) return;
        currentServiceIndex = index;
        miniaturas.forEach(item => item.classList.remove('active'));
        img.classList.add('active');
        trocarServico(
            img.dataset.src || img.src,
            img.dataset.titulo || img.alt,
            img.dataset.descricao || ''
        );
        img.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    if (miniaturas.length > 0) {
        miniaturas.forEach((img, index) => {
            img.addEventListener('click', () => {
                atualizarServicoPorIndice(index);
            });
        });

        if (prevButton && nextButton && miniaturasRow) {
            prevButton.addEventListener('click', () => {
                currentServiceIndex = (currentServiceIndex - 1 + miniaturas.length) % miniaturas.length;
                atualizarServicoPorIndice(currentServiceIndex);
            });

            nextButton.addEventListener('click', () => {
                currentServiceIndex = (currentServiceIndex + 1) % miniaturas.length;
                atualizarServicoPorIndice(currentServiceIndex);
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
