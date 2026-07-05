import MemberCard from "./MemberCard";

function MemberList({members, deleteMember}) {
    return(
        <div className="row">
            {/* map() pour parcourir le tableau des memb donc pour chaque element on cree un memebre card */}
            {members.map((member) => (
                <MemberCard key={member.id} member={member} deleteMember={deleteMember} />
            ))}
            </div>

    );
}


export default MemberList;