import React from "react";
import classes from "./UserListItem.module.css";
const UserListItem = (props) => {
  return (
    <li className={`${classes["user-item"]}`}>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default UserListItem;
