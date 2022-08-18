import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

import './App.css';

function App() {
  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (uName,uAge) =>{
    setUsersList ((prevUsersList) => {
      return [...prevUsersList,{name:uName,age:uAge, id : Math.random().toString()},];
    });
  };

  return (
    <>
    <AddUser onAddUser = {addUserHandler}/>
    {!(usersList.length === 0) && <UserList users={usersList}/>}
    </>
  );
}

export default App;
