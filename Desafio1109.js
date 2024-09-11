// criando a class base/mãe (eu acho) Funcionario
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    trabalhar() {
        console.log(`${this.nome} trabalha como ${this.cargo}!`);
    }

    exibirMoney() {
        console.log(`${this.nome} recebe isso aqui de money: ${this.salario}!`);
    }
}
//o texto exibido na 10 (trabalhar) e 14 (exibirMoney) linha é um METODO, esses metodos são fixados/criados na class e podem/serão usados nas demais class como "parametro/função", mais ou menos isso (eu acho).


//Criando a class Engenheiro filhinho, que herdará os bagulhos da calsse mãe funcionario.
class Engenheiro extends Funcionario {
    constructor(nome, especialidade, salario) {
        super(nome, "Engenheiro", salario);
        this.especialidade = especialidade;
    }
}
//"O extends em JavaScript é utilizado para estender uma classe, ou seja, para criar uma subclasse que herda as propriedades e métodos de uma superclasse. Com o extends, a subclasse pode usar os atributos e comportamentos da classe pai, além de adicionar ou sobrescrever métodos e propriedades. Você usa o extends quando deseja que uma nova classe (subclasse) tenha todas as funcionalidades de uma classe existente (superclasse), mas com algumas adaptações ou extensões." Fonte:Pai dos burros!


//Criando a class Designer também filhinho (eu acho) que herdará as mesmas funções da class mamãe Funcionario.
class Designer extends Funcionario {
    constructor(nome, ferramenta, salario) {
        super(nome, "Designer", salario);
        this.ferramenta = ferramenta;
    }
}


//Criando a class que trará a quantidade de funcionarios/quem são esses func, (parece com o length usado no array, não o metodo, mas a função/sua usuabilidade), também colocaremos o metodo responsavél por adicionar funcionarios a essa "contagem", mais ou menos isso.
class GerenciamentoFuncionarios {
    constructor() {
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario); //
        console.log(`${funcionario.nome} é o/a novo(a) funcionário(a) do pedaço!`)

    } //O "push" usado na linha 48 é usado para colocar/adicionar/inserir o valor a aquela class e/ou metodo.

    listarFuncionarios() {
        console.log("Funcionários:");
        this.funcionarios.forEach(funcionario => {
            console.log(`- ${funcionario.nome}, Money: ${funcionario.salario}`);
            funcionario.trabalhar(); //Chama o método trabalhar.
        });
    }
}

// Descobri que "O método forEach() em JavaScript é utilizado para iterar (percorrer) os elementos de um array e executar uma função em cada elemento desse array", fonte: Google! Exemplo:

// array.forEach(function(elemento, indice, array) {
// });

//Elemento: O valor do elemento atual do array.
// Indice (opcional): O índice (posição) do elemento atual.
// Array que está sendo percorrido.Exemplo:

// let numeros = [1, 2, 3, 4];
// numeros.forEach(function(numero) {
//   console.log(numero);
// });

// Saída:
// 1
// 2
// 3
// 4

// Criando instâncias de Engenheiro e Designer
const engenheiro1 = new Engenheiro("Carlinhos", "Computação", 1000000);

const designer1 = new Designer("Garcia", "Dev.FrontEnd", 1444);

// Gerenciando os funcionários
const gerente = new GerenciamentoFuncionarios();

// Adicionando funcionários
gerente.adicionarFuncionario(engenheiro1);
gerente.adicionarFuncionario(designer1);

// Listando funcionários
gerente.listarFuncionarios();