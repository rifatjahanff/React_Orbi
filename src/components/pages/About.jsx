import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Product from "../Product";
import Jhuri from "../../assets/AboutImg.png";
import ProductOne from "../../assets/ProductOne.png";
const About = () => {
  return (
    <>
      <div className="">

        <Container>
          <del>
          <Heading
            text={"New Arrivals"}
            as={"h2"}
            className={"text-[40px] font-bold mt-[50px]"}
          />
          </del>
          <Heading
            text={"Home  >  Products"}
            as={"h2"}
            className={"text-[20px] font-sm text-[#767676] mt-[20px]"}
          />
          <Flex className="justify-between">
            <div className=" w-[49%]">
              <Product pdImg={Jhuri} className=" w-full" />
            </div>
            <div className=" w-[49%]">
              <Product pdImg={ProductOne} className=" w-full" />
            </div>
          </Flex>
          <Heading
            text={
              "Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
            }
            as={"h2"}
            className={"text-[40px] font-normal mt-[100px]"}
          />
          <Flex className={"justify-between mb-[100px]"}>
            <div className="w-[31%]">
            <Heading
            text={
              "Our Story"
            }
            as={"h2"}
            className={"text-[40px] font-normal mt-[50px]"}
          />
            <Heading
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
            }
            as={"p"}
            className={"text-[20px]  mt-[50px]"}
          />
            </div>
            <div className="w-[31%]">
            <Heading
            text={
              "Our Brands"
            }
            as={"h2"}
            className={"text-[40px] font-normal mt-[50px]"}
          />
            <Heading
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
            }
            as={"p"}
            className={"text-[20px]  mt-[50px]"}
          />
            </div>
            <div className="w-[31%]">
            <Heading
            text={
              "Our Vision"
            }
            as={"h2"}
            className={"text-[40px] font-normal mt-[50px]"}
          />
            <Heading
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
            }
            as={"p"}
            className={"text-[20px]  mt-[50px]"}
          />
            </div>
          </Flex>
        </Container>

      </div>
    </>
  );
};

export default About;
