import React from "react";
import Header from "../layouts/Header";
import Banner from "../layouts/Banner";
import Guarante from "../layouts/Guarante";
import Offers from "../layouts/Offers";
import ProductPart from "../layouts/ProductPart";
import AnatherAdd from "../layouts/AnatherAdd";
import BottomProduct from "../layouts/BottomProduct";

const Home = () => {
  return (
    <>
      
      <Banner />
      <Guarante />
      <Offers />
      <ProductPart />
      <AnatherAdd />
      <BottomProduct />
     
    </>
  );
};

export default Home;
