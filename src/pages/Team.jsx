import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Count from '../components/Count'
import Footer from '../components/Footer'
import Navber from '../components/Navber'
import Newsletter from '../components/Newsletter'
import { mobile} from '../components/Responsive'
import SiteName from '../components/SiteName'
import { teamData } from '../data'
import { Center, H1, H4 } from './Courses'
import { useLocation } from 'react-router-dom'

const Container = styled.div``
const HomePage = styled.div`
background: url("https://scintillating-smakager-860376.netlify.app/images/back.webp");
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
`
const TeamData = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 2rem 4rem;
background: #f8f8f8;
${mobile({flexWrap: "wrap"})}
`
export const SocialIcons = styled.div`
position: absolute;
top: 100px;
left: 29px;
visibility: hidden;
`
const Icon = styled.div`
width: 40px;
height: 40px;
color: #fff;
border-radius: 50%;
line-height: 40px;
text-align: center;
background: #222;
margin-bottom: .5rem;
cursor: pointer;
transition: .7s;

&:hover {
    background: #1eb2a6;
}
${mobile({
  width: "30px", 
  height: "30px", 
  lineHeight: "30px", 
  margin: ".3rem 0"
  })}
`
const Teams = styled.div`
width: 23%;
margin: 2rem 0;
position: relative;
transition: .7s;
cursor: pointer;

&:hover{
    ${SocialIcons}{
        visibility: visible;
    }
}
${mobile({width: "45%", margin: "1rem 0"})}
`


const Image = styled.img`
width: 100%;
height: 50%;
object-fit: cover;
${'' /* ${largeDevice({height: "15rem"})} */}
`
const Data = styled.div`
text-align: center;
padding: 2rem;
background: #fff;

&:hover{
    background: #1eb2a6;
    color: #fff;
}
`
const H3 = styled.h3``
const P = styled.p`
margin: 1rem 0;
font-weight: 300;
`

export default function Team() {
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
                    <H1>Team</H1>
                </Center>
            </HomePage>
            <TeamData>
                {teamData.map(item => {
                    return (
                        <Teams>
                            <Image src={item.image} alt='' />
                            <Data>
                                <H3>{item.name}</H3>
                                <P>{item.profesion}</P>
                            </Data>
                            <SocialIcons>
                                <Icon><i class="fa-brands fa-facebook-f"></i></Icon>
                                <Icon><i class="fa-brands fa-instagram"></i></Icon>
                                <Icon><i class="fa-brands fa-twitter"></i></Icon>
                                <Icon><i class="fa-brands fa-youtube"></i></Icon>
                            </SocialIcons>
                        </Teams>
                    )
                })}
            </TeamData>
            <Count />
            <Newsletter />
            <Footer />
        </Container>
    )
}

