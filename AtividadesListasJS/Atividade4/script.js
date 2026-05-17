let PrimeiroSabor = document.querySelector("#PrimeiroSaborIndex");
let SegundoSabor = document.querySelector("#SegundoSaborIndex");
let TerceiroSabor = document.querySelector("#TerceiroSaborIndex");
let QuartoSabor = document.querySelector("#QuartoSaborIndex");
let NumeroRefrigerantes = document.querySelector("#RefrigeranteIndex");
let ValorTotalFinal = document.querySelector("#ValorTotalIndex");

// Exibir os nomes

let MostraSabor1 = document.querySelector("#MostraSabor1");
let MostraSabor2 = document.querySelector("#MostraSabor2");
let MostraSabor3 = document.querySelector("#MostraSabor3");
let MostraSabor4 = document.querySelector("#MostraSabor4");

function CalcularValores(){

    MostraSabor1.textContent = PrimeiroSabor.value + " ";
    MostraSabor2.textContent = SegundoSabor.value + " ";
    MostraSabor3.textContent = TerceiroSabor.value + " ";
    MostraSabor4.textContent = QuartoSabor.value;

    
    primeiroSabor = Number(PrimeiroSabor.value) || 12;
    segundoSabor = Number(SegundoSabor.value) || 12;
    terceiroSabor = Number(TerceiroSabor.value) || 12;
    quartoSabor = Number(QuartoSabor.value) || 12;

    quantidadeRefri = Number(NumeroRefrigerantes.value) || 0;

    contadosSabores = primeiroSabor + segundoSabor + terceiroSabor + quartoSabor;
    contadosRefri = quantidadeRefri * 7;

    valorTotal = contadosSabores + contadosRefri;

    ValorTotalFinal.textContent = String(valorTotal);


}


