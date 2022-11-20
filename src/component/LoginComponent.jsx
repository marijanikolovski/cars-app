import React from "react";

export const LoginComponent = ({ onLogin, user, setUser }) => {
  return (
    <div>
        <h2>Login</h2>
      <form onSubmit={onLogin}>
        <label>Email:</label>
        <input
          required
          type="email"
          placeholder="email"
          value={user.email}
          onChange={({ target }) => setUser({ ...user, email: target.value })}
        />
        <label>Password:</label>
        <input
          required
          placeholder="password"
          type="password"
          value={user.password}
          onChange={({ target }) =>
            setUser({ ...user, password: target.value })}
        />
        <button type="subimt">Login</button>
      </form>
    </div>
  );
};
