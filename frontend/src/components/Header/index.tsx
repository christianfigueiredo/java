import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Projeto com Spring_React</h1>
                <p>
                    Desenvolvido por
                    <a href='https://github.com/christianfigueiredo'> developer.figueiredo@gmail.com</a>
                </p>
            </div>
        </header>

    )
}

export default Header

