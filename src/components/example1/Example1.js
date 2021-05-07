import React, { useState } from "react";
import './Example.css'
import UserForm from './userForm/UserForm'
import UserList from './userList/UserList'
const DUMMY_USERS = [
  {
    id: Math.random().toString(),
    username: "jp",
    age: 22,
  },
];

const Example1 = () => {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <div className="App">
        <section id="user-form">
          <UserForm onAddUser={addUserHandler} />
        </section>
        <section id="user-list">
          <UserList users={users} />
        </section>
      </div>
    </div>
  );
};

export default Example1;
