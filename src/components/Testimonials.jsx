import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from './Responsive'

export const Span = styled.div`
text-align: center;
font-size: 1.5rem;
width: 40px;
height: 40px;
line-height: 40px;
border-radius: 50%;
background: #1eb2a6;
color: #fff;
margin: .2rem 0 1rem 3rem;
`
export const Title = styled.h4`
&:first-child{
font-size: 1.2rem;
}

&:last-child{
font-weight: 400;
color: #1eb2a6;
margin-top: .3rem;
}
`
export const Desc = styled.p`
color: #999;
line-height: 1.5rem;
`

const Container = styled.div`
width: 30%;
background: #fff;
padding: 2rem;
cursor: pointer;
margin: 2rem 0;
transition: .5s;

&:first-child{
    margin-left: 0;
}

&:hover {
    background: #1eb2a6;
    ${Span}{
        background: #fff;
        color: #1eb2a6;
    }
    ${Title}{
        color: #fff;
    }
    ${Desc}{
        color: #fff;
    }
}
${tablet({
 width: "45%",
 margin: "1rem 0"
})}
${mobile({
 width: "100%"
})}
`
const Main = styled.div`
display: flex;
justify-content: space-around;
`
const Left = styled.div`
`
const Right = styled.div`
margin-top: 1rem;

`

const Img = styled.div`
width: 70px;
height: 70px;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 50%;
`

export default function Testimonials({ items }) {
    return (
        <Container>
            <Main>
                <Left>
                    <Img>
                        <Image src={items.image} alt='' />
                    </Img>
                    <Span><i class="fa-solid fa-quote-left"></i></Span>
                </Left>
                <Right>
                    <Title>{items.title}</Title>
                    <Title>MARKETING MANAGER</Title>
                </Right>
            </Main>

            <Desc>{items.desc}</Desc>
        </Container>
    )
}
