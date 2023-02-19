function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var txt = window.document.getElementById('txt')
    var data = new Date()
    var hora =  data.getHours()
    var m = new Date()
    var min = m.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if(hora > 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
        txt.innerHTML = 'Bom dia!'
    }else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
        txt.innerHTML = 'Boa Tarde!'
    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
        txt.innerHTML = 'Boa Noite!'
    }
}
