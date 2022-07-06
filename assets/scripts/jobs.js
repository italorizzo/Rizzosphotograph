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
    let imgInfo = document.createElement('img')
    imgInfo.classList.add('imgInfo')
    imgInfo.src = imagens[contIndexImg]
    let a = document.createElement('a')
    a.href = 'index.html'
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
    a.appendChild(imgInfo)
    a.appendChild(imgTextInfo)
    hoverInfo.append(a)
    corpo.appendChild(hoverInfo)

    contIndexImg++
}
