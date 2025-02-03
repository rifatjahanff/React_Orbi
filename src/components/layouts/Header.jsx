import React from "react";
import Container from "../Container";

import Menu from "../Menu";
import Images from "../Images";
import Logo from "../../assets/Logo.png";
import Flex from "../Flex";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Heading from "../Heading";
import { Link } from "react-router";
const Header = () => {
  return (
    <>
      <div className="py-[20px] bg-teal-200">
        <Container>
          <Flex className={"items-center"}>
            <div className="w-[30%]">
              <Images imgSrc={Logo} />
            </div>
            <div className="w-[70%] ">
              <Menu className=" flex gap-x-16 text-[20px]">
                <Link to={"/"}>
                  <li className="hover:text-red-800 hover:text-[20px] duration-700">
                    Home
                  </li>
                </Link>
                <Link to={"/Shop"}>
                  <li className="hover:text-red-800 hover:text-[20px] duration-700">
                    Shop
                  </li>
                </Link>

                <Link to={"/About"}>
                  <li className="hover:text-red-800 hover:text-[20px] duration-700">
                    About
                  </li>
                </Link>
                <Link to={"/Contacts"}>
                <li className="hover:text-red-800 hover:text-[20px] duration-700">
                  Contacts
                </li>
                </Link>
                <Link to={"/Journal"}>
                <li className="hover:text-red-800 hover:text-[20px] duration-700">
                  Journal
                </li>
                </Link>
              </Menu>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="py-[20px] bg-red-200">
        <Container>
          <Flex className={"gap-x-5"}>
            <div className="w-[25%] flex items-center gap-x-3 text-[20px] font-semibold">
              <HiOutlineBars3BottomLeft />
              <Heading as={"p"} text={"Shop by Category"} />
            </div>
            <div className="w-[50%] relative">
              <input
                type="text"
                placeholder="Search Products"
                className="p-[20px] w-full rounded-xl"
              />
              <FaSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-[20px]" />
            </div>
            <div className="w-[25%]">
              <Flex className="gap-x-3 my-[20px]">
                <div className="w-1/2 flex text-[20px] justify-end gap-x-3">
                  <FaUser />
                  <IoMdArrowDropdown />
                </div>
                <div className="w-1/2 text-[20px] flex justify-end">
                  <FaShoppingCart />
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
