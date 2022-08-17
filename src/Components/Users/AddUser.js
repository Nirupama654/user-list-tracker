import React from "react";

const AddUser = (props) => {
//   const [userList, setUserList] = useState();
//   const [name, setName] = useState();
//   const [age, setAge] = useState();

//   const getName = (event) => {
//     setName(event.target.value);
//   };
//   const getAge = (event) => {
//     setAge(event.target.value);
//   };
  const addUserHandler = (event) => {
    event.preventDefault();
    // const obj = {
    //   username: name,
    //   age: age,
    // };
    // setUserList(...userList, obj);
    // console.log(userList);
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age(in years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;