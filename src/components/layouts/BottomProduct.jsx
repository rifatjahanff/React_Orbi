import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import OfferProduct from '../../assets/S_offer.png'
import OfferProductTwo from '../../assets/S_offerTwo.png'
import OfferProductThree from '../../assets/S_offerThree.png'
import OfferProductFour from '../../assets/S_offerFour.png'

const BottomProduct = () => {
  return (
    <>
    <Container>
    <Heading text={"Special Offers"} as={"h2"} className={"text-[40px] font-bold my-[30px]"}/>
    <Flex className={"justify-between gap-y-8 mb-[150px]"} >
        <Product  pdImg={OfferProduct}/>
        <Product  pdImg={OfferProductTwo}/>
        <Product  pdImg={OfferProductThree}/>
        <Product  pdImg={OfferProductFour}/>
    </Flex>

    </Container>
    </>
  )
}

export default BottomProduct