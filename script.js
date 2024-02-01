
function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivelJogador;

  if (vitorias < 10) {
    nivelJogador = "Ferro";
  } else if (vitorias <= 20) {
    nivelJogador = "Bronze";
  } else if (vitorias <= 50) {
    nivelJogador = "Prata";
  } else if (vitorias <= 80) {
    nivelJogador = "Ouro";
  } else if (vitorias <= 90) {
    nivelJogador = "Diamante";
  } else if (vitorias <= 100) {
    nivelJogador = "Lendário";
  } else {
    nivelJogador = "Imortal";
  }

  return { saldoVitorias, nivelJogador };
}

const vitorias = parseInt(gets());
const derrotas = parseInt(gets());

const resultado = calcularNivel(vitorias, derrotas);

print(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivelJogador}`);
