import './perfil.css'

const Perfil = () => {
    const usuario = {
        nome: "Leonardo",
        avatar: 'https://github.com/LeonardoSantosOliveira.png'
    }

    return (
        <div className='perfil-container'>
            <img className='perfil-avatar' src={usuario.avatar}/>
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;