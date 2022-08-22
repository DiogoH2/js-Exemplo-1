const tipo = prompt('Tipo de calculo: soma, subtração, multipliação ou divisão')


if(tipo == 'soma'){
  let numero1 = prompt('Entre com o primeiro numero: ')

  let numero2 = prompt('Entre com o segundo numero: ')

  function soma (n1, n2){
    let resultado = parseInt(n1) + parseInt(n2)
    alert(`${resultado}`)
  }

  soma(numero1,numero2)

}else if(tipo == 'subtração'){
  let numero1 = prompt('Entre com o primeiro numero: ')

  let numero2 = prompt('Entre com o segundo numero: ')

  function subtraçao (n1, n2){
    let resultado = n1 - n2
    alert (`${resultado}`);
  }

  subtraçao(numero1,numero2)

}else if(tipo == 'multiplicação'){
  let numero1 = prompt('Entre com o primeiro numero: ')

  let numero2 = prompt('Entre com o segundo numero: ')

  function multipliaçao (n1, n2){
    let resultado = n1 * n2
    alert (`${resultado}`);
  }
  multipliaçao(numero1,numero2)

}else if(tipo == 'divisão'){
  let numero1 = prompt('Entre com o primeiro numero: ')

  let numero2 = prompt('Entre com o segundo numero: ')

  function divisao (n1, n2){
    let resultado = Math.floor(n1/n2)
    alert (`${resultado}`);
  }

  divisao(numero1,numero2)
}else if(tipo == 'sair'){

  alert('Até a próxima!')

}else{
  alert('entre com um valor valido!!')
}



