import ConfigurationsPage from '../../pages/ConfigurationsPage';
import TeamsPage from '../../pages/TeamsPage';
import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Context } from '../../context'

export default function App() {


const [ teams, setTeams ] = useState([]);

const [ users, setUsers ] = useState([]);

useEffect(() => {
  const teams = JSON.parse(localStorage.getItem('teams'));
  const users = JSON.parse(localStorage.getItem('users'));
  if (teams) setTeams(teams);
  if (users) setUsers(users);
}, []);

useEffect(() => {
  localStorage.setItem('teams', JSON.stringify(teams));
  localStorage.setItem('users', JSON.stringify(users));
}, [teams, users]);
const addTeam = (team_title) => {
  setTeams([...teams, { value: team_title, label: team_title}])
}

const addUser = (name_value, team_value) => {
  setUsers([...users, {
    id: Date.now(),
    name: name_value,
    team: team_value
  }])
} 

const deleteUser = (id) => setUsers(users.filter(el => el.id !== id));

  return (
    <div>
      <Context.Provider value={{ teams, addTeam, addUser, users, deleteUser }}>
     <Nav />
     <Routes>
       <Route path='/configurations_page' element={<ConfigurationsPage />} />
       <Route path='/teams_page' element={<TeamsPage />} />
     </Routes>
     </Context.Provider>
    </div>
  );
}

