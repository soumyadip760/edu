import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { largeDevice, mobile, tablet } from './Responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
padding: 2rem;
${tablet({padding: "1rem"})}
`
const Headers = styled.div`
background-color: hsla(0,0%,100%,.3);
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
${tablet({background: "#1eb2a6", position: "relative"})}
`
const Links = styled.ul`
list-style: none;
display: flex;
padding: 1.8rem 4.3rem;
${tablet({
    flexDirection: "column",
    position: "absolute",
    top: "-600%",
    background: "#1eb2a6",
    width: "100%",
})}
`
const SubLinks = styled.li`
padding: 0 1rem;
cursor: pointer;
color: #fff;
font-weight: 600;
transition: .5s;
&:hover{
    color: #1eb2a6;
}
@media (max-width: 768px){
   &:hover{
    color: #fff;
   }
   margin-top: 1rem;
   transition: none;
}
${mobile({fontSize: "1.2rem"})}
`
const Certificate = styled.div`
background: #1eb2a6;
clip-path: polygon(10% 0,100% 0,100% 100%,0 100%);
padding: 1.8rem 4.3rem;
color: #fff;

${largeDevice({padding: "1.8rem .5rem"})}
`
const P = styled.p``
const Span = styled.span`
margin-right: 1rem;
font-size: 2rem;
color: #fff;
cursor: pointer;
display: none;
${tablet({display: "block"})};
`

export default function Navber() {
    const [state, setState] = useState(false);
    return (
        <Container>
            <Headers>
                 <Links style={{top: state && "100%"}}>
                    <SubLinks><Link to='/' className='link'>Home</Link></SubLinks>
                    <SubLinks><Link to='/Courses' className='link'>Courses</Link></SubLinks>
                    <SubLinks><Link to='/About' className='link'>About</Link></SubLinks>
                    <SubLinks><Link to='/Team' className='link'>Team</Link></SubLinks>
                    <SubLinks><Link to='/Pricing' className='link'>Pricing</Link></SubLinks>
                    <SubLinks><Link to='/Journal' className='link'>Journal</Link></SubLinks>
                    <SubLinks><Link to='/Contact' className='link'>Contact</Link></SubLinks>
                 </Links>

                <Certificate>
                     <P>GET CERTIFICATE</P>
                </Certificate>
                <Span onClick={() => setState(!state)}>{state ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}</Span>
            </Headers>

        </Container>
    )
}
