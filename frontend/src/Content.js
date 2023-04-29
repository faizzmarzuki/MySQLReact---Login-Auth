/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';


function Content() {
const [auth, setAuth] = useState(false);
const [name, setName] = useState('')
const [message, setMessage] = useState('')

useEffect(()=>{
    axios.get("http://localhost:8081/")
    .then(res => {
        if(res.data.Status === "Success"){
            setAuth(true)
            setName(res.data.name)
        }else{
            setAuth(false);
            setMessage(res.data.Message)
        }
    })
}, [])

const handleLogout = () => {
    axios.get("http://localhost:8081/")
    .then( res =>{
        if (res.data.Status === "Success") {
            location.reload(true);
        } else {
            alert("error");
        }
    }).catch(err => console.log(err))
}

  return (
    <div>
      {
      auth ? (
        <div>
          <h3>You are Authorized {name}</h3>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>{message}</h3>
          <h3>Login Now</h3>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default Content