import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
