import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
