import React from 'react';
import './App.css';
import { useState } from 'react';
import MemberForm from './components/MemberForm';
import MemberProfile from './components/MemberProfile';

function App() {

  const [members, setMembers] = useState([
    {id: 0, name: 'Seth', email: 'codeguy@programmer.net', role: 'student'},
    {id: 1, name: 'Bre', email: 'imbrehello@ilikechocolate.co', role: 'Photogtapher'},
    {id: 2, name: 'Daisy', email: 'iplayfetch.dog', role: 'Ball Catcher'},
  ]);

  const addNewMember = (member) => {
    const createMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, createMember]);
  };

  return (
    <div className='App'>
      <h1> Member Creation Form</h1>
      <MemberForm addNewMember={addNewMember} />
      <MemberProfile members={members} />
    </div>
  );
}


export default App;
