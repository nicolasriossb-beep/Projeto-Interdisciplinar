const vulcanoContainer = document.getElementById('vulcanoContainer');
const vulcanoRightArrow = document.getElementById('vulcanoRightArrow');
const vulcanoLeftArrow = document.getElementById('vulcanoLeftArrow');

// Função para converter rem em pixels
function getScrollAmount() {
    // 1. Pegamos o tamanho da fonte base do navegador (geralmente 16px)
    const fontSizeBase = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // 2. Calculamos quanto é 18rem em pixels
    const scrollAmount = 18 * fontSizeBase;

    return scrollAmount
};

// Evento de clique - Direita
vulcanoRightArrow.addEventListener('click', () => {
    vulcanoContainer.scrollBy({
        left: getScrollAmount(),
        behavior: 'smooth'
    });
});

// Evento de clique - Esquerda
vulcanoLeftArrow.addEventListener('click', () => {
    vulcanoContainer.scrollBy({
        left: -getScrollAmount(), // Valor negativo para voltar
        behavior: 'smooth'
    });
});



// Função para gerenciar a visibilidade da seta
function vulcanoManageArrows() {
    // scrollWidth: a largura total do conteúdo (incluindo o oculto)
    // clientWidth: a largura visível do contêiner
    // scrollLeft: quanto foi rolado para a direita
    const scrollWidth = vulcanoContainer.scrollWidth;
    const clientWidth = vulcanoContainer.clientWidth;
    const scrollLeft = vulcanoContainer.scrollLeft;
    const err = getScrollAmount() * 0.1; // margem de erro

    const canScrollRight = scrollWidth - err > (clientWidth + scrollLeft);

    if (canScrollRight) {
        vulcanoRightArrow.classList.add('visible');
    } else {
        vulcanoRightArrow.classList.remove('visible');
    }

    const canScrollLeft = scrollLeft > err
    if (canScrollLeft) {
        vulcanoLeftArrow.classList.add('visible');
    } else {
        vulcanoLeftArrow.classList.remove('visible');
    }
}

// Evento de scroll no contêiner para atualizar a seta
vulcanoContainer.addEventListener('scroll', vulcanoManageArrows);

// Evento de redimensionamento da janela para atualizar a seta
window.addEventListener('resize', vulcanoManageArrows);

// Verificação inicial ao carregar a página
vulcanoManageArrows();
