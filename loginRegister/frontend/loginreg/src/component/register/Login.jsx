import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function Login(props) {
  console.log('>>>>>>>>>>>e',props.msg)
  console.log("setLoginUser type:", typeof props.setLoginUser);
  console.log("setLoginUser value:", props.setLoginUser);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const valueHandler = (e) => {
    // console.log('>>>>>>>>>>>', e.target)
    const { name, value } = e.target;
    console.log(">>>>>>>>>>>", name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginHandler = () => {
    const { email, password } = user;

    if (email && password) {
      axios
        .post("http://localhost:8000/api/v1/user/login", user, {
          headers: { "Content-Type": "application/json" },
        })
        .then((resp) => {
          console.log("Response:", resp);
          alert(resp.data.message);
          console.log('>>>>>>>>>>>', resp.data.user)
          props.setLoginUser(resp.data.user)
          console.log('>>>>>>>>>>>!', props.setLoginUser)
          navigate("/")

        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error during login");
        });
    } else {
      alert("something missing");
    }
  };

  const Register=(url)=>{
     navigate(url)
  }

  return (
    <>
      <div className="container h-[100vh] w-full flex justify-center items-center bg-amber-200 ">
        <h1 className="text-center h-60 w-80 rounded-lg bg-slate-500 px-2 text-white ">
          Login page <br />
          {/* username input  */}
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="enter email"
            className="h-10 w-full px-1 rounded-md text-black"
            onChange={valueHandler}
          />
          {/* password inpit  */}
          <input
            type="text"
            name="password"
            value={user.password}
            placeholder="enter password"
            className="h-10 w-full px-1 rounded-md mt-3 text-black"
            onChange={valueHandler}
          />
          {/* buttom  */}
          <button
            className="h-10 w-full px-1 bg-blue-800 rounded-md mt-3"
            onClick={loginHandler}
          >
            Login
          </button>

          <button
            className="h-10 w-full px-1 bg-blue-800 rounded-md mt-3"
            onClick={()=>{Register('/register')}}
          >
            Register
          </button>
        </h1>
      </div>
    </>
  );
}

export default Login;
