

let numSave
let numSaveTwo
numSave = Number(prompt(`Digite um número`))
numSaveTwo = Number(prompt(`Digite outro número`))

alert(`A soma dos dois números é:  ${numSave + numSaveTwo}`)
alert(`A subtração dos dois números é:  ${numSave - numSaveTwo}`)
alert(`A multiplicação dos dois números é:  ${numSave * numSaveTwo}`)
alert(`A divisão dos dois números é :  ${numSave / numSaveTwo}`)
alert(`O resto da divisão dos dois números é :  ${numSave % numSaveTwo}`)

let sum = numSave + numSaveTwo
    if(sum % 2 == 0){
        alert(`A soma dos dois números é:  Par`)
        }else{
            alert(`A soma dos dois números é:  Impar`)
        }

if(numSave === numSaveTwo){
    alert(`Os números inseridos são iguais`)
}else{
    alert(`Os números inseridos são diferentes`)
}
