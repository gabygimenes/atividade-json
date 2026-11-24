// EXERCICIO 1.1
const historicoMensagens = [
    { id: 1, usuario: "Ana", texto: "Bom dia, turma!" },
    { id: 2, usuario: "Pedro", texto: "Servidor online!" }
];

const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2);

console.log("Conteúdo salvo:");
console.log(conteudoSalvar);
console.log("Tipo da variável:", typeof conteudoSalvar);

// EXERCICIO 1.2
const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';

const objetoRecuperado = JSON.parse(jsonValido);

console.log("Mensagem recuperada:");
console.log(objetoRecuperado[0].texto);

const jsonQuebrado = '[{ id: 10, quebrado: sim ';

try {
    JSON.parse(jsonQuebrado);
} catch (erro) {
    console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
}