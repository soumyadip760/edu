import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import data from '../data'
import { mobile} from './Responsive'

const Container = styled.div`
background: #f8f8f8;
display: flex;
width: 100%;
height: 100%;
justify-content: space-around;
${mobile({
  flexDirection: "column",
  alignItems: "center"
})}
`
const Left = styled.div`
width: 45%;
${mobile({
  width: "100%",
})}
`
const LeftImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Right = styled.div`
width: 45%;
padding: 2rem;
display: flex;
flex-direction: column;
${mobile({
  width: "100%",
})}
`
const H5 = styled.h5`
font-size: 1.2rem;
color: #1eb2a6;
`
const H1 = styled.h1`
font-size: 3rem;
margin-top: 1rem;
`


export default function Learn() {
  return (
    <Container>
      <Left>
        <LeftImage src='https://scintillating-smakager-860376.netlify.app/images/about.webp' alt='' />
      </Left>
      <Right>
        <H5>LEARN ANYTHING</H5>
        <H1>Benefits About Online Learning Expertise</H1>
        {data.map(item => {
          return (
            <Card
              image={item.image}
              title={item.title}
              desc={item.desc}
            />
          )
        })}
      </Right>
    </Container>
  )
}
