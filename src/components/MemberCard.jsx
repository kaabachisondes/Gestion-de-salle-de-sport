function MemberCard({member, deleteMember}) {
    return (
        <div className="col-md-4 mb-3">
            <div className="card shadow h-100">
                {/* img de l'abonné */}
                <img src={member.image} className="card-img-top" alt={member.nom} />
                <div className="card-body">
                    <h5 className="card-title">{member.nom} {member.prenom}</h5>
                    <p className="card-text">Age: {member.age}</p>
                    <p className="card-text">Subscription: {member.subscription}</p>
                    <p className="card-text">Date: {member.date}</p>
                    {/* boutons */}
                    {/*onClick est utilisé pour gérer l'evnt et d'executer une fct lorsque le user clique sur btn */}
                    <button className="btn btn-warning me-2" onClick={() => editMember(member.id)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => deleteMember(member.id)}>Supprimer</button>
                </div>
            </div>
            </div>
    );
}

export default MemberCard;