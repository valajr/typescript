import { Pessoa } from "./pessoa";
import { Cargo } from "./cargo";

export class Funcionario extends Pessoa{
    private cargos: Cargo[] = [];
    private salario: number;

    public constructor(nome: string, cpf: string, telefone: string, cargo: Cargo, salario: number) {
        super(nome, cpf, telefone);
        this.cargos.push(cargo);
        this.salario = salario;
    }

    public adicionarCargo(cargo: Cargo) {
        this.cargos.push(cargo);
    }

    public removerCargo(cargo: Cargo) {
        let index = this.cargos.indexOf(cargo);
        if (index > -1)
            this.cargos.splice(index, 1);
    }

    public autenticar(): boolean {
        return true;
    }
}