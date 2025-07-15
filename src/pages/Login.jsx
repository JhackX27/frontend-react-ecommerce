import { useState } from "react";

export const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="container mx-auto w-xl bg-white p-8 rounded-2xl shadow-lg">
      {/* Header Titles */}
      <div className="flex justify-center mb-4">
        <h2 className="font-Primary-Poppins text-3xl font-semibold text-center">
          {isLoginMode ? "Login" : "Register"}
        </h2>
      </div>

      {/* Tab controls */}
      <div className="relative flex h-12 mb-6 border border-zinc-300 rounded-full overflow-hidden">
        <button
          onClick={() => setIsLoginMode(true)}
          className={`w-1/2 font-Secondary-Gidole text-lg font-medium transition-all z-10 ${
            isLoginMode ? "text-white" : "text-black"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLoginMode(false)}
          className={`w-1/2 font-Secondary-Gidole text-lg font-medium transition-all z-10 ${
            !isLoginMode ? "text-white" : "text-black"
          }`}
        >
          Sign Up
        </button>
        <div
          className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${
            isLoginMode ? "left-0" : "left-1/2"
          } `}
        ></div>
      </div>

      {/* Form section*/}

      <form action="space-y-4">
        {/* Signup-only Field */}
        {!isLoginMode && (
          <>
            <input
              type="text"
              placeholder="Name"
              required
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />

            <input
              type="text"
              placeholder="Phone"
              required
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />

            <input
              type="text"
              placeholder="Email"
              required
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />

            <input
              type="text"
              placeholder="Confirm Password"
              required
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />

            <button className="font-Tertiary-Inter w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
              Sign Up
            </button>
          </>
        )}

        {/* Login-only Field */}
        {isLoginMode && (
          <>
            <input
              type="text"
              placeholder="Email"
              required
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="font-Tertiary-Inter w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />

            <div className="text-right">
              <p className="font-Tertiary-Inter text-cyan-600 hover:underline cursor-pointer">
                Forget Password
              </p>
            </div>

            <button className="font-Tertiary-Inter w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
              Login
            </button>
          </>
        )}

        {/* Switch link */}
        <p className="font-Tertiary-Inter text-center text-gray-600">
          {isLoginMode ? "Din't have an account " : "Already have an account "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsLoginMode(!isLoginMode);
            }}
            className="font-Tertiary-Inter text-cyan-600 hover:underline"
          >
            {isLoginMode ? "Sign Up" : "Login"}
          </a>
        </p>
      </form>
    </div>
  );
};
