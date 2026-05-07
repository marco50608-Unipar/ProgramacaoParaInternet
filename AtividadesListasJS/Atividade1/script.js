valordolar = document.querySelector("#ValorDolar");
primeiraporcentagem = document.querySelector("#umporcento");
segundaporcentagem = document.querySelector("#doisporcento");
terceiraporcentagem = document.querySelector("#cincoporcento");
quartaporcentagem = document.querySelector("#dezporcento");



function CalcularValores(){
    valor1 = Number(valordolar.value);
    resultadoum = valor1 * 0.01
    resultadodois = valor1 * 0.02
    resultadotres = valor1 * 0.05
    resultadoquatro = valor1 * 0.10


    primeiraporcentagem.textContent = String(resultadoum);
    segundaporcentagem.textContent = String(resultadodois);
    terceiraporcentagem.textContent = String(resultadotres);
    quartaporcentagem.textContent = String(resultadoquatro);
    
}