import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import axios from 'axios'
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =  async (data) => {
    const userInfo={
      username:data.username,
      email:data.email,
      password:data.password
    }

   await axios.post("http://localhost:4001/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Successful")
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user) ) 
      // mayb shld b in if block

    }).catch((err)=>{
      console.log("ERror "+err)
      toast.error("Error "+err)
    })



    reset(); // Clear the form data
  };
  const handleLoginClick = () => {
    navigate("/?showLogin=true");
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md p-8 m-4 bg-white rounded-lg shadow-md'>
        <div className='relative'>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className=" font-bold text-lg text-center">Sign Up!</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-6 '>
            <div className='space-y-4 '>
              <div>
                <label htmlFor="username" className=' block text-sm font-medium text-gray-700'>Name</label>
                <input 
                {
                    ...register("username",{required:true})
                }
                 id="username" type="text" className='w-full px-3 py-2 border rounded-md' placeholder='Enter your full name' />
                 {
                    errors.username && <span  className='text-red-500'>Name is required andii! </span>
                 }
              </div>
              <div>
                <label htmlFor="mail2" className='block text-sm font-medium text-gray-700'>Email</label>
                <input 
                 {
                    ...register("email",{required:true})
                }
                id="mail2" type="email" className='w-full px-3 py-2 border rounded-md' placeholder='Enter your email' />
                  {
                    errors.email && <span  className='text-red-500'>Email is required andii! </span>
                 }
              </div>
              <div>
                <label htmlFor="pwd2" className='block text-sm font-medium text-gray-700'>Password</label>
                <input 
                 {
                    ...register("password",{required:true})
                }
                id="pwd2" type="password" className='w-full px-3 py-2 border rounded-md' placeholder='Enter your password' />
                  {
                    errors.password && <span  className='text-red-500'>password is required andii! </span>
                 }
              </div>
            </div>
            <div className='flex justify-between items-center mt-6'>
              <button className='bg-pink-500 px-4 py-2 text-white rounded-md'>Sign Up</button>
              <div className='text-sm'>
                <span>Have an account?</span>
                <button
                  type="submit"
                  className='underline text-red-400 ml-1'
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
