import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import ProductOne from "../../assets/ProductOne.png";
import ProductTwo from "../../assets/ProductTwo.png";
import ProductThree from "../../assets/ProductThree.png";
import ProductFour from "../../assets/ProductFour.png";
import ProductFive from "../../assets/ProductFive.png";
import ProductSix from "../../assets/ProductSix.png";
import ProductSeven from "../../assets/ProductSeven.png";
import ProductEight from "../../assets/ProductEight.png";
import Heading from "../Heading";

const ProductPart = () => {
  return (
    <>
      <div className="py-6">
        <Container>
          <Heading
            text={"New Arrivals"}
            as={"h2"}
            className={"text-[40px] font-bold my-[30px]"}
          />
          <Flex className={"flex-wrap justify-between gap-y-8"}>
            <Product pdImg={ProductOne}  />
            <Product pdImg={ProductTwo} />
            <Product pdImg={ProductThree} />
            <Product pdImg={ProductFour} />
            <Product pdImg={ProductFive} />
            <Product pdImg={ProductSix} />
            <Product pdImg={ProductSeven} />
            <Product pdImg={ProductEight} />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default ProductPart;
