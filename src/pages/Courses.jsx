import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import AllCourse from '../components/AllCourse'
import Footer from '../components/Footer'
import Navber from '../components/Navber'
import Newsletter from '../components/Newsletter'
import Prices from '../components/Prices'
import SiteName from '../components/SiteName'
import { priceItem } from '../data'

const Container = styled.div``
const HomePage = styled.div`
background: url("https://scintillating-smakager-860376.netlify.app/images/back.webp");
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
`
const AllPrice = styled.div`
display: flex;
flex-wrap: wrap;
background: #f8f8f8;
`
export const Center = styled.div`
text-align: center;
padding: 9rem 2rem 4rem 2rem;
color: #fff;
`
export const H4 = styled.h4`
font-size: 1.2rem;
`
export const H1 = styled.h1`
font-size: 6rem;
font-weight: 400;
`

export default function Courses() {
 const [path, setPath] = useState(null);
  const location = useLocation();
  useEffect(()=> {
    setPath(location.pathname)
  }, [location.pathname])

  return (
    <Container>
    <HomePage>
        <SiteName />
        <Navber />
        <Center>
        <H4>Home{path}</H4>
        <H1>Explore Courses</H1>
        </Center>
        </HomePage>
        <AllPrice>
        {priceItem.map(item => {
            return (
                <Prices
                items={item}
                 />
            )
        })}
        </AllPrice>
        <AllCourse />
        <Newsletter />
        <Footer />
    </Container>
  )
}
