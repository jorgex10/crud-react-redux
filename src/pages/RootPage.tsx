import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootPage = () => {
  return (
    <>
      <Navbar />
      <main className="mt-20">
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
