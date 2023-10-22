
const numeros = document.getElementById('resultado')

function pon(digito) {
    numeros.value += digito;
}

function borrarTodo() {
    numeros.value = '';
}

function quitar() {
    numeros.value = numeros.value.substr(0, numeros.value.length - 1)
}

function resultado() {
    const numeros = eval(document.getElementById("resultado").value);
    document.getElementById("resultado").value = numeros;

}

