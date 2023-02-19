let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)

// for(var pos = 0; pos<num.length; pos++){
//     console.log(num[pos])
// } 

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console. log(`O valor 8 está na posição ${pos}`)
}