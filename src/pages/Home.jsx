import React from 'react'
import styled from 'styled-components'
import SiteName from '../components/SiteName'
import Navber from '../components/Navber'
import Text from '../components/Text'
import Learn from '../components/Learn'
import Counter from '../components/Counter'
import Price from '../components/Price'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import Package from '../components/Package'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Container = styled.div``

export const HomePage = styled.div`
background: url("https://raw.githubusercontent.com/sunil9813/Education-Website-Using-ReactJS/master/public/images/bg.webp");
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
`

export default function Home() {
  return (
    <Container>
    <HomePage>
      <SiteName />
      <Navber />
      <Text />
      </HomePage>
      <Learn />
      <Counter />
      <Price />
      <Testimonial />
      <Blog />
      <Package />
      <Newsletter />
      <Footer />
    </Container>
  )
}
