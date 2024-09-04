var nota1 = Number(prompt("Digite um número"));
var nota2 = Number(prompt("Digite outro número"));
var nota3 = Number(prompt("Digite mais um número"));
var media = (nota1 + nota2 + nota3) / 3

if (media > 8) {
    alert('Parabéns pelo empenho');
}else if(media >= 6 && media <= 8) {
    alert('Boa chegou lá!');
}else {
    alert('Infezlimente foi reprovado!');
}

//novo comentario