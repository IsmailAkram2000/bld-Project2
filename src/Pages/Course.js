import React from "react";
import HeaderFixed from "../Component/Course/headerFixed";
import Navbar from "../Component/Home/navbar";
import Header from "../Component/Course/header";
import Section from "../Component/Course/section";
import Footer from "../Component/Home/footer";

const Course = () => {
  return (
    <React.Fragment>
      <HeaderFixed />
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </React.Fragment>
  );
};

export default Course;
