const area = prompt("Qual area você quer seguir para área de Front-End ou seguir para a área de Back-End?");

if(area == 'front-end'){
  const linguagem = prompt("você quer aprender React ou Vue?");
}else if(area == 'back-end'){
  const linguagem = prompt("você quer aprende C# ou Java?");
}else{
  const escolha = alert("informe uma área especifica!!!");
}

const especialização = prompt(`voce quer continuar na area de ${area} ou se tornar um FullStack? `)

if(especialização == "FullStack"){

  const escolha = alert("Boa! agora você ira se tornar um fullStack");

}else if(especialização == 'front-end'){

  const escolha = alert(`Continue estudando e avançando na sua area de: ${area}`);

}else if(especialização == 'back-end'){

  const escolha = alert(`Continue estudando e avançando na sua area de: ${area}`);

}else{
  const escolha = alert(`ERRO: Coloque um valor valido!!`);
}

let linguagens = 0;

while (linguagens < 3){
  const aprender = prompt("Quas liguagens você quer aprender?");

  linguagens= linguagens + 1;
}