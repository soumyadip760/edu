import React from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive'

const Container = styled.div`
margin: 2rem 0;
background: #f8f8f8;
`
const NewsData = styled.div`
padding: 2rem 4rem;
display: flex;
background: #1eb2a6;
width: 100%;
justify-content: space-around;
align-items: center;
color: #fff;
${mobile({flexWrap: "wrap"})}
`
const Left = styled.div`
width: 45%;
${mobile({width: "100%"})}
`
const Head = styled.h1`
`
const Tail = styled.p`
margin-top: .7rem;
`

const Right = styled.div`
width: 45%;
text-align: center;
position: relative;

${mobile({width: "100%", marginTop: "1.5rem"})}

`
const Input = styled.input`
width: 90%;
padding: .7rem 2rem;
outline: none;
`
const Span = styled.span`
position: absolute;
right: 41px;
color: #1eb2a6;
top: 11px;
`

export default function Newsletter() {
  return (
    <Container>
    <NewsData>
       <Left>
        <Head>Newsletter - Stay tune and get the latest update</Head>
        <Tail>Far far away, behind the word mountains</Tail>
       </Left>
       <Right>
        <Input type="text" placeholder="Enter your email" />
        <Span><i class="fa-solid fa-paper-plane"></i></Span>
       </Right>
       </NewsData>
    </Container>
  )
}
