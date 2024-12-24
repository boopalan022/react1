import React, { useState } from 'react';
import '../CSS/Signup.css'; 

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      alert("Login form submitted");
    } else {
      alert("Signup form submitted");
    }
  };

  return (
    <div>
      <p>{isLogin ? "Login" : "Signup"}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        {!isLogin && (
          <>
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" id="confirm" name="confirm" required />
          </>
        )}
        <button type="submit" className="GreenButton">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <button
        className="WhiteButton"
        onClick={handleToggle}
      >
        Switch to {isLogin ? "Signup" : "Login"}
      </button>
    </div>
  );
};

export default Signup;