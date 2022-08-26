import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from './Responsive'

const Show = styled.div`
opacity: 0;
`
const Container = styled.div`
background: #fff;
padding: 1.5rem 1rem;
text-align: center;
margin: 3rem 0 0 .5rem;
width: 15%;
${tablet({
  flexBasis: "25%"
})}
${mobile({
  flexBasis: "40%"
})}
`
const Img = styled.div`
height: 5rem;
width: 5rem;
margin: auto;
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const Title = styled.h4`
  font-size: 1.2rem;
  margin: .5rem 0;
`
const Course = styled.p`
background: #f8f8f8;
padding: .2rem;
color: #1eb2a6;
font-weight: 500;
`

export default function AllCourses({items}) {
  return (
    <Container>
    <Show />
    <Img> <Image src={items.image} alt='' /></Img>
     <Title>{items.title}</Title>
     <Course>{items.course}</Course>
    </Container>
  )
}
