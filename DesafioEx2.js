//OBSERVAÇÃO: esse código foi gerado pela IA, usei como referencia para comparação entre meu codigo e o codigo que eu deveria ter feito (ou seja, meu codigo ficou incompleto) após ter concluido o meu código. observei que NÃO usei polimorfismo, por isso ficou diferente, apenas vi que tinha feito diferente quando comparei os codigos e reli a questão do desafio! Achei interessante deixar aqui o codigo da IA, também usarei como referencia caso precise refazer o codigo (agora da maneira correta)

// Classe base Funcionario
class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    trabalhar() {
      console.log(`${this.nome} está trabalhando.`);
    }
  
    exibirSalario() {
      console.log(`${this.nome} recebe um salário de R$${this.salario}.`);
    }
  }
  
  // Classe Engenheiro, que herda de Funcionario
  class Engenheiro extends Funcionario {
    constructor(nome, salario, especialidade) {
      super(nome, salario);
      this.especialidade = especialidade;
    }
  
    trabalhar() {
      console.log(`${this.nome} está desenvolvendo um projeto de engenharia na área de ${this.especialidade}.`);
    }
  }
  
  // Classe Designer, que herda de Funcionario
  class Designer extends Funcionario {
    constructor(nome, salario, ferramenta) {
      super(nome, salario);
      this.ferramenta = ferramenta;
    }
  
    trabalhar() {
      console.log(`${this.nome} está criando um design usando ${this.ferramenta}.`);
    }
  }
  
  // Classe para Gerenciar Funcionarios
  class GerenciamentoFuncionarios {
    constructor() {
      this.funcionarios = [];
    }
  
    adicionarFuncionario(funcionario) {
      this.funcionarios.push(funcionario);
      console.log(`${funcionario.nome} foi adicionado ao sistema.`);
    }
  
    listarFuncionarios() {
      console.log("Funcionários:");
      this.funcionarios.forEach(funcionario => {
        console.log(`- ${funcionario.nome}, salário: R$${funcionario.salario}`);
        funcionario.trabalhar();
      });
    }
  }
  
  // Exemplo de uso
  const gerente = new GerenciamentoFuncionarios();
  
  const engenheiro1 = new Engenheiro("João", 5000, "Elétrica");
  const designer1 = new Designer("Maria", 4000, "Photoshop");
  
  gerente.adicionarFuncionario(engenheiro1);
  gerente.adicionarFuncionario(designer1);
  
  gerente.listarFuncionarios();
  
  //O chat GPT usou Polimorfismo!