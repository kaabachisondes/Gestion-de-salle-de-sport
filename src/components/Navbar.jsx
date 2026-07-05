//import de Link
import { Link } from "react-router-dom";

// creation de composant
function Navbar() {
    return (
        <nav className="navbar-expand-lg navbar-dark bg-primary ">
            <div className="container">
                {/*Nom de l'application */}
                <Link className="navbar-brand" to="/">
                    Salle de Sport
                </Link>
                {/*Bouton pour le menu responsive */}
                {/*data-bs-toggle="collapse":pour indiquer que le menu est replié 
                data-bs-target="#menu": pour indiquer l'élément à replier (id du menu)
                */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    {/*icone du bouton */}
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*Menu */}
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/members">Membres</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AddMember">AddMember</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                            
                        </li>
                    </ul>

                </div>

            </div>

        </nav>
    )
}

// exportaion du composant
export default Navbar;