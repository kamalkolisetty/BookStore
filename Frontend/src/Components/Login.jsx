import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const showLogin = queryParams.get('showLogin') === 'true';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      
      email:data.email,
      password:data.password
    }

   await axios.post("http://localhost:4001/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Login Successful")
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user) ) 
      // mayb shld b in if block

    }).catch((err)=>{
      console.log("ERror "+err)
      toast.error("Error " +err)
    })


    reset();
    closeModal(); // Clear the form data
  };

  useEffect(() => {
    if (showLogin) {
      document.getElementById('my_modal_3').showModal();
    }
  }, [showLogin]);

  const closeModal = () => {
    document.getElementById('my_modal_3').close();
    navigate(location.pathname); // Remove query parameter after closing
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box dark:bg-slate-900 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Login !</h3>
          <div className='space-y-2 mt-4'>
            <label htmlFor="mail" className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              {...register("email", { required: true })}
              id="mail"
              type="email"
              className='w-80 px-3 py-1 border rounded-md'
              placeholder='Enter Your email'
            />
            {errors.email && <span className='text-red-500'>Email is required</span>}
          </div>
          <div className='space-y-2 mt-4'>
            <label htmlFor="pwd" className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              {...register("password", { required: true })}
              id="pwd"
              type="password"
              className='w-80 px-3 py-1 border rounded-md'
              placeholder='Enter Your password'
            />
            {errors.password && <span className='text-red-500'>Password is required</span>}
          </div>
          <div className='flex mt-3 px-2 justify-between'>
            <button
              type="submit"
              className='bg-pink-500 px-3 py-2 text-white border rounded-md'
            >
              Login
            </button>
            <div mt-1>
              <span>Not Registered ?</span>
              <Link onClick={()=>closeModal()} className='underline text-red-400' to="/signup"> Signup</Link>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Login;
