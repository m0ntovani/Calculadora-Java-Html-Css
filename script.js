function calcular(operador) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira dois números válidos!";
    } else {
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = "Erro: Divisão por zero!";
                }
                break;
            default:
                resultado = "Operador inválido!";
        }
    }

    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}
