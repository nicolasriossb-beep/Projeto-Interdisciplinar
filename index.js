function toggleMenu() {
    const menu = document.getElementById("btnConfig");
    menu.classList.toggle("hidden");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

document.getElementById("btnConfig").addEventListener("click", toggleMenu);

//https://wa.me/5511945070187

const botao = document.createElement("a");

botao.href = "https://wa.me/5511945070187?";
botao.target = "_blank";
botao.classList.add("whatsapp-btn");

botao.innerHTML= "💬";

document.body.appendChild(botao);
