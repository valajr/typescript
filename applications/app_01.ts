// Crie dois funcionários do banco, um gerente e um atendente.

import { Cargo } from '../classes/cargo';
import { Funcionario } from '../classes/funcionario'

const funcionario_1 = new Funcionario('João da Silva', '000.111.222-33', '(41) 99999-8888', new Cargo('Gerente'), 4000);
const funcionario_2 = new Funcionario('José Oliveira', '111.222.333-44', '(41) 98888-9999', new Cargo('Atendente'), 1200);

console.log(funcionario_1, funcionario_2);