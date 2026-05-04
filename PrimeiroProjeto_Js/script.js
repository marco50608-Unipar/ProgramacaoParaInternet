//importando o elemento do html para o javascript
let h1titulo = document.querySelector("#h1titulo");
let inputcampoTexto = document.querySelector("#inputcampoTexto");
let inputcampoTexto2 = document.querySelector("#inputcampoTexto2");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function alterarTexto(){
    //Retirar o texto do input e adicionar em uma variável
    let textoDigitado = inputcampoTexto.value;
    let textoDigitado2 = inputcampoTexto2.value;    
    let TituloAntigo = h1titulo.textContent;


    //Atribuir o texto retirado do input e adicionado no h1
    h1titulo.textContent = textoDigitado2;
    inputcampoTexto.value = TituloAntigo;
    inputcampoTexto2.value = textoDigitado;
    
}

btTrocarTexto.onclick = function(){
    alterarTexto();
}