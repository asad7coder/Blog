import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import styles from "./Layout.module.css";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="container-xxl d-flex p-0" id={styles.mainContainer}>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
