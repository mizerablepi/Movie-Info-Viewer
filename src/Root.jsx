import { Outlet, useLocation } from "react-router-dom";
import NavaBar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";

function Root() {
  const [username, setUsername] = useState(null);
  const url = useLocation();

  useEffect(() => {
    const user = window.localStorage.getItem("username");
    setUsername(user);
  }, [url]);
  return (
    <>
      <NavaBar username={username} setUsername={setUsername} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
