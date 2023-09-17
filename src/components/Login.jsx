import React, { useState, useContext } from "react";
import BooksContext from "../context/Books";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, login } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    setEmail("");
    setPassword("");
    login(user);
  };

  return (
    <div className="h-[80vh] flex flex-col  items-center">
      <div className="py-12">
        <h2 className="text-3xl">Login to Continue</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-8"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 outline-none rounded-md px-4 py-2 border-gray-400 lg:w-[500px] w-[300px]"
          type="email"
          name=""
          id=""
          placeholder="EMAIL"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 outline-none rounded-md px-4 py-2 border-gray-400 lg:w-[500px] w-[300px]"
          type="password"
          name=""
          id=""
          placeholder="PASSWORD"
        />
        <button className="bg-green-400 text-white font-bold text-xl px-8 py-2 rounded-md">
          Login
        </button>
      </form>
      <div className="my-2">
        <p className="font-bold">
          Don't have an account?{" "}
          <span
            onClick={() => handleLogin(false)}
            className="text-blue-700 cursor-pointer hover:opacity-[0.8]"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
