import { useEffect, useState } from "react"
import styles from './ReposList.module.css';

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/LeonardoSantosOliveira/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson)
            },3000)
        })
    }, [])

    return(
        <div className="container">
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}
            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li key={repositorio.id} className={styles.listItem}>
                        <div className={styles.listItemName}>
                            <b>Nome:</b> {repositorio.name}
                        </div>
                        <div className={styles.listItemLanguage}>
                            <b>Linguagem:</b> {repositorio.language}
                        </div>
                        <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList