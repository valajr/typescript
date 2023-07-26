// Crie um cliente que possua uma ContaCorrente e efetue três depósitos de 100 reais nessa ContaCorrente.
// Efetue um saque de 50 reais nessa ContaCorrente e então imprima o valor do saldo dessa ContaCorrente

import { Cliente } from "../classes/cliente";
import { ContaCorrente } from "../classes/contaCorrente";
import { Endereco } from "../classes/endereco";

let endereco = new Endereco('88888-000', 'Rua Aldair', '333', 'Curitiba', 'PR');
let conta = new ContaCorrente('00001');
let cliente = new Cliente('João Alberto', '666.444.222-00', '(41) 96677-6666', endereco, conta);

cliente.contas[0].depositar(100);
cliente.contas[0].depositar(100);
cliente.contas[0].depositar(100);
cliente.contas[0].sacar(50);
console.log(cliente.contas[0].calcularSaldo());