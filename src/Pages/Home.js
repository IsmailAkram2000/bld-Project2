import React from "react";
import Navbar from "../Component/Home/navbar";
import Header from "../Component/Home/header";
import Title from "../Component/Home/title";
import Tabs from "../Component/Home/tabs";
import Categories from "../Component/Home/categories";
import Footer from "../Component/Home/footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Title />
      <Tabs />
      <Categories />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
