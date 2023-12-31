"use client";

import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      <div class="flex flex-col mt-32 md:mt-0 justify-center items-center px-6 pt-8 mx-auto md:h-screen">
        <div class="fixed top-8 right-8"></div>
        <div class="p-10 w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-md shadow-gray-300 dark:shadow-gray-600 ">
          <div class="space-y-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              Log in to platform
            </h2>

            <form class="mt-8 space-y-6">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="phone"
                id="phone"
                className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:bg-gray-800 sm:text-sm rounded-lg focus:ring-2  focus:ring-fuchsia-200 dark:focus:ring-fuchsia-700 focus:border-fuchsia-300 dark:focus:border-fuchsia-600 block w-full p-2.5"
                placeholder="2519--------"
              />
              <input
                type="text"
                name="props.name"
                id="props.id"
                className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:bg-gray-800 sm:text-sm rounded-lg focus:ring-2  focus:ring-fuchsia-200 dark:focus:ring-fuchsia-700 focus:border-fuchsia-300 dark:focus:border-fuchsia-600 block w-full p-2.5"
                placeholder="props.placeholder"
              />
              <div class="flex items-start">
                <div class="ml-3 text-sm">
                  <Link
                    href="/auth/guest/login"
                    class="ml-auto text-sm text-gray-900 dark:text-white underline hover:underline"
                  >
                    Login as guest
                  </Link>
                </div>
                <Link
                  href="/auth/forgot"
                  class="ml-auto text-sm text-fuchsia-600 hover:underline"
                >
                  Lost Password?
                </Link>
              </div>

              <button className="inline-flex items-center disabled:opacity-50 py-2.5 px-5 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-br from-pink-500 to-violet-500 sm:ml-auto shadow-md shadow-gray-300 dark:shadow-none hover:scale-[1.02] transition-transform">
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
