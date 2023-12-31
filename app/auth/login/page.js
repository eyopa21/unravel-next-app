"use client";

import Link from "next/link";
import { useState } from "react";
import axios from 'axios';

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (phone && password) {
       setError('');
     
      const formData = new FormData();
formData.append('phone', phone);
formData.append('password', password);

      console.log(phone, password)
      try {
        
       
const res = await axios({
  method: 'post',
  url: 'https://lively.unravelplc.com/api/login',
  data: {
    phone: phone,
    password: password
  }
});
console.log(res)
      } catch (err) {
        console.log(error)
      }

 
 
    } else {
      setError('Please enter Phone number and password.');
    }
  };
  return (
    <>
      <div className="flex flex-col mt-32 md:mt-0 justify-center items-center px-6 pt-8 mx-auto md:h-screen">
        <div className="fixed top-8 right-8"></div>
        <div className={`p-10 w-full max-w-lg ${error.length==""? 'bg-white dark:bg-gray-900' :'border-red-400'}  rounded-2xl shadow-xl dark:shadow-md shadow-gray-300 dark:shadow-gray-600 `}>
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Log in to platform
            </h2>

            <form onSubmit={handleLogin} class="mt-8 space-y-6">
              <div className="space-y-2">
                <label for="phone" className="font-semibold">Phone number</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="phone"
                id="phone"
                className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:bg-gray-800 sm:text-sm rounded-lg focus:ring-2  focus:ring-fuchsia-200 dark:focus:ring-fuchsia-700 focus:border-fuchsia-300 dark:focus:border-fuchsia-600 block w-full p-2.5"
                placeholder="2519--------"
                />
                
              </div>
              <div className="space-y-2 ">
                 <label for="password" className="font-semibold">Password</label>
              <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="props.id"
                className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:bg-gray-800 sm:text-sm rounded-lg focus:ring-2  focus:ring-fuchsia-200 dark:focus:ring-fuchsia-700 focus:border-fuchsia-300 dark:focus:border-fuchsia-600 block w-full p-2.5"
                placeholder="*************"
              />
              </div>
              {error!=="" &&  <span className="text-red-500 text-lg transition-all duration-1000">{ error}</span>}
            
             
              <div class="flex items-start">
               
                <Link
                  href="/auth/forgot"
                  class="ml-auto text-sm text-fuchsia-600 hover:underline"
                >
                  Lost Password?
                </Link>
              </div>

              <button type="submit" className="inline-flex items-center disabled:opacity-50 py-2.5 px-5 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-br from-pink-500 to-violet-500 sm:ml-auto shadow-md shadow-gray-300 dark:shadow-none hover:scale-[1.02] transition-transform">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
