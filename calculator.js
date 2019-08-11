const entrada1 = document.getElementById('entrada-1');
const entrada2 = document.getElementById('entrada-2');
const result = document.getElementById('resultado');

let resultado = 0;

document.getElementById('btn-soma').addEventListener('click', () => {

    if(entrada1.value == "" || entrada2.value == "") {
        alert("Você deixou um espaço em branco! Preencha todos os campos.");
    }
    else if (isNaN(entrada1.value) || isNaN(entrada2.value)){
        alert("Você digitou um caracter! Troque por um número.");
    }
    else{
        resultado = Number(entrada1.value) + Number(entrada2.value);
        result.innerText = resultado;
    }
});

document.getElementById('btn-subtracao').addEventListener('click', () => {

    if(entrada1.value == "" || entrada2.value == "") {
        alert("Você deixou um espaço em branco! Preencha todos os campos.");
    }
    else if (isNaN(entrada1.value) || isNaN(entrada2.value)){
        alert("Você digitou um caracter! Troque por um número.");
    }
    else{
        resultado = Number(entrada1.value) - Number(entrada2.value);
        result.innerText = resultado;
    }
});

document.getElementById('btn-multiplicacao').addEventListener('click', () => {

    if(entrada1.value == "" || entrada2.value == "") {
        alert("Você deixou um espaço em branco! Preencha todos os campos.");
    }
    else if (isNaN(entrada1.value) || isNaN(entrada2.value)){
        alert("Você digitou um caracter! Troque por um número.");
    }
    else{
        resultado = Number(entrada1.value) * Number(entrada2.value);
        result.innerText = resultado;
    }
});

document.getElementById('btn-divisao').addEventListener('click', () => {

    if(entrada1.value == "" || entrada2.value == "") {
        alert("Você deixou um espaço em branco! Preencha todos os campos.");
        
    }
    else if (isNaN(entrada1.value) || isNaN(entrada2.value)){
        alert("Você digitou um caracter! Troque por um número.");
    }
    else if(entrada2.value == '0') {
        alert("Não é possíver realizar divisão por 0");
    }
    else {
        resultado = Number(entrada1.value) / Number(entrada2.value);
        result.innerText = resultado;
    }

});

document.getElementById('btn-clear').addEventListener('click', () => {

    entrada1.value = "";

    entrada2.value = "";

    result.innerText = "";

})
