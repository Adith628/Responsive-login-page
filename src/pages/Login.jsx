import React from "react";
import illus from "../assets/illus_login.png";
import logo from "../assets/Logo2.png";
import "./styles/login.css";

const Login = () => {
  return (
    <div className="flex flex-wrap py-4 px-12 h-screen w-screen">
      <img src={logo} className="absolute" alt="" />
      <div className="flex-1"></div>
      <div className="right rounded-xl text-white flex justify-end h-full ">
        <div className="flex gap-10 flex-col justify-end pl-8 pr-20 ">
          <div className="">
            <h2 className="font-semibold text-2xl ">
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
  );
};

export default Login;
