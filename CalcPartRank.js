function calcularNivel(quantVitorias, quantDerrotas) {
    let nivel = '';
    const saldoVitorias = quantVitorias - quantDerrotas;

   
    if (quantVitorias < 10) {
        nivel = "Ferro";
    } else if (quantVitorias >= 11 && quantVitorias <= 20) {
        nivel = "Bronze";
    } else if (quantVitorias >= 21 && quantVitorias <= 50) {
        nivel = "Prata";
    } else if (quantVitorias >= 51 && quantVitorias <= 80) {
        nivel = "Ouro";
    } else if (quantVitorias >= 81 && quantVitorias <= 90) {
        nivel = "Diamante";
    } else if (quantVitorias >= 91 && quantVitorias <= 100) {
        nivel = "Lendário";
    } else if (quantVitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}


function exibirResultado(quantVitorias, quantDerrotas) {
    const resultado = calcularNivel(quantVitorias, quantDerrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
}


exibirResultado(55, 20);  
