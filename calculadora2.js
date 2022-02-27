function insert(num) {
    var numero = document.getElementById("results").value;
    document.getElementById("results").value = numero + num;
}

function clean() {
    document.getElementById("results").value = ""
}

function back() {
    var resultado = document.getElementById('results').value;
    document.getElementById('results').value=resultado.substring(0, resultado.length -1);

}

function calcular () {
    var resultado = document.getElementById('results').value;
    if(results)
    {
        document.getElementById('results').value=eval(resultado);
    }

    else
    {
        document.getElementById('results').value= Erro
    }
}