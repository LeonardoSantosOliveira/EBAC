type Aluno = {
    nome: string;
    cursos?: string[];
    idade: number
}

const alunos: Aluno[] = [
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
]

const novoAluno: Aluno = {
    nome: 'Gabriel',
    idade: 35
}

function exibeAluno(aluno: Aluno): void {
    console.log(aluno.nome)
}