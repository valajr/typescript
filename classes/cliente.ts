import { Pessoa } from "./pessoa";
import { Endereco } from "./endereco";
import { ContaCorrente } from "./contaCorrente";
import { ContaPoupanca } from "./contaPoupanca";

export class Cliente extends Pessoa {
    private enderecos: Endereco[] = [];
    public contas: (ContaCorrente | ContaPoupanca)[] = [];
    private vip: boolean;
    

    public constructor(nome: string, cpf: string, telefone: string, endereco: Endereco, 
            conta: ContaCorrente | ContaPoupanca, vip: boolean = false) {
        super(nome, cpf, telefone);
        this.enderecos.push(endereco);
        this.contas.push(conta);
        this.vip = vip;
    }

    public adicionarEndereco(endereco: Endereco) {
        this.enderecos.push(endereco);
    }

    public removerEndereco(endereco: Endereco) {
        let index = this.enderecos.indexOf(endereco);
        if (index > -1)
            this.enderecos.splice(index, 1);
    }

    public listarEnderecos() {
        for(let i:number = 0; i < this.enderecos.length; i++) {
            console.log('Endereço %d: ' +
                '\nCEP: ' + this.enderecos[i].cep + 
                '\nLogradouro: ' + this.enderecos[i].logradouro +
                '\nNumero: ' + this.enderecos[i].numero +
                '\nComplemento: ' + this.enderecos[i].complemento +
                '\nCidade: ' + this.enderecos[i].cidade +
                '\nUF: ' + this.enderecos[i].uf + '\n', i+1)
        }
    }

    public autenticar(): boolean {
        return true;
    }
}