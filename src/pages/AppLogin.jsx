import { useState } from "react";
import { LoginComponent } from "../component/LoginComponent";
import useAuth from "../hooks/useAuth";

export const AppLogin = () => {
    const { user, login } = useAuth();
    const [newUser, setNewUser] = useState({
      email: "",
      password: "",
    });
  
    const handleOnLogin = async (e) => {
      e.preventDefault();
      await login(newUser);
      console.log("login successfully");
    };

  return (
    <div>
        <LoginComponent 
            user={newUser}
            setUser={setNewUser}
            onLogin={handleOnLogin}
        />
    </div>
  )
}
