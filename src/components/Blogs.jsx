import React from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive'

const Container = styled.div`
width: 30%;
margin-top: 2rem;
${mobile({
  width: "100%"
})}
`
const Image = styled.img`
width: 100%;
`
const BlogDetail = styled.div`
background: #fff;
padding: 2rem;
`
const Center = styled.div`
display: flex;
justify-content: space-between;
`
const Time = styled.div``
const Comment = styled.p``
const Admin = styled.p`
margin: .7rem 0;
text-align: center;
`
const Span = styled.span`
color: #1eb2a6;
margin-right: .5rem;
`
const Title = styled.h4`
font-size: 1.5rem;
font-weight: 500;
margin: 1rem 0;
transition: .7s;
cursor: pointer;

&:hover{
    color: #1eb2a6;
}
`
const Desc = styled.p`
font-size: 1.2rem;
color: #999;
line-height: 1.7rem;

`
export default function Blogs({items}) {
  return (
    <Container>
            <Image src={items.image} alt='' />
        <BlogDetail> 
        <Center><Span><i class="fa-solid fa-user"></i></Span> 
        <Time> <Span><i class="fa-solid fa-calendar-days"></i></Span>{items.time}</Time>
        <Comment> <Span><i class="fa-solid fa-comments"></i></Span>{items.comment}</Comment>
        </Center>
        <Admin>{items.year}</Admin>
        <Title>{items.title}</Title>
        <Desc>{items.desc}</Desc>
       </BlogDetail>
      
    </Container>
  )
}
