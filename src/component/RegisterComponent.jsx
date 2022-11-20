import React from 'react'

export const RegisterComponent = ({ user, setUser, onSubimt}) => {
  return (
    <div>
        <h2>Register</h2>
      <form
        onSubmit={onSubimt}
      >
        <input
          required
          value={user.name}
          placeholder="Name"
          onChange={({ target }) =>
            setUser({ ...user, name: target.value })
          }
        />
        <input
          required
          value={user.email}
          type="email"
          placeholder="Email"
          onChange={({ target }) =>
            setUser({ ...user, email: target.value })
          }
        />
        <input
          required
          value={user.password}
          type="password"
          placeholder="Password"
          onChange={({ target }) =>
            setUser({ ...user, password: target.value })
          }
        />
        <button>Register</button>
      </form>
    </div>
  )
}
