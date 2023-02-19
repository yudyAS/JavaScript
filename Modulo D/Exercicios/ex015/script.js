function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)/*Vai pegar o ano atual e subtrair pelo ano de nascimento que o usuario colocou para descubrir a idade*/
        
        var img = document.createElement('img')/*Cria um elemento sem precisar digitar no html.*/

        img.setAttribute('id', 'foto')/*Define um atributo para o elemento, nesse caso definimos um 'id' que vai ser 'foto'. */
        
        var genero = ''
        if (fsex[0].checked){/*Vai verificar se o input está marcado na posição '0' que nesse caso é o masculino */
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'img/criança-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }

        }else if(fsex[1].checked){

            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'img/criança-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.width = '400px'
        img.style.height = '400px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)/*Vai adicionar um elemento em baixo. */
    }
}