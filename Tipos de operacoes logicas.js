/*
   passou := falso
   escreval("Bem-vindo, qual o seu nome?")
   leia(nome)
   escreval(nome,", digite sua nota 1:")
   leia(nota1)
   escreval(nome,", digite sua nota 2:")
   leia(nota2)
   media := (nota1 + nota2) / 2
   escreval("Sua media e igual a",media)

   se media >= 6 entao
      passou := verdadeiro
   fimse

   se !passou && media ==0 entao
      escreval("Voce esta reprovado(a) ",nome)
   senao
      escreval("Voce esta aprovado(a) ",nome)
    fimse
*/

var nota1, nota2, media, nome, passou;
   passou = false; 
   nome = prompt("Bem-vindo, qual o seu nome?")
   nota1 = prompt(nome + " digite sua nota 1:")
   nota2 = prompt(nome + " digite sua nota 2:")
   media = (parseInt(nota1) + parseInt(nota2)) / 2;
   
   if(media >=5)
    passou = true;
   

    if(!passou && media = 0)
    alert("Voce esta aprovado(a) " + nome)
   else
    alert("Voce esta reprovado(a) " + nome)