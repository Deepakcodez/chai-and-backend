import React, { useState } from "react";

function Login() {
    const [user,setUser] = useState({
        name:'',
        password : ''
    })
    
    const valueHandler=e=>{
        // console.log('>>>>>>>>>>>', e.target)
        const {name , value} = e.target
        console.log('>>>>>>>>>>>', name , value)
        setUser({
            ...user,
            [name]:value
        })

    }

  return (
    <>
      <div className="container h-[100vh] w-full flex justify-center items-center bg-amber-200 ">
        <h1 className="text-center h-60 w-80 rounded-lg bg-slate-500 px-2 text-white ">
          Login page <br />

        {/* username input  */}
        <input type="text" name="name" 
        value={user.name}
        placeholder="enter name"
        className="h-10 w-full px-1 rounded-md text-black"
        onChange={valueHandler}
        />

        {/* password inpit  */}
          <input type="text" name="password" 
          value={user.password}
        placeholder="enter password"
        className="h-10 w-full px-1 rounded-md mt-3 text-black"
        onChange={valueHandler}

        />

        {/* buttom  */}
        <button
        className="h-10 w-full px-1 bg-blue-800 rounded-md mt-3"
        >Login</button>
        </h1>
       
      </div>
    </>
  );
}

export default Login;
