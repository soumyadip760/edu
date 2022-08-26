import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Count from '../components/Count'
import Footer from '../components/Footer'
import Learn from '../components/Learn'
import Navber from '../components/Navber'
import Newsletter from '../components/Newsletter'
import SiteName from '../components/SiteName'
import { useLocation } from 'react-router-dom'
import {H4, H1, Center} from './Courses'

const Container = styled.div``
const HomePage = styled.div`
background: url("https://scintillating-smakager-860376.netlify.app/images/back.webp");
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
`

export default function AboutUs() {
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
        <H1>About Us</H1>
        </Center>
        </HomePage>
        <Learn />
        <Count />
        <Newsletter />
        <Footer />
    </Container>
  )
}

