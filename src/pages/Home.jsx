import {Link} from "react-router-dom";
function Home() {
    return (
        <div className="text-center ">
            <h1 className="mb-4">Gestion d'une salle de sport</h1>
            <p className="lead">Bienvenue dans l'application de gestion de la salle de sport.</p>
            <Link to="/members" className="btn btn-primary btn-lg">Voir les membres</Link>
        </div>   
         )
}
export default Home;