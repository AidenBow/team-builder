import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import MemberCard from './components/MemberCard'

function App() {
  const [teamList, setTeamList] = useState([
    {
      id: 1,
      name: "aiden",
      email: "aiden.bowcott@gmail.com",
      role: "farmer"
    },
    {
      id: 2,
      name: "Jacob",
      email: "jacob@jacob.com",
      role: "apple picker"
    }
  ])

  const addNewMember = member => {
    setTeamList([...teamList, member]);
  };

  return (
    <div className="App">
      <Form addNewMember={addNewMember}/>
      <MemberCard teamList={teamList}/>
    </div>
  );
}

export default App;
