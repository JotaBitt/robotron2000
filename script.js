const botao = document.querySelector('[mostrar]');
const lista = document.querySelector('.lista');
const removeLista = document.querySelector('[esconder]');

botao.addEventListener('click', () => {
    lista.removeAttribute('hidden');
    removeLista.removeAttribute('hidden');
})

removeLista.addEventListener('click', () => {
    lista.toggleAttribute('hidden');
    removeLista.toggleAttribute('hidden');
})
