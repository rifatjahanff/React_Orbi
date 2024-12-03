import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import AddOne from '../../assets/Ad_1.png'
import AddTwo from '../../assets/Ad_2.png'
import AddThree from '../../assets/Ad_3.png'

const Offers = () => {
  return (
    <>
    <div className="my-[100px]">
        <Container>
            <Flex className={"justify-between"}>
              <div className="w-[48%] bg-black">
              <Images imgSrc={AddOne} className="w-full"/>
              </div>
              <div className="w-[48%] ">
              <Images imgSrc={AddTwo} className="pb-[34px] w-full"/>
              <Images imgSrc={AddThree} className="w-full"/>
              </div>
                
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Offers