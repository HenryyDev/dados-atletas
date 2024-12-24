class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "infantil";
    } else if (this.idade === 12 || this.idade === 13) {
      return "juvenil";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "adulto";
    }
    return "sem categoria";
  }
  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }
  calculaMediaValida() {
    let notasCrescente = this.notas.sort((a, b) => a - b);
    let notaValida = notasCrescente.slice(1, 4);
    let media = 0;
    let soma = notaValida.reduce((acumula, total) => acumula + total, 0);
    media = soma / notaValida.length;
    return media;
  }
  obtemNomeAtleta() {
    return this.nome;
  }
  obtemIdadeAtleta() {
    return this.idade;
  }
  obtemPesoAtleta() {
    return this.peso;
  }
  obtemNotasAtleta() {
    return this.notas;
  }
  obtemCategoria() {
    let categoria = this.calculaCategoria();
    return categoria;
  }
  obtemIMC() {
    let imc = this.calculaIMC();
    return imc;
  }
  obtemMediaValida() {
    return this.calculaMediaValida;
  }
  obtemAlturaAtleta() {
    return this.altura;
  }
}
const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.7,
  [10, 9.34, 8.42, 10, 7.88]
);
console.log("Nome: ", atleta.obtemNomeAtleta());
console.log("Idade: ", atleta.obtemIdadeAtleta());
console.log("Peso: ", atleta.obtemPesoAtleta());
console.log("Altura: ", atleta.obtemAlturaAtleta());
console.log("Notas: ", atleta.obtemNotasAtleta());
console.log("Categoria: ", atleta.obtemCategoria());
console.log("IMC: ", atleta.obtemIMC());
console.log("Média válida", atleta.calculaMediaValida());
