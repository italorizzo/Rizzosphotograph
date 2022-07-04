let time = 4100,
qnt = 6 // quantidade de arquivos na pasta de imagens_home
currentImageIndex = 2,
images = document.getElementById("img-slider")

function nextImage() {
    images.style.backgroundImage = `url(image/imagens_home/imagem_${currentImageIndex}.jpg)`

    currentImageIndex++

    if(currentImageIndex >= qnt){
        currentImageIndex = 1
    }
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)