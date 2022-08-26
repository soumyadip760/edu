import styled from 'styled-components'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Navber from '../components/Navber'
import Newsletter from '../components/Newsletter'
import SiteName from '../components/SiteName'
import { blogData } from '../data'
import { Center, H1, H4 } from './Courses'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Container = styled.div`
background: #f8f8f8;
`
const HomePage = styled.div`
background: url("https://scintillating-smakager-860376.netlify.app/images/back.webp");
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
`

const JournalData = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 2rem 3rem;
`

export default function Pricing() {
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
                    <H1>Blog Posts</H1>
                </Center>
            </HomePage>
            <JournalData>
            {blogData.map(item => {
                return (
                    <Blogs 
                    items={item}
                     />
                )
            })}
            </JournalData>
            <Newsletter />
            <Footer />
        </Container>
    )
}

