import React, { Fragment, useState } from "react";
import "./Example2.css";
import UserForm from "./userForm/UserForm";
import UserList from "./userList/UserList";
const DUMMY_USERS = [
  {
    id: Math.random().toString(),
    username: "sf",
    age: 22,
  },
];
const Example2 = () => {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  return (
    <Fragment>
      <section id="user-form">
        <UserForm onAddUser={addUserHandler} />
      </section>
      <section id="user-list">
        <UserList users={users} />
      </section>
    </Fragment>
  );
};

export default Example2;
