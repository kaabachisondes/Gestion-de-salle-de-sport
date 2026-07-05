import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./pages/Home";
import Members from "./pages/Members";
import AddMember from "./pages/AddMember";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import membersData from "./data/membres";
function App() {
  const [members, setMembers] = useState(membersData);
  // fct permet d'ajouter un nv abon
  const addMember = (member) => {
    setMembers([...members, member]);


  };
  return (
    <>
<Navbar />
<div className="container mt-4">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/members" element={<Members members={members} setMembers={setMembers}/>} />
    <Route path="/addMember" element={<AddMember addMember={addMember}/>}/>
        <Route path="/about" element={<About />} />

    </Routes>
  </div>
    </>
  )
}

export default App