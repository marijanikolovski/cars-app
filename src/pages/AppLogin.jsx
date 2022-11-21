import { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginComponent } from "../component/LoginComponent";
import { authService } from "../service/AuthService";

export const AppLogin = () => {
    const history = useHistory();
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    const handleOnLogin = async (e) => {
      e.preventDefault();
      await authService.login(user);
      console.log("login successfully");
      history.push('/cars');
    };

  return (
    <div>
        <LoginComponent 
            user={user}
            setUser={setUser}
            onLogin={handleOnLogin}
        />
    </div>
  )
}
