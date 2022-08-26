import React from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive'
const Container = styled.div`
display: flex;
height: 80px;
padding: .7rem 2rem;
justify-content: space-between;
align-items: center;
`
const Name = styled.div``
const Heading = styled.h2`
margin: 0;
font-size: 2.3rem;
font-weight: 700;
color: #fff;
`
const ShortHeading = styled.p`
margin: 0;
color: #fff;
`
const Icons = styled.div``
export const Span = styled.span`
font-size: 1.2rem;
display: inline-block;
margin: 0 .5rem;
background-color: hsla(0,0%,100%,.3);
color: #1eb2a6;
width: 40px;
height: 40px;
line-height: 40px;
border-radius: 50%;
text-align: center;
transition: .5s;
cursor: pointer;

&:hover{
background: #1eb2a6;
color: #fff;
}

${mobile({
  width: "30px", 
  height: "30px", 
  lineHeight: "30px", 
  margin: "0 .2rem"
  })}
`
export default function SiteName() {
  return (
  <Container>
   <Name>
    <Heading>ACADEMIC</Heading>
    <ShortHeading>ONLINE EDUCATION & LEARNING</ShortHeading>
   </Name>
   <Icons>
    <Span><i class="fa-brands fa-facebook-f"></i></Span>
    <Span><i class="fa-brands fa-instagram"></i></Span>
    <Span><i class="fa-brands fa-twitter"></i></Span>
    <Span><i class="fa-brands fa-youtube"></i></Span>
   </Icons>
  </Container>
  )
}
