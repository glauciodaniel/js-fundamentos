import { exclusao, cadastro } from "./utils/functions.js";

const btnExcluir = document.querySelector("#btn-excluir");

const btnCadastro = document.querySelector("#btn-cadastro");

btnExcluir.addEventListener("click", exclusao);
btnCadastro.addEventListener("click", cadastro);
//funções são umas das partes mais importantes do javascript, existem vários tipos de funções, como por exemplo:
// function nominal, função interna
// função anônima,
// Expressão de função
// função arrow,
// função de callback,
// função de construtor,
// função como método,

//contexto compartilhado.
//import e export sofrem Hoisting.
