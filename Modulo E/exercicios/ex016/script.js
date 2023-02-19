function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(Number(ini.value) == 0 || Number(fim.value) == 0 ){
        res.innerHTML = 'IMPOSSÍVEL CONTAR! - Preencha todos os campos.'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value )

        if(p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){//Contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{//Contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}