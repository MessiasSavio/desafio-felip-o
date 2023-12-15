// Importar o módulo readline
const readline = require('readline');

// Criar uma interface para ler e escrever no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir o nome e xp do usuário pelo terminal
 rl.question('Qual é o seu nome? ', (nameHero) => {
    rl.question(`Quanto de xp você têm ${nameHero}? `, (xpHero)=>{
        
    var nivel ='';

    if(xpHero<1000) {
        nivel = "Ferro"
    }else if(xpHero >= 1001 && xpHero <= 2000) {
        nivel = "Bronze"
    }else if(xpHero >= 2001 && xpHero <= 5000) {
        nivel = "Prata"
    }else if(xpHero >= 6001 && xpHero <= 7000) {
        nivel = "Ouro"
    }else if(xpHero >= 7001 && xpHero <= 8000) {
        nivel = "Platina"
    }else if(xpHero >= 8001 && xpHero <= 9000) {
        nivel = "Imortal"
    }else (nivel = "Radiante")

    console.log(`O Herói de nome ${nameHero} está no nível ${nivel}`);

    rl.close();
  });
});

