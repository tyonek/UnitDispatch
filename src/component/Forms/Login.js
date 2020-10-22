import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 7;
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password} 
          onChange={e => setPassword(e.target.value)}
          />
      </div>

      <div>
        <button disabled={!validateForm()} type="submit">Login</button>
      </div>
    </form>
  )
}