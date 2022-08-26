import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navber from '../components/Navber'
import Newsletter from '../components/Newsletter'
import Package from '../components/Package'
import { H1, H5, PriceHead } from '../components/Price'
import SiteName from '../components/SiteName'
import { questionData } from '../data'
import Accordion from '../components/Accordion'
import { Center, H4 } from './Courses'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
background: #f8f8f8;
`
const HomePage = styled.div`
background: url("https://scintillating-smakager-860376.netlify.app/images/back.webp");
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
`
const Questions = styled.div`
padding: 2rem;
`
const Title = styled.h1`
font-size: 7rem;
font-weight: 400;
`




export default function Pricing() {
    const [data, setData] = useState(questionData);
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
                    <Title>Choose The Right Plan</Title>
                </Center>
            </HomePage>
            <Package />
            <Questions>
                <PriceHead>
                    <H5>FAQS</H5>
                    <H1>Frequesntly Ask Question</H1>
                </PriceHead>
                    {data.map(item => {
                        return (
                           <Accordion
                           itemId={item.id}
                           item={item}
                            />
                        )
                    })}
            </Questions>
            <Newsletter />
            <Footer />
        </Container>
    )
}

