import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../service/AuthService";
import { RegisterComponent } from "../component/RegisterComponent";

export const AppRegister = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await authService.register(user);
    history.push("/cars");
    console.log("register successfully");
  }

  return (
    <div>
         <RegisterComponent 
          user={user}
          setUser={setUser}
          onSubimt={handleSubmit}
         />
    </div>
  );
};
