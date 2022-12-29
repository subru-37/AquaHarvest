import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {};

  return (
    <div>
      <h1>Signup</h1>

      <input
        type='text'
        name='email'
        id='email'
        placeholder='Enter Email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='text'
        name='password'
        id='password'
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type='text'
        name='confirmPassword'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        id='confirmPassword'
        placeholder='Confrim Password'
      />
      <button>Sign Up</button>
    </div>
  );
};

export default Signup;
