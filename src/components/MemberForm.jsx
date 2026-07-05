import {useState} from 'react';

function MemberForm({addMember}) {
    const [member, setMember] = useState({
        id:Date.now(),// pour generer un id unique pour chaque membre
        nom:'',
        prenom:'',
        age:'',
        subscription:'',
        date:'',
        image:''
    });
    // fonction appele pour mettre a jour les champs du formulaire
    const handleChange = (e) => {
        setMember({
            ...member,// pour conserver les valeurs anciennes de l'objet member
            [e.target.name]: e.target.value// pour mettre a jour uniquement le champ modifie
        });
    };
    // fonction appele lors de la validaton du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();// pour empecher le rechargement de la page
        // verifier que tous les champs sont remplis
        if(
            member.nom==="" ||
            member.prenom==="" ||
            member.age==="" ||
            member.subscription==="" ||
            member.date==="" ||
            member.image===""
        ){
            alert("Veuillez remplir tous les champs");
            return;

        }
        // ajout d'un nouveau membre
        addMember(member);
        // reinitialiser le formulaire
        setMember({
            id:Date.now(),
            nom:'',
            prenom:'',
            age:'',
            subscription:'',
            date:'',
            image:''
        });
       
    }
    return(
        <div className="Card shadow p4">
            <h2 className="text center">Ajouter un Membre</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3"
                >
                    <label className="form-label">Nom</label>
                    <input type="text" name="nom" className="form-control" value={member.nom} onChange={handleChange}/>
                
                </div>
                <div className="mb-3"
                >
                    <label className="form-label">Prenom</label>
                    <input type="text" name="prenom" className="form-control" value={member.prenom} onChange={handleChange}/>
                
                </div>
                <div className="mb-3"
                >
                    <label className="form-label">age</label>
                    <input type="text" name="age" className="form-control" value={member.age} onChange={handleChange}/>
                
                </div>
                <div className="mb-3"
                >
                    <label className="form-label">Subscrption</label>
                   <select name="subscription" className="form-select" value={member.subscription} onChange={handleChange}>
                    <option></option>
                    <option value="mensuelle">Mensuelle</option>
                    <option value="annuelle">Annuelle</option>
                    <option value="trimestrielle">Trimestrielle</option>  

                   </select>
                
                </div>
                <div className="mb-3"
                >
                    <label className="form-label">Date d'inscription</label>
                    <input type="date" name="date" className="form-control" value={member.date} onChange={handleChange}/>
                
                </div>
                <div className="mb-3">
                    <label className="form-label">
                       URL de  Photo
                        </label>
   <input type="text" name="image" className="form-control" value={member.image}
     onChange={handleChange} />

    </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>

            </form>

        </div>
    )
}   
export default MemberForm;