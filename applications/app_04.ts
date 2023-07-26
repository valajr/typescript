// Crie um cliente que possua uma ContaCorrente e efetue um depósito de 1000 reais nessa ContaCorrente.
// Crie um cliente que possua uma ContaPoupanca e efetue um depósito de 1000 reais nesta ContaPoupanca.
// Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca e exiba o saldo das duas contas.

import { Cliente } from "../classes/cliente";
import { ContaCorrente } from "../classes/contaCorrente";
import { ContaPoupanca } from "../classes/contaPoupanca";
import { Endereco } from "../classes/endereco";


let endereco_1 = new Endereco('88888-000', 'Rua Aldair', '333', 'Curitiba', 'PR');
let endereco_2 = new Endereco('88888-001', 'Rua Aldair Ribeiro', '333', 'Curitiba', 'PR');
let conta_corrente = new ContaCorrente('00001');
let conta_poupanca = new ContaPoupanca('00002');

let cliente_1 = new Cliente('João Alberto', '666.444.222-00', '(41) 96677-6666', endereco_1, conta_corrente);
cliente_1.contas[0].depositar(1000);

let cliente_2 = new Cliente('João Augusto', '777.555.333-11', '(41) 96677-6666', endereco_2, conta_poupanca);
cliente_2.contas[0].depositar(1000);

cliente_1.contas[0].transferir(cliente_2.contas[0], 500);
console.log('Conta 1 possui saldo de: R$ ' + cliente_1.contas[0].calcularSaldo());
console.log('Conta 2 possui saldo de: R$ ' + cliente_2.contas[0].calcularSaldo());