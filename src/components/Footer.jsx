import React from 'react'
import styled from 'styled-components'
import { Desc } from './Testimonials'
import { Span } from './SiteName'
import { mobile } from './Responsive'

const Container = styled.div`
padding: 2rem 4rem;
`
const FooterData = styled.div`
display: flex;
justify-content: space-around;
${mobile({flexWrap: "wrap"})}
`
const Title = styled.div`
flex-basis: 23%;
${mobile({flexBasis: "45%"})}

`
const H6 = styled.h6`
margin: .3rem 0;
font-size: 1rem;
color: #1eb2a6;
`
const Expolre = styled.div`
flex-basis: 23%;
${mobile({flexBasis: "45%", marginLeft: "2rem"})}

`
const H4 = styled.h4`
font-size: 1.2rem;
font-weight: 500;
margin-bottom: 2rem;
`
const RightArrow = styled.span`
color: #1eb2a6;
margin-right: .7rem;
`
const H1 = styled.h1``
const P = styled.p`
margin: 1rem 0;
`
const FooterIcons = styled.div``

const QuickLinks = styled.div`
flex-basis: 23%;
${mobile({flexBasis: "45%"})}
`
const Questions = styled.div`
flex-basis: 23%;
${mobile({flexBasis: "45%", marginLeft: "2rem"})}

`

const FooterTail = styled.div`
padding-top: 2rem;
text-align: center;
`
const Data = styled.p`
margin: 1rem 0;
`

export default function Footer() {
    return (
        <Container>
        <FooterData>
        <Title>
        <H1>ACADEMIC</H1>
                <H6>ONLINE EDUCATION & LEARNING</H6>
                <Desc style={{margin: "1.5rem 0"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</Desc>
                <FooterIcons>
                    <Span><i class="fa-brands fa-facebook-f"></i></Span>
                    <Span><i class="fa-brands fa-instagram"></i></Span>
                    <Span><i class="fa-brands fa-twitter"></i></Span>
                    <Span><i class="fa-brands fa-youtube"></i></Span>
                </FooterIcons>
        </Title>
            <Expolre>
                <H4>Expolre</H4>
                <P><RightArrow><i class="fa-solid fa-right-long"></i></RightArrow>About Us</P>
                <P><RightArrow><i class="fa-solid fa-right-long"></i></RightArrow>Services</P>
                <P><RightArrow><i class="fa-solid fa-right-long"></i></RightArrow>Courses</P>
                <P><RightArrow><i class="fa-solid fa-right-long"></i></RightArrow>Blog</P>
                <P><RightArrow><i class="fa-solid fa-right-long"></i></RightArrow>Contact us</P>
            </Expolre>
            <QuickLinks>
            <H4>Quick Links</H4>
                <P><RightArrow><i class="fa-solid fa-right-long"></i></RightArrow>Contact Us</P>
                <P><RightArrow><i class="fa-solid fa-right-long"></i></RightArrow>Pricing</P>
                <P><RightArrow><i class="fa-solid fa-right-long"></i></RightArrow>Terms & Conditions</P>
                <P><RightArrow><i class="fa-solid fa-right-long"></i></RightArrow>Privacy</P>
                <P><RightArrow><i class="fa-solid fa-right-long"></i></RightArrow>Feedbacks</P>    
            </QuickLinks>
            <Questions> <H4>Have a Questions?</H4>
            <P><RightArrow><i class="fa-solid fa-map"></i></RightArrow>Raiganj, Itahar Uttar Dinajpur, India</P>
                <P><RightArrow><i class="fa-solid fa-phone"></i></RightArrow>+2 392 3929 210</P>
                <P><RightArrow><i class="fa-solid fa-paper-plane"></i></RightArrow>soumyadip@</P>
            </Questions>
            </FooterData>
            <FooterTail>
                <Data>Copyright ©2022 All rights reserved | This template is made with by Soumyadip</Data>
            </FooterTail>
        </Container>
    )
}
