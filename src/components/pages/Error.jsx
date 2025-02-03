import React from 'react'
import Header from '../layouts/Header'
import FooterPart from '../layouts/FooterPart'
import Images from '../Images'
import EError from'../../assets/Under_Construction.jpg'

const Error = () => {
  return (
    <>
   
   <Images imgSrc={EError} className={"w-full h-[1000px]"}/>

    </>
  )
}

export default Error