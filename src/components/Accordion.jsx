import {useState} from 'react'
import styled from 'styled-components'

const Container =styled.div`
width: 70%;
margin: 1rem auto;
`
export const Q = styled.p`
font-size: 1.1rem;
color: #1eb2a6;
`
export const Span = styled.span`
font-size: 1.1rem;
color: #1eb2a6;
`
const Button = styled.button`
width: 100%;
display: flex;
justify-content: space-between;
background: #fff;
border: navajowhite;
padding: 1rem 2rem;
cursor: pointer;
transition: .5s;

&:hover{
    background: #1eb2a6;
}

&:hover{
    ${Span}{
        color: #fff;
    }
    ${Q}{
        color: #fff;
    }
}
`
const Answer = styled.p`
width: 100%;
padding: 1.5rem;
color: #999;
background: #fff;
`

export default function Accordion({item}) {
    const [state, setState] = useState(false);
    return (
        <Container>
            <Button onClick={() => {
              state ? setState(false) : setState(true);
            }}>
                <Q>{item.question}</Q>
                <Span><i class="fa-solid fa-angle-right"></i></Span>
            </Button>
            {state && <Answer>{item.answer}</Answer>}
       </Container>
  )
}
