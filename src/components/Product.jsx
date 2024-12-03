import React from 'react'
import Images from './Images'
import Badge from './Badge'
import Heading from './Heading'
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";


const Product = ({pdImg}) => {
  return (
    <>
    
    <div className=" w-[24%] relative">
    <Images imgSrc={pdImg} className=""/>
    <Badge badgeText={"10%"} className=" absolute top-2 left-2"/>
    <div className="flex justify-between font-semibold  text-[16px] mt-[30px]">
        <Heading text={"Basic Crew Neck Tee"} as={"h2"}/>
        <Heading text={"$44.00"} as={"p"} className={" text-[#767676] "}/>
    </div>
    <div className="p-[30px] bg-teal-100">
     <span className='flex justify-end gap-x-5'>Add to Wish List<FaHeart/></span>
     <span className='flex justify-end gap-x-5'>Compare<FaCodeCompare/></span>
     <span className='flex justify-end gap-x-5'>Add to Cart<FaShoppingCart/></span>
    </div>
    </div>
    </>
  )
}

export default Product