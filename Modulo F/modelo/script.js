let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar() {
    /*Vai verificar se a pessoa colocou um número e se esse número não está na lista.*/
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //push = adicionar valor no vetor
        valores.push(Number(num.value))

        //Criando elementos de forma dinâmica
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`

        //Adicionando o item na lista
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    //Vai esvaziar a caixa pra colocar o número 
    num.value = ''

    //Vai colocar o foco na caixa, sem precisar clicar denovo
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0

        //Vai varrer o vetor inteiro
        for(let pos in valores){

            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]

            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} número cadastrados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, remos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores adicionados é ${media}</p>`
        
    }
}