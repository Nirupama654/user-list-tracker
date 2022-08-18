import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";


const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error,setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'invalid input',
        message : 'please enter a valid name and age(non-empty values)'
      });
      return;
    }
    if (enteredAge < 1) {
        //converting string to number
        setError({
          title: 'invalid age',
          message : 'please enter a valid age (> 0)'
        });
        return;
    }
    console.log("clicked");
    console.log(enteredAge,enteredUserName);
    props.onAddUser(enteredUserName,enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () =>{
    setError(null);
  }
  return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age(in years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card></>
  );
};

export default AddUser;
