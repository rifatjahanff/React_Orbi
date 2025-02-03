import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { RiNumber2 } from "react-icons/ri";
import { FaTruck, FaUndo } from "react-icons/fa";
import Heading from "../Heading";

const Guarante = () => {
  return (
    <>
      <div className="h-[100px] bg-red-200 drop-shadow-md">
        <Container>
          <Flex className="justify-between">
            <div className="w-[32%] flex justify-center gap-x-4 text-[30px] mt-[30px] items-center">
              <RiNumber2 />
              <Heading text={"Two years warranty"} as={"p"} />
            </div>
            <div className="w-[32%] flex justify-center gap-x-4 text-[30px] mt-[30px] items-center">
              <FaTruck />
              <Heading text={"Two years warranty"} as={"p"} />
            </div>
            <div className="w-[32%] flex justify-center gap-x-4 text-[30px] mt-[30px] items-center">
              <FaUndo />
              <Heading text={"Two years warranty"} as={"p"} />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Guarante;
