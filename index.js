function toggleMenu() {
    const menu = document.getElementById("btnConfig");
    menu.classList.toggle("hidden");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
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
const botoesVerMais = document.querySelectorAll(".btn-vermais");
botoesVerMais.forEach(botao => {
    botao.addEventListener("click", () => {
        const infoExtra = botao.parentElement.querySelector(".info-extra");
        infoExtra.classList.toggle("hidden");

        if(infoExtra.classList.contains("hidden")) {
            botao.textContent = "Ver mais";
        } else {
            botao.textContent = "Ver menos";
        }
    });
});