let time = 5100,
qnt = 6 // quantidade de arquivos na pasta de imagens_home
currentImageIndex = 0,
currentImageIndex2 = 2
var images = document.getElementById("img-slider"),
cont = 1
while(cont <= qnt){
    var slider = document.createElement('img')
    slider.classList.add('imagem-tela-grande')
    slider.src = `https://source.unsplash.com/random/160${cont}x1200/` // mudar depois para `image/imagens_home/imagem_${cont + 1}.jpg`
    images.appendChild(slider)
    cont++
}
const imagem_tela_grande = document.querySelectorAll('.imagem-tela-grande')
function nextImage() {
    images.style.backgroundImage = `https://source.unsplash.com/random/160${currentImageIndex2}x1200/` // mudar depois para url(image/imagens_home/imagem_${currentImageIndex2}.jpg)
    imagem_tela_grande[currentImageIndex].classList.remove('select')
    currentImageIndex++

    if(currentImageIndex >= qnt){
        currentImageIndex = 0
        currentImageIndex2 = 1
    }
    imagem_tela_grande[currentImageIndex].classList.add('select')
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)