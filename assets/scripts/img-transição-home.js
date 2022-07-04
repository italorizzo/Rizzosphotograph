let time = 5100,
currentImageIndex = 0,
images = document.getElementById("img-slider"),
link_img= ['../../image/imagens_home/imagem_2.jpg', '../../image/imagens_home/imagem_3.jpg', '../../image/imagens_home/imagem_4.jpg', '../../image/imagens_home/imagem_5.jpg', '../../image/imagens_home/imagem_6.jpg', '../../image/imagens_home/imagem_1.jpg'],
max = link_img.length

function nextImage() {
    var entrar = `url(${link_img[currentImageIndex]})`
    images.style.backgroundImage = entrar

    currentImageIndex++

    if(currentImageIndex >= max){
        currentImageIndex = 0
    }
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)