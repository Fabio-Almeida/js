
import { Link } from 'react-router-dom';

function Contato() {
    return (
        <div>
            <h1> Bem vindo a pagina Contato</h1>
            <span>Contato XXXX-XXX</span> <br />
            <br />
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}

export default Contato;
