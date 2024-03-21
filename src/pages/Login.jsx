import React from "react";
import illus from "../assets/illus_login.png";
import logo from "../assets/Logo2.png";
import "./styles/login.css";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { Input } from "antd";
import { LockOutlined, MailFilled, MailOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div className="min-h-screen   justify-center overflow-hidden py-8  rounded-2xl flex flex-col sm:flex-wrap-reverse md:flex-row ">
      {/* Left Section: Login Form */}
      <div className="md:w-1/3 flex flex-col items-center justify-center rounded-l-2xl mx-2 ">
        <div className="flex flex-col px-5 w-full  ">
          <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
          <div className="mt-6  text-left self-start  text-3xl font-extrabold text-white">
            <h2 className="font-normal ">
              Hello ,
              <span className="text-transparent tracking-wide font-extrabold bg-gradient-to-b from-cyan-200 to-sky-600 bg-clip-text">
                &nbsp;Mikołaj!
              </span>
            </h2>
            <p className="text-sm text-gray-500 font-light mt-4">
              Log in to Artificium to start creating magic.
            </p>
          </div>
        </div>
        {/* Social logins */}
        <div className="text-center w-full mb-5 mx-2">
          <div className="flex gap-4 flex-1 px-5 text-sm text-gray-500  justify-between mt-2">
            {/* Google Login Button */}
            <button className="btn flex items-center flex-1  tracking-wider justify-center bg-gray-900 font-semibold py-3 px-4 rounded-xl ">
              <img src={google} alt="Google Logo" className="h-4 mr-2" />
              Sign in with Google
            </button>
            {/* Apple Login Button */}
            <button className="btn flex items-center  tracking-wider flex-1 justify-center bg-gray-900 font-semibold py-3 px-4 rounded-xl ">
              <img src={apple} alt="Apple Logo" className="h-4 mr-2" />
              Sign in with Apple
            </button>
          </div>
        </div>

        <div className="text-center w-4/5  my-4 relative">
          <hr className="border-gray-600 border-1 w-full mx-auto" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-xs px-2">
            <span className="text-gray-500 font-semibold">
              Or continue with email
            </span>
          </div>
        </div>

        {/* from */}
        <div className="flex px-5 w-full   ">
          <form className="mt-4 space-y-6 flex-1  w-full">
            <div className="relative w-full">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 px-9 text-sm placeholder:text-sm block w-full  py-2 border border-gray-700 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-100 bg-gray-800"
                placeholder="Email address"
              />
              <MailOutlined className="top-3 text-gray-500 left-3 absolute " />
            </div>
            <div className="mt-4 relative">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 px-9 text-sm placeholder:text-sm block w-full py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-100 bg-gray-800"
                placeholder="Password"
              />
              <LockOutlined className="top-3 text-gray-500 left-3 absolute " />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rem"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded-md bg-gray-900 text-green-600 focus:ring-green-500 border-gray-300 focus:border-green-500"
                />

                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-xs text-gray-500 "
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#21ffdacc] hover:text-[#79ffe9cc]"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#21ffdacc]  hover:bg-bckgrnd  hover:border-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Right Section: Image with Text */}
      <div className="relative md:w-1/3 bg-transparent flex justify-center items-center hidden md:block">
        <img
          src={illus}
          alt="illustration"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute inset-0 flex items-end mr-16 mb-6 pl-10 justify-center">
          <div className="text-white   flex flex-col gap-3  ">
            <div className="">
              <h2 className="font-semibold text-xl  ">
                Artificium has been a game-changer for our content creation
                process.
                <br />
                <br />
                The AI-powered tools are incredibly user-friendly and have saved
                us countless hours of work.
              </h2>
            </div>
            <div className="mb-5">
              <h3>Lily Patel</h3>
              <h4 className="cmo mt-0.5  font-thin">CMO at Software House</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
