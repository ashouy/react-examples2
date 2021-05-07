import { useState } from "react";
import "./App.css";
import UserForm from "./components/userForm/UserForm";
import UserList from "./components/userList/UserList";

const DUMMY_USERS = [
  {
    id: Math.random().toString(),
    username: "jp",
    age: 22,
  },
];
function App() {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUserHandler = (user) => {
    setUsers((prevUsers)=>{
        return[user, ...prevUsers]
    });
  };

  return (
    <div className="App">
      <section id="user-form">
        <UserForm onAddUser={addUserHandler} />
      </section>
      <section id='user-list'>
        <UserList users={users} />
      </section>
    </div>
  );
}

export default App;
