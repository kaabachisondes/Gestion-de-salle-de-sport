import { useState } from "react";
import MemberList from "../components/MemberList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Statistics from "../components/Statistics";

function Members({members, setMembers}) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("Tous");

    //suppression
    const deleteMember = (id) => 
    {
        const newMember = members.filter (
            member => member.id !== id
        );
        setMembers(newMember);

    }

    //recherche et filtre
    const filterMembers = members.filter((member) => {
        //recherche par nom ou par prénom
        const matchSearch = member.nom.toLowerCase()
        .includes(search.toLowerCase())
        
        //filtre abon
        const matchFilter = filter === "Tous"
        ||
        member.subscription === filter;
        return matchSearch && matchFilter;
    });

    return(
        <div>
            <h2 className="mb-4">Liste des abonnées</h2>
            <Statistics members={members} />
            <SearchBar search={search} setSearch={setSearch} />
            <Filter filter={filter} setFilter={setFilter} />
            <MemberList members={filterMembers} deleteMember={deleteMember} />
        </div>
    )
}

export default Members;