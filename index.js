exports.NumeroPar = function(n){
    var resposta = false;
    if (n%2 == 0) {
        resposta = true;
    }
    return resposta;
}

exports.NumeroPrimo = function(n){
    var resposta = false;
    // dividir o numero n vezes
    for (i=1; i <= n; i++) {
        if (n%1==0) {
            count = count + 1;
        }
    }
    if (count == 2) {
        resposta = true;
    }
    return resposta;
}