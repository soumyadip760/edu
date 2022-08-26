import styled from 'styled-components'
import Footer from '../components/Footer'
import Navber from '../components/Navber'
import Newsletter from '../components/Newsletter'
import { mobile } from '../components/Responsive'
import SiteName from '../components/SiteName'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Center, H1} from './Courses'

const Container = styled.div`
background: #f8f8f8;
`
const HomePage = styled.div`
background: url("https://scintillating-smakager-860376.netlify.app/images/back.webp");
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
`
const Box = styled.div`
display: flex;
justify-content: space-between;
padding: 4rem;
background: #fff;

${mobile({flexWrap: "wrap"})}
`
const Left = styled.div`
width: 50%;
${mobile({width: "100%"})}
`
const Right = styled.div`
width: 40%;
${mobile({width: "100%", marginTop: "2rem"})}

`

const H4 = styled.h4`
font-size: 1.5rem
`
const P = styled.p``
const H5 = styled.h5`
font-size: 1.2rem;
margin-bottom: 1rem;
`
const H6 = styled.h6`
font-size: 1rem;
color: #999;
`

const AddressBox = styled.div`
display: flex;
justify-content: space-between;
margin: 1.5rem 0;
`
const Address = styled.div``
const Email = styled.div``
const Phone = styled.div``
const Form = styled.form``

const Input = styled.input`
width: 100%;
margin-top: 1rem;
outline: none;
padding: .5rem 1rem;
&:first-child {
    width: 45%;
}
&:nth-child(2) {
    width: 45%;
    margin-left: 10%;
}
`
const TextArea = styled.textarea`
margin-top: 1rem;
width: 100%;
padding: 1rem;
outline: none;
`
const Button = styled.button`
border: none;
padding: .7rem 1rem;
background: #1eb2a6;
color: #fff;
font-weight: 600;
margin-top: 1rem;
border-radius: 5px;
`
const Title = styled.h4`
font-size: 1.2rem;
`


export default function Contact() {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14410.56402703718!2d88.17791709999999!3d25.4502629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1661327491765!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
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
                    <Title>Home{path}</Title>
                    <H1>Contact Us</H1>
                    </Center>
                    
                </HomePage>
            <Box>
                <Left>
                <iframe src={map} style={{width: "100%", height: "100%", border: "none"}}></iframe>
                </Left>
                <Right>
                    <H4>Contact us</H4>
                    <P>We're open for any suggestion or just to have a chat</P>
                    <AddressBox>
                        <Address>
                            <H5>ADDRESS:</H5>
                            <H6>Itahar 733128, Uttar Dinajpur</H6>
                        </Address>
                        <Email>
                        <H5>Email:</H5>
                            <H6>soumyadip@</H6></Email>
                        <Phone>
                        <H5>PHONE:</H5>
                            <H6>+ 1235 2355 98</H6></Phone>
                    </AddressBox>
                    <Form>
                        <Input placeholder="Name" />
                        <Input placeholder="Email" />
                        <Input placeholder="Subject" />
                        <TextArea placeholder="Create a message here..." />
                    </Form>
                    <Button>Send Message</Button>
                </Right>
            </Box>
            <Newsletter />
                <Footer />
        </Container>
      )
}
