function linkWhats(links) {
    for (let i = 0; i < links.length; i++) {
        links[i].href = "https://wa.me/5511945070187?text=olá,%20vim%20pelo%20site";
        links[i].target = "_blank";
        links[i].ariaLabel = "Agendar visita técnica por Whatsapp"
    }
}

// Selecionar todos os elementos de uma classe
const mercurioLink = document.querySelectorAll('.mercurio-link');
const saturnoLink = document.querySelectorAll('.saturno-link');
const agendarLink = document.querySelectorAll('.agendar-link');

// Adicionar atributos a todos os elementos
linkWhats(mercurioLink)
linkWhats(saturnoLink)
linkWhats(agendarLink)
