let quantidadePessoas = document.querySelector("#quantidadePessoas");
let ovosporPessoa = document.querySelector("#ovoPessoa");
let queijoporPessoa = document.querySelector("#queijoPessoa");

function CalcularPessoas(){
    pessoas = Number(quantidadePessoas.value);
    quantidadeovos = pessoas * 2
    quantidadequeijo = pessoas * 50

    ovosporPessoa.textContent = String(quantidadeovos);
    queijoporPessoa.textContent = String(quantidadequeijo);
}