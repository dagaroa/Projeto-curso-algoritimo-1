
function acaoBotao() {
    var nome, idade, limite, contador

    limite = prompt("Quantas vezes voce vai checar a idade: ")
    contador = 0
    while(contador < limite) {
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade: ")
        if (idade > 18)
            document.getElementById("paragrafo").innerText = nome + ", voce e maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + ", voce e menor de idade!"
        contador++
    }    
}