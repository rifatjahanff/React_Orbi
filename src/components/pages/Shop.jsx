import React from "react";
import Header from "../layouts/Header";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Product from "../Product";

import ProductOne from "../../assets/ProductOne.png";
import ProductTwo from "../../assets/ProductTwo.png";
import ProductThree from "../../assets/ProductThree.png";
import ProductFour from "../../assets/ProductFour.png";
import ProductFive from "../../assets/ProductFive.png";
import ProductSix from "../../assets/ProductSix.png";
import ProductSeven from "../../assets/ProductSeven.png";
import ProductEight from "../../assets/ProductEight.png";
import { FaPlus } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";


const Shop = () => {
  return (
    <>
      
      <div className="">
        <Container>
          <Heading
            text={"New Arrivals"}
            as={"h2"}
            className={"text-[40px] font-bold mt-[100px]"}
          />
          <Heading
            text={"Home  >  Products"}
            as={"h2"}
            className={"text-[20px] font-sm text-[#767676] my-[30px]"}
          />
          <Flex className="mt-[150px] gap-2">
            <div className="w-[25%]">
              <div className="">
                {" "}
                <div className="">
                  <Heading
                    text={"Shop by Category"}
                    as={"h2"}
                    className={"text-[20px] font-semibold mb-[30px]"}
                  />
                  <div className="flex gap-[200px] w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"Category 1"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                    <FaPlus className="mb-[30px]" />
                  </div>
                  <div className="flex gap-[200px] w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"Category 2"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-[200px] w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"Category 3"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                    <FaPlus className="mb-[30px]" />
                  </div>
                  <div className="flex gap-[200px] w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"Category 4"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-[200px] w-full text-[#767676] border-b-4 border-b-[#e6e5e5]  mb-[30px]">
                    <Heading
                      text={"Category 5"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-[200px] w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"Category 1"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                </div>
                {/* ===================== */}
                <div className="">
                  {" "}
                  <div className="flex justify-between items-center">
                    {" "}
                    <Heading
                      text={"Shop by Color"}
                      as={"h2"}
                      className={
                        "text-[20px] font-semibold mb-[30px] mt-[10px]"
                      }
                    />{" "}
                    <IoMdArrowDropdown
                      className={"ml-[100px] font-sm text-black "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <GoDotFill className={"text-[20px] font-sm text-black "} />
                    <Heading
                      text={"Color 1"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <GoDotFill
                      className={"text-[20px] font-sm text-[#FF8686] "}
                    />
                    <Heading
                      text={"Color 1"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <GoDotFill
                      className={"text-[20px] font-sm text-[#7ED321] "}
                    />
                    <Heading
                      text={"Color 1"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <GoDotFill
                      className={"text-[20px] font-sm text-[#B6B6B6] "}
                    />
                    <Heading
                      text={"Color 1"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <GoDotFill
                      className={"text-[20px] font-sm text-[#15CBA5] "}
                    />
                    <Heading
                      text={"Color 1"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                </div>
                {/* ===================== */}

                {/* ===================== */}
                <div className="">
                  <div className="flex justify-between items-center">
                    <Heading
                      text={"Shop by Brand"}
                      as={"h2"}
                      className={
                        "text-[20px] font-semibold mb-[30px] mt-[10px]"
                      }
                    />
                    <IoMdArrowDropdown
                      className={"ml-[100px] font-sm text-black "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"Brand 1"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"Brand 2"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"Brand 3"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"Brand 4"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"Brand 5"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                </div>
                {/* ===================== */}
                
                {/* ===================== */}
                <div className="">
                  <div className="flex justify-between items-center">
                    <Heading
                      text={"Shop by Price"}
                      as={"h2"}
                      className={
                        "text-[20px] font-semibold mb-[30px] mt-[10px]"
                      }
                    />
                    <IoMdArrowDropdown
                      className={"ml-[100px] font-sm text-black "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"$0.00 - $9.99"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"$0.00 - $9.99"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"$0.00 - $9.99"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"$0.00 - $9.99"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full text-[#767676] border-b-4 border-b-[#e6e5e5] mb-[30px] ">
                    <Heading
                      text={"$0.00 - $9.99"}
                      as={"h2"}
                      className={"text-[20px] font-sm text-[#767676] "}
                    />
                  </div>
                </div>
                {/* ===================== */}
              </div>
            </div>
            <div className=" w-[75%] flex flex-wrap  justify-between ">
            <Product pdImg={ProductOne} />
            <Product pdImg={ProductTwo} />
            <Product pdImg={ProductThree} />
            <Product pdImg={ProductFour} />
            <Product pdImg={ProductFive} />
            <Product pdImg={ProductSix} />
            <Product pdImg={ProductSeven} />
            <Product pdImg={ProductEight} />
            <Product pdImg={ProductOne} />
            <Product pdImg={ProductTwo} />
            <Product pdImg={ProductThree} />
            <Product pdImg={ProductFour} />
            </div>
          </Flex>
        </Container>

      </div>
    </>
  );
};

export default Shop;
