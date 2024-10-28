// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const GeneralLayouts = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default GeneralLayouts;
