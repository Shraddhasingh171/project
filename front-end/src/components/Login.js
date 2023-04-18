import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      Navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    console.warn("email,password", email, password);
    let result = await fetch("http://localhost:4001/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      Navigate("/");
    } else {
      alert("please enter correct details");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        className="inputBox"
        value={email}
        placeholder="Enter email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="inputBox"
        placeholder="Enter password"
      />
      <button onClick={handleLogin} className="appButton" type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
