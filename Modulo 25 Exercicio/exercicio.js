const alunos = [
    {
        nome: 'joao',
        nota: 10
    },
    {
        nome: 'Maria',
        nota: 2
    },
    {
        nome: 'Leonardo',
        nota: 10
    },
    {
        nome: 'Soraya',
        nota: 10
    },
    {
        nome: 'Tibursca',
        nota: 5
    },
    {
        nome: 'Lorena',
        nota: 6
    },
    {
        nome: 'Hi',
        nota: 7
    }
]

function filtrarAlunos(alunos){
    return alunos.filter((aluno) => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunos(alunos);
console.log(alunosAprovados);