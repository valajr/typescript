import { Credito } from "./credito";
import { Debito } from "./debito";

export abstract class Conta {
    private numero: string;
    public creditos: Credito[] = [];
    public debitos: Debito[] = [];
    private saldo: number = 0;

    public constructor(numero: string) {
        this.numero = numero;
    }

    public depositar(valor: number) {
        let credito = new Credito(valor, new Date());
        this.creditos.push(credito);
        this.saldo += valor;
        console.log('Deposito de R$ %d feito!', valor);
    }

    public sacar(valor: number): boolean {
        if(this.saldo - valor >= 0) {
            let debito = new Debito(valor, new Date());
            this.debitos.push(debito);
            this.saldo -= valor;
            console.log('Saque de R$ %d feito!', valor);
            return true;
        }
        else {
            console.log('Não foi possível efetuar o saque de R$ %d.', valor);
            return false;
        }
    }

    protected modificaSaldo(valor: number) {
        this.saldo += valor;
    }

    // public extrato() {

    // }
}