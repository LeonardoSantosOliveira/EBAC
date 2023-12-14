function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " diz olá!")
    }
    
}

function Funcionario(nome, cargo, salario){
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    this.getSalario = function(){
        return _salario
    }

    this.setSalario = function(valor) {
        if(typeof valor === 'number'){
            _salario = valor;
        }
    }

    this.dizCargo = function(){
            console.log(this.cargo)
        }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
    }

    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "Dev front=end", 5000)

const funcionario2 = new Funcionario("Pedro", "Estagiario", 2000);

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario())