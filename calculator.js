const entrada1 = document.getElementById('entrada-1');
const entrada2 = document.getElementById('entrada-2');
const result = document.getElementById('resultado');

let resultado = 0;

document.getElementById('btn-soma').addEventListener('click', () => {

    if(entrada1.value != "" && entrada2.value != "") {
        resultado = Number(entrada1.value) + Number(entrada2.value);
        result.innerText = resultado;
    }
    else{
        alert("Digite um número em todos os campos");
    }
});

document.getElementById('btn-subtracao').addEventListener('click', () => {

    if(entrada1.value != "" && entrada2.value != "") {
        resultado = Number(entrada1.value) - Number(entrada2.value);
        result.innerText = resultado;
    }
    else{
        alert("Digite um número em todos os campos");
    }
});

document.getElementById('btn-multiplicacao').addEventListener('click', () => {

    if(entrada1.value != "" && entrada2.value != "") {
        resultado = Number(entrada1.value) * Number(entrada2.value);
        result.innerText = resultado;
    }
    else{
        alert("Digite um número em todos os campos");
    }
});

document.getElementById('btn-divisao').addEventListener('click', () => {

    if(entrada1.value != "" && entrada2.value != "" && entrada2.value != '0') {
        resultado = Number(entrada1.value) / Number(entrada2.value);
        result.innerText = resultado;
    }
    else{
        alert("Digite um número em todos os campos");
    }

});

document.getElementById('btn-clear').addEventListener('click', () => {

    entrada1.value = "";

    entrada2.value = "";

    result.innerText = "";

})
