import React from "react";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
      <header className="container mx-auto py-8">
        <Navbar></Navbar>
      </header>
      <main className="container mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
