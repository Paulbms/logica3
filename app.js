function calcularFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * calcularFactorial(num - 1);
}

function solicitarNumero() {
    let num;
    while (true) {
        const input = prompt("Por favor, ingresa un número para calcular su factorial:");

        num = Number(input);
        if (!isNaN(num) && Number.isInteger(num) && num >= 0) {
            break;
        } else {
            alert("Dato incorrecto. Debes ingresar un número entero no negativo.");
        }
    }
    return num;
}

function mostrarResultado(mensaje) {
    const resultadoElemento = document.getElementById('result');
    resultadoElemento.textContent = mensaje;
}

const numero = solicitarNumero();
const factorial = calcularFactorial(numero);
mostrarResultado(`El factorial de ${numero} es ${factorial}.`);
