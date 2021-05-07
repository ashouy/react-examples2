import React from "react";
import Card from "../UI/Card";
import UserListItem from "./UserListItem";
import classes from './UserList.module.css'
const UserList = (props) => {
  return (
    <Card>
      <ul className={`${classes['user-list']}`}>
        {props.users.map((user) => (
          <UserListItem key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
