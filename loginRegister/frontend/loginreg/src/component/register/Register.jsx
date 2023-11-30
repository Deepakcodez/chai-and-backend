import React, { useState } from 'react'
import axios from 'axios'

function Register() {
    const[user,setUser] = useState({
        name: '',
        email: '',
        password: '',
        reEnteredPassword:''
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

    const registerHandler =()=>{
      const {name,email,password,reEnteredPassword} = user;

      if(name && email && password && password===reEnteredPassword){

            axios.post('http://localhost:8000/api/v1/user/register',user, { headers: { 'Content-Type': 'application/json' }})
            .then(resp => {
              console.log('Response:', resp);
              if (resp.status === 201) {
                 alert('Registration successful');
              } else {
                 alert('Registration failed');
              }
           })
           .catch(error => {
              console.error('Error:', error);
              alert('Error during registration');
           });

      }
      else{
        alert("invalid user details")
      }

    }

  return (
    <>
    <div className="container h-[100vh] w-full flex justify-center items-center bg-pink-200 ">
        <div className="text-center  h-auto p-3 w-80 rounded-lg bg-slate-500 px-2 text-white ">
           
           <br />
        <h1 className='font-bold mb-3'>  Register page  </h1>
        {/* username input  */}
        <input type="text" name="name" 
        value={user.name}
        placeholder="enter name"
        className="h-10 w-full px-1 rounded-md text-black"
        onChange={valueHandler}
        />

        {/* email inpit  */}
          <input type="text" name="email" 
        value={user.email}
        placeholder="enter email"
        className="h-10 w-full px-1 rounded-md mt-3 text-black"
        onChange={valueHandler}

        />
        {/* password inpit  */}
          <input type="text" name="password" 
          value={user.password}
        placeholder="enter password"
        className="h-10 w-full px-1 rounded-md mt-3 text-black"
        onChange={valueHandler}

        />
        {/* password inpit  */}
          <input type="text" name="reEnteredPassword" 
          value={user.reEnteredPassword}
        placeholder="re-enter password"
        className="h-10 w-full px-1 rounded-md mt-3 text-black"
        onChange={valueHandler}

        />

        {/* buttom  */}
        <button
        className="h-10 w-full px-1 bg-blue-800 rounded-md mt-3"
        onClick={registerHandler}
        >Register</button>
          </div>
      </div>
    
    </>
  )
}

export default Register