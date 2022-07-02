//--------------------------------------------------------------
// Script dos Botões
//--------------------------------------------------------------
const botao0 = document.querySelector('#botao-0')
const botao1 = document.querySelector('#botao-1')
const botao2 = document.querySelector('#botao-2')
const botao3 = document.querySelector('#botao-3')
const botao4 = document.querySelector('#botao-4')
const botao5 = document.querySelector('#botao-5')
const botao6 = document.querySelector('#botao-6')
const botao7 = document.querySelector('#botao-7')
const botao8 = document.querySelector('#botao-8')
const botao9 = document.querySelector('#botao-9')
const botaoDel = document.querySelector('#botao-apagar')

var input = document.querySelector('#Exemplo')

botao0.addEventListener("click", () => {
    input.value += '0'
})

botao1.addEventListener("click", () => {
    input.value += '1'
})

botao2.addEventListener("click", () => {
    input.value += '2'
})

botao3.addEventListener("click", () => {
    input.value += '3'
})

botao4.addEventListener("click", () => {
    input.value += '4'
})

botao5.addEventListener("click", () => {
    input.value += '5'
})

botao6.addEventListener("click", () => {
    input.value += '6'
})

botao7.addEventListener("click", () => {
    input.value += '7'
})

botao8.addEventListener("click", () => {
    input.value += '8'
})

botao9.addEventListener("click", () => {
    input.value += '9'
})

botaoDel.addEventListener("click", () => {
    input.value = null
})

//--------------------------------------------------------------
// Script do Modulo de Foto
//--------------------------------------------------------------

const botaoPopUp = document.querySelector('.botoes__botao--enviar')
const popup = document.querySelector('.pop-up__container')
const saida = document.querySelector('pop-up__sair')

const video = document.querySelector('.area-video')
const botaoTiraFoto = document.querySelector('.botao__foto')

botaoPopUp.addEventListener('click', () => {
    popup.style.display = 'block'
    navigator.mediaDevices.getUserMedia({video:true}).then(stream => {
        video.srcObject = stream;
        video.play
    }).catch(error => {
        alert(error)
    })
})

botaoTiraFoto.addEventListener('click', () => {
    video.style.display = 'none'
    var canvas = document.querySelector('canvas')
    canvas.style.display = 'block'
    canvas.heigth = video.videoHeigth
    canvas.width = video.videoWidth
    var context = canvas.getContext('2d')
    context.drawImage(video, 0, 0)
    var link = document.createElement('a')
    link.download = 'foto.png'
    var linkImagem = link.href = canvas.toDataURL()
    link.textContent = 'Clique para baixar a imagem'
    var downloadImagem = document.body.appendChild(link)
    downloadImagem.style.display = 'none'
    console.log(linkImagem)
})
