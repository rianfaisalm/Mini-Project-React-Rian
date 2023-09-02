import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";

export const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      name: name,
      username: userName,
      password: password,
      roleId: 2,
    };

    axios
      .post("https://api.mudoapi.tech/register", payload)
      .then((res) => {
        console.log(res);

        // localStorage.setItem("token", abcdefege);
      })
      .catch((err) => {
        localStorage.setItem("token", "abcdefege");
        navigate("/");
        console.log(err.message);
        setErr(err.message);
      });

    //cara panggil api ketika Register
  };

  return (
    <>
      <Navbar />
      {!!err.length && <h1 style={{ color: "red" }}>{err}</h1>}
      <div>
        <h1>Register</h1>
        <div>
          <input onChange={handleChangeName} placeholder="name" />
          <input onChange={handleChangeUserName} placeholder="username" />
          <input onChange={handleChangePass} placeholder="password" />
          <button onClick={handleSubmit}>Register</button>
        </div>
      </div>
    </>
  );
};

export default Register;
