export const exclusao = () => {
  if (confirm("Deseja realmente excluir o registro?")) {
    alert("Registro excluído com sucesso!");
  } else {
    alert("Exclusão cancelada");
  }
};
export const cadastro = () => {
  alert("Cadastrando novo registro");
};
