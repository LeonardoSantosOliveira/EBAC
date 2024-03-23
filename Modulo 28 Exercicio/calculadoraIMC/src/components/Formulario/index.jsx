import { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
    const [imc, setImc] = useState(0)
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0)

    const CalculaImc = () => {
        const imc = peso / (altura * altura);
        setImc(imc.toFixed(2))
        pintaTable(imc)
    }

    const pintaTable = imc => {
        document.querySelectorAll('tbody>tr').forEach(elemento => {
            elemento.classList.remove('table-primary');
        })
        if (imc < 18.5) {
            document.querySelector("#abaixo").classList.add('table-primary');
        } else if (imc < 24.9) {
            document.querySelector("#normal").classList.add('table-primary');
        } else if (imc < 29.9) {
            document.querySelector("#excesso").classList.add('table-primary');
        } else if (imc < 34.9) {
            document.querySelector("#obesidadei").classList.add('table-primary');
        } else if (imc < 39.9) {
            document.querySelector("#obesidadeii").classList.add('table-primary');
        } else {
            document.querySelector("#obesidadeiii").classList.add('table-primary');
        }
    }

return (
    <div className={styles.formContainer}>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <h2 className={styles.subtitle}>
                    O que é IMC?
                </h2>
                <p className='text-start pb-3'>
                    IMC é a sigla para Índice de Massa Corporal. É uma das principais ferramentas para calcular se uma pessoa está dentro do peso considerado “ideal” para a sua altura.
                    Um dos indicadores mais populares, é usado por diferentes profissionais da saúde, como enfermeiros, nutricionistas, médicos e educadores físicos.
                    O IMC é uma maneira rápida e fácil de entender se o indivíduo precisa ganhar ou perder peso. Contudo, é fundamental ter cuidado, pois o índice não pode ser considerado sozinho, sem que sejam avaliados, também, outros protocolos.
                </p>
                <form className={styles.form}>
                    <input type="number" className="form-control" placeholder="Digite o seu peso" onBlur={e => setPeso(parseFloat(e.target.value))} />
                    <input type="number" className="form-control" placeholder="Digite a sua altura" onBlur={e => setAltura(parseFloat(e.target.value))} />
                    <button type="button" className={styles.button} onClick={CalculaImc}>Calcular</button>
                </form>
                {imc > 0 ? (
                    <span className={styles.resultado}>IMC: {imc}</span>
                ) : (<span className={styles.resultado}></span>)}
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className={styles.tableCenter}>
                    <table className='table'>
                        <thead>
                            <tr className={styles.tableIndex}>
                                <th scope='col'>IMC</th>
                                <th scope='col'>Classificação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id='abaixo'>
                                <td>Menor do que 18,5</td>
                                <td>Abaixo do peso normal</td>
                            </tr>
                            <tr id='normal'>
                                <td>18,5 - 24,9</td>
                                <td>Peso normal</td>
                            </tr>
                            <tr id='excesso'>
                                <td>25,0 - 29,9</td>
                                <td>Excesso de peso</td>
                            </tr>
                            <tr id='obesidadei'>
                                <td>30,0 - 34,9</td>
                                <td>Obesidade classe I</td>
                            </tr>
                            <tr id='obesidadeii'>
                                <td>35,0 - 39,9</td>
                                <td>Obesidade classe II</td>
                            </tr>
                            <tr id='obesidadeiii'>
                                <td>Mario ou igual a 40,0</td>
                                <td>Obesidade classe III</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)
}

export default Formulario;