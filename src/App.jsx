import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event)=>{
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const address = event.target.address.value;
    console.log({name, email, password, address})
  }
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-3'>User Information Form</h1>
      <form onSubmit={handleSubmit} className='w-1/3 mx-auto p-6 rounded-lg border-2 shadow-lg' action="">
        <div>
          <label className='text-xl font-bold text-black ' htmlFor="name">Name</label> <br />
          <input className='w-full border-2 py-1 px-2 rounded-lg mt-1' placeholder='Enter your Name...' type="text" name="name"/>
        </div>
        <div className='my-2'>
          <label className='text-xl font-bold text-black ' htmlFor="email">Email</label> <br />
          <input className='w-full border-2 py-1 px-2 rounded-lg mt-1' placeholder='Enter your Email...' type="email" name="email"/>
        </div>
        <div className='relative'>
          <label className='text-xl font-bold text-black ' htmlFor="password">Password</label> <br />
          <input className='w-full border-2 py-1 px-2 rounded-lg mt-1' placeholder='Enter your Password...' type={showPassword ? "text" : "password"} name="password"/>
          <span onClick={()=>setShowPassword(!showPassword)} className='absolute right-3 top-10 cursor-pointer'>{showPassword ? <FaRegEye /> : <FaEyeSlash />}</span>
        </div>
        
        <div className='my-2'>
          <label className='text-xl font-bold text-black ' htmlFor="address">Address</label> <br />
          <input className='w-full border-2 py-1 px-2 rounded-lg mt-1' placeholder='Enter your Address...' type="text" name="address"/>
        </div>
        <div className='mt-6 flex justify-center items-center'>
          <button type='submit' className='py-1 px-4 rounded-lg bg-blue-500 text-white text-lg font-bold leading-normal'>Submit</button>
        </div>
      </form>
      
      
    </div>
  );
};

export default App;