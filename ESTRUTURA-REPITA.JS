/*
    valor1, valor2: real
    sairLoop: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    repita
        escreva("Digite o primeiro valor: ")
        leia(valor1)
        escreva("Digite o segundo valor: ")
        leia(valor2)
        escreval("resultado: ", valor1 + valor2)
        escreval("Deseja sair? S/N")
        leia(sairLoop)
    ate sairLoop <> "N"
*/

function acaoBotao() {
    var valor1, valor2, sairLoop;    
    do {
        valor1 = prompt("Digite o primeiro valor: ")
        valor2 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor1) + parseInt (valor2))
        sairLoop = prompt("Deseja sair? S/N")  
    }while(sairLoop == "N")
}
