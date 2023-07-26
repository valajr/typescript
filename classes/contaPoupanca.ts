import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
    limite: number = 0;

    constructor(numero: string) {
        super(numero);
    }

    public transferir() {
        console.log('Não foi possível efetuar a transferência porque este tipo de conta não faz transferência.')
    }
    
    public calcularSaldo(): number {
        let saldo = 0;

        for(let i:number = 0; i < this.creditos.length; i++) {
            saldo += this.creditos[i].valor;
        }
        for(let i:number = 0; i < this.debitos.length; i++) {
            saldo -= this.debitos[i].valor;
        }

        return saldo;
    }
}