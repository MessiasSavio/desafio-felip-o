```
# Programa em Node.js que usa o módulo readline

Este programa pede o nome e o xp do usuário pelo terminal e mostra o seu nível, de acordo com uma tabela pré-definida.

## Como executar o programa

Para executar o programa, você precisa ter o Node.js instalado no seu computador. Você pode baixar o Node.js no [site oficial](https://nodejs.org/en/) ou seguir um [tutorial](https://www.treinaweb.com.br/blog/instalando-o-node-js-no-windows/) para aprender como instalar e configurar o Node.js no Windows.

Depois de instalar o Node.js, você pode abrir o terminal e navegar até a pasta onde o arquivo com o código está salvo. Então, você pode digitar o comando `node index.js` para executar o programa e responder às perguntas.

## Como funciona o código

O código é um programa em Node.js que usa o módulo readline para interagir com o usuário pelo terminal. O módulo readline permite ler e escrever dados de forma assíncrona, usando callbacks para lidar com as entradas e saídas.

O programa começa importando o módulo readline e criando uma interface chamada rl, que recebe os dados de entrada do teclado (process.stdin) e envia os dados de saída para o terminal (process.stdout).

```js
// Importar o módulo readline
const readline = require('readline');

// Criar uma interface para ler e escrever no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

Em seguida, o programa usa o método rl.question para fazer duas perguntas ao usuário: qual é o seu nome e quanto de xp você tem. O método rl.question recebe dois argumentos: uma string com a pergunta e uma função callback que é chamada quando o usuário digita a resposta. A resposta do usuário é passada como um parâmetro para a função callback.

A primeira pergunta é feita usando uma template string que interpola a variável nameHero, que armazena o nome do usuário. A segunda pergunta é feita dentro da função callback da primeira, criando uma sequência de perguntas. A variável xpHero armazena o valor de xp do usuário.

```js
// Pedir o nome e xp do usuário pelo terminal
 rl.question('Qual é o seu nome? ', (nameHero) => {
    rl.question(`Quanto de xp você têm ${nameHero}? `, (xpHero)=>{
```

Depois de obter as respostas do usuário, o programa usa uma estrutura condicional if-else para atribuir um nível ao usuário, de acordo com o seu valor de xp. A variável nivel guarda o nome do nível, que pode ser Ferro, Bronze, Prata, Ouro, Platina, Imortal ou Radiante.

```js
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
```

Por fim, o programa usa o método console.log para mostrar uma mensagem no terminal com o nome e o nível do usuário, usando outra template string. O método rl.close é chamado para encerrar a interface e o programa.

```js
    console.log(`O Herói de nome ${nameHero} está no nível ${nivel}`);

    rl.close();
  });
});
```

## Referências

- [Node.js](https://nodejs.org/en/)
- [Readline](https://nodejs.org/api/readline.html)
