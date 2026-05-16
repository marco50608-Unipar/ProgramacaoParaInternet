let PrimeiroNumeroEntregue = document.querySelector("#Primeironumero");
let SegundoNumeroEntregue = document.querySelector("#Segundonumero");
let SomaIndex = document.querySelector("#SomaResultadoIndex");
let SubtracaoIndex = document.querySelector("#SubtracaoResultadoIndex");
let MultiplicacaocaoIndex = document.querySelector("#MultiplicacaoResultadoIndex");
let DivisaoIndex = document.querySelector("#DivisaoResultadoIndex");

function CalcularNumeros(){
    numeroum = Number(PrimeiroNumeroEntregue.value);
    numerodois = Number(SegundoNumeroEntregue.value);

    soma = numeroum + numerodois
    subtracao = numeroum - numerodois
    multiplicacao = numeroum * numerodois
    divisao = numeroum / numerodois

    SomaIndex.textContent = String(soma);
    SubtracaoIndex.textContent = String(subtracao);
    MultiplicacaocaoIndex.textContent = String(multiplicacao);
    DivisaoIndex.textContent = String(divisao);
    
}

