import React from 'react'
import styled from 'styled-components'
import { priceItem } from '../data'
import Prices from './Prices'
import AllCourse from './AllCourse'
import { tablet } from './Responsive'

const Container = styled.div`
padding: 2rem;
background: #f8f8f8;
`
const PriceData = styled.div`
width: 100%;
height: 100%;
display: flex;
${tablet({
  flexWrap: "wrap",
 justifyContent: "center"
})}
`
export const PriceHead = styled.div`
text-align: center;
`
export const H5 = styled.h5`
font-size: 1.2rem;
color: #1eb2a6;
`
export const H1 = styled.h1`
font-size: 2.5rem;
margin-top: 1rem;
`

export default function Price() {
  return (
   <Container>
        <PriceHead>
        <H5>OUR COURSES</H5>
        <H1>Explore Our Popular Online Courses </H1>
        </PriceHead>

   <PriceData>
    {priceItem.slice(0, 3).map(item => {
        return ( 
            <Prices
            items={item}
             />
        )
    })}
    </PriceData>
    <AllCourse />
   </Container>
  )
}
