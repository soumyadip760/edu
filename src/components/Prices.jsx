import React from 'react'
import styled from 'styled-components'
import { largeDevice, tablet, mobile } from './Responsive'

const Container = styled.div`
background: #fff;
margin: 3rem 1rem 0;
padding: 2rem;
flex-basis: 30%;
${largeDevice({
  padding: "1rem"
})}
${tablet({
  flexBasis: "50%"
})}
${mobile({
  flexBasis: "100%"
})}
`

const PriceBox = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
`
const LeftImage = styled.div`
height: 5rem;
width: 5rem;
border-radius: 50%;
background: #1eb2a6;
padding: .9rem;
${largeDevice({
  width: "3.5rem",
  height: "3.5rem"
})}
${mobile({
  width: "5rem",
  height: "5rem"
})}
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Right = styled.div`
flex: 3;
margin-left: .7rem;
`
const Title = styled.h2`
font-size: 1.82rem;
font-weight: 500;
line-height: 2.5rem;
`
const Ratings = styled.div`
color: #1eb2a6;
margin: 1.5rem 0;
`
const Span = styled.span``
const Owner = styled.div`
display: flex;
align-items: center;
margin-bottom: .5rem;
`
const NameImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const P = styled.p`
  margin-left: 1rem;
  color: #999;
  font-weight: 600;
`
const Lecture = styled.h6`
  font-size: .9rem;
  color: #1eb2a6;
  margin-bottom: 1.5rem;
`
const Amount = styled.h4`
font-size: 1.2rem;
padding: .7rem;
color: #1eb2a6;
text-align: center;
`
export const Boutton = styled.button`
width: 100%;
background: #fff;
border: 2px solid #1eb2a6;
padding: 1rem;
font-weight: 600;
color: #1eb2a6;
transition: .5s;
cursor: pointer;

&:hover{
    background: #1eb2a6;
    color: #fff;
}
`
export default function Prices({items}) {
  return (
    <Container>
       <PriceBox>
            <Left>
            <LeftImage>
            <Image src={items.image} alt='' />
            </LeftImage>
            </Left>
            <Right>
                <Title>{items.title}</Title>
                <Ratings>
                    <Span><i class="fa-solid fa-star"></i></Span>
                    <Span><i class="fa-solid fa-star"></i></Span>
                    <Span><i class="fa-solid fa-star"></i></Span>
                    <Span><i class="fa-solid fa-star"></i></Span>
                    <Span><i class="fa-solid fa-star"></i></Span>
                    <Span>(5.0)</Span>
                </Ratings>
                <Owner>
                    <NameImage src={items.nameImage} alt='' />
                    <P>by {items.name}</P>
                </Owner>
                <Lecture>{items.lecture}</Lecture>
            </Right>
        </PriceBox>
        <Amount>{items.amount}</Amount>
        <Boutton>ENROLL NOW!</Boutton>
        </Container>
  )
}
