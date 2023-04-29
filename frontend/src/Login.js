import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Welcome back"+res.data.name)
          navigate("/");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex">
      <div
        className="w-1/2 bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?nature')",
        }}
      ></div>
      <div className="w-1/2 flex justify-center items-center">
        <form className="w-96 space-y-4" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-gray-800">Login</h1>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
