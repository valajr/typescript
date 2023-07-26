// Crie um cliente que possua uma ContaCorrente e efetue um depósito de 300 nessa ContaCorrente.
// Defina o valor do limite dessa ContaCorrete para 100 reais.
// Crie um cliente que possua uma ContaCorrente e efetue um depósito de 100 reais nesta ContaCorrente.
// Tente efetuar uma transferência de 1000 reais da primeira ContaCorrente para a segunda ContaCorrente

import { Cliente } from "../classes/cliente";
import { ContaCorrente } from "../classes/contaCorrente";
import { Endereco } from "../classes/endereco";


let endereco_1 = new Endereco('88888-000', 'Rua Aldair', '333', 'Curitiba', 'PR');
let endereco_2 = new Endereco('88888-001', 'Rua Aldair Ribeiro', '333', 'Curitiba', 'PR');
let conta_corrente_1 = new ContaCorrente('00001');
let conta_corrente_2 = new ContaCorrente('00002');

let cliente_1 = new Cliente('João Alberto', '666.444.222-00', '(41) 96677-6666', endereco_1, conta_corrente_1);
cliente_1.contas[0].depositar(300);

cliente_1.contas[0].limite = 100;

let cliente_2 = new Cliente('João Augusto', '777.555.333-11', '(41) 96677-6666', endereco_2, conta_corrente_2);
cliente_2.contas[0].depositar(100);

cliente_1.contas[0].transferir(cliente_2.contas[0], 1000);