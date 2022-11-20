import { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginComponent } from "../component/LoginComponent";
import authService from "../service/AuthService";

export const AppLogin = () => {
    const history = useHistory();
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    async function handleSubmit(e) {
      e.preventDefault();
        await authService.login(user);
        history.push("/cars");

      console.log("logged in successfully");
    }

  return (
    <div>
        <LoginComponent 
            user={user}
            setUser={setUser}
            onLogin={handleSubmit}
        />
    </div>
  )
}
