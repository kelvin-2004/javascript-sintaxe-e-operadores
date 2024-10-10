

function enviarValor() {

    var primeiro = Number(document.getElementById("primeiro").value);
    var segundo = Number(document.getElementById("segundo").value);
    console.log(igual(primeiro, segundo));
    verificar(primeiro, segundo);
}

function igual(primeiro, segundo) {

    if (primeiro === segundo) {
        return `${primeiro} é igual a ${segundo}`;
    } else {
        return `${primeiro} é diferente de ${segundo}`;
    }
}
function verificar(primeiro, segundo) {
    var soma = primeiro + segundo;

    if (soma > 10 && soma < 20) {
        console.log(`${soma} é maior do que 10 e menor do que 20.`)
    }
    else if (soma > 20) { `${soma} é maior do que 20` }
    else if (soma < 10) { `${soma} é menor do que 10` }
}