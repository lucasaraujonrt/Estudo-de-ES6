"use strict";

var vetor = [1, 2, 3, 4, 5, 6, 8];
console.log(vetor);
var newvetor = vetor.map(function (item, posicao) {
  // soma o item do vetor mais sua posicao
  return item + posicao;
});
console.log(newvetor);
var soma = vetor.reduce(function (total, next) {
  // reduce transforma o vetor em uma unica informacao
  return total + next;
});
console.log(soma);
var filter = vetor.filter(function (item) {
  // Filtra o valor de acordo com a condicao do return (retornando true ou false)
  return item % 2 === 0;
});
console.log(filter);
var find = vetor.find(function (item) {
  // procura uma informacao dentro do vetor
  return item === 4;
});
console.log(find);
var multi = vetor.map(function (item) {
  return item * 2;
}); // ArrowFunction(recebendo um paramentro), faz as mesmas coisa que uma funcao anonima de maneira reduzida

console.log(multi);

var teste = function teste() {
  return {
    nome: "Lucas"
  };
}; // retornando um Objeto


console.log(teste());
var usuario = {
  nome: "Lucas",
  idade: 19,
  endereco: {
    cidade: "campinas",
    estado: "SP"
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade; // Desestruturacao de objetos

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      endereco = _ref.endereco;
  // Desestruturacao tambem funciona nos parametros dee funcao
  console.log(nome, idade, endereco);
}

mostraNome(usuario);
aaa;
