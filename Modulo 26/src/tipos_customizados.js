"use strict";
const alunos = [
    {
        nome: "carlos",
        cursos: ['front-end', 'ux-ui'],
        idade: 27,
    },
    {
        nome: "ana",
        cursos: ['front-end', 'phyton'],
        idade: 22,
    }
];
const novoAluno = {
    nome: 'Gabriel',
    idade: 35
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
