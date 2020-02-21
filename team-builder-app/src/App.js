import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [members, addMembers] = useState([
    {id: 0, name: 'Seth', email: 'codeguy@programmer.net', role: 'student'},
    {id: 1, name: 'Bre', email: 'imbrehello@ilikechocolate.co', role: 'Photogtapher'},
    {id: 2, name: 'Daisy', email: 'iplayfetch.dog', role: 'Ball Catcher'},
  ]);

  const addMember = (member) => {
    setMembers([...members, {...member, id: Date.now() }]);
  };

  return (
    <div className='App'>
      <Link to='/'>Home Base</Link>
      <Link to='/add'>Add Member</Link>
      <Route 
        path='/add' 
        render={(props) => 
          <Form 
            sumbitMember={addMember} 
            buttonText='Recruit Teammate' 
          />} 
      />
      <Route 
        exact path='/' 
        render={(props) => 
          people.map((member, index) => 
            <Card 
              key={index} 
              member={member} 
            />)} 
      />
      <Route
          Path='/edit/:id'
          render={(props) => {
            const member = member.find((person) => member.id.toString() === props.match.params.id);
            return <Form {...props} sumbitMember={editMember} buttonText='Edit Teammate' />;
          }}
      />
    </div>
  );
}

export default App;
