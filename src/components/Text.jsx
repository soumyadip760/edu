import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from './Responsive'

const Container = styled.div``
const TextData = styled.div`
width: 47%;
padding: 3rem 0 .3rem 6rem;
${tablet({width: "70%"})}
${mobile({width: "100%", paddingLeft: "2rem"})}
`
const H5 = styled.h5`
  font-size: 1.2rem;
  color: #fff;
`
const H1 = styled.h1`
font-size: 2.8rem;
margin-top: 1rem;
color: #fff;
`
const P = styled.p`
font-size: 1.1rem;
margin: 1.3rem 0;
color: #fff;
`
export const Button = styled.button`
margin-top: 1rem;
margin-right: 1rem;
padding: 1rem 2rem;
background: ${props => props.color};
border: none;
color: ${props => props.color === 'white' ? '#1eb2a6' : '#fff'};
font-weight: 600;
border-radius: 5px;
cursor: pointer;
`
const Span = styled.span`
margin-left: 1rem;
`
export default function Text() {
  return (
    <Container>
      <TextData>
        <H5>WELCOME TO ACADEMIC</H5>
        <H1>Best Online Education Expertise</H1>
        <P>Far far away, behind world mountains, far from the countries Vokalia and Consonantia, there lived the blind texts.</P>
        <Button color='#1eb2a6'>GET STARTED NOW <Span><i class="fa-solid fa-right-long"></i></Span> </Button>
        <Button color='white'>VIEW COURSE <Span><i class="fa-solid fa-right-long"></i></Span> </Button>
      </TextData>
    </Container>
  )
}

