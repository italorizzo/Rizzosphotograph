
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
