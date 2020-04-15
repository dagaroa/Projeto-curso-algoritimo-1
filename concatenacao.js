/*
   nome: caractere
   idade: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Ola, digite seu nome:")
   leia(nome)
   escreval("Digite sua idade:")
   leia(idade)
   
   escreval(nome,", voce tem ", idade," anos.")
   */

   var nome, idade;

   nome = prompt("Ola, digite seu nome:")
   idade = prompt("Digite sua idade:")

   document.getElementById("paragrafo").innerText = nome + ", voce tem " + idade + " anos."
