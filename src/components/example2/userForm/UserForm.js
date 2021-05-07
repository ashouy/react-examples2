import React, { Fragment, useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    const username = usernameRef.current.value;
    const age = ageRef.current.value;

    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    const data = {
      id: Math.random().toString(),
      username: username,
      age: age,
    };
    props.onAddUser(data);
    usernameRef.current.value = "";
    ageRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <div className={`${classes["form-control"]}`}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={usernameRef} />
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type="number" ref={ageRef} />
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default UserForm;
