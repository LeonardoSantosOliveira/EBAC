"use strict";
const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Front-End', 'UX/UI'],
        idade: 27,
    },
    {
        nome: 'Ana',
        cursos: ['Front-End', 'Phyton'],
        idade: 32,
    }
];
alunos.push({ nome: "Julia",
    cursos: ['Arquitetura'],
    idade: 29 });
const novoAluno = {
    nome: 'Lucas',
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
