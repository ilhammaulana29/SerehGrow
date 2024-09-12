// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const GeneralLayouts = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default GeneralLayouts;
