const bt_menu = document.getElementById('bt_menu')
const preto = document.getElementById('preto')
bt_menu.addEventListener('click', () => {
    preto.classList.toggle('ativado')
})