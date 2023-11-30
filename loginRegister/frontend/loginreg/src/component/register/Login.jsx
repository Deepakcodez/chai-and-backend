import React, { useState } from "react";
import axios from "axios";

function Login() {
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
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error during login");
        });
    } else {
      alert("something missing");
    }
  };

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
        </h1>
      </div>
    </>
  );
}

export default Login;
