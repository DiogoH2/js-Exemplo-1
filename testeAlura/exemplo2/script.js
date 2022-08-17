const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");


const msg = `Olá ${nome}, você tem ${idade} anos, e já está aprendendo ${linguagem}`

alert(msg);

const estudo = prompt(`${nome} Você gosta de estudar ${linguagem} ?(responda 1 pra sim e 2 pra não)`);

if(estudo === "1"){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")

}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")

}
