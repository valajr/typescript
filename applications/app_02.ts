// Crie um cliente, adicione 3 endereços a ele e imprima os endereços deste cliente.

import { Cliente } from "../classes/cliente";
import { ContaCorrente } from "../classes/contaCorrente";
import { Endereco } from "../classes/endereco";

let endereco_1 = new Endereco('88888-000', 'Rua Aldair', '333', 'Curitiba', 'PR');
let endereco_2 = new Endereco('88888-001', 'Rua Aldair Ribeiro', '333', 'Curitiba', 'PR');
let endereco_3 = new Endereco('88888-002', 'Rua Aldair Batista', '333', 'Curitiba', 'PR');
let endereco_4 = new Endereco('88888-003', 'Rua Aldair Ribeiro Batista', '333', 'Curitiba', 'PR');
let conta = new ContaCorrente('00001');

let cliente = new Cliente('João Alberto', '666.444.222-00', '(41) 96677-6666', endereco_1, conta);
cliente.adicionarEndereco(endereco_2);
cliente.adicionarEndereco(endereco_3);
cliente.adicionarEndereco(endereco_4);

cliente.listarEnderecos();