var informações_texto = [
    {'nome': 'Não sei 1', 'data': '12 maio 2022', 'descricao': 'estou sem ideias1'},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'},
    {'nome': 'Não sei 3', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'},
    {'nome': 'Não sei 2', 'data': '24 maio 2010', 'descricao': 'estou sem ideias2'}
]

var qnt_imagens = 12 // quantidade de imagens na pasta (imagens-alguns-capa)

const corpo = document.getElementById('corpo')
var cont = 1
var imagens = []
while (cont <= qnt_imagens){
    imagens.push(`image/imagens-albuns-capa/${cont}.jpg`)
    cont++
}
var contIndexImg = 0
let qnt = imagens.length -1
while (contIndexImg <= qnt){
    var info = informações_texto[contIndexImg]
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


function albumPatrica(){

}

img1.addEventListener('click', () => {
    img = 1
    corpo.style.display = 'none'
    albumPatrica()
})
img2.addEventListener('click', () => {
    img = 2
    corpo.style.display = 'none'
    albumPatrica()
})
img3.addEventListener('click', () => {
    img = 3
    corpo.style.display = 'none'
    albumPatrica()
})
img4.addEventListener('click', () => {
    img = 4
    corpo.style.display = 'none'
    albumPatrica()
})
img5.addEventListener('click', () => {
    img = 5
    corpo.style.display = 'none'
    albumPatrica()
})
img6.addEventListener('click', () => {
    img = 6
    corpo.style.display = 'none'
    albumPatrica()
})
img7.addEventListener('click', () => {
    img = 7
    corpo.style.display = 'none'
    albumPatrica()
})
img8.addEventListener('click', () => {
    img = 8
    corpo.style.display = 'none'
    albumPatrica()
})
img9.addEventListener('click', () => {
    img = 9
    corpo.style.display = 'none'
    albumPatrica()
})
img10.addEventListener('click', () => {
    img = 10
    corpo.style.display = 'none'
    albumPatrica()
})
img11.addEventListener('click', () => {
    img = 11
    corpo.style.display = 'none'
    albumPatrica()
})
img12.addEventListener('click', () => {
    img = 12
    corpo.style.display = 'none'
    albumPatrica()
})