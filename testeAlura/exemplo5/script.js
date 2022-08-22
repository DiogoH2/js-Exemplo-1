let frutas = [];
let doce = [];
let laticinos = [];
let congelados = [];
let comida = "";
let tipo = "";

let addMais = 'sim';
while (addMais != 'não') {

  addMais = prompt('deseja adiciona uma comida?')

  while (addMais != 'sim' && addMais != 'não') {

    alert('infome um valor valido!!')
    addMais = prompt('deseja adiciona uma comida?')

  } 
  
  if (addMais === 'não') {
    break;
  }

  const comida = prompt('insira uma comida?')
  const tipo = prompt('coloque o tipo da comida: frutas, laticínios, doces ou congelados')
  if (tipo === 'frutas') {
    frutas.push(comida);
  } else if (tipo === 'laticínios') {
    laticinios.push(comida);
  } else if (tipo === 'doces') {
    doces.push(comida);
  } else if (tipo === 'congelados') {
    congelados.push(comida);
  } else {
    alert("Essa categoria não foi pré-definida.")
  }

}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);