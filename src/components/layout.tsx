import { Outlet } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto mt-14 flex min-h-screen max-w-6xl flex-col md:mt-20 md:flex-row">
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
