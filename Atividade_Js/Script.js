number1 = document.querySelector("#number1");
number2 = document.querySelector("#number2");
result = document.querySelector("#result");
somar = document.querySelector("#somar");

function SomarConta(){
    numeroInte1 = Number(number1.value);
    numeroInte2 = Number(number2.value);
    resultado = numeroInte1 + numeroInte2
    result.textContent = String(resultado);
}

somar.onclick = function(){ SomarConta() }

// SUbtrair

numero1 = document.querySelector("#numero1");
numero2 = document.querySelector("#numero2");
resultado1 = document.querySelector("#resultado1");
subtrair = document.querySelector("#subtrair");

function SubtrairConta(){
    numeroInteiro3 = Number(numero1.value);
    numeroInteiro4 = Number(numero2.value);
    resultado = numeroInteiro3 - numeroInteiro4
    resultado1.textContent = String(resultado);
}

subtrair.onclick = function(){ SubtrairConta() }

