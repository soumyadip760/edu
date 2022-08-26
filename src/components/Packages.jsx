import React from 'react'
import styled from 'styled-components'
import { Boutton } from './Prices'
import { tablet, mobile } from './Responsive'

const Container = styled.div`
background: #fff;
width: 23%;
padding: 2rem;
text-align: center;
margin-top: 2rem;
${tablet({width: "45%"})};
${mobile({width: "100%"})}
`
const Plan = styled.h5`
font-size: 1.1rem;
`
const Amount = styled.h1`
font-size: 3rem;
color: #1eb2a6;
margin: 1rem 0;
`
const Span = styled.span`
font-size: 1.2rem;
color: #222;
`
const Desc = styled.p`
font-size: 1.1rem;
color: #999;
line-height: 1.9rem;
margin: 2rem 0;

`

export default function Packages({items}) {
  return (
   <Container>
    <Plan>{items.title}</Plan>
    <Amount><Span>$</Span>{items.price}</Amount>
    <Desc>{items.desc}</Desc>
    <Boutton>GET STARTED!</Boutton>
   </Container>
  )
}
