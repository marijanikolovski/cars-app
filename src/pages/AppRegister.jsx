import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RegisterComponent } from "../component/RegisterComponent";
import useAuth from "../hooks/useAuth";

export const AppRegister = () => {
  const { user, register } = useAuth();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await register(newUser);
    console.log("register successfully");
  }

  return (
    <div>
         <RegisterComponent 
          user={newUser}
          setUser={setNewUser}
          onSubimt={handleSubmit}
         />
    </div>
  );
};
