import { Conta } from "./conta";
import { ContaPoupanca } from "./contaPoupanca";

export class ContaCorrente extends Conta {
    private _limite: number;

    constructor(numero: string, limite: number = 0) {
        super(numero);
        this._limite = limite;
        this.modificaSaldo(limite);
    }

    public transferir(contaDestino: ContaCorrente | ContaPoupanca, valor: number) {
        let saque = this.sacar(valor);
        if(saque) {
            contaDestino.depositar(valor);
            console.log('Transferência de R$ %d foi efetuada!', valor);
        }

        else {
            console.log('Não foi possível efetuar a transferência de R$ %d.', valor)
        }
    }

    public calcularSaldo(): number {
        let saldo = 0;

        for(let i:number = 0; i < this.creditos.length; i++) {
            saldo += this.creditos[i].valor;
        }
        for(let i:number = 0; i < this.debitos.length; i++) {
            saldo -= this.debitos[i].valor;
        }
        saldo += this._limite;

        return saldo;
    }

    public set limite(valor: number) {
        this._limite = valor;
        this.modificaSaldo(valor);
    }
}