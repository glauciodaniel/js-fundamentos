import { writeFileSync } from "fs";

const conteudo =
  "Seja Bem vindo ao curso de JavaScript, Contexto - CLI - Command Line Interface";

try {
  writeFileSync("./files/arquivo.txt", conteudo);
  console.info("Conteúdo criado com sucesso!");
} catch (err) {
  console.error(err);
}
