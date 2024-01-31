import { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = (e) => {
    e.preventDefault();
    window.localStorage.setItem("username", e.target.username.value);
    window.localStorage.setItem("email", e.target.email.value);
    // ! NOTE: I WOULD NEVER STORE PLAIN PASSWORD ESPECIALLY NOT IN LOCAL STORAGE,
    // ! THIS IS ONLY FOR THIS PROJECT
    window.localStorage.setItem("password", e.target.password.value);

    setLoggedIn(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div>
        <h1 className="font-bold text-5xl">Welcome, Viewer!</h1>
      </div>
      <form
        onSubmit={loginUser}
        className="flex flex-col bg-gray-200 p-8 rounded-lg mt-8 w-[20rem]"
      >
        <label className="text-lg" htmlFor="username">
          Username:{" "}
        </label>
        <input
          className="mb-4 rounded"
          type="text"
          name="username"
          id="username"
          required
        />
        <label className="text-lg" htmlFor="email">
          Email:{" "}
        </label>
        <input
          className="mb-4 rounded"
          type="email"
          name="email"
          id="email"
          required
        />
        <label className="text-lg" htmlFor="password">
          Password:{" "}
        </label>
        <input
          className="mb-4 rounded"
          type="password"
          name="password"
          id="password"
          required
        />
        <button
          type="submit"
          className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] active:shadow-none self-start"
        >
          Login
        </button>
      </form>
      {loggedIn ? <Navigate to={"/"} /> : <></>}
    </div>
  );
}

export default Login;
