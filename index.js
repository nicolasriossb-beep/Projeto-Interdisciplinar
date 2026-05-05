function toggleMenu() {
    const menu = document.getElementById("btnConfig");
    menu.classList.toggle("hidden");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

document.addEventListener("DOMContentLoaded", function () {

    const botao = document.createElement("a");

    botao.href = "https://wa.me/5511945070187?text=Olá,%20vim%20pelo%20site";
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