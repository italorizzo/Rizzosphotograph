
var informações_texto = [
    {'nome': 'Não sei 1', 'data': '12 maio 2022', 'descricao': 'estou sem ideias1', 'tipo': 'casamento', 'lugar': 'São Paulo', 'quantidade de imagens': 2},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo', 'quantidade de imagens': 2},
    {'nome': 'Não sei 3', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo', 'quantidade de imagens': 2},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo', 'quantidade de imagens': 2},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo','quantidade de imagens': 2},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo', 'quantidade de imagens': 2},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo', 'quantidade de imagens': 2},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo', 'quantidade de imagens': 2},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo', 'quantidade de imagens': 2},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo','quantidade de imagens': 2},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo', 'quantidade de imagens': 2},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2', 'tipo': 'casamento', 'lugar': 'São Paulo', 'quantidade de imagens': 2
}
]

var qnt_imagens = 12 // quantidade de pastas na pasta (imagens-albuns)
var qnt_max_imagensporalbum = 11 //quantidade maxima que pode ter de fotos em cada album

const corpo = document.getElementById('corpo')
var cont = 1
var prov = 0 //tirar depois
var imagens = []
while (cont <= qnt_imagens){
    if(prov > 9){
        prov = 0
    }
    imagens.push(`https://source.unsplash.com/random/128${prov}x94${prov}/`) // adicionar depois `image/imagens-albuns/album${cont}/capa.jpg`
    prov++
    cont++
}
var contIndexImg = 0
let qnt = imagens.length -1
while (contIndexImg <= qnt){
    let info = informações_texto[contIndexImg]
    let nome_album = info['nome']
    let data_album = info['data']
    let descrição_album = info['descricao']

    let hoverInfo = document.createElement('div')
    hoverInfo.classList.add('hoverInfo')
    hoverInfo.id = contIndexImg+1
    let imgInfo = document.createElement('img')
    imgInfo.classList.add('imgInfo')
    imgInfo.src = imagens[contIndexImg]
    let imgTextInfo = document.createElement('div')
    imgTextInfo.classList.add('imgTextInfo')
    let informaçoes = document.createElement('div')
    informaçoes.classList.add('informaçoes')
    let titulo = document.createElement('span')
    titulo.classList.add('titulo')
    let data = document.createElement('span')
    data.classList.add('data')
    let description = document.createElement('div')
    description.classList.add('description')
    let p = document.createElement('p')

    titulo.textContent = nome_album
    data.textContent = data_album
    p.textContent = descrição_album

    informaçoes.appendChild(titulo)
    informaçoes.appendChild(data)
    imgTextInfo.appendChild(informaçoes)
    description.appendChild(p)
    imgTextInfo.appendChild(description)    
    hoverInfo.appendChild(imgInfo)
    hoverInfo.appendChild(imgTextInfo)
    corpo.appendChild(hoverInfo)
    contIndexImg++
}
var img = 0
cont = 0

const img1 = document.getElementById('1')
const img2 = document.getElementById('2')
const img3 = document.getElementById('3')
const img4 = document.getElementById('4')
const img5 = document.getElementById('5')
const img6 = document.getElementById('6')
const img7 = document.getElementById('7')
const img8 = document.getElementById('8')
const img9 = document.getElementById('9')
const img10 = document.getElementById('10')
const img11 = document.getElementById('11')
const img12 = document.getElementById('12')
const corpo_album = document.getElementById('corpo-album')

function albumPratica(){
    let parallax = document.createElement('div')
    parallax.classList.add('parallax')
    let img_album = document.createElement('div')
    img_album.classList.add('img-album')
    img_album.style.backgroundImage = 'url(https://source.unsplash.com/random/1280x940/)' //tem que adicionar depois a variável `url(image/imagens-albuns/album${cont}/capa.jpg)`

    let info = informações_texto[img - 1]
    let nome_album = info['nome']
    let data_album = info['data']
    let lugar_album = info['lugar']
    let tipo_album = info['tipo']
    let qnt_imagensnoalbum = info['quantidade de imagens']

    let banner_escurecido = document.createElement('div')
    banner_escurecido.classList.add('banner-escurecido')

    let infos = document.createElement('div')
    infos.classList.add('infos-album')

    let tipo = document.createElement('span')
    tipo.classList.add('tipo-album')
    tipo.textContent = tipo_album

    let lugar = document.createElement('span')
    lugar.classList.add('lugar-album')
    lugar.textContent=lugar_album

    let data = document.createElement('span')
    data.classList.add('data-album')
    data.textContent = data_album

    let titulo_main = document.createElement('h1')
    titulo_main.classList.add('titulo-main')
    titulo_main.textContent = nome_album

    let imagensAlbum = document.createElement('div')
    imagensAlbum.classList.add('imgAlbum')

    infos.appendChild(tipo)
    infos.appendChild(lugar)
    infos.appendChild(data)
    banner_escurecido.appendChild(infos)
    banner_escurecido.appendChild(titulo_main)
    parallax.appendChild(banner_escurecido)
    parallax.appendChild(img_album)
    corpo_album.appendChild(parallax)
    corpo_album.appendChild(imagensAlbum)

    while(cont <= Math.min(qnt_max_imagensporalbum, qnt_imagensnoalbum)){
        var imgDentroAlbum = document.createElement('img')
        if(cont == 0){
            imgDentroAlbum.src = `image/imagens-albuns/album${img}/capa.jpg`
        }else{
            imgDentroAlbum.src = `https://source.unsplash.com/random` //colocar depois image/imagens-albuns/album${img}/${cont}.jpg
        }
        cont++
        imagensAlbum.appendChild(imgDentroAlbum)
    }
}

img1.addEventListener('click', () => {
    img = 1
    corpo.style.display = 'none'
    albumPratica()
})
img2.addEventListener('click', () => {
    img = 2
    corpo.style.display = 'none'
    albumPratica()
})
img3.addEventListener('click', () => {
    img = 3
    corpo.style.display = 'none'
    albumPratica()
})
img4.addEventListener('click', () => {
    img = 4
    corpo.style.display = 'none'
    albumPratica()
})
img5.addEventListener('click', () => {
    img = 5
    corpo.style.display = 'none'
    albumPratica()
})
img6.addEventListener('click', () => {
    img = 6
    corpo.style.display = 'none'
    albumPratica()
})
img7.addEventListener('click', () => {
    img = 7
    corpo.style.display = 'none'
    albumPratica()
})
img8.addEventListener('click', () => {
    img = 8
    corpo.style.display = 'none'
    albumPratica()
})
img9.addEventListener('click', () => {
    img = 9
    corpo.style.display = 'none'
    albumPratica()
})
img10.addEventListener('click', () => {
    img = 10
    corpo.style.display = 'none'
    albumPratica()
})
img11.addEventListener('click', () => {
    img = 11
    corpo.style.display = 'none'
    albumPratica()
})
img12.addEventListener('click', () => {
    img = 12
    corpo.style.display = 'none'
    albumPratica()
})