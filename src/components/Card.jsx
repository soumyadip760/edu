import React from 'react'
import styled from 'styled-components'
import { tablet, mobile } from './Responsive'

const Container = styled.div`
`
const P = styled.p`
margin-top: 1rem;
font-size: 1.2rem;
`
const H3 = styled.h3``

const CardData = styled.div`
display: flex;
background: #fff;
width: 70%;
margin: 2rem 0;
padding: 2rem;
transition: .5s;
cursor: pointer;

${tablet(
  {
    flexDirection: "column",
    padding: "1rem"
  }
)}

&:hover{
  background: #1eb2a6;
  color: #fff;
}
`
const Image = styled.img`
height: 4rem;
${tablet({
  width: "50%"
})};
${mobile({
  width: "20%"
})}
`
const CartText = styled.div`
margin-left: 1rem;
`



export default function Card(props) {
  return (
   <Container>
    <CardData>
      <Image src={props.image} alt='' />
      <CartText>
        <H3>{props.title}</H3>
        <P>{props.desc}</P>
      </CartText>
    </CardData>
   </Container>
  )
}
