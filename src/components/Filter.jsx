

function Filter({ filter, setFilter }) {
  return (
    <div className="mb-4">
      <select className="form-select" value={filter}onChange={(e)=>setFilter(e.target.value)}>
        <option value="">Tous les membres</option>
        <option value="Mensuel">Mensuelle</option>
        <option value="Annuel">Annuelle</option>
        <option value="Trimestriel">Trimestrielle</option>
      </select>
    </div>
  );
}

export default Filter;  