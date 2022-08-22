let frutas = [];
let doces = [];
let laticinos = [];
let congelados = [];
let comida = "";
let tipo = "";
let remover = "";

let addMais = 'sim';
while (addMais != 'não') {

  if (frutas.length === 0 && laticinos.length === 0 && doces.length === 0 && congelados.length === 0) {
    addMais = prompt('deseja adiciona uma comida?')
  } else {
    addMais = prompt('deseja remover uma comida?')
  }

  while (addMais != 'sim' && addMais != 'não' && addMais != 'remover') {

    alert('infome um valor valido!!')
    addMais = prompt('deseja adiciona uma comida?')

  }

  if (addMais === 'não') {
    break;
  }

  if (addMais === "sim") {
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

  } else if (addMais === 'remover')
    if (frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0) {  //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
      alert(`A lista está vazia!`);
    } else {  //se a lista não estiver vazia
      remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
      if (frutas.indexOf(remover) != -1) {
        frutas.splice(frutas.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`)
      } else if (laticinios.indexOf(remover) != -1) {
        laticinios.splice(laticinios.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`)
      } else if (doces.indexOf(remover) != -1) {
        doces.splice(doces.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`)
      } else if (congelados.indexOf(remover) != -1) {
        congelados.splice(congelados.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`)
      } else {
        alert(`Não foi possível encontrar o item dentro da lista!`)
      }
    }
}


alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
