import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import FooterLogo from '../../assets/FooterLogo.png'
import Images from '../Images'
import { FaFacebookF, FaLinkedinIn, FaInstagram  } from "react-icons/fa";


const FooterPart = () => {
  return (
    <>
      <div className=" h-[400px] bg-[#F5F5F3]">
       <Container>
        <Flex className={"justify-between gap-[50px]"}>
            <div className="w-[37%] mt-20">
               <Flex className={"justify-between "} >
               <div className="">
                    <Heading text={"MENU"} as={"p"} className={"text-[20px] font-bold "}/>
                    <Heading text={"Shop"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"About"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"Contact"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"Journal"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    
                </div>
                <div className="">
                    <Heading text={"SHOP"} as={"p"} className={"text-[20px] font-bold "}/>
                    <Heading text={"Category 1"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"Category 2"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"Category 3"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"Category 4"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"Category 5"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>


                </div>
                <div className="">
                    <Heading text={"HELP"} as={"p"} className={"text-[20px] font-bold "}/>
                    <Heading text={"Privacy Policy"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"Terms & Conditions"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"Special E-shop"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"Shipping"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    <Heading text={"Secure Payments"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
            
                </div>
               </Flex>
            </div>
            <div className="w-[38%] mt-20 ml-[100px]">
            <div className="">
                    <Heading text={"(052) 611-5711"} as={"p"} className={"text-[20px] font-bold "}/>
                    <Heading text={"company@domain.com"} as={"p"} className={"text-[20px] font-bold "}/>
                    <Heading text={"575 Crescent Ave. Quakertown, PA 18951"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/>
                    
                </div>
            </div>
            <div className="w-[25%] mt-20">
               <Images imgSrc={FooterLogo}/>
            </div>
        </Flex>
        <Flex className={"justify-between "}>
            <div className="flex gap-x-10 mt-10"> 
                <FaFacebookF/>
                <FaLinkedinIn/>
                <FaInstagram />
            </div>
            <div className=" mt-[20px]">
            <Heading text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"} as={"p"} className={"text-[20px] mt-[10px] text-[#6D6D6D] "}/> 
            </div>
        </Flex>
       </Container>
      </div>
    </>
  )
}

export default FooterPart